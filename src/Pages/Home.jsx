import React from "react";
import NavBar from "../NavBar/NavBar";
import Media from "../Components/Media";
import Forecast from "../Components/Forecast";

const Home = () => {
  return (
    <div>
      <div className="bg-[#20363D] h-screen text-white">
        <NavBar />
        <div className="md:px-[109px]">
          <div className="flex justify-between mt-[70px]">
            <div>
              <h1 className="not-italics font-bold text-[64px] mb-3">
                Build a better <br />
                <span className="bg-[#8FE3CF] mr-2 font-semibold text-[#002B5B]">
                  Revenue
                </span>
                on the <br /> goal.
              </h1>
              <p className="font-rubik not-italic font-light text-[18px] leading-[22px] mb-[38px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit
                ut aliquam, purus sit amet luctus venenatis, <br /> lectus magna
                fringilla urna, porttitor
              </p>

              <div className="flex">
                <div className="w-[30px] h-[30px] bg-[#8FE3CF] rounded-3xl mr-10 ">
                  <img className="pt-3 pl-2" src="/Vector.png" alt="" />
                </div>
                <h1 className="font-light leading-[27px] text-[18px] font-rubik not-italic mb-[17px]">
                  An awarded digital marketing expert
                </h1>
              </div>

              <div className="flex  mb-[32px]">
                <div className="w-[30px] h-[30px] bg-[#8FE3CF] rounded-3xl mr-10 ">
                  <img className="pt-3 pl-2" src="/Vector.png" alt="" />
                </div>
                <div className="flex">
                  <h1 className="font-light leading-[27px] text-[18px] font-rubik not-italic">
                    Trusted by
                  </h1>
                  <div className="flex items-center ml-[15px] gap-[14.05px]">
                    <img src="/Group.png" alt="" />
                    <img src="/Group 5.png" alt="" />
                    <img src="/lagosstate.gov.ng - png.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex w-[163px] h-[44px] bg-[#8FE3CF] rounded-[20px] justify-center  mr-[47px]">
                  <img className="p-3" src="/Vector (2).png" alt="" />
                  <button className="font-rubik not-italic font-[400px] text-[15px] leading-[18px] text-[#2B4865] pr-3">
                    Get Started
                  </button>
                </div>

                <div className="w-[47px] h-[46px] bg-[#8FE3CF] rounded-[30px] justify-center mr-[11px]">
                  <img className="p-4 pl-5" src="/Vector (3).png" alt="" />
                </div>
                <p className="font-rubik not-italic font-light text-[12px] leading-[14px]">
                  Check <br /> How it <br /> work
                </p>
              </div>
            </div>

            {/* right pane */}
            <div className="sbbgg w-[718px] h-[501px] bg-[#002B5B] rounded-[10px]">
              <div className="w-[634px] h-[449px] bg-white rounded-[10px] ml-[36px] mt-[26px]">
                <div className="flex justify-between md:px-[30px]">
                  <div>
                    <h1 className="font-lato not-italic font-[700px] text-[33px] leading-[38px] text-[#256d85] mt-[14px] mb-5">
                      Revenue review
                    </h1>
                    <p className="font-rubik not-italic font-[400px] text-[24px] leading-[28px] text-[#8FE3CF] mb-[29px]">
                      market overviews
                    </p>
                  </div>

                  <div className="w-[54px] h-[53px] bg-[#8FE3CF] rounded-[26.5px] mt-[14px]">
                    <img className="p-3 pt-5" src="/Vector (1).png" alt="" />
                  </div>
                </div>
                <img className="ml-[29px]" src="/Group 4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Media />
      <Forecast/>
    </div>
  );
};

export default Home;
