import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const videoSlides = [
  {
    video: "/videos/bo6-gameplay-reveal-trailer-atvi.mp4",
    title: "/public/HeroPageImage/black-ops-6-full-logo.png",
    subtitle: "Forced to go rogue. Hunted from Within. This is Black Ops 6.",
    buttontext: "PLAY WITH GAME PASS",
    smallimage: "/public/HeroPageImage/cod-hub-esrb-en.png",
  },
  {
    video: "/videos/call-of-duty-mobile.mp4",
    title: "/public/HeroPageImage/PC_LOGO_PRIMARY_NEG_241121.svg",
    subtitle:
      "Available for Xbox Series X|S, Xbox One, PlayStation 4 and 5, Steam, Battle.net, Microsoft PC Store, and Nintendo Switch. ",
    buttontext: "PRE-ORDER NOW",
    smallimage: "/public/HeroPageImage/esrb-rating-en.svg",
  },
  {
    video: "/videos/crash_team_rumble.mp4",
    title: "/public/HeroPageImage/crash-team-rumble-logo.png",
    subtitle:
      "Get ready to dash, jump, slide, and bounce  into an all-new way to Crash",
    buttontext: "GET NOW",
    smallimage: "/public/HeroPageImage/Ratingsymbol_e10.png",
  },
  {
    video: "/videos/THPS3+4_Reveal_15_Channel_ESRB_16x9_ATVI_Header.mp4",
    title: "/public/HeroPageImage/cod-mobile-logo-v2.png",
    subtitle: "Available Now For iOS and Android!",
    buttontext: "DOWNLOAD NOW",
    smallimage: "/public/HeroPageImage/cod-hub-esrb-en.png",
  },
  {
    video: "/videos/tony-hawk-pro-1-2.mp4",
    title: "/public/HeroPageImage/Tony_Hawk-ProSkater1+2-logo.png",
    subtitle: "Available Now For PS4™, XBOX One® & PC!",
    buttontext: "GET NOW",
    smallimage: "/public/HeroPageImage/footer-esrb-thps-en.png",
  },
];

function HomeHero() {
  const swiperRef = useRef(null);
  return (
    <>
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          ref={swiperRef}
          autoplay={{ delay: 8000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-full"
        >
          {videoSlides.map((item, index) => (
            <SwiperSlide key={index}>
              <video
                className="w-full h-full object-cover"
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
              ></video>

              <div
                className="absolute z-20 top-1/3 left-10 text-white max-w-xl"
                style={{ left: "10%" }}
              >
                <img src={item.title} className="w-90" />
                <p className="text-2xl text-left">{item.subtitle}</p>
                <div className=" flex gap-4" style={{ marginTop: "20px" }}>
                  <button
                    className="bg-blue-700/40 text-white  rounded-full font-bold"
                    style={{
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      border: "1px solid #211da5",
                    }}
                  >
                    {item.buttontext}
                  </button>
                  <button
                    className="border border-white px-4 py-2 rounded-full text-white "
                    style={{
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                    }}
                  >
                    VISIT SITE
                  </button>
                </div>
              </div>

              <div className="absolute bottom-2 right-2 z-20">
                <img src={item.smallimage} alt="rating" className="w-28" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default HomeHero;
