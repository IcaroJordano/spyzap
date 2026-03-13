import { useEffect } from "react";

export default function useBackRedirect(url: string) {
  useEffect(() => {
    const handleBack = () => {
      window.location.href = url;
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, [url]);
}
