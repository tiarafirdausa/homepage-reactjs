import React from "react";

export default function Faqs() {
  return (
    <div className="card !bg-[#eff7fa] !rounded-[0.8rem]">
      <div className="card-body md:!p-10 lg:!p-10 xl:!p-12 p-[40px]">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] font-DMSerif !font-normal tracking-normal !mb-4 [word-spacing:normal!important]">
              Frequently Asked Questions
            </h3>
            <p className="lead text-[1.05rem] !leading-[1.6] font-medium !mb-0">
              If you don't see an answer to your question, you can send us an
              email from our contact form.
            </p>
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            {/* /.accordion */}
            <div className="accordion accordion-wrapper" id="accordionExample">
              <div className="card plain accordion-item">
                <div
                  className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                  id="headingOne"
                >
                  <button
                    className="before:!text-[#54a8c7] hover:!text-[#54a8c7] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    How do I get my subscription receipt?
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                <div
                  className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                  id="headingTwo"
                >
                  <button
                    className="before:!text-[#54a8c7] hover:!text-[#54a8c7] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Are there any discounts for people in need?
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                <div
                  className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                  id="headingThree"
                >
                  <button
                    className="before:!text-[#54a8c7] hover:!text-[#54a8c7] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Do you offer a free trial edit?
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                <div
                  className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                  id="headingFour"
                >
                  <button
                    className="before:!text-[#54a8c7] hover:!text-[#54a8c7] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How do I reset my Account password?
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
            </div>
            {/*/.accordion */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/*/.card-body */}
    </div>
  );
}
