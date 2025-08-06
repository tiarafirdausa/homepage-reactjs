import { testimonials5 } from "@/data/testimonials";
import { useEffect, useRef } from "react";

export default function Testimonials() {
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
    <section className="section-frame xxl:!mx-12">
      <div
        className="wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500 section-frame-wrapper bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.5)]"
        style={{ backgroundImage: "url(/assets/img/photos/bg23.png)" }}
      >
        <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 lg:w-9/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
              <h3 className="!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !mb-10 xxl:!px-10">
                Don't take our word for it. See what customers are saying about
                us.
              </h3>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
          <div className="flex flex-wrap mx-[-15px]">
            <div className="itemgrid xl:w-11/12 lg:w-11/12 md:w-11/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto xl:!mb-[-17.5rem] lg:!mb-[-17.5rem]">
              <div
                ref={isotopContainer}
                className="flex flex-wrap mx-[-15px] isotope !mt-[-30px]"
              >
                {testimonials5.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
                  >
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                        <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>{testimonial.quote}</p>
                          <div className="flex items-center text-left">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                {testimonial.name}
                              </h5>
                              <p className="!mb-0 text-[.8rem]">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* /.row */}
            </div>
            {/* /.grid-view */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.wrapper */}
    </section>
  );
}
