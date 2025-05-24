import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const videoSlides = [
  "/videos/bo6-gameplay-reveal-trailer-atvi.mp4",
  "/videos/call-of-duty-mobile.mp4",
  "/videos/crash_team_rumble.mp4",
  "/videos/THPS3+4_Reveal_15_Channel_ESRB_16x9_ATVI_Header.mp4",
  "/videos/tony-hawk-pro-1-2.mp4",
];

function HomeHero() {
  const swiperRef = useRef(null);
  return (
    <>
      <div className="relative w-full h-[90vh] overflow-hidden">
        {/* Swiper فيديوهات */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          ref={swiperRef}
          autoplay={{ delay: 8000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-full"
        >
          {videoSlides.map((video, index) => (
            <SwiperSlide key={index}>
              <video
                className="w-full h-full object-cover"
                src={video}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* المحتوى فوق الفيديو */}
        <div className="absolute z-20 top-1/3 left-10 text-white max-w-xl">
          <h1 className="text-4xl font-extrabold">
            CALL OF DUTY <br />
            <span className="text-orange-500">BLACK OPS 6</span>
          </h1>
          <p className="mt-4 text-lg">
            Forced to go rogue. Hunted from Within. <br />
            This is Black Ops 6.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-full font-bold">
              PLAY WITH GAME PASS
            </button>
            <button className="border border-white px-4 py-2 rounded-full text-white">
              VISIT SITE
            </button>
          </div>
        </div>

        {/* الصورة أسفل اليمين */}
        <div className="absolute bottom-2 right-2 z-20">
          <img
            src="/HeroPageImage/cod-hub-esrb-en.png"
            alt="rating"
            className="w-28"
          />
        </div>
      </div>
    </>
  );
}

export default HomeHero;
