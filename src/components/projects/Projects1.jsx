import { projects6 } from "@/data/projects";

import React, { useEffect } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Projects1() {
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook

    document.querySelectorAll(".isotope").forEach((elm, i) => {
      const isotope = new Isotope(".isotope" + i, {
        itemSelector: ".item",
        layoutMode: "masonry", // or 'fitRows', depending on your layout needs
      });
      imagesloaded(".isotope" + i).on("progress", function (instance, image) {
        // Trigger Isotope layout
        isotope.layout();
      });
    });
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    setTimeout(() => {
      initIsotop();
    }, 100);
  }, []);
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] !mt-6">
          <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="projects-tiles">
              {projects6.map((project, i) => (
                <div key={project.id} className="project itemgrid grid-view">
                  <Gallery>
                    <div
                      className={`flex flex-wrap mx-[-15px] isotope isotope${i} !mt-[-30px]`}
                    >
                      <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                        <div className="project-details flex justify-center flex-col">
                          <div className="post-header">
                            <div
                              className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold"
                              style={{ color: project.color }}
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
                              className="more hover"
                              style={{ color: project.color }}
                            >
                              See Project
                            </a>
                          </div>
                        </div>
                      </div>
                      {project.images.map((image, index) => (
                        <div
                          key={index}
                          className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
                        >
                          <Item
                            original={image.fullSrc}
                            thumbnail={image.fullSrc}
                            width={image.width}
                            height={image.height}
                          >
                            {({ ref, open }) => (
                              <figure
                                className="itooltip  hover-scale rounded group"
                                title={`<h5 class="itooltip-light !mb-0">${image.title}</h5>`}
                              >
                                <a
                                  onClick={open}
                                  data-glightbox={`title: ${image.title}`}
                                  data-gallery={`project-${project.id}`}
                                >
                                  <img
                                    ref={ref}
                                    className="transition-all duration-[0.35s] ease-in-out group-hover:scale-105"
                                    alt="image"
                                    src={image.src}
                                    width={image.width}
                                    height={image.height}
                                  />
                                </a>
                              </figure>
                            )}
                          </Item>
                        </div>
                      ))}
                    </div>
                  </Gallery>
                </div>
              ))}
              {/* /.project */}
            </div>
            {/* /.projects-tiles */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
