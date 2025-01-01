import { useEffect } from "react";

const useDisableShortcutsAndRightClick = () => {
  useEffect(() => {
    const disableShortcutsAndRightClick = (event: Event) => {
      // Check for Ctrl+Shift+C or F12
      if (
        (event as KeyboardEvent).ctrlKey &&
        (event as KeyboardEvent).shiftKey &&
        ((event as KeyboardEvent).key === "C" ||
          (event as KeyboardEvent).key === "c" ||
          (event as KeyboardEvent).keyCode === 123) /* F12 key code */
      ) {
        event.preventDefault();
      }
    };

    const disableRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("keydown", disableShortcutsAndRightClick);
    document.addEventListener("contextmenu", disableRightClick);

    // Attempt to prevent F12 key default behavior
    document.addEventListener("keydown", (event) => {
      if (event.key === "F12" || event.keyCode === 123) {
        event.preventDefault();
        return false;
      }
    });

    return () => {
      document.removeEventListener("keydown", disableShortcutsAndRightClick);
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);
};

export default useDisableShortcutsAndRightClick;
