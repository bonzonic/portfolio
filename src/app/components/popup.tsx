import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { PopupProps } from "../data/popup";

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

  useLayoutEffect(() => {
    if (dialog.current) {
      if (isOpen) {
        dialog.current.showModal();
      } else {
        dialog.current.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog
      className="backdrop:bg-black backdrop:opacity-50 backdrop:cursor-pointer h-9/10 w-7/10 m-auto"
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
      <div className="flex flex-row h-full">
        <div className="grow-6 bg-black"></div>
        <div className="grow-7 bg-top-background-white py-4">
          <div>
            
          </div>

        </div>
      </div>
      <button
        className="absolute top-4 right-4 cursor-pointer"
        onClick={closePopup}
        aria-label="Close"
      >
        <Image src="/component/close.png" alt="Close" width={25} height={25} />
      </button>
      {/* <div className="flex flex-col gap-4 p-8">
          <h2>{popup.title}</h2>
          <p>{popup.description}</p>
          <div className="flex flex-col gap-4">
            {popup.imageSrcs.map((imageSrc) => (
              <img key={"test"} src={`/popup/${imageSrc}`} alt={imageSrc} />
            ))}
          </div>
          <div className="flex flex-row gap-4">
            {popup.buttons.map((button) => (
              <a
                key={"test"}
                href={button.link}
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  <img src={button.icon} alt={button.text} />
                  {button.text}
                </button>
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {popup.comments.map((comment) => (
              <div key={"test"} className="flex flex-row gap-2">
                <img src={`/popup/${comment.profileIcon}`} alt={comment.name} />
                <div>
                  <p>{comment.comment}</p>
                  <p>{comment.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      {/* {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Popup Title</h2>
            <p>This is a popup message.</p>
            <button onClick={togglePopup}>Close Popup</button>
          </div>
        </div>
      )} */}
    </dialog>
  );
};

export default Popup;
