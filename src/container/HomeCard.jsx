import React from "react";

const CardHome = [
  {
    title: "Stitch Returns in Season 04",
    date: "May 20, 2025",
    image: "/public/HeroPageImage/BO6-SEASON-04-NARRATIVE-TOUT (1).jpg",
    content: "",
  },
  {
    title: "Support C.O.D.E. Military Appreciation Month",
    date: "May 15, 2025",
    image: "/public/HeroPageImage/CODE-MAM-GY6-TOUT.jpg",
    content:
      "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack and more.",
  },
  {
    title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
    date: "May 09, 2025",
    image: "/public/HeroPageImage/THPS-ELREY-IMAGE-TOUT.jpg",
    content: "",
  },
  {
    title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
    date: "May 09, 2025",
    image: "/public/HeroPageImage/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
    content: "",
  },
  {
    title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
    date: "May 09, 2025",
    image: "/public/HeroPageImage/CODE-MAM-2025-IMAGE-TOUT.webp",
    content: "",
  },
  {
    title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
    date: "May 09, 2025",
    image: "/public/HeroPageImage/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
    content: "",
  },
];

export default function HomeCards() {
  return (
    <>
      <div
        className="bg-gray-900 flex flex-col justify-center items-center gap-4"
        style={{ paddingTop: "20px" }}
      >
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Latest News & Articles
        </h2>
        <div className="border-1 w-[80%] border-amber-50"></div>
        <div className="flex flex-row  flex-wrap justify-center items-center gap-10">
          <h3 className=" text-amber-50 text-2xl">ALL NEWS</h3>
          <img
            src="/HeroPageImage/activision-logo-small.svg"
            className="w-30"
          />
          <img src="/HeroPageImage/cod-logo.svg" className="w-30" />
          <img
            src="/HeroPageImage/PC_LOGO_PRIMARY_NEG_241121.svg"
            className="w-30"
          />
          <img src="/HeroPageImage/crash-bandicoot-logo.png" className="w-30" />
        </div>
        <div className="border-1 w-[80%] border-amber-50"></div>
      </div>
      <div
        className="flex flex-wrap gap-5 justify-around bg-gray-900 "
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        {CardHome.map((item) => (
          <div className="bg-gray-800 rounded-3xl shadow-md w-90 ">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-xl"
            />

            <div style={{ padding: "20px" }}>
              <p className="text-sm text-gray-400 mb-2">{item.date}</p>
              <h3 className="text-md  font-semibold text-amber-50 ">
                {item.title}
              </h3>
              <hr
                className="my-2 text-white"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              />
              <div className="mt-4">
                <button className="text-white hover:underline">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="bg-gray-900 flex justify-around items-center"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <button className="text-white border-1 border-amber-50 rounded-2xl w-50 h-10 hover:bg-amber-50/10">
          View All
        </button>
      </div>
    </>
  );
}
