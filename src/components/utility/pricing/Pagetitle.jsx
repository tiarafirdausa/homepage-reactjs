import React from "react";

export default function Pagetitle() {
  return (
    <section className="wrapper !bg-[#edf2fc]">
      <div className="container !pt-10 !pb-36 xl:!pt-[4.5rem] lg:!pt-[4.5rem] md:!pt-[4.5rem] xl:!pb-60 lg:!pb-60 md:!pb-60 !text-center">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
              Our Pricing
            </h1>
            <p className="lead !mb-0 lg:!px-10 xl:!px-10 xxl:!px-16 !leading-[1.65] text-[0.9rem] font-medium">
              We offer great prices, premium products and quality service for
              your business.
            </p>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
