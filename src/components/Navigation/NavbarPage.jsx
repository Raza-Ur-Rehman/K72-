import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext.jsx";

const NavbarPage = () => {
  const nav = useRef(null);
  const time = () => {
    const now = new Date();
    return now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear();
  };
  const fullNavLinkRef = useRef(null);
  const fullScreenNavRef = useRef(null);

  const { navOpen, setNavOpen } = useContext(NavbarContext);

  const gsapAnimation = () => {
    const tl = gsap.timeline();
    tl.from(".stairing", {
      delay: 0.2,
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });
    tl.from(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: -0.2,
      },
    });
    tl.from(".navLink" , {
      opacity: 0,
      
    })
  }
  useGSAP(()=>{
      if(navOpen){
        gsap.to(".fullScreenNav",{
          display: "block"
        })
        gsapAnimation();
      }else{
        gsap.to(".fullScreenNav", {
          display:"none"
        })
      }
    },[navOpen])
  
  return (
    <div
      ref={fullScreenNavRef}
      id="fullScreenNav"
      className=" fullScreenNav h-screen  text-white overflow-y-hidden flex-col justify-between "

    >
      <div className=" h-full overflow-hidden w-full flex fixed ">
        <div className=" stairing h-full w-1/5 bg-black"></div>
        <div className=" stairing h-full w-1/5 bg-black"></div>
        <div className=" stairing h-full w-1/5 bg-black"></div>
        <div className=" stairing h-full w-1/5 bg-black"></div>
        <div className=" stairing h-full w-1/5 bg-black"></div>
      </div>
      <div
        ref={fullNavLinkRef}
        className="relative h-full flex flex-col justify-between p-4 overflow-y-hidden"
      >
        {/* logo and close icon */}
        <div className=" navLink flex justify-end h-full  ">
          {/* <div className="p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="125"
              height="60"
              viewBox="0 0 103 44"
              className="fill-white "
            >
              <path
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div> */}
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="h-32 w-32 relative cursor-pointer group py-4 navIcon  "
          >
            <div className="h-44 w-1  -rotate-45 origin-top absolute bg-white Icon "></div>
            <div className="h-44 w-1 right-0 rotate-45 origin-top absolute bg-white Icon"></div>
          </div>
        </div>
        {/* navlist */}
        <div className="h-full ">
          <ul className=" ">
            <li className="link origin-top border-t-[0.5px] border-white text-center pt-5 relative">
              <a
                href=""
                className=" font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase  "
              >
                <span className="">Work</span>
                <div className="moveLink absolute top-0 flex text-black bg-[#D3FD50]">
                  <div className=" flex items-center moveX  ">
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      see everything
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                    />
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      see everything
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover  w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    />
                  </div>
                  <div className=" flex items-center moveX  ">
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      see everything
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                    />
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      see everything
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover  w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    />
                  </div>
                </div>
              </a>
            </li>
            <li className="link origin-top border-t-[0.5px] border-white text-center pt-5 relative">
              <a
                href=""
                className=" font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase  "
              >
                <span className="">AGENCY</span>
                <div className="moveLink absolute top-0 flex text-black bg-[#D3FD50]">
                  <div className=" flex items-center moveX  ">
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      KNOW US
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                    />
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      KNOW US
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover  w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    />
                  </div>
                  <div className=" flex items-center moveX  ">
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      KNOW US
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                    />
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      KNOW US
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover  w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    />
                  </div>
                </div>
              </a>
            </li>
            <li className="link origin-top border-t-[0.5px] border-white text-center pt-5 relative">
              <a
                href=""
                className=" font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase  "
              >
                <span className="">contact</span>
                <div className="moveLink absolute top-0 flex text-black bg-[#D3FD50]">
                  <div className=" flex items-center moveX  ">
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      Send us a fax
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                    />
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      Send us a fax
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover  w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    />
                  </div>
                  <div className=" flex items-center moveX  ">
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      Send us a fax
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                    />
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      Send us a fax
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover  w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    />
                  </div>
                </div>
              </a>
            </li>
            <li className="link origin-top border-y-[0.5px] border-white text-center pt-5 relative">
              <a
                href=""
                className=" font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase  "
              >
                <span className="">blog</span>
                <div className="moveLink absolute top-0 flex text-black bg-[#D3FD50]">
                  <div className=" flex items-center moveX  ">
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      read articales
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                    />
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      read articales
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover  w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    />
                  </div>
                  <div className=" flex items-center moveX  ">
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      read articales
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                    />
                    <h2 className=" whitespace-nowrap font-[Lausanne-500] text-[11vw] lg:text-[8vw] leading-[0.8]  uppercase pt-4 ">
                      read articales
                    </h2>
                    <img
                      className="h-30 shrink-0 object-cover  w-80 rounded-full "
                      src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    />
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        {/* footer  */}
        <div className="h-full flex justify-between  items-end overflow-hidden">
          <div className="w-[33%]">
            <div className=" flex justify-start items-center gap-4 p-2 ">
              <div className="h-10 w-10 cursor-pointer ">
                <svg
                  fill="#ffffff"
                  height="100%"
                  width="100%"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z M172.211,41.609 c-24.934,27.119-44.68,66.125-56.755,111.992H49.749C75.179,102.741,118.869,62.524,172.211,41.609z M25.6,256 c0-26.999,5.077-52.727,13.662-76.8h70.494c-4.608,24.294-7.356,49.963-7.356,76.8s2.748,52.506,7.347,76.8H39.262 C30.677,308.727,25.6,283,25.6,256z M49.749,358.4h65.707c12.083,45.867,31.821,84.872,56.755,111.991 C118.869,449.476,75.179,409.259,49.749,358.4z M243.2,485.188c-43.81-8.252-81.877-58.24-101.359-126.788H243.2V485.188z M243.2,332.8H135.74c-4.924-24.166-7.74-49.997-7.74-76.8s2.816-52.634,7.74-76.8H243.2V332.8z M243.2,153.6H141.841 C161.323,85.052,199.39,35.063,243.2,26.812V153.6z M462.251,153.6h-65.707c-12.083-45.867-31.821-84.873-56.755-111.992 C393.131,62.524,436.821,102.741,462.251,153.6z M268.8,26.812c43.81,8.252,81.877,58.24,101.359,126.788H268.8V26.812z M268.8,179.2h107.46c4.924,24.166,7.74,49.997,7.74,76.8s-2.816,52.634-7.74,76.8H268.8V179.2z M268.8,485.188V358.4h101.359 C350.677,426.948,312.61,476.937,268.8,485.188z M339.789,470.391c24.934-27.127,44.672-66.125,56.755-111.991h65.707 C436.821,409.259,393.131,449.476,339.789,470.391z M402.244,332.8c4.608-24.294,7.356-49.963,7.356-76.8 s-2.748-52.506-7.347-76.8h70.494c8.576,24.073,13.653,49.801,13.653,76.8c0,27-5.077,52.727-13.662,76.8H402.244z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <h1 className="text-2xl">MONTREAL_{time()}</h1>
            </div>
          </div>
          <div className="w-[33%]">
            <ul className="flex gap-2 justify-center items-center p-2">
              <li>
                <a
                  href="#"
                  className=" hover:text-[#D3FD50] font-[Lausanne-500] text-[14px] uppercase  "
                >
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" hover:text-[#D3FD50] font-[Lausanne-500] text-[14px] uppercase  "
                >
                  <span>Privacy Notice</span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="  hover:text-[#D3FD50] font-[Lausanne-500] text-[14px] uppercase  "
                >
                  <span>Ethics Report</span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" hover:text-[#D3FD50] font-[Lausanne-500] text-[14px]  uppercase  "
                >
                  <span>consent choice</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[33%]  ">
            <ul className="flex justify-end p-2 gap-1">
              <li className="border-2 hover:text-[#D3FD50] hover:border-[#D3FD50] border-white rounded-full lg:text-3xl px-4 text-2xl">
                <a href="" className=" font-[Lausanne-500]   uppercase  ">
                  <span>fb</span>
                </a>
              </li>
              <li className="border-2 hover:text-[#D3FD50] hover:border-[#D3FD50] border-white rounded-full lg:text-3xl px-4 text-2xl">
                <a href="" className=" font-[Lausanne-500] uppercase  ">
                  <span>ig</span>
                </a>
              </li>
              <li className="border-2 hover:text-[#D3FD50] hover:border-[#D3FD50] border-white rounded-full lg:text-3xl px-4 text-2xl">
                <a href="" className=" font-[Lausanne-500]  uppercase  ">
                  <span>in</span>
                </a>
              </li>
              <li className="border-2 hover:text-[#D3FD50] hover:border-[#D3FD50] border-white rounded-full lg:text-3xl px-4 text-2xl">
                <a href="" className=" font-[Lausanne-500]  uppercase  ">
                  <span>be</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
