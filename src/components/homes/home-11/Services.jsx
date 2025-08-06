import React from "react";

import { services } from "@/data/services";
export default function Services() {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] !text-center">
        <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
          <h2 className="!text-[.75rem] uppercase !text-[#747ed1] !tracking-[0.02rem] !leading-[1.35] !mb-3">
            What We Do?
          </h2>
          <h3 className="xl:!text-[1.8rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.3] font-bold !mb-10 xl:!px-10">
            The service we offer is specifically designed to meet your needs.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="relative !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
        <div
          className="shape !rounded-[50%] rellax !w-[6rem] !h-[6rem] !absolute bg-[#f2f3fb]"
          data-rellax-speed={1}
          style={{ bottom: "-0.5rem", right: "-2.5rem", zIndex: 0 }}
        />
        <div
          className="shape bg-dot primary rellax !w-[6rem] !h-[7rem] absolute opacity-50 bg-[radial-gradient(#747ed1_2px,transparent_2.5px)]"
          data-rellax-speed={1}
          style={{ top: "-0.5rem", left: "-2.5rem", zIndex: 0 }}
        />
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] !text-center">
          {services.map((elm, i) => (
            <div
              key={i}
              className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full"
            >
              <div className="card">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <div className="icon btn btn-circle btn-lg btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mb-3 xl:!text-[1.3rem] !w-[3rem] lg:!text-[calc(1.255rem_+_0.06vw)] md:!text-[calc(1.255rem_+_0.06vw)] max-md:!text-[calc(1.255rem_+_0.06vw)] !h-[3rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                    <i className={elm.iconClass} />
                  </div>
                  <h4>{elm.title}</h4>
                  <p className="!mb-2">{elm.description}</p>
                  <a
                    href="#"
                    className="more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]"
                  >
                    Learn More
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
          ))}
        </div>
        {/*/.row */}
      </div>
      {/* /.relative */}
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
        <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
          <figure className="m-0 p-0">
            <img
              className="w-auto"
              srcSet="/assets/img/illustrations/i11@2x.png 2x"
              alt="image"
              src="/assets/img/illustrations/i11.png"
              width={800}
              height={580}
            />
          </figure>
        </div>
        {/*/column */}
        <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
          <h2 className="!text-[.75rem] uppercase !text-[#747ed1] !tracking-[0.02rem] !leading-[1.35] !mb-3">
            Why Choose Us?
          </h2>
          <h3 className="xl:!text-[1.8rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.3] font-bold !mb-7">
            We bring solutions to make life easier for our clients.
          </h3>
          <div className="accordion accordion-wrapper" id="accordionExample">
            <div className="card plain accordion-item">
              <div
                className="card-header p-[0_0_0.8rem_0] !border-0"
                id="headingOne"
              >
                <button
                  className="hover:!text-[#747ed1] before:!text-[#747ed1] accordion-button"
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
                className="card-header p-[0_0_.8rem_0] !border-0"
                id="headingTwo"
              >
                <button
                  className="hover:!text-[#747ed1] before:!text-[#747ed1] collapsed"
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
                className="card-header p-[0_0_.8rem_0] !border-0"
                id="headingThree"
              >
                <button
                  className="hover:!text-[#747ed1] before:!text-[#747ed1] collapsed"
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
    </>
  );
}
