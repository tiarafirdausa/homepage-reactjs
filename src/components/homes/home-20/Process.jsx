import React from "react";

export default function Process() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="lg:w-10/12 xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative">
            <div className="!relative">
              <div
                className="shape pale-pink rellax !w-[8rem] !h-[8rem] !absolute z-[1]"
                data-rellax-speed={1}
                style={{ top: "1rem", left: "-4.2rem" }}
              >
                <img
                  className="svg-inject icon-svg !w-full !h-full"
                  alt="image"
                  src="/assets/img/svg/hex.svg"
                  width={500}
                  height={550}
                />
              </div>
              <div
                className="shape pale-purple rellax !w-[8rem] !h-[8rem] !absolute z-[1]"
                data-rellax-speed={1}
                style={{ bottom: "2rem", right: "-3.5rem" }}
              >
                <img
                  className="svg-inject icon-svg !w-full !h-full"
                  alt="image"
                  src="/assets/img/svg/circle.svg"
                  width={500}
                  height={500}
                />
              </div>
              <video
                poster="/assets/img/photos/movie.jpg"
                className="player relative z-[2] rounded-[0.4rem]"
                playsInline=""
                controls=""
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
        <div className="flex flex-wrap mx-[-15px] !text-center !mt-[3.5rem]">
          <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
              Our Working Process
            </h2>
            <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold xl:!px-10 xxl:!px-20 !mb-10">
              Find out everything you need to know about creating a business
              process model
            </h3>
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] process-wrapper arrow !text-center">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] max-w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 255.98"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/bulb.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-pink !mb-4 m-[0_auto]"
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
                <h3 className="!text-[1.1rem]">1. Collect Ideas</h3>
                <p>
                  Etiam porta malesuada magna mollis euismod consectetur leo
                  elit.
                </p>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] max-w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/compare.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-pink !mb-4 m-[0_auto]"
                >
                  <path
                    className="fill-primary"
                    d="M123.22 148.5A8 8 0 00116 144H19.36a8 8 0 00-8 8c0 57.34 46.94 104 104.66 104a104.67 104.67 0 0045.45-10.29 8 8 0 003.76-10.71z"
                  />
                  <path
                    className="fill-secondary"
                    d="M152 19a8 8 0 00-8 8v95.39a7.93 7.93 0 00.8 3.49l41.73 85.95a8 8 0 0010.65 3.73c36.29-17.48 58.82-53.19 58.82-93.19C256 65.36 209.34 19 152 19z"
                  />
                  <path
                    className="fill-primary"
                    d="M112 104V8a8 8 0 00-8-8A104.13 104.13 0 000 104a8 8 0 008 8h96a8 8 0 008-8z"
                  />
                </svg>
                <h3 className="!text-[1.1rem]">2. Data Analysis</h3>
                <p>
                  Etiam porta malesuada magna mollis euismod consectetur leo
                  elit.
                </p>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] max-w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/delivery-box.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-pink !mb-4 m-[0_auto]"
                >
                  <path
                    className="fill-secondary"
                    d="M172 20.57L55.79 80 9.6 57.32 123.71 1A9.43 9.43 0 01132 1zm74.27 36.75l-118.21 58.56-44.27-21.8-6.38-3.25L193.7 31.36l6.4 3.24z"
                  />
                  <path
                    className="fill-primary"
                    d="M118.59 132.76L118.46 256 5.23 196.91A9.89 9.89 0 010 188.22V74.2l48 23.64v41.55a9.6 9.6 0 1019.2 0v-31.94l6.4 3.12zm137.28-58.43l-118.08 58.31-.13 123.23L256 194.08z"
                  />
                </svg>
                <h3 className="!text-[1.1rem]">3. Finalize Product</h3>
                <p>
                  Etiam porta malesuada magna mollis euismod consectetur leo
                  elit.
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
