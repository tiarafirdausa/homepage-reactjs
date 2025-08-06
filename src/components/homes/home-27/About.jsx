import React from "react";

export default function About() {
  return (
    <>
      {" "}
      <div className="flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] md:mx-[-20px] xl:mx-[-35px] items-center !mb-10 xl:!mb-14 lg:!mb-14 md:!mb-14">
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[80px]">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
              <figure className="rounded-[0.4rem]">
                <img
                  className="rounded-[0.4rem]"
                  srcSet="/assets/img/photos/g14@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/g14.jpg"
                  width={293}
                  height={260}
                />
              </figure>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !self-end !mt-[25px]">
              <figure className="rounded-[0.4rem]">
                <img
                  className="rounded-[0.4rem]"
                  srcSet="/assets/img/photos/g15@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/g15.jpg"
                  width={293}
                  height={235}
                />
              </figure>
            </div>
            {/*/column */}
            <div className="w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
              <figure className="!rounded-[.4rem] xl:!mx-5 lg:!mx-5 md:!mx-5">
                <img
                  className="!rounded-[.4rem]"
                  srcSet="/assets/img/photos/g16@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/g16.jpg"
                  width={560}
                  height={285}
                />
              </figure>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[80px]">
          <h2 className="!text-[0.75rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
            Who Are We?
          </h2>
          <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] !tracking-[-0.03em] !mb-5">
            Company that believes in the power of creative strategy.
          </h3>
          <p className="!mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum
            nulla sed.
          </p>
          <div className="flex flex-wrap mx-[-15px] !mt-[-15px] xl:mx-[-20px]">
            <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
              <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                <li className="relative !pl-[1.25rem]">
                  <span>
                    <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-[#343f52] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                  </span>
                  <span>
                    Aenean eu leo quam ornare curabitur blandit tempus.
                  </span>
                </li>
                <li className="relative !pl-[1.25rem] !mt-3">
                  <span>
                    <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-[#343f52] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                  </span>
                  <span>
                    Nullam quis risus eget urna mollis ornare donec elit.
                  </span>
                </li>
              </ul>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
              <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                <li className="relative !pl-[1.25rem]">
                  <span>
                    <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-[#343f52] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                  </span>
                  <span>Etiam porta sem malesuada magna mollis euismod.</span>
                </li>
                <li className="relative !pl-[1.25rem] !mt-3">
                  <span>
                    <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-[#343f52] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                  </span>
                  <span>Fermentum massa vivamus faucibus amet euismod.</span>
                </li>
              </ul>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-[5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[30px]">
          <div className="flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/target.svg"
                className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#343f52] mr-5"
              >
                <circle className="lineal-fill" cx="283.8" cy="283.8" r={143} />
                <path
                  className="lineal-stroke"
                  d="M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z"
                />
                <path
                  className="lineal-fill"
                  d="M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3"
                />
                <path
                  className="lineal-stroke"
                  d="M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z"
                />
                <path
                  className="lineal-fill"
                  d="M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z"
                />
                <path
                  className="lineal-stroke"
                  d="M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z"
                />
              </svg>
            </div>
            <div>
              <h4 className="!text-[1rem] !tracking-[-0.03em]">Our Vision</h4>
              <p className="!mb-2">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget. Fusce dapibus tellus.
              </p>
            </div>
          </div>
        </div>
        {/*/column */}
        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[30px]">
          <div className="flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 409.6 404.7"
                data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/award-2.svg"
                className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green mr-5"
              >
                <path
                  className="lineal-stroke"
                  d="M90.8 404.7c-6.5 0-12.4-4-14.7-10.1L57.7 347 10 328.7c-8.1-3.1-12.2-12.2-9-20.4.8-2 2-3.9 3.5-5.5l93.6-93.6 97.3 97.3-93.6 93.6c-2.9 2.9-6.9 4.6-11 4.6zm-60.7-93.8l39.5 15.2c4.1 1.6 7.4 4.9 9 9l15.2 39.5 68.1-68.1-63.7-63.7-68.1 68.1zm288.7 93.8c-4.2 0-8.2-1.7-11.1-4.6l-20.8-20.8 16.8-16.8 12.1 12.1 15.2-39.5c1.6-4.1 4.9-7.4 9-9l39.4-15.2-76.4-76.5 16.8-16.8 85.2 85.2c6.1 6.1 6.1 16.1 0 22.3-1.6 1.6-3.4 2.8-5.5 3.6L351.9 347l-18.3 47.6c-1.9 5-6.2 8.7-11.4 9.8-1.1.2-2.2.3-3.4.3z"
                />
                <path
                  className="lineal-fill"
                  d="M347.3 224.1c5.1-15.7 31-28.9 31-46.3s-25.9-30.6-31-46.3c-5.3-16.3 7.8-42.2-2.1-55.7s-38.6-9.2-52.4-19.2-18-38.6-34.4-43.9C242.7 7.6 222.2 28 204.8 28s-37.9-20.4-53.6-15.3c-16.3 5.3-20.8 34-34.4 43.9s-42.4 5.5-52.4 19.2 3.2 39.4-2.1 55.7c-5.1 15.7-31.1 28.8-31.1 46.3s25.9 30.6 31 46.3c5.3 16.3-7.8 42.1 2.1 55.7S103 289 116.7 299s18.1 38.6 34.4 43.9c15.7 5.1 36.2-15.3 53.6-15.3s37.9 20.4 53.6 15.3c16.3-5.3 20.8-34 34.4-43.9s42.4-5.5 52.4-19.2-3.1-39.3 2.2-55.7zm-142.5 48.7c-52.5 0-95-42.5-95-95s42.5-95 95-95 95 42.5 95 95-42.5 95-95 95z"
                />
                <path
                  className="lineal-stroke"
                  d="M253 355.7c-10.1 0-19.6-4.6-28.8-9.1-7-3.4-14.3-7-19.4-7s-12.4 3.6-19.4 7c-9.2 4.5-18.7 9.1-28.8 9.1-3.1 0-6.2-.5-9.1-1.4-13.7-4.5-20.7-17.6-26.8-29.2-3.5-6.7-7.2-13.6-10.9-16.3s-11.6-4.2-19.2-5.5c-12.8-2.2-27.4-4.8-35.8-16.3s-6.3-26-4.5-38.8c1.1-7.6 2.2-15.6.7-20.2-1.4-4.2-6.7-9.8-11.9-15.1-9.2-9.5-19.7-20.2-19.7-34.9s10.5-25.4 19.7-34.9c5.2-5.3 10.6-10.8 12-15.1 1.5-4.7.4-12.6-.7-20.2C48.6 95 46.5 80.4 54.8 69s23-14.1 35.8-16.3c7.5-1.3 15.3-2.7 19.2-5.5s7.4-9.6 10.9-16.3c6.1-11.6 13.1-24.8 26.8-29.2 2.9-1 6-1.4 9.1-1.4 10.1 0 19.6 4.6 28.8 9.1 7 3.4 14.3 7 19.4 7s12.4-3.6 19.4-7C233.4 4.6 243 0 253 0c3.1 0 6.2.5 9.1 1.4 13.7 4.5 20.7 17.6 26.8 29.2 3.5 6.7 7.2 13.6 10.9 16.3s11.6 4.2 19.2 5.5c12.9 2.2 27.4 4.8 35.8 16.3s6.3 26 4.5 38.8c-1.1 7.6-2.2 15.6-.7 20.2 1.4 4.2 6.7 9.8 11.9 15.1 9.2 9.5 19.7 20.2 19.7 34.9s-10.5 25.4-19.7 34.9c-5.2 5.3-10.6 10.9-11.9 15.1-1.5 4.7-.4 12.6.7 20.2 1.8 12.9 3.9 27.4-4.5 38.8s-23 14.1-35.8 16.3c-7.5 1.3-15.3 2.7-19.2 5.5s-7.4 9.6-10.9 16.3c-6.1 11.6-13.1 24.8-26.8 29.2-2.9 1.2-6 1.7-9.1 1.7zm-48.2-39.9c10.6 0 20.4 4.8 29.8 9.4 6.8 3.3 13.8 6.7 18.4 6.7.6 0 1.2-.1 1.7-.2 4.5-1.5 9.1-10.1 13.1-17.8 4.8-9.1 9.8-18.5 18-24.5s18.9-7.9 29.1-9.7c8.4-1.5 18-3.1 20.7-6.9s1.3-13.2.1-21.6c-1.4-10.3-2.9-21 .3-30.8 3.1-9.5 10.4-17 17.5-24.3 6.1-6.2 13-13.3 13-18.3s-6.9-12.1-13-18.3c-7.1-7.3-14.4-14.8-17.5-24.3-3.2-9.9-1.7-20.5-.3-30.8 1.2-8.4 2.5-17.9-.1-21.6s-12.3-5.4-20.7-6.9c-10.2-1.8-20.8-3.6-29.1-9.7s-13.2-15.4-18-24.5c-4-7.6-8.6-16.3-13.1-17.8-.6-.2-1.2-.3-1.8-.2-4.6 0-11.6 3.4-18.4 6.7-9.5 4.6-19.3 9.4-29.8 9.4s-20.4-4.8-29.8-9.4c-6.8-3.3-13.8-6.7-18.4-6.7-.6 0-1.2.1-1.8.2-4.5 1.5-9.1 10.1-13.1 17.8-4.8 9.1-9.8 18.5-18 24.5s-18.9 7.9-29.1 9.7c-8.4 1.5-18 3.2-20.7 6.9s-1.3 13.2-.1 21.6c1.4 10.3 2.9 21-.3 30.8-3.1 9.5-10.4 17-17.5 24.3-6 6.2-12.9 13.3-12.9 18.3s6.9 12.1 13 18.3c7.1 7.3 14.4 14.8 17.5 24.3 3.2 9.9 1.7 20.5.3 30.8-1.2 8.4-2.5 17.9.1 21.6s12.3 5.4 20.7 6.9c10.2 1.8 20.8 3.6 29.1 9.7s13.2 15.4 18 24.5c4 7.6 8.6 16.3 13.1 17.7.6.2 1.2.3 1.8.2 4.6 0 11.6-3.4 18.4-6.7 9.5-4.6 19.3-9.3 29.8-9.3z"
                />
                <path
                  className="lineal-stroke"
                  d="M204.8 284.7c-59 0-106.9-47.9-106.9-106.9 0-59 47.9-106.9 106.9-106.9 59 0 106.9 47.8 106.9 106.8v.1c-.1 59-47.9 106.9-106.9 106.9zm0-190c-45.9 0-83.2 37.2-83.2 83.1 0 45.9 37.2 83.2 83.1 83.2 45.9 0 83.2-37.2 83.2-83.1 0-25.8-12-50.1-32.4-65.9-14.4-11.2-32.3-17.3-50.7-17.3z"
                />
              </svg>
            </div>
            <div>
              <h4 className="!text-[1rem] !tracking-[-0.03em]">Our Mission</h4>
              <p className="!mb-2">
                Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel
                augue laoreet. Sed posuere consectetur.
              </p>
            </div>
          </div>
        </div>
        {/*/column */}
        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[30px]">
          <div className="flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 457.97"
                data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/loyalty.svg"
                className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow mr-5"
              >
                <path
                  className="lineal-fill"
                  d="M286.5 180.78c-18.21 0-26.38 10.21-29.59 16.2a1.08 1.08 0 01-1.9 0c-3.21-6-11.33-16.2-29.54-16.2-20.74 0-39 14.16-39 40a54.24 54.24 0 008 29.43c12.06 20.38 51.78 46.81 59.94 52a2.74 2.74 0 003 0c8.16-5.18 47.9-31.48 60.05-52a54.22 54.22 0 008-29.43c.05-25.84-18.22-40-38.96-40z"
                />
                <path
                  className="lineal-stroke"
                  d="M256 316.82a16.91 16.91 0 01-9.09-2.65c-8.3-5.3-50.43-32.93-64.51-56.74a68.28 68.28 0 01-10-36.64c0-31.38 22.34-54.16 53.13-54.16 13.91 0 23.74 4.56 30.5 9.92 6.76-5.36 16.61-9.92 30.53-9.92 30.81 0 53.16 22.78 53.16 54.16a68.25 68.25 0 01-10 36.64c-14.19 24-56.34 51.49-64.65 56.76a16.86 16.86 0 01-9.07 2.63zm-30.53-121.88c-11.45 0-24.83 6.77-24.83 25.85a40.3 40.3 0 006.08 22.21c7.43 12.57 31.56 31.35 49.25 43.27 17.69-11.87 41.84-30.61 49.33-43.27a40.38 40.38 0 006.06-22.22c0-19.08-13.39-25.86-24.86-25.86-8.25 0-14 2.94-17.12 8.74a15.24 15.24 0 01-26.86 0c-3.09-5.79-8.82-8.72-17.05-8.72z"
                />
                <path
                  className="lineal-stroke"
                  d="M130.67 458c-8.1 0-19.71-3.73-44.41-31.37C74.07 413 64.07 399.53 63.65 399a14.32 14.32 0 01-1-1.56A58.57 58.57 0 0155.29 369v-67.66a14.15 14.15 0 0114.15-14.15h86.46a50 50 0 0135.31 14.46l44.27 43.56a36.25 36.25 0 11-51.18 51.34L141 353.28l-9.66-.06a14.16 14.16 0 01.08-28.31h.07c5.35 0 9.26.06 11.84.09 5.33.07 9.54.13 13.67 4.25l47.28 47.29a7.94 7.94 0 0011.23-11.24l-44.18-43.48a21.93 21.93 0 00-15.46-6.33H83.59V369A30.14 30.14 0 0087 382.9c16.91 22.62 37.33 44.05 44.52 46.77h115c7.14 0 15.91-4 24.27-8 6.87-3.33 59.31-38.81 94.36-62.95.24-.16.48-.32.73-.46a9.49 9.49 0 003.22-13 9.47 9.47 0 00-12.79-3.34l-64.07 42.48a14.15 14.15 0 11-15.64-23.58l64.4-42.73.52-.33a37.77 37.77 0 0139.39 64.46c-15.12 10.41-86.6 59.5-97.77 64.9S259.62 458 246.49 458H130.67z"
                />
                <path
                  className="lineal-fill"
                  d="M14.15 288.21h73.13v141.2H14.15z"
                />
                <path
                  className="lineal-stroke"
                  d="M87.28 443.56H14.15A14.16 14.16 0 010 429.41v-141.2a14.15 14.15 0 0114.15-14.15h73.13a14.14 14.14 0 0114.15 14.15v141.2a14.15 14.15 0 01-14.15 14.15zm-59-28.31h44.85V302.36H28.3zm414.28-244.46h-86.45a50.09 50.09 0 01-35.32-14.46l-44.27-43.56a36.25 36.25 0 1151.19-51.35L371 104.69l9.66.07a14.15 14.15 0 01-.07 28.3h-.08c-5.34 0-9.25-.06-11.84-.09-5.33-.07-9.54-.12-13.66-4.25l-47.32-47.28a7.94 7.94 0 00-11.23 11.23l44.18 43.48a21.93 21.93 0 0015.46 6.33h72.3V88.94a30.13 30.13 0 00-3.4-13.87C408.11 52.45 387.69 31 380.5 28.3h-115c-7.14 0-15.91 4-24.28 8-6.86 3.33-59.3 38.82-94.35 63-.24.16-.48.32-.73.47a9.47 9.47 0 009.56 16.34l64.09-42.51a14.15 14.15 0 0115.64 23.59l-64.38 42.7-.52.32a37.77 37.77 0 01-39.39-64.46c15.11-10.4 86.6-59.49 97.77-64.9C240.23 5.37 252.38 0 265.51 0h115.81c8.1 0 19.72 3.73 44.41 31.37C437.94 45 447.93 58.44 448.35 59a14.32 14.32 0 011 1.56 58.57 58.57 0 017.35 28.37v67.69a14.16 14.16 0 01-14.14 14.17z"
                />
                <path
                  className="lineal-fill"
                  d="M424.72 28.56h73.13v141.2h-73.13z"
                />
                <path
                  className="lineal-stroke"
                  d="M497.85 183.92h-73.13a14.15 14.15 0 01-14.15-14.16V28.56a14.15 14.15 0 0114.15-14.15h73.13A14.16 14.16 0 01512 28.56v141.2a14.16 14.16 0 01-14.15 14.16zm-59-28.31h44.85V42.72h-44.83z"
                />
              </svg>
            </div>
            <div>
              <h4 className="!text-[1rem] !tracking-[-0.03em]">Our Values</h4>
              <p className="!mb-2">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Praesent commodo cursus magna scelerisque.
              </p>
            </div>
          </div>
        </div>
        {/*/column */}
      </div>
    </>
  );
}
