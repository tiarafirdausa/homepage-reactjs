import React from "react";

export default function About4() {
  return (
    <section id="snippet-5" className="wrapper !bg-[#ffffff]  ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                srcSet="/assets/img/illustrations/i2@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i2.png"
                width={800}
                height={538}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h2 className="!text-[.75rem] uppercase text-line relative align-top !pl-[1.4rem] inline-flex !tracking-[0.02rem] !leading-[1.35] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0] !text-[#3f78e0] !mb-3">
              Why Choose Us?
            </h2>
            <h3 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-7">
              A few reasons why our valued customers choose us.
            </h3>
            <div className="accordion accordion-wrapper" id="accordionExample">
              <div className="card plain accordion-item">
                <div
                  className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                  id="headingOne"
                >
                  <button
                    className="accordion-button !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
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
                  <div className="card-body !p-[0_0_0_1.1rem]">
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
                    className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
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
                  <div className="card-body !p-[0_0_0_1.1rem]">
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
                    className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
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
                  <div className="card-body !p-[0_0_0_1.1rem]">
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
      </div>
    </section>
  );
}
