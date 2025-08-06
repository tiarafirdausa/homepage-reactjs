import React from "react";

export default function Process() {
  return (
    <section
      className="wrapper bg-repeat bg-fixed bg-image section-frame xl:mx-[1.5rem] xl:rounded-[1rem] lg:mx-[1.5rem] lg:rounded-[1rem] md:mx-[1.5rem] md:rounded-[1rem]"
      style={{ backgroundImage: "url(/assets/img/pattern.png)" }}
    >
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-24 xl:pb-32 lg:pb-32 md:pb-32">
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center !mb-[8rem]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 xl:!ml-auto lg:!order-2 lg:!ml-auto xl:px-0 lg:px-0 !mt-[50px]">
            <div className="card !rounded-[0.8rem] xl:!mr-6 lg:!mr-6 !bg-[#e6e5f4]">
              <div className="card-body p-6">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                      <span className="number !text-[#605dba]">01</span>
                    </span>
                  </div>
                  <div>
                    <h3 className="!mb-1 !text-[#605dba]">Collect Ideas</h3>
                    <p className="!mb-0">
                      Nulla vitae elit libero pharetra augue dapibus.
                    </p>
                  </div>
                </div>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
            <div className="card !rounded-[0.8rem] xl:!ml-16 lg:!ml-16 !mt-6 !bg-[#fbe7f3]">
              <div className="card-body p-6">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                      <span className="number !text-[#e668b3]">02</span>
                    </span>
                  </div>
                  <div>
                    <h3 className="!mb-1 !text-[#e668b3]">Data Analysis</h3>
                    <p className="!mb-0">
                      Vivamus sagittis lacus vel augue laoreet.
                    </p>
                  </div>
                </div>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
            <div className="card !rounded-[0.8rem] xl:mx-6 lg:mx-6 !mt-6 !bg-[#e1f6f0]">
              <div className="card-body p-6">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                      <span className="number !text-[#45c4a0]">03</span>
                    </span>
                  </div>
                  <div>
                    <h3 className="!mb-1 !text-[#45c4a0]">Finalize Product</h3>
                    <p className="!mb-0">
                      Cras mattis consectetur purus sit amet.
                    </p>
                  </div>
                </div>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-[#cacaca] xl:px-0 lg:px-0 !mt-[50px]">
            <h2 className="!text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.2] xl:!text-[2.2rem] !mb-3 !text-white">
              Our Working Process
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal xl:!pr-5 lg:!pr-5">
              Find out everything you need to know and more about how we create
              our business process models.
            </p>
            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
              id dolor id nibh ultricies vehicula ut id elit.
            </p>
            <p className="!mb-6">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum
              id ligula porta felis euismod semper. Aenean lacinia bibendum
              nulla.
            </p>
            <a href="#" className="btn btn-white !rounded-[0.8rem] !mb-0">
              Learn More
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center !text-[#cacaca]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:px-0 lg:px-0 !mt-[50px]">
            <figure className="m-0 p-0">
              <img
                className="img-auto"
                srcSet="/assets/img/illustrations/ui4@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/ui4.png"
                width={800}
                height={477}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-auto lg:!ml-auto xl:px-0 lg:px-0 !mt-[50px]">
            <h2 className="!text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.2] xl:!text-[2.2rem] !mb-3 !text-white">
              Our Solutions
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal xl:!pr-5 lg:!pr-5">
              We carefully consider our solutions to support each and every
              stage of your growth.
            </p>
            <p className="!mb-6">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus maecenas sed.
            </p>
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px]">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <h3 className="counter counter-lg !text-[calc(1.35rem_+_1.2vw)] !tracking-[normal] !leading-none xl:!text-[2.25rem] !mb-1 !text-white">
                  99.7%
                </h3>
                <h5 className="!mb-1 !text-white">Customer Satisfaction</h5>
                <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !text-[#e2626b]" />
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <h3 className="counter counter-lg !text-[calc(1.35rem_+_1.2vw)] !tracking-[normal] !leading-none xl:!text-[2.25rem] !mb-1 !text-white">
                  4x
                </h3>
                <h5 className="!mb-1 !text-white">New Visitors</h5>
                <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five" />
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
