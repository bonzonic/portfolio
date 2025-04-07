import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { PopupProps } from "../data/popup";
import { Carousel } from "./carousel";
import ButtonWithLink from "./button-with-link";
import { Comment } from "./comment";
import { DarkContext } from "../utils/main";

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
  const darkMode = useContext(DarkContext);

  useLayoutEffect(() => {
    if (dialog.current) {
      if (isOpen) {
        dialog.current.showModal();
      } else {
        dialog.current.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleCancel = (e: Event) => {
      e.preventDefault(); // Prevent ESC from closing the dialog
      closePopup(); // Call the closePopup function
    };

    const currentDialog = dialog.current;
    if (currentDialog) {
      currentDialog.addEventListener("cancel", handleCancel);
    }

    return () => {
      if (currentDialog) {
        currentDialog.removeEventListener("cancel", handleCancel);
      }
    };
  }, []);

  return (
    // Border-0 since natively it has a white border
    <dialog
      className="backdrop:bg-black backdrop:opacity-50 backdrop:cursor-pointer h-9/10 w-9/10 xl:w-7/10 m-auto border-0"
      ref={dialog}
      onClick={(e) => {
        if (dialog.current) {
          // Check if the click is outside the dialog
          const rect = dialog.current.getBoundingClientRect();
          const isInDialog =
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width;
          if (!isInDialog) {
            closePopup();
          }
        }
      }}
    >
      <div className="h-full flex flex-col lg:flex-row">
        <div className="h-5/13 lg:w-7/13 w-full lg:h-full bg-black">
          {/* By putting this validation, React destroys and creates this component everytime */}
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
            {popup.comments.map((comment) => (
              <Comment comment={comment} key={comment.comment} />
            ))}
          </div>
          <button
            className="absolute top-4 right-4 cursor-pointer"
            onClick={closePopup}
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
