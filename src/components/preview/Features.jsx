import React from "react";

import Technologies from "../common/Technologies";
export default function Features() {
  return (
    <div className="container pb-6 xl:pb-8 lg:pb-8 md:pb-8">
      <div className="flex flex-wrap mx-[-15px] row-cols-2 row-cols-md-4 row-cols-lg-5 xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] !text-center justify-center pb-24 xl:pb-32 lg:pb-32 md:pb-32">
        <Technologies />
      </div>
      {/*/.row */}
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
        <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative">
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              width: "130%",
              height: "auto",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
            }}
          >
            <img
              className="w-full"
              alt="image"
              src="/assets/img/photos/blurry.png"
              width={1400}
              height={1080}
            />
          </div>
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
            <div className="md:w-6/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !self-end xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
              <div className="card !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    <p>
                      “Sandbox is really attractive and it saves my time. The
                      support team is really amazing.”
                    </p>
                    <div className="flex items-center text-left">
                      <div className="info p-0">
                        <h5 className="!mb-0">stevenstrange</h5>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !self-end xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
              <div className="card !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    <p>
                      “This is just next level stuff in terms of quality, docs
                      and features. I don't think I'm going to need or tolerate
                      any other template from now on.”
                    </p>
                    <div className="flex items-center text-left">
                      <div className="info p-0">
                        <h5 className="!mb-0">70656e6973</h5>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-6/12 xl:w-5/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
              <div className="card !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    <p>
                      “I've been a Themeforest user for almost 10 years and I
                      have purchased well over 100 themes during my time. This
                      theme is amongst the best here.”
                    </p>
                    <div className="flex items-center text-left">
                      <div className="info p-0">
                        <h5 className="!mb-0">bmwe92m3</h5>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !self-start xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
              <div className="card !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    <p>
                      “Simply the best templates that I have bought so far.
                      Super clean code, intuitive documentations, and most
                      important of all the best design.”
                    </p>
                    <div className="flex items-center text-left">
                      <div className="info p-0">
                        <h5 className="!mb-0">oziuji</h5>
                      </div>
                    </div>
                  </blockquote>
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
        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
          <h2 className="!text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.2] xl:!text-[2.2rem] !mb-4 xl:!mt-[-1.5rem] lg:!mt-[-1.5rem]">
            Our top priority is ensuring customer satisfaction.
          </h2>
          <p className="lead !text-[1.1rem] !leading-[1.6] !mb-6">
            Don't take our word for it. Hear from customers about Sandbox.
          </p>
          <a
            href="https://themeforest.net/item/sandbox-modern-multipurpose-tailwind-css-template/reviews/51340309"
            className="btn btn-lg btn-grape !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] btn-icon btn-icon-end !rounded-[0.8rem]"
            target="_blank"
          >
            All Reviews
            <i className="uil uil-arrow-up-right !ml-[.3rem] before:content-['\e950']" />
          </a>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
  );
}
