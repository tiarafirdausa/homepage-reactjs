import React from "react";

export default function Contact() {
  return (
    <section className="wrapper !bg-[#fef4f2]">
      <div className="container py-[4.5rem] xl:!py-28 lg:!py-28 md:!py-28">
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
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-7">
              Got any questions? Don't hesitate to get in touch.
            </h3>
            <div className="flex flex-row">
              <div>
                <div className="icon !text-[#f78b77] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
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
                <div className="icon !text-[#f78b77] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
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
                <div className="icon !text-[#f78b77] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
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
