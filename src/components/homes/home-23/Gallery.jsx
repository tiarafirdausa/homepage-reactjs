import React from "react";

import { cardData } from "@/data/gallery";
export default function Gallery() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-full xl:w-10/12 xxl:w-8/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <i className="icn-flower !text-[#7cb798] xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] opacity-25 before:content-['\e907']" />
            <h2 className="xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] font-semibold !tracking-[normal] !text-center !mt-2 !mb-10">
              I absolutely love shooting weddings and couples because there are
              so many feelings to capture.
            </h2>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] grid-view md:mx-[-20px] lg:mx-[-20px] xl:mx-[-25px] !mt-[-40px] xl:!mt-0 lg:!mt-0 !text-center">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mx-auto max-lg:!mt-[40px]"
            >
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <figure className="card-img-top overlay overlay-1 group">
                  <a
                    className="relative block z-[3] cursor-pointer inset-0"
                    href="#"
                  >
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      src={card.imageSrc}
                      width={card.width}
                      height={card.height}
                    />
                  </a>
                  <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                    <h5 className="from-top !mb-0 !absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4 !text-white">
                      View Gallery
                    </h5>
                  </figcaption>
                </figure>
                <div className="card-body p-6">
                  <h3 className="!text-[1.05rem] !mb-0">{card.title}</h3>
                </div>
              </div>
            </div>
          ))}
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
