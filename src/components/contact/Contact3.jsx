import React from "react";

export default function Contact3() {
  return (
    <>
      <section className="wrapper !bg-[#ffffff]">
        <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="col flex-[0_0_auto] max-w-full !px-[15px] relative z-[3] !mt-[-9rem] !mb-24">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="flex flex-wrap mx-0">
                  <div
                    className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full image-wrapper bg-image rounded-t-[0.4rem] rounded-lg-start hidden xl:block lg:block md:block bg-cover bg-[center_center] bg-no-repeat !bg-scroll md:min-h-[25rem]"
                    style={{
                      backgroundImage: "url(/assets/img/photos/tm1.jpg)",
                    }}
                  />
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                    <div className="p-10 md:!p-12 xl:!p-[4rem] lg:!p-[4rem]">
                      <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                        Let’s Talk
                      </h2>
                      <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                        Let's make something great together. We are trusted by
                        over 5000+ clients. Join them by using our services and
                        grow your business.
                      </p>
                      <p>
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                        venenatis vestibulum. Maecenas faucibus mollis interdum.
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet
                        risus.
                      </p>
                      <a
                        href="#"
                        className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                      >
                        Join Us
                      </a>
                    </div>
                    {/*/div */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/* /.card */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <div className="flex flex-wrap mx-[-15px] !mt-[-50px] xl:mx-[-35px] lg:mx-[-20px]">
                <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
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
                            <option value="Customer Support">
                              Customer Support
                            </option>
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
                      <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                        <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="invalidCheck"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="invalidCheck"
                          >
                            I agree to
                            <a href="#" className="hover">
                              terms and policy
                            </a>
                            .
                          </label>
                          <div className="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                      </div>
                      {/* /column */}
                      <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
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
                {/*/column */}
                <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                  <div className="flex flex-row">
                    <div>
                      <div className="icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                        <i className="uil uil-location-pin-alt before:content-['\ebd8']" />
                      </div>
                    </div>
                    <div>
                      <h5 className="!mb-1">Address</h5>
                      <address className="not-italic !leading-[inherit] !mb-4">
                        Moonshine St. 14/05 Light City, London, United Kingdom
                      </address>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <div className="icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                        <i className="uil uil-phone-volume before:content-['\ec50']" />
                      </div>
                    </div>
                    <div>
                      <h5 className="!mb-1">Phone</h5>
                      <p>
                        00 (123) 456 78 90 <br />
                        00 (987) 654 32 10
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <div className="icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
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
                      <p>
                        <a
                          href="mailto:help@sandbox.com"
                          className="!text-[#60697b]"
                        >
                          help@sandbox.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /section */}
      <div className="wrapper !bg-[#ffffff]">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str"
            style={{ width: "100%", height: 500, border: 0 }}
            allowFullScreen=""
          />
        </div>
        {/* /.map */}
      </div>
    </>
  );
}
