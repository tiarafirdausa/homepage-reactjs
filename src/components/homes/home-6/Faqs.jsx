import ModalVideo from "@/components/common/ModalVideo";
import React, { useState } from "react";

export default function Faqs() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="wrapper !bg-[#eff7fa]">
        <div className="container py-[4.5rem] md:pt-24 lg:pt-0 xl:pt-0 xl:pb-24 lg:pb-24 md:pb-24">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <div
                className="lg:!mt-[-10rem] xl:!mt-[-15rem] !mb-[4.5rem] xl:!mb-[6rem] lg:!mb-[6rem] md:!mb-[6rem] !relative"
                data-cue="slideInUp"
              >
                <a
                  className="btn btn-circle btn-aqua !text-white !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] active:text-white active:bg-[#54a8c7] active:border-[#54a8c7] disabled:text-white disabled:bg-[#54a8c7] disabled:border-[#54a8c7] btn-play ripple !mx-auto !mb-5 !absolute xl:!text-[2.3rem] !text-[calc(1.355rem_+_1.26vw)] w-[3.5rem] h-[3.5rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] before:!bg-[#54a8c7] after:!bg-[#54a8c7] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:content-[''] after:block after:absolute after:z-[-1] after:rounded-[50%] after:inset-0 after:[animation-delay:.5s]"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 3,
                  }}
                  onClick={() => setIsOpen(true)}
                >
                  <i className="icn-caret-right !ml-[0.15rem] !relative z-[2] before:content-['\e900'] !text-[calc(1.355rem_+_1.26vw)]" />
                </a>
                <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]">
                  <img
                    className="!rounded-[.4rem]"
                    srcSet="/assets/img/photos/v1@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/v1.jpg"
                    width={1070}
                    height={650}
                  />
                </figure>
              </div>
              <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35] !text-center">
                FAQ
              </h2>
              <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !mb-10 lg:!px-14 xl:!px-20 !text-center">
                If you don't see an answer to your question, you can send us an
                email from our contact form.
              </h3>
              <div className="flex flex-wrap mx-[-15px]" data-cue="fadeIn">
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-0">
                  <div id="accordion-1" className="accordion-wrapper">
                    <div className="card accordion-item !mb-5">
                      <div
                        className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit"
                        id="accordion-heading-1-1"
                      >
                        <button
                          className="text-[#343f52] !text-[0.9rem] hover:!text-[#54a8c7] before:!text-[#54a8c7] collapsed"
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
                            Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo
                            sit amet risus. Cras mattis consectetur purus sit
                            amet fermentum. Praesent commodo cursus magna, vel
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
                    <div className="card accordion-item !mb-5">
                      <div
                        className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit"
                        id="accordion-heading-1-2"
                      >
                        <button
                          className="text-[#343f52] !text-[0.9rem] hover:!text-[#54a8c7] before:!text-[#54a8c7] collapsed"
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
                            Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo
                            sit amet risus. Cras mattis consectetur purus sit
                            amet fermentum. Praesent commodo cursus magna, vel
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
                    <div className="card accordion-item !mb-5">
                      <div
                        className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit"
                        id="accordion-heading-1-3"
                      >
                        <button
                          className="text-[#343f52] !text-[0.9rem] hover:!text-[#54a8c7] before:!text-[#54a8c7] collapsed"
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
                            Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo
                            sit amet risus. Cras mattis consectetur purus sit
                            amet fermentum. Praesent commodo cursus magna, vel
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
                    <div className="card accordion-item !mb-5">
                      <div
                        className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit"
                        id="accordion-heading-2-1"
                      >
                        <button
                          className="text-[#343f52] !text-[0.9rem] hover:!text-[#54a8c7] before:!text-[#54a8c7] collapsed"
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
                            Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo
                            sit amet risus. Cras mattis consectetur purus sit
                            amet fermentum. Praesent commodo cursus magna, vel
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
                    <div className="card accordion-item !mb-5">
                      <div
                        className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit"
                        id="accordion-heading-2-2"
                      >
                        <button
                          className="text-[#343f52] !text-[0.9rem] hover:!text-[#54a8c7] before:!text-[#54a8c7] collapsed"
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
                            Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo
                            sit amet risus. Cras mattis consectetur purus sit
                            amet fermentum. Praesent commodo cursus magna, vel
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
                    <div className="card accordion-item !mb-5">
                      <div
                        className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit"
                        id="accordion-heading-2-3"
                      >
                        <button
                          className="text-[#343f52] !text-[0.9rem] hover:!text-[#54a8c7] before:!text-[#54a8c7] collapsed"
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
                            Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo
                            sit amet risus. Cras mattis consectetur purus sit
                            amet fermentum. Praesent commodo cursus magna, vel
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
      </section>{" "}
      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={"/assets/media/movie.mp4"}
      />{" "}
    </>
  );
}
