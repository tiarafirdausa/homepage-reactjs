import React from "react";

export default function Cta() {
  return (
    <div
      className="wrapper image-wrapper bg-auto no-overlay bg-image !text-center bg-map bg-[center_center] bg-no-repeat !bg-scroll relative z-0"
      style={{ backgroundImage: "url(/assets/img/map.png)" }}
    >
      <div className="container xl:!py-[8rem] lg:!py-[8rem] md:!py-[6rem]">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-11/12 xxl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-8 lg:!px-[2rem] xl:!px-[2rem]">
              We are trusted by over 5000+ clients. Join them now and grow your
              business.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex justify-center">
          <span>
            <a className="btn btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">
              Get Started
            </a>
          </span>
        </div>
      </div>
      {/* /.container */}
    </div>
  );
}
