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
        >
          <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full md:!mt-7 lg:!mt-20 xl:!mt-20 max-md:!mt-[50px]">
            <div className="project-details flex justify-center !self-end flex-col !pl-0 !pb-0">
              <div className="post-header">
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-4 xxl:!pr-20">
                  Check out some of our recent projects below.
                </h2>
                <p className="lead text-[1.05rem] !leading-[1.6] font-medium !mb-0">
                  We love to turn ideas into beautiful things.
                </p>
              </div>
              {/* /.post-header */}
            </div>
            {/* /.project-details */}
          </div>
          {/* /.item */}
          <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[70px]">
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
            <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold text-line relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#a07cc5] !mb-2 !text-[#a07cc5]">
              Stationary
            </div>
            <h2 className="post-title h3">Ipsum Ultricies Cursus</h2>
          </div>
          {/* /.item */}
          <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[70px]">
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
            <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold text-line relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#7cb798] !mb-2 !text-[#7cb798]">
              Invitation
            </div>
            <h2 className="post-title h3">Mollis Ipsum Mattis</h2>
          </div>
          {/* /.item */}
          <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[70px]">
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
            <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold text-line relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#747ed1] !mb-2 !text-[#747ed1]">
              Notebook
            </div>
            <h2 className="post-title h3">Magna Tristique Inceptos</h2>
          </div>
          {/* /.item */}
        </div>
        {/* /.row */}
      </div>
      {/* /.project */}
    </div>
  );
}
