import HomeBottomText from "../components/Home/HomeBottomText.jsx";
import HomeHeroText from "../components/Home/HomeHeroText.jsx";
import Video from "../components/Home/video.jsx";
import Navbar from "../components/Navigation/Navbar.jsx";
import NavbarPage from "../components/Navigation/NavbarPage.jsx";

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
