import React from "react";

export default function Faqs() {
  return (
    <section className="wrapper !bg-[#edf2fc]">
      <div className="container py-[4.5rem] xl:!py-28 lg:!py-28 md:!py-28">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-11/12 xl:w-11/12 xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !tracking-[0.02rem] !leading-[1.35] !mb-3">
              FAQ
            </h2>
            <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] !font-DMSerif !font-normal !tracking-normal [word-spacing:normal!important] !mb-10 lg:!px-14 xl:!px-10 xxl:!px-20">
              If you don't see an answer to your question, you can send us an
              email from our contact form.
            </h3>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div id="accordion-3" className="accordion-wrapper">
              <div className="card accordion-item !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 bg-inherit"
                  id="accordion-heading-3-1"
                >
                  <button
                    className="before:!text-[#3f78e0] hover:!text-[#3f78e0] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-3-1"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-3-1"
                  >
                    How do I get my subscription receipt?
                  </button>
                </div>
                {/* /.card-header */}
                <div
                  id="accordion-collapse-3-1"
                  className="collapse"
                  aria-labelledby="accordion-heading-3-1"
                  data-bs-target="#accordion-3"
                >
                  <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Donec sed odio dui. Cras
                      justo odio, dapibus ac facilisis.
                    </p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.collapse */}
              </div>
              {/* /.card */}
              <div className="card accordion-item !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 bg-inherit"
                  id="accordion-heading-3-2"
                >
                  <button
                    className="before:!text-[#3f78e0] hover:!text-[#3f78e0] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-3-2"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-3-2"
                  >
                    Are there any discounts for people in need?
                  </button>
                </div>
                {/* /.card-header */}
                <div
                  id="accordion-collapse-3-2"
                  className="collapse"
                  aria-labelledby="accordion-heading-3-2"
                  data-bs-target="#accordion-3"
                >
                  <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Donec sed odio dui. Cras
                      justo odio, dapibus ac facilisis.
                    </p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.collapse */}
              </div>
              {/* /.card */}
              <div className="card accordion-item !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 bg-inherit"
                  id="accordion-heading-3-3"
                >
                  <button
                    className="before:!text-[#3f78e0] hover:!text-[#3f78e0] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-3-3"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-3-3"
                  >
                    Do you offer a free trial edit?
                  </button>
                </div>
                {/* /.card-header */}
                <div
                  id="accordion-collapse-3-3"
                  className="collapse"
                  aria-labelledby="accordion-heading-3-3"
                  data-bs-target="#accordion-3"
                >
                  <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Donec sed odio dui. Cras
                      justo odio, dapibus ac facilisis.
                    </p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.collapse */}
              </div>
              {/* /.card */}
              <div className="card accordion-item !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 bg-inherit"
                  id="accordion-heading-3-4"
                >
                  <button
                    className="before:!text-[#3f78e0] hover:!text-[#3f78e0] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-3-4"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-3-4"
                  >
                    How do I reset my Account password?
                  </button>
                </div>
                {/* /.card-header */}
                <div
                  id="accordion-collapse-3-4"
                  className="collapse"
                  aria-labelledby="accordion-heading-3-4"
                  data-bs-target="#accordion-3"
                >
                  <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Donec sed odio dui. Cras
                      justo odio, dapibus ac facilisis.
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
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
