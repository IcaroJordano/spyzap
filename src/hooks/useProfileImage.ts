import { useEffect, useState } from "react";

export default function useProfileImage() {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("profileImage");

    if (saved) {
      setImage(saved);
    } else {
      setImage("https://placehold.co/120");
    }
  }, []);

  return image;
}
