import ModalVideo from "@/components/common/ModalVideo";
import React, { useState } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="section-frame br-fix overflow-hidden xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem]">
        <div
          className="wrapper image-wrapper bg-cover bg-image bg-overlay bg-overlay-500 bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
          style={{
            backgroundImage: "url(/assets/img/photos/bg26.jpg)",
          }}
        >
          <div className="container pt-32 xl:pt-[12.5rem] lg:pt-[12.5rem] pb-28 xl:pb-36 lg:pb-36 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div
                className="md:w-9/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto"
                data-cues="zoomIn"
                data-group="page-title"
                data-interval={-200}
                data-delay={500}
              >
                <h2 className="h6 uppercase !tracking-[0.05rem] !text-white !mb-5">
                  Hello! We are Sandbox
                </h2>
                <h3 className="xl:!text-[2.7rem] !text-[calc(1.395rem_+_1.74vw)] !leading-[1.15] !text-white !mb-7">
                  Grow your business with our marketing solutions
                </h3>
                <a
                  className="btn btn-circle btn-white btn-play ripple !mx-auto !relative z-[2] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !text-[calc(1.355rem_+_1.26vw)] hover:translate-y-0 inline-flex items-center justify-center leading-none !p-0 !rounded-[100%] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#ffffff] after:content-[''] after:block after:absolute after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#ffffff] after:[animation-delay:0.5s]"
                  onClick={() => setIsOpen(true)}
                >
                  <i className="icn-caret-right !ml-[0.15rem] !relative z-[2] before:content-['\e900'] !text-[calc(1.355rem_+_1.26vw)]" />
                </a>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
          <div className="overflow-hidden">
            <div className="divider !text-white mx-[-0.5rem]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
                <path
                  fill="currentColor"
                  d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"
                />
              </svg>
            </div>
          </div>
          {/* /.overflow-hidden */}
        </div>
        {/* /.wrapper */}
      </section>
      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={"/assets/media/movie.mp4"}
      />{" "}
    </>
  );
}
