import React from "react";

export default function Pricing() {
  return (
    <section id="pricing">
      <div
        className="wrapper image-wrapper bg-image bg-overlay bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
        style={{
          backgroundImage: "url(/assets/img/photos/bg36.jpg)",
        }}
      >
        <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <div className="card border-0 !bg-[rgba(255,255,255,.9)]">
                <div className="card-body xl:!py-16 xl:!px-24 lg:!py-16 lg:!px-24 p-[40px]">
                  <h2 className="xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold !mb-3 !text-center">
                    Request Photography Pricing
                  </h2>
                  <p className="lead !text-[1.1rem] !leading-[1.55] font-medium !mb-10">
                    For more information please get in touch using the form
                    below:
                  </p>
                  <form
                    className="contact-form needs-validation"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="messages" />
                    <div className="flex flex-wrap mx-[-10px]">
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control bg-[rgba(255,255,255,.7)] border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-0 focus-visible:!border-0 placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                            placeholder=""
                            required
                          />
                          <label
                            htmlFor="form_name"
                            className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
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
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control bg-[rgba(255,255,255,.7)] border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-0 focus-visible:!border-0 placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                            placeholder=""
                            required
                          />
                          <label
                            htmlFor="form_email"
                            className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
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
                      <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
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
                            htmlFor="form_message"
                            className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
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
                      <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center">
                        <input
                          type="submit"
                          className="btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !rounded-[50rem] btn-send"
                          defaultValue="Send message"
                        />
                      </div>
                      {/* /column */}
                    </div>
                    {/* /.row */}
                  </form>
                  {/* /form */}
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.wrapper */}
    </section>
  );
}
