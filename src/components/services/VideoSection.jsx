import React from "react";

export default function VideoSection() {
  return (
    <section className="wrapper !bg-[#edf2fc]">
      <div className="container py-[4.5rem] md:pt-24 lg:pt-0 xl:pt-0 xl:pb-24 lg:pb-24 md:pb-24">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="lg:!mt-[-10rem] xl:!mt-[-15rem] !relative">
              <div
                className="shape bg-dot red rellax !w-[6rem] !h-[8rem] absolute opacity-50 bg-[radial-gradient(#e2626b_2px,transparent_2.5px)]"
                data-rellax-speed={1}
                style={{ top: "1rem", left: "-3.9rem" }}
              />
              <div
                className="shape !rounded-[50%] bg-line primary rellax !w-[8rem] !h-[8rem] absolute opacity-50"
                data-rellax-speed={1}
                style={{ bottom: "2rem", right: "-3rem" }}
              />
              <video
                poster="/assets/img/photos/movie.jpg"
                className="player relative z-[2] rounded-[0.4rem]"
                playsInline
                controls
                preload="none"
              >
                <source src="/assets/media/movie.mp4" type="video/mp4" />
                <source src="/assets/media/movie.webm" type="video/webm" />
              </video>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !mt-[3.5rem] !tracking-[0.02rem]">
              Our Process
            </h2>
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-0 !text-center xl:!px-10 xxl:!px-20">
              Find out everything you need to know about creating a business
              process model
            </h3>
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] process-wrapper !text-center !mt-9">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 321.7 409.6"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/light-bulb.svg"
                  className="svg-inject icon-svg text-[#3f78e0] !mb-3 !w-[2.6rem] !h-[2.6rem] m-[0_auto]"
                >
                  <path
                    className="lineal-fill"
                    d="M160.9 221.3c-19.1 0-37.4-7.3-51.3-20.4l51.3 127.2 51.3-127.2c-13.9 13.1-32.3 20.4-51.3 20.4z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M160.9 339.9c-4.8 0-9.1-2.9-10.9-7.4L98.6 205.3c-2.5-6 .3-12.9 6.3-15.4 4.3-1.8 9.3-.9 12.7 2.4 24.3 22.9 62.2 22.9 86.5 0 4.7-4.5 12.1-4.3 16.6.3 3.2 3.4 4.2 8.3 2.4 12.7l-51.4 127.2c-1.7 4.5-6 7.4-10.8 7.4zm-27.5-111.3l27.5 68.1 27.5-68.1c-17.9 5.9-37.2 5.9-55 0z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M86.7 316.1c-5.9 0-10.9-4.4-11.7-10.2-2.2-16.6-9.8-23.9-22.3-36.1l-2.9-2.8C28.8 246.5 0 218.4 0 151.6c0-42.9 17.1-81.9 48-110C77.7 14.8 117.7 0 160.9 0s83.2 14.8 112.8 41.6c6.7 6.1 12.8 12.7 18.3 19.9 3.1 4.1 6 8.3 8.6 12.6 1.3 2.2 2.6 4.4 3.8 6.6 2.4 4.5 4.6 9.1 6.5 13.8 1.4 3.5 2.7 7.2 3.9 10.8 4.7 14.9 7 30.5 7 46.2 0 27.9-4.9 51.2-15 71.2-.6 1.2-1.2 2.4-1.8 3.5-1.8 3.3-3.8 6.5-5.9 9.6-.7 1-1.4 2-2 3-2.6 3.6-5.3 7.1-8.5 10.7-5.6 6.5-11.5 12.2-16.6 17.2-4.7 4.5-12.1 4.4-16.6-.2-4.5-4.7-4.4-12.1.2-16.6 5-4.9 10.2-9.9 15.2-15.7 2.6-3 4.9-6 7.1-9 .6-.8 1.1-1.6 1.7-2.4 1.7-2.5 3.3-5.2 4.7-7.8.5-.9 1-1.9 1.5-2.8 8.4-16.6 12.5-36.4 12.5-60.6 0-13.2-2-26.4-5.9-39.1-1-3.1-2.1-6.1-3.3-9.1-1.6-3.9-3.4-7.8-5.4-11.6-1-1.9-2.1-3.8-3.2-5.6-6.2-10.2-13.8-19.4-22.6-27.3-25.3-22.9-59.8-35.5-97-35.5S89.1 36.1 63.8 59c-26 23.5-40.3 56.4-40.3 92.5 0 56.9 22.7 79.1 42.8 98.6l2.8 2.7c13.4 13 26.1 25.2 29.3 49.9.9 6.4-3.7 12.4-10.1 13.2-.6.2-1.1.2-1.6.2z"
                  />
                  <path
                    className="lineal-fill"
                    d="M141.9 397.8h38c3.8 0 7.4-1.5 10.1-4.2l13-13c2-2 3.4-4.6 3.9-7.4l12.4-63.7h-117l12.4 63.7c.6 2.8 2 5.4 4 7.4l13 13c2.7 2.7 6.3 4.2 10.2 4.2z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M179.8 409.6h-37.9c-6.9 0-13.6-2.7-18.5-7.7l-13-13c-3.7-3.7-6.2-8.4-7.2-13.5l-12.4-63.7c-1.2-6.4 2.9-12.5 9.3-13.8.7-.1 1.5-.2 2.2-.2h117c6.5 0 11.8 5.3 11.8 11.8 0 .8-.1 1.5-.2 2.2l-12.4 63.7c-1 5.1-3.5 9.8-7.2 13.5l-13 13c-4.8 4.9-11.5 7.7-18.5 7.7zm-63.2-88.4l9.7 49.7c.1.5.4 1 .7 1.4l13 13c.5.5 1.2.8 1.9.8h38c.7 0 1.4-.3 1.9-.8l13-13c.4-.4.6-.9.7-1.4l9.6-49.7h-88.5z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M241.5 321H80.2c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h161.4c6.5-.2 11.9 4.9 12.1 11.4.2 6.5-4.9 11.9-11.4 12.1h-.8zm-14.8 44.3H95c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h131.7c6.5.2 11.6 5.6 11.4 12.1-.2 6.2-5.2 11.2-11.4 11.4z"
                  />
                </svg>
                <h4 className="!mb-1">1. Concept</h4>
                <p>
                  Nulla vitae elit libero elit non porta gravida eget metus
                  cras.
                </p>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 427.5"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/settings-3.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3 m-[0_auto]"
                >
                  <path
                    className="lineal-fill"
                    d="M186.9 353.4h138.3V413H186.9z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M460.2 0H51.8C23.2 0 0 23.2 0 51.7v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.7h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-41.9c.3-1.2.4-2.4.4-3.6-.2-8-6.9-14.3-14.8-14.1H51.8C39.2 339 29 328.8 29 316.2V51.7c0-12.6 10.2-22.8 22.8-22.8h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-46.7c-8 .2-14.3 6.9-14.1 14.8.2 8 6.9 14.3 14.8 14.1h45.9c28.6 0 51.7-23.2 51.8-51.7V51.7C512 23.2 488.8 0 460.2 0zM310.7 367.9v30.7H201.3v-30.7h109.4z"
                  />
                  <path
                    className="lineal-fill"
                    d="M220.1 271.6c-12.7-19.8-6.9-46.3 12.9-59s46.3-6.9 59 12.9c9 14 9 32 0 46.1h100.6v-50.3l-30.4-4.9c-4.9-16.3-13.6-31.3-25.3-43.7l11-28.7-47.3-27.3-19.4 23.8c-16.6-3.9-33.9-3.9-50.5 0l-19.4-23.8-47.2 27.3 11 28.7c-11.7 12.4-20.3 27.4-25.3 43.7l-30.3 4.9v50.3h100.6z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M392.5 286.1H291.9c-8 0-14.5-6.5-14.5-14.5 0-2.8.8-5.5 2.3-7.8 8.4-13.1 4.6-30.6-8.6-39-13.1-8.4-30.6-4.6-39 8.6-5.9 9.3-5.9 21.1 0 30.4 4.3 6.7 2.4 15.7-4.3 20-2.3 1.5-5.1 2.3-7.8 2.3H119.4c-8 0-14.5-6.5-14.4-14.5v-50.3c0-7.1 5.2-13.1 12.2-14.3l21.8-3.5c4.7-12.2 11.3-23.6 19.5-33.7l-7.9-20.6c-2.5-6.6.1-14.1 6.3-17.7l47.3-27.3c6.2-3.5 14-2.1 18.5 3.4l13.9 17.1c12.9-2 26.1-2 39 0l13.9-17.1c4.5-5.5 12.3-7 18.5-3.4l47.3 27.3c6.2 3.6 8.8 11.1 6.3 17.7l-7.9 20.6c8.2 10.2 14.7 21.5 19.4 33.7l21.8 3.5c7 1.1 12.2 7.2 12.2 14.3v50.3c-.1 8-6.6 14.5-14.6 14.5zm-80-29h65.6v-23.5l-18.2-2.9c-5.5-.9-10-4.8-11.6-10.1-4.3-14.2-11.9-27.2-22-38-3.8-4-5-9.9-3-15.1l6.6-17.2-25.9-15-11.6 14.3c-3.5 4.3-9.1 6.2-14.5 5-14.5-3.3-29.5-3.3-43.9 0-5.4 1.2-11-.7-14.5-5l-11.6-14.3-25.9 15 6.6 17.2c2 5.2.8 11-3 15.1-10.1 10.8-17.7 23.8-22 38-1.6 5.3-6.1 9.2-11.6 10.1l-18.2 2.9v23.5h65.6c-.4-2.8-.6-5.7-.6-8.6.4-31.6 26.3-56.8 57.9-56.4 31 .4 56 25.4 56.4 56.4 0 2.9-.2 5.8-.6 8.6z"
                  />
                </svg>
                <h4 className="!mb-1">2. Prepare</h4>
                <p>
                  Nulla vitae elit libero elit non porta gravida eget metus
                  cras.
                </p>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 409.6 332.7"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/design.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#7cb798] text-leaf !mb-3 m-[0_auto]"
                >
                  <path
                    className="lineal-stroke"
                    d="M350.9 54.2H58.7c-6.2.2-11.4-4.7-11.5-10.9S51.8 31.9 58 31.7h292.9c6.2-.2 11.4 4.7 11.5 10.9s-4.7 11.4-10.9 11.5c-.2.1-.4.1-.6.1zM239.8 328.9a11.182 11.182 0 01-10.6-14.8c2.8-8.3 16.2-47.4 25.6-63.6-9.5-10.1-37-40.3-49.9-66.1-12.1 23.4-39.5 54.4-50.1 66 10.1 16.5 22.7 54.9 25.4 63.6.4 1.2.6 2.4.6 3.7 0 6.2-5 11.2-11.2 11.2-4.9 0-9.3-3.2-10.7-7.9v-.1c-6.6-20.7-18.4-52.9-24.3-60.3-4.8-6.1-3.4-14.5-.8-19.8.5-.9 1.1-1.8 1.8-2.6 20.6-22.3 50.7-59.4 52.7-72.4.6-3.7 3.3-10.1 14.8-10.7 12.5-.7 16.6 4.8 17.8 9.4 5.7 21.5 40 60.3 52.7 73.4.8.8 1.5 1.8 2 2.8 2.6 5.1 4 13.3-.5 19.5-5.7 7.7-18.2 41.6-24.8 61.1-1.3 4.6-5.6 7.7-10.5 7.6z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M204.8 254.9c-6.2 0-11.2-5-11.2-11.2V167c.3-6.2 5.6-10.9 11.8-10.6 5.7.3 10.3 4.9 10.6 10.6v76.7c0 6.2-5 11.2-11.2 11.2z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M366.6 244.6c-6.2 0-11.2-5-11.2-11.2v-28.6c0-83.1-67.6-150.6-150.6-150.6S54.2 121.7 54.2 204.8v28.6c-.2 6.2-5.4 11.1-11.5 10.9-5.9-.2-10.7-4.9-10.9-10.9v-28.6c-.1-95.5 77.2-172.9 172.7-173 46 0 90.1 18.2 122.6 50.8 32.6 32.3 50.9 76.3 50.9 122.2v28.6c-.1 6.2-5.2 11.2-11.4 11.2z"
                  />
                  <path
                    className="lineal-fill"
                    d="M220 74.7h-30.4c-9.1 0-16.5-7.4-16.5-16.5V27.7c0-9.1 7.4-16.5 16.5-16.5H220c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M220 85.9h-30.4c-15.3 0-27.7-12.4-27.7-27.7V27.7c0-15.3 12.4-27.7 27.7-27.7H220c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.4-63.5c-2.9 0-5.3 2.4-5.3 5.3v30.5c0 2.9 2.4 5.3 5.3 5.3H220c2.9 0 5.3-2.4 5.3-5.3V27.7c0-2.9-2.4-5.3-5.3-5.3h-30.4z"
                  />
                  <path
                    className="lineal-fill"
                    d="M381.9 275.4h-30.5c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M381.9 286.6h-30.5c-15.3 0-27.7-12.4-27.7-27.7v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3h-30.5z"
                  />
                  <path
                    className="lineal-fill"
                    d="M58.2 275.4H27.7c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5V259c0 9.1-7.4 16.5-16.5 16.4z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M58.2 286.6H27.7C12.4 286.6 0 274.2 0 258.9v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3H27.7zm234.1 109.5h-114c-6.2 0-11.2-5-11.2-11.2 0-6.2 5-11.2 11.2-11.2h114c6.2 0 11.2 5 11.2 11.2 0 6.2-5 11.2-11.2 11.2z"
                  />
                </svg>
                <h4 className="!mb-1">3. Retouch</h4>
                <p>
                  Nulla vitae elit libero elit non porta gravida eget metus
                  cras.
                </p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
