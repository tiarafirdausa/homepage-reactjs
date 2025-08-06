import React from "react";

export default function Hero() {
  return (
    <section className="wrapper !bg-[#eff7fa]">
      <div className="container pt-5 pb-20 lg:py-28 xl:py-36 xl:!pb-[10rem] !relative">
        <img
          className="xl:!absolute lg:!absolute max-lg:!left-0 w-full lg:w-10/12 xl:w-11/12 xxl:w-10/12 flex-[0_0_auto] max-w-full lg:!px-5 xl:!px-0 !ml-[-1.25rem] sm:!ml-[-2rem] md:!ml-[-2.5rem] lg:!ml-0 xl:!ml-0 md:!mb-4 lg:!mb-0"
          srcSet="/assets/img/photos/devices@2x.png 2x"
          data-cue="fadeIn"
          alt="image"
          style={{ top: "-1%", left: "-21%" }}
          src="/assets/img/photos/devices.png"
          width={1100}
          height={900}
        />
        <div className="flex flex-wrap mx-0 items-center">
          <div
            className="md:w-10/12 lg:w-5/12 xl:w-5/12 flex-[0_0_auto] max-w-full md:!ml-[8.33333333%] lg:!ml-[58.33333333%] xxl:!ml-[50%] xxl:!pl-14 xl:!mt-[-2.25rem] lg:!mt-[-2.25rem] md:!mt-[-2.25rem] text-center lg:text-left xl:text-left"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay={600}
          >
            <h1 className="xl:!text-[2.3rem] !text-[calc(1.355rem_+_1.26vw)] !leading-[1.2] font-bold !text-[#343f52] !tracking-[-0.01rem] !mb-4 sm:mx-[-0.5rem] md:mx-0">
              Get all of your steps, exercise, sleep and meds in one place.
            </h1>
            <p className="lead !text-[1.1rem] !leading-[1.55] font-medium !mb-7 md:!px-10 lg:!px-0">
              Sandbox is now available to download from both the App Store and
              Google Play Store.
            </p>
            <div
              className="flex justify-center lg:!justify-start xl:!justify-start"
              data-cues="slideInDown"
              data-group="page-title-buttons"
              data-delay={900}
            >
              <span>
                <a className="!text-[.85rem] btn btn-aqua !text-white !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] focus:text-white active:text-white active:bg-[#54a8c7] active:border-[#54a8c7] disabled:text-white disabled:bg-[#54a8c7] disabled:border-[#54a8c7] btn-icon btn-icon-start rounded !mr-2">
                  <i className="uil uil-apple !mr-[.3rem] before:content-['\e938']" />
                  App Store
                </a>
              </span>
              <span>
                <a className="!text-[.85rem] btn btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] btn-icon btn-icon-start rounded">
                  <i className="uil uil-google-play !mr-[.3rem] before:content-['\eb4f']" />
                  Google Play
                </a>
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
