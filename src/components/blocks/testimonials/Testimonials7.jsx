import { useEffect, useRef } from "react";

import { testimonials4 } from "@/data/testimonials";
export default function Testimonials7() {
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
    <section className="wrapper">
      <div className="container pt-14 xl:pt-8 lg:pt-8 pb-[4.5rem] xl:pb-28 lg:pb-28 md:pb-28">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%]">
            <h2 className="!text-[0.8rem] uppercase !text-[#5eb9f0] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
              Happy Customers
            </h2>
            <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] !mb-10 xxl:!px-10">
              Don't take our word for it. See what customers are saying about
              us.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="itemgrid">
          <div
            ref={isotopContainer}
            className="flex flex-wrap mx-[-15px] isotope !mt-[-30px]"
          >
            {testimonials4.map((testimonial) => (
              <div
                key={testimonial.id}
                className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
              >
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-2" />
                    <blockquote className="!text-[.9rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0">
                      <p>{testimonial.quote}</p>
                      <div className="flex items-center text-left">
                        <img
                          className="!rounded-[50%] !w-[3.5rem]"
                          srcSet={testimonial.imageSrcSet}
                          alt="image"
                          src={testimonial.imageSrc}
                          width={100}
                          height={100}
                        />
                        <div className="info !pl-4">
                          <h5 className="!mb-1 !text-[0.95rem] !leading-[1.5] !tracking-[-0.01rem]">
                            {testimonial.name}
                          </h5>
                          <p className="!mb-0 !text-[.85rem]">
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
      {/* /.container */}
    </section>
  );
}
