import React from "react";
import { Link } from "react-router-dom";

import { projects9 } from "@/data/projects";
import Counter from "@/components/common/Counter";
export default function Projects() {
  return (
    <section className="wrapper !bg-[#ffffff]" id="demos">
      <div className="container py-[4.5rem] xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem] xl:pb-36 lg:pb-36 md:pb-36">
        <div className="flex flex-wrap mx-[-15px] !mb-10">
          <div className="md:w-9/12 lg:w-7/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="counter-wrapper">
              <h3 className="xl:!text-[3.5rem] max-xl:!text-[calc(1.475rem_+_2.7vw)] !mb-3 !text-[#747ed1] !leading-none !text-center counter">
                <Counter max={21} />
              </h3>
            </div>
            <h2 className="!text-[calc(1.335rem_+_1.02vw)] font-bold !leading-[1.2] xl:!text-[2.1rem] !mb-3 !text-center">
              Functional, impressive and rich demos to start with
            </h2>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="demos-wrapper">
          <h2 className="!text-[0.8rem] !leading-[1.35] !font-bold uppercase !text-[#aab0bc] !mb-6 !text-center">
            New Demos
          </h2>
          {projects9.map((project) => (
            <div key={project.id} className="project !mb-10">
              <div className="card" style={{ backgroundColor: project.cardBg }}>
                <div className="card-body xl:!pl-14 px-[40px] py-0 overflow-hidden">
                  <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-35px] items-center">
                    <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full">
                      <div className="flex flex-wrap mx-[-17.5px]">
                        {project.images.map((image, index) => (
                          <div
                            key={index}
                            className="w-6/12 flex-[0_0_auto] px-[17.5px] max-w-full"
                          >
                            <figure
                              className={`itooltip ${image.tooltipClass} ${
                                index === 0 ? "!mt-9" : ""
                              }`}
                              title={`<h5 class=" ${image.tooltipClass} !mb-0">Click to see the demo</h5>`}
                            >
                              <Link to={project.demoLink} target="_blank">
                                <img
                                  className={`shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] ${image.className}`}
                                  srcSet={image.srcSet}
                                  alt={image.alt}
                                  src={image.src}
                                  width={image.width}
                                  height={image.height}
                                />
                              </Link>
                            </figure>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="xl:w-5/12 lg:w-5/12 flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full hidden xl:block lg:block">
                      <h2 className="post-title xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-4 !leading-[1.35]">
                        {project.title}
                      </h2>
                      <ul className="pl-0 list-none bullet-grape flex flex-wrap mx-[-15px] !ml-0 !mt-[-10px]">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full relative !pl-5 !mt-[10px]"
                          >
                            <span>
                              <i
                                className="uil uil-check before:content-['\e9dd'] absolute top-[-0.2rem] text-[1rem]"
                                style={{ color: feature.iconColor }}
                              />
                            </span>
                            <span>{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={project.demoLink}
                        target="_blank"
                        className={`btn btn-sm ${project.button.className} !text-white !bg-[${project.button.bgColor}] border-[${project.button.borderColor}] hover:text-white hover:bg-[${project.button.bgColor}] hover:!border-[${project.button.borderColor}] active:text-white active:bg-[${project.button.bgColor}] active:border-[${project.button.borderColor}] disabled:text-white disabled:bg-[${project.button.bgColor}] disabled:border-[${project.button.borderColor}] !rounded-[50rem] !mt-1`}
                      >
                        {project.button.text}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* /.project */}
          <div className="text-center !mt-12">
            <a
              href="#"
              className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
            >
              See All Demos
            </a>
          </div>
        </div>
        {/* /.demos-wrapper */}
      </div>
      {/* /.container */}
      <div className="overflow-hidden">
        <div className="divider !text-[#f2f3fb] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="currentColor"
              d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
            />
          </svg>
        </div>
      </div>
      {/* /.overflow-hidden */}
    </section>
  );
}
