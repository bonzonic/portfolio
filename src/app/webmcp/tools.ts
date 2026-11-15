/**
 * WebMCP tools: let AI agents in the browser read this portfolio as structured
 * data instead of scraping the page. Spec: https://webmachinelearning.github.io/webmcp/
 */
import {
  achievements,
  bpPopup,
  klMiniHackPopup,
  oWastePopup,
  PopupProps,
  projects,
} from "../data/popup";
import {
  CERTIFICATIONS,
  EDUCATION,
  EMAIL,
  LINKS,
  PROFILE,
  SKILLS,
} from "../data/profile";
import { stripEmphasis, workExperiences } from "../data/work";

interface ModelContextTool {
  name: string;
  description: string;
  inputSchema?: Record<string, unknown>;
  annotations?: { readOnlyHint?: boolean; consequentialHint?: boolean };
  execute: (input: Record<string, unknown>) => Promise<string> | string;
}

interface ModelContext {
  registerTool: (
    tool: ModelContextTool,
    options?: { signal?: AbortSignal },
  ) => unknown;
  unregisterTool?: (name: string) => void;
}

// Chrome now exposes document.modelContext; earlier builds and polyfills use navigator.modelContext
const getModelContext = (): ModelContext | undefined =>
  (document as unknown as { modelContext?: ModelContext }).modelContext ??
  (navigator as unknown as { modelContext?: ModelContext }).modelContext;

const SECTIONS = ["Tools", "Work", "Projects", "Achievements", "Contact"];

const absolute = (path: string) => new URL(path, window.location.origin).href;

const mailto = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${EMAIL}${query ? `?${query}` : ""}`;
};

const cleanText = (text: string) =>
  text
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .trim();

const toEntry = (item: PopupProps) => ({
  title: item.title.trim(),
  description: cleanText(item.description),
  links: item.buttons.map((button) => ({
    label: button.text,
    url: button.link,
  })),
});

const json = (value: unknown) => JSON.stringify(value, null, 2);

const contact = () => ({
  email: EMAIL,
  emailLink: mailto("Hello Nicholas"),
  github: LINKS.github,
  linkedin: LINKS.linkedin,
  resume: absolute(LINKS.resume),
  portfolio: window.location.origin,
});

const tools: ModelContextTool[] = [
  {
    name: "get_profile_summary",
    description:
      "Get a summary of Nicholas Wong (Wong Yi Zhen Nicholas), a full-stack developer: who he is, education, skills, certifications, and how to contact him. Includes his email so you can reach him right away.",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
    execute: () =>
      json({
        name: PROFILE.name,
        role: PROFILE.role,
        yearsOfExperience: PROFILE.yearsOfExperience,
        summary: PROFILE.description,
        currentRole: `${workExperiences[0].title} at ${workExperiences[0].company} (${workExperiences[0].duration})`,
        education: EDUCATION,
        skills: SKILLS,
        certifications: CERTIFICATIONS,
        contact: contact(),
        otherTools:
          "Use list_work_experience, list_projects and list_achievements for details, or email_nicholas to start an email.",
      }),
  },
  {
    name: "list_work_experience",
    description:
      "List every job Nicholas Wong has held, newest first, with title, company, dates, technologies and key achievements.",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
    execute: () =>
      json(
        workExperiences.map((work) => ({
          title: work.title,
          company: work.company,
          about: work.companyBlurb,
          duration: work.duration,
          technologies: work.technologies,
          highlights: work.highlights.map(stripEmphasis),
        })),
      ),
  },
  {
    name: "list_projects",
    description:
      "List the projects Nicholas Wong has built, with descriptions and demo/source links. Includes hackathon and university builds.",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
    execute: () =>
      json({
        projects: projects(false).map(toEntry),
        hackathonAndUniversityBuilds: [
          klMiniHackPopup(false),
          bpPopup(false),
          oWastePopup,
        ].map(toEntry),
      }),
  },
  {
    name: "list_achievements",
    description:
      "List Nicholas Wong's achievements: awards, hackathon placings, a published research paper, and cloud certifications.",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
    execute: () =>
      json({
        achievements: achievements(false).map(toEntry),
        certifications: CERTIFICATIONS,
        academic: EDUCATION.map((e) => `${e.degree}, ${e.school}: ${e.highlights.join(", ")}`),
      }),
  },
  {
    name: "email_nicholas",
    description:
      "Open a new email to Nicholas Wong in the user's mail app, pre-filled with a subject and message. The user still reviews and sends it. Use this when the user wants to contact, hire or interview Nicholas.",
    inputSchema: {
      type: "object",
      properties: {
        subject: { type: "string", description: "Email subject line" },
        message: { type: "string", description: "Email body" },
      },
    },
    annotations: { consequentialHint: true },
    execute: (input) => {
      const subject = typeof input?.subject === "string" ? input.subject : undefined;
      const message = typeof input?.message === "string" ? input.message : undefined;
      window.location.href = mailto(subject, message);
      return `Opened a draft email to ${EMAIL}. The user can review and send it from their mail app.`;
    },
  },
  {
    name: "show_section",
    description: "Scroll the portfolio page to a section so the user can see it.",
    inputSchema: {
      type: "object",
      properties: {
        section: { type: "string", enum: SECTIONS },
      },
      required: ["section"],
    },
    execute: (input) => {
      const section = String(input?.section ?? "");
      const el = document.getElementById(section);
      if (!el) return `Unknown section "${section}". Choose one of: ${SECTIONS.join(", ")}.`;
      el.scrollIntoView({ behavior: "smooth" });
      return `Scrolled to the ${section} section.`;
    },
  },
];

/** Registers the tools and returns a cleanup function. No-op when WebMCP isn't available. */
export function registerPortfolioTools(): () => void {
  const modelContext = getModelContext();
  if (!modelContext) return () => undefined;

  const controller = new AbortController();
  for (const tool of tools) {
    const warn = (error: unknown) =>
      console.warn(`WebMCP: could not register ${tool.name}`, error);
    // registerTool throws in some builds and returns a promise in others
    try {
      Promise.resolve(
        modelContext.registerTool(tool, { signal: controller.signal }),
      ).catch(warn);
    } catch (error) {
      warn(error);
    }
  }

  return () => {
    controller.abort();
    // Older implementations ignore the signal and need an explicit unregister
    for (const tool of tools) {
      try {
        Promise.resolve(modelContext.unregisterTool?.(tool.name)).catch(
          () => undefined,
        );
      } catch {
        // already unregistered via the abort signal
      }
    }
  };
}
