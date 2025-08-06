import ModalVideo from "@/components/common/ModalVideo";
import React, { useState } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section
        className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 !text-white bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.3)]"
        style={{ backgroundImage: "url(/assets/img/photos/bg2.jpg)" }}
      >
        <div className="container pt-28 pb-36 xl:pt-36 lg:pt-36 md:pt-36 xl:pb-40 lg:pb-40 md:pb-40 !text-center">
          <div className="flex flex-wrap mx-[-15px] !mb-12">
            <div
              className="md:w-9/12 lg:w-7/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto"
              data-cues="zoomIn"
              data-group="page-title"
              data-interval={-200}
            >
              <h2 className="h6 uppercase !tracking-[0.05rem] !text-white !mb-5">
                Hello! This is Sandbox
              </h2>
              <h3 className="xl:!text-[2.4rem] !text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] !text-white !mb-7">
                We bring rapid solutions for your business
              </h3>
              <a
                className="btn btn-circle btn-white btn-play ripple !mx-auto !mb-5 !relative z-[2] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !text-[calc(1.355rem_+_1.26vw)] hover:translate-y-0 inline-flex items-center justify-center leading-none p-0 !rounded-[100%] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#ffffff] after:content-[''] after:block after:absolute after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#ffffff]"
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
      </section>

      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={"/assets/media/movie.mp4"}
      />
    </>
  );
}
