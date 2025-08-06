import Counter from "@/components/common/Counter";

import React from "react";

export default function Contact3() {
  return (
    <section id="snippet-3" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] !mt-[-50px] xl:mx-[-35px] lg:mx-[-20px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative">
            <div
              className="shape bg-dot primary rellax !w-[8rem] !h-[8rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50"
              data-rellax-speed={1}
              style={{ top: 0, left: "-1.4rem", zIndex: 0 }}
            />
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
                <figure className="!rounded-[.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative">
                  <img
                    className="!rounded-[.4rem]"
                    srcSet="/assets/img/photos/g5@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g5.jpg"
                    width="350"
                    height="350"
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                  <div className="w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        srcSet="/assets/img/photos/g6@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/g6.jpg"
                        width="375"
                        height="250"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
                    <div className="card !bg-[#e0e9fa] !text-center">
                      <div className="card-body !py-12 !px-[2rem] counter-wrapper">
                        <h3 className="counter !whitespace-nowrap xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                          <Counter max={5000} />+
                        </h3>
                        <p className="!mb-0 text-[0.8rem] font-medium">
                          Satisfied Customers
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
              Let’s Talk
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
              Let's make something great together. We are
              <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]">
                trusted by
              </span>
              over 5000+ clients. Join them by using our services and grow your
              business.
            </p>
            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            </p>
            <a
              href="#"
              className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
            >
              Join Us
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
