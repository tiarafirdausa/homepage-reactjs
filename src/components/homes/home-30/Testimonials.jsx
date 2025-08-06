import React from "react";

export default function Testimonials() {
  return (
    <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
      <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !relative xl:!px-[35px] lg:!px-[20px] !mt-[50px]">
        <div
          className="absolute hidden xl:block lg:block md:block"
          style={{
            top: "50%",
            left: "50%",
            width: "130%",
            height: "auto",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
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
                    “Cum sociis natoque penatibus et magnis dis parturient
                    montes.”
                  </p>
                  <div className="flex items-center text-left">
                    <div className="info p-0">
                      <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                        Coriss Ambady
                      </h5>
                      <p className="!mb-0 text-[.8rem]">Financial Analyst</p>
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
                    “Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Vestibulum id ligula porta felis euismod.”
                  </p>
                  <div className="flex items-center text-left">
                    <div className="info p-0">
                      <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                        Cory Zamora
                      </h5>
                      <p className="!mb-0 text-[.8rem]">Marketing Specialist</p>
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
                    “Donec id elit non porta gravida at eget metus. Duis mollis
                    est luctus commodo nisi erat.”
                  </p>
                  <div className="flex items-center text-left">
                    <div className="info p-0">
                      <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                        Barclay Widerski
                      </h5>
                      <p className="!mb-0 text-[.8rem]">Sales Specialist</p>
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
                    “Nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Aenean eu leo pellentesque.”
                  </p>
                  <div className="flex items-center text-left">
                    <div className="info p-0">
                      <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                        Jackie Sanders
                      </h5>
                      <p className="!mb-0 text-[.8rem]">Investment Planner</p>
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
      <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[50px]">
        <h2 className="!text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.2] xl:!text-[2.2rem] !mb-2 xl:!mt-[-1.5rem] lg:!mt-[-1.5rem]">
          Our Community
        </h2>
        <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal !mb-4">
          Customer satisfaction is our major goal. See what our clients are
          saying about our services.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a
          pharetra augue. Maecenas faucibus mollis interdum. Vestibulum id
          ligula porta felis euismod.
        </p>
        <a
          href="#"
          className="btn btn-grape !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] !rounded-[0.8rem] !mt-3"
        >
          All Testimonials
        </a>
      </div>
      {/*/column */}
    </div>
  );
}
