import React from "react";

export default function Contact() {
  return (
    <section className="wrapper bg-gradient-blend">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 245.34"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/email-2.svg"
              className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-aqua !mb-3"
            >
              <path
                className="fill-primary"
                d="M170.67 106.67H85.34a10.67 10.67 0 010-21.34h85.33a10.67 10.67 0 110 21.34zM128 64H85.33a10.67 10.67 0 010-21.34H128A10.67 10.67 0 01128 64z"
              />
              <path
                className="fill-secondary"
                d="M224 32v84.91l-21.33 11.2V32A10.7 10.7 0 00192 21.33H64A10.7 10.7 0 0053.33 32v96.11L32 116.91V32A32.09 32.09 0 0164 0h128a32.09 32.09 0 0132 32z"
              />
              <path
                className="fill-secondary"
                d="M53.33 128.11V144A10.67 10.67 0 1132 144v-27.09zM224 116.91V144a10.67 10.67 0 11-21.34 0v-15.89z"
              />
              <path
                className="fill-primary"
                d="M256 98v115.34a32.09 32.09 0 01-32 32H32a32.09 32.09 0 01-32-32V98a32.18 32.18 0 0116.64-28.13L32 61.55v24.32l-5.12 2.77A10.61 10.61 0 0021.33 98v13.33L32 116.91l21.33 11.2 68.48 35.73a13.89 13.89 0 0012.48-.11l68.37-35.63L224 116.91l10.67-5.55V98a10.6 10.6 0 00-5.55-9.39L224 85.87V61.55l15.36 8.32A32.18 32.18 0 01256 98z"
              />
            </svg>
            <h2 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:!text-[2rem] !mb-3 xl:!pr-[4.5rem] xxl:!pr-24">
              If you like what you see, <em>let's work</em> together.
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal xxl:!pr-14 !mb-0">
              Have any questions? Reach out to me from this contact form and I
              will get back to you shortly.
            </p>
          </div>
          {/* /column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px]">
            <form
              className="contact-form needs-validation"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="messages" />
              <div className="flex flex-wrap mx-[-10px]">
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[10px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control bg-[rgba(255,255,255,.7)] border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-0 focus-visible:!border-0 placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      placeholder=""
                      required="required"
                      data-error="First Name is required."
                    />
                    <label
                      className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                      htmlFor="form_name"
                    >
                      Name *
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please enter your name.
                    </div>
                  </div>
                </div>
                {/* /column */}
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[10px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control bg-[rgba(255,255,255,.7)] border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-0 focus-visible:!border-0 placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      placeholder=""
                      required="required"
                      data-error="Valid email is required."
                    />
                    <label
                      className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                      htmlFor="form_email"
                    >
                      Email *
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please provide a valid email address.
                    </div>
                  </div>
                </div>
                {/* /column */}
                <div className="w-full flex-[0_0_auto] px-[10px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <textarea
                      id="form_message"
                      name="message"
                      className="form-control bg-[rgba(255,255,255,.7)] border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-0 focus-visible:!border-0 placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      placeholder=""
                      style={{ height: 150 }}
                      required
                      defaultValue={""}
                    />
                    <label
                      className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                      htmlFor="form_message"
                    >
                      Message *
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please enter your messsage.
                    </div>
                  </div>
                </div>
                {/* /column */}
                <div className="w-full flex-[0_0_auto] px-[10px] max-w-full">
                  <input
                    type="submit"
                    className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                    defaultValue="Send message"
                  />
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </form>
            {/* /form */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <div className="overflow-hidden">
        <div className="divider !text-[#fefefe] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
            <path
              fill="currentColor"
              d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
            />
          </svg>
        </div>
      </div>
      {/* /.overflow-hidden */}
    </section>
  );
}
