import { createContext, useState } from "react";
import { PopupProps } from "../data/popup";
import { useEffect } from "react";

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

/**
 * Use dark mode hook
 * @returns {boolean} darkMode
 */
export default function useDarkMode(): boolean {
  /**
   * Check if dark mode is enabled
   * @returns {boolean}
   */
  const isDarkMode = (): boolean => localStorage.getItem("darkMode") === "true";

  const [darkMode, setDarkMode] = useState(isDarkMode());

  useEffect(() => {
    const handleChangeStorage = () => {
      setDarkMode(isDarkMode);
    };

    window.addEventListener("storage", handleChangeStorage);
    return () => window.removeEventListener("storage", handleChangeStorage);
  }, []);

  return darkMode;
}

export const DarkContext = createContext<boolean>(false);
