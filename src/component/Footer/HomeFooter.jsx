import { Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer
        className="flex flex-row justify-around items-center bg-[#0c0c0c] text-white h-full w-full"
        style={{ padding: "20px", borderTop: "1px solid #fff" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10 ">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold mb-4">FOLLOW US</h3>
            <div className="flex flex-row gap-3 ">
              <Facebook className="w-8 h-8" color="#ffffff" stroke-width="2" />
              <Twitter className="w-8 h-8" color="#ffffff" stroke-width="2" />
              <Youtube className="w-8 h-8" color="#ffffff" stroke-width="2" />
              <Linkedin className="w-8 h-8" color="#ffffff" stroke-width="2" />
              <Instagram className="w-8 h-8" color="#ffffff" stroke-width="2" />
            </div>
            <div className="flex flex-row gap-4 ">
              <img
                src="/HeroPageImage/esrb-e-m.jpg"
                alt="ESRB"
                className="h-12"
              />
              <img
                src="/HeroPageImage/ESRB_updated.jpg"
                alt="Privacy"
                className="h-12"
              />
            </div>
          </div>

          <div className="flex flex-col ">
            <h3 className="font-bold mb-4">POPULAR GAMES</h3>
            {[
              "Call of Duty",
              "Tony Hawk Pro Skater",
              "Crash Bandicoot",
              "Spyro",
              "Sekiro",
            ].map((game, i) => (
              <p key={i} className="text-sm hover:underline cursor-pointer">
                {game} <span className="inline-block ml-1">↗</span>
              </p>
            ))}
          </div>

          <div className="flex flex-col ">
            <h3 className="font-bold mb-4">COMPANY</h3>
            {["Press", "Research", "Activision Blizzard", "Contact Us"].map(
              (link, i) => (
                <p key={i} className="text-sm hover:underline cursor-pointer">
                  {link} <span className="inline-block ml-1">↗</span>
                </p>
              )
            )}
          </div>

          <div className="flex flex-col ">
            <h3 className="font-bold mb-4">LEGAL</h3>
            {[
              "Terms of Use",
              "Privacy Policy",
              "Cookie Policy",
              "Cookie Settings",
              "Online Safety",
              "Applicant Privacy Policy",
              "Your Privacy Choices",
            ].map((link, i) => (
              <p key={i} className="text-sm hover:underline cursor-pointer">
                {link}
                {link === "Your Privacy Choices" && (
                  <span className="inline-block ml-1 text-blue-400">✔️</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </footer>

      <div className="flex flex-col justify-center items-center gap-3  bg-[#0c0c0c] h-40">
        <img
          src="/HeroPageImage/tn_us-flag.gif"
          alt="USA Flag"
          className="w-5 "
        />
        <img
          src="/HeroPageImage/activision_logo_white-text.png"
          alt="logo"
          className="w-30 "
        />
        <p className="text-xs text-white">
          Copyright 2025 Activision Publishing, Inc.
        </p>
      </div>
    </>
  );
}
