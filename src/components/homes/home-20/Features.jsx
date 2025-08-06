import React, { useState } from "react";

import ModalVideo from "@/components/common/ModalVideo";
export default function Features() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] items-center !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-sm:!mt-[50px] !mt-[80px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] max-w-full !relative">
          <a
            className="btn btn-circle btn-white btn-play ripple !mx-auto !mb-5 !absolute xl:!text-[2.3rem] !text-[calc(1.355rem_+_1.26vw)] w-[3.5rem] h-[3.5rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] before:!bg-[#ffffff] after:!bg-[#ffffff] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 after:content-[''] after:block after:absolute after:z-[-1] after:rounded-[50%] after:inset-0 after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:[animation-delay:0.5s]"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 3,
            }}
            onClick={() => setIsOpen(true)}
          >
            <i className="icn-caret-right !ml-[0.15rem] !relative z-[2] before:content-['\e900'] !text-[calc(1.355rem_+_1.26vw)] !text-[#262b32]" />
          </a>
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
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-sm:!mt-[50px] !mt-[80px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] max-w-full">
          <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
            What Makes Us Different?
          </h2>
          <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-8">
            We make spending stress free so you have the perfect control.
          </h3>
          <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/lamp.svg"
                    className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] solid-mono text-[#e668b3] text-fuchsia !mr-4"
                  >
                    <path
                      className="fill-secondary"
                      d="M128 36.86a8 8 0 01-8-8V8a8 8 0 0116 0v20.86a8 8 0 01-8 8zm70.1 29.04a8 8 0 01-5.67-13.64l14.77-14.77a8 8 0 1111.31 11.31l-14.77 14.77a8 8 0 01-5.64 2.33zM248 136h-20.86a8 8 0 010-16H248a8 8 0 010 16zm-35.15 84.85a8.06 8.06 0 01-5.67-2.34l-14.76-14.77a8 8 0 0111.31-11.31l14.77 14.77a8 8 0 010 11.31 7.92 7.92 0 01-5.65 2.34zm-169.7 0a8 8 0 01-5.66-13.65l14.77-14.77a8 8 0 0111.31 11.31L48.8 218.51a7.93 7.93 0 01-5.65 2.34zM28.86 136H8a8 8 0 010-16h20.86a8 8 0 110 16zM57.9 65.9a8 8 0 01-5.66-2.33L37.47 48.8a8 8 0 1111.31-11.31l14.77 14.77A8 8 0 0157.9 65.9z"
                    />
                    <path
                      className="fill-primary"
                      d="M160 224v13.33A18.76 18.76 0 01141.33 256h-26.67c-9 0-18.66-6.83-18.66-21.76V224zm15-154a74.93 74.93 0 00-63-15c-28.27 5.91-51.2 29-57.07 57.21a74.74 74.74 0 0028.16 75.41A32.19 32.19 0 0195.25 208v.12A2 2 0 0196 208h64a.93.93 0 01.53.11V208c1.49-8.11 6.29-15.57 13.65-21.33A74.72 74.72 0 00175 70zm-7 63.36a8.06 8.06 0 01-8-8A29.32 29.32 0 00130.67 96a8 8 0 110-16A45.43 45.43 0 01176 125.33a8.06 8.06 0 01-8 8z"
                    />
                    <path
                      className="fill-secondary"
                      d="M95.25 208H96a1.8 1.8 0 00-.75.11z"
                    />
                    <path
                      className="fill-primary"
                      d="M160.53 208v.11a.93.93 0 00-.53-.11z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="!mb-1">Creativity</h4>
                  <p className="!mb-0">
                    Curabitur blandit lacus porttitor ridiculus mus.
                  </p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 255.98"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/bulb.svg"
                    className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] solid-mono text-[#a07cc5] text-violet !mr-4"
                  >
                    <circle
                      className="fill-primary"
                      cx="58.67"
                      cy="149.31"
                      r={32}
                    />
                    <path
                      className="fill-primary"
                      d="M88 202.65H29.33A29.36 29.36 0 000 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16A29.36 29.36 0 0088 202.65z"
                    />
                    <circle
                      className="fill-primary"
                      cx="197.33"
                      cy="149.31"
                      r={32}
                    />
                    <path
                      className="fill-primary"
                      d="M226.67 202.65H168A29.36 29.36 0 00138.67 232v16a8 8 0 008 8H248a8 8 0 008-8v-16a29.36 29.36 0 00-29.33-29.35z"
                    />
                    <path
                      className="fill-secondary"
                      d="M149.76 108.48v7.68A11.9 11.9 0 01137.81 128h-19.63c-5.76 0-12-4.27-12-13.76v-5.76zM176 47.68a47.26 47.26 0 01-17.6 36.91 22.89 22.89 0 00-8.32 13.23H106a20 20 0 00-7.79-12.69A47.13 47.13 0 0180 46.73C80.53 21.34 101.76.33 127.25 0a47.34 47.34 0 0134.56 13.88A46.82 46.82 0 01176 47.68z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="!mb-1">Innovative Thinking</h4>
                  <p className="!mb-0">
                    Curabitur blandit lacus porttitor ridiculus mus.
                  </p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 255.97 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/puzzle.svg"
                    className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] solid-mono text-[#f78b77] text-orange !mr-4"
                  >
                    <path
                      className="fill-secondary"
                      d="M221.86 91a33.65 33.65 0 01-22.72-8.75v40.21h-27.2a43.26 43.26 0 003.73-17.71 44.8 44.8 0 10-86 17.71H56.85v-111A11.42 11.42 0 0168.26 0h119.47a11.42 11.42 0 0111.41 11.41v20.05A34.1 34.1 0 11221.86 91z"
                    />
                    <path
                      className="fill-primary"
                      d="M142.79 181.25a34.13 34.13 0 0033.55 40.62 33.66 33.66 0 0022.75-8.77v31.52A11.41 11.41 0 01187.72 256H68.28a11.41 11.41 0 01-11.38-11.38V213.1a34.12 34.12 0 11-22.75-59.5 33.71 33.71 0 0122.75 8.77v-29.2H112a34.12 34.12 0 1137.76 0h49.37v29.2a34.09 34.09 0 00-56.3 18.88z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="!mb-1">Rapid Solutions</h4>
                  <p className="!mb-0">
                    Curabitur blandit lacus porttitor ridiculus mus.
                  </p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 244.09"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/headphone.svg"
                    className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] solid-mono text-[#45c4a0] text-green !mr-4"
                  >
                    <path
                      className="fill-secondary"
                      d="M35.72 92.28a92.28 92.28 0 01184.56 0v47.63a8.93 8.93 0 01-17.86 0V92.28a74.42 74.42 0 10-148.84 0v47.63a8.93 8.93 0 11-17.86 0zm175.63 62.51a8.93 8.93 0 018.93 8.93v35.72a32.75 32.75 0 01-32.75 32.75h-35.72a8.94 8.94 0 010-17.87h35.72a14.88 14.88 0 0014.89-14.88v-35.72a8.93 8.93 0 018.93-8.93z"
                    />
                    <path
                      className="fill-secondary"
                      d="M107.16 223.26A20.84 20.84 0 01128 202.42h11.91a20.84 20.84 0 010 41.67H128a20.84 20.84 0 01-20.84-20.83zm20.84-3a3 3 0 100 5.95h11.91a3 3 0 000-5.95z"
                    />
                    <path
                      className="fill-primary"
                      d="M32.74 107.16A32.74 32.74 0 000 139.91v23.81a32.75 32.75 0 0032.74 32.75h11.91a8.93 8.93 0 008.93-8.94v-71.44a8.93 8.93 0 00-8.93-8.93zm190.52 0A32.74 32.74 0 01256 139.91v23.81a32.75 32.75 0 01-32.74 32.75h-11.91a8.93 8.93 0 01-8.93-8.94v-71.44a8.93 8.93 0 018.93-8.93z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="!mb-1">Top-Notch Support</h4>
                  <p className="!mb-0">
                    Curabitur blandit lacus porttitor ridiculus mus.
                  </p>
                </div>
              </div>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
      </div>

      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={"/assets/media/movie.mp4"}
      />
    </>
  );
}
