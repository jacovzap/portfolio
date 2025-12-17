import React, { useEffect, useState, useCallback, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [ready, setReady] = useState(false);

  const positionRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const dragStartX = useRef(0);
  const dragStartPosition = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const getSpeedPxPerSecond = useCallback(() => {
    if (!scrollerRef.current) return 50;
    const scrollWidth = scrollerRef.current.scrollWidth / 2;
    const duration = speed === "fast" ? 20 : speed === "normal" ? 40 : 80;
    return scrollWidth / duration;
  }, [speed]);

  useEffect(() => {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready || !scrollerRef.current) return;

    const animate = (currentTime: number) => {
      if (!scrollerRef.current) return;

      if (lastTimeRef.current === null) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      if (!isDraggingRef.current && !isPausedRef.current) {
        const speedPx = getSpeedPxPerSecond();
        const movement =
          direction === "left" ? -speedPx * deltaTime : speedPx * deltaTime;
        positionRef.current += movement;

        const halfWidth = scrollerRef.current.scrollWidth / 2;
        if (direction === "left" && positionRef.current <= -halfWidth) {
          positionRef.current += halfWidth;
        } else if (direction === "right" && positionRef.current >= 0) {
          positionRef.current -= halfWidth;
        }
      }

      scrollerRef.current.style.transform = `translateX(${positionRef.current}px)`;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [ready, direction, getSpeedPxPerSecond]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const handleDragStart = useCallback((clientX: number) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartX.current = clientX;
    dragStartPosition.current = positionRef.current;

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
    isPausedRef.current = false;
  }, []);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDraggingRef.current) return;

    const deltaX = clientX - dragStartX.current;
    positionRef.current = dragStartPosition.current + deltaX;
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    setIsDragging(false);
    isPausedRef.current = true;

    if (scrollerRef.current) {
      const halfWidth = scrollerRef.current.scrollWidth / 2;
      while (positionRef.current < -halfWidth) {
        positionRef.current += halfWidth;
      }
      while (positionRef.current > 0) {
        positionRef.current -= halfWidth;
      }
    }

    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
      lastTimeRef.current = null;
    }, 1000);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      handleDragStart(e.clientX);
    },
    [handleDragStart]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      handleDragMove(e.clientX);
    },
    [handleDragMove]
  );

  const handleMouseUp = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  const handleMouseLeave = useCallback(() => {
    if (isDraggingRef.current) {
      handleDragEnd();
    }
  }, [handleDragEnd]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      handleDragStart(e.touches[0].clientX);
    },
    [handleDragStart]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleDragMove(e.touches[0].clientX);
    },
    [handleDragMove]
  );

  const handleTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        isDragging ? "cursor-grabbing" : "cursor-grab",
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          isDragging && "select-none"
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
                {["AWS", "S3", "SNS/SQS"].includes(item.name) ? (
                  <img
                    src={`/icons/color/${
                      item.name === "SNS/SQS"
                        ? "sns"
                        : item.name === "S3"
                          ? "s3"
                          : "aws"
                    }.svg`}
                    alt={`${item.name} icon`}
                    className="h-10 w-10 flex-shrink-0"
                  />
                ) : (
                  <img
                    src={`https://cdn.simpleicons.org/${item.iconSlug}`}
                    alt={`${item.name} icon`}
                    className="h-10 w-10 flex-shrink-0"
                  />
                )}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
