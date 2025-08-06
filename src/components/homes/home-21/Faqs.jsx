import React from "react";

export default function Faqs() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-6 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-0 xl:!px-[35px] lg:!px-[20px] !mt-[50px]">
            <h2 className="!text-[0.8rem] uppercase !text-[#5eb9f0] !leading-[1.35] !tracking-[0.02rem] !mb-4">
              FAQ
            </h2>
            <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] !mb-4">
              If you don't see an answer to your question, you can send us an
              email from our contact form.
            </h3>
            <p className="!mb-6">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis
              ornare.
            </p>
            <a
              href="#"
              className="btn btn-sky !text-white !bg-[#5eb9f0] border-[#5eb9f0] hover:text-white hover:!bg-[#5eb9f0] hover:!border-[#5eb9f0] focus:shadow-[rgba(88,167,216,1)] active:text-white active:!bg-[#5eb9f0] active:border-[#5eb9f0] disabled:text-white disabled:!bg-[#5eb9f0] disabled:border-[#5eb9f0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
            >
              All FAQ
            </a>
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <div id="accordion-3" className="accordion-wrapper">
              <div className="card accordion-item !mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="accordion-heading-3-1"
                >
                  <button
                    className="hover:!text-[#5eb9f0] before:!text-[#5eb9f0] collapsed"
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
              <div className="card accordion-item !mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="accordion-heading-3-2"
                >
                  <button
                    className="hover:!text-[#5eb9f0] before:!text-[#5eb9f0] collapsed"
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
              <div className="card accordion-item !mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="accordion-heading-3-3"
                >
                  <button
                    className="hover:!text-[#5eb9f0] before:!text-[#5eb9f0] collapsed"
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
              <div className="card accordion-item !mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="accordion-heading-3-4"
                >
                  <button
                    className="hover:!text-[#5eb9f0] before:!text-[#5eb9f0] collapsed"
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
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
      <div className="overflow-hidden">
        <div className="divider !text-[#343f52] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="currentColor"
              d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
            />
          </svg>
        </div>
      </div>
      {/* /.overflow-hidden */}
    </section>
  );
}
