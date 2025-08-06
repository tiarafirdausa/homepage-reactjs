import React from "react";

export default function Cta() {
  return (
    <section
      className="wrapper image-wrapper bg-auto no-overlay bg-image !text-center bg-map bg-[center_center] bg-no-repeat !bg-scroll relative z-[0]"
      style={{ backgroundImage: "url(/assets/img/map.png)" }}
    >
      <div className="container pt-0 pb-[4.5rem] xl:pt-32 lg:pt-32 md:pt-32 xl:pb-32 lg:pb-32 md:pb-32">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-8 lg:!px-14 xl:!px-14">
              We are trusted by over 5000+ clients. Join them now and grow your
              business.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div
          className="flex justify-center"
          data-cues="slideInDown"
          data-group="join"
        >
          <span>
            <a className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded mx-1">
              Get Started
            </a>
          </span>
          <span>
            <a className="btn btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] rounded mx-1">
              Free Trial
            </a>
          </span>
        </div>
      </div>
      {/* /.container */}
    </section>
  );
}
