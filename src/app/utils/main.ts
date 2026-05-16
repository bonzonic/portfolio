import { createContext, useState, useCallback } from "react";
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

  const openPopup = useCallback((popupValue: PopupProps) => {
    setIsOpen(true);
    setPopupValue(popupValue);
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

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

export default function useDarkMode(): { darkMode: boolean; isInitializing: boolean } {
  const isDarkMode = (): boolean => localStorage.getItem("darkMode") === "true";

  const [darkMode, setDarkMode] = useState(isDarkMode());
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    setIsInitializing(false);

    const handleChangeStorage = () => {
      setDarkMode(isDarkMode);
    };

    window.addEventListener("storage", handleChangeStorage);
    return () => window.removeEventListener("storage", handleChangeStorage);
  }, []);

  return { darkMode, isInitializing };
}

export const DarkContext = createContext<boolean>(false);
