import { teamMembers } from "@/data/team";

import React from "react";

export default function Team() {
  return (
    <>
      {" "}
      <div className="flex flex-wrap mx-[-15px] !mb-3">
        <div className="md:w-10/12 lg:w-full xl:w-10/12 xxl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
          <h2 className="!text-[.75rem] uppercase !text-[#747ed1] !tracking-[0.02rem] !leading-[1.35] !mb-3">
            Our Team
          </h2>
          <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-7 lg:!px-36 xl:!px-32">
            Think unique and be innovative. Make a difference with Sandbox.
          </h3>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
      <div className="flex flex-wrap mx-[-15px] grid-view md:mx-[-20px] lg:mx-[-20px] xl:mx-[-25px] !mt-[-40px] xl:!mt-0 lg:!mt-0 xl:!mb-[10rem] lg:!mb-[10rem] md:!mb-[10rem]">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full md:!mt-[40px] max-md:!mt-[40px]"
          >
            <div className="!relative">
              <div
                className="shape !rounded-[.4rem] !bg-[#f2f3fb] rellax xl:block lg:block md:block absolute"
                data-rellax-speed={0}
                style={{
                  bottom: "-0.75rem",
                  right: "-0.75rem",
                  width: "98%",
                  height: "98%",
                  zIndex: 0,
                }}
              />
              <div className="card">
                <figure className="card-img-top">
                  <img
                    className="max-w-full h-auto"
                    srcSet={member.imageSrcSet}
                    alt="image"
                    src={member.imageSrc}
                    width={300}
                    height={300}
                  />
                </figure>
                <div className="card-body px-6 py-5">
                  <h4 className="!mb-1">{member.name}</h4>
                  <p className="!mb-0 text-[.85rem]">{member.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/*/column */}
      </div>
    </>
  );
}
