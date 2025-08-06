import ProgressCircle from "@/components/common/CircularProgress";
import { stats2 } from "@/data/progress";
import React from "react";

export default function Facts() {
  return (
    <section className="section-frame overflow-hidden xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem]">
      <div className="wrapper !bg-[#f2f3fb]" style={{ borderRadius: "1rem" }}>
        <div className="container py-[7rem]">
          <div className="flex flex-wrap mx-[-15px] !text-center">
            <div className="xl:w-11/12 xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
                Company Facts
              </h2>
              <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] !mb-10 lg:!px-40 xl:!px-40">
                Save your time and money by choosing our professional team.
              </h3>
              <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !text-center">
                {stats2.map((stat, index) => (
                  <div key={index} className={stat.className}>
                    <div
                      className={`progressbar semi-circle ${stat.color} relative w-[8.5rem] h-[4.25rem] m-[0_auto_1rem]`}
                    >
                      <ProgressCircle max={stat.value} />
                    </div>
                    <h4>{stat.title}</h4>
                    <p className="!mb-0">{stat.description}</p>
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
      </div>
      {/* /.wrapper */}
    </section>
  );
}
