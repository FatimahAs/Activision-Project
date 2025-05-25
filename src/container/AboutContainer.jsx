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
    logo: "/aboutimage/logo_beenox.png",
  },
  {
    logo: "/career/logo-4.webp",
  },
  {
    logo: "/career/logo-5.webp",
  },
  {
    logo: "/aboutimage/logo-toysforbob.png",
  },
  {
    logo: "/aboutimage/logo_atvi-shanghai-studio.png",
  },
  {
    logo: "/career/logo-7.webp",
  },
];

const team = [
  {
    teamName: "Rob Kostich",
    role: "President",
    image: "/aboutimage/rob-kostich.jpg",
  },
  {
    teamName: "Josh Taub",
    role: "Chief Operating Officer",
    image: "/aboutimage/josh-taub.jpg",
  },
  {
    teamName: "Suzie Carr",
    role: "Chief People Officer",
    image: "/aboutimage/suzie-carr.jpg",
  },
  {
    teamName: "Terri Durham",
    role: "SVP & General Counsel",
    image: "/aboutimage/terri-durham.jpg",
  },
  {
    teamName: "David Stohl",
    role: "Head of Development, Call of Duty",
    image: "/aboutimage/dave-stohl.jpg",
  },
  {
    teamName: "Pat Kelly",
    role: "Head of Creative, Call of Duty",
    image: "/aboutimage/patt-kelly.jpg",
  },
  {
    teamName: "Tyler Bahl",
    role: "SVP, Head of Marketing",
    image: "/aboutimage/tyler-bahl.jpg",
  },
  {
    teamName: "Natasha Tatarchuk",
    role: "SVP, Chief Technology Officer",
    image: "/aboutimage/natasha.jpg",
  },
  {
    teamName: "Matt Cox",
    role: "GM, Call of Duty",
    image: "/aboutimage/matt-cox.jpg",
  },
];

const games = [
  {
    gameName: "Call of Duty Black Ops 6",
    role: "Mature 17+",
    image: "/aboutimage/BO6-FOB.jpg",
  },
  {
    gameName: "Call of Duty®: Warzone",
    role: "Mature 17+",
    image: "/aboutimage/wz-boxart.jpg",
  },
  {
    gameName: "Call of Duty Modern Warfare III",
    role: "Mature 17+",
    image: "/aboutimage/mwiii-boxart.jpg",
  },
  {
    gameName: "Crash Team Rumble",
    role: "Mature 10+",
    image: "/aboutimage/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg",
  },
  {
    gameName: "Tony Hawk's™ Pro Skater™ 1 + 2",
    role: "TEEN",
    image: "/aboutimage/thps-1-2-boxart.png",
  },
  {
    gameName: "Call of Duty®: Mobile",
    role: "Mature 17+",
    image: "/aboutimage/codm-boxart.jpg",
  },
  {
    gameName: "Sekiro®: Shadows Die Twice",
    role: "Mature 17+",
    image: "/aboutimage/sekiro-boxart.jpg",
  },
  {
    gameName: "SPYRO® Reignited Trilogy",
    role: "Mature 10+",
    image: "/aboutimage/spyro-boxart.png",
  },
];


const Section = ({
  image,
  title,
  description,
  buttonText,
  reverse,
  children,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-between bg-black text-white`}
    >
      <div className="md:w-1/2 w-full h-64 md:h-96">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 w-full p-6 md:p-12 space-y-4">
        <h2 className="text-xl font-bold uppercase">{title}</h2>
        <p className="text-lg">{description}</p>
        <button
          className="border border-white rounded-full hover:bg-white hover:text-black transition"
          style={{ padding: "8px" }}
        >
          {buttonText}
        </button>
        {children}
      </div>
    </div>
  );
};
const TeamList = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6 text-sm">
    <div>GAME DESIGN</div>
    <div>ART & ANIMATION</div>
    <div>BRAND MANAGEMENT</div>
    <div>PRODUCTION</div>
    <div>QUALITY ASSURANCE</div>
    <div>CUSTOMER SUPPORT</div>
    <div>STUDIO OPERATIONS</div>
    <div>PROGRAMMING</div>
    <div>FINANCE & ACCOUNTING</div>
    <div>HUMAN RESOURCES</div>
  </div>
);





function AboutContainer() {
  return (
    <>
      <div className="">
        <img
          src="/aboutimage/atvi-about-hero.jpg"
          className=" w-full bg-cover  bg-no-repeat"
        />

        <div className="bg-[#060505] text-wrap" style={{ padding: "10px" }}>
          {/* OUR MISSION */}
          <div className="text-center">
            <h1 className="text-2xl text-white" style={{ padding: "10px" }}>
              OUR MISSION
            </h1>
            <hr className="text-white" style={{ padding: "10px" }} />

            <p className="text-white text-sm" style={{ padding: "10px" }}>
              At Activision, we strive to create the most iconic brands in
              gaming and entertainment. We’re driven by our mission to deliver
              unrivaled gaming experiences for the world to enjoy, together.
              Home to iconic franchises like Call of Duty®, Crash Bandicoot™,
              and Tony Hawk’s™ Pro Skater™, we're a global leader in interactive
              entertainment. Our goal? Delight millions with innovative, fun,
              and engaging games. With a legacy of success, we're pushing
              boundaries with cutting-edge technology and inclusive practices.
              Join us in delivering unforgettable entertainment and seize the
              chance to level up your career.
            </p>
          </div>

          {/* ACTIVATE YOUR FUTURE */}

          <div className="text-center">
            <h1
              className="text-2xl text-white"
              style={{ paddingTop: "60px", paddingBottom: "10px" }}
            >
              ACTIVATE YOUR FUTURE
            </h1>
            <hr className="text-white" style={{ padding: "10px" }} />

            <p
              className="text-white text-sm leading-8"
              style={{ padding: "10px" }}
            >
              We unite our global player community with epic entertainment,
              focusing on three core pillars: <br />
              People - fostering talent and learning opportunities. <br />
              Innovation - consistently pushing to iterate and evolve.
              <br />
              Excellence - delivering high-quality games, consistently year in
              and year out. <br />
              Join us at Activision, where inclusivity thrives, and together we
              shape the future of entertainment for our players. Explore open
              roles now!
            </p>
          </div>

          {/* OUR VALUES */}

          <div className="text-center flex flex-col justify-center items-center ">
            <h1
              className="text-2xl text-white"
              style={{ paddingTop: "90px", paddingBottom: "10px" }}
            >
              OUR VALUES
            </h1>
            <hr className="text-white w-full" style={{ padding: "10px" }} />
            <img className=" w-[60%]" src="/aboutimage/atvi-values.png" />
            <div style={{ padding: "10px" }}>
              <button className=" text-white bg-blue-500/30 text-sm border-3 border-blue-500 rounded-full w-40 h-11 hover:border-blue-400 ">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* OUR LEADERSHIP TEAM */}

          <div
            className="text-center flex flex-col justify-center items-center "
            style={{ padding: "10px" }}
          >
            <h1
              className="text-2xl text-white"
              style={{ paddingTop: "90px", paddingBottom: "10px" }}
            >
              OUR LEADERSHIP TEAM
            </h1>
            <hr className="text-white w-full" style={{ padding: "10px" }} />
            <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-8 ">
              {team.map((item) => (
                <div className="flex flex-col justify-center items-center">
                  <img className="rounded-full w-50" src={item.image} />
                  <h4
                    className="text-white text-center"
                    style={{ paddingTop: "10px" }}
                  >
                    {item.teamName}
                  </h4>
                  <p className="text-white text-center">{item.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* OUR GAMES */}

          <div
            className=" flex flex-col justify-center items-center "
            style={{ padding: "10px" }}
          >
            <h1
              className="text-2xl text-white"
              style={{ paddingTop: "90px", paddingBottom: "20px" }}
            >
              OUR GAMES
            </h1>
            <hr className="text-white w-full" style={{ padding: "10px" }} />
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-8 ">
              {games.map((item) => (
                <div className="flex flex-col justify-center items-center">
                  <img className="rounded-2xl w-60 h-full" src={item.image} />
                  <h4
                    className="text-white text-left"
                    style={{ paddingTop: "10px" }}
                  >
                    {item.gameName}
                  </h4>
                  <p className="text-white text-left">{item.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* OUR STUDIOS */}

          <div
            className="text-center bg-[#060505] h-full w-full"
            style={{ padding: "20px" }}
          >
            <h1 className="text-amber-50 font-bold text-2xl">OUR STUDIOS</h1>
          </div>
          <hr className="text-white w-full" style={{ padding: "10px" }} />
          <div
            className="flex flex-row  justify-center items-center bg-[#060505]"
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

          {/* Banner */}

      <div className="bg-black text-white" style={{borderTop:'1px solid #fff'}}>
           <Section
        image="/HeroPageImage/joinus-banner-img-spyro.png"
        title="HAVE FUN"
        description="Learn More About Job Opportunities"
        buttonText="JOIN US"
        reverse
        >
        <div>
          <h3 className="text-lg font-bold uppercase mt-4">Our Teams</h3>
          <TeamList />
        </div>
      </Section>
    </div>


 
        </div>
      </div>
    </>
  );
}

export default AboutContainer;
