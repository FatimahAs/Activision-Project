import { Link } from "react-router";
import { AlignJustify } from "lucide-react";

const Navbar = [
  {
    title: "GAMES",
    link: "/",
  },
  {
    title: "ABOUT",
    link: "/about",
  },
  {
    title: "CAREERS",
    link: "/careers",
  },
  {
    title: "SUPPORT",
    link: "/support",
  },
];

function HomeNavbar() {
  return (
    <>
      <div className="bg-zinc-800/60 flex flex-row  items-center  border-1 border-b-[#fff] h-15 lg:justify-around md:justify-around">
        <div className="flex flex-row  gap-30 lg:gap-11 lg:flex md:flex md:gap-11">
          <AlignJustify
            className="left-3  lg:hidden md:hidden"
            color="#ffffff"
            stroke-width="3"
          />
          <img
            src="/HeroPageImage/activision_logo_white-text.png"
            alt="activision_logo_white"
            className=" w-30 h-8"
          />

          <nav className="content-center">
            <ul className="hidden lg:flex flex-row gap-10 text-blue-50 md:flex">
              {Navbar.map((item) => (
                <Link to={item.link}>
                  <li className="hover:text-amber-300">{item.title}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>

        <div className="text-[#fff] hidden lg:flex flex-row gap-5 md:flex">
          <div className="content-center">
            <button className="bg-blue-500/30 font-bold border-3 border-blue-500 rounded-full w-25 h-10 hover:border-blue-400 ">
              SIGN UP
            </button>
          </div>
          <button className=" hover:font-bold">LOGIN</button>
        </div>
      </div>
    </>
  );
}

export default HomeNavbar;
