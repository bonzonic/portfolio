import { createContext, useState } from "react";
import { PopupProps } from "../data/popup";

export const usePopup = (): {
  isOpen: boolean;
  popupValue: PopupProps;
  openPopup: (popupValue: PopupProps) => void;
  closePopup: () => void;
} => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupValue, setPopupValue] = useState<PopupProps>({
    title: "",
    description: "",
    imageSrcs: [],
    buttons: [],
    comments: [],
  });

  const openPopup = (popupValue: PopupProps) => {
    setIsOpen(true);
    setPopupValue(popupValue);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    popupValue,
    openPopup,
    closePopup,
  };
};

export const PopupContext = createContext<(popup: PopupProps) => void>(
  () => undefined
);
