import { projectData } from "@/data/projects";

import { Link } from "react-router-dom";

import React, { useEffect, useRef, useState } from "react";
export default function Projects5() {
  const isotopRef = useRef(null);
  // Handle filter item click

  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotopRef.current = new Isotope(isotopContainer.current, {
      itemSelector: ".item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        // Trigger Isotope layout
        isotopRef.current.layout();
      }
    );
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    setTimeout(() => {
      initIsotop();
    }, 100);
  }, []);
  return (
    <section id="snippet-5" className="wrapper !bg-[#ffffff]  ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-8">
            <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !text-center !mb-3 !leading-[1.35]">
              Our Projects
            </h2>
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !text-center">
              Check out some of our awesome projects with creative ideas and
              great design.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="itemgrid grid-view projects-masonry">
          <div
            ref={isotopContainer}
            className="flex  flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] xl:!mt-[-80px] lg:!mt-[-80px] md:!mt-[-80px] isotope"
          >
            {projectData.map((project) => (
              <div
                key={project.projectId}
                className={`project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!mt-[80px] xl:!px-[20px] lg:!mt-[80px] lg:!px-[20px] md:!mt-[80px] md:!px-[20px] !px-[15px] !mt-[50px] max-w-full ${project.projectType}`}
              >
                <figure className="lift rounded !mb-6">
                  <Link to={`/single-project`}>
                    <img
                      alt="image"
                      src={project.imageUrl}
                      width={project.imageWidth}
                      height={project.imageHeight}
                    />
                  </Link>
                </figure>
                <div className="project-details flex justify-center flex-col">
                  <div className="post-header">
                    <div
                      className="inline-flex uppercase !tracking-[0.02rem] text-[0.7rem] font-bold relative align-top !pl-[1.4rem] opacity-100  before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#7cb798] !mb-2"
                      style={{ color: project.categoryColor }}
                    >
                      <span
                        className="before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4"
                        style={{ color: project.categoryColor }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3 className="post-title">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* /.row */}
        </div>
        {/* /.grid */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
