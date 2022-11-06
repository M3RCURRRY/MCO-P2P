import { useEffect } from "react";

function useOtside(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {

    const clickHandler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        console.log("Clicked outside");
      }
    }

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    }

  }, [ref])
}

export default useOtside;