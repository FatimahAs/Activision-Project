import React from "react";

const games = [
  {
    title: "CALL OF DUTY: BLACK OPS 6",
    image: "/supportImage/BO6-home-tile2.jpg",
  },
  {
    title: "ACCOUNT & SECURITY",
    image: "/supportImage/account-security-en-silver-tall-2x.jpg",
  },
  {
    title: "CALL OF DUTY: WARZONE",
    image: "/supportImage/WZV-home-tile.jpg",
  },
  {
    title: "CALL OF DUTY: MOBILE",
    image: "/supportImage/codmobile-module.jpg",
  },
  {
    title: "TONY HAWK'S PRO SKATER 3 + 4",
    image: "/supportImage/THPS34-home-tile.png",
  },
  {
    title: "CALL OF DUTY: MODERN WARFARE III",
    image: "/supportImage/MWIII-home-tile-1c.png",
  },
  {
    title: "CALL OF DUTY: MODERN WARFARE II",
    image: "/supportImage/MWII-tall-tile.jpg",
  },
  {
    title: "CALL OF DUTY: MODERN WARFARE",
    image: "/supportImage/MW_module_001.jpg",
  },
  {
    title: "CALL OF DUTY: BLACK OPS COLD WAR",
    image: "/supportImage/cold-war-home-page-tile.jpg",
  },
];

export default function SupportCards() {
  return (
    <div
      className="min-h-screen flex flex-row justify-center items-center bg-gray-900"
      style={{ padding: "12px" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {games.map((game, idx) => (
          <div
            key={idx}
            className="relative rounded-lg overflow-hidden shadow-lg group"
          >
            <div className="text-[#aaa7a791]" style={{ padding: "7px" }}>
              <h3 className="text-sm font-semibold uppercase">{game.title}</h3>
            </div>
            <div className="overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
