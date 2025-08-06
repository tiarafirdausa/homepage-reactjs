import React from "react";

import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="wrapper bg-[rgba(246,247,249,1)]">
      <div className="container pt-14 xl:pt-24 lg:pt-24 md:pt-24 !text-center">
        <div className="flex flex-wrap mx-[-15px]">
          <div
            className="lg:w-8/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay={600}
          >
            <h2 className="!text-[0.8rem] !tracking-[0.05rem] !leading-[1.35] uppercase !text-[#343f52] !mb-4">
              Hello! This is Sandbox
            </h2>
            <h1 className="xl:!text-[2.9rem] !text-[calc(1.415rem_+_1.98vw)] !leading-[1.2] font-bold !mb-7">
              We bring rapid solutions for your business.
            </h1>
            <div
              className="flex justify-center !mb-5 xl:!mb-0 lg:!mb-0 md:!mb-0"
              data-cues="slideInDown"
              data-group="page-title-buttons"
              data-delay={900}
            >
              <span>
                <Link
                  to={`/projects`}
                  className="btn btn-lg btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] !rounded-[50rem] !mr-2"
                >
                  Explore Now
                </Link>
              </span>
              <span>
                <Link
                  to={`/contact`}
                  className="btn btn-lg btn-outline-violet !rounded-[50rem] !text-[#343f52] !border-[#343f52] hover:!bg-[#343f52] hover:!text-white"
                >
                  Contact Us
                </Link>
              </span>
            </div>
          </div>
          {/*/column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <figure className="absoute" style={{ bottom: 0, left: 0, zIndex: 2 }}>
        <img
          alt="image"
          src="/assets/img/photos/bg11.jpg"
          width={2800}
          height={1300}
        />
      </figure>
    </section>
  );
}
