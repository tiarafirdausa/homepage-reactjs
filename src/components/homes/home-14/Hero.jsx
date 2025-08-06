import React from "react";

export default function Hero() {
  return (
    <section className="wrapper !bg-[#f6f3f9]">
      <div className="container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-0 lg:pb-0 md:pb-0">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-35px] md:mx-[-20px] !mt-[-15px] xl:!mt-0 lg:!mt-0 !mb-16">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[35px] md:!px-[20px] !mt-[15px] xl:!mt-0 lg:!mt-0 max-w-full">
            <h1 className="xl:!text-[3.3rem] !text-[calc(1.455rem_+_2.46vw)] !leading-[1.05] font-bold !mb-0">
              We bring rapid solutions for your business.
            </h1>
          </div>
          {/* /column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[35px] md:!px-[20px] !mt-[15px] xl:!mt-0 lg:!mt-0 max-w-full">
            <p className="lead !text-[1.25rem] !leading-[1.6] font-medium !my-3">
              We are an award winning branding design agency that strongly
              believes in the power of creative ideas.
            </p>
            <a href="#" className="more hover !text-[#a07cc5]">
              Learn More
            </a>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="!relative">
          <div
            className="shape bg-dot violet rellax !w-[7rem] !h-[12.5rem] !absolute z-[1] opacity-50"
            data-rellax-speed={1}
            style={{ top: "-2.5rem", right: "-2.7rem" }}
          />
          <figure className="rounded-[.4rem] xl:!mb-[-10rem] lg:!mb-[-10rem] md:!mb-[-10rem]">
            <img
              className="rounded-[.4rem]"
              srcSet="/assets/img/photos/about18@2x.jpg 2x"
              alt="image"
              src="/assets/img/photos/about18.jpg"
              width={1200}
              height={650}
            />
          </figure>
        </div>
      </div>
      {/* /.container */}
    </section>
  );
}
