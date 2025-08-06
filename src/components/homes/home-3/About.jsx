import React from "react";

export default function About() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-36 xl:pt-[12.5rem] lg:pt-[12.5rem] md:pt-[12.5rem] pb-24 xl:pb-32 lg:pb-32 md:pb-32">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <h2 className="!text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top !pl-[1.4rem] !tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#54a8c7] !text-[#54a8c7] !mb-3">
              What We Do?
            </h2>
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-9">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-40px] !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
          <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full">
            <div className="icon btn btn-block btn-lg btn-soft-aqua pointer-events-none !mb-6">
              <i className="uil uil-wind-moon" />
            </div>
            <h4 className="!text-[1rem] !leading-[1.45]">24/7 Support</h4>
            <p className="!mb-3">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus. Cras justo.
            </p>
            <a
              href="#"
              className="more hover !text-[#54a8c7] focus:!text-[#54a8c7] hover:!text-[#54a8c7]"
            >
              Learn More
            </a>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full">
            <div className="icon btn btn-block btn-lg btn-soft-aqua pointer-events-none !mb-6">
              <i className="uil uil-shield-exclamation before:content-['\ecb3']" />
            </div>
            <h4 className="!text-[1rem] !leading-[1.45]">Secure Payments</h4>
            <p className="!mb-3">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus. Cras justo.
            </p>
            <a
              href="#"
              className="more hover !text-[#54a8c7] focus:!text-[#54a8c7] hover:!text-[#54a8c7]"
            >
              Learn More
            </a>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full">
            <div className="icon btn btn-block btn-lg btn-soft-aqua pointer-events-none !mb-6">
              <i className="uil uil-laptop-cloud before:content-['\ebb2']" />
            </div>
            <h4 className="!text-[1rem] !leading-[1.45]">Daily Updates</h4>
            <p className="!mb-3">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus. Cras justo.
            </p>
            <a
              href="#"
              className="more hover !text-[#54a8c7] focus:!text-[#54a8c7] hover:!text-[#54a8c7]"
            >
              Learn More
            </a>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full">
            <div className="icon btn btn-block btn-lg btn-soft-aqua pointer-events-none !mb-6">
              <i className="uil uil-phone-volume before:content-['\ec50']" />
            </div>
            <h4 className="!text-[1rem] !leading-[1.45]">Market Research</h4>
            <p className="!mb-3">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus. Cras justo.
            </p>
            <a
              href="#"
              className="more hover !text-[#54a8c7] focus:!text-[#54a8c7] hover:!text-[#54a8c7]"
            >
              Learn More
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] !mb-24 md:!mb-[8rem] items-center">
          <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full !relative !mt-[80px]">
            <div
              className="shape bg-dot rellax !w-[7rem] !h-[12.5rem] absolute z-[1] opacity-50 !bg-[radial-gradient(#54a8c7_2px,transparent_2.5px)]"
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
            <figure className="!rounded-[.4rem] relative z-[2]">
              <img
                className="!rounded-[.4rem]"
                srcSet="/assets/img/photos/about7@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/about7.jpg"
                width={575}
                height={550}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="lg:w-5/12 xl:w-4/12 xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full !mt-[80px]">
            <h2 className="!text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top !pl-[1.4rem] !tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#54a8c7] !text-[#54a8c7] !mb-3">
              How It Works?
            </h2>
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-7">
              Here are the 3 working steps on success.
            </h3>
            <div className="flex flex-row !mb-6">
              <div>
                <span className="icon btn btn-block btn-soft-aqua pointer-events-none !mr-5">
                  <span className="number !text-[0.9rem]">1</span>
                </span>
              </div>
              <div>
                <h4 className="!mb-1 !text-[1rem] !leading-[1.45]">
                  Collect Ideas
                </h4>
                <p className="!mb-0">
                  Nulla vitae elit libero pharetra augue dapibus. Praesent
                  commodo cursus.
                </p>
              </div>
            </div>
            <div className="flex flex-row !mb-6">
              <div>
                <span className="icon btn btn-block btn-soft-aqua pointer-events-none !mr-5">
                  <span className="number !text-[0.9rem]">2</span>
                </span>
              </div>
              <div>
                <h4 className="!mb-1 !text-[1rem] !leading-[1.45]">
                  Data Analysis
                </h4>
                <p className="!mb-0">
                  Vivamus sagittis lacus vel augue laoreet. Etiam porta sem
                  malesuada magna.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <span className="icon btn btn-block btn-soft-aqua pointer-events-none !mr-5">
                  <span className="number !text-[0.9rem]">3</span>
                </span>
              </div>
              <div>
                <h4 className="!mb-1 !text-[1rem] !leading-[1.45]">
                  Finalize Product
                </h4>
                <p className="!mb-0">
                  Cras mattis consectetur purus sit amet. Aenean lacinia
                  bibendum nulla sed.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] items-center">
          <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] sm:!mt-[80px] xl:!px-[7.5px] lg:!px-[7.5px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] xl:!order-2 lg:!order-2 !relative">
            <div
              className="shape !rounded-[50%] bg-line aqua rellax !w-[8rem] !h-[8rem] !absolute z-[1] opacity-50"
              data-rellax-speed={1}
              style={{ top: "-2rem", right: "-1.9rem" }}
            />
            <div
              className="shape rounded !bg-[#edf2fc] rellax xl:block lg:block md:block absolute z-[1]"
              data-rellax-speed={0}
              style={{
                bottom: "-1.8rem",
                left: "-1.5rem",
                width: "85%",
                height: "90%",
              }}
            />
            <figure className="rounded-[0.4rem] relative z-[2]">
              <img
                className="rounded-[.4rem]"
                srcSet="/assets/img/photos/about9@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/about9.jpg"
                width={575}
                height={550}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] sm:!mt-[80px] xl:!px-[7.5px] lg:!px-[7.5px] max-w-full">
            <h2 className="!text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top !pl-[1.4rem] !tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#54a8c7] !text-[#54a8c7] !mb-3">
              Why Choose Us?
            </h2>
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-7">
              A few reasons why our valued customers choose us.
            </h3>
            <div className="accordion accordion-wrapper" id="accordionExample">
              <div className="card plain accordion-item">
                <div
                  className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                  id="headingOne"
                >
                  <button
                    className="before:!text-[#54a8c7] hover:!text-[#54a8c7] !p-[0_0_0_1.1rem] !text-[.9rem] accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Professional Design
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                <div
                  className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                  id="headingTwo"
                >
                  <button
                    className="before:!text-[#54a8c7] hover:!text-[#54a8c7] !p-[0_0_0_1.1rem] !text-[.9rem] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Top-Notch Support
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                <div
                  className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                  id="headingThree"
                >
                  <button
                    className="before:!text-[#54a8c7] hover:!text-[#54a8c7] !p-[0_0_0_1.1rem] !text-[.9rem] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Header and Slider Options
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
            </div>
            {/*/.accordion */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
