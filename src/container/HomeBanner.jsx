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

function HomeBanner() {
  return (
    <div className="bg-black text-white">
      <Section
        image="/HeroPageImage/support-banner-v3.jpg"
        title="WE'RE HERE TO HELP!"
        description="Get answers to frequently asked questions, check server status, and engage with a support expert"
        buttonText="VISIT SUPPORT"
      />
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
  );
}

export default HomeBanner;
