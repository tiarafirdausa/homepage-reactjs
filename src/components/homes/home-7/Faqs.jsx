import React from "react";

export default function Faqs() {
  return (
    <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
      <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
        <figure className="m-0 p-0">
          <img
            className="w-auto"
            srcSet="/assets/img/illustrations/i17@2x.png 2x"
            alt="image"
            src="/assets/img/illustrations/i17.png"
            width={800}
            height={531}
          />
        </figure>
      </div>
      {/*/column */}
      <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
        <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold xxl:!mt-8 !mb-3">
          Why Choose Us?
        </h3>
        <p className="lead !text-[1.1rem] !leading-[1.5] font-medium !mb-6">
          Find out everything you need to know about creating a business process
          model.
        </p>
        <div className="accordion accordion-wrapper" id="accordionExample">
          <div className="card plain accordion-item">
            <div
              className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
              id="headingOne"
            >
              <button
                className="before:!text-[#747ed1] hover:!text-[#747ed1] accordion-button p-[0_0_0_1.1rem] !text-[.9rem]"
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
                className="before:!text-[#747ed1] hover:!text-[#747ed1] collapsed p-[0_0_0_1.1rem] !text-[.9rem]"
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
                className="before:!text-[#747ed1] hover:!text-[#747ed1] collapsed p-[0_0_0_1.1rem] !text-[.9rem]"
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
  );
}
