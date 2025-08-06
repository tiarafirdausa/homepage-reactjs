import React from "react";

export default function Faqs() {
  return (
    <section
      className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 bg-content [background-size:100%] bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.6)]"
      style={{ backgroundImage: "url(/assets/img/photos/bg23.png)" }}
    >
      <div
        className="container py-[4.5rem] md:pt-24 lg:pt-0 xl:pt-0 xl:pb-[7rem] lg:pb-[7rem] md:pb-[7rem] !relative"
        style={{ zIndex: 2 }}
      >
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-11/12 xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="lg:!mt-[-10rem] xl:!mt-[-15rem] !mb-[4.5rem] xl:!mb-[6rem] lg:!mb-[6rem] md:!mb-[6rem] !rounded-[0.8rem]">
              <div
                className="player relative z-[2] rounded-[0.4rem]"
                data-plyr-provider="vimeo"
                data-plyr-embed-id={165101721}
              />
            </div>
            <div className="!relative">
              <img
                className="h-7 absolute hidden xl:block lg:block"
                data-delay={1800}
                style={{ top: "-90%", right: "-3%" }}
                alt="image"
                src="/assets/img/svg/doodle7.svg"
                width={56}
                height={45}
              />
              <img
                className="!h-[4.5rem] absolute hidden xl:block lg:block"
                data-delay={1800}
                style={{ top: "-20%", left: "-12%" }}
                alt="image"
                src="/assets/img/svg/doodle8.svg"
                width={117}
                height={120}
              />
              <h2 className="!text-[0.8rem] uppercase !text-[#aab0bc] !mb-3 !text-center !leading-[1.35]">
                FAQ
              </h2>
              <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:!text-[2rem] !mb-12 lg:!px-8 xl:!px-12 !text-center">
                If you don't see an
                <span className="text-gradient gradient-7">answer</span> to your
                question, you can send us an email from our contact form.
              </h3>
            </div>
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-0">
                <div id="accordion-1" className="accordion-wrapper">
                  <div className="card accordion-item !mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit"
                      id="accordion-heading-1-1"
                    >
                      <button
                        className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-1-1"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-1-1"
                      >
                        Can I cancel my subscription?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-1-1"
                      className="collapse"
                      aria-labelledby="accordion-heading-1-1"
                      data-bs-target="#accordion-1"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit"
                      id="accordion-heading-1-2"
                    >
                      <button
                        className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-1-2"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-1-2"
                      >
                        Which payment methods do you accept?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-1-2"
                      className="collapse"
                      aria-labelledby="accordion-heading-1-2"
                      data-bs-target="#accordion-1"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit"
                      id="accordion-heading-1-3"
                    >
                      <button
                        className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-1-3"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-1-3"
                      >
                        How can I manage my Account?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-1-3"
                      className="collapse"
                      aria-labelledby="accordion-heading-1-3"
                      data-bs-target="#accordion-1"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.accordion-wrapper */}
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                <div id="accordion-2" className="accordion-wrapper">
                  <div className="card accordion-item !mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit"
                      id="accordion-heading-2-1"
                    >
                      <button
                        className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-2-1"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-2-1"
                      >
                        How do I get my subscription receipt?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-2-1"
                      className="collapse"
                      aria-labelledby="accordion-heading-2-1"
                      data-bs-target="#accordion-2"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit"
                      id="accordion-heading-2-2"
                    >
                      <button
                        className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-2-2"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-2-2"
                      >
                        Are there any discounts for people in need?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-2-2"
                      className="collapse"
                      aria-labelledby="accordion-heading-2-2"
                      data-bs-target="#accordion-2"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit"
                      id="accordion-heading-2-3"
                    >
                      <button
                        className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-2-3"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-2-3"
                      >
                        Do you offer a free trial edit?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-2-3"
                      className="collapse"
                      aria-labelledby="accordion-heading-2-3"
                      data-bs-target="#accordion-2"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.accordion-wrapper */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
