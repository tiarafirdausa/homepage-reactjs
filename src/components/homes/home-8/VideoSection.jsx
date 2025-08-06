import ModalVideo from "@/components/common/ModalVideo";
import React, { useState } from "react";

import { skills } from "@/data/progress";
import ProgressBarComponent from "@/components/common/ProgressBar";
export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] items-center !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
        <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full !relative !mt-[80px]">
          <a
            className="btn btn-circle btn-aqua !text-[#343f52] !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] focus:!text-white active:!text-[#343f52] active:bg-[#54a8c7] active:border-[#54a8c7] disabled:text-white disabled:bg-[#54a8c7] disabled:border-[#54a8c7] btn-play ripple !mx-auto !mb-5 !absolute xl:!text-[2.3rem] !text-[calc(1.355rem_+_1.26vw)] w-[3.5rem] h-[3.5rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] before:!bg-[#54a8c7] after:!bg-[#54a8c7] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:content-[''] after:block after:absolute after:z-[-1] after:rounded-[50%] after:inset-0 after:[animation-delay:.5s]"
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
          <div
            className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block !absolute z-[1]"
            data-rellax-speed={0}
            style={{
              bottom: "-1.8rem",
              right: "-1.5rem",
              width: "85%",
              height: "90%",
            }}
          />
          <figure className="!rounded-[.4rem] relative z-[2]">
            <img
              className="!rounded-[.4rem]"
              srcSet="/assets/img/photos/about12@2x.jpg 2x"
              alt="image"
              src="/assets/img/photos/about12.jpg"
              width={650}
              height={520}
            />
          </figure>
        </div>
        {/*/column */}
        <div className="lg:w-5/12 xl:w-4/12 xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full !mt-[80px]">
          <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] font-DMSerif !font-normal tracking-normal !mb-3 [word-spacing:normal!important]">
            Sandbox Brings Awesomeness
          </h3>
          <p className="lead text-[1.05rem] !leading-[1.6] !mb-6">
            We have considered our solutions to
            <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(84,168,199,.12)]">
              support every stage
            </span>
            of your growth.
          </p>
          <ul className="progress-list m-0 p-0 list-none">
            {skills.map((skill, index) => (
              <li key={index} className="!mb-[1rem]">
                <p className="!mb-[.25rem]">{skill.name}</p>
                <div className="progressbar line relative aqua">
                  <ProgressBarComponent max={skill.value} />
                </div>
              </li>
            ))}
          </ul>
          {/* /.progress-list */}
        </div>
        {/*/column */}
      </div>{" "}
      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={"/assets/media/movie.mp4"}
      />{" "}
    </>
  );
}
