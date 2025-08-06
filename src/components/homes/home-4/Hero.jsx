import { Link } from "react-router-dom";
import React from "react";

export default function Hero() {
  return (
    <section className="wrapper !bg-[#ffffff] !relative min-h-[70vh] xl:!flex lg:!flex items-center z-[1]">
      <div
        className="rounded-4-lg-start xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full xl:!order-2 xl:!absolute top-0 lg:!order-2 lg:!absolute !right-0 image-wrapper bg-image bg-cover !h-full min-h-[50vh] bg-[center_center] bg-no-repeat !bg-scroll z-0 lg:rounded-tl-[0.8rem] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[0.8rem] xl:rounded-tl-[0.8rem] xl:rounded-tr-none xl:rounded-br-none xl:rounded-bl-[0.8rem]"
        style={{
          backgroundImage: "url(/assets/img/photos/about16.jpg)",
        }}
      />
      {/*/column */}
      <div className="container">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <div
              className="!mt-10 md:!mt-12 xl:!mt-[-2.5rem] lg:!mt-[-2.5rem] px-10 md:!px-12 xl:!pl-0 lg:!pl-0 xl:!pr-16 lg:!pr-16 text-center lg:text-left xl:text-left"
              data-cues="slideInDown"
              data-group="page-title"
              data-delay={600}
            >
              <h1 className="!text-[calc(1.385rem_+_1.62vw)] !leading-[1.1] font-DMSerif !tracking-normal !font-normal xl:!text-[2.6rem] !mb-5">
                Just sit &amp; relax while we take care of your business needs.
              </h1>
              <p className="lead text-[1.25rem] leading-normal !mb-7 xl:!pr-[2.5rem] lg:!pr-[2.5rem] md:!pr-[2.5rem]">
                We make your spending stress-free for you to have the perfect
                control.
              </p>
              <div
                className="flex justify-center lg:!justify-start xl:!justify-start"
                data-cues="slideInDown"
                data-group="page-title-buttons"
                data-delay={900}
              >
                <span>
                  <Link
                    to={`/projects`}
                    className="btn btn-lg btn-violet !text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:!border-[#a07cc5] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5] !rounded-[50rem] !mr-2"
                  >
                    Explore Now
                  </Link>
                </span>
                <span>
                  <Link
                    to={`/contact`}
                    className="btn btn-lg btn-outline-violet !rounded-[50rem] !text-[#a07cc5] !border-[#a07cc5] hover:!bg-[#a07cc5] hover:!text-white"
                  >
                    Contact Us
                  </Link>
                </span>
              </div>
            </div>
            {/*/div */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
