import React from "react";

export default function Testimonial() {
  return (
    <div className="card !bg-[#eff7fa] !rounded-[0.8rem] !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
      <div className="card-body xl:!p-[2.5rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[40px] !relative">
        <div
          className="absolute hidden lg:block xl:block"
          style={{
            bottom: 0,
            left: "10%",
            width: "28%",
            zIndex: 2,
          }}
        >
          <figure className="m-0 p-0">
            <img
              className="w-full max-w-full !h-auto"
              srcSet="/assets/img/photos/co2@2x.png 2x"
              alt="image"
              src="/assets/img/photos/co2.png"
              width={361}
              height={620}
            />
          </figure>
        </div>
        <div className="flex flex-wrap max-md:mx-[-15px] xl:mx-[-35px] mx-0 !text-center">
          <div className="lg:w-7/12 lg:!ml-[41.66666667%] xl:w-6/12 xl:!ml-[41.66666667%] w-full flex-[0_0_auto] max-md:!px-[15px] xl:!px-[35px] px-0 max-w-full">
            <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
            <blockquote className="!pl-0 text-[1rem] !mb-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem]">
              <p>
                “Fusce dapibus tellus ac cursus commodo, tortor mauris
                condimentum nibh ut fermentum massa, justo sit amet vivamus
                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed”
              </p>
              <div className="flex items-center justify-center !text-center">
                <div className="info p-0">
                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                    Coriss Ambady
                  </h5>
                  <div className="!text-[0.65rem] uppercase !tracking-[0.02rem] font-bold !text-[#aab0bc] !mb-0">
                    Financial Analyst
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/*/.card-body */}
    </div>
  );
}
