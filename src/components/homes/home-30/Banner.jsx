import React from "react";

export default function Banner() {
  return (
    <section
      className="wrapper bg-repeat bg-fixed bg-image section-frame xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem]"
      style={{ backgroundImage: "url(/assets/img/pattern.png)" }}
    >
      <div className="container py-[4.5rem] md:pt-24 xl:pt-0 lg:pt-0 xl:pb-14 lg:pb-14 md:pb-14">
        <div className="flex flex-wrap mx-[-15px] !text-center !mb-16">
          <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="lg:!mt-[-17.5rem] xl:!mt-[-12.5rem]">
              <figure className="rounded-[0.8rem]">
                <img
                  className="!rounded-[0.8rem]"
                  srcSet="/assets/img/photos/about18@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/about18.jpg"
                  width={1200}
                  height={650}
                />
              </figure>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-35px] lg:mx-[-35px] !mt-[-30px] xl:!mt-0 lg:!mt-0 !mb-16">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] xl:!px-[35px] lg:!px-[35px] !mt-[30px] xl:!mt-0 lg:!mt-0">
            <h1 className="!text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.2] xl:!text-[2.2rem] !mb-0 !text-white">
              We are an award winning digital web design agency that strongly
              believes in the power of creative ideas.
            </h1>
          </div>
          {/* /column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] xl:!px-[35px] lg:!px-[35px] !mt-[30px] xl:!mt-0 lg:!mt-0">
            <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal !mb-3 !text-[#cacaca]">
              Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam quis risus
              eget urna mollis ornare vel eu leo. Nullam quis risus eget urna
              mollis ornare vel eu leo. Maecenas faucibus mollis elit interdum.
              Duis mollis, est non commodo luctus.
            </p>
            <a href="#" className="more !text-white hover">
              Learn More
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
