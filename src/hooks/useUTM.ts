import { useEffect } from "react";

export default function useUTM() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const utms = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "gclid",
      "fbclid",
    ];

    utms.forEach((param) => {
      const value = params.get(param);

      if (value) {
        localStorage.setItem(param, value);
      }
    });
  }, []);
}
