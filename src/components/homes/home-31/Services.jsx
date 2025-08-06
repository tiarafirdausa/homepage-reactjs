import React from "react";

import { listFeatures } from "@/data/features";
export default function Services() {
  return (
    <>
      {" "}
      <div className="flex flex-wrap mx-[-15px] !text-center">
        <div className="md:w-10/12 lg:w-9/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-14">
          <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase !text-[#aab0bc] !mb-3">
            Our Services
          </h2>
          <h3 className="!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !tracking-[-0.03em] xxl:!px-10">
            The service we offer is
            <span className="!relative z-[1] style-1 primary before:content-[''] before:z-[-1] before:absolute before:opacity-100 before:block before:-translate-x-2/4 before:-translate-y-2/4 before:-rotate-1 before:w-[111%] before:h-[110%] before:rounded-[80%] before:border-t-0 before:border-[3px] before:border-solid before:border-[#3f78e0] before:left-2/4 before:!top-[52%] after:content-[''] after:z-[-1] after:absolute after:opacity-100 after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:-translate-x-2/4 after:-translate-y-2/4 after:-rotate-2 after:w-[107%] after:h-[111%] after:rounded-[80%] after:border-l-0 after:border-b-0 after:border-[3px] after:border-solid after:border-[#3f78e0] after:left-2/4 after:top-[52%] max-xl:before:!hidden max-xl:after:!hidden max-lg:before:!hidden max-lg:after:!hidden max-md:before:!hidden max-md:after:!hidden max-sm:before:!hidden max-sm:after:!hidden">
              <em>designed</em>
            </span>
            to meet your business needs.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="flex flex-wrap mx-[-15px] !mt-[-50px] items-center !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
        <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
          <figure className="m-0 p-0">
            <img
              className="max-w-full h-auto"
              srcSet="/assets/img/illustrations/i29@2x.png 2x"
              alt="image"
              src="/assets/img/illustrations/i29.png"
              width={800}
              height={472}
            />
          </figure>
        </div>
        {/* /column */}
        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto !mt-[50px]">
          <div className="svg-bg !bg-[#e0e9fa] rounded !mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256.02 256"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/like.svg"
              className="svg-inject icon-svg solid text-[#3f78e0] text-primary"
            >
              <g data-name="Layer 2">
                <path
                  className="fill-primary"
                  d="M226.67 21.33a8 8 0 018 8v144a8 8 0 01-8 8H107.31a21.3 21.3 0 00-15.09 6.25L64 215.81v-13.14a21.34 21.34 0 00-21.33-21.33H29.33a8 8 0 01-8-8v-144a8 8 0 018-8h197.34zm0-21.33H29.33A29.35 29.35 0 000 29.33v144a29.36 29.36 0 0029.33 29.33h13.33V248a8 8 0 004.94 7.39 7.82 7.82 0 003.07.61 8.09 8.09 0 005.67-2.34l51-51h119.35A29.36 29.36 0 00256 173.34v-144A29.39 29.39 0 00226.67 0z"
                />
                <path
                  className="fill-secondary"
                  d="M96 146.67a10.67 10.67 0 01-10.67 10.67H74.66A10.68 10.68 0 0164 146.67v-64A10.67 10.67 0 0174.66 72h10.67A10.67 10.67 0 0196 82.67zm89.92-10.88C184 148.06 172.8 157.34 160 157.34h-8.11c-21.33 0-36.16-4-45.44-7.79a25.36 25.36 0 00.21-2.88v-64A21.24 21.24 0 00104 72.32c5.65-4.48 12.69-11.73 12.69-19.84 0-6.61 0-20.27 12.8-20.27 8.53 0 17.81 7.89 17.81 25.17A48.86 48.86 0 01145 72h21.23A25.76 25.76 0 01192 97.71c0 .32-1.28 27.09-6.51 38z"
                />
              </g>
            </svg>
          </div>
          <h3 className="h1 !leading-[1.3] post-title !tracking-[-0.03em] !mb-3">
            Social Media Marketing
          </h3>
          <p>
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus.
          </p>
          <ul className="pl-0 list-none bullet-bg bullet-soft-primary">
            {listFeatures.map((elm, i) => (
              <li key={i} className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                {elm}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="more hover !text-[#3f78e0] hover:!text-[#3f78e0]"
          >
            Learn More
          </a>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="flex flex-wrap mx-[-15px] !mt-[-50px] items-center !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
        <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 lg:!order-2 !mt-[50px]">
          <figure className="m-0 p-0">
            <img
              className="max-w-full h-auto"
              srcSet="/assets/img/illustrations/i30@2x.png 2x"
              alt="image"
              src="/assets/img/illustrations/i30.png"
              width={800}
              height={479}
            />
          </figure>
        </div>
        {/* /column */}
        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mr-auto !mt-[50px]">
          <div className="svg-bg bg-[#e1f6f0] rounded !mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/layout-2.svg"
              className="svg-inject icon-svg solid text-[#45c4a0] text-green"
            >
              <path
                className="fill-secondary"
                d="M0 102.4v141.87A11.73 11.73 0 0011.73 256h51.2a11.73 11.73 0 0011.73-11.73V102.4a11.73 11.73 0 00-11.73-11.73h-51.2A11.73 11.73 0 000 102.4z"
              />
              <path
                className="fill-primary"
                d="M244.27 0H11.73A11.73 11.73 0 000 11.73v51.2a11.73 11.73 0 0011.73 11.73h232.53A11.72 11.72 0 00256 62.93v-51.2A11.7 11.7 0 00244.27 0zM102.4 256h141.87A11.73 11.73 0 00256 244.27V102.4a11.73 11.73 0 00-11.73-11.73H102.4a11.73 11.73 0 00-11.73 11.73v141.87A11.73 11.73 0 00102.4 256z"
              />
            </svg>
          </div>
          <h3 className="h1 !leading-[1.3] post-title !tracking-[-0.03em] !mb-3">
            Web Design &amp; Development
          </h3>
          <p>
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus.
          </p>
          <ul className="pl-0 list-none bullet-bg bullet-soft-green">
            {listFeatures.map((elm, i) => (
              <li key={i} className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                {elm}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="more hover !text-[#45c4a0] focus:!text-[#45c4a0] hover:!text-[#45c4a0]"
          >
            Learn More
          </a>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="flex flex-wrap mx-[-15px] !mt-[-50px] items-center">
        <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
          <figure className="m-0 p-0">
            <img
              className="max-w-full h-auto"
              srcSet="/assets/img/illustrations/i31@2x.png 2x"
              alt="image"
              src="/assets/img/illustrations/i31.png"
              width={800}
              height={512}
            />
          </figure>
        </div>
        {/* /column */}
        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto !mt-[50px]">
          <div className="svg-bg bg-[#fbe7f3] rounded !mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 218.67"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/bullhorn.svg"
              className="svg-inject icon-svg solid text-[#e668b3] text-fuchsia"
            >
              <path
                className="fill-secondary"
                d="M88 208a48.06 48.06 0 01-48-48 45.85 45.85 0 012.26-14.48 10.66 10.66 0 1120.22 6.75 24.28 24.28 0 00-1.15 7.73 26.65 26.65 0 0052.56 6.22 10.67 10.67 0 0120.77 4.87A47.71 47.71 0 0188 208z"
              />
              <path
                className="fill-primary"
                d="M248 210.67a8 8 0 01-2.22-.32L5.78 141A8 8 0 010 133.34v-48a8 8 0 015.78-7.68l240-69.32A8 8 0 01256 16v186.7a8 8 0 01-3.2 6.4 8.09 8.09 0 01-4.8 1.57z"
              />
              <path
                className="fill-primary"
                d="M245.33 218.67A10.67 10.67 0 01234.66 208V10.67a10.67 10.67 0 1121.34 0V208a10.66 10.66 0 01-10.67 10.67zm-234.66-64A10.66 10.66 0 010 144V74.69a10.67 10.67 0 0121.34 0V144a10.67 10.67 0 01-10.67 10.67z"
              />
            </svg>
          </div>
          <h3 className="h1 !leading-[1.3] post-title !tracking-[-0.03em] !mb-3">
            Content Marketing Services
          </h3>
          <p>
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus.
          </p>
          <ul className="pl-0 list-none bullet-bg bullet-soft-fuchsia">
            {listFeatures.map((elm, i) => (
              <li key={i} className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#fbe4f1] !text-[#e668b3] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                {elm}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="more hover !text-[#e668b3] focus:!text-[#e668b3] hover:!text-[#e668b3]"
          >
            Learn More
          </a>
        </div>
        {/* /column */}
      </div>
    </>
  );
}
