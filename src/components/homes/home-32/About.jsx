import ModalVideo from "@/components/common/ModalVideo";
import React, { useState } from "react";

export default function About8() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-20 xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem] !relative">
          <figure
            className="!rounded-[.4rem] !mt-[-12.5rem] xl:!mt-[-17.5rem] lg:!mt-[-17.5rem] !mb-24 xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem] !relative"
            data-cues="fadeIn"
            data-delay={250}
          >
            <a
              className="btn btn-circle btn-white btn-play ripple !mx-auto !mb-5 !absolute z-[2] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !text-[calc(1.355rem_+_1.26vw)] hover:translate-y-0 inline-flex items-center justify-center leading-none !p-0 !rounded-[100%] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#ffffff] after:content-[''] after:block after:absolute after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#ffffff]"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 3,
              }}
              onClick={() => setIsOpen(true)}
            >
              <i className="icn-caret-right !ml-[0.15rem] !relative z-[2] before:content-['\e900'] !text-[calc(1.355rem_+_1.26vw)]" />
            </a>
            <video
              className="w-full rounded caption-overlay block"
              poster="/assets/img/photos/movie3.jpg"
              src="/assets/media/movie3.mp4"
              autoPlay
              loop
              playsInline
              muted
            />
          </figure>
          <div className="flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] md:mx-[-20px] xl:mx-[-35px] items-center !mb-10 xl:!mb-14 lg:!mb-14 md:!mb-14">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[80px]">
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                  <figure className="rounded-[0.4rem]">
                    <img
                      className="rounded-[0.4rem]"
                      srcSet="/assets/img/photos/g12@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/g12.jpg"
                      width={293}
                      height={260}
                    />
                  </figure>
                </div>
                {/*/column */}
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !self-end !mt-[25px]">
                  <figure className="rounded-[0.4rem]">
                    <img
                      className="rounded-[0.4rem]"
                      srcSet="/assets/img/photos/g13@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/g13.jpg"
                      width={293}
                      height={235}
                    />
                  </figure>
                </div>
                {/*/column */}
                <div className="w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                  <figure className="!rounded-[.4rem] xl:!mx-5 lg:!mx-5 md:!mx-5">
                    <img
                      className="!rounded-[.4rem]"
                      srcSet="/assets/img/photos/g11@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/g11.jpg"
                      width={560}
                      height={285}
                    />
                  </figure>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[80px]">
              <h2 className="!text-[0.8rem] uppercase !text-[#3f78e0] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
                Who Are We?
              </h2>
              <h3 className="xl:!text-[2rem] !leading-[1.2] !text-[calc(1.325rem_+_0.9vw)] font-semibold !mb-5">
                Company that believes in the power of creative strategy.
              </h3>
              <p className="!mb-6">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Aenean
                lacinia bibendum nulla sed.
              </p>
              <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px]">
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                  <h3 className="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none xl:!text-[2.2rem] !mb-1">
                    99.7%
                  </h3>
                  <h5 className="!mb-0">Customer Satisfaction</h5>
                </div>
                {/*/column */}
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                  <h3 className="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none xl:!text-[2.2rem] !mb-1">
                    12x
                  </h3>
                  <h5 className="!mb-0">Revenue Growth</h5>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-7 xl:!mb-9 lg:!mb-9 md:!mb-9">
            <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[30px]">
              <div className="flex flex-row">
                <div>
                  <div className="icon btn btn-block pointer-events-none btn-soft-primary !mr-4 !w-10 !h-10">
                    <span className="number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0">
                      1
                    </span>
                  </div>
                </div>
                <div>
                  <h3>Our Vision</h3>
                  <p className="!mb-2">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget. Fusce dapibus tellus.
                  </p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[30px]">
              <div className="flex flex-row">
                <div>
                  <div className="icon btn btn-block pointer-events-none btn-soft-primary !mr-4 !w-10 !h-10">
                    <span className="number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0">
                      2
                    </span>
                  </div>
                </div>
                <div>
                  <h3>Our Mission</h3>
                  <p className="!mb-2">
                    Maecenas faucibus mollis interdum. Vivamus sagittis lacus
                    vel augue laoreet. Sed posuere consectetur.
                  </p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[30px]">
              <div className="flex flex-row">
                <div>
                  <div className="icon btn btn-block pointer-events-none btn-soft-primary !mr-4 !w-10 !h-10">
                    <span className="number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0">
                      3
                    </span>
                  </div>
                </div>
                <div>
                  <h3>Our Values</h3>
                  <p className="!mb-2">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Praesent commodo cursus magna scelerisque.
                  </p>
                </div>
              </div>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
          <div className="text-center">
            <a
              href="#"
              className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0]"
            >
              More Details
            </a>
          </div>
        </div>
        {/* /.container */}
      </section>
      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={"/assets/media/movie.mp4"}
      />{" "}
    </>
  );
}
