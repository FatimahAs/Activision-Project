import { Heart } from "lucide-react";

const image = [
  {
    ima: "/career/EVPIconssubitem11-1710455685013.webp",
  },
  {
    ima: "/career/EVPIconssubitem12-1710455727924.webp",
  },
  {
    ima: "/career/EVPIconssubitem13-1710455855824.webp",
  },
  {
    ima: "/career/EVPIconssubitem14-1710456001039.webp",
  },
  {
    ima: "/career/EVPIconssubitem15-1710456129634.webp",
  },
  {
    ima: "/career/EVPIconssubitem16-1710456257523.webp",
  },
  {
    ima: "/career/EVPIconssubitem17-1710456307621.webp",
  },
  {
    ima: "/career/EVPIconssubitem18-1710456364531.webp",
  },
  {
    ima: "/career/EVPIconssubitem19-1710456408214.webp",
  },
];

const CardCareer = [
  {
    image: "/career/1691566582196_PenFactory-1665997299565.webp",
    title: "Our Locations",
  },
  {
    image: "/career/1691566670572_PenFactory2-1665997596145.webp",
    title: "DE&I",
  },
  {
    image: "/career/1691566841083_EarlyCareersAP-1666643219491.webp",
    title: "Early Careers",
  },
  {
    image: "/career/Capture4-1716042103068.webp",
    title: "Mission & Talent Brand ",
  },
];

const logos = [
  {
    logo: "/career/logo-1.webp",
  },
  {
    logo: "/career/logo-2.webp",
  },
  {
    logo: "/career/logo-3.webp",
  },
  {
    logo: "/career/logo-4.webp",
  },
  {
    logo: "/career/logo-5.webp",
  },
  {
    logo: "/career/logo-6.webp",
  },
  {
    logo: "/career/logo-7.webp",
  },
  {
    logo: "/career/logo-8.webp",
  },
  {
    logo: "/career/logo-9.webp",
  },

  {
    logo: "/career/logo-11.webp",
  },
  {
    logo: "/career/logo-12.webp",
  },
];

const JobCard = [
  {
    title: "Senior Gameplay Engineer - High Moon Studios",
    role: "Programming/Software Engineering  R024108",
    description:
      "Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, related to game...",
  },
  {
    title: "Lead Analytics Engineer",
    role: "Data Analytics  R024154",
    description:
      "You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi..",
  },
  {
    title: "Expert Animation Engineer - Infinity Ward",
    role: "Programming/Software Engineering   R024307",
    description:
      "Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow th...",
  },
  {
    title: "Senior AI Animator - Infinity Ward",
    role: "Animation R022959",
    description:
      "Use motion capture and hand-keyed techniques to create high-fidelity NPC Animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio...",
  },
  {
    title: "Level Designer",
    role: "Game/Level Design   R025221",
    description:
      "Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to...",
  },
];

function SearchJobContainer() {
  return (
    <>
      {/* HeroSection */}
      <div className="relative w-full h-full">
        <video
          width="full"
          height="500"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/career/EVPCareersiteherovideo5-1710271231185.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            className="bg-[#333] border-1 border-[#628f07] text-amber-50 w-40 hover:bg-[#628f07]"
            style={{ padding: "7px" }}
          >
            SEARCH JOB
          </button>
        </div>
      </div>

      {/* careerSection */}
      <div
        className="text-center bg-[#171717] h-full w-full"
        style={{ padding: "20px" }}
      >
        <h1 className="text-amber-50 font-bold text-2xl">
          START YOUR GAME CHANGING CAREER
        </h1>
      </div>
      <div
        className="flex flex-row justify-center items-center bg-[#171717]"
        style={{ padding: "20px", paddingBottom: "40px" }}
      >
        <div className="grid grid-col-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
          {image.map((item) => (
            <div>
              <img src={item.ima} />
            </div>
          ))}
        </div>
      </div>

      {/* ExplorOurSection */}
      <div className="bg-[#171717]  text-center" style={{ padding: "20px" }}>
        <h1 className="text-amber-50 font-bold text-2xl">EXPLORE OUR WORLD</h1>
      </div>
      <div className="h-full">
        <div
          className=" flex flex-wrap gap-5 justify-center bg-[#171717] "
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          {CardCareer.map((item) => (
            <div className="bg-[#101010] rounded-3xl shadow-md w-90 h-full ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl"
              />

              <div style={{ padding: "20px" }}>
                <h3 className="text-md text-center font-semibold text-amber-50 ">
                  {item.title}
                </h3>

                <div
                  className="text-center"
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <button
                    className="text-white rounded-full border-1 border-amber-50 hover:underline"
                    style={{
                      paddingLeft: "25px",
                      paddingRight: "25px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VideoSection */}
      <div className="relative w-full h-full">
        <video
          width="full"
          height="500"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/career/game-ap-look.mp4" type="video/mp4" />
        </video>
      </div>

      {/* logoSection */}

      <div
        className="text-center bg-[#171717] h-full w-full"
        style={{ padding: "20px" }}
      >
        <h1 className="text-amber-50 font-bold text-2xl">OUR STUDIOS</h1>
      </div>
      <div
        className="flex flex-row bg-[#171717]"
        style={{ padding: "20px", paddingBottom: "40px" }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-5">
          {logos.map((item) => (
            <div className="flex flex-row justify-center items-center">
              <img src={item.logo} width={"40%"} />
            </div>
          ))}
        </div>
      </div>

      {/* JobSection */}
      <div className="bg-[#171717]" style={{ padding: "20px" }}>
        <h1 className="text-amber-50 text-center font-bold text-2xl">
          Be the First to Apply
        </h1>
        <div className="flex justify-center items-center">
          <div
            className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2  justify-center items-center gap-5"
            style={{ padding: "20px" }}
          >
            {JobCard.map((item) => (
              <div
                className="relative bg-white rounded-2xl shadow-md w-[100%] max-w-md h-full"
                style={{ padding: "20px" }}
              >
                <div className="absolute top-4 right-4 text-[#292929]">
                  <Heart className="w-6 h-6" />
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p
                  className="text-sm text-gray-500"
                  style={{ paddingTop: "10px" }}
                >
                  {item.role}
                </p>
                <p
                  style={{ paddingTop: "20px", paddingBottom: "20px" }}
                  className="text-gray-600 mb-4"
                >
                  {item.description}
                </p>

                <button
                  className="bg-[#333] border-1 border-[#628f07] text-amber-50 w-40 hover:bg-[#628f07]"
                  style={{ padding: "7px" }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="bg-[#0c0c0c] text-wrap"
        style={{ padding: "30px", borderTop: "1px solid #fff" }}
      >
        <h3
          className="text-amber-50 font-bold text-xl"
          style={{ paddingBottom: "10px" }}
        >
          Equal Opportunity Employer
        </h3>
        <p className="text-amber-50">
          Activision is an Equal Opportunity Employer. All qualified applicants
          will receive consideration for employment without regard to race,
          color, religion, sex, sexual orientation, gender identity, gender
          expression, national origin, protected veteran status, or any other
          basis protected by applicable law, and will not be discriminated
          against on the basis of disability. Equal Employment Opportunity
          Policy While we strive to provide competitive offers to successful
          candidates, new hire compensation is negotiable.
        </p>
        <h3
          className="text-amber-50 font-bold text-xl"
          style={{ paddingTop: "15px", paddingBottom: "10px" }}
        >
          Accommodation Request
        </h3>
        <p className="text-amber-50">
          We are committed to working with and providing reasonable assistance
          to individuals with physical and mental disabilities. If you are a
          disabled individual requiring an accommodation to apply for an open
          position, please email your request to
          accommodationrequests@activisionblizzard.com. General employment
          questions cannot be accepted or processed here. Thank you for your
          interest. This site uses cookies. By continuing to browse the site you
          are agreeing to our use of cookies. Find out more here.
        </p>
      </div>
    </>
  );
}

export default SearchJobContainer;
