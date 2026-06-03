import { useEffect } from "react";

const useOutsiteClick = (ref, callback, isOpen) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback, isOpen]);
};

export default useOutsiteClick;