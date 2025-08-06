import React from "react";

export default function Features() {
  return (
    <div className="flex flex-wrap mx-[-15px] !mt-[-50px] xl:mx-[-35px] lg:mx-[-20px] !mb-[4.5rem] xl:!mb-[6rem] lg:!mb-[6rem] md:!mb-[6rem] items-center">
      <div className="md:w-8/12 xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] !mt-[50px] xl:!px-[35px] lg:!px-[20px] max-w-full">
        <figure className="rounded-[0.4rem]">
          <img
            className="rounded-[0.4rem]"
            srcSet="/assets/img/photos/about25@2x.jpg 2x"
            alt="image"
            src="/assets/img/photos/about25.jpg"
            width={650}
            height={555}
          />
        </figure>
      </div>
      {/*/column */}
      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] !mt-[50px] xl:!px-[35px] lg:!px-[20px] max-w-full">
        <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
          Why Choose Us?
        </h2>
        <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-7">
          A few reasons why our valued customers choose us.
        </h3>
        <div className="accordion accordion-wrapper" id="accordionExample">
          <div className="card plain accordion-item">
            <div
              className="card-header p-[0_0_0.8rem_0] !border-0"
              id="headingOne"
            >
              <button
                className="hover:!text-[#343f52] before:!text-[#343f52] accordion-button"
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
              <div className="card-body flex-[1_1_auto] pb-4">
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
              className="card-header p-[0_0_.8rem_0] !border-0"
              id="headingTwo"
            >
              <button
                className="hover:!text-[#343f52] before:!text-[#343f52] collapsed"
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
              <div className="card-body flex-[1_1_auto] pb-4">
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
              className="card-header p-[0_0_.8rem_0] !border-0"
              id="headingThree"
            >
              <button
                className="hover:!text-[#343f52] before:!text-[#343f52] collapsed"
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
              <div className="card-body flex-[1_1_auto] pb-4">
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
  );
}
