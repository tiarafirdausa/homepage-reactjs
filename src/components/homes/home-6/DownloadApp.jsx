import React from "react";

export default function DownloadApp() {
  return (
    <section className="wrapper !bg-[#edf2fc]">
      <div className="container pt-10 pb-20 lg:!py-28 xl:!py-40 xxl:!py-60 !relative">
        <img
          className="xl:!absolute lg:!absolute max-lg:static w-full flex-[0_0_auto] max-w-full xl:-translate-y-2/4 lg:-translate-y-2/4 !mb-3 md:!mb-10 lg:!mb-0 xl:!mb-0"
          srcSet="/assets/img/photos/devices2@2x.png 2x"
          alt="image"
          style={{ top: "50%", left: "-23%" }}
          src="/assets/img/photos/devices2.png"
          width={1320}
          height={800}
        />
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] items-center">
          <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-6/12 lg:!ml-[50%] xl:w-6/12 xl:!ml-[50%] flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] w-full max-w-full xl:!mt-[-2.25rem] lg:!mt-[-2.25rem] md:!mt-[-2.25rem] text-center xl:text-left lg:text-left">
            <h1 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !text-[#343f52] !tracking-[-0.01rem] !mb-4 md:!px-10 lg:!px-0">
              Get all of your steps, exercise, sleep and meds in one place.
            </h1>
            <p className="lead !text-[1.1rem] !leading-[1.55] font-medium !mb-7 md:!px-10 lg:!px-0 xl:!px-0 xxl:!pr-20">
              Sandbox is now available to download from both the App Store and
              Google Play Store.
            </p>
            <div className="flex justify-center xl:!justify-start lg:!justify-start">
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
