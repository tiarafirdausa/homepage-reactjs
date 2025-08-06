import React from "react";

import { process } from "@/data/process";
export default function About() {
  return (
    <section id="about">
      <div className="wrapper bg-[rgba(246,247,249,1)]">
        <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
          <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-30px] items-center">
            <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 lg:!order-2 !mx-auto md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[30px]">
              <div className="img-mask mask-2">
                <img
                  alt="image"
                  src="/assets/img/photos/about30.jpg"
                  width={1000}
                  height={850}
                />
              </div>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[30px]">
              <h2 className="xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold !mb-3">
                About Me
              </h2>
              <p className="lead !text-[1.1rem] !leading-[1.55] font-medium">
                I'm Caitlyn Sandbox, a photographer specializing in food, drink
                and product photography.
              </p>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa
                justo sit amet risus. Etiam porta sem malesuada magna mollis
                euismod. Vestibulum id ligula.
              </p>
              <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Aenean lacinia bibendum nulla sed
                consectetur. Curabitur blandit tempus porttitor. Lorem ipsum
                dolor sit amet, consectetur.
              </p>
              <a
                href="#"
                className="btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                Learn More
              </a>
            </div>
            {/*/column */}
          </div>
          {/* /.row */}
          <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-10 xl:!mt-16 lg:!mt-16 md:!mt-16">
            <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px]">
              <h2 className="xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold !mb-3">
                My Working Process
              </h2>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Fusce dapibus, tellus ac cursus. Aenean eu leo quam.
              </p>
            </div>
            {/* /column */}
            <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px]">
              <div className="flex flex-wrap mx-[-15px] !mt-[-30px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px]">
                {process.map((column, index) => (
                  <div
                    key={index}
                    className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px]"
                  >
                    <div className="flex flex-row">
                      <div>
                        <span className="icon btn btn-circle btn-yellow !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !mr-4 !mt-1 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                          <span className="number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0">
                            {column.number}
                          </span>
                        </span>
                      </div>
                      <div>
                        <h4 className="!mb-1">{column.title}</h4>
                        <p className="!mb-0">{column.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.wrapper */}
    </section>
  );
}
