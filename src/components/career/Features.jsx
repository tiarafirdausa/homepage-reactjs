import React from "react";

export default function Features() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pb-[17.5rem] xl:pb-[22.5rem] lg:pb-[22.5rem] md:pb-[22.5rem]">
        <div className="flex flex-wrap mx-[-15px] !mb-[4.5rem]">
          <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[-8rem] md:!mt-[-10rem] xl:!mt-[-12.5rem] lg:!mt-[-12.5rem] !relative">
            <div
              className="shape bg-dot red rellax !w-[6rem] !h-[8rem] absolute z-[1] bg-[radial-gradient(#e2626b_2px,transparent_2.5px)] opacity-50"
              data-rellax-speed={1}
              style={{ top: "1rem", left: "-3.2rem" }}
            />
            <div
              className="shape pale-primary !w-[9rem] !h-[9rem] rellax absolute z-[1]"
              data-rellax-speed={1}
              style={{ bottom: "2rem", right: "-3rem" }}
            >
              <img
                className="svg-inject icon-svg !w-full !h-full"
                alt="image"
                src="/assets/img/svg/hex.svg"
                width={500}
                height={550}
              />
            </div>
            <figure className="!rounded-[.4rem] relative z-[2]">
              <img
                className="!rounded-[.4rem]"
                srcSet="/assets/img/photos/about18@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/about18.jpg"
                width={1200}
                height={650}
              />
            </figure>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-40px]">
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px] xl:!px-[35px] lg:!px-[20px]">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256.1 256.01"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/target.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-mono text-[#3f78e0] !mr-4"
                >
                  <path
                    className="fill-secondary"
                    d="M178.66 79.37L166.93 91.1a76.68 76.68 0 014.91 11.52 85.77 85.77 0 0114.93-1.28h1.39a93.65 93.65 0 00-9.5-21.97zM0 128a96.1 96.1 0 00109.65 95 82.93 82.93 0 01-5.65-15.42 67 67 0 01-8 .43A80 80 0 0196 48a79 79 0 0137 9.17l11.73-11.73A94.73 94.73 0 0096 32a96.14 96.14 0 00-96 96z"
                  />
                  <path
                    className="fill-secondary"
                    d="M37.33 128A58.78 58.78 0 0096 186.68a47.26 47.26 0 005.44-.32A82.71 82.71 0 01103 170a37.32 37.32 0 01-7 .64 42.67 42.67 0 010-85.34 32.88 32.88 0 018 .84l12.91-12.91a57 57 0 00-20.91-4A58.81 58.81 0 0037.33 128z"
                  />
                  <path
                    className="fill-secondary"
                    d="M96 106.68A21.33 21.33 0 10117.33 128 21.39 21.39 0 0096 106.68zm0 26.66a5.33 5.33 0 115.33-5.33 5.28 5.28 0 01-5.33 5.33z"
                  />
                  <path
                    className="fill-primary"
                    d="M96.1 136a8 8 0 01-5.67-13.65L159.76 53a8 8 0 0111.31 11.31l-69.33 69.33A8 8 0 0196.1 136z"
                  />
                  <path
                    className="fill-primary"
                    d="M194.77 64H168.1a8 8 0 01-8-8V29.34a8.08 8.08 0 012.33-5.67l21.33-21.33A8 8 0 01197.42 8v18.68h18.68a8 8 0 015.66 13.66l-21.33 21.33a8 8 0 01-5.66 2.33zm-8 53.34a69.34 69.34 0 1069.33 69.34 69.4 69.4 0 00-69.33-69.34zm29.87 56.11L182 210.78a8 8 0 01-11.09.64l-18.67-16a8 8 0 1110.41-12.15l12.84 11 29.44-31.69a8 8 0 0111.74 10.88z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="!mb-1">Career Growth</h4>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px] xl:!px-[35px] lg:!px-[20px]">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256.02 202.68"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/video-chat.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-mono text-[#3f78e0] !mr-4"
                >
                  <g data-name="Layer 2">
                    <path
                      className="fill-primary"
                      d="M245.33 181.33H10.67a10.68 10.68 0 000 21.35h234.67a10.68 10.68 0 100-21.35z"
                    />
                    <path
                      className="fill-primary"
                      d="M112 66.66a28.3 28.3 0 001.07 8h-70.4v106.67H21.33V74.66a21.39 21.39 0 0121.33-21.33H112zm122.67 30.51v84.16h-21.33v-81a33.47 33.47 0 0014.93-7.79l5.33 4a3.67 3.67 0 001.07.64z"
                    />
                    <circle
                      className="fill-primary"
                      cx="117.33"
                      cy="117.33"
                      r="21.33"
                    />
                    <path
                      className="fill-primary"
                      d="M160 178.66v2.67H74.67v-2.67A29.32 29.32 0 01104 149.33h26.67A29.32 29.32 0 01160 178.66z"
                    />
                    <path
                      className="fill-secondary"
                      d="M248 85.33a8 8 0 01-4.8-1.6L223.82 69.2a18.67 18.67 0 01-18.49 16.13h-58.67A18.68 18.68 0 01128 66.66V16c0-7.37 4.9-16 18.67-16h58.67A18.69 18.69 0 01224 17.62l18.9-15.76A8 8 0 01256 8v69.33a8 8 0 01-4.42 7.15 7.82 7.82 0 01-3.58.85z"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <h4 className="!mb-1">Work From Anywhere</h4>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px] xl:!px-[35px] lg:!px-[20px]">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 234.67"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/wallet.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-mono text-[#3f78e0] !mr-4"
                >
                  <path
                    className="fill-secondary"
                    d="M184.21 42.75L161.57 4a8 8 0 00-4.91-3.76 8.1 8.1 0 00-6.12.9L81.31 42.66z"
                  />
                  <path
                    className="fill-primary"
                    d="M32 53.33A10.67 10.67 0 0132 32h36l35.63-21.33H32A32 32 0 00.53 37.33 10.9 10.9 0 000 40v162.67a32.09 32.09 0 0032 32h181.33a21.39 21.39 0 0021.33-21.32V192H208a48 48 0 110-96h26.67V74.69a21.39 21.39 0 00-21.33-21.33H32zM202.67 32a21.3 21.3 0 00-18.45-21.12l18.45 31.79z"
                  />
                  <path
                    className="fill-secondary"
                    d="M248 112h-40a32 32 0 000 64h40a8 8 0 008-8v-48a8 8 0 00-8-8zm-40 42.66A10.67 10.67 0 11218.67 144 10.68 10.68 0 01208 154.66z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="!mb-1">Smart Salary</h4>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px] xl:!px-[35px] lg:!px-[20px]">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/building.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-mono text-[#3f78e0] !mr-4"
                >
                  <g data-name="Layer 2">
                    <path
                      className="fill-secondary"
                      d="M250.58 30.14l-56-19a8 8 0 00-5.16 0l-56 19a8 8 0 00-5.42 7.57v42.87c0 52.32 58.38 77.72 60.88 78.8a8.09 8.09 0 006.26 0c2.48-1.08 60.86-26.48 60.86-78.8V37.71a8 8 0 00-5.42-7.57zm-23.52 40.45l-29.33 37.33a10.66 10.66 0 01-15.33 1.5l-18.67-16a10.66 10.66 0 0113.87-16.19L187.82 86l22.47-28.57a10.66 10.66 0 0116.77 13.18z"
                    />
                    <path
                      className="fill-primary"
                      d="M173.87 175.89c-2.56-1.28-5.23-2.67-8-4.37a20.31 20.31 0 018 4.37z"
                    />
                    <path
                      className="fill-primary"
                      d="M192 234.67h-24v-22.93a21.33 21.33 0 10-16 0v22.93h-24V149a10.67 10.67 0 10-21.34 0v85.65H85.33V200a8 8 0 00-8-8H50.66a8 8 0 00-8 8v34.67H21.33V69.33H96a10.68 10.68 0 0010.67-10.67V40A18.7 18.7 0 0088 21.31H74.67V10.67a10.67 10.67 0 00-21.34 0v10.67H40A18.69 18.69 0 0021.33 40v8A21.36 21.36 0 000 69.33v176A10.66 10.66 0 0010.67 256H192a10.67 10.67 0 100-21.33z"
                    />
                    <path
                      className="fill-primary"
                      d="M77.33 144H50.66a8 8 0 000 16h26.67a8 8 0 000-16zm0-64H50.66a8 8 0 000 16h26.67a8 8 0 000-16zm0 32H50.66a8 8 0 000 16h26.67a8 8 0 000-16z"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <h4 className="!mb-1">Medical Insurance</h4>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px] xl:!px-[35px] lg:!px-[20px]">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 255.98 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/alarm.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-mono text-[#3f78e0] !mr-4"
                >
                  <path
                    className="fill-secondary"
                    d="M26.64 256a10.66 10.66 0 01-8.26-17.4l23.33-28.67a10.67 10.67 0 1116.55 13.47l-23.33 28.67a10.65 10.65 0 01-8.29 3.93zm202.69 0a10.65 10.65 0 01-8.29-3.93l-23.33-28.67a10.67 10.67 0 0116.55-13.47l23.32 28.67a10.66 10.66 0 01-8.25 17.4zM10.66 72a10.66 10.66 0 01-7.54-18.2L53.79 3.13a10.67 10.67 0 0115.09 15.08L18.21 68.88A10.68 10.68 0 0110.66 72zm234.65 0a10.55 10.55 0 01-7.53-3.12L187.1 18.21a10.67 10.67 0 1115.09-15.08l50.67 50.67a10.66 10.66 0 01-7.55 18.2z"
                  />
                  <path
                    className="fill-primary"
                    d="M128 32a112 112 0 10112 112A112.12 112.12 0 00128 32zm66.68 122.68H128A10.68 10.68 0 01117.31 144V80a10.68 10.68 0 0121.35 0v53.33h56a10.68 10.68 0 010 21.35z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="!mb-1">Flexible Hours</h4>
                <p className="!mb-0">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px] xl:!px-[35px] lg:!px-[20px]">
            <div className="flex flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/employees.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-mono text-[#3f78e0] !mr-4"
                >
                  <path
                    className="fill-secondary"
                    d="M72.11 86.51l-3.52-21 1.41-1.4-4.36-4.48a24.12 24.12 0 01-5.78-24.43c.11-.32.2-.53.32-.85l-1.4-.21-9-18.88a8 8 0 00-14.49 0l-8.88 19-19.69 3.07a8 8 0 00-6.29 5.44 7.94 7.94 0 001.92 8.11l14.51 14.83-3.42 21A8.07 8.07 0 0021.33 96a8.33 8.33 0 004-1l17.49-9.81 17.6 9.6a8.2 8.2 0 008.53-.43 8 8 0 003.21-7.89zm183.46-44.06a7.85 7.85 0 00-6.4-5.33l-19.73-3-9-18.88a8 8 0 00-14.5 0l-8.86 19-1.17.21c0 .11.11.21.11.32a23.76 23.76 0 01-5.44 24.32L185.81 64l1.71 1.71-3.41 21A8.07 8.07 0 00192 96a8.33 8.33 0 004-1l17.49-9.81 17.6 9.6a8.2 8.2 0 008.53-.43 8.06 8.06 0 003.2-7.89l-3.52-21 14.51-14.92a8.09 8.09 0 001.81-8.13z"
                  />
                  <path
                    className="fill-primary"
                    d="M100.18 106.67a8 8 0 01-7.91-9.25l4.61-28.8L77 48.37a8 8 0 014.46-13.51l27.09-4.22 12.11-26a8 8 0 017.2-4.64 8 8 0 017.23 4.58l12.29 25.9 27.12 4.05A8 8 0 01179.09 48l-19.78 20.38 4.8 28.77a8 8 0 01-11.74 8.34l-24.19-13.25-24.12 13.42a7.94 7.94 0 01-3.88 1z"
                  />
                  <circle
                    className="fill-secondary"
                    cx="42.67"
                    cy={160}
                    r="21.33"
                  />
                  <path
                    className="fill-secondary"
                    d="M71.15 196.27A44.71 44.71 0 0053.34 232v2.67H8a8.06 8.06 0 01-8-8v-5.33A29.32 29.32 0 0129.33 192H56a29.13 29.13 0 0115.15 4.27z"
                  />
                  <circle
                    className="fill-secondary"
                    cx="213.33"
                    cy={160}
                    r="21.33"
                  />
                  <path
                    className="fill-secondary"
                    d="M256 221.33v5.33a8.07 8.07 0 01-8 8h-45.33V232a44.69 44.69 0 00-17.81-35.73A29.07 29.07 0 01200 192h26.67A29.32 29.32 0 01256 221.33z"
                  />
                  <circle
                    className="fill-primary"
                    cx={128}
                    cy="154.67"
                    r={32}
                  />
                  <path
                    className="fill-primary"
                    d="M157.33 202.67H98.66A29.35 29.35 0 0069.33 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16a29.35 29.35 0 00-29.33-29.33z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="!mb-1">Amazing Work Culture</h4>
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
        <div className="text-center !mt-10">
          <a
            href="#"
            className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
          >
            Join Our Team
          </a>
        </div>
      </div>
      {/* /.container */}
    </section>
  );
}
