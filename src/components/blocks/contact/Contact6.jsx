import React from "react";

export default function Contact6() {
  return (
    <section id="snippet-6" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="card">
              <div className="flex flex-wrap mx-0">
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !self-stretch">
                  <div className="map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str"
                      style={{ width: "100%", height: "100%", border: 0 }}
                      allowFullScreen=""
                    />
                  </div>
                  {/* /.map */}
                </div>
                {/*/column */}
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                  <div className="p-10 xl:!p-[4.5rem] lg:!p-[4.5rem] md:!p-12">
                    <div className="flex flex-row">
                      <div>
                        <div className="icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                          <i className="uil uil-location-pin-alt before:content-['\ebd8']" />
                        </div>
                      </div>
                      <div className="!self-start !justify-start">
                        <h5 className="!mb-1">Address</h5>
                        <address className="not-italic !leading-[inherit] !mb-4">
                          Moonshine St. 14/05 Light City,
                          <br className="hidden xl:block lg:block md:block" />
                          London, United Kingdom
                        </address>
                      </div>
                    </div>
                    {/*/div */}
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
                    {/*/div */}
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
                        <p className="!mb-0">
                          <a
                            href="mailto:help@sandbox.com"
                            className="!text-[#60697b]"
                          >
                            help@sandbox.com
                          </a>
                        </p>
                      </div>
                    </div>
                    {/*/div */}
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
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
