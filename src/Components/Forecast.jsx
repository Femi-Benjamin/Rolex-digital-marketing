import React from "react";

const Forecast = () => {
  return (
    <div className="h-[795px] bg-white">
      <div className="md:px-[109px] md:py-[84px]">
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="font-rubik not-italic font-bold text-[54px] leading-[64px] text-[#002B5B] mb-[60px]">
                Forecasting System <br /> Ability to Drive{" "}
                <span className="font-rubik not-italic font-light text-[54px] leading-[64px]  text-[#002B5B] bg-[#8FE3CF]">
                  Revenue
                </span>
              </h1>
              <div className="flex mb-[31px]">
                <div className="w-[30px] h-[30px] bg-[#8FE3CF] rounded-3xl mr-10 ">
                  <img className="pt-3 pl-2" src="/Vector.png" alt="" />
                </div>
                <p className="font-lato not-italic font-[400px] text-[15px] leading-[18px] text-[#2B4865]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
              </div>
              <div className="flex mb-[31px]">
                <div className="w-[30px] h-[30px] bg-[#8FE3CF] rounded-3xl mr-10 ">
                  <img className="pt-3 pl-2" src="/Vector.png" alt="" />
                </div>
                <p className="font-lato not-italic font-[400px] text-[15px] leading-[18px] text-[#2B4865]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
              </div>
              <div className="flex mb-[31px]">
                <div className="w-[30px] h-[30px] bg-[#8FE3CF] rounded-3xl mr-10 ">
                  <img className="pt-3 pl-2" src="/Vector.png" alt="" />
                </div>
                <p className="font-lato not-italic font-[400px] text-[15px] leading-[18px] text-[#2B4865]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
              </div>
              <div className="flex mb-[31px]">
                <div className="w-[30px] h-[30px] bg-[#8FE3CF] rounded-3xl mr-10 ">
                  <img className="pt-3 pl-2" src="/Vector.png" alt="" />
                </div>
                <p className="font-lato not-italic font-[400px] text-[15px] leading-[18px] text-[#2B4865]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
              </div>
            </div>

            {/* CARD */}
            <div className="w-[539px] h-[498px] bg-[#256D85] rounded-[20px] p-[20px]">
              <div className="w-[494px] h-[393px] bg-white rounded-[15px] mt-[62px]">
                <div className="px-[20px] py-[31.5px]">
                  <h1 className="font-rubik not-italic font-semibold text-[20px] leading-[28px] text-[#2B4865] mb-[22px]">
                    Forecasting Summary Chart
                  </h1>

                  <p className="font-rubik not-italic font-normal text-[15px] leading-[16px] text-[#537291] mb-2">
                    Revenue of 09 sept 2022
                  </p>
                  <div className="flex gap-[10px]">
                    <p className="font-rubik not-italic font-normal text-[15px] leading-[16px] text-[#256D85] mb-2">
                      265.00
                    </p>
                    <img className="h-[12px]" src="/Vector (5).png" alt="" />
                  </div>
                  <p className="font-rubik not-italic font-normal text-[15px] leading-[16px] text-[#256D85] mb-[29px]">
                    +1.30(0.50%)
                  </p>

                  <img src="/Group 418.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
