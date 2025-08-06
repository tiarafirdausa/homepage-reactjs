import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-wrap mx-[-15px] !mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] items-center">
      <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] !mt-[80px] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full !relative">
        <div
          className="shape bg-dot primary rellax !w-[7rem] !h-[12.5rem] absolute z-[1] opacity-50 bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]"
          data-rellax-speed={1}
          style={{ top: "-2rem", left: "-1.9rem" }}
        />
        <div
          className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block !absolute z-[1]"
          data-rellax-speed={0}
          style={{
            bottom: "-1.8rem",
            right: "-1.5rem",
            width: "85%",
            height: "90%",
          }}
        />
        <figure className="rounded-[0.4rem] relative z-[2]">
          <img
            className="rounded-[.4rem]"
            srcSet="/assets/img/photos/about14@2x.jpg 2x"
            alt="image"
            src="/assets/img/photos/about14.jpg"
            width={575}
            height={550}
          />
        </figure>
      </div>
      {/*/column */}
      <div className="lg:w-5/12 xl:w-4/12 xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] w-full flex-[0_0_auto] !mt-[80px] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full">
        <h2 className="!text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top !pl-[1.4rem] !tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#54a8c7] !text-[#54a8c7] !mb-3">
          Get In Touch
        </h2>
        <h2 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-8">
          Convinced yet? Let's make something great together.
        </h2>
        <div className="flex flex-row">
          <div>
            <div className="icon !text-[#54a8c7] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-6 !mt-[-0.25rem]">
              <i className="uil uil-location-pin-alt before:content-['\ebd8']" />
            </div>
          </div>
          <div>
            <h5 className="!mb-1 !text-[0.95rem] !leading-[1.5]">Address</h5>
            <address className="not-italic !leading-[inherit] !mb-4">
              Moonshine St. 14/05 Light City,
              <br className="hidden xl:block lg:block md:block" />
              London, United Kingdom
            </address>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <div className="icon !text-[#54a8c7] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-6 !mt-[-0.25rem]">
              <i className="uil uil-phone-volume before:content-['\ec50']" />
            </div>
          </div>
          <div>
            <h5 className="!mb-1 !text-[0.95rem] !leading-[1.5]">Phone</h5>
            <p>00 (123) 456 78 90</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <div className="icon !text-[#54a8c7] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-6 !mt-[-0.25rem]">
              <i className="uil uil-envelope before:content-['\eac8']" />
            </div>
          </div>
          <div>
            <h5 className="!mb-1 !text-[0.95rem] !leading-[1.5]">E-mail</h5>
            <p className="!mb-0">
              <a href="mailto:sandbox@email.com" className="!text-[#60697b]">
                sandbox@email.com
              </a>
            </p>
          </div>
        </div>
      </div>
      {/*/column */}
    </div>
  );
}
