import { Link } from "react-router-dom";
import React from "react";

export default function Hero() {
  return (
    <section className="wrapper gradient-8 !relative before:content-[''] before:absolute before:w-full before:h-full before:bg-cover before:pointer-events-none before:left-0 before:top-0 before:bg-[url(/assets/img/photos/lines.png)]">
      <div className="container pt-28 xl:pt-36 lg:pt-36 md:pt-36 pb-[12.5rem] xl:pb-[17.5rem] lg:pb-[17.5rem] !text-center">
        <div className="flex flex-wrap mx-[-15px]">
          <div
            className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto"
            data-cues="zoomIn"
            data-group="page-title"
            data-interval={-200}
            data-delay={500}
          >
            <h2 className="h6 uppercase !text-[0.85rem] !tracking-[0.05rem] !leading-[1.55] !text-white !mb-5">
              Hello! We are Sandbox
            </h2>
            <h1 className="xl:!text-[3.4rem] !text-[calc(1.465rem_+_2.58vw)] !leading-[1.05] font-semibold !mb-8 !text-white">
              We have considered our solutions to{" "}
              <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[10%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[4%] motion-reduce:after:transition-none after:bg-[#3f78e0] after:!bg-[linear-gradient(45deg,#08aeea_0,#2af598_100%)]">
                <em>assist</em>
              </span>{" "}
              every stage of your growth.
            </h1>
            <div
              className="flex justify-center !mb-4"
              data-cues="zoomIn"
              data-group="page-title-buttons"
              data-delay={900}
            >
              <span>
                <Link to={`/projects`} className="btn btn-lg btn-white">
                  Explore Now
                </Link>
              </span>
            </div>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
