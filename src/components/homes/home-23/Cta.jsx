import React from "react";

export default function Cta() {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay !text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
      style={{ backgroundImage: "url(/assets/img/photos/bg33.jpg)" }}
    >
      <div className="container py-[4.5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem] !text-center">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-10/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <i className="icn-flower !text-white xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] opacity-50 before:content-['\e907'] font-CustomFont" />
            <h2 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !text-white !mt-2 !mb-7">
              I'm here to capture your moments. Looking for a caring, fun,
              passionate photographer?
            </h2>
            <a href="#" className="btn btn-white !rounded-[50rem] !mb-5">
              Contact Me
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
