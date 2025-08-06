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
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="itemgrid grid-view projects-masonry">
          <div
            ref={isotopContainer}
            className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] xl:!mt-[-80px] lg:!mt-[-80px] md:!mt-[-80px] isotope"
          >
            <div className="project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full product">
              <figure className="lift rounded !mb-6">
                <Link to={`/single-project`}>
                  <img
                    alt="image"
                    src="/assets/img/photos/pd1.jpg"
                    width={1300}
                    height={1132}
                  />
                </Link>
              </figure>
              <div className="project-details flex justify-center flex-col">
                <div className="post-header">
                  <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-2 !text-[#fab758]">
                    Coffee
                  </div>
                  <h2 className="post-title h3 !text-[1.15rem] !leading-[1.4]">
                    Cras Fermentum Sem
                  </h2>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.project-details */}
            </div>
            {/* /.project */}
            <div className="project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full workshop">
              <figure className="lift rounded !mb-6">
                <Link to={`/single-project2`}>
                  <img
                    alt="image"
                    src="/assets/img/photos/pd2.jpg"
                    width={1300}
                    height={1132}
                  />
                </Link>
              </figure>
              <div className="project-details flex justify-center flex-col">
                <div className="post-header">
                  <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-2 !text-[#e2626b]">
                    Stationary
                  </div>
                  <h2 className="post-title h3 !text-[1.15rem] !leading-[1.4]">
                    Mollis Ipsum Mattis
                  </h2>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.project-details */}
            </div>
            {/* /.project */}
            <div className="project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full still-life">
              <figure className="lift rounded !mb-6">
                <Link to={`/single-project3`}>
                  <img
                    alt="image"
                    src="/assets/img/photos/pd3.jpg"
                    width={1300}
                    height={1132}
                  />
                </Link>
              </figure>
              <div className="project-details flex justify-center flex-col">
                <div className="post-header">
                  <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-2 !text-[#f78b77]">
                    Branding
                  </div>
                  <h2 className="post-title h3 !text-[1.15rem] !leading-[1.4]">
                    Ipsum Ultricies Cursus
                  </h2>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.project-details */}
            </div>
            {/* /.project */}
            <div className="project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full product">
              <figure className="lift rounded !mb-6">
                <Link to={`/single-project2`}>
                  <img
                    alt="image"
                    src="/assets/img/photos/pd4.jpg"
                    width={1300}
                    height={1132}
                  />
                </Link>
              </figure>
              <div className="project-details flex justify-center flex-col">
                <div className="post-header">
                  <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-2 !text-[#a07cc5]">
                    Product
                  </div>
                  <h2 className="post-title h3 !text-[1.15rem] !leading-[1.4]">
                    Inceptos Euismod Egestas
                  </h2>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.project-details */}
            </div>
            {/* /.project */}
            <div className="project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full product">
              <figure className="lift rounded !mb-6">
                <Link to={`/single-project`}>
                  <img
                    alt="image"
                    src="/assets/img/photos/pd5.jpg"
                    width={1300}
                    height={1132}
                  />
                </Link>
              </figure>
              <div className="project-details flex justify-center flex-col">
                <div className="post-header">
                  <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-2 !text-[#7cb798]">
                    Print
                  </div>
                  <h2 className="post-title h3 !text-[1.15rem] !leading-[1.4]">
                    Sollicitudin Ornare Porta
                  </h2>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.project-details */}
            </div>
            {/* /.project */}
            <div className="project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full workshop">
              <figure className="lift rounded !mb-6">
                <Link to={`/single-project3`}>
                  <img
                    alt="image"
                    src="/assets/img/photos/pd6.jpg"
                    width={1300}
                    height={1132}
                  />
                </Link>
              </figure>
              <div className="project-details flex justify-center flex-col">
                <div className="post-header">
                  <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-2 !text-[#54a8c7]">
                    Workshop
                  </div>
                  <h2 className="post-title h3 !text-[1.15rem] !leading-[1.4]">
                    Ipsum Mollis Vulputate
                  </h2>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.project-details */}
            </div>
            {/* /.project */}
          </div>
          {/* /.row */}
        </div>
        {/* /.grid */}
      </div>
      {/* /.container */}
    </section>
  );
}
