import React from "react";

import { listFeatures } from "@/data/features";
export default function Features() {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px]">
        <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-8/12 lg:!ml-[16.66666667%] xl:w-8/12 xl:!ml-[16.66666667%] w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
          <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
            Why Choose Sandbox?
          </h2>
          <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] !font-DMSerif !font-normal !tracking-normal [word-spacing:normal!important] !mb-10 xl:!px-10 xxl:!px-20">
            Here are a few reasons why our customers choose Sandbox.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <ul className="nav nav-tabs nav-tabs-bg flex justify-between nav-justified xl:!flex-row lg:!flex-row flex-col">
        <li className="nav-item !mb-[20px]">
          <a
            className="nav-link !flex flex-row hover:!shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] active"
            data-bs-toggle="tab"
            href="#tab2-1"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 294.2 409.6"
                className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !text-[#fab758] text-yellow !mr-4"
              >
                <path
                  className="lineal-stroke"
                  d="M31.2 342.9c-2.4 1.7-5.8 1.1-7.5-1.3-.6-.9-1-2-1-3.1v-77.1l68.9-77.2V150L5 247.1c-3.2 3.6-5 8.2-5 13v78.4c0 15.5 12.6 28.1 28.1 28.1 5.8 0 11.5-1.8 16.2-5.1l9.6-6.8-13.1-18.6-9.6 6.8zm258.1-95.8L200.7 148v34.2l70.8 79.3v77.1c0 3-2.4 5.4-5.4 5.4-1.1 0-2.2-.3-3.1-1l-9.6-6.7-13.1 18.6 9.6 6.7c12.7 8.9 30.3 5.9 39.2-6.9 3.3-4.7 5.1-10.4 5.1-16.1v-78.4c0-4.8-1.8-9.5-4.9-13.1zM147.1 409.6l-6.1-3.9c-2-1.3-49.3-32-49.3-72.5 0-40 23.3-72.6 53.1-74.2.8 0 1.6-.1 2.3-.1 4.1 0 8.1.6 12.1 1.7 9.1 2.7 17.6 8.4 24.6 16.6 11.9 14 18.7 34.4 18.7 55.9 0 40.5-47.2 71.2-49.3 72.5l-6.1 4zm0-127.9h-1c-17.5.9-31.7 24-31.7 51.5 0 19.6 19.9 39.1 32.6 48.9 12.7-9.8 32.6-29.3 32.6-48.9 0-16.2-4.9-31.2-13.3-41.1-4.1-4.8-8.8-8.1-13.6-9.5-1.8-.6-3.7-.9-5.6-.9z"
                />
                <path
                  className="lineal-fill"
                  d="M147.1 11.4c-13.1 0-96.4 71.4-96.4 143.4 0 24.5 29.3 178.4 29.3 178.4h134.1s29.3-153.9 29.3-178.4c.1-72.4-83.9-143.4-96.3-143.4zm49.8 159.2c-1 4.9-2.7 9.6-5.1 14-.8 1.4-1.6 2.8-2.5 4.2-3.7 5.4-8.3 10.1-13.7 13.7-1.3.9-2.7 1.8-4.2 2.5-24.7 13.4-55.6 4.2-68.9-20.5s-4.2-55.6 20.5-68.9c7.4-4 15.8-6.2 24.3-6.1 3.4 0 6.9.3 10.2 1 4.9 1 9.6 2.7 14 5.1 7.2 3.9 13.4 9.5 17.9 16.3 5.7 8.4 8.7 18.3 8.7 28.4-.1 3.5-.4 6.9-1.2 10.3z"
                />
                <path
                  className="lineal-stroke"
                  d="M147.1 222.6c-34.4 0-62.2-28-62.2-62.3 0-34.4 28-62.2 62.3-62.2 10.3 0 20.4 2.6 29.5 7.5 2.6 1.4 5.2 3.1 7.6 4.9 24.8 18.5 32.2 52.4 17.5 79.6-1 1.8-2 3.5-3.1 5.1-4.5 6.6-10.2 12.3-16.8 16.8-1.6 1.1-3.4 2.2-5.1 3.1-9.1 4.9-19.3 7.5-29.7 7.5zm0-101.7c-21.8-.3-39.7 17-40.1 38.8s17 39.7 38.8 40.1h1.3c2.7 0 5.4-.3 8-.8 3.8-.8 7.4-2.1 10.8-4 1.1-.6 2.2-1.3 3.2-2 4.2-2.8 7.8-6.5 10.7-10.7.7-1.1 1.4-2.1 2-3.3 1.9-3.4 3.2-7 4-10.8.5-2.6.8-5.3.8-8 0-12.5-5.9-24.2-15.9-31.6-1.5-1.1-3.1-2.2-4.8-3.1-3.4-1.9-7-3.2-10.8-4-2.6-.5-5.3-.8-8-.8v.2z"
                />
                <path
                  className="lineal-stroke"
                  d="M89.5 321.8h115.2c9-47.9 27.4-149.1 27.4-167 0-63-69.5-123.9-85-131.5-6.7 3.3-26.8 18.4-46.8 43.2-24.6 30.4-38.2 61.8-38.2 88.4 0 17.9 18.4 119.1 27.4 166.9zm134.1 22.8H70.7l-1.8-9.3c-3-15.9-29.5-155.7-29.5-180.6 0-42.2 25-80.9 45.9-106C101.1 29.9 131.8 0 147.1 0c15 0 45.7 29.8 61.5 48.6 21.1 25.1 46.2 63.8 46.2 106.2 0 24.9-26.5 164.7-29.5 180.6l-1.7 9.2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="!mb-[.25rem]">Easy Usage</h4>
              <p>Duis mollis commodo luctus cursus commodo tortor mauris.</p>
            </div>
          </a>
        </li>
        <li className="nav-item !mb-[20px]">
          <a
            className="nav-link !flex flex-row hover:!shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
            data-bs-toggle="tab"
            href="#tab2-2"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 465.5"
                className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !text-[#45c4a0] text-green !mr-4"
              >
                <path
                  className="lineal-stroke"
                  d="M156.8 465.5c-9.9 0-24.2-4.8-56.2-40.6-16.2-18.2-29.5-36-30.1-36.8-.4-.5-.7-1-1-1.6-6.1-11-9.3-23.3-9.3-35.8v-90.9c0-7.9 6.4-14.4 14.3-14.4h116c16.5 0 32.4 6.5 44.2 18.1l59.4 58.5c17.2 17.2 17.3 45.1.1 62.3s-45.1 17.3-62.3.1L172.7 325c-5.9 0-15.5-.1-23.1-.1l-10.8-.1c-7.9 0-14.3-6.5-14.3-14.4s6.5-14.3 14.4-14.3h.1l10.8.1c6.8 0 14.1.1 19.6.1h6.9c4.2 0 8.5.1 12.7 4.3l63.5 63.5c6 6 15.7 6 21.7 0s6-15.7 0-21.7L214.6 284c-6.4-6.3-15-9.9-24-9.8H88.9v76.5c0 7.4 1.8 14.6 5.2 21.1 2.6 3.5 13.6 17.9 26.5 32.4 25.5 28.8 35.2 32.2 36.5 32.6h155.1c10.6 0 22.9-5.5 34.6-11.2 9.9-4.8 83.3-54.6 127.3-84.9l.7-.5c8.2-5.1 10.7-15.8 5.6-23.9-4.9-7.9-15.2-10.5-23.3-6L350 381.4c-6.6 4.4-15.5 2.6-19.9-4-4.4-6.6-2.6-15.5 4-19.9l107.5-71.3c.2-.1.3-.2.5-.3 21.8-13.1 50.1-6 63.2 15.8 12.9 21.6 6.2 49.6-15.2 62.8-13.3 9.2-115.8 79.6-130.8 86.9-14.7 7.1-30.5 14.1-47.1 14.1H156.8z"
                />
                <path
                  className="lineal-fill"
                  d="M14.4 242.2h84.2v189.6H14.4z"
                />
                <path
                  className="lineal-stroke"
                  d="M98.5 446.1H14.4c-7.9 0-14.4-6.4-14.4-14.4V242.2c0-7.9 6.4-14.4 14.3-14.4h84.1c7.9 0 14.3 6.4 14.3 14.4v189.6c.1 7.9-6.3 14.3-14.2 14.3zm-69.8-28.7h55.4V256.5H28.7v160.9zM273 214.2c-59.2 0-107.1-48-107.1-107.1C165.9 47.9 213.9 0 273.1 0c59.1 0 107.1 48 107.1 107.1-.1 59.1-48.1 107.1-107.2 107.1zm0-185.5c-43.3 0-78.4 35.1-78.4 78.4s35.1 78.4 78.4 78.4c43.3 0 78.4-35.1 78.4-78.4-.1-43.3-35.1-78.3-78.4-78.4z"
                />
                <circle
                  className="lineal-fill"
                  cx="348.9"
                  cy="178.6"
                  r="92.8"
                />
                <path
                  className="lineal-stroke"
                  d="M348.9 285.7c-59.1 0-107.1-47.9-107.1-107.1 0-59.1 47.9-107.1 107.1-107.1S456 119.4 456 178.6c-.1 59.1-48 107-107.1 107.1zm0-185.5c-43.3 0-78.4 35.1-78.4 78.4S305.7 257 349 257s78.4-35.1 78.4-78.4c-.1-43.3-35.2-78.4-78.5-78.4z"
                />
                <path
                  className="lineal-stroke"
                  d="M345.4 224.9c-15.5-.5-28.2-8.5-28.2-16.8 0-4.4 3.9-10.9 8.8-10.9 5.4 0 9.8 7.6 19.4 9.3v-20.9c-11.9-4.5-25.9-10.1-25.9-26.6s12.1-24.3 25.9-26.2v-3.6c0-1.8 2.1-3.5 4.9-3.5 2.5 0 4.9 1.7 4.9 3.5v3.2c8 .3 23.1 2.3 23.1 11.2 0 3.5-2.3 10.6-8 10.6-4.3 0-6.7-4.1-15.1-4.8v18.9c11.8 4.4 25.5 10.5 25.5 27.9 0 16-10.4 25.7-25.5 28.2v3.8c0 1.8-2.5 3.5-4.9 3.5-2.9 0-4.9-1.7-4.9-3.5v-3.3zm1.3-59.7v-15.4c-5.8 1.2-8.3 4.1-8.3 7.2 0 3.8 3.4 6.1 8.3 8.2zm7.2 23.9v17.3c4.4-1 7.9-3.5 7.9-8.1 0-4.3-3.2-7-7.9-9.2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="!mb-[.25rem]">Fast Transactions</h4>
              <p>Vivamus sagittis lacus augue fusce dapibus tellus nibh.</p>
            </div>
          </a>
        </li>
        <li className="nav-item !mb-[20px]">
          <a
            className="nav-link !flex flex-row hover:!shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
            data-bs-toggle="tab"
            href="#tab2-3"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 339.8 409.6"
                className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !text-[#e2626b] text-red !mr-4"
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
              <h4 className="!mb-[.25rem]">Secure Payments</h4>
              <p>Vestibulum ligula porta felis maecenas faucibus mollis.</p>
            </div>
          </a>
        </li>
      </ul>
      {/* /.nav-tabs */}
      <div className="tab-content !mt-6 lg:!mt-8 xl:!mt-8 xl:!mb-9 lg:!mb-9 md:!mb-9">
        <div className="tab-pane fade show active" id="tab2-1">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
              <div className="flex flex-wrap mx-[-12.5px] !mt-[-25px] items-center">
                <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !ml-auto"
                    srcSet="/assets/img/photos/sa13@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa13.jpg"
                    width={300}
                    height={355}
                  />
                </div>
                {/* /column */}
                <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                    srcSet="/assets/img/photos/sa14@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa14.jpg"
                    width={300}
                    height={155}
                  />
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto]"
                    srcSet="/assets/img/photos/sa15@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa15.jpg"
                    width={250}
                    height={258}
                  />
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
              <h2 className="!mb-3 !leading-[1.35]">Easy Usage</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul className="pl-0 list-none bullet-bg bullet-soft-yellow">
                {listFeatures.map((elm, i) => (
                  <li key={i} className="relative !pl-6">
                    <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#feeed9] !text-[#fab758] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    {elm}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !mt-2"
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
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] xl:!order-2 lg:!order-2">
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                <div className="w-5/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5 flex !ml-auto"
                    srcSet="/assets/img/photos/sa9@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa9.jpg"
                    width={250}
                    height={178}
                  />
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] !ml-auto"
                    srcSet="/assets/img/photos/sa10@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa10.jpg"
                    width={200}
                    height={221}
                  />
                </div>
                {/* /column */}
                <div className="w-7/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                    srcSet="/assets/img/photos/sa11@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa11.jpg"
                    width={350}
                    height={163}
                  />
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex w-11/12 flex-[0_0_auto]"
                    srcSet="/assets/img/photos/sa12@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa12.jpg"
                    width={325}
                    height={212}
                  />
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
              <h2 className="!mb-3 !leading-[1.35]">Fast Transactions</h2>
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
        <div className="tab-pane fade" id="tab2-3">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                    srcSet="/assets/img/photos/sa5@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa5.jpg"
                    width={300}
                    height={174}
                  />
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] !ml-auto"
                    srcSet="/assets/img/photos/sa6@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa6.jpg"
                    width={250}
                    height={276}
                  />
                </div>
                {/* /column */}
                <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5"
                    srcSet="/assets/img/photos/sa7@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa7.jpg"
                    width={300}
                    height={181}
                  />
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto]"
                    srcSet="/assets/img/photos/sa8@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa8.jpg"
                    width={250}
                    height={276}
                  />
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
              <h2 className="!mb-3 !leading-[1.35]">Secure Payments</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul className="pl-0 list-none bullet-bg bullet-soft-red">
                {listFeatures.map((elm, i) => (
                  <li key={i} className="relative !pl-6">
                    <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    {elm}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="btn btn-red !text-white !bg-[#e2626b] border-[#e2626b] hover:text-white hover:bg-[#e2626b] hover:!border-[#e2626b] active:text-white active:bg-[#e2626b] active:border-[#e2626b] disabled:text-white disabled:bg-[#e2626b] disabled:border-[#e2626b] !mt-2"
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
