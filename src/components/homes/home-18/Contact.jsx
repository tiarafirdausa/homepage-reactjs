import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-wrap mx-[-7.5px] !mt-[-50px] !mb-[5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem] items-center">
      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] max-w-full">
        <figure className="m-0 p-0">
          <img
            className="w-auto"
            srcSet="/assets/img/illustrations/3d3@2x.png 2x"
            alt="image"
            src="/assets/img/illustrations/3d3.png"
            width={800}
            height={615}
          />
        </figure>
      </div>
      {/*/column */}
      <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%]">
        <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
          Contact Us
        </h2>
        <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-8">
          Got any questions? Don't hesitate to get in touch.
        </h3>
        <div className="flex flex-row">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 255.84"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/pin.svg"
              className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] solid-duo text-grape-fuchsia !mt-1 !mr-4"
            >
              <path
                className="fill-secondary"
                d="M10.67 255.84a10.68 10.68 0 01-7.54-18.23l86.08-86a10.67 10.67 0 1115.08 15.1l-86.08 86a10.61 10.61 0 01-7.54 3.13z"
              />
              <path
                className="fill-primary"
                d="M250.54 80.72L175.12 5.29a19.12 19.12 0 00-26.4 0L138.3 15.71a27.18 27.18 0 00-6.61 27.93A11.25 11.25 0 01129 55.21L98.38 85.79a13.3 13.3 0 01-9.38 3.9H76.46a29.11 29.11 0 00-20.73 8.59l-5.06 5.06a18.66 18.66 0 000 26.4l75.42 75.42a18.64 18.64 0 0026.4 0l5.06-5.07a29.12 29.12 0 008.59-20.73v-12.5a13.43 13.43 0 013.91-9.42l30.57-30.58a11.24 11.24 0 0111.57-2.74 27.14 27.14 0 0027.92-6.6l10.42-10.42a18.65 18.65 0 000-26.38z"
              />
            </svg>
          </div>
          <div>
            <h5 className="!mb-0">Address</h5>
            <address className="not-italic !leading-[inherit] !mb-4">
              Moonshine St. 14/05 Light City, London
            </address>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256.01 256"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/rotary.svg"
              className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] solid-duo text-grape-fuchsia !mt-1 !mr-4"
            >
              <path
                className="fill-secondary"
                d="M128 106.67a128.15 128.15 0 00-128 128A21.36 21.36 0 0021.34 256h213.32A21.36 21.36 0 00256 234.67c0-70.57-57.42-128-128-128zM128 224a42.67 42.67 0 1142.67-42.67A42.71 42.71 0 01128 224z"
              />
              <path
                className="fill-primary"
                d="M33.45 117.34a22.89 22.89 0 01-12.56-3.69 50.7 50.7 0 01-6.61-5.12A43.84 43.84 0 01.74 68.3C5.45 43.31 33.27 27.06 53.8 17A169.32 169.32 0 01128 0c34.77 0 69.86 10.62 96.26 29.14 11.95 8.4 26.22 20.11 30.4 36.41a44 44 0 01-12.93 43 49.9 49.9 0 01-6.49 5 23.84 23.84 0 01-26.87-.76L171.1 86.18c-8.32-5.94-11.64-16.42-8.08-25.52.19-.53.41-1 .64-1.56a113 113 0 00-71.33 0l.67 1.54c3.57 9.1.22 19.6-8.08 25.52l-37.3 26.61a24.15 24.15 0 01-14.14 4.57z"
              />
            </svg>
          </div>
          <div>
            <h5 className="!mb-0">Phone</h5>
            <p>00 (123) 456 78 90</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 202.66"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/emails.svg"
              className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] solid-duo text-grape-fuchsia !mt-1 !mr-4"
            >
              <path
                className="fill-primary"
                d="M192 0H21.33A21.36 21.36 0 000 21.33v96a21.36 21.36 0 0021.33 21.33H192a21.36 21.36 0 0021.33-21.33v-96A21.36 21.36 0 00192 0zm0 48l-73.6 37.12A25.12 25.12 0 01106.67 88a24.39 24.39 0 01-11.84-3L21.34 48V30.08l80.85 40.75a9.64 9.64 0 008.85.11l81-40.86z"
              />
              <path
                className="fill-secondary"
                d="M234.67 64v53.33A42.72 42.72 0 01192 160H42.67v21.33A21.36 21.36 0 0064 202.66h170.67A21.36 21.36 0 00256 181.33v-96A21.36 21.36 0 00234.67 64z"
              />
            </svg>
          </div>
          <div>
            <h5 className="!mb-0">E-mail</h5>
            <p className="!mb-0">
              <a
                href="mailto:sandbox@email.com"
                className="!text-[#60697b] hover:!text-[#60697b]"
              >
                sandbox@email.com
              </a>
            </p>
          </div>
        </div>
      </div>
      {/*/column */}
    </div>
  );
}
