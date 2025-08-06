import React from "react";

export default function Cta() {
  return (
    <section className="section-frame xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem] xxl:!mx-12 overflow-hidden">
      <div
        className="wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500 bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.5)]"
        style={{ backgroundImage: "url(/assets/img/photos/bg23.png)" }}
      >
        <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem] !text-center">
          <div
            className="!absolute shape yellow hidden xl:block lg:block w-5"
            style={{ top: "18%", left: "5%" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 219.5 219.5"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/pie.svg"
              className="svg-inject icon-svg !w-full !h-full"
            >
              <path
                className="svg-fill"
                d="M219.5 219.5H0c0-58.19 23.14-114.06 64.29-155.21A219.561 219.561 0 01219.5 0v219.5z"
              />
            </svg>
          </div>
          <div
            className="!absolute shape leaf hidden xl:block lg:block !w-[2.5rem]"
            style={{ bottom: "30%", left: "2%" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 457.71 446.45"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/scribble.svg"
              className="svg-inject icon-svg !w-full !h-full"
            >
              <path
                className="svg-fill"
                d="M205.62 442.54c-.51-.41-.99-.84-1.46-1.31-10.4-10.39-3.61-27.12 11.63-52.5 11.72-19.51 28.48-43.74 46.22-69.39 17.53-25.34 35.66-51.54 49.01-73.47 14.73-24.19 18.57-35.01 19.51-39.48-3.86-.28-13.15.3-33.78 6.52-19.71 5.94-43.09 14.92-65.7 23.6-63.8 24.49-85.35 31.41-96.51 19.5-3.21-3.43-7.62-11.04-1.12-23.54 2.49-4.79 6.64-10.51 12.68-17.5 10.4-12.03 25.04-26.34 40.55-41.49 14.02-13.7 28.53-27.87 39.53-40.11 9.93-11.04 14.15-17.43 15.94-20.82-3.43-.75-10.24-1.51-23.25-.92-14.99.68-33.44 2.89-51.28 5.02-46.92 5.61-74.09 8.33-86.81-.99-4.78-3.5-7.67-8.42-8.41-14.24-1.97-15.58 12.45-33.15 29.14-53.5 5.31-6.47 13.31-16.22 17.36-22.68-4.51-.38-12.43-.4-25.97 1.1-16.54 1.82-35.62 5.22-50.95 7.96-12.62 2.25-22.6 4.03-28.48 4.49C6.6 39.3.58 34.17.04 27.28c-.54-6.88 4.6-12.9 11.48-13.44 4.66-.37 14.58-2.13 26.06-4.18C54.56 6.63 75.7 2.86 94 1.07c26.41-2.6 40.16-.54 47.48 7.13 7.01 7.34 6.45 17.66-1.68 30.66-4.72 7.55-11.63 15.98-18.95 24.9-6.18 7.53-12.57 15.31-17.24 22.19-3.35 4.92-4.95 8.13-5.71 10.07 3 .54 9.09 1.08 20.87.43 13.21-.73 29.07-2.63 45.86-4.64 59.99-7.17 94.33-10.22 102.49 10.62 7.4 18.93-16.51 43.51-62.99 88.92-12.69 12.4-24.68 24.11-34.04 34.28-3.17 3.45-5.68 6.34-7.67 8.75 15.88-4.42 41.18-14.13 59.67-21.22 62.4-23.96 101.69-37.87 121.09-29.14 5.38 2.42 9.26 6.47 11.23 11.72 7.48 19.95-16.15 57.31-71.83 137.82-15.49 22.39-30.12 43.55-41.18 61.25-7.13 11.4-11.3 19.11-13.75 24.25 8.97-3.3 25.58-11 55.73-28.8 32.68-19.29 70.61-44.04 101.09-63.94 24.62-16.07 44.07-28.76 54.65-34.68 6.03-3.37 13.64-1.22 17.01 4.81 3.37 6.03 1.22 13.64-4.81 17.01-9.83 5.5-29.92 18.61-53.18 33.79-33.46 21.84-75.1 49.01-110.05 69.21-49.35 28.51-70.85 35.44-82.46 26.07z"
              />
            </svg>
          </div>
          <div
            className="!absolute shape fuchsia hidden xl:block lg:block w-6"
            style={{
              top: "20%",
              right: "2%",
              transform: "rotate(70deg)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 411.42 329.24"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/tri.svg"
              className="svg-inject icon-svg !w-full !h-full"
            >
              <g data-name="Layer 2">
                <path
                  className="svg-fill"
                  d="M164.34 21.92L8.72 251.15c-22.54 33.2 1.24 78.09 41.37 78.09h311.24c40.13 0 63.91-44.89 41.37-78.09L247.08 21.92a50 50 0 00-82.74 0z"
                  data-name="Layer 1"
                />
              </g>
            </svg>
          </div>
          <div
            className="!absolute shape grape hidden xl:block lg:block w-6"
            style={{ bottom: "28%", right: "5%" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/circle.svg"
              className="svg-inject icon-svg !w-full !h-full"
            >
              <g data-name="Layer 2">
                <path
                  className="svg-fill"
                  d="M250 0C111.93 0 0 111.93 0 250s111.93 250 250 250 250-111.93 250-250S388.07 0 250 0zm0 425a175 175 0 11175-175 175 175 0 01-175 175z"
                  data-name="Layer 1"
                />
              </g>
            </svg>
          </div>
          <div className="flex flex-wrap mx-[-15px]">
            <div className="lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <h1 className="font-semibold !leading-[1.15] xl:!text-[3.5rem] !text-[calc(1.475rem_+_2.7vw)] lg:mx-[-2.5rem] xl:mx-0 !mb-5">
                Got a 👾 project in mind? Let's work together. ✌️
              </h1>
              <p className="lead !text-[1.2rem] !leading-[1.6] md:!px-10 lg:!px-0 xl:!px-0 lg:mx-[-2.5rem] xl:mx-0 !mb-8">
                I bring rapid solutions to make the life of my clients easier.
                Have any questions? Reach out to me and I will get back to you
                shortly.
              </p>
              <a
                href="#"
                className="btn btn-lg btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] btn-icon btn-icon-end"
              >
                Contact Me
                <i className="uil uil-arrow-up-right !ml-[.3rem] before:content-['\e950']" />
              </a>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.wrapper */}
    </section>
  );
}
