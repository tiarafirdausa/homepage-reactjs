import React from "react";

export default function Services() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
        <div className="flex flex-wrap mx-[-15px] items-start !mt-[-50px] !mb-[8rem] xl:!mb-[10rem] lg:!mb-[10rem] md:!mb-[10rem]">
          <div
            className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!sticky lg:!sticky !mt-[50px]"
            style={{ top: "8rem" }}
          >
            <h3 className="!text-[calc(1.345rem_+_1.14vw)] !leading-[1.2] xl:!text-[2.2rem] !mb-5">
              The service I offer is specifically designed to meet your needs.
            </h3>
            <p className="!mb-7">
              Cras mattis consectetur purus sit amet fermentum. Donec
              ullamcorper nulla non metus auctor fringilla. Integer posuere erat
              a ante venenatis dapibus posuere velit aliquet.
            </p>
            <a
              href="#"
              className="btn btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-end"
            >
              More Details
              <i className="uil uil-arrow-up-right !ml-[.3rem] before:content-['\e950']" />
            </a>
          </div>
          {/* /column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto !mt-[50px]">
            <div className="card !bg-[#fdf1f8] !mb-6">
              <div className="card-body flex flex-row p-[40px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 511.9"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/search-2.svg"
                    className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e668b3] text-fuchsia mr-5"
                  >
                    <path
                      className="lineal-stroke"
                      d="M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"
                    />
                    <circle
                      className="lineal-fill"
                      cx="297.1"
                      cy="214.9"
                      r="111.1"
                    />
                    <path
                      className="lineal-stroke"
                      d="M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="!text-[1.05rem] !mb-2">User Research</h3>
                  <p className="!mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    nulla non metus auctor eget lacinia odio sem aget elit.
                  </p>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            <div className="card !bg-[#eff7fa] !mb-6">
              <div className="card-body flex flex-row p-[40px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 507.4 512"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/puzzle-2.svg"
                    className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#54a8c7] text-aqua mr-5"
                  >
                    <path
                      className="lineal-fill"
                      d="M257.9 15.2v65.1c-28.7-15.6-64.7-5-80.3 23.8s-5 64.7 23.8 80.3c17.6 9.6 38.9 9.6 56.6 0v65.1h59.9c-8.4-31.6 10.5-64 42.1-72.4 31.6-8.4 64 10.5 72.4 42.1 2.6 9.9 2.6 20.4 0 30.3h59.9V70.7c0-30.7-24.9-55.5-55.5-55.5H257.9z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M436.7 0h-366C31.7 0 0 31.7 0 70.7v370.6c0 39 31.7 70.7 70.7 70.7h188.1c8.4 0 15.2-6.8 15.2-15.1V453c5.5 1 11.2 1.3 16.8 1 17.5-.9 34.2-7.9 47.1-19.9 30.1-28 31.7-75.1 3.7-105.2-23.2-24.8-60.2-30.8-90-14.6-7.3 4-10.1 13.2-6.1 20.6 4 7.4 13.2 10.1 20.6 6.1 7.4-4 15.7-5.8 24.1-5.2 24.3 1.7 42.6 22.8 40.9 47-1.5 21.8-19.8 39.8-41.7 40.8-8.1.4-16.1-1.4-23.2-5.3-2.2-1.2-4.7-1.8-7.3-1.8-8.4 0-15.2 6.8-15.2 15.2v49.9h-173c-22.3 0-40.3-18.1-40.3-40.3V264.6h28.7c-.5 2.6-.8 5.2-1 7.8-2.9 41 28 76.6 69 79.5 1.8.1 3.6.2 5.3.2 18.8.1 37-7.1 50.7-20 24.8-23.2 30.8-60.1 14.6-89.9-.1-.2-.2-.3-.3-.5-4.1-7.3-13.4-9.9-20.7-5.7-7.3 4.1-9.9 13.4-5.7 20.7 4 7.4 5.8 15.8 5.2 24.2-1.7 24.3-22.8 42.5-47.1 40.8-21.8-1.5-39.8-19.8-40.8-41.7-.4-8.1 1.4-16.1 5.2-23.3 1.2-2.2 1.9-4.7 1.9-7.3 0-8.4-6.8-15.2-15.2-15.2H30.4V70.7c0-22.3 18.1-40.3 40.3-40.3h172v28.7c-8.7-1.6-17.6-1.6-26.2 0-40.5 7.2-67.4 45.9-60.1 86.4s45.9 67.4 86.4 60.1v43.9c0 8.4 6.8 15.2 15.2 15.2h59.9c1.6 0 3.2-.3 4.7-.7 8-2.6 12.3-11.2 9.7-19.2-.6-2.5-1-5.1-1.2-7.7-1.5-24.3 16.9-45.2 41.2-46.7.9-.1 1.8-.1 2.7-.1 3.8 0 7.6.5 11.3 1.5 23.5 6.2 37.5 30.4 31.3 53.9-.3 1.3-.5 2.6-.5 3.9 0 8.4 6.8 15.2 15.2 15.2h59.9c8.4 0 15.2-6.8 15.2-15.2V70.7c-.1-39-31.7-70.7-70.7-70.7zM477 234.2h-27.5c0-41.1-33.3-74.4-74.4-74.4-1.5 0-3 0-4.6.1-36 2.2-65.9 30.9-69.5 66.8-.2 2.5-.4 5-.4 7.5h-27.5v-49.9c0-2.5-.6-5-1.8-7.3-4-7.4-13.2-10.1-20.6-6.1-7.4 4-15.7 5.8-24.1 5.2-24.3-1.7-42.6-22.8-40.9-47 1.5-21.8 19.8-39.8 41.7-40.8 8.1-.4 16.1 1.4 23.2 5.3 2.2 1.2 4.7 1.8 7.3 1.8 8.4 0 15.2-6.8 15.2-15.2V30.4h163.6c22.3 0 40.3 18.1 40.3 40.3v163.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="!text-[1.05rem] !mb-2">
                    Strategy &amp; Planning
                  </h3>
                  <p className="!mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    nulla non metus auctor eget lacinia odio sem aget elit.
                  </p>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            <div className="card !bg-[#fff8ee] !mb-6">
              <div className="card-body flex flex-row p-[40px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 327.4 512"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/smartphone.svg"
                    className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow mr-5"
                  >
                    <path
                      className="lineal-fill"
                      d="M313.7 72.3V47c0-18.4-14.9-33.2-33.2-33.2H47c-18.4 0-33.2 14.9-33.2 33.2v25.3h299.9zM13.8 398.4V465c0 18.4 14.9 33.2 33.2 33.2h233.4c18.4 0 33.2-14.9 33.2-33.2v-66.6H13.8z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M280.4 0H47C21.1 0 0 21.1 0 47v418c0 25.9 21.1 47 47 47h233.4c25.9 0 47-21.1 47-47V352.3c0-7.6-6.2-13.8-13.8-13.7-7.6 0-13.7 6.2-13.7 13.7v32.3H27.5V86.1h272.4V256c0 7.6 6.1 13.8 13.7 13.8s13.8-6.1 13.8-13.7V47c0-25.9-21-47-47-47zm19.5 412.1V465c0 10.8-8.7 19.5-19.5 19.5H47c-10.8 0-19.5-8.7-19.5-19.5v-52.9h272.4zM27.5 58.6V47c0-10.8 8.7-19.5 19.5-19.5h233.4c10.8 0 19.5 8.7 19.5 19.5v11.6H27.5z"
                    />
                    <circle cx="163.7" cy="448.3" r="9.4" />
                    <path
                      className="lineal-stroke"
                      d="M163.7 471.5c-12.8 0-23.2-10.4-23.2-23.2 0-12.8 10.4-23.2 23.2-23.2s23.2 10.4 23.2 23.2-10.4 23.2-23.2 23.2zm-25.4-248.1H69.5c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.8 6.2 13.8 13.8s-6.2 13.8-13.8 13.8h-55v32.1h55c7.6 0 13.8 6.2 13.8 13.8-.1 7.5-6.2 13.7-13.8 13.7z"
                    />
                    <path
                      className="lineal-fill"
                      d="M189.2 150H258v59.6h-68.8z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M258 223.4h-68.8c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.6-6.1 13.8-13.7 13.8zm-55-27.5h41.3v-32.1h-41.4l.1 32.1z"
                    />
                    <path
                      className="lineal-fill"
                      d="M69.5 265.6h68.8v59.6H69.5z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M138.3 339H69.5c-7.6 0-13.8-6.2-13.8-13.8v-59.7c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.7-6.1 13.9-13.7 13.9zm-55-27.5h41.2v-32.1H83.2l.1 32.1zM258 339h-68.8c-7.6 0-13.8-6.2-13.7-13.8 0-7.6 6.2-13.7 13.7-13.7h55v-32.1h-55c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.8 6.2 13.8 13.8v59.6c0 7.6-6.2 13.8-13.8 13.8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="!text-[1.05rem] !mb-2">App Design</h3>
                  <p className="!mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    nulla non metus auctor eget lacinia odio sem aget elit.
                  </p>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            <div className="card !bg-[#f3f8f5] !mb-6">
              <div className="card-body flex flex-row p-[40px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 409.6 332.7"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/design.svg"
                    className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#7cb798] text-leaf mr-5"
                  >
                    <path
                      className="lineal-stroke"
                      d="M350.9 54.2H58.7c-6.2.2-11.4-4.7-11.5-10.9S51.8 31.9 58 31.7h292.9c6.2-.2 11.4 4.7 11.5 10.9s-4.7 11.4-10.9 11.5c-.2.1-.4.1-.6.1zM239.8 328.9a11.182 11.182 0 01-10.6-14.8c2.8-8.3 16.2-47.4 25.6-63.6-9.5-10.1-37-40.3-49.9-66.1-12.1 23.4-39.5 54.4-50.1 66 10.1 16.5 22.7 54.9 25.4 63.6.4 1.2.6 2.4.6 3.7 0 6.2-5 11.2-11.2 11.2-4.9 0-9.3-3.2-10.7-7.9v-.1c-6.6-20.7-18.4-52.9-24.3-60.3-4.8-6.1-3.4-14.5-.8-19.8.5-.9 1.1-1.8 1.8-2.6 20.6-22.3 50.7-59.4 52.7-72.4.6-3.7 3.3-10.1 14.8-10.7 12.5-.7 16.6 4.8 17.8 9.4 5.7 21.5 40 60.3 52.7 73.4.8.8 1.5 1.8 2 2.8 2.6 5.1 4 13.3-.5 19.5-5.7 7.7-18.2 41.6-24.8 61.1-1.3 4.6-5.6 7.7-10.5 7.6z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M204.8 254.9c-6.2 0-11.2-5-11.2-11.2V167c.3-6.2 5.6-10.9 11.8-10.6 5.7.3 10.3 4.9 10.6 10.6v76.7c0 6.2-5 11.2-11.2 11.2z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M366.6 244.6c-6.2 0-11.2-5-11.2-11.2v-28.6c0-83.1-67.6-150.6-150.6-150.6S54.2 121.7 54.2 204.8v28.6c-.2 6.2-5.4 11.1-11.5 10.9-5.9-.2-10.7-4.9-10.9-10.9v-28.6c-.1-95.5 77.2-172.9 172.7-173 46 0 90.1 18.2 122.6 50.8 32.6 32.3 50.9 76.3 50.9 122.2v28.6c-.1 6.2-5.2 11.2-11.4 11.2z"
                    />
                    <path
                      className="lineal-fill"
                      d="M220 74.7h-30.4c-9.1 0-16.5-7.4-16.5-16.5V27.7c0-9.1 7.4-16.5 16.5-16.5H220c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M220 85.9h-30.4c-15.3 0-27.7-12.4-27.7-27.7V27.7c0-15.3 12.4-27.7 27.7-27.7H220c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.4-63.5c-2.9 0-5.3 2.4-5.3 5.3v30.5c0 2.9 2.4 5.3 5.3 5.3H220c2.9 0 5.3-2.4 5.3-5.3V27.7c0-2.9-2.4-5.3-5.3-5.3h-30.4z"
                    />
                    <path
                      className="lineal-fill"
                      d="M381.9 275.4h-30.5c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M381.9 286.6h-30.5c-15.3 0-27.7-12.4-27.7-27.7v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3h-30.5z"
                    />
                    <path
                      className="lineal-fill"
                      d="M58.2 275.4H27.7c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5V259c0 9.1-7.4 16.5-16.5 16.4z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M58.2 286.6H27.7C12.4 286.6 0 274.2 0 258.9v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3H27.7zm234.1 109.5h-114c-6.2 0-11.2-5-11.2-11.2 0-6.2 5-11.2 11.2-11.2h114c6.2 0 11.2 5 11.2 11.2 0 6.2-5 11.2-11.2 11.2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="!text-[1.05rem] !mb-2">Brand Design</h3>
                  <p className="!mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    nulla non metus auctor eget lacinia odio sem aget elit.
                  </p>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            <div className="card !bg-[#fef4f2] !mb-6">
              <div className="card-body flex flex-row p-[40px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 409.6 332"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/video-editing.svg"
                    className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#f78b77] text-orange mr-5"
                  >
                    <path
                      className="lineal-stroke"
                      d="M318 0H53.9C24.2.1.1 24.2 0 53.9v210.8c0 29.8 24.2 53.9 53.9 53.9H318c29.8 0 54-24.1 54-53.9V53.9C371.9 24.1 347.8 0 318 0zm31.3 264.7c0 17.3-14 31.3-31.3 31.3H54c-17.3 0-31.3-14-31.3-31.3V53.9c0-17.3 13.9-31.3 31.2-31.3H318c17.3 0 31.3 14 31.3 31.3v210.8z"
                    />
                    <path
                      className="lineal-fill"
                      d="M152.5 189.9v-65.7c0-3.8 3-6.8 6.8-6.8 1.2 0 2.3.3 3.3.9l57.9 32.8c3.3 1.9 4.4 6 2.6 9.3-.6 1.1-1.5 1.9-2.6 2.6l-57.9 32.8c-3.3 1.9-7.4.7-9.3-2.6-.5-1-.8-2.1-.8-3.3z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M159.3 208c-10 0-18.1-8.1-18.1-18.1v-65.7c0-10 8.1-18.1 18.1-18.1 3.1 0 6.2.8 8.9 2.3l57.9 32.9c8.7 4.9 11.8 16 6.8 24.7-1.6 2.9-4 5.2-6.8 6.8l-57.9 32.8c-2.7 1.6-5.8 2.4-8.9 2.4zm4.5-76v50.1L208 157l-44.2-25z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M186 261.2c-56.3 0-101.9-45.7-101.9-101.9.2-6.3 5.4-11.2 11.7-11 6 .2 10.8 5 11 11 0 43.8 35.5 79.3 79.3 79.3s79.3-35.5 79.3-79.3S229.8 80 186 80c-6.3-.2-11.2-5.4-11-11.7.2-6 5-10.8 11-11 56.3.6 101.5 46.6 100.9 102.9-.5 55.6-45.4 100.5-100.9 101z"
                    />
                    <path
                      className="lineal-fill"
                      d="M201.7 314.2l-30.6 6.3c-2.2.5-4.3-1-4.8-3.2-.1-.5-.1-1.1 0-1.6l6.3-30.6c.4-1.9 1.3-3.6 2.7-5L362.2 93.2c6.2-6.2 16.3-6.2 22.5 0l8.9 8.9c6.2 6.2 6.2 16.3 0 22.5L206.7 311.5c-1.3 1.4-3.1 2.3-5 2.7z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M401.6 94.1l-8.9-8.9c-10.6-10.6-27.9-10.6-38.5 0l-20.5 20.5c-.8.5-1.6 1.1-2.3 1.9-.5.6-1 1.2-1.4 1.8L167.3 272.2c-3 2.9-5 6.6-5.8 10.7l-6.3 30.6c-.2 1-.3 2.1-.3 3.1 0 8.5 6.9 15.4 15.4 15.4 1 0 2.1-.1 3.1-.4l30.6-6.3c4-.9 7.8-2.9 10.7-5.8l163.8-163.8c.3-.2.5-.4.8-.7s.6-.6.8-.9l21.5-21.5c10.6-10.6 10.6-27.9 0-38.5zM199.1 303.3l-19.4 4 4-19.4L340 131.7l15.4 15.4-156.3 156.2zm186.6-186.6L371.3 131 356 115.7l14.4-14.4c.8-.8 2-1.3 3.2-1.3s2.3.4 3.2 1.3l8.9 8.9c1.8 1.8 1.8 4.7 0 6.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="!text-[1.05rem] !mb-2">Motion Graphic</h3>
                  <p className="!mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    nulla non metus auctor eget lacinia odio sem aget elit.
                  </p>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            <div className="card !bg-[#f0f0f8]">
              <div className="card-body flex flex-row p-[40px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 442.8"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/browser.svg"
                    className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#605dba] text-grape mr-5"
                  >
                    <path
                      className="lineal-stroke"
                      d="M464.2 442.8H47.7C21.4 442.8 0 421.4 0 395.1V47.7C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7c0 7.6-6.2 13.8-13.8 13.9-7.6 0-13.8-6.2-13.9-13.8 0-11.1-9-20-20.1-20.1H47.7c-11.1 0-20 9-20.1 20.1v347.3c0 11.1 9 20.1 20.1 20.1h416.5c11.1 0 20.1-9 20.1-20.1V209.4c0-7.6 6.2-13.8 13.8-13.9 7.6 0 13.8 6.2 13.9 13.8V395c0 26.4-21.4 47.8-47.8 47.8z"
                    />
                    <path
                      className="lineal-fill"
                      d="M13.8 47.7v69.9h484.3V47.7c0-18.7-15.2-33.9-33.9-33.9H47.7C29 13.8 13.8 29 13.8 47.7z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M498.2 131.5H13.8c-7.6 0-13.8-6.2-13.8-13.8v-70C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7v69.9c0 7.7-6.2 13.9-13.8 13.9zM27.7 103.8h456.6v-56c0-11.1-9-20.1-20.1-20.1H47.8c-11.1 0-20 9-20.1 20v56.1z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M294.7 79.6h-26.3c-7.6 0-13.8-6.2-13.8-13.8S260.8 52 268.4 52h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8zm73.4 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8 0 7.6-6.2 13.8-13.8 13.8zm73.3 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8z"
                    />
                    <path
                      className="lineal-fill"
                      d="M112.8 268.5h286.4v63.6H112.8z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M399.2 345.9H112.8c-7.6 0-13.8-6.2-13.8-13.8v-63.7c0-7.6 6.2-13.8 13.8-13.8h286.4c7.6 0 13.8 6.2 13.8 13.8v63.7c.1 7.6-6.1 13.8-13.8 13.8zm-272.6-27.6h258.8v-36H126.6v36zm230.9-95.5h-203c-7.6.2-14-5.8-14.2-13.5s5.8-14 13.5-14.2h203.8c7.6-.2 14 5.8 14.2 13.5s-5.8 14-13.5 14.2h-.8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="!text-[1.05rem] !mb-2">Web Design</h3>
                  <p className="!mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    nulla non metus auctor eget lacinia odio sem aget elit.
                  </p>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
