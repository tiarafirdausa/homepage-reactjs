import React from "react";

export default function Cta() {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay !bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
      style={{ backgroundImage: "url(/assets/img/photos/bg1.jpg)" }}
    >
      <div className="container py-[8rem]">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <h2 className="!text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top !pl-[1.4rem] !tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#ffffff] !text-white !mb-3">
              Join Our Community
            </h2>
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-6 !text-white xxl:!pr-32">
              We are trusted by over 5000+ clients. Join them by using our
              services and grow your business.
            </h3>
            <a
              href="#"
              className="btn btn-white !rounded-[.4rem] !text-[.85rem] !mb-0 whitespace-nowrap"
            >
              Join Us
            </a>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
