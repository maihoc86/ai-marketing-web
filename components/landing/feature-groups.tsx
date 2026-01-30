"use client";

import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import FeatureSlideItem from "./feature-slide-item";
import type { FeatureDetail } from "./feature-row";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

interface Props {
  groups: FeatureDetail[][];
  iconBg?: string;
  iconColor?: string;
}

export default function FeatureGroups(props: Props) {
  const { groups = [], iconBg, iconColor } = props;
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);
  const slidesCount = groups.length;

  if (!groups || groups.length === 0) return null;

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        pagination={{ type: "progressbar" }}
        onBeforeInit={(swiper) => {
          swiper.navigation?.init();
          swiper.navigation?.update();
        }}
        speed={500}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSlideChange={(s) =>
          setActive(((s as any).realIndex ?? (s as any).activeIndex) as number)
        }
      >
        {groups.map((group, slideIdx) => (
          <SwiperSlide key={slideIdx}>
            <div className="flex flex-col gap-4 p-1">
              {group.map((item, innerIdx) => (
                <FeatureSlideItem
                  key={`${slideIdx}-${innerIdx}`}
                  nameKey={item.nameKey}
                  descKey={item.descKey}
                  Icon={item.icon}
                  iconBg={iconBg ?? "#F9FAFB"}
                  iconColor={iconColor ?? "#374151"}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-between gap-4 mt-8">
        <button
          aria-label="Previous"
          disabled={active <= 0}
          className={cn(
            "size-9 rounded-full bg-white shadow-md flex items-center justify-center z-10 text-gray-700 hover:bg-gray-100",
            active <= 0 && "opacity-40 pointer-events-none",
          )}
          onClick={() => {
            swiperRef.current?.swiper.slidePrev();
          }}
          style={{
            backgroundColor: iconBg,
          }}
        >
          <ArrowLeft
            className="size-4"
            style={{
              color: iconColor,
            }}
          />
        </button>

        <div className=" flex-1 flex items-center justify-center">
          {/* Progress Bar */}
          <div className="w-full max-w-xs">
            <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full transition-transform will-change-transform"
                style={{
                  transformOrigin: "left",
                  transform:
                    slidesCount > 0
                      ? `scaleX(${((active + 1) / slidesCount).toFixed(3)})`
                      : "scaleX(0)",
                  backgroundColor: iconColor,
                }}
              />
            </div>
          </div>
        </div>

        <button
          aria-label="Next"
          disabled={active >= slidesCount - 1}
          className={cn(
            "size-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100",
            active >= slidesCount - 1 && "opacity-40 pointer-events-none",
          )}
          onClick={() => {
            swiperRef.current?.swiper.slideNext();
          }}
          style={{
            backgroundColor: iconBg,
          }}
        >
          <ArrowRight
            className="size-4"
            style={{
              color: iconColor,
            }}
          />
        </button>
      </div>
    </div>
  );
}
