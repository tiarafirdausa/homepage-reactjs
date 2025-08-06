import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                srcSet="/assets/img/illustrations/i5@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i5.png"
                width={800}
                height={590}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h2 className="!text-[.75rem] uppercase text-line relative align-top !pl-[1.4rem] inline-flex !tracking-[0.02rem] !leading-[1.35] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0] !text-[#3f78e0] !mb-3">
              Get In Touch
            </h2>
            <h3 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-7">
              Got any questions? Don't hesitate to get in touch.
            </h3>
            <div className="flex flex-row">
              <div>
                <div className="icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                  <i className="uil uil-location-pin-alt before:content-['\ebd8']" />
                </div>
              </div>
              <div>
                <h5 className="!mb-1">Address</h5>
                <address className="not-italic !leading-[inherit] !mb-4">
                  Moonshine St. 14/05 Light City, London
                </address>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                  <i className="uil uil-phone-volume before:content-['\ec50']" />
                </div>
              </div>
              <div>
                <h5 className="!mb-1">Phone</h5>
                <p>00 (123) 456 78 90</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                  <i className="uil uil-envelope before:content-['\eac8']" />
                </div>
              </div>
              <div>
                <h5 className="!mb-1">E-mail</h5>
                <p className="!mb-0">
                  <a
                    href="mailto:sandbox@email.com"
                    className="!text-[#60697b]"
                  >
                    sandbox@email.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
