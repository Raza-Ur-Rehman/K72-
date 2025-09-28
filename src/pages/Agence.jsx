import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { imageArray } from "../utility/imageArray.js";

const Agence = () => {
  console.log(imageArray);

  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers:true,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        start: "top 3%",
        end: "top -132%",
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elam) => {
          let imageIndex;
          if (elam.progress < 1) {
            imageIndex = Math.floor(elam.progress * imageArray.length );
          } else {
            imageIndex = imageArray.length - 1;
          }

          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="parent text-black">
      {/* page 1 */}
      <div id="page1" className=" py-1 ">
        {/* image  */}
        <div
          ref={imageDivRef}
          className="  h-[20vw] w-[15vw] absolute top-60 left-[30vw] rounded-3xl overflow-hidden "
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[Lausanne-500]">
          {/* HEADING TEXT*/}
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[19vw]">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>
          {/* SUB TEXT */}
          <div className="pl-[40%] mt-20">
            <p className="text-6xl ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      {/* page 2 */}
      <div id="page2" className="h-screen bg-amber-400"></div>
    </div>
  );
};

export default Agence;
