import HomeHero from "../component/Hero/HomeHero";
import HomeNavbar from "../component/NavBar/HomeNavbar";
import HomeFooter from "../component/Footer/HomeFooter";
import HomeCards from "./HomeCard";
import HomeBanner from "./HomeBanner";

function HomeContainer() {
  return (
    <>
      <HomeHero />
      <HomeCards />
      <HomeBanner />
    </>
  );
}

export default HomeContainer;
