import { socialLinks } from "@/data/socials";
import React from "react";

export default function Footer14() {
  return (
    <footer>
      <div className="container pt-[4.5rem] xl:pt-[8rem] lg:pt-[8rem] md:pt-[8rem] pb-7">
        <div className="card !bg-[#fbf1f4] !mb-8">
          <div className="card-body p-14">
            <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px]">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 395.7"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/email.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] !mb-4"
                >
                  <path
                    className="lineal-stroke"
                    d="M483.6 395.7H53.3C23.9 395.7 0 371.9 0 342.4V53.3C0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3v222.8c0 7.9-6.4 14.2-14.2 14.2s-14.2-6.4-14.2-14.2V53.3c0-13.7-11.1-24.8-24.8-24.8H53.3c-13.7 0-24.8 11.1-24.8 24.8v289.2c0 13.7 11.1 24.8 24.8 24.8h430.3c7.9.2 14.1 6.7 13.8 14.6-.2 7.5-6.3 13.6-13.8 13.8z"
                  />
                  <path
                    className="lineal-fill"
                    d="M497.8 53.3L256 236.4 14.2 53.3c0-21.6 17.5-39.1 39.1-39.1h405.4c21.6 0 39.1 17.5 39.1 39.1z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M256 250.6c-3.1 0-6.1-1-8.6-2.9L5.6 64.6C2.1 61.9 0 57.7 0 53.3 0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3c0 4.4-2.1 8.6-5.6 11.3L264.6 247.7c-2.5 1.9-5.5 2.9-8.6 2.9zM29.3 46.8L256 218.6 482.7 46.8c-2.9-10.9-12.8-18.4-24-18.4H53.3c-11.3.1-21.1 7.6-24 18.4zm454.2 348.7c-3.1 0-6.1-1-8.6-2.9l-99.6-75.4c-6.3-4.7-7.5-13.7-2.7-19.9 4.7-6.3 13.7-7.5 19.9-2.7l99.6 75.4c6.3 4.7 7.5 13.7 2.8 19.9-2.7 3.6-6.9 5.7-11.4 5.6zm-449-4.6c-7.9 0-14.2-6.4-14.2-14.2 0-4.5 2.1-8.7 5.6-11.4l93.5-70.8c6.3-4.7 15.2-3.5 19.9 2.7 4.7 6.3 3.5 15.2-2.7 19.9L43.1 388c-2.5 1.9-5.5 2.9-8.6 2.9z"
                  />
                </svg>
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 xl:!pr-10 lg:!pr-10">
                  If you like what you see, let's work together.
                </h2>
                <p className="lead text-[0.9rem] font-medium !leading-[1.65] xl:!pr-14 lg:!pr-14 !mb-0">
                  I bring rapid solutions to make the life of my clients easier.
                  Have any questions? Reach out to me from this contact form and
                  I will get back to you shortly.
                </p>
              </div>
              {/* /column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <form
                  className="contact-form needs-validation"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="messages" />
                  <div className="flex flex-wrap mx-[-10px]">
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[10px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <input
                          id="frm_name"
                          type="text"
                          name="name"
                          className="form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                          placeholder=""
                          required="required"
                          data-error="First Name is required."
                        />
                        <label
                          htmlFor="frm_name"
                          className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                        >
                          Name *
                        </label>
                        <div className="invalid-feedback">
                          Please enter your name.
                        </div>
                      </div>
                    </div>
                    {/* /column */}
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[10px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <input
                          id="frm_email"
                          type="email"
                          name="email"
                          className="form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                          placeholder=""
                          required="required"
                          data-error="Valid email is required."
                        />
                        <label
                          htmlFor="frm_email"
                          className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
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
                          id="frm_message"
                          name="message"
                          className="form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                          placeholder=""
                          style={{ height: 150 }}
                          required
                          defaultValue={""}
                        />
                        <label
                          htmlFor="frm_message"
                          className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
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
                        className="btn btn-outline-pink !rounded-[50rem] btn-send !mb-3 !text-[#d16b86] !border-[#d16b86] hover:!bg-[#d16b86] hover:!text-white"
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
          {/*/.card-body */}
        </div>
        {/*/.card */}
        <div className="xl:!flex lg:!flex md:!flex items-center justify-between">
          <p className="!mb-2 xl:!mb-0 lg:!mb-0">
            © {new Date().getFullYear()} Sandbox. All rights reserved.
          </p>
          <nav className="nav social social-muted !mb-0 xl:!text-right lg:!text-right md:!text-right">
            {socialLinks.map((elm, i) => (
              <a
                key={i}
                className="m-[0_0_0_.7rem] max-md:m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                href={elm.href}
              >
                <i
                  className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-[${elm.color}] text-[1rem]`}
                />
              </a>
            ))}
          </nav>
          {/* /.social */}
        </div>
      </div>
      {/* /.container */}
    </footer>
  );
}
