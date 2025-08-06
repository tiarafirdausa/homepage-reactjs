import React from "react";

import { listFeatures } from "@/data/features";
export default function Features() {
  return (
    <>
      {" "}
      <div className="flex flex-wrap mx-[-15px]">
        <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-8/12 lg:!ml-[16.66666667%] xl:w-8/12 xl:!ml-[16.66666667%] w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
          <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
            Why Choose Sandbox?
          </h2>
          <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-10 xl:!px-10 xxl:!px-20">
            Here are a few{" "}
            <span className="!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 style-2 yellow">
              reasons
            </span>{" "}
            why our customers choose Sandbox.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <ul className="nav nav-tabs nav-tabs-bg flex justify-between nav-justified xl:!flex-row lg:!flex-row flex-col">
        <li className="nav-item !mb-[20px]">
          <a
            className="nav-link !flex flex-row active"
            data-bs-toggle="tab"
            href="#tab2-1"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 255.98"
                data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/bulb.svg"
                className="svg-inject icon-svg icon-svg-md !w-[2.2rem] !h-[2.2rem] solid-mono text-[#fab758] text-fuchsia !mr-4"
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
            </div>
            <div>
              <h4>Collect Ideas</h4>
              <p>Duis mollis commodo luctus cursus commodo tortor mauris.</p>
            </div>
          </a>
        </li>
        <li className="nav-item !mb-[20px]">
          <a
            className="nav-link !flex flex-row"
            data-bs-toggle="tab"
            href="#tab2-2"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/compare.svg"
                className="svg-inject icon-svg icon-svg-md !w-[2.2rem] !h-[2.2rem] solid-mono text-[#45c4a0] text-violet !mr-4"
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
            <div>
              <h4>Data Analysis</h4>
              <p>Vivamus sagittis lacus augue fusce dapibus tellus nibh.</p>
            </div>
          </a>
        </li>
        <li className="nav-item !mb-[20px]">
          <a
            className="nav-link !flex flex-row"
            data-bs-toggle="tab"
            href="#tab2-3"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/delivery-box.svg"
                className="svg-inject icon-svg icon-svg-md !w-[2.2rem] !h-[2.2rem] solid-mono text-[#e2626b] text-green !mr-4"
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
              <h4>Finalize Product</h4>
              <p>Vestibulum ligula porta felis maecenas faucibus mollis.</p>
            </div>
          </a>
        </li>
      </ul>
      {/* /.nav-tabs */}
      <div className="tab-content !mt-6 xl:!mt-8 lg:!mt-8">
        <div className="tab-pane fade show active" id="tab2-1">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full">
              <figure className="!rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <img
                  className="!rounded-[.4rem]"
                  srcSet="/assets/img/photos/se5@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/se5.jpg"
                  width={610}
                  height={410}
                />
              </figure>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full">
              <h2 className="!mb-3 !leading-[1.35]">Collect Ideas</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul className="pl-0 list-none bullet-bg bullet-soft-fuchsia">
                {listFeatures.map((elm, i) => (
                  <li key={i} className="relative !pl-6 !mt-[0.35rem]">
                    <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#fbe4f1] !text-[#e668b3] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    {elm}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="btn btn-fuchsia !text-white !bg-[#e668b3] border-[#e668b3] hover:text-white hover:bg-[#e668b3] hover:!border-[#e668b3] active:text-white active:bg-[#e668b3] active:border-[#e668b3] disabled:text-white disabled:bg-[#e668b3] disabled:border-[#e668b3] !mt-2"
              >
                Learn More
              </a>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/.tab-pane */}
        <div className="tab-pane fade" id="tab2-2">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
              <figure className="!rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <img
                  className="!rounded-[.4rem]"
                  srcSet="/assets/img/photos/se6@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/se6.jpg"
                  width={610}
                  height={410}
                />
              </figure>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full">
              <h2 className="!mb-3 !leading-[1.35]">Data Analysis</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul className="pl-0 list-none bullet-bg bullet-soft-violet">
                {listFeatures.map((elm, i) => (
                  <li key={i} className="relative !pl-6 !mt-[0.35rem]">
                    <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#eee7f5] !text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    {elm}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="btn btn-violet !text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:!border-[#a07cc5] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5] !mt-2"
              >
                Learn More
              </a>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/.tab-pane */}
        <div className="tab-pane fade" id="tab2-3">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full">
              <figure className="!rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <img
                  className="!rounded-[.4rem]"
                  srcSet="/assets/img/photos/se7@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/se7.jpg"
                  width={610}
                  height={410}
                />
              </figure>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full">
              <h2 className="!mb-3 !leading-[1.35]">Finalize Product</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul className="pl-0 list-none bullet-bg bullet-soft-green">
                {listFeatures.map((elm, i) => (
                  <li key={i} className="relative !pl-6 !mt-[0.35rem]">
                    <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    {elm}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="btn btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] !mt-2"
              >
                Learn More
              </a>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/.tab-pane */}
      </div>
    </>
  );
}
