import React from "react";

export default function About() {
  return (
    <>
      {" "}
      <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-30px] items-center">
        <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 lg:!order-2 !mx-auto md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[30px]">
          <div className="img-mask mask-2 xxl:!px-8">
            <img
              srcSet="/assets/img/photos/about28@2x.jpg 2x"
              alt="image"
              src="/assets/img/photos/about28.jpg"
              width={385}
              height={360}
            />
          </div>
        </div>
        {/*/column */}
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[30px]">
          <h2 className="xl:!text-[2rem] !text-[calc(1.325rem_+_.9vw)] font-semibold !leading-[1.2] !mb-3">
            More <em>about</em> me
          </h2>
          <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal">
            I'm Julia Sandbox, a corporate brand designer based in New York
            City. I’m very passionate about the work that I do.
          </p>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo
            sit amet risus. Etiam porta sem malesuada magna mollis euismod.
            Vestibulum id ligula.
          </p>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Aenean lacinia bibendum nulla sed consectetur. Curabitur
            blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur.
          </p>
          <a
            href="#"
            className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
          >
            Learn More
          </a>
        </div>
        {/*/column */}
      </div>
      {/* /.row */}
      <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-10 xl:!mt-16 lg:!mt-16 md:!mt-16">
        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px]">
          <h2 className="xl:!text-[2rem] !text-[calc(1.325rem_+_.9vw)] font-semibold !leading-[1.2] !mb-3">
            My <em>working</em> process
          </h2>
          <p>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Fusce dapibus, tellus ac cursus. Aenean eu leo quam.
          </p>
        </div>
        {/* /column */}
        <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px]">
          <div className="flex flex-wrap mx-[-15px] !mt-[-40px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px]">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px]">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/lamp.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-aqua !mt-1 !mr-4"
                  >
                    <path
                      className="fill-secondary"
                      d="M128 36.86a8 8 0 01-8-8V8a8 8 0 0116 0v20.86a8 8 0 01-8 8zm70.1 29.04a8 8 0 01-5.67-13.64l14.77-14.77a8 8 0 1111.31 11.31l-14.77 14.77a8 8 0 01-5.64 2.33zM248 136h-20.86a8 8 0 010-16H248a8 8 0 010 16zm-35.15 84.85a8.06 8.06 0 01-5.67-2.34l-14.76-14.77a8 8 0 0111.31-11.31l14.77 14.77a8 8 0 010 11.31 7.92 7.92 0 01-5.65 2.34zm-169.7 0a8 8 0 01-5.66-13.65l14.77-14.77a8 8 0 0111.31 11.31L48.8 218.51a7.93 7.93 0 01-5.65 2.34zM28.86 136H8a8 8 0 010-16h20.86a8 8 0 110 16zM57.9 65.9a8 8 0 01-5.66-2.33L37.47 48.8a8 8 0 1111.31-11.31l14.77 14.77A8 8 0 0157.9 65.9z"
                    />
                    <path
                      className="fill-primary"
                      d="M160 224v13.33A18.76 18.76 0 01141.33 256h-26.67c-9 0-18.66-6.83-18.66-21.76V224zm15-154a74.93 74.93 0 00-63-15c-28.27 5.91-51.2 29-57.07 57.21a74.74 74.74 0 0028.16 75.41A32.19 32.19 0 0195.25 208v.12A2 2 0 0196 208h64a.93.93 0 01.53.11V208c1.49-8.11 6.29-15.57 13.65-21.33A74.72 74.72 0 00175 70zm-7 63.36a8.06 8.06 0 01-8-8A29.32 29.32 0 00130.67 96a8 8 0 110-16A45.43 45.43 0 01176 125.33a8.06 8.06 0 01-8 8z"
                    />
                    <path
                      className="fill-secondary"
                      d="M95.25 208H96a1.8 1.8 0 00-.75.11z"
                    />
                    <path
                      className="fill-primary"
                      d="M160.53 208v.11a.93.93 0 00-.53-.11z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="!mb-1">Concept</h3>
                  <p className="!mb-0">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida.
                  </p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px]">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 255.97 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/puzzle.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-aqua !mt-1 !mr-4"
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
                <div>
                  <h3 className="!mb-1">Prepare</h3>
                  <p className="!mb-0">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida.
                  </p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px]">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/pen-tool.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-aqua !mt-1 !mr-4"
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
                <div>
                  <h3 className="!mb-1">Retouch</h3>
                  <p className="!mb-0">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida.
                  </p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px]">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/delivery-box.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-aqua !mt-1 !mr-4"
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
                </div>
                <div>
                  <h3 className="!mb-1">Finalize</h3>
                  <p className="!mb-0">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida.
                  </p>
                </div>
              </div>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /column */}
      </div>
    </>
  );
}
