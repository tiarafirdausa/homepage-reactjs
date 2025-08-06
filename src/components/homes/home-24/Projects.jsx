import { useEffect, useRef, useState } from "react";

import { projects5 } from "@/data/projects";
import { Gallery, Item } from "react-photoswipe-gallery";
export default function Projects({ bgColor = "bg-[rgba(246,247,249,1)]" }) {
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState("*");

  // Array of filter items
  const filterItems = [
    { label: "All", dataFilter: "*" },
    { label: "Foods", dataFilter: ".foods" },
    { label: "Drinks", dataFilter: ".drinks" },
    { label: "Events", dataFilter: ".events" },
    { label: "Pastries", dataFilter: ".pastries" },
  ];
  const isotopRef = useRef(null);
  // Handle filter item click
  const updateCategory = (val) => {
    isotopRef.current.arrange({
      filter: val,
    });
    //   isotope.value.layout();
  };
  const handleFilterClick = (dataFilter) => {
    setActiveFilter(dataFilter);
    updateCategory(dataFilter);
    // You can add additional logic here, like filtering content based on the selected filter
  };
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
    <section id="portfolio">
      <div className={"wrapper " + bgColor}>
        <div className="container py-20 xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem] !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="lg:w-10/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-8">
              <h2 className="xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold !mb-3">
                My Selected Shots
              </h2>
              <p className="lead !text-[1.1rem] !leading-[1.55] font-medium">
                Photography is my passion and I love to turn ideas into
                beautiful things.
              </p>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
          <div className="itemgrid grid-view projects-masonry">
            <div className="isotope-filter !relative z-[5] filter !mb-10">
              <ul className="inline m-0 p-0 list-none">
                {filterItems.map((item, index) => (
                  <li
                    key={index}
                    className={`inline ${
                      index !== 0
                        ? "before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:ml-2 before:mr-[0.8rem] before:my-0 before:rounded-[100%] before:bg-[rgba(30,34,40,.2)] before:align-[.15rem]"
                        : ""
                    }`}
                  >
                    <a
                      className={`filter-item uppercase !tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] cursor-pointer hover:!text-[#fab758] ${
                        activeFilter === item.dataFilter
                          ? "!text-[#fab758]"
                          : ""
                      }`}
                      data-filter={item.dataFilter}
                      onClick={() => handleFilterClick(item.dataFilter)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Gallery>
              <div
                ref={isotopContainer}
                className="flex flex-wrap mx-[-15px] md:mx-[-15px] !mt-[-30px] isotope"
              >
                {projects5.map((project) => (
                  <div
                    key={project.id}
                    className={`project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full ${project.categories}`}
                  >
                    <Item
                      original={project.fullImage}
                      thumbnail={project.fullImage}
                      width={600}
                      height={400} // Adjust height dynamically if needed
                    >
                      {({ ref, open }) => (
                        <figure className="overlay overlay-1 rounded group relative">
                          <a
                            className="relative block z-[3] cursor-pointer inset-0"
                            onClick={open}
                            data-gallery="shots-group"
                          >
                            <img
                              alt="image"
                              src={project.src}
                              width={600}
                              ref={ref}
                              height={400} // Adjust height dynamically if needed
                            />
                          </a>
                          <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                            <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4 group-hover:-translate-y-2/4">
                              {project.title}
                            </h5>
                          </figcaption>
                        </figure>
                      )}
                    </Item>
                  </div>
                ))}
                {/* /.project */}
              </div>
            </Gallery>
            {/* /.row */}
          </div>
          {/* /.grid */}
        </div>
        {/* /.container */}
      </div>
      {/* /.wrapper */}
    </section>
  );
}
