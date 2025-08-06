import React from "react";

export default function Solutions() {
  return (
    <section className="wrapper bg-[rgba(246,247,249,1)] !relative min-h-[60vh] lg:!flex items-center">
      <div
        className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full xl:!absolute lg:!absolute top-0 !right-0 image-wrapper bg-image !h-full bg-cover bg-[center_center] bg-no-repeat bg-scroll z-0 min-h-[25rem] xl:h-auto lg:h-auto"
        style={{ backgroundImage: "url(/assets/img/photos/bg39.jpg)" }}
      >
        <div className="divider !text-[#f6f7f9] divider-v-start hidden xl:block lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 1200">
            <g />
            <g>
              <g>
                <polygon
                  fill="currentColor"
                  points="6 0 0 0 0 1200 6 1200 54 0 6 0"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      {/*/column */}
      <div className="container">
        <div className="flex flex-wrap mx-0">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
            <div className="pt-[4.5rem] pb-20 xl:pb-[7rem] lg:pb-[7rem] md:pb-[7rem] xl:!py-[6rem] lg:!py-[6rem] xl:!pr-20 lg:!pr-20">
              <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
                Our Solutions
              </h2>
              <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] !tracking-[-0.03em] !mb-5">
                Just sit &amp; relax while we take care of your business needs.
              </h3>
              <p className="!mb-6">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus. Maecenas sed
                diam eget risus varius blandit sit amet non magna. Praesent
                commodo cursus magna.
              </p>
              <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px]">
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                  <h3 className="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none xl:!text-[2.2rem] !mb-1">
                    99.7%
                  </h3>
                  <h6 className="!text-[0.85rem] !mb-1">
                    Customer Satisfaction
                  </h6>
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five" />
                </div>
                {/*/column */}
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                  <h3 className="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none xl:!text-[2.2rem] !mb-1">
                    4x
                  </h3>
                  <h6 className="!text-[0.85rem] !mb-1">New Visitors</h6>
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five" />
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
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
