import Video from "./video.jsx";

const HomeHeroText = () => {
  return (
    <div className="font-[lausanne-300] pt-3 text-center">
      <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[9vw] ">
        The spark for
        </div>
      <div className="text-[9.5vw] flex justify-center items-start uppercase leading-[9vw] ">
        all
        <div className="h-[7vw] w-[16vw]  rounded-full overflow-hidden ">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[6.5vw] ">creative</div>
    </div>
  );
};

export default HomeHeroText;
