import React from "react";

export default function Contact10() {
  return (
    <section id="snippet-10" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-0 lg:pb-0 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-[-20px] !mt-[-50px] items-center">
          <div className="lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] xl:px-0 lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !relative hidden xl:block lg:block !mt-[50px]">
            <div
              className="shape !rounded-[50%] !bg-[#edf2fc] rellax !w-[12.5rem] !h-[12.5rem] absolute z-[1]"
              data-rellax-speed={1}
              style={{ top: "8rem", left: "2rem" }}
            />
            <figure className="xxl:!pl-10 relative z-[2]">
              <img
                srcSet="/assets/img/photos/woman@2x.png 2x"
                alt="image"
                src="/assets/img/photos/woman.png"
                width="368"
                height="620"
              />
            </figure>
          </div>
          {/*/column */}
          <div className="lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] xl:px-0 lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full xl:!ml-[8.33333333%]">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
              Get in Touch
            </h2>
            <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-8 xl:!pr-10">
              Have any questions? Reach out to us from our contact form and we
              will get back to you shortly.
            </p>
            <form
              className="contact-form needs-validation"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="messages" />
              <div className="form-floating relative !mb-4">
                <input
                  id="form_name2"
                  type="text"
                  name="name"
                  className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                  placeholder=""
                  required="required"
                  data-error="Name is required."
                />
                <label
                  htmlFor="form_name2"
                  className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                >
                  Name *
                </label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please enter your name.</div>
              </div>
              <div className="form-floating relative !mb-4">
                <input
                  id="form_email2"
                  type="email"
                  name="email"
                  className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                  placeholder=""
                  required="required"
                  data-error="Valid email is required."
                />
                <label
                  htmlFor="form_email2"
                  className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                >
                  Email *
                </label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please provide a valid email address.
                </div>
              </div>
              <div className="form-floating relative !mb-4">
                <textarea
                  id="form_message2"
                  name="message"
                  className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                  placeholder=""
                  style={{ height: 150 }}
                  required
                  defaultValue={""}
                />
                <label
                  htmlFor="form_message2"
                  className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                >
                  Message *
                </label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please enter your messsage.
                </div>
              </div>
              <input
                type="submit"
                className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                defaultValue="Send message"
              />
              <p className="!text-[#aab0bc]">
                <strong>*</strong> These fields are required.
              </p>
            </form>
            {/* /form */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
