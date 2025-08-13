import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getMedia } from "@/services/mediaService";
import { BASE_URL } from "@/config/url";

export default function Projects() {
  const [mediaCollections, setMediaCollections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState("*");

  const isotopContainer = useRef();
  const isotopRef = useRef(null);

  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    if (isotopContainer.current) {
      isotopRef.current = new Isotope(isotopContainer.current, {
        itemSelector: ".item",
        layoutMode: "masonry",
      });
      imagesloaded(isotopContainer.current).on("progress", function () {
        isotopRef.current.layout();
      });
    }
  };

  const handleFilterClick = (dataFilter) => {
    setActiveFilter(dataFilter);
    if (isotopRef.current) {
      isotopRef.current.arrange({
        filter: dataFilter === "*" ? "*" : `.${dataFilter}`,
      });
    }
  };

  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        const response = await getMedia();
        setMediaCollections(response.data);

        const uniqueCategories = [...new Set(response.data.map(item => item.category_name))];
        const filterItems = [
          { label: "All", dataFilter: "*" },
          ...uniqueCategories.map(cat => ({
            label: cat,
            dataFilter: cat.toLowerCase().replace(/\s/g, '-')
          }))
        ];
        setCategories(filterItems);
      } catch (error) {
        console.error("Gagal mengambil data media:", error);
      }
    };
    
    fetchMediaData();
  }, []);

  useEffect(() => {
    if (mediaCollections.length > 0 && isotopContainer.current) {
      initIsotop();
    }
    
    return () => {
      if (isotopRef.current) {
        isotopRef.current.destroy();
      }
    };
  }, [mediaCollections]);

  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
        <div className="flex flex-wrap mx-[-15px] !mb-8 !text-center">
          <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[0.8rem] uppercase !text-[#a07cc5] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
              Our Projects
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold">
              Check out some of our awesome projects with creative ideas and
              great design.
            </h3>
          </div>
        </div>
        
        <div className="itemgrid grid-view projects-masonry">
          <div className="isotope-filter !relative z-[5] filter !mb-10">
            <ul className="inline m-0 p-0 list-none">
              {categories.map((item, index) => (
                <li key={index} className={`inline ${index !== 0 ? "before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:ml-2 before:mr-[0.8rem] before:my-0 before:rounded-[100%] before:bg-[rgba(30,34,40,.2)] before:align-[.15rem]" : ""}`}>
                  <a
                    className={`filter-item uppercase !tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] cursor-pointer hover:!text-[#a07cc5] ${
                      activeFilter === item.dataFilter ? "!text-[#a07cc5]" : ""
                    }`}
                    onClick={() => handleFilterClick(item.dataFilter)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div
            ref={isotopContainer}
            className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] isotope"
          >
            {mediaCollections.map((collection) => (
              <div 
                key={collection.id} 
                className={`project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full ${collection.category_name.toLowerCase().replace(/\s/g, '-')}`}
              >
                <figure className="lift rounded !mb-6">
                  <Link to={`/single-project/${collection.id}`}>
                    {collection.media && collection.media.length > 0 && (
                      <img
                        alt={collection.title}
                        src={`${BASE_URL}${collection.media[0].url}`}
                        width={1300}
                        height={1132}
                      />
                    )}
                  </Link>
                </figure>
                <div className="project-details flex justify-center flex-col">
                  <div className="post-header">
                    <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-2 !text-[#fab758]">
                      {collection.title}
                    </div>
                    <h2
                      className="post-title h3 !text-[1.15rem] !leading-[1.4]"
                      dangerouslySetInnerHTML={{ __html: collection.caption }}
                    ></h2>
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