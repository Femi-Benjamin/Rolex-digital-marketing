import React from "react";

const Media = () => {
  return (
    <div className="h-[795px] bg-white">
      <div className="md:px-[90px] md:py-[84px]">
        <div className="flex gap-20">
          {/* CARD */}
          <div className="w-[295px] h-[260px] bg-gradient-to-r from-[#8fe3cfb3] to-[#002b5bb3] rounded-[10px]">
            <div className="flex mt-[43px]">
              <div>
                <img
                  className="ml-[37px]"
                  src="/seo-search-symbol 2.png"
                  alt=""
                />
              </div>
              <div className="ml-12 text-white">
                <h1 className="font-lato not-italics font-[500px] text-[28px] leading-[34px] mb-[13px]">
                  Search engine optimization
                </h1>
                <p className="font-rubik not-italic font-[400px] text-[12px] leading-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis,
                </p>
              </div>
            </div>
          </div>

          {/* CARD 1 */}
          <div className="w-[295px] h-[260px] bg-[#F8F8F8] rounded-[10px]">
            <div className="flex mt-[43px]">
              <div>
                <img
                  className="w-[50p h-[42p ml-[37px]"
                  src="/3648316 1.png"
                  alt=""
                />
              </div>

              <div className="ml-12">
                <h1 className="font-lato not-italics font-[500px] text-[28px] leading-[34px] mb-[40px] text-[#256D85]">
                  Social Media
                </h1>
                <p className="font-rubik not-italic font-[400px] text-[12px] leading-[14px] text-[#537291]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis,
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-[295px] h-[260px] bg-[#F8F8F8] rounded-[10px]">
            <div className="flex mt-[43px]">
              <div>
                <img
                  className="w-[50p h-[42p ml-[37px]"
                  src="/bullhorn 1.png"
                  alt=""
                />
              </div>

              <div className="ml-12">
                <h1 className="font-lato not-italics font-[500px] text-[28px] leading-[34px] mb-[40px] text-[#256D85]">
                  Paid Media
                </h1>
                <p className="font-rubik not-italic font-[400px] text-[12px] leading-[14px] text-[#537291]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis,
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND STEP */}
        {/* CARD 3 */}
        <div className="flex gap-20 mt-[51px]">
          <div className="w-[295px] h-[260px] bg-[#F8F8F8] rounded-[10px]">
            <div className="flex pt-[43px]">
              <div>
                <img
                  className="w-[50p h-[42p ml-[37px]"
                  src="/email-marketing 1.png"
                  alt=""
                />
              </div>

              <div className="ml-12">
                <h1 className="font-lato not-italics font-[500px] text-[28px] leading-[34px] mb-[40px] text-[#256D85]">
                  Email marketing
                </h1>
                <p className="font-rubik not-italic font-[400px] text-[12px] leading-[14px] text-[#537291]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis,
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="w-[295px] h-[260px] bg-[#F8F8F8] rounded-[10px]">
            <div className="flex pt-[43px]">
              <div>
                <img
                  className="w-[50p h-[42p ml-[37px]"
                  src="/cro 1.png"
                  alt=""
                />
              </div>

              <div className="ml-12">
                <h1 className="font-lato not-italics font-[500px] text-[28px] leading-[34px] mb-[40px] text-[#256D85]">
                  Conversion rate optimization
                </h1>
                <p className="font-rubik not-italic font-[400px] text-[12px] leading-[14px] text-[#537291]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis,
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-lato not-italic font-[500px] text-[25px] leading-[30px] text-[#002B5B] uppercase mb-[18px]">What We Do</h1>
            <h1 className="font-rubik not-italic font-[300px] text-[54px] leading-[64px] text-[#256D85] mb-[34px]">your Business <span className="font-rubik not-italic font-bold text-[54px] leading-[64px] text-black" >with <br /> our best solution</span></h1>
            <div className="flex w-[196px] h-[48px] bg-[#8FE3CF] rounded-[20px] items-center justify-center pr-7">
            <img className="p-5" src="/Vector (4).png" alt="" />
            <button>Explore all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
