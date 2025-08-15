import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Gallery, Item } from "react-photoswipe-gallery";
import { getMedia } from "@/services/mediaService";
import { BASE_URL } from "@/config/url";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getMedia();
        const formattedProjects = response.data.map((item) => ({
          id: item.id,
          title: item.title,
          category: item.category_name,
          src: `${BASE_URL}${item.media[0]?.url}`,
          fullImage: `${BASE_URL}${item.media[0]?.url}`,
          srcSet: `${BASE_URL}${item.media[0]?.url}`,
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-11/12 xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-10">
            <h2 className="!text-[0.8rem] uppercase !text-[#aab0bc] !text-center !mb-3 !leading-[1.35]">
              Our Projects
            </h2>
            <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !text-center lg:!px-5 xl:!px-10 xxl:!px-[6rem] !mb-0">
              Check out some of our awesome projects with creative ideas and great design.
            </h3>
          </div>
        </div>
        <Gallery>
          <div className="itemgrid grid-view projects-masonry">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] xl:!mt-[-80px] lg:!mt-[-80px] md:!mt-[-80px] isotope">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="project item group md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full"
                >
                  <Item
                    original={project.fullImage}
                    thumbnail={project.fullImage}
                    width={410}
                    height={440}
                  >
                    {({ ref, open }) => (
                      <figure className="!rounded-[.4rem] !mb-6 relative image-container">
                        <img
                          className="!rounded-[.4rem] image-item"
                          srcSet={project.srcSet}
                          alt="image"
                          src={project.src}
                          ref={ref}
                        />
                        <a
                          className="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                          onClick={open}
                          data-gallery="projects-group"
                        >
                          <i className="uil uil-focus-add before:content-['\eb22']" />
                        </a>
                      </figure>
                    )}
                  </Item>
                  <div className="project-details flex justify-center flex-col">
                    <div className="post-header">
                      <h2 className="post-title h3 !text-[1.1rem] !leading-[1.4]">
                        <Link
                          to={`/single-project`}
                          className="!text-[#343f52] hover:!text-[#3f78e0]"
                        >
                          {project.title}
                        </Link>
                      </h2>
                      <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                        {project.category}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Gallery>
      </div>
    </section>
  );
}