import ProgressCircle from "@/components/common/CircularProgress";
import React from "react";

export default function Facts8() {
  return (
    <section id="snippet-7" className="wrapper !bg-[#ffffff]">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] items-center !mt-[-40px]">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full text-center lg:text-left xl:text-left !mt-[40px]">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
              Save Time and Money
            </h2>
            <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:!text-[2rem] !mb-0 xl:!pr-10 xxl:!pr-20">
              Save your time and money by choosing our
              <span className="!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 style-2 yellow">
                professional
              </span>
              team.
            </h3>
          </div>
          {/* /column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !text-center">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <div className="progressbar semi-circle fuchsia relative w-[8.5rem] h-[4.25rem] m-[0_auto_1rem]">
                  <ProgressCircle max={95} />
                </div>
                <h4 className="!mb-0">Customer Satisfaction</h4>
              </div>
              {/* /column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <div className="progressbar semi-circle orange relative w-[8.5rem] h-[4.25rem] m-[0_auto_1rem]">
                  <ProgressCircle max={80} />
                </div>
                <h4 className="!mb-0">Increased Revenue</h4>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
