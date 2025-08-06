import React from "react";

export default function AppFeatures() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-32 xl:pt-40 lg:pt-40 md:pt-40 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative">
            <img
              className="!h-[3rem] absolute hidden xl:block lg:block"
              style={{ top: "-45%", left: "23%" }}
              alt="image"
              src="/assets/img/svg/doodle3.svg"
              width={85}
              height={82}
            />
            <img
              className="h-8 absolute hidden xl:block lg:block"
              style={{ top: "6%", right: "2%" }}
              alt="image"
              src="/assets/img/svg/doodle4.svg"
              width={42}
              height={55}
            />
            <h2 className="!text-[0.8rem] !leading-[1.35] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3">
              App Features
            </h2>
            <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] !mb-12 lg:!px-5 xl:!px-0 xxl:!px-6">
              Sandbox makes your spending
              <span className="text-gradient gradient-7">stress-free</span> for
              you to have the perfect control.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] !mb-40">
          <div className="xxl:w-11/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] !text-center">
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                <div className="svg-bg svg-bg-lg !bg-[#fef3e4] !rounded-[0.8rem] !mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/cloud-network-2.svg"
                    className="svg-inject icon-svg solid text-[#343f52] text-navy"
                  >
                    <g data-name="Layer 2">
                      <g data-name="Layer 1">
                        <path
                          className="fill-secondary"
                          d="M229 204.06a25.63 25.63 0 00-13.31 3.8l-42.34-29.32V128a10.67 10.67 0 00-21.35 0v56.11a10.63 10.63 0 004.59 8.77l46.9 32.48A26.59 26.59 0 00203 230a26 26 0 1026-26zm0 30.61a4.64 4.64 0 114.64-4.64 4.64 4.64 0 01-4.64 4.64zm-90.33-28.25V128a10.67 10.67 0 10-21.34 0v78.42a26 26 0 1021.34 0zM128 234.67a4.64 4.64 0 114.64-4.64 4.64 4.64 0 01-4.64 4.64z"
                        />
                        <path
                          className="fill-primary"
                          d="M49.84 172.21l14.1-.18 2.73-1.89V128a26.71 26.71 0 0126.67-26.67 26.41 26.41 0 0117.33 6.57 26.14 26.14 0 0134.66 0 26.53 26.53 0 0144 20.1v42.14l.56.39 16.46-.19a8.5 8.5 0 002.08-.31 65.34 65.34 0 00-9.23-127.65A81 81 0 0049.07 62.91 55.07 55.07 0 000 117.57c0 28.03 21 51.5 49.84 54.64z"
                        />
                        <path
                          className="fill-secondary"
                          d="M104 128a10.67 10.67 0 10-21.33 0v50.53l-42.33 29.31A25.91 25.91 0 1053 230a25.68 25.68 0 00-.48-4.67l46.89-32.48a10.63 10.63 0 004.59-8.77V128zM27 234.67a4.64 4.64 0 114.65-4.67 4.64 4.64 0 01-4.65 4.67z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <h4 className="!text-[1rem]">Always up to Date</h4>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                <div className="svg-bg svg-bg-lg bg-[#e1f6f0] !rounded-[0.8rem] !mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 186.69 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/touchscreen.svg"
                    className="svg-inject icon-svg solid text-[#343f52] text-navy"
                  >
                    <path
                      className="fill-secondary"
                      d="M26.69 83.54V58.66a32 32 0 0164 0V80a31.67 31.67 0 013.25.37A47.94 47.94 0 1010.69 48a47.71 47.71 0 0016 35.54z"
                    />
                    <path
                      className="fill-primary"
                      d="M170.69 117.33a16 16 0 00-16 16V136a2.68 2.68 0 01-5.35 0v-13.33a16 16 0 10-32 0V136a2.67 2.67 0 11-5.34 0v-24a16 16 0 00-32 0v24a2.67 2.67 0 11-5.34 0V58.67a16 16 0 00-32 0v96a5.32 5.32 0 01-5.33-5.33V128h-5.27C14.51 128 0 142.16 0 159.71.08 216.05 41.09 256 66.3 256h67.06a53.32 53.32 0 0053.33-53.33v-69.33a16 16 0 00-16-16z"
                    />
                  </svg>
                </div>
                <h4 className="!text-[1rem]">Easy Usage</h4>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                <div className="svg-bg svg-bg-lg bg-[#e9eaf8] !rounded-[0.8rem] !mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/lock.svg"
                    className="svg-inject icon-svg solid text-[#343f52] text-navy"
                  >
                    <path
                      className="fill-primary"
                      d="M168 96H24a24 24 0 00-24 24v112a24 24 0 0024 24h144a24 24 0 0024-24V120a24 24 0 00-24-24z"
                    />
                    <path
                      className="fill-secondary"
                      d="M160 64v32h-21.33V64a42.67 42.67 0 10-85.34 0v32H32V64a64 64 0 01128 0z"
                    />
                  </svg>
                </div>
                <h4 className="!text-[1rem]">Secure Payments</h4>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                <div className="svg-bg svg-bg-lg bg-[#f8e7ec] !rounded-[0.8rem] !mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 255.99 256.01"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/rocket.svg"
                    className="svg-inject icon-svg solid text-[#343f52] text-navy"
                  >
                    <path
                      className="fill-primary"
                      d="M250.75 0c-50-.89-107 25.22-143 65.75a135.36 135.36 0 00-92.77 39.5 5.32 5.32 0 003 9.07L59 120.23l-5 5.68a5.34 5.34 0 00.2 7.33l68.56 68.56a5.32 5.32 0 007.33.21l5.68-5.08 5.86 41.07a5.31 5.31 0 003.78 4.11 4.88 4.88 0 001.52.24 6.06 6.06 0 004.12-1.71 135 135 0 0039.16-92.42c40.57-36.14 66.89-93.12 65.74-143a5.33 5.33 0 00-5.2-5.2zM201.6 92.1a26.66 26.66 0 110-37.71 26.57 26.57 0 010 37.71z"
                    />
                    <path
                      className="fill-secondary"
                      d="M29.05 180.31C17.63 191.72 2 243.3.22 249.14A5.36 5.36 0 005.33 256a5.41 5.41 0 001.53-.23c5.84-1.74 57.41-17.42 68.83-28.85a33 33 0 00-46.64-46.62z"
                    />
                  </svg>
                </div>
                <h4 className="!text-[1rem]">Fast Transactions</h4>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                <div className="svg-bg svg-bg-lg bg-[#f0eaf6] !rounded-[0.8rem] !mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 245.34"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/bar-chart.svg"
                    className="svg-inject icon-svg solid text-[#343f52] text-navy"
                  >
                    <path
                      className="fill-secondary"
                      d="M32 106.67A10.67 10.67 0 0124.91 88l48-42.67a10.62 10.62 0 018.37-2.61l83 10.07 47-44.56A10.66 10.66 0 01226 23.74l-50.67 48a10.73 10.73 0 01-8.61 2.85L83.49 64.5 39.09 104a10.61 10.61 0 01-7.09 2.7z"
                    />
                    <path
                      className="fill-secondary"
                      d="M226.67 53.34A8 8 0 01221 51l-37.32-37.34A8 8 0 01189.33 0h37.33a8 8 0 018 8v37.33a8 8 0 01-4.95 7.39 7.66 7.66 0 01-3.04.62z"
                    />
                    <path
                      className="fill-primary"
                      d="M74.67 184v29.33h-64V184A13.33 13.33 0 0124 170.67h37.33A13.34 13.34 0 0174.67 184zM160 120v93.33H96V120a13.33 13.33 0 0113.33-13.33h37.33A13.33 13.33 0 01160 120zm85.33 21.34v72h-64v-72A13.32 13.32 0 01194.66 128H232a13.31 13.31 0 0113.33 13.34z"
                    />
                    <path
                      className="fill-secondary"
                      d="M248 245.34H8a8 8 0 010-16h240a8 8 0 010 16z"
                    />
                  </svg>
                </div>
                <h4 className="!text-[1rem]">Reports &amp; Forecasting</h4>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                <div className="svg-bg svg-bg-lg bg-[#feece9] !rounded-[0.8rem] !mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/safe.svg"
                    className="svg-inject icon-svg solid text-[#343f52] text-navy"
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
                <h4 className="!text-[1rem]">Online Banking</h4>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                <div className="svg-bg svg-bg-lg bg-[#e0e9fa] !rounded-[0.8rem] !mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 255.98 256.06"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/controls.svg"
                    className="svg-inject icon-svg solid text-[#343f52] text-navy"
                  >
                    <path
                      className="fill-secondary"
                      d="M53.34 10.67v42.67H32V10.67a10.66 10.66 0 1121.32 0zm0 96v138.67a10.67 10.67 0 11-21.34 0V106.67zm183.97-53.31H224V10.69a10.67 10.67 0 00-21.34 0v42.69h-13.35a18.68 18.68 0 00-18.67 18.67v16a18.69 18.69 0 0018.67 18.67h13.33v138.67a10.67 10.67 0 1021.34 0V106.72h13.33A18.69 18.69 0 00256 88.05v-16a18.69 18.69 0 00-18.67-18.69zM152 160h-13.34V10.69a10.68 10.68 0 00-21.35 0V160H104a18.7 18.7 0 00-18.69 18.7v16A18.7 18.7 0 00104 213.38h13.33v32a10.68 10.68 0 0021.35 0v-32H152a18.7 18.7 0 0018.68-18.68v-16A18.71 18.71 0 00152 160z"
                    />
                    <path
                      className="fill-primary"
                      d="M85.34 72v16a18.69 18.69 0 01-18.67 18.67h-48A18.62 18.62 0 010 88V72a18.69 18.69 0 0118.67-18.67h48A18.76 18.76 0 0185.34 72zm85.3 106.67v16A18.69 18.69 0 01152 213.34h-48a18.62 18.62 0 01-18.7-18.67v-16A18.69 18.69 0 01104 160h48a18.76 18.76 0 0118.64 18.67zM256 72v16a18.69 18.69 0 01-18.67 18.67h-48A18.62 18.62 0 01170.64 88V72a18.69 18.69 0 0118.67-18.67h48A18.76 18.76 0 01256 72z"
                    />
                  </svg>
                </div>
                <h4 className="!text-[1rem]">Configurable Fields</h4>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                <div className="svg-bg svg-bg-lg !bg-[#eaf3ef] !rounded-[0.8rem] !mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256.02"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/checked.svg"
                    className="svg-inject icon-svg solid text-[#343f52] text-navy"
                  >
                    <path
                      className="fill-primary"
                      d="M128 64a64 64 0 1064 64 64.06 64.06 0 00-64-64zm34.48 52.59L127.81 154a10.68 10.68 0 01-15.36.29l-18.67-18.71a10.67 10.67 0 1115.08-15.09l10.84 10.83 27.13-29.22a10.68 10.68 0 0115.65 14.53z"
                    />
                    <path
                      className="fill-secondary"
                      d="M16 128a111.94 111.94 0 01173.14-93.77L173 50.36A8 8 0 00178.67 64h48a8 8 0 008-8V8A8 8 0 00221 2.36l-20.41 20.42A126.79 126.79 0 00128 0 128 128 0 005.47 165a8 8 0 1015.31-4.61A112.8 112.8 0 0116 128zm234.53-36.94a8 8 0 10-15.31 4.61A112 112 0 01128 240a111 111 0 01-61-18.14l16-16.22A8 8 0 0077.33 192h-48a8 8 0 00-8 8.08l.53 48a8 8 0 0013.68 5.54l20-20.26A126.83 126.83 0 00128 256 127.95 127.95 0 00250.53 91z"
                    />
                  </svg>
                </div>
                <h4 className="!text-[1rem]">List of Transactions</h4>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="md:w-10/12 lg:w-7/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative">
            <img
              className="!w-[5rem] absolute hidden xl:block lg:block"
              data-delay={1800}
              style={{ bottom: "-60%", right: "10%" }}
              alt="image"
              src="/assets/img/svg/doodle5.svg"
              width={148}
              height={172}
            />
            <img
              className="!h-[5rem] !absolute hidden xl:block lg:block"
              data-delay={1800}
              style={{ top: "-40%", left: "-5%" }}
              alt="image"
              src="/assets/img/svg/doodle6.svg"
              width={976}
              height={117}
            />
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
              How It Works
            </h2>
            <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:!text-[2rem] !mb-8 xl:!px-6">
              Download the app, create your profile and
              <span className="text-gradient gradient-7">voilà</span>, you're
              all set!
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] lg:!mb-40 xl:!mb-[17.5rem]">
          <div className="xxl:w-11/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="flex flex-wrap mx-[-15px] !mt-[-50px] xl:!mt-0 lg:!mt-0 !text-center items-center">
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-[-2.5rem] lg:!mb-0 xl:!mb-0 !mt-[50px] xl:!mt-0 lg:!mt-0">
                <figure className="mx-auto">
                  <img
                    srcSet="/assets/img/photos/devices4@2x.png 2x"
                    alt="image"
                    src="/assets/img/photos/devices4.png"
                    width={373}
                    height={682}
                  />
                </figure>
              </div>
              {/* /column */}
              <div className="w-full xl:!hidden lg:!hidden !px-[15px] !mt-[50px] xl:!mt-0 lg:!mt-0" />
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full lg:!-order-1 xl:!-order-1 !mt-[50px] xl:!mt-0 lg:!mt-0">
                <div className="!mb-8">
                  <span className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7">
                    01
                  </span>
                  <h4 className="!text-[1rem]">Download Application</h4>
                  <p className="!mb-0 xl:!px-7">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus.
                  </p>
                </div>
                {/* /div */}
                <div>
                  <span className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7">
                    02
                  </span>
                  <h4 className="!text-[1rem]">Quick Registration</h4>
                  <p className="!mb-0 xl:!px-7">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus.
                  </p>
                </div>
                {/* /div */}
              </div>
              {/* /column */}
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px] xl:!mt-0 lg:!mt-0">
                <div className="!mb-8">
                  <span className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7">
                    03
                  </span>
                  <h4 className="!text-[1rem]">Track Your Spending</h4>
                  <p className="!mb-0 xl:!px-7">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus.
                  </p>
                </div>
                {/* /div */}
                <div>
                  <span className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7">
                    04
                  </span>
                  <h4 className="!text-[1rem]">Have Total Control</h4>
                  <p className="!mb-0 xl:!px-7">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus.
                  </p>
                </div>
                {/* /div */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
