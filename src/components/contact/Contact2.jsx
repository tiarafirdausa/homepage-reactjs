import React from "react";
import Counter from "../common/Counter";

export default function Contact2() {
  return (
    <section className="wrapper !bg-[#ffffff] angled upper-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-0 before:border-solid before:right-0 after:content-[''] after:block after:absolute after:z-0 after:border-y-transparent after:border-[#fefefe] after:border-0 after:border-solid after:right-0">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] !mt-[-50px] xl:mx-[-35px] lg:mx-[-20px] !mb-24 items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative">
            <div
              className="shape bg-dot primary rellax !w-[8rem] !h-[8rem] absolute opacity-50 bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]"
              data-rellax-speed={1}
              style={{ top: 0, left: "-1.4rem", zIndex: 0 }}
            />
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full">
                <figure className="rounded-[0.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative">
                  <img
                    className="!rounded-[0.4rem]"
                    srcSet="/assets/img/photos/g5@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g5.jpg"
                    width={350}
                    height={350}
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                  <div className="w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="!rounded-[0.4rem]"
                        srcSet="/assets/img/photos/g6@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/g6.jpg"
                        width={375}
                        height={250}
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
                    <div className="card !bg-[#e0e9fa] !text-center counter-wrapper">
                      <div className="card-body !py-12">
                        <h3 className="counter !whitespace-nowrap xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                          <Counter max={5000} />+
                        </h3>
                        <p className="!mb-0 text-[0.8rem] font-medium">
                          Satisfied Customers
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-8">
              Convinced yet? Let's make something great together.
            </h2>
            <div className="flex flex-row">
              <div>
                <div className="icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-6 !mt-[-0.25rem]">
                  <i className="uil uil-location-pin-alt before:content-['\ebd8']" />
                </div>
              </div>
              <div>
                <h5 className="!mb-1">Address</h5>
                <address className="not-italic !leading-[inherit] !mb-4">
                  Moonshine St. 14/05 Light City,
                  <br className="hidden xl:block lg:block md:block" />
                  London, United Kingdom
                </address>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-6 !mt-[-0.25rem]">
                  <i className="uil uil-phone-volume before:content-['\ec50']" />
                </div>
              </div>
              <div>
                <h5 className="!mb-1">Phone</h5>
                <p>00 (123) 456 78 90</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-6 !mt-[-0.25rem]">
                  <i className="uil uil-envelope before:content-['\eac8']" />
                </div>
              </div>
              <div>
                <h5 className="!mb-1">E-mail</h5>
                <p className="!mb-0">
                  <a
                    href="mailto:sandbox@email.com"
                    className="!text-[#60697b]"
                  >
                    sandbox@email.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-8/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center">
              Drop Us a Line
            </h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !text-center !mb-10">
              Reach out to us from our contact form and we will get back to you
              shortly.
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
                      className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      placeholder=""
                      required
                    />
                    <label
                      htmlFor="form_name"
                      className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      First Name *
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please enter your first name.
                    </div>
                  </div>
                </div>
                {/* /column */}
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <input
                      id="form_lastname"
                      type="text"
                      name="surname"
                      className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      placeholder=""
                      required
                    />
                    <label
                      htmlFor="form_lastname"
                      className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      Last Name *
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please enter your last name.
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
                      className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
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
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                  <div className="form-select-wrapper !mb-4">
                    <select
                      className="form-select"
                      id="form-select"
                      name="department"
                      required
                    >
                      <option disabled>Select a department</option>
                      <option value="Sales">Sales</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Customer Support">Customer Support</option>
                    </select>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please select a department.
                    </div>
                  </div>
                </div>
                {/* /column */}
                <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <textarea
                      id="form_message"
                      name="message"
                      className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
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
                    className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                    defaultValue="Send message"
                  />
                  <p className="!text-[#aab0bc]">
                    <strong>*</strong> These fields are required.
                  </p>
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
    </section>
  );
}
