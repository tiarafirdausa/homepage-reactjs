import React from "react";

import PagesSlider from "./PagesSlider";
export default function Features() {
  return (
    <section className="wrapper overflow-hidden">
      <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="md:w-11/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h2 className="!text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.2] xl:!text-[2.2rem] !mb-4">
              What makes us different?
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal !mb-12">
              Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed
              diam eget risus varius blandit sit amet non magna.
            </p>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !relative xl:px-0 lg:px-0 !mt-[50px]">
            <div
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                width: "140%",
                height: "auto",
                transform: "translate(-50%, -50%)",
                zIndex: -1,
              }}
            >
              <img
                className="w-full"
                alt="image"
                src="/assets/img/photos/blurry.png"
                width={1400}
                height={1080}
              />
            </div>
            <figure className="m-0 p-0">
              <img
                className="w-full max-w-full !h-auto"
                srcSet="/assets/img/photos/mi1@2x.png 2x"
                alt="image"
                src="/assets/img/photos/mi1.png"
                width={752}
                height={590}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto xl:px-0 lg:px-0 !mt-[50px]">
            <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-semibold xl:!text-[1.6rem] !leading-[1.25] !mb-2 xxl:!mt-[-2.5rem]">
              Design
            </h2>
            <p className="!mb-8">
              Maecenas sed diam eget risus varius blandit sit amet non magna
              justo sit amet risus.
            </p>
            <div className="flex flex-row !mb-6">
              <div>
                <div className="svg-bg bg-[rgba(255,255,255)] opacity-100 !rounded-[0.8rem] shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 255.97 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/puzzle.svg"
                    className="svg-inject icon-svg solid-duo text-grape-fuchsia"
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
              </div>
              <div>
                <h4 className="!mb-1">UI/UX Design</h4>
                <p className="!mb-0">
                  Nulla vitae elit libero, a pharetra augue. Cum sociis natoque
                  penatibus et.
                </p>
              </div>
            </div>
            <div className="flex flex-row !mb-6">
              <div>
                <div className="svg-bg bg-[rgba(255,255,255)] opacity-100 !rounded-[0.8rem] shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/pen-tool.svg"
                    className="svg-inject icon-svg solid-duo text-grape-fuchsia"
                  >
                    <g data-name="Layer 2">
                      <path
                        className="fill-primary"
                        d="M162.62 162.53l17.14-27.87a10.65 10.65 0 00.8-9.6L137.89 20a10.68 10.68 0 00-19.78 0L75.44 125.06a10.71 10.71 0 00.8 9.6l17.14 27.87a18.56 18.56 0 00-9.2 13.68L74.74 247a7.94 7.94 0 007.93 9h90.67a8 8 0 007.92-9.07l-9.44-70.74a18.56 18.56 0 00-9.2-13.66zm-45.29-83.91v28.05a10.67 10.67 0 1021.34 0v-28l20.08 49.46L139.14 160h-22.29l-19.62-31.92z"
                      />
                      <path
                        className="fill-secondary"
                        d="M248 0h-26.67a8 8 0 00-8 8v2.67H42.66V8a8 8 0 00-8-8H8a8 8 0 00-8 8v26.67a8 8 0 008 8h26.67a8 8 0 008-8V32h19.84a111.78 111.78 0 00-46.38 88.24 21.32 21.32 0 1021.33.13 90.58 90.58 0 01181.1 0 21.33 21.33 0 1021.33-.13A111.84 111.84 0 00193.5 32h19.84v2.67a8 8 0 008 8H248a8 8 0 008-8V8a8 8 0 00-8-8z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="!mb-1">Design System</h4>
                <p className="!mb-0">
                  Nulla vitae elit libero, a pharetra augue. Cum sociis natoque
                  penatibus et.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="svg-bg bg-[rgba(255,255,255)] opacity-100 !rounded-[0.8rem] shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 255.98 245.34"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/share.svg"
                    className="svg-inject icon-svg solid-duo text-grape-fuchsia"
                  >
                    <g data-name="Layer 2">
                      <path
                        className="fill-secondary"
                        d="M219.1 108.48v7.68A11.89 11.89 0 01207.15 128h-19.63c-5.76 0-12-4.27-12-13.76v-5.76zm26.24-60.8a47.26 47.26 0 01-17.6 36.91 22.89 22.89 0 00-8.32 13.23h-44.06a20 20 0 00-7.79-12.69 47.13 47.13 0 01-18.24-38.4C149.86 21.34 171.09.33 196.58 0a47.34 47.34 0 0134.56 13.88 46.83 46.83 0 0114.2 33.79z"
                      />
                      <path
                        className="fill-primary"
                        d="M5.25 117.34A5.34 5.34 0 000 122.67v98.64A2.68 2.68 0 002.67 224H28a5.33 5.33 0 005.13-3.87l23.6-83.18A10.66 10.66 0 0050.1 124c-9.67-3.52-24.5-7-44.85-6.66zM234.67 176c-21.33 0-64 27-85.33 27S104 186.65 104 186.65s28.74 5.35 45.33 5.35 21.33-5.66 21.33-13.33c0-18.67-31.72-21.56-47.75-24-15.74-8.76-23.92-15.69-50-17.9a28.85 28.85 0 01-.81 4.54l-21.43 75.5c24.27 11 66.05 28.53 88 28.53 32 0 117.32-42.67 117.32-53.33S245.33 176 234.67 176z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="!mb-1">Digital Branding</h4>
                <p className="!mb-0">
                  Nulla vitae elit libero, a pharetra augue. Cum sociis natoque
                  penatibus et.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !relative xl:!order-2 lg:!order-2 xl:px-0 lg:px-0 !mt-[50px]">
            <div
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                width: "140%",
                height: "auto",
                transform: "translate(-50%, -50%)",
                zIndex: -1,
              }}
            >
              <img
                className="w-full"
                alt="image"
                src="/assets/img/photos/blurry.png"
                width={1400}
                height={1080}
              />
            </div>
            <figure className="m-0 p-0">
              <img
                className="w-full max-w-full !h-auto"
                srcSet="/assets/img/photos/mi2@2x.png 2x"
                alt="image"
                src="/assets/img/photos/mi2.png"
                width={752}
                height={597}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mr-auto xl:px-0 lg:px-0 !mt-[50px]">
            <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-semibold xl:!text-[1.6rem] !leading-[1.25] !mb-2 xxl:!mt-[-2.5rem]">
              Development
            </h2>
            <p className="!mb-8">
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh fermentum.
            </p>
            <div className="flex flex-row !mb-6">
              <div>
                <div className="svg-bg bg-[rgba(255,255,255)] opacity-100 !rounded-[0.8rem] shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/devices.svg"
                    className="svg-inject icon-svg solid-duo text-grape-fuchsia"
                  >
                    <path
                      className="fill-primary"
                      d="M226.67 0H80a29.35 29.35 0 00-29.33 29.33v13.33H72v-8a13.34 13.34 0 0113.33-13.33h136a13.34 13.34 0 0113.33 13.33v186.67a13.35 13.35 0 01-13.33 13.33h-82.74A44.07 44.07 0 01132.7 256h94a29.33 29.33 0 0029.3-29.33V29.33A29.35 29.35 0 00226.67 0z"
                    />
                    <path
                      className="fill-secondary"
                      d="M97.17 64h-77C9 64 0 73.87 0 86v148c0 12.13 9 22 20.16 22h77c11.12 0 20.16-9.87 20.16-22V86c.01-12.13-9.03-22-20.15-22zm5.5 168c0 4.42-3.28 8-7.33 8H22c-4.05 0-7.33-3.58-7.33-8V85.33c0-4.42 3.28-8 7.33-8h3.66c4.05 0 7.33 3.58 7.33 8s3.28 8 7.33 8H77c4.05 0 7.33-3.59 7.33-8s3.28-8 7.33-8h3.66c4 0 7.33 3.58 7.33 8V232z"
                    />
                    <path
                      className="fill-primary"
                      d="M154.67 186.67A13.33 13.33 0 10168 200a13.35 13.35 0 00-13.33-13.33z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="!mb-1">Responsive Website</h4>
                <p className="!mb-0">
                  Nulla vitae elit libero, a pharetra augue. Cum sociis natoque
                  penatibus et.
                </p>
              </div>
            </div>
            <div className="flex flex-row !mb-6">
              <div>
                <div className="svg-bg bg-[rgba(255,255,255)] opacity-100 !rounded-[0.8rem] shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/safe.svg"
                    className="svg-inject icon-svg solid-duo text-grape-fuchsia"
                  >
                    <g data-name="Layer 2">
                      <path
                        className="fill-secondary"
                        d="M186.58 19.47l-56-19a8 8 0 00-5.16 0l-56 19A8 8 0 0064 27.06v42.86c0 52.32 58.38 77.73 60.88 78.8a8.1 8.1 0 003.12.64 7.85 7.85 0 003.12-.64c2.5-1.07 60.88-26.5 60.88-78.82V27.06a8 8 0 00-5.42-7.59zm-23.52 40.45l-29.33 37.33a10.67 10.67 0 01-7.35 4h-1a10.7 10.7 0 01-6.94-2.56l-18.67-16a10.66 10.66 0 0113.83-16.11l10.22 8.75 22.47-28.58a10.66 10.66 0 0116.77 13.17z"
                      />
                      <path
                        className="fill-primary"
                        d="M237.34 42.67h-24V64h21.33v117.33H21.33V64h21.33V42.67h-24A18.74 18.74 0 000 61.33v144A18.75 18.75 0 0018.66 224h81.69c-1.25 5.34-4.57 14-13.45 22.9a5.33 5.33 0 003.77 9.1h74.67a5.34 5.34 0 003.78-9.1c-8.86-8.87-12.27-17.54-13.6-22.9h81.82A18.75 18.75 0 00256 205.33v-144a18.74 18.74 0 00-18.66-18.66z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="!mb-1">Backup and Updates</h4>
                <p className="!mb-0">
                  Nulla vitae elit libero, a pharetra augue. Cum sociis natoque
                  penatibus et.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="svg-bg bg-[rgba(255,255,255)] opacity-100 !rounded-[0.8rem] shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256.01 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/globe-2.svg"
                    className="svg-inject icon-svg solid-duo text-grape-fuchsia"
                  >
                    <path
                      className="fill-secondary"
                      d="M128.11 256h-.24a126.37 126.37 0 01-22-1.84 8 8 0 112.72-15.76A114.68 114.68 0 00128 240a8.06 8.06 0 018.07 8 8 8 0 01-7.94 8zm33.52-12.5a8 8 0 014.77-10.25 112.18 112.18 0 0017.66-8.25 8 8 0 018 13.85 128.36 128.36 0 01-20.19 9.46 8 8 0 01-10.26-4.79zm-97.5-4.56a128.83 128.83 0 01-18.27-12.78 8 8 0 1110.25-12.27 114.33 114.33 0 0016 11.2 8 8 0 11-8 13.85zm150.69-27.71a8 8 0 01-1-11.26A112.91 112.91 0 00225 184a8 8 0 0113.86 8 130.3 130.3 0 01-12.78 18.26 8 8 0 01-11.28 1zm-197.59-19A128.41 128.41 0 017.76 172a8 8 0 1115-5.49 112.8 112.8 0 008.29 17.67 8 8 0 11-13.84 8zM244.8 156.7a8 8 0 01-6.5-9.26A112.3 112.3 0 00240 128a8.23 8.23 0 018-8.26 7.81 7.81 0 018 8.76 124.89 124.89 0 01-1.92 21.72 8 8 0 01-9.26 6.48zM8 136.13a7.89 7.89 0 01-8-7.87s.61-15 1.86-22.18a8 8 0 1115.76 2.7A114.47 114.47 0 0016 128a8.09 8.09 0 01-8 8.13zm225.1-46.88a110.41 110.41 0 00-8.32-17.63 8 8 0 0113.83-8.08 129 129 0 019.52 20.17 8 8 0 01-15 5.54zM19.9 75.18A8 8 0 0117 64.26 126.41 126.41 0 0129.73 46 8 8 0 1142 56.21a112.72 112.72 0 00-11.17 16 8 8 0 01-10.93 3zm179.76-33.24a113.17 113.17 0 00-16-11.16 8 8 0 117.95-13.87 127.39 127.39 0 0118.3 12.75 8 8 0 01-10.24 12.28zM60.78 28.26a8 8 0 012.88-11 128 128 0 0120.18-9.44 8 8 0 115.52 15 112.17 112.17 0 00-17.63 8.31 8 8 0 01-11-2.88zm86.29-10.64A112.4 112.4 0 00128 16a8.17 8.17 0 01-8.19-8 7.84 7.84 0 017.81-8h.38a127.72 127.72 0 0121.8 1.86 8 8 0 01-2.71 15.76z"
                    />
                    <path
                      className="fill-primary"
                      d="M128 32a96 96 0 1096 96 96.11 96.11 0 00-96-96zm62.61 145.66a103 103 0 00-14.49-7.76 160.22 160.22 0 005-33.9h26.48a79.47 79.47 0 01-17.01 41.66zM48.4 136h26.48a161.6 161.6 0 005 33.9 104.11 104.11 0 00-14.5 7.76A79.47 79.47 0 0148.4 136zm17-57.66a103.14 103.14 0 0014.5 7.76 160.2 160.2 0 00-5 33.9H48.4a79.47 79.47 0 0117-41.66zM120 79.7a106.49 106.49 0 01-20-3.43c5.41-13 12.6-22.11 20-26zm0 16V120H90.86A145.12 145.12 0 0195 91.49a122.72 122.72 0 0025 4.21zm0 40.3v24.3a121.26 121.26 0 00-25 4.23A144.37 144.37 0 0190.86 136H120zm0 40.3v29.48c-7.4-3.94-14.59-13-20-26a104.12 104.12 0 0120-3.44zm16 0a106.21 106.21 0 0120 3.43c-5.4 13-12.59 22.11-20 26zm0-16V136h29.1a144.37 144.37 0 01-4.16 28.51 122.49 122.49 0 00-25-4.21zm0-40.3V95.7a121.14 121.14 0 0025-4.23 142.91 142.91 0 014.1 28.53H136zm0-40.3V50.24c7.41 3.94 14.6 13 20 26a104.36 104.36 0 01-20 3.46zm27.94-23.08a80.19 80.19 0 0115.25 10 88.15 88.15 0 01-8.19 4.21 98.1 98.1 0 00-7.12-14.21zm-79 14.21a86.72 86.72 0 01-8.12-4.25 80.12 80.12 0 0115.24-10 95.14 95.14 0 00-7.12 14.25zm0 114.34a98.11 98.11 0 007.12 14.21 80.12 80.12 0 01-15.24-10 86.72 86.72 0 018.12-4.21zm86.1 0a88.15 88.15 0 018.13 4.25 80.19 80.19 0 01-15.25 10 99.14 99.14 0 007.08-14.25zM181.1 120a161 161 0 00-5-33.9 104.57 104.57 0 0014.49-7.76 79.47 79.47 0 0117 41.66z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="!mb-1">SEO Optimization</h4>
                <p className="!mb-0">
                  Nulla vitae elit libero, a pharetra augue. Cum sociis natoque
                  penatibus et.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
      <div className="container">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="md:w-11/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h2 className="!text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.2] xl:!text-[2.2rem] !mb-4">
              Creative. Smart. Awesome.
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal !mb-12">
              Curabitur blandit tempus porttitor. Cras mattis consectetur purus
              sit amet fermentum. Nullam quis risus eget urna.
            </p>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <PagesSlider />
      {/* /.swiper-container */}
      <div className="text-center !mt-8 !mb-[5rem] xl:!mb-[22.5rem] lg:!mb-[22.5rem] md:!mb-[8rem]">
        <a className="btn btn-lg btn-grape !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] !rounded-[0.8rem]">
          See Our Projects
        </a>
      </div>
    </section>
  );
}
