import { testimonials7 } from "@/data/testimonials";
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
    <div className="itemgrid !mb-[8rem]">
      <div
        ref={isotopContainer}
        className="flex flex-wrap mx-[-15px] isotope !mt-[-8rem]"
      >
        {testimonials7.map((testimonial, index) => (
          <div
            key={index}
            className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full"
          >
            <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom !border-[#cfceea] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[.9rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0">
                  <p>{testimonial.text}</p>
                  <div className="flex items-center text-left">
                    <div className="info !pl-0">
                      <h5 className="!mb-1 text-[.95rem] !tracking-[normal] font-semibold !leading-[1.5]">
                        {testimonial.name}
                      </h5>
                      <p className="!mb-0 text-[.85rem]">{testimonial.role}</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
        {/*/column */}
      </div>
      {/* /.row */}
    </div>
  );
}
