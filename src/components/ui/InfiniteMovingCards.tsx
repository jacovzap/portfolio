import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface InfiniteMovingCardsProps {
  items: {
    name: string;
    category: string;
    iconSlug: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "normal",
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[280px] max-w-full flex-shrink-0 rounded-2xl border border-white/10 bg-zinc-900/80 px-6 py-5 shadow-lg shadow-black/50 backdrop-blur-sm"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="relative z-20 flex items-center gap-3">
                <div className="flex flex-col gap-1.5 flex-1">
                  <span className="text-2xl font-bold leading-tight text-white">
                    {item.name}
                  </span>
                  <span className="text-xs font-medium text-zinc-400">
                    {item.category}
                  </span>
                </div>
                <img
                  src={`https://cdn.simpleicons.org/${item.iconSlug}`}
                  alt={`${item.name} icon`}
                  className="h-10 w-10 flex-shrink-0"
                />
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
