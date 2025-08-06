import React from "react";

export default function Newsletter() {
  return (
    <div className="modal fade modal-popup" id="modal-02" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content !text-center">
          <div className="relative flex-auto pt-[2.5rem] pr-[2.5rem] pb-[2.5rem] !pl-[2.5rem]">
            <button
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%]">
                <figure className="!mb-6">
                  <img
                    srcSet="/assets/img/illustrations/i7@2x.png 2x"
                    alt="image"
                    src="/assets/img/illustrations/i7.png"
                    width={800}
                    height={621}
                  />
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
            <h3>Join the mailing list and get %10 off</h3>
            <p className="!mb-6">
              Nullam quis risus eget urna mollis ornare vel eu leo. Donec
              ullamcorper nulla non metus auctor fringilla.
            </p>
            <div className="newsletter-wrapper">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%]">
                  {/* Begin Mailchimp Signup Form */}
                  <div id="mc_embed_signup">
                    <form
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div id="mc_embed_signup_scroll">
                        <div className="!text-left input-group !relative form-floating">
                          <input
                            type="email"
                            defaultValue=""
                            name="EMAIL"
                            className="required email form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                            placeholder=""
                            id="mce-EMAIL"
                          />
                          <label
                            htmlFor="mce-EMAIL"
                            className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                          >
                            Email Address
                          </label>
                          <input
                            type="submit"
                            defaultValue="Join"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="btn btn-orange !text-white !bg-[#f78b77] border-[#f78b77] hover:text-white hover:bg-[#f78b77] hover:!border-[#f78b77] hover:!translate-none active:text-white active:bg-[#f78b77] active:border-[#f78b77] disabled:text-white disabled:bg-[#f78b77] disabled:border-[#f78b77]"
                          />
                        </div>
                        <div id="mce-responses" className="clear">
                          <div
                            className="response"
                            id="mce-error-response"
                            style={{ display: "none" }}
                          />
                          <div
                            className="response"
                            id="mce-success-response"
                            style={{ display: "none" }}
                          />
                        </div>
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div
                          style={{
                            position: "absolute",
                            left: "-5000px",
                          }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                            tabIndex={-1}
                            defaultValue=""
                          />
                        </div>
                        <div className="clear" />
                      </div>
                    </form>
                  </div>
                  {/*End mc_embed_signup*/}
                </div>
                {/* /.newsletter-wrapper */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/*/.modal-body */}
        </div>
        {/*/.modal-content */}
      </div>
      {/*/.modal-dialog */}
    </div>
  );
}
