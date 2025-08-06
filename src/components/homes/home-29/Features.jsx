import React from "react";

export default function Features() {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] !text-center">
        <div className="md:w-11/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative">
          <img
            className="!h-[3rem] absolute hidden xl:block lg:block"
            style={{ top: "-20%", right: "-12%" }}
            alt="image"
            src="/assets/img/svg/doodle3.svg"
            width={85}
            height={82}
          />
          <img
            className="!h-[7rem] absolute hidden xl:block lg:block"
            style={{ bottom: "5%", left: "-17%" }}
            alt="image"
            src="/assets/img/svg/doodle9.svg"
            width={206}
            height={214}
          />
          <h2 className="!text-[0.8rem] uppercase !text-[#aab0bc] !mb-3 !text-center !leading-[1.35]">
            Why Choose Sandbox?
          </h2>
          <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:!text-[2rem] !mb-14 !text-center">
            Here are a few
            <span className="text-gradient gradient-7">reasons why</span> our
            customers choose the Sandbox app.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="flex-wrap mx-[-15px] flex items-start !mb-36">
        <div
          className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!sticky lg:!sticky"
          style={{ top: "8rem" }}
        >
          <figure className="m-0 p-0">
            <img
              className="w-full max-w-full !h-auto"
              srcSet="/assets/img/photos/devices5@2x.png 2x"
              alt="image"
              src="/assets/img/photos/devices5.png"
              width={630}
              height={795}
            />
          </figure>
        </div>
        {/* /column */}
        <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto">
          <div className="flex flex-row !mb-8">
            <div>
              <div className="svg-bg svg-bg-lg bg-[#e6e5f4] !rounded-[0.8rem] !mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/calendar.svg"
                  className="svg-inject icon-svg solid text-[#343f52] text-navy"
                >
                  <path
                    className="fill-secondary"
                    d="M66.67 117.33H40a8 8 0 00-8 8V152a8 8 0 008 8h26.67a8 8 0 008-8v-26.67a8 8 0 00-8-8zm0 64H40a8 8 0 00-8 8V216a8 8 0 008 8h26.67a8 8 0 008-8v-26.67a8 8 0 00-8-8zm74.66-64h-26.67a8 8 0 00-8 8V152a8 8 0 008 8h26.67a8 8 0 008-8v-26.67a8 8 0 00-8-8zm0 64h-26.67a8 8 0 00-8 8V216a8 8 0 008 8h26.67a8 8 0 008-8v-26.67a8 8 0 00-8-8zm74.67-64h-26.67a8 8 0 00-8 8V152a8 8 0 008 8H216a8 8 0 008-8v-26.67a8 8 0 00-8-8z"
                  />
                  <path
                    className="fill-primary"
                    d="M224 32H32A32 32 0 000 64v160a32 32 0 0032 32h192a32 32 0 0032-32V64a32 32 0 00-32-32zm10.67 192A10.67 10.67 0 01224 234.67H32A10.67 10.67 0 0121.33 224V107.09h213.33V224z"
                  />
                  <path
                    className="fill-secondary"
                    d="M64 0H53.33a10.67 10.67 0 00-10.67 10.67v42.67A10.68 10.68 0 0053.33 64H64a10.67 10.67 0 0010.67-10.66V10.67A10.67 10.67 0 0064 0zm138.67 0H192a10.67 10.67 0 00-10.67 10.67v42.67A10.67 10.67 0 00192 64h10.67a10.67 10.67 0 0010.67-10.67V10.67A10.67 10.67 0 00202.67 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="!text-[1rem]">Scheduled Transactions</h4>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus magna.
              </p>
            </div>
          </div>
          <div className="flex flex-row !mb-8">
            <div>
              <div className="svg-bg svg-bg-lg bg-[#e1f6f0] !rounded-[0.8rem] !mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/currency.svg"
                  className="svg-inject icon-svg solid text-[#343f52] text-navy"
                >
                  <path
                    className="fill-primary"
                    d="M206.43 82.68h-30.59c-12.5 0-22.67-10.18-22.67-22.67 0-6.56 2.85-12.42 7.31-16.56-10.08-3.89-21.01-6.11-32.48-6.11-50.08 0-90.67 40.59-90.67 90.67s40.59 90.67 90.67 90.67 90.67-40.59 90.67-90.67c0-16.53-4.5-31.98-12.24-45.33zm-82.48 37.33h8.11c12.46 0 22.61 10.14 22.61 22.61 0 11.22-8.08 20.43-18.67 22.32v8.4c0 4.42-3.58 8-8 8s-8-3.58-8-8v-8h-10.67c-4.42 0-8-3.58-8-8s3.58-8 8-8h22.72c3.65 0 6.61-2.98 6.61-6.61s-2.98-6.72-6.61-6.72h-8.11c-12.46 0-22.61-10.14-22.61-22.61 0-11.22 8.08-20.43 18.67-22.32v-8.4c0-4.42 3.58-8 8-8s8 3.58 8 8v8h10.67c4.42 0 8 3.58 8 8s-3.58 8-8 8h-22.72c-3.65 0-6.61 2.98-6.61 6.61-.02 3.74 2.96 6.72 6.61 6.72z"
                  />
                  <path
                    className="fill-secondary"
                    d="M245.33 117.33c-5.89 0-10.67 4.78-10.67 10.67 0 58.82-47.86 106.67-106.67 106.67S21.33 186.82 21.33 128 69.18 21.33 128 21.33c19.5 0 38.98 5.46 55.78 14.94L170 50.05a10.661 10.661 0 007.54 18.21h46.93c5.89 0 10.67-4.78 10.67-10.67V10.68c0-4.32-2.59-8.21-6.58-9.86-4-1.66-8.58-.75-11.63 2.32l-17.54 17.54C178.4 7.48 153.52 0 128 0 57.42 0 0 57.43 0 128s57.42 128 128 128 128-57.42 128-128c0-5.89-4.77-10.67-10.67-10.67z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="!text-[1rem]">Multiple Currencies</h4>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit
                libero, a pharetra augue. Maecenas faucibus mollis interdum.
              </p>
            </div>
          </div>
          <div className="flex flex-row !mb-8">
            <div>
              <div className="svg-bg svg-bg-lg bg-[#f8e7ec] !rounded-[0.8rem] !mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/server.svg"
                  className="svg-inject icon-svg solid text-[#343f52] text-navy"
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
            </div>
            <div>
              <h4 className="!text-[1rem]">Database Management</h4>
              <p>
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Cum sociis natoque penatibus et magnis dis parturient
                montes.
              </p>
            </div>
          </div>
          <div className="flex flex-row !mb-8">
            <div>
              <div className="svg-bg svg-bg-lg !bg-[#fef3e4] !rounded-[0.8rem] !mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/devices.svg"
                  className="svg-inject icon-svg solid text-[#343f52] text-navy"
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
              <h4 className="!text-[1rem]">Sync Between Devices</h4>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus magna.
              </p>
            </div>
          </div>
          <div className="flex flex-row !mb-8">
            <div>
              <div className="svg-bg svg-bg-lg bg-[#e0e9fa] !rounded-[0.8rem] !mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 234.67"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/search.svg"
                  className="svg-inject icon-svg solid text-[#343f52] text-navy"
                >
                  <path
                    className="fill-secondary"
                    d="M117.15 74.85a53.33 53.33 0 1053.33 53.33 53.39 53.39 0 00-53.33-53.33zm0 85.33a32 32 0 1132-32 32 32 0 01-32 32z"
                  />
                  <path
                    className="fill-secondary"
                    d="M149.7 149.68a10.61 10.61 0 017.53 3.12l31.65 31.65a10.67 10.67 0 01-15.09 15.09l-31.65-31.65a10.67 10.67 0 017.56-18.21z"
                  />
                  <path
                    className="fill-primary"
                    d="M224 0H32A32 32 0 000 32v170.67a32 32 0 0032 32h192a32 32 0 0032-32V32a32 32 0 00-32-32zm0 213.33H32a10.68 10.68 0 01-10.67-10.67V53.33h213.33v149.33A10.67 10.67 0 01224 213.33z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="!text-[1rem]">Smart Search</h4>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit
                libero, a pharetra augue. Maecenas faucibus mollis interdum.
              </p>
            </div>
          </div>
          <div className="flex flex-row !mb-8">
            <div>
              <div className="svg-bg svg-bg-lg !bg-[#eaf3ef] !rounded-[0.8rem] !mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/compare.svg"
                  className="svg-inject icon-svg solid text-[#343f52] text-navy"
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
              </div>
            </div>
            <div>
              <h4 className="!text-[1rem]">Detailed Reports</h4>
              <p>
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Cum sociis natoque penatibus et magnis dis parturient
                montes.
              </p>
            </div>
          </div>
        </div>
        {/* /column */}
      </div>
    </>
  );
}
