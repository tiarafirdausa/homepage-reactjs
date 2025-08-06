import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
export default function Projects() {
  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        // Trigger Isotope layout
        isotope.layout();
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
    <div className="projects-tiles">
      <div className="project itemgrid grid-view">
        <div
          ref={isotopContainer}
          className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] xl:!mt-[-70px] lg:!mt-[-70px] md:!mt-[-70px] isotope"
          data-cue="slideInUp"
        >
          <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[70px] max-md:!mt-[50px]">
            <figure className="lift rounded !mb-6">
              <Link to={`/single-project3`}>
                <img
                  srcSet="/assets/img/photos/rp1@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/rp1.jpg"
                  width={500}
                  height={400}
                />
              </Link>
            </figure>
            <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-2 !text-[#747ed1]">
              Stationary
            </div>
            <h3 className="post-title">Ipsum Ultricies Cursus</h3>
          </div>
          {/* /.item */}
          <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full xl:!mt-28 lg:!mt-28 md:!mt-28 max-md:!mt-[50px]">
            <figure className="lift rounded !mb-6">
              <Link to={`/single-project2`}>
                <img
                  srcSet="/assets/img/photos/rp2@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/rp2.jpg"
                  width={750}
                  height={700}
                />
              </Link>
            </figure>
            <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-2 !text-[#f78b77]">
              Invitation
            </div>
            <h3 className="post-title">Mollis Ipsum Mattis</h3>
          </div>
          {/* /.item */}
          <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[70px] max-md:!mt-[50px]">
            <figure className="lift rounded !mb-6">
              <Link to={`/single-project`}>
                <img
                  srcSet="/assets/img/photos/rp3@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/rp3.jpg"
                  width={500}
                  height={337}
                />
              </Link>
            </figure>
            <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-2 !text-[#e2626b]">
              Notebook
            </div>
            <h3 className="post-title">Magna Tristique Inceptos</h3>
          </div>
          {/* /.item */}
        </div>
        {/* /.row */}
      </div>
      {/* /.project */}
    </div>
  );
}
