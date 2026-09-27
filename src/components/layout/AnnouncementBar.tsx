import { useEffect, useState } from "react";
import { announcements } from "@/data/mock-offers";

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % announcements.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-ink text-ink-foreground">
      <div className="container-aval flex h-9 items-center justify-center">
        <p key={index} className="animate-rise text-center text-[0.6875rem] tracking-[0.14em] uppercase md:text-xs">
          {announcements[index]}
        </p>
      </div>
    </div>
  );
}
