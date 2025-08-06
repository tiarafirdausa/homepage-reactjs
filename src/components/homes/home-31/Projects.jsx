import React from "react";

import { projects1 } from "@/data/projects";
export default function Projects() {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] !text-center">
        <div className="xl:w-10/12 lg:w-10/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-14">
          <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase !text-[#aab0bc] !mb-3">
            Latest Projects
          </h2>
          <h3 className="!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !tracking-[-0.03em] !mb-[10]">
            Check out some of our
            <span className="!relative z-[1] style-1 primary before:content-[''] before:z-[-1] before:absolute before:opacity-100 before:block before:-translate-x-2/4 before:-translate-y-2/4 before:-rotate-1 before:w-[111%] before:h-[110%] before:rounded-[80%] before:border-t-0 before:border-[3px] before:border-solid before:border-[#3f78e0] before:left-2/4 before:!top-[52%] after:content-[''] after:z-[-1] after:absolute after:opacity-100 after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:-translate-x-2/4 after:-translate-y-2/4 after:-rotate-2 after:w-[107%] after:h-[111%] after:rounded-[80%] after:border-l-0 after:border-b-0 after:border-[3px] after:border-solid after:border-[#3f78e0] after:left-2/4 after:top-[52%] max-xl:before:!hidden max-xl:after:!hidden max-lg:before:!hidden max-lg:after:!hidden max-md:before:!hidden max-md:after:!hidden max-sm:before:!hidden max-sm:after:!hidden">
              <em>awesome</em>
            </span>
            projects with creative ideas and great design.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      {projects1.map((project) => (
        <div
          key={project.id}
          className="flex flex-wrap mx-[-15px] !mt-[-50px] items-center !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]"
        >
          <div
            className={`xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full ${
              project.order === 2 ? "xl:!order-2 lg:!order-2" : ""
            } !mt-[50px]`}
          >
            <div className="card" style={{ backgroundColor: project.cardBg }}>
              <div className="card-body !p-12 overflow-hidden">
                <figure>
                  <a href="#">
                    <img
                      srcSet={project.imageSrcSet}
                      alt={project.imageAlt}
                      src={project.imageSrc}
                      width={project.imageWidth}
                      height={project.imageHeight}
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
            <h3 className="h1 post-title !tracking-[-0.03em] !mb-2 !leading-[1.3]">
              {project.title}
            </h3>
            <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-semibold !text-[#aab0bc] !mb-4">
              {project.categories.map((category, index) => (
                <span key={index}>
                  {category}
                  {index < project.categories.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
            <p className="!mb-6">{project.description}</p>
            <a
              href="#"
              className={`btn ${project.buttonClass} !text-white rounded`}
            >
              {project.buttonText}
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
