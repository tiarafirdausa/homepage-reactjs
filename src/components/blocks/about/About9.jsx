import React from "react";

import { timelineData } from "@/data/experiences";
export default function About9() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[6rem] xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] items-center xl:!mt-[8rem] lg:!mt-[8rem] !mb-[6rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
          <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mx-auto !mt-[50px]">
            <div className="img-mask mask-3 xxl:!px-5">
              <img
                srcSet="/assets/img/avatars/avatar@2x.jpg 2x"
                alt="image"
                src="/assets/img/avatars/avatar.jpg"
                width={560}
                height={525}
              />
            </div>
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h2 className="!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !mb-3">
              More about me
            </h2>
            <p className="lead !text-[1.2rem] font-medium !leading-[1.65]">
              👋 Hello! I'm Camille, a multidisciplinary product designer 🧸
              based in New York City 🚕. I’m very passionate about the work 💌
              that I do.
            </p>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh ut fermentum massa justo
              sit amet risus.
            </p>
            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <a
              href="#"
              className="btn btn-navy !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-end !mt-2"
            >
              Learn More
              <i className="uil uil-arrow-up-right !ml-[.3rem] before:content-['\e950']" />
            </a>
          </div>
          {/*/column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px]">
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mx-auto !mt-[50px]">
            <h2 className="!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !mb-3">
              My experiences
            </h2>
            <p className="lead !text-[1.2rem] !font-regular !leading-[1.6] xxl:!pr-8">
              I've had the pleasure to work with companies 🏢 across a variety
              of industries 🏛️ I'm always interested in new ✨ and exciting
              adventures 🧨
            </p>
            <a
              href="#"
              className="btn btn-navy !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-end !mt-2"
            >
              Download Resume
              <i className="uil uil-arrow-up-right !ml-[.3rem] before:content-['\e950']" />
            </a>
          </div>
          {/*/column */}
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <ul className="timeline xl:table lg:table md:table !w-full !m-0 !p-0 !list-none">
              {timelineData.map((entry, index) => (
                <li
                  key={index}
                  className="relative !pl-8 xl:table-row xl:p-0 lg:table-row lg:p-0 md:table-row md:p-0"
                >
                  <div className="timeline-info meta uppercase !tracking-[0.02rem] font-bold !text-[#aab0bc] !text-[0.7rem] whitespace-nowrap !mb-2 xl:text-right xl:table-cell xl:align-top xl:!pr-6 lg:text-right lg:table-cell lg:align-top lg:!pr-6 md:text-right md:table-cell md:align-top md:!pr-6">
                    {entry.date}
                  </div>
                  <div
                    className={`timeline-marker absolute w-[0.6rem] !text-[#3f78e0] left-0 inset-y-0 xl:relative xl:table-cell xl:align-top lg:relative lg:table-cell lg:align-top md:relative md:table-cell md:align-top before:w-[0.55rem] before:h-[0.55rem] before:content-[''] before:block before:absolute before:rounded-[100%] before:left-0 before:top-[0.2rem] before:bg-[#3f78e0] ${
                      entry.hasBottomLine
                        ? "after:w-px after:content-[''] after:block after:absolute after:left-1 after:top-4 after:bottom-0 after:bg-[rgba(164,174,198,.2)]"
                        : ""
                    }`}
                  />
                  <div className="table-cell align-top pb-8 xl:!pl-6 lg:!pl-6 md:!pl-6">
                    <h3 className="timeline-title xl:!mt-[-0.25rem] lg:!mt-[-0.25rem] md:!mt-[-0.25rem]">
                      {entry.title}
                    </h3>
                    <p className="!m-0">{entry.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/*/column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
