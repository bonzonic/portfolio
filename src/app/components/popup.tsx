import React, { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { PopupProps } from "../data/popup";
import type { Comment } from "./comment";
import { Carousel } from "./carousel";
import ButtonWithLink from "./button-with-link";
import { DarkContext } from "../utils/main";

const CLOSE_DURATION = 220;
const TYPING_SPEED_MS = 8;
const FIRST_COMMENT_DELAY_MS = 600;
const BETWEEN_COMMENT_DELAY_MS = 400;

const TypedComment = ({
  comment,
  onDone,
}: {
  comment: Comment;
  onDone: () => void;
}) => {
  const [typedText, setTypedText] = useState("");
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setTypedText(comment.comment.slice(0, index));
      if (index >= comment.comment.length) {
        clearInterval(interval);
        onDoneRef.current();
      }
    }, TYPING_SPEED_MS);
    return () => clearInterval(interval);
  }, [comment.comment]);

  const isDone = typedText.length >= comment.comment.length;

  return (
    <div className="flex items-start gap-3 comment-appear">
      <Image
        className="shrink-0"
        src={`/profile-icons/${comment.profileIcon}`}
        alt={`Profile icon of ${comment.name}`}
        width={40}
        height={40}
      />
      <div>
        <span>
          <b>{comment.name} </b>
        </span>
        <span>
          {typedText}
          {!isDone && <span className="typing-cursor">|</span>}
        </span>
      </div>
    </div>
  );
};

const Popup = ({
  popup,
  isOpen,
  closePopup,
}: {
  popup: PopupProps;
  isOpen: boolean;
  closePopup: () => void;
}) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [visibleComments, setVisibleComments] = useState(0);
  const darkMode = useContext(DarkContext);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      dialog.current?.close();
      setIsClosing(false);
      closePopup();
    }, CLOSE_DURATION);
  }, [closePopup]);

  // Open dialog
  useLayoutEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
    }
  }, [isOpen]);

  // Reset and start comment chain when popup opens/closes
  useEffect(() => {
    if (!isOpen) {
      setVisibleComments(0);
      return;
    }
    if (popup.comments.length === 0) return;
    const timer = setTimeout(() => setVisibleComments(1), FIRST_COMMENT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isOpen, popup.comments.length]);

  // Advance to next comment after current one finishes typing
  const handleCommentDone = useCallback(() => {
    const timer = setTimeout(() => {
      setVisibleComments((v) => (v < popup.comments.length ? v + 1 : v));
    }, BETWEEN_COMMENT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [popup.comments.length]);

  // ESC key
  useEffect(() => {
    const el = dialog.current;
    const handleCancel = (e: Event) => {
      e.preventDefault();
      handleClose();
    };
    el?.addEventListener("cancel", handleCancel);
    return () => el?.removeEventListener("cancel", handleCancel);
  }, [handleClose]);

  return (
    <dialog
      className={`backdrop:bg-black backdrop:opacity-50 backdrop:cursor-pointer h-9/10 w-9/10 xl:w-7/10 m-auto border-0${isClosing ? " popup-closing" : ""}`}
      ref={dialog}
      onClick={(e) => {
        if (dialog.current) {
          const rect = dialog.current.getBoundingClientRect();
          const isInDialog =
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width;
          if (!isInDialog) handleClose();
        }
      }}
    >
      <div className="h-full flex flex-col lg:flex-row">
        <div className="h-5/13 lg:w-7/13 w-full lg:h-full bg-black">
          {isOpen && <Carousel imageSrcs={popup.imageSrcs} />}
        </div>
        <div className="relative h-8/13 lg:w-6/13 lg:h-full w-full bg-top-background-white dark:bg-space-gray py-4 overflow-y-auto dark:text-white">
          <div className="px-4 mb-10">
            <div className="flex items-center gap-3">
              <Image
                src="/profile-icons/wong-nicholas.png"
                alt="It's a me, Nicholas!"
                width={40}
                height={40}
              />
              <p>
                <b>wong.nicholas_</b>
              </p>
            </div>
            <p className="mt-4">
              <b>{popup.title}</b>
            </p>
            <p className="mt-2 whitespace-pre-line">{popup.description}</p>
          </div>
          <div className="flex-grow border-t border-black opacity-30 dark:border-white dark:opacity-70"></div>
          <ButtonWithLink items={popup.buttons} />
          <div className="flex-grow border-t border-black opacity-30 dark:border-white dark:opacity-70"></div>
          <div className="flex flex-col gap-4 px-4 mt-6">
            <p>Comments:</p>
            {popup.comments.slice(0, visibleComments).map((comment) => (
              <TypedComment
                key={comment.comment}
                comment={comment}
                onDone={handleCommentDone}
              />
            ))}
          </div>
          <button
            className="absolute top-4 right-4 cursor-pointer"
            onClick={handleClose}
            aria-label="Close"
          >
            <Image
              src={
                darkMode ? "/component/close-dark.png" : "/component/close.png"
              }
              alt="Close"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Popup;
