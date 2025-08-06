import React from "react";

export default function Services() {
  return (
    <section className="wrapper bg-[#262b32] opacity-100 !text-[#cacaca]">
      <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[0.8rem] !leading-[1.35] !tracking-[0.02rem] uppercase !text-white !mb-3">
              Our Services
            </h2>
            <h3 className="xl:!text-[2rem] !leading-[1.2] !text-[calc(1.325rem_+_0.9vw)] font-semibold !text-white !mb-10">
              The full service we are offering is specifically designed to meet
              your business needs.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-45px]">
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[45px]">
            <div className="flex flex-row">
              <div>
                <img
                  className="!w-[4rem] !mr-5"
                  alt="image"
                  src="/assets/img/illustrations/ni1.png"
                  width={438}
                  height={327}
                />
              </div>
              <div>
                <h3 className="!mb-2 !text-white">Marketing Automation</h3>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[45px]">
            <div className="flex flex-row">
              <div>
                <img
                  className="!w-[4rem] !mr-5"
                  alt="image"
                  src="/assets/img/illustrations/ni2.png"
                  width={428}
                  height={382}
                />
              </div>
              <div>
                <h3 className="!mb-2 !text-white">Project Management</h3>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[45px]">
            <div className="flex flex-row">
              <div>
                <img
                  className="!w-[4rem] !mr-5"
                  alt="image"
                  src="/assets/img/illustrations/ni3.png"
                  width={446}
                  height={428}
                />
              </div>
              <div>
                <h3 className="!mb-2 !text-white">Web Analytics</h3>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[45px]">
            <div className="flex flex-row">
              <div>
                <img
                  className="!w-[4rem] !mr-5"
                  alt="image"
                  src="/assets/img/illustrations/ni4.png"
                  width={468}
                  height={390}
                />
              </div>
              <div>
                <h3 className="!mb-2 !text-white">SEO Services</h3>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[45px]">
            <div className="flex flex-row">
              <div>
                <img
                  className="!w-[4rem] !mr-5"
                  alt="image"
                  src="/assets/img/illustrations/ni5.png"
                  width={435}
                  height={403}
                />
              </div>
              <div>
                <h3 className="!mb-2 !text-white">Market Research</h3>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[45px]">
            <div className="flex flex-row">
              <div>
                <img
                  className="!w-[4rem] !mr-5"
                  alt="image"
                  src="/assets/img/illustrations/ni6.png"
                  width={417}
                  height={393}
                />
              </div>
              <div>
                <h3 className="!mb-2 !text-white">Social Media Management</h3>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit.
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
