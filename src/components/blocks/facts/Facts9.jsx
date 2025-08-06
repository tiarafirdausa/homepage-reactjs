import ProgressCircle from "@/components/common/CircularProgress";
import { stats2 } from "@/data/progress";
import React from "react";

export default function Facts9() {
  return (
    <section id="snippet-8" className="section-frame overflow-hidden ">
      <div
        className="wrapper !bg-[#edf2fc] md:!mb-16 !mb-20"
        style={{ borderRadius: "1rem" }}
      >
        <div className="container py-28">
          <div className="flex flex-wrap mx-[-15px] !text-center">
            <div className="xl:w-11/12 xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
                Company Facts
              </h2>
              <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-10 lg:!px-40 xl:!px-40">
                Save your time and money by choosing our professional team.
              </h3>
              <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !text-center">
                {stats2.map((elm, i) => (
                  <div
                    key={i}
                    className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full"
                  >
                    <div
                      className={
                        "progressbar semi-circle relative w-[8.5rem] h-[4.25rem] m-[0_auto_1rem] " +
                        elm.color
                      }
                    >
                      <ProgressCircle max={elm.value} />
                    </div>
                    <h4>{elm.title}</h4>
                    <p className="!mb-0">{elm.description}</p>
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
