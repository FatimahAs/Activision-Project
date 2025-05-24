import SupportCards from "./SupportCard";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const imageSlides = [
  {
    image: "/public/supportImage/BO6_S3R_hero.jpg",
    title: "/public/supportImage/BO6-S3R-logo-lockup.png",
    list1: " CHECK OUT WHAT'S NEW IN SEASON 03 RELOADED",
    list2: " Browse the support page",
  },
  {
    image: "/public/supportImage/WZV-home-banner-v3.jpg",
    title: "/public/supportImage/WZ-logo-wh.png",
    list1: " WARZONE INSTALLATION AND SETUP",
    list2: " Browse the support page",
  },
  {
    image: "/public/supportImage/THPS34_home_01.jpg",
    title: "/public/supportImage/THPS34_LOGO_NEG.png",
    list1: " Tony Hawk’s Pro Skater 3 + 4 FAQ",
    list2: " Tony Hawk’s Pro Skater 3 + 4 Code Support",
  },
  {
    image: "/public/supportImage/MWIII-Hero-ban-beta.png",
    title: "/public/supportImage/MWIII-logo-1a.png",
    list1: "MODERN WARFARE III INSTALLATION AND SETUP",
    list2: " Browse the support page",
  },
  {
    image: "/public/supportImage/MWII-PS-HERO.jpg",
    title: "/public/supportImage/MWII-logo-2023.png",
    list1: " MODERN WARFARE II INSTALLATION AND SETUP",
    list2: " Browse the support page",
  },
];

function SupportContainer() {
  const swiperRef = useRef(null);
  return (
    <>
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          ref={swiperRef}
          autoplay={{ delay: 8000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-full"
        >
          {imageSlides.map((item, index) => (
            <SwiperSlide key={index}>
              <img className="w-full h-full object-cover" src={item.image} />

              {/* المحتوى فوق الفيديو */}
              <div
                className="absolute z-20 top-1/3 left-10 text-white max-w-xl"
                style={{ left: "10%" }}
              >
                <img src={item.title} className="w-90" />
                <p className="text-2xl text-left">{item.subtitle}</p>
                <div
                  className="flex flex-col gap-4"
                  style={{ marginTop: "20px" }}
                >
                  <div className="inline-flex gap-4   items-center">
                    <img src="/public/supportImage/icon_game.png" />
                    <p>{item.list1}</p>
                  </div>
                  <div className="inline-flex gap-4  items-center">
                    <img src="/public/supportImage/icon_support.png" />
                    <p>{item.list2}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SupportCards />
    </>
  );
}

export default SupportContainer;
