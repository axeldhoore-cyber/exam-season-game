import { useEffect, useState } from "react";

export default function useDynamicHero() {
  const [image, setImage] = useState(null);
  const [fade, setFade] = useState(false);

  function getImageForTime(date) {
    const h = date.getHours();
    const m = date.getMinutes();
    const t = h + m / 60;

    if (t >= 5 && t < 7) return "/hero/sunrise.jpg";
    if (t >= 7 && t < 10) return "/hero/morning.jpg";
    if (t >= 10 && t < 12) return "/hero/almost_noon.jpg";
    if (t >= 12 && t < 16) return "/hero/noon.jpg";
    if (t >= 16 && t < 19) return "/hero/sunset.jpg";
    if (t >= 19 && t < 21) return "/hero/blue_hour.jpg";
    return "/hero/night.jpg";
  }

  useEffect(() => {
    function updateImage() {
      const now = new Date();
      const next = getImageForTime(now);

      setFade(true);
      setTimeout(() => {
        setImage(next);
        setFade(false);
      }, 300);
    }

    updateImage();
    const interval = setInterval(updateImage, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return { image, fade };
}
