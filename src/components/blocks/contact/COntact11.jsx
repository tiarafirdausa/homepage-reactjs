import React from "react";

export default function COntact11() {
  return (
    <section id="snippet-11" className="wrapper !bg-[#ffffff] ">
      <div
        className="wrapper image-wrapper bg-image bg-overlay !mb-14 xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem] bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
        style={{ backgroundImage: "url(/assets/img/photos/bg36.jpg)" }}
      >
        <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <div className="card border-0 !bg-[rgba(255,255,255,.9)] opacity-900">
                <div className="card-body xl:!py-16 xl:!px-24 lg:!py-16 lg:!px-24 p-[40px]">
                  <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-3 !text-center">
                    Request Photography Pricing
                  </h2>
                  <p className="lead text-[1rem] !text-center !mb-10">
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
                            className="form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                            placeholder=""
                            required
                          />
                          <label
                            htmlFor="form_name"
                            className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
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
                            className="form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                            placeholder=""
                            required
                          />
                          <label
                            htmlFor="form_email"
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
                      <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                            placeholder=""
                            style={{ height: 150 }}
                            required
                            defaultValue={""}
                          />
                          <label
                            htmlFor="form_message"
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
                      <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center">
                        <input
                          type="submit"
                          className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-send"
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

      {/* /.container */}
    </section>
  );
}
