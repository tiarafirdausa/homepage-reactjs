import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { innerPages } from "@/data/innerpages";

const filters = [
  { id: 1, label: "All", dataFilter: "*", isActive: true },
  { id: 2, label: "Services", dataFilter: ".services", isActive: false },
  { id: 3, label: "About", dataFilter: ".about", isActive: false },
  { id: 4, label: "Contact", dataFilter: ".contact", isActive: false },
  { id: 5, label: "Pricing", dataFilter: ".pricing", isActive: false },
  { id: 6, label: "Projects", dataFilter: ".projects", isActive: false },
];
export default function InnerPages() {
  const isotopContainer = useRef();
  const isotopRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("*"); // Default active filter
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
    // Add your filter logic here (e.g., filtering items based on the selected category)
    console.log(`Filtering by: ${dataFilter}`);
  };

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
    <section className="wrapper bg-gradient-reverse-purple">
      <div className="container pb-10 xl:pb-16 lg:pb-16 md:pb-16">
        <div className="flex flex-wrap mx-[-15px] !mb-8 !text-center">
          <div className="lg:w-8/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[.75rem] !tracking-[0.05rem] !leading-[1.35] uppercase !text-[#aab0bc]">
              Inner Pages
            </h2>
            <h2 className="!text-[calc(1.335rem_+_1.02vw)] font-bold !leading-[1.2] xl:!text-[2.1rem] !mb-3 !text-center !mt-3 lg:!px-10 xl:!px-0">
              Handcrafted and carefully put together pages to choose from.
            </h2>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="itemgrid grid-view projects-masonry">
          <div className="isotope-filter !relative z-[5] filter !mb-10 text-left text-md-center">
            <p className="inline m-[0_1rem_0_0] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc]">
              Filter:
            </p>
            <ul className="inline m-0 p-0 list-none">
              {filters.map((filter, index) => (
                <li
                  key={filter.id}
                  className={`inline ${
                    index !== 0
                      ? "before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:ml-2 before:mr-[0.8rem] before:my-0 before:rounded-[100%] before:bg-[rgba(30,34,40,.2)] before:align-[.15rem]"
                      : ""
                  }`}
                >
                  <a
                    className={`filter-item uppercase !tracking-[0.02rem] text-[0.7rem] font-bold cursor-pointer ${
                      activeFilter === filter.dataFilter
                        ? "!text-[#747ed1]" // Active state
                        : "!text-[#aab0bc] hover:!text-[#747ed1]" // Inactive state
                    }`}
                    data-filter={filter.dataFilter}
                    onClick={() => handleFilterClick(filter.dataFilter)}
                  >
                    {filter.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div data-cue="fadeIn">
            <div
              ref={isotopContainer}
              className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-22.5px] !mt-[-40px] xl:!mt-[-45px] isotope"
            >
              {innerPages.map((project) => (
                <div
                  key={project.id}
                  className={`project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full ${project.className} md:!px-[20px] lg:!px-[20px] xl:!px-[22.5px] !mt-[40px]`}
                >
                  <figure
                    className="itooltip itooltip-primary rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    title={`<h5 class="itooltip-primary !mb-0">${project.title}</h5>`}
                  >
                    <Link to={project.href}>
                      <img
                        srcSet={project.srcSet}
                        alt="image"
                        src={project.src}
                        width={project.width}
                        height={project.height}
                      />
                    </Link>
                  </figure>
                </div>
              ))}
              {/* /.project */}
            </div>
            {/* /.row */}
          </div>
          {/* /div */}
        </div>
        {/* /.grid */}
        <div className="!mb-20" />
      </div>
      {/* /.container */}
      <div className="overflow-hidden">
        <div className="divider !text-[#fefefe] mx-[-0.5rem]">
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
