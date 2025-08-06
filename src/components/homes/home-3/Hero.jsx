import ModalVideo from "@/components/common/ModalVideo";

import TypeWriter from "@/components/common/TypeWriter";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="wrapper bg-[#262b32] opacity-100 angled lower-start relative border-0 before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-[#262b32] before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:content-[''] after:block after:absolute after:z-0 after:border-l-[100vw] after:border-r-transparent after:border-b-[4rem] after:border-y-transparent after:border-[#262b32] after:border-0 after:border-solid after:right-0">
        <div className="container pt-7 xl:pt-12 lg:pt-12 md:pt-12 pb-8">
          <div className="flex flex-wrap mx-0 !mt-[-50px] items-center">
            <div
              className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] max-w-full px-0 !mt-[50px]"
              data-cues="slideInDown"
              data-group="page-title"
              data-delay={600}
            >
              <h1 className="!text-[calc(1.375rem_+_1.5vw)] font-bold !leading-[1.15] xl:!text-[2.5rem] !text-white !mb-4">
                Sandbox focuses on <br />
                <span
                  className="typer !text-[#54a8c7] whitespace-nowrap"
                  data-delay={100}
                  data-words=""
                >
                  <TypeWriter
                    strings={[
                      "customer satisfaction",
                      "business needs",
                      "creative ideas",
                    ]}
                  />
                </span>
                <span className="cursor !text-[#54a8c7]" data-owner="typer" />
              </h1>
              <p className="lead !text-[1.2rem] !leading-[1.5] !text-white !mb-7 md:!pr-32 xl:!pr-0 lg:!pr-0 xxl:!pr-20">
                We carefully consider our solutions to support each and every
                stage of your growth.
              </p>
              <div>
                <Link
                  to={`/signup`}
                  className="btn btn-lg btn-aqua !text-white !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] active:!text-[#343f52] active:bg-[#54a8c7] active:border-[#54a8c7] disabled:!text-[#343f52] disabled:bg-[#54a8c7] disabled:border-[#54a8c7] rounded"
                >
                  Get Started
                </Link>
              </div>
            </div>
            {/* /column */}
            <div
              className="lg:w-5/12 xl:w-5/12 w-full flex-[0_0_auto] max-w-full px-0 !mt-[50px] lg:!ml-[8.33333333%] xl:!ml-[8.33333333%] !mb-[-8rem] relative z-[3]"
              data-cues="slideInDown"
            >
              <div className="!relative">
                <a
                  className="btn btn-circle btn-aqua !text-white !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] active:!text-[#343f52] active:bg-[#54a8c7] active:border-[#54a8c7] disabled:!text-[#343f52] disabled:bg-[#54a8c7] disabled:border-[#54a8c7] btn-play ripple !mx-auto !mb-6 !absolute !text-[calc(1.355rem_+_1.26vw)] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] before:!bg-[#54a8c7] after:!bg-[#54a8c7] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:content-[''] after:block after:absolute after:z-[-1] after:rounded-[50%] after:inset-0 after:[animation-delay:.5s]"
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
                <figure className="!rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <img
                    className="!rounded-[.4rem]"
                    srcSet="/assets/img/photos/about13@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/about13.jpg"
                    width={590}
                    height={650}
                  />
                </figure>
              </div>
              {/* /div */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
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
