import React from "react";

import ProgressCircle from "@/components/common/CircularProgress";
import { listFeatures } from "@/data/features";
export default function Features() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-[4.5rem] xl:pt-28 lg:pt-28 md:pt-28 pb-[4.5rem] xl:pb-32 lg:pb-32 md:pb-32">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
              Our Features
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-9 xl:!px-12">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] !mt-[-40px] !mb-[7rem]">
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256.02 213.34"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/script.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia !mr-4"
                >
                  <path
                    className="fill-secondary"
                    d="M162.66 106.34a8 8 0 01-6.06-13.2l11.54-13.47-11.54-13.45a8 8 0 1112.14-10.42l16 18.67a8 8 0 010 10.42l-16 18.67a8 8 0 01-6.08 2.78zm-69.31 0a8 8 0 01-6.08-2.78l-16-18.67a8 8 0 010-10.42l16-18.67a8 8 0 0112.15 10.42L87.88 79.67l11.54 13.46a8 8 0 01-6.07 13.21zm24.87 15.8a8 8 0 01-6-9.6l16-69.33a8 8 0 1115.6 3.6l-16 69.33a8 8 0 01-9.6 6z"
                  />
                  <path
                    className="fill-primary"
                    d="M237.33 0H18.67A18.76 18.76 0 000 18.67v144a18.76 18.76 0 0018.67 18.67h81.68c-1.25 5.35-4.57 14-13.45 22.9a5.33 5.33 0 003.77 9.1h74.67a5.33 5.33 0 003.78-9.1c-8.86-8.86-12.27-17.54-13.6-22.9h81.82A18.77 18.77 0 00256 162.67v-144A18.79 18.79 0 00237.33 0zm-2.66 138.67H21.33V21.34h213.33v117.33z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="!text-[1.1rem] !mb-1">
                  Software &amp; Integration
                </h3>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/verify.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia !mr-4"
                >
                  <path
                    className="fill-secondary"
                    d="M186.67 117.33A69.34 69.34 0 10256 186.68a69.43 69.43 0 00-69.33-69.35zm37.34 55L186.68 215a10.65 10.65 0 01-7.68 3.63h-.35a10.67 10.67 0 01-7.53-3.12l-21.33-21.33a10.67 10.67 0 0115.09-15.09l13.26 13.27L208 158.3a10.67 10.67 0 1116 14.07z"
                  />
                  <path
                    className="fill-primary"
                    d="M177.92 32.32L92.58.32a5.88 5.88 0 00-3.84 0l-85.35 32a5.36 5.36 0 00-3.39 5v68.59c0 97.28 88.64 117.76 89.5 118a6.28 6.28 0 002.34 0 73.48 73.48 0 0010.77-3.41A89.34 89.34 0 0196 186.68a90.78 90.78 0 0185.34-90.56V37.35a5.38 5.38 0 00-3.42-5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="!text-[1.1rem] !mb-1">Network Security</h3>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256.03 256.02"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/cloud-network.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia !mr-4"
                >
                  <path
                    className="fill-primary"
                    d="M193.17 36.14C180.21 14.05 155.12 0 128 0 93.52 0 63.55 22.64 55.62 53.65c-25.27 2.75-44.95 23.09-44.95 47.68 0 26.46 22.79 48 50.79 48h123.6c33.24 0 60.28-25.52 60.28-56.9 0-28.67-22.57-52.62-52.17-56.29z"
                  />
                  <path
                    className="fill-secondary"
                    d="M245.34 208h-74.67v-8A18.69 18.69 0 00152 181.33h-13.33V144a10.67 10.67 0 10-21.34 0v37.33H104A18.69 18.69 0 0085.33 200v8H10.66a10.67 10.67 0 000 21.34h74.68v8A18.7 18.7 0 00104 256h48a18.7 18.7 0 0018.67-18.68v-8h74.67a10.67 10.67 0 100-21.34z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="!text-[1.1rem] !mb-1">Cloud Services</h3>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/director.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia !mr-4"
                >
                  <path
                    className="fill-primary"
                    d="M163.78 19.12A42.63 42.63 0 00128 0c-18.54 0-34.77 11.81-40.14 28.34C74.26 31 64 42.66 64 56.53c0 15.89 13.42 28.8 29.92 28.8h63.3c19.18 0 34.78-15 34.78-33.43 0-16.22-12.08-29.87-28.22-32.78z"
                  />
                  <path
                    className="fill-secondary"
                    d="M224 168a8 8 0 01-8-8v-16H40v16a8 8 0 01-16 0v-24a8 8 0 018-8h192a8 8 0 018 8v24a8 8 0 01-8 8z"
                  />
                  <path
                    className="fill-secondary"
                    d="M128 170.67a8 8 0 01-8-8v-48a8 8 0 0116 0v48a8 8 0 01-8 8z"
                  />
                  <circle className="fill-primary" cx={32} cy="197.33" r={16} />
                  <path
                    className="fill-primary"
                    d="M40 224H24a24 24 0 00-24 24 8 8 0 008 8h48a8 8 0 008-8 24 24 0 00-24-24z"
                  />
                  <circle
                    className="fill-primary"
                    cx={128}
                    cy="197.33"
                    r={16}
                  />
                  <path
                    className="fill-primary"
                    d="M136 224h-16a24 24 0 00-24 24 8 8 0 008 8h48a8 8 0 008-8 24 24 0 00-24-24z"
                  />
                  <circle
                    className="fill-primary"
                    cx={224}
                    cy="197.33"
                    r={16}
                  />
                  <path
                    className="fill-primary"
                    d="M232 224h-16a24 24 0 00-24 24 8 8 0 008 8h48a8 8 0 008-8 24 24 0 00-24-24z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="!text-[1.1rem] !mb-1">Wireless Networking</h3>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 213.34"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/setting.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia !mr-4"
                >
                  <path
                    className="fill-secondary"
                    d="M177.81 73.28c.11-1.28.21-2.56.21-4s-.12-2.67-.21-4l8.85-6.52a13.19 13.19 0 003.63-17.07l-7.89-13.98a12.76 12.76 0 00-16.64-5.44L156 26.86a51.33 51.33 0 00-6.08-3.63l-1.12-11.39A13 13 0 00135.89 0H120.1a13 13 0 00-12.92 11.84l-1.07 11.41a51.33 51.33 0 00-6.11 3.63l-9.81-4.59a12.86 12.86 0 00-16.64 5.44L65.7 41.81a13.12 13.12 0 003.63 17.07l8.85 6.51c-.12 1.28-.21 2.56-.21 4s.11 2.68.21 4l-8.85 6.51a13.12 13.12 0 00-3.62 17l7.89 14.08a12.84 12.84 0 0016.64 5.44l9.81-4.59a51.33 51.33 0 006.08 3.63l1.07 11.41a13 13 0 0012.91 11.84h15.79a13 13 0 0012.92-11.84l1.07-11.41a51.33 51.33 0 006.08-3.63l9.81 4.59a12.76 12.76 0 0016.64-5.44l7.88-14.08a13.12 13.12 0 00-3.63-17.07zm-23.14-3.94A26.67 26.67 0 11128 42.67a26.69 26.69 0 0126.67 26.67z"
                  />
                  <path
                    className="fill-primary"
                    d="M224 149.34H32a32 32 0 000 64h192a32 32 0 000-64zM42.67 192a10.67 10.67 0 1110.67-10.66A10.67 10.67 0 0142.67 192zM96 192a10.67 10.67 0 1110.67-10.66A10.67 10.67 0 0196 192zm64 0a10.67 10.67 0 1110.67-10.66A10.67 10.67 0 01160 192zm53.33 0A10.67 10.67 0 11224 181.34 10.67 10.67 0 01213.33 192z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="!text-[1.1rem] !mb-1">IT Solutions</h3>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/server.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia !mr-4"
                >
                  <path
                    className="fill-secondary"
                    d="M250.58 126.14l-56-19a8 8 0 00-5.16 0l-56 19a8 8 0 00-5.42 7.57v42.87c0 52.32 58.38 77.72 60.88 78.8a8.19 8.19 0 003.12.62 7.85 7.85 0 003.12-.64c2.5-1.06 60.88-26.48 60.88-78.78v-42.87a8 8 0 00-5.42-7.57zm-23.52 40.45l-29.33 37.33a10.66 10.66 0 01-15.33 1.5l-18.67-16a10.66 10.66 0 0113.87-16.19l10.22 8.77 22.47-28.57a10.66 10.66 0 0116.77 13.18z"
                  />
                  <path
                    className="fill-primary"
                    d="M202.67 0H32a32 32 0 000 64h170.67a32 32 0 000-64zM32 42.67A10.67 10.67 0 1142.67 32 10.67 10.67 0 0132 42.67zm42.67 0A10.67 10.67 0 1185.34 32a10.67 10.67 0 01-10.67 10.67zM32 85.33a32 32 0 000 64h74.67v-15.57a29.38 29.38 0 0120-27.84l55.89-19a29 29 0 019.49-1.6zM32 128a10.67 10.67 0 1110.67-10.67A10.7 10.7 0 0132 128zm42.67 0a10.67 10.67 0 1110.67-10.67A10.7 10.7 0 0174.67 128zm32 48.53v-5.87H32a32 32 0 000 64h95.68c-12.27-15.57-21.01-35.09-21.01-58.13zM32 213.33a10.67 10.67 0 1110.67-10.66A10.7 10.7 0 0132 213.33zm42.67 0a10.67 10.67 0 1110.67-10.66 10.7 10.7 0 01-10.67 10.66z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="!text-[1.1rem] !mb-1">Server Configuration</h3>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-7.5px] !mt-[-50px] !mb-[5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem] items-center">
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%]">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                srcSet="/assets/img/illustrations/3d2@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/3d2.png"
                width={800}
                height={925}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%]">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
              Have Perfect Control
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-4">
              We bring solutions to make life easier for our customers.
            </h3>
            <p className="!mb-6">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et. Vivamus sagittis lacus vel augue rutrum.
            </p>
            <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                  <li className="relative !pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Aenean quam ornare. Curabitur blandit.</span>
                  </li>
                  <li className="relative !pl-6 !mt-3">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Nullam quis risus eget urna mollis ornare.</span>
                  </li>
                </ul>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                  <li className="relative !pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Etiam porta euismod malesuada mollis.</span>
                  </li>
                  <li className="relative !pl-6 !mt-3">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Vivamus sagittis lacus vel augue rutrum.</span>
                  </li>
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] items-center">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] xl:!order-2 lg:!order-2 !relative !mt-[50px]">
            <figure className="rounded-[0.4rem]">
              <img
                className="max-w-full h-auto rounded-[0.4rem]"
                srcSet="/assets/img/photos/about27@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/about27.jpg"
                width={625}
                height={590}
              />
            </figure>
            <div
              className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute xl:block lg:block md:block max-sm:!hidden"
              style={{ top: "15%", left: "-7%" }}
            >
              <div className="card-body py-4 px-5">
                <div className="flex flex-row items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 234.66"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/cloud-group.svg"
                      className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia mr-3"
                    >
                      <circle
                        className="fill-secondary"
                        cx={128}
                        cy="149.33"
                        r="21.33"
                      />
                      <path
                        className="fill-secondary"
                        d="M162.67 234.66H93.34a8 8 0 01-8-8v-16a29.36 29.36 0 0129.33-29.33h26.67a29.35 29.35 0 0129.33 29.33v16a8 8 0 01-8 8zm32-64h-14.19a55.46 55.46 0 0116.85 40v2.67H216a8.06 8.06 0 008-8V200a29.32 29.32 0 00-29.33-29.34zm-133.34 0A29.31 29.31 0 0032 200v5.35a8.06 8.06 0 008 8h18.67v-2.67a55.46 55.46 0 0116.85-40z"
                      />
                      <circle
                        className="fill-secondary"
                        cx="74.67"
                        cy="138.66"
                        r="21.33"
                      />
                      <circle
                        className="fill-secondary"
                        cx="181.33"
                        cy="138.66"
                        r="21.33"
                      />
                      <path
                        className="fill-primary"
                        d="M27.2 162.94a52.21 52.21 0 018.8-6.56A42.48 42.48 0 01107.73 112a41 41 0 0140.54 0A42.48 42.48 0 01220 156.38a55.09 55.09 0 015.83 4 64.4 64.4 0 00-26.65-118.49A81.31 81.31 0 00128 0C90.19 0 57.39 26.3 49.1 62.18 21.54 65.07 0 88.22 0 116.26c0 19.93 11 37.21 27.2 46.68z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="!text-[1.25rem] counter !leading-[1.4] !mb-0 whitespace-nowrap">
                      25000+
                    </h3>
                    <p className="!text-[0.8rem] leading-normal !mb-0 whitespace-nowrap">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
            <div
              className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute !text-center xl:block lg:block md:block max-sm:!hidden"
              style={{ bottom: "10%", left: "-10%" }}
            >
              <div className="card-body p-6">
                <div className="progressbar semi-circle fuchsia !relative !mb-3 !m-[0_auto_1rem] !w-[8.5rem] !h-[4.25rem]">
                  <ProgressCircle max={80} />
                </div>
                <h4 className="!mb-0">Time Saved</h4>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
              What Makes Us Different?
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-4 xl:mr-[-1.25rem] lg:mr-[-1.25rem]">
              We make spending stress free so you have the perfect control.
            </h3>
            <p className="!mb-6">
              Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
              nulla non metus auctor fringilla. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac
              cursus. Integer posuere erat a ante venenatis dapibus posuere
              velit.
            </p>
            <ul className="pl-0 list-none bullet-bg bullet-soft-primary">
              {listFeatures.map((elm, i) => (
                <li key={i} className="relative !pl-6">
                  <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                  {elm}
                </li>
              ))}
            </ul>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
