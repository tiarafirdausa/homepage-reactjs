import ModalVideo from "@/components/common/ModalVideo";
import React, { useState } from "react";

export default function Cta({
  font = "xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] font-DMSerif !font-normal tracking-normal lg:!px-10 xl:!px-16 xxl:!px-10 !text-white",
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section
        className="wrapper image-wrapper bg-image bg-overlay !bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
        style={{ backgroundImage: "url(/assets/img/photos/bg1.jpg)" }}
      >
        <div className="container py-[8rem] !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="lg:w-10/12 xl:w-10/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <a
                className="btn btn-circle btn-white btn-play ripple !mx-auto !mb-5 !relative z-[2] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !text-[calc(1.355rem_+_1.26vw)] hover:translate-y-0 inline-flex items-center justify-center leading-none !p-0 !rounded-[100%] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#ffffff] after:content-[''] after:block after:absolute after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#ffffff]"
                onClick={() => setIsOpen(true)}
              >
                <i className="icn-caret-right !ml-[0.15rem] !relative z-[2] before:content-['\e900'] !text-[calc(1.355rem_+_1.26vw)]" />
              </a>
              <h2 className={font}>
                Find out everything you need to know about creating a business
                process model.
              </h2>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /.container */}
      </section>{" "}
      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={"/assets/media/movie.mp4"}
      />{" "}
    </>
  );
}
