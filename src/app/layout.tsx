import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Chrome origin trial token for WebMCP, valid on https://wongnicholas.vercel.app until 2027-03-30.
// Public by design: Chrome only honours it on that origin.
const WEBMCP_ORIGIN_TRIAL =
  "AoN0YkH8vQMg7/s29596ddguOW4JprkEKXR+qzQiWU52NIcWL9B+o2WC8qS8WSLeJCDsZidxuphcIlcIWKMoNAkAAABXeyJvcmlnaW4iOiJodHRwczovL3dvbmduaWNob2xhcy52ZXJjZWwuYXBwOjQ0MyIsImZlYXR1cmUiOiJXZWJNQ1AiLCJleHBpcnkiOjE4MDYzNjQ4MDB9";

export const metadata: Metadata = {
  title: "Nicholas's Portfolio",
  description: "Created by Wong Yi Zhen Nicholas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="origin-trial" content={WEBMCP_ORIGIN_TRIAL} />
      </head>
      <body className={`${inter.className} bg-[#FCFAFA]`}>{children}</body>
    </html>
  );
}
