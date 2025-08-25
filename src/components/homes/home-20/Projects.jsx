import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Gallery, Item } from "react-photoswipe-gallery";
import { getMedia, getMediaCategories } from "@/services/mediaService";
import { BASE_URL } from "@/config/url";
import Isotope from "isotope-layout";
import imagesloaded from "imagesloaded";

export default function Projects() {
  const [projectCollections, setProjectCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState([]);
  const [activeFilter, setActiveFilter] = useState("*");
  const isotopRef = useRef(null);
  const isotopContainer = useRef();

  const updateCategory = (val) => {
    if (isotopRef.current) {
      isotopRef.current.arrange({
        filter: val,
      });
    }
  };

  const handleFilterClick = (dataFilter) => {
    setActiveFilter(dataFilter);
    updateCategory(dataFilter);
  };

  const initIsotop = () => {
    if (isotopContainer.current) {
      isotopRef.current = new Isotope(isotopContainer.current, {
        itemSelector: ".item",
        layoutMode: "fitRows",
      });
      imagesloaded(isotopContainer.current).on("progress", () => {
        isotopRef.current.layout();
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await getMediaCategories();
        const dynamicFilters = categoryResponse.data.map((cat) => ({
          name: cat.category_name,
          filter: `.${cat.category_name.toLowerCase()}`,
        }));
        const allFilters = [{ name: "All", filter: "*" }, ...dynamicFilters];
        setFilters(allFilters);

        const mediaResponse = await getMedia();
        setProjectCollections(mediaResponse.data);
      } catch (err) {
        setError("Failed to fetch data.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && !error) {
      setTimeout(() => {
        initIsotop();
      }, 100);
    }
  }, [loading, error]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-[2rem] pb-[5rem] xl:!py-24 lg:!py-24 md:!py-24">
        {/* Header */}
        <div className="flex flex-wrap mx-[-15px] max-w-[1240px] md:w-8/12 lg:w-7/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
          <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
            Projects
          </h1>
          <p className="lead text-[1.05rem] !leading-[1.6] xl:!pr-20 lg:!pr-20 xxl:!pr-14">
            Check out some of our awesome projects with creative ideas and great design.
          </p>
        </div>

        <div className="itemgrid grid-view projects-masonry !pt-10">
          {/* Filter */}
          <div className="isotope-filter !relative !z-[5] filter !mb-10">
            <ul className="inline m-0 p-0 list-none">
              {filters.map(({ name, filter }) => (
                <li
                  key={filter}
                  className={`inline ${
                    filter !== "*" &&
                    "before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:ml-2 before:mr-[0.8rem] before:my-0 before:rounded-[100%] before:bg-[rgba(30,34,40,.2)] before:align-[.15rem]"
                  }`}
                >
                  <a
                    className={`filter-item uppercase !tracking-[0.02rem] text-[0.7rem] font-bold cursor-pointer ${
                      activeFilter === filter
                        ? "active"
                        : "hover:!text-[#3f78e0]"
                    }`}
                    data-filter={filter}
                    onClick={() => handleFilterClick(filter)}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Items */}
          <div
            ref={isotopContainer}
            className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] xl:!mt-[-80px] lg:!mt-[-80px] md:!mt-[-80px] max-w-full isotope"
          >
            {projectCollections.map((projectCollection) => (
              <div
                key={projectCollection.id}
                className={`project item group md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full ${projectCollection.category_name.toLowerCase()}`}
              >
                <Gallery>
                  {projectCollection.media.map((media, index) => {
                    const isImage = media.url
                      .toLowerCase()
                      .match(/\.(jpeg|jpg|png|gif)$/);
                    const isVideo = media.url
                      .toLowerCase()
                      .match(/\.(mp4|webm|ogg)$/);

                    // Image
                    if (isImage) {
                      const thumbnailUrl = media.cropped_url
                        ? `${BASE_URL}${media.cropped_url}`
                        : `${BASE_URL}${media.url}`;
                      const originalUrl = `${BASE_URL}${media.url}`;
                      const isFirst = index === 0;
                      const itemStyle = isFirst ? {} : { display: "none" };

                      return (
                        <div key={media.id} style={itemStyle}>
                          <Item original={originalUrl} thumbnail={thumbnailUrl}>
                            {({ ref, open }) => (
                              <figure className="!rounded-[.4rem] !mb-6 relative image-container">
                                <img
                                  className="!rounded-[.4rem] image-item"
                                  src={thumbnailUrl}
                                  alt={projectCollection.title}
                                  ref={ref}
                                  onClick={open}
                                />
                                <a
                                  className="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                                  onClick={open}
                                  data-gallery="projects-group"
                                >
                                  <i className="uil uil-focus-add" />
                                </a>
                              </figure>
                            )}
                          </Item>
                        </div>
                      );
                    }

                    // Video
                    if (isVideo) {
                      const videoUrl = `${BASE_URL}${media.url}`;
                      const thumbnailUrl = media.cropped_url
                        ? `${BASE_URL}${media.cropped_url}`
                        : "/video-thumbnail-placeholder.jpg"; // fallback poster
                      const isFirst = index === 0;
                      const itemStyle = isFirst ? {} : { display: "none" };

                      return (
                        <div key={media.id} style={itemStyle}>
                          <Item
                            original={videoUrl}
                            content={
                              <video controls style={{ maxWidth: "100%" }}>
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            }
                            thumbnail={thumbnailUrl}
                          >
                            {({ ref, open }) => (
                              <figure className="!rounded-[.4rem] !mb-6 relative image-container">
                                <img
                                  className="!rounded-[.4rem] image-item"
                                  src={thumbnailUrl}
                                  alt={projectCollection.title}
                                  ref={ref}
                                  onClick={open}
                                />
                                <a
                                  className="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                                  onClick={open}
                                  data-gallery="projects-group"
                                >
                                  <i className="uil uil-play" />
                                </a>
                              </figure>
                            )}
                          </Item>
                        </div>
                      );
                    }

                    return null;
                  })}
                </Gallery>

                {/* Project Details */}
                <div className="project-details flex justify-center flex-col">
                  <div className="post-header">
                    <h2 className="post-title h3 !text-[1.1rem] !leading-[1.4]">
                      <Link
                        to={`/single-project`}
                        className="!text-[#343f52] hover:!text-[#3f78e0]"
                      >
                        {projectCollection.title}
                      </Link>
                    </h2>
                    <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                      {projectCollection.category_name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
