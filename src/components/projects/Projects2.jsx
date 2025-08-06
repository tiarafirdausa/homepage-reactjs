import { projects7 } from "@/data/projects";
import React from "react";
import Pagination from "../common/Pagination";

export default function Projects2() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-9 xl:pt-12 lg:pt-12 md:pt-12 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
        <div className="projects-overflow !mb-10 xl:!mb-20 lg:!mb-20 xl:!mt-10 lg:!mt-10 md:!mt-10">
          {projects7.map((project) => (
            <div className="project item" key={project.id}>
              <div className="flex flex-wrap mx-[-15px]">
                <figure className={project.figureClass}>
                  <img
                    alt="image"
                    src={project.imageSrc}
                    width={project.imageWidth}
                    height={project.imageHeight}
                  />
                </figure>
                <div
                  className="project-details flex justify-center flex-col !px-[15px]"
                  style={project.position}
                >
                  <div
                    className="card shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rellax"
                    data-rellax-xs-speed={0}
                    data-rellax-mobile-speed={0}
                  >
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <div className="post-header">
                        <div
                          className={`inline-flex uppercase !tracking-[0.02rem] text-[0.7rem] font-bold relative align-top !pl-[1.4rem] opacity-100 !text-[${project.categoryColor}] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[${project.categoryColor}] !mb-3`}
                        >
                          {project.category}
                        </div>
                        <h2 className="post-title !mb-3 !leading-[1.35]">
                          {project.title}
                        </h2>
                      </div>
                      <div className="!relative">
                        <p>{project.description}</p>
                        <a
                          href="#"
                          className={`more hover !text-[${project.linkColor}] focus:!text-[${project.linkColor}] hover:!text-[${project.linkColor}]`}
                        >
                          See Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* /.projects-overflow */}
        <nav className="flex justify-center" aria-label="pagination">
          <ul className="pagination">
            <Pagination />
          </ul>
          {/* /.pagination */}
        </nav>
        {/* /nav */}
      </div>
      {/* /.container */}
    </section>
  );
}
