import React from "react";

export default function Cta() {
  return (
    <div className="flex flex-wrap mx-[-15px]">
      <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
        <h2 className="!text-[0.8rem] !leading-[1.35] !tracking-[0.02rem] uppercase !text-white !mb-3">
          Join Our Community
        </h2>
        <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] xl:!text-[2rem] !text-white !mb-6">
          We are
          <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[10%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[4%] motion-reduce:after:transition-none after:bg-[#3f78e0] after:!bg-[linear-gradient(45deg,#08aeea_0,#2af598_100%)]">
            <em>trusted</em>
          </span>
          by over 5000+ clients. Join them now and grow your business.
        </h3>
        <a href="#" className="btn btn-white">
          Join Us
        </a>
      </div>
      {/* /column */}
    </div>
  );
}
