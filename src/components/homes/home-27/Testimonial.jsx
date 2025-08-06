import React from "react";

export default function Testimonial() {
  return (
    <div className="flex flex-wrap mx-[-15px] !relative !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
      <figure
        className="!rounded-[.4rem] absolute hidden lg:block xl:block !px-[15px]"
        style={{
          top: "50%",
          right: 0,
          width: "45%",
          height: "auto",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      >
        <img
          className="!rounded-[.4rem]"
          srcSet="/assets/img/photos/tei1@2x.jpg 2x"
          alt="image"
          src="/assets/img/photos/tei1.jpg"
          width={575}
          height={383}
        />
      </figure>
      <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center">
        <div className="card !bg-[rgba(246,247,249,1)]">
          <div className="card-body xl:!p-10 lg:!p-10 md:!p-10 xxl:!py-24 p-[40px]">
            <div className="flex flex-wrap mx-0">
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] max-w-full xl:!pl-10">
                <span className="ratings inline-block relative w-20 h-[0.8rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five text-[1rem] !mb-3" />
                <blockquote className="!pl-0 text-[1rem] !mb-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem]">
                  <p>
                    “Donec id elit non mi porta gravida at eget metus. Vivamus
                    mollis est non commodo luctus, nisi erat porttitor ligula,
                    eget lacinia odio sem nec elit. Duis mollis porta est non
                    commodo luctus.”
                  </p>
                  <div className="flex items-center justify-center !text-center">
                    <div className="info p-0">
                      <h4 className="tracking-[-0.03em] !mb-1">
                        Coriss Ambady
                      </h4>
                      <p className="!mb-0 text-[.8rem]">Financial Analyst</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
      </div>
      {/* /column */}
    </div>
  );
}
