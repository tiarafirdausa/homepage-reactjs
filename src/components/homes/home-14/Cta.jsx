import React from "react";

export default function Cta() {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay !bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
      style={{ backgroundImage: "url(/assets/img/photos/bg10.jpg)" }}
    >
      <div className="container py-[8rem]">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="lg:w-11/12 xl:w-10/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[0.8rem] !leading-[1.35] uppercase !text-white !mb-3">
              Join Our Community
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !mb-6 !text-white lg:!px-5 xxl:!px-0">
              We are trusted by over 5000+ clients. Join them by using our
              services and grow your business.
            </h3>
            <a
              href="#"
              className="btn btn-white !rounded-[50rem] !mb-0 whitespace-nowrap"
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
