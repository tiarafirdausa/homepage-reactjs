import React from "react";

export default function Banner() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container xl:pt-40 lg:pt-40 pb-32 xxl:pb-40 !relative">
        <img
          className="xl:!absolute lg:!absolute max-lg:!static max-w-full w-full flex-[0_0_auto] !px-[15px] xxl:!mt-[-0.75rem] !mb-3 md:!mb-10 lg:!mb-0"
          srcSet="/assets/img/demos/devices@2x.png 2x"
          data-cue="fadeIn"
          alt="image"
          style={{ top: 0, left: "-23%" }}
          src="/assets/img/demos/devices.png"
          width={1320}
          height={800}
        />
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] lg:!mt-[-6rem] xl:!mt-[-3.5rem] xxl:!mt-0 xxl:!items-center">
          <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-6/12 lg:!ml-[50%] xl:w-6/12 xl:!ml-[50%] flex-[0_0_auto] !px-[15px] max-w-full text-center lg:text-left xl:text-left xl:!px-[35px] lg:!px-[20px]">
            <div className="xl:!pl-1 xxl:!pl-5 xxl:!pr-10">
              <h2 className="!text-[.75rem] !tracking-[0.05rem] !leading-[1.35] uppercase !text-[#aab0bc] !mb-3">
                Fully Responsive
              </h2>
              <h3 className="!text-[calc(1.335rem_+_1.02vw)] font-bold !leading-[1.2] xl:!text-[2.1rem] !mb-5">
                Responsive images &amp; texts no matter the screen size.
              </h3>
              <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
                Sandbox is responsive so the layout will adapt to different
                screen sizes that will make your website compatible with any
                device such as smart phones, tablets and computers.
              </p>
              <img
                srcSet="/assets/img/demos/qrcode@2x.jpg 2x"
                className="shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-[.4rem] max-lg:m-[0_auto]"
                alt="image"
                src="/assets/img/demos/qrcode.jpg"
                width={100}
                height={100}
              />
            </div>
            {/*/div */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
