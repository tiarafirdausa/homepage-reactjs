import React from "react";

export default function VideoSection() {
  return (
    <section className="wrapper !bg-[#f3f8f5]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-9/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <i className="icn-flower !text-[#7cb798] xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] opacity-25 before:content-['\e907']" />
            <h2 className="xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] font-semibold !tracking-[normal] !text-center !mt-2 !mb-10">
              I would like to give you a unique photography and video
              experience, built to serve you best.
            </h2>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="xl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div
              className="player relative z-[2] rounded-[0.4rem]"
              data-plyr-provider="vimeo"
              data-plyr-embed-id={142109573}
            />
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
