import React from "react";

import { listFeatures2 } from "@/data/features";

export default function About() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-70px] items-center !mb-10 xl:!mb-16 lg:!mb-16 md:!mb-16">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[70px] !relative">
            <div
              className="btn btn-circle btn-violet !text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:!border-[#a07cc5] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5] pointer-events-none !absolute counter-wrapper flex-col max-md:!hidden xl:!flex lg:!flex md:!flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%] z-[9]"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 170,
                height: 170,
              }}
            >
              <h3 className="!text-white !mb-1 !mt-[-0.5rem] relative z-[3]">
                <span className="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] leading-none !mb-2 xl:!text-[2.2rem]">
                  20+
                </span>
              </h3>
              <p className="!text-[0.8rem] font-medium !mb-0">
                Year Experience
              </p>
            </div>
            <div className="flex flex-wrap mx-[-12.5px] !mt-[-25px] items-center">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                  <div className="xl:w-10/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[16.66666667%] md:w-10/12 md:!ml-[16.66666667%] w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="!rounded-[0.4rem]"
                        srcSet="/assets/img/photos/ab1@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/ab1.jpg"
                        width={240}
                        height={245}
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="!rounded-[0.4rem]"
                        srcSet="/assets/img/photos/ab2@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/ab2.jpg"
                        width={290}
                        height={225}
                      />
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]">
                <figure className="rounded-[0.4rem]">
                  <img
                    className="!rounded-[0.4rem]"
                    srcSet="/assets/img/photos/ab3@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/ab3.jpg"
                    width={290}
                    height={440}
                  />
                </figure>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[70px]">
            <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] font-DMSerif !font-normal tracking-normal !mb-[1.25rem]">
              We bring solutions to make life easier for our customers.
            </h3>
            <p className="!mb-7">
              Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum
              nulla sed consectetur. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet. Vestibulum id ligula porta felis
              euismod semper. Vestibulum id ligula.
            </p>
            <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] !px-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                  {listFeatures2.slice(0, 2).map((elm, i) => (
                    <li key={i} className="relative !pl-6 !mt-3">
                      <span>
                        <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#eee7f5] !text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                      </span>
                      <span>{elm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] !px-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                  {listFeatures2.slice(2).map((elm, i) => (
                    <li key={i} className="relative !pl-6 !mt-3">
                      <span>
                        <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#eee7f5] !text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                      </span>
                      <span>{elm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-40px]">
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[40px] max-w-full">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 507 512"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] !text-[#a07cc5] text-violet !mr-4"
                >
                  <path
                    className="lineal-fill"
                    d="M402.4 437.9c0-10.5-4.4-20.4-12.6-28.7-5.1-5.6-10.6-11-16-16.1-2.7-2.6-5.5-5.3-8.1-8l-23.4-23.4c-18-18-41.3-18-59.4 0-2.4 2.4-4.9 4.8-7.3 7.2-6.4 6.4-13.1 12.9-19.6 19.9-11.6-5.2-23-12.4-36.5-23.2-13.4-10.9-62.2-59.7-73.2-73.2-10.7-13.5-17.9-25-23.2-36.5 7-6.4 13.5-13.1 19.9-19.6 2.4-2.4 4.8-4.9 7.2-7.3 18-18 18-41.3 0-59.4l-23.4-23.4c-2.7-2.7-5.4-5.4-8-8.1-5.2-5.3-10.6-10.8-16.1-16-8.3-8.2-18.3-12.6-28.7-12.6s-20.5 4.5-29.1 12.7l-.2.2L33.4 134c-10.8 10.6-17.4 24.8-18.6 39.9-2.1 25 5.3 48.4 11 63.6C39.6 275 60.4 309.7 91.3 347c11.2 13.3 23.2 26 35.9 37.8 11.8 12.7 24.4 24.7 37.8 35.8 37.2 31 72 51.7 109.5 65.6 15.3 5.7 38.6 13 63.6 11 15.1-1.2 29.3-7.8 39.9-18.6l11.6-11.4.2-.2c8.2-8.5 12.6-18.6 12.6-29.1z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M507 237.1C507 106.4 400.7 0 270 0c-54.9 0-108.2 19.1-150.6 54-6.1 5.1-7 14.2-1.9 20.3 5.1 6.1 14.1 7 20.2 2 37.3-30.6 84-47.4 132.3-47.4 114.9 0 208.3 93.4 208.3 208.3-.1 63.1-28.7 122.8-77.8 162.4l-.2-.2c-5.4-5.8-11.1-11.4-16.4-16.5l-.2-.1c-2.5-2.3-5-4.8-7.4-7.3l-23.8-23.8c-11.6-11.6-25.4-17.7-39.9-17.7s-28.3 6.1-39.9 17.7l-3.4 3.4c-1.1 1.1-2.6 2.5-3.8 3.7l-1.8 1.7c-3.5 3.5-7.1 7-10.8 10.7-8.6-4.9-16.8-10.5-24.4-16.7-12.9-10.5-60.4-58.1-71-71-6.2-7.7-11.8-15.8-16.8-24.4 3.7-3.6 7.2-7.2 10.7-10.7l1.7-1.8c1.3-1.3 2.6-2.6 3.8-3.9 1.1-1.1 2.2-2.3 3.4-3.4 23.5-23.5 23.5-56.2 0-79.7L149 148.3c4.5-6.1 9.4-11.8 14.8-17.1 58.5-58.5 153.6-58.5 212 0 44.9 45 56.6 113.4 29.3 170.8-3.4 7.2-.4 15.8 6.8 19.2s15.8.4 19.2-6.8c32.6-68.4 18.7-149.9-34.9-203.5-69.7-69.7-183.1-69.7-252.7 0-5.3 5.3-10.3 10.9-14.9 16.8-5-5.2-10.3-10.6-16-15.8-10.9-11-24.3-16.7-38.6-16.7s-27.8 5.7-39.1 16.6l-.2.2-.2.2-.1.1-11.3 11.6C9.9 136.9 1.8 154.2.4 172.7c-2.3 27.8 5.7 53.2 11.8 69.8 14.5 39.2 36.1 75.3 68.1 113.7C91.7 369.9 104 382.8 117 395c12.2 13 25.1 25.3 38.8 36.8 38.4 31.9 74.5 53.5 113.6 68 14.2 5.2 35.8 12.2 60 12.2 3.3 0 6.7-.1 10-.4 18.5-1.5 35.8-9.5 48.7-22.7l11.6-11.3.1-.1.2-.2.2-.2c10.9-11.3 16.6-24.9 16.6-39.1 0-4.5-.6-9-1.8-13.4 58-45 91.9-114.2 92-187.5zM379.5 457L368 468.4l-.1.1c-8.2 8.4-19.2 13.6-30.9 14.4-2.5.2-5 .3-7.5.3-19.5 0-37.8-6-49.9-10.4-36-13.4-69.5-33.4-105.2-63.1-12.9-10.8-25.1-22.3-36.6-34.6-.2-.3-.5-.5-.7-.7-12.3-11.4-23.8-23.6-34.6-36.5-29.8-35.9-49.9-69.4-63.3-105.4-5.2-14.1-11.9-35.3-10.1-57.4.9-11.8 6-22.8 14.5-31l.1-.1L55 132.5c5.8-5.6 12.4-8.5 19.1-8.5s13 2.9 18.6 8.4l.4.4c5.3 4.9 10.6 10.3 15.5 15.3 2.6 2.7 5.2 5.4 7.8 8l23.8 23.8c12.4 12.4 12.4 26.6 0 39l-3.6 3.6c-1.2 1.2-2.4 2.5-3.7 3.8l-1.9 1.8c-5.6 5.7-11.5 11.6-17.6 17.2-4.6 4.2-6 10.9-3.4 16.5 5.7 12.7 13.7 25.2 25 39.5l.1.2c11.7 14.4 60.9 63.6 75.3 75.3l.1.1c14.3 11.3 26.9 19.3 39.5 25 5.7 2.6 12.3 1.2 16.5-3.4 5.6-6.1 11.5-12 17.3-17.6l1.9-1.8c1.2-1.2 2.4-2.4 3.7-3.6s2.4-2.4 3.6-3.6c6.1-6.1 12.8-9.3 19.5-9.3s13.4 3.2 19.5 9.3l23.8 23.8c2.6 2.6 5.3 5.2 8 7.8 5 4.9 10.4 10.1 15.3 15.5l.4.4c3.9 3.9 8.4 10.3 8.4 18.6.1 6.6-2.8 13.2-8.4 19z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M274.8 258.4h-36.5c.1-4.4 6.9-9 14.7-14.3 13.4-9.2 30-20.6 30-40.4 0-20.4-18.1-31.4-35.1-31.4-16.6 0-34.1 10.2-34.1 29.2 0 8.7 3.9 13.2 11.6 13.2 8.6 0 13.3-5 13.3-9.7 0-7.8 5.1-9.4 9.4-9.4 7.1 0 9.6 4.8 9.6 8.8 0 8-9.9 15.2-20.4 22.9-12.4 9.1-25.2 18.5-25.2 31.2v14c0 5.2 6.6 8.4 11.3 8.4h51.5c4.4 0 8.2-5.3 8.2-11.4s-3.8-11.1-8.3-11.1z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M351.9 234.9h-4.8v-8.7c0-5-5-8.2-12.7-8.2s-12.7 3.2-12.7 8.2v8.7H313l24.6-49.3c.5-1 .8-2.2.8-3.3 0-6.2-8.2-10-12.7-10-4.6-.1-8.8 2.5-10.7 6.6l-33.4 65.5c-.8 1.5-1.3 3.2-1.3 5 0 5.5 3.6 9.3 9 9.3h32.4v13.9c0 5.8 6.6 8.4 12.7 8.4s12.7-2.6 12.7-8.4v-13.9h4.8c4.3 0 8.4-5.8 8.4-11.9 0-5.7-2.6-11.9-8.4-11.9z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="!mb-1">24/7 Support</h4>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[40px] max-w-full">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 339.8 409.6"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] !text-[#a07cc5] text-violet !mr-4"
                >
                  <path
                    className="lineal-stroke"
                    d="M169.9 409.6c-5.5 0-10.9-1.2-15.8-3.5C107.8 384.8 0 327.5 0 255.5V72.1c0-10.7 8.7-19.4 19.4-19.5 2.1 0 4.2.3 6.1 1 9.2 3.1 18.9 4.7 28.6 4.6 31.5.1 60.7-16.3 76.9-43.3C136.6 5.7 146.6 0 157.4 0h25c10.8.1 20.8 5.7 26.4 14.9 16.2 27 45.4 43.4 76.9 43.3 9.7 0 19.4-1.6 28.6-4.6 10.2-3.4 21.2 2.1 24.6 12.3.7 2 1 4.1 1 6.1v48c0 6.5-5.3 11.8-11.7 11.8-6.5 0-11.8-5.3-11.8-11.7V77.6c-10 2.8-20.3 4.2-30.6 4.2-39.7.2-76.5-20.6-97-54.6-1.3-2.2-3.7-3.6-6.3-3.6h-25c-2.6 0-5 1.4-6.3 3.6-20.5 34-57.3 54.8-97 54.6-10.3 0-20.6-1.4-30.6-4.2v178c0 47.7 72.5 98 140.4 129.3 3.8 1.7 8.2 1.7 12 0 67.9-31.3 140.4-81.6 140.4-129.3v-74.9c0-6.5 5.3-11.8 11.8-11.7 6.5 0 11.7 5.3 11.7 11.7v74.9c0 72-107.8 129.3-154.1 150.6-5 2.2-10.4 3.4-15.9 3.4z"
                  />
                  <path
                    className="lineal-fill"
                    d="M156 269l-62.2-31.1c-11.8-5.9-16.6-20.2-10.7-32 5.9-11.8 20.2-16.6 32-10.7l44.9 22.5 56.6-70.7c8.2-10.3 23.2-12 33.5-3.7 10.3 8.2 12 23.2 3.7 33.5l-68.6 85.8c-6.9 8.8-19.1 11.5-29.2 6.4z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M166.7 283.3c-5.5 0-11-1.3-15.9-3.8l-62.2-31.1c-17.6-8.8-24.7-30.2-15.9-47.8s30.2-24.7 47.8-15.9l36.4 18.2 50.6-63.3c12.3-15.4 34.7-17.9 50.1-5.6 15.4 12.3 17.9 34.7 5.6 50.1l-68.6 85.8c-6.8 8.5-17.1 13.4-27.9 13.4zm-62.2-78.8c-6.7 0-12.1 5.4-12.1 12.1 0 4.6 2.6 8.8 6.7 10.8l62.2 31.1c5.1 2.6 11.3 1.2 14.9-3.3l68.6-85.8c4.3-5.1 3.7-12.8-1.4-17.1-5.1-4.3-12.8-3.7-17.1 1.4-.1.2-.3.3-.4.5l-56.6 70.7c-3.5 4.3-9.5 5.6-14.4 3.2L110 205.6c-1.7-.7-3.6-1.1-5.5-1.1z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="!mb-1">Secure Payments</h4>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[40px] max-w-full">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 409.6 361.2"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] !text-[#a07cc5] text-violet !mr-4"
                >
                  <path
                    className="lineal-stroke"
                    d="M309.9 231h-12.7c-6.1.2-11.3-4.6-11.5-10.8-.2-6.1 4.6-11.3 10.8-11.5h13.4c23 0 41.6-18.7 41.6-41.6 0-20-14.3-37.1-33.9-40.8-6-1.1-10-6.9-8.9-13 0-.3.1-.5.2-.7 10-38.6-13.2-78-51.8-88-5.9-1.5-11.9-2.3-18-2.3-24.7-.1-47.7 12.6-60.9 33.5-3 4.7-8.9 6.5-14 4.2-23.4-10.6-50.9-.2-61.5 23.2-2.7 6-4.1 12.5-4.1 19.1 0 3.6.4 7.2 1.3 10.7 1.4 6-2.3 12-8.3 13.4-.1 0-.2 0-.3.1-22.5 4.7-36.9 26.7-32.2 49.2 4 19.3 21 33.1 40.7 33.1h138.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8H99.8c-35.3 0-63.8-28.6-63.8-63.9 0-26.3 16.1-49.8 40.5-59.4-.1-1.8-.2-3.6-.2-5.4 0-38 30.8-68.7 68.8-68.7 6.6 0 13.2 1 19.5 2.8C196.6-4.7 255.9-12 297 20.1c26.6 20.7 40.1 54 35.4 87.4 33 12.4 49.6 49.3 37.2 82.3-9.3 24.8-33.2 41.2-59.7 41.2z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M204.8 334.3c-6.1 0-11.1-5-11.1-11.1V220.8c-.2-6.1 4.6-11.3 10.8-11.5 6.1-.2 11.3 4.6 11.5 10.8v103.1c-.1 6.1-5.1 11.1-11.2 11.1z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M398.5 334.3H11.1C5 334.1.1 329 .3 322.8c.2-5.9 4.9-10.6 10.8-10.8h387.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8z"
                  />
                  <path
                    className="lineal-fill"
                    d="M234.8 350.1h-60.1c-8 0-14.5-6.5-14.5-14.4v-25c0-8 6.5-14.5 14.4-14.5h60.1c8 0 14.5 6.5 14.5 14.5v25c.1 7.9-6.4 14.4-14.4 14.4z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M234.8 361.2h-60.1c-14.1 0-25.6-11.5-25.6-25.6v-25c0-14.1 11.5-25.6 25.6-25.6h60.1c14.1 0 25.6 11.5 25.6 25.6v25c0 14.2-11.4 25.6-25.6 25.6zm-60-53.9c-1.8 0-3.3 1.5-3.3 3.3v25c0 1.8 1.5 3.3 3.3 3.3h60.1c1.8 0 3.3-1.5 3.3-3.3v-25c0-1.8-1.5-3.3-3.3-3.3h-60.1zM71.3 356.5c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1zm267 0c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="!mb-1">Daily Updates</h4>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[40px] max-w-full">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 427.5"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] !text-[#a07cc5] text-violet !mr-4"
                >
                  <path
                    className="lineal-fill"
                    d="M186.9 353.4h138.3V413H186.9z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M460.2 0H51.8C23.2 0 0 23.2 0 51.8v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.6h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-45.1c0-8-6.5-14.5-14.5-14.5H51.8C39.2 339 29 328.8 29 316.2V51.8C29 39.2 39.2 29 51.8 29h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-45.9c-8-.2-14.6 6.1-14.8 14.1-.2 8 6.1 14.6 14.1 14.8h46.7c28.6 0 51.7-23.2 51.8-51.8V51.8C512 23.2 488.8 0 460.2 0zM201.3 398.5v-30.6h109.4v30.6H201.3z"
                  />
                  <path
                    className="lineal-fill"
                    d="M218.2 291.3h-75.6v-90.6c0-20.9 16.9-37.8 37.8-37.8s37.8 16.9 37.8 37.8v90.6zm75.6 0h-75.6V155.4c0-20.9 16.9-37.8 37.8-37.8s37.8 16.9 37.8 37.8v135.9z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M369.4 215.4c8 0 14.4-6.4 14.5-14.4v-91c0-28.9-23.5-52.2-52.3-52.2-28.3 0-51.4 22.6-52.2 50.8-25.8-12.9-57.1-2.5-70.1 23.3-3.4 6.9-5.3 14.4-5.5 22.1-25.8-12.9-57.2-2.5-70.1 23.3-3.6 7.3-5.5 15.3-5.5 23.4v90.6c0 8 6.5 14.5 14.5 14.5h226.7c8 .2 14.6-6.1 14.8-14.1.2-8-6.1-14.6-14.1-14.8h-61.9V110c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v91c.1 8 6.6 14.4 14.6 14.4zm-212.3-14.7c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v76.1h-46.6v-76.1zm75.6 0v-45.4c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v121.5h-46.6v-76.1z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="!mb-1">Market Research</h4>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[40px] max-w-full">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] !text-[#a07cc5] text-violet !mr-4"
                >
                  <circle className="lineal-fill" cx={256} cy={256} r="112.5" />
                  <path
                    className="lineal-stroke"
                    d="M256 382.6c-69.9 0-126.6-56.7-126.6-126.6S186.1 129.4 256 129.4 382.6 186.1 382.6 256c-.1 69.9-56.7 126.5-126.6 126.6zm0-225.1c-54.4 0-98.5 44.1-98.5 98.5s44.1 98.5 98.5 98.5 98.5-44.1 98.5-98.5c-.1-54.4-44.1-98.4-98.5-98.5z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M279.4 512h-46.8c-16.2 0-29.4-13.2-29.4-29.4v-19.2c-19.9-5-38.9-12.9-56.5-23.4l-13.6 13.6c-5.5 5.5-14.4 5.5-19.9 0s-5.5-14.4 0-19.9l21.6-21.5c4.8-4.8 12.2-5.5 17.8-1.7 20.4 13.7 43.3 23.2 67.5 27.9 6.6 1.3 11.4 7.1 11.4 13.8v30.5c0 .7.6 1.3 1.3 1.3h46.8c.7 0 1.3-.6 1.3-1.3v-30.5c0-6.7 4.8-12.5 11.4-13.8 24.1-4.7 47.1-14.2 67.5-28 5.6-3.7 13-3 17.8 1.7l21.5 21.5c.5.5 1.3.5 1.8 0l33.1-33.1c.5-.5.5-1.3 0-1.8l-21.5-21.5c-4.8-4.8-5.5-12.2-1.7-17.8 13.8-20.4 23.3-43.3 28-67.5 1.3-6.6 7.1-11.4 13.8-11.4h30.5c.7 0 1.3-.6 1.3-1.3v-46.8c0-.7-.6-1.3-1.3-1.3h-30.5c-6.7 0-12.5-4.8-13.8-11.4-4.7-24.1-14.3-47.1-28-67.5-3.7-5.6-3-13 1.7-17.8l21.5-21.6c5.6-5.4 14.5-5.2 19.9.3 5.3 5.5 5.3 14.1 0 19.6l-13.9 14c10.5 17.6 18.4 36.7 23.4 56.6h19.2c16.2 0 29.3 13.2 29.4 29.4v46.8c0 16.2-13.2 29.4-29.4 29.4h-19.2c-5 19.9-12.9 38.9-23.4 56.5l13.6 13.6c11.5 11.5 11.5 30.1 0 41.6l-33.1 33.1c-11.5 11.5-30.1 11.5-41.6 0L365.3 440a211.57 211.57 0 01-56.5 23.4v19.2c-.1 16.3-13.2 29.4-29.4 29.4zm-211-109.1c-7.8 0-14.1-6.3-14-14.1 0-3.7 1.5-7.3 4.1-9.9L72 365.3a211.57 211.57 0 01-23.4-56.5H29.4C13.2 308.8 0 295.6 0 279.4v-46.8c0-16.2 13.2-29.4 29.4-29.4h19.2c5-19.9 12.9-38.9 23.4-56.5l-13.6-13.6C47 121.6 47 103 58.4 91.5l33.1-33.1c11.5-11.5 30.1-11.5 41.6 0L146.7 72c17.6-10.5 36.7-18.4 56.5-23.4V29.4c0-16.2 13.2-29.4 29.4-29.4h46.8c16.2 0 29.4 13.2 29.4 29.4v19.2c19.9 5 38.9 12.9 56.5 23.4l13.6-13.6c5.5-5.5 14.4-5.5 19.9 0s5.5 14.4 0 19.9l-21.5 21.6c-4.8 4.8-12.2 5.5-17.8 1.7-20.4-13.7-43.3-23.2-67.5-28-6.6-1.3-11.4-7.1-11.4-13.8V29.4c0-.7-.6-1.3-1.3-1.3h-46.8c-.7 0-1.3.6-1.3 1.3v30.5c0 6.7-4.8 12.5-11.4 13.8-24.1 4.7-47.1 14.2-67.5 28-5.6 3.8-13 3-17.8-1.7L113 78.4c-.5-.5-1.3-.5-1.8 0l-33.1 33.1c-.5.5-.5 1.3 0 1.8l21.6 21.6c4.8 4.8 5.5 12.2 1.7 17.8-13.8 20.4-23.3 43.3-28 67.5-1.3 6.6-7.1 11.4-13.8 11.4H29.4c-.7 0-1.3.6-1.3 1.3v46.8c0 .7.6 1.3 1.3 1.3h30.5c6.7 0 12.5 4.8 13.8 11.4 4.7 24.1 14.2 47.1 28 67.5 3.7 5.6 3 13-1.7 17.8l-21.6 21.5c-2.7 2.3-6.3 3.7-10 3.7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="!mb-1">System Integration</h4>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[40px] max-w-full">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 409.6 409.6"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] !text-[#a07cc5] text-violet !mr-4"
                >
                  <path
                    className="lineal-stroke"
                    d="M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-28.1 5.7-55.9 17-81.7C62.1 19.4 182.8-28.1 286.6 17c45.5 19.8 82.3 55.5 103.5 100.4 12.9 27.3 19.6 57.2 19.5 87.4v4.1c-.4 23.5-4.9 46.7-13.3 68.7-2.1 5.5-4.5 11.2-7.2 16.6 0 0 0 .1-.1.1l-.1.3c-7.8 16-17.7 30.8-29.3 44.2-4.1 4.9-11.4 5.5-16.2 1.4-4.9-4.1-5.5-11.4-1.4-16.2.1-.1.1-.2.2-.2 10.4-11.9 19.1-25.2 26-39.4l.2-.3c2.4-4.9 4.5-9.8 6.4-14.7 7.4-19.5 11.4-40.1 11.8-60.9v-3.8c.1-26.8-5.9-53.3-17.3-77.6C335 54.8 257.3 13.3 178.1 25 116.6 34 62.9 75.2 38 132.3c-10 22.9-15.1 47.6-15 72.5 0 100.2 81.5 181.8 181.8 181.8 26.1.1 52-5.6 75.7-16.5 5.8-2.6 12.6.1 15.2 5.9 2.5 5.7 0 12.4-5.6 15-26.7 12.3-55.8 18.7-85.3 18.6z"
                  />
                  <path
                    className="lineal-fill"
                    d="M398.1 204.8v3.9c-.4 22.2-4.6 44.1-12.5 64.8-2 5.4-4.3 10.6-6.8 15.7l-.1.3c-19.7-8.2-34.3-25.4-39.3-46.1l-12.2-50.7c-.7-2.8-2.5-5.3-4.9-6.8L311 179c-3.5-2.2-5.5-6.1-5.2-10.2l.8-9.8c.3-3.4 1.9-6.5 4.5-8.7l27.4-23.1c2.6-2.2 5.9-3.3 9.3-3l31.9-2c12.1 25.8 18.4 54 18.4 82.6z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M378.6 301c-1.5 0-3-.3-4.4-.9-23.1-9.6-40.2-29.7-46.1-54.1L316 195.5l-11-6.8c-7.3-4.4-11.4-12.6-10.6-21.1l.8-9.8c.6-6.4 3.6-12.3 8.6-16.5l27.3-23c4.7-3.9 10.6-6 16.7-5.7l31.2-1.9c4.7-.3 9.1 2.3 11.1 6.6 12.9 27.3 19.6 57.2 19.5 87.4v4.1c-.4 23.5-4.9 46.7-13.3 68.7-2.1 5.5-4.5 11.2-7.2 16.6 0 0 0 .1-.1.1l-.1.3c-2 4.1-6 6.5-10.3 6.5zm-61.4-131.6l10.9 6.7c5.1 3.1 8.7 8.1 10.1 13.9l12.2 50.7c2.3 9.6 7.1 18.3 13.9 25.4 2.7 2.8 5.6 5.3 8.8 7.4.6-1.4 1.1-2.8 1.6-4.1 7.4-19.5 11.4-40.1 11.8-60.9v-3.8c.1-24.2-4.8-48.2-14.2-70.5l-23.9 1.5h-1.8c-.3 0-.6.1-.8.3l-27.4 23.1c-.3.2-.4.5-.4.8l-.8 9.5z"
                  />
                  <path
                    className="lineal-fill"
                    d="M197.9 217.9s-22.1 60.7-32 88a19.44 19.44 0 01-18.3 12.8h-.2c-8.3-.1-15.6-5.4-18.2-13.3l-25.4-75.9c-.5-1.4-1.2-2.7-2.2-3.8-1-1.1-2.2-2-3.5-2.7-7.3-3.7-13.3-19-13.3-19l-2.7-22.2c-1.5-12.6-6.9-24.3-15.4-33.7-8.1-9-18.7-15.3-30.4-18.2l-3.4-.8c-2.5-.6-4.1-3.2-3.5-5.8l.3-.9c27.5-58.3 82.2-99.1 145.9-108.8.4-.1.7.1.9.4L191 42.9c.8 1.6 1.2 3.3 1.2 5v2.3c0 3.9-2 7.5-5.4 9.6l-9.2 5.6c-2.5 1.5-4.2 3.9-5 6.6l-11.8 43.2c-1.7 6.3-8.2 10-14.5 8.3-.4-.1-.8-.2-1.2-.4l-6.9-2.6c-5-1.9-12.3-.9-19.4 1-8.7 2.3-14.8 10.3-14.8 19.3 0 8.9 5.8 16.6 14.3 19.2 7.8 2.3 14.6 20.1 36.2 20.1 0 0 38-4.8 43.2 6.9 4.3 9.8 3.8 20.9.2 30.9z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M147.6 330.1h-.2c-13.2-.1-24.9-8.6-29.1-21.1L93 233.2c-10.4-5.3-17-20.5-18.8-25-.4-.9-.6-1.9-.7-2.8l-2.6-22.2c-1.2-10.2-5.6-19.7-12.5-27.3-6.6-7.3-15.2-12.4-24.7-14.8l-3.4-.8c-8.7-2.2-14-11-11.8-19.7.3-1 .6-2 1.1-3 29-61.8 87-105.1 154.6-115.2.6-.1 1.2-.1 1.8-.1 4.7 0 8.9 2.6 11 6.8l14.4 28.8c1.6 3.2 2.4 6.6 2.4 10.2v2.3c0 7.9-4.1 15.3-10.9 19.4l-9.1 5.6-11.8 42.8c-2.8 10.1-12 17.2-22.5 17.2-2.9 0-5.8-.5-8.5-1.6l-6.8-2.6c-.8-.2-1.5-.3-2.3-.2-3.4.1-6.8.7-10 1.6-3.7 1-6.3 4.3-6.3 8.2 0 1.1.2 2.1.6 3.1.9 2.4 2.9 4.3 5.4 5 5.4 1.6 9.3 5.5 13 9.2 5.2 5.2 10.2 10.2 19.3 10.4 5.7-.6 11.5-1 17.3-1 13.1 0 31.2 1.5 37 14.8 5.2 11.8 5.4 25.8.4 39.4 0 0-22.1 60.7-32 88-4.4 12.3-16 20.4-29 20.4zm-44.2-117.4c5.4 2.7 9.4 7.4 11.3 13.1l25.4 75.9c1.1 3.2 4.1 5.4 7.4 5.4h.1c3.3 0 6.3-2.1 7.5-5.2 9.9-27.2 32-88 32-88 2.7-7.5 2.9-15 .6-21.2-1.4-.6-5.7-2.1-16.4-2.1-5.1 0-10.2.3-15.2.9-.5.1-1 .1-1.4.1-19.1 0-29.8-10.8-36.2-17.2-1.2-1.3-2.5-2.5-3.8-3.6-13.1-4.1-22-16.3-22-30 0-14.2 9.6-26.7 23.3-30.4 5.2-1.5 10.6-2.3 16-2.4 3.6-.1 7.1.5 10.4 1.7l7.1 2.7c.1 0 .1 0 .2-.1.1 0 .1-.1.1-.2L161.5 69c1.5-5.6 5.1-10.4 10.1-13.4l9.1-5.5V48l-10.8-21.6c-54.1 10.5-100.4 45-126 93.8 26.9 8.7 46.3 32.3 49.7 60.3l2.4 20.6c2.2 5 5.6 10.4 7.4 11.6z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="!mb-1">SEO Services</h4>
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
        <hr className="!my-14 xl:!my-28 lg:!my-28 md:!my-28" />
        <div className="flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] xl:mx-[-20px] lg:mx-[-20px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] !px-[15px] !mt-[80px] max-w-full xl:!order-2 lg:!order-2">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[16.66666667%] !self-end !mt-[25px]">
                <figure className="rounded-[0.4rem]">
                  <img
                    className="rounded-[0.4rem]"
                    srcSet="/assets/img/photos/g1@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g1.jpg"
                    width={300}
                    height={312}
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !self-end !mt-[25px]">
                <figure className="rounded-[0.4rem]">
                  <img
                    className="rounded-[0.4rem]"
                    srcSet="/assets/img/photos/g2@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g2.jpg"
                    width={350}
                    height={263}
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%] !mt-[25px]">
                <figure className="rounded-[0.4rem]">
                  <img
                    className="rounded-[0.4rem]"
                    srcSet="/assets/img/photos/g3@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g3.jpg"
                    width={350}
                    height={226}
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !self-start !mt-[25px]">
                <figure className="rounded-[0.4rem]">
                  <img
                    className="rounded-[0.4rem]"
                    srcSet="/assets/img/photos/g4@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g4.jpg"
                    width={300}
                    height={338}
                  />
                </figure>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] !px-[15px] !mt-[80px] max-w-full">
            <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] font-DMSerif !font-normal tracking-normal !mb-[1.75rem]">
              A few reasons why our valued customers choose us.
            </h3>
            <div className="accordion accordion-wrapper" id="accordionExample">
              <div className="card plain accordion-item">
                <div
                  className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                  id="headingOne"
                >
                  <button
                    className="before:!text-[#a07cc5] hover:!text-[#a07cc5] !p-[0_0_0_1.1rem] !text-[.85rem] accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Professional Design
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                <div
                  className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                  id="headingTwo"
                >
                  <button
                    className="before:!text-[#a07cc5] hover:!text-[#a07cc5] !p-[0_0_0_1.1rem] !text-[.85rem] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Top-Notch Support
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                <div
                  className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                  id="headingThree"
                >
                  <button
                    className="before:!text-[#a07cc5] hover:!text-[#a07cc5] !p-[0_0_0_1.1rem] !text-[.85rem] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Header and Slider Options
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
            </div>
            {/*/.accordion */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
