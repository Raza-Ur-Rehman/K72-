import HomeBottomText from "../components/Home/HomeBottomText";
import HomeHeroText from "../components/Home/HomeHeroText";
import Video from "../components/Home/video";
import Navbar from "../components/Navigation/Navbar";
import NavbarPage from "../components/Navigation/NavbarPage";

const Home = () => {
  return (
    <div className="text-white">
      <div className="overflow-y-auto-hidden">
        <NavbarPage />
      </div>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <div className="h-screen w-screen fixed">
          <Video />
        </div>
        <div className="h-screen pt-20 lg:pt-0 w-screen relative pb-5 overflow-hidden flex flex-col justify-between">
          <HomeHeroText />
          <HomeBottomText />
        </div>
      </div>
    </div>
  );
};

export default Home;
