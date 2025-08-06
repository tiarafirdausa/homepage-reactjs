import ProgressCircle from "@/components/common/CircularProgress";
import { stats } from "@/data/progress";
import React from "react";

export default function Banner() {
  return (
    <section className="wrapper bg-[rgba(246,247,249,1)]">
      <div className="container py-[5rem] xl:!p-[7rem_15px_9rem] lg:!p-[7rem_15px_9rem] md:!p-[7rem_15px_9rem]">
        <div className="flex flex-wrap mx-[-15px] items-center !mt-[-40px] !mb-16">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] !mt-[40px] max-w-full text-center lg:text-left xl:text-left">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
              Save Time and Money
            </h2>
            <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-0 xl:!pr-10 xxl:!pr-20">
              Save your time and money by choosing our{" "}
              <span className="!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 style-2 yellow">
                professional
              </span>{" "}
              team.
            </h3>
          </div>
          {/* /column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[40px] max-w-full">
            <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !text-center">
              {stats.map((stat, index) => (
                <div key={index} className={stat.className}>
                  <div
                    className={`progressbar semi-circle ${stat.color} relative w-[8.5rem] h-[4.25rem] m-[0_auto_1rem]`}
                  >
                    <ProgressCircle max={stat.value} />
                  </div>
                  <h4 className="!mb-0">{stat.title}</h4>
                </div>
              ))}
            </div>
            {/* /.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
