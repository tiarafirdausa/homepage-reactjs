import React from "react";

export default function About() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-[4.5rem] xl:pt-24 lg:pt-24 md:pt-24 pb-20 xl:pb-28 lg:pb-28 md:pb-28">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="lg:w-9/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
              What We Do?
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] !mb-10 xxl:!px-10">
              The full service we are offering is specifically designed to meet
              your needs.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xxl:w-11/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-60px] !text-center items-end">
              <div className="sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[60px] max-w-full !mx-auto">
                <div className="md:!px-3 lg:!px-0 xl:!px-3">
                  <div className="icon btn btn-block btn-lg btn-soft-purple pointer-events-none !mb-5">
                    <i className="uil uil-monitor before:content-['\ec19']" />
                  </div>
                  <h3 className="!text-[1.1rem]">Web Design</h3>
                  <p className="!mb-2">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget. Fusce dapibus tellus.
                  </p>
                  <a
                    href="#"
                    className="more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]"
                  >
                    Learn More
                  </a>
                </div>
                {/*/.px */}
              </div>
              {/*/column */}
              <div className="sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[60px] max-w-full !mx-auto">
                <div className="md:!px-3 lg:!px-0 xl:!px-3">
                  <div className="icon btn btn-block btn-lg btn-soft-leaf pointer-events-none !mb-5">
                    <i className="uil uil-swatchbook before:content-['\ed16']" />
                  </div>
                  <h3 className="!text-[1.1rem]">Graphic Design</h3>
                  <p className="!mb-2">
                    Maecenas faucibus mollis interdum. Vivamus sagittis lacus
                    vel augue laoreet. Sed posuere consectetur.
                  </p>
                  <a
                    href="#"
                    className="more hover !text-[#7cb798] focus:!text-[#7cb798] hover:!text-[#7cb798]"
                  >
                    Learn More
                  </a>
                </div>
                {/*/.px */}
              </div>
              {/*/column */}
              <div className="sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[60px] max-w-full !mx-auto">
                <div className="md:!px-3 lg:!px-0 xl:!px-3">
                  <div className="icon btn btn-block btn-lg btn-soft-pink pointer-events-none !mb-5">
                    <i className="uil uil-presentation-play before:content-['\ec6b']" />
                  </div>
                  <h3 className="!text-[1.1rem]">3D Animation</h3>
                  <p className="!mb-2">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Praesent commodo cursus magna scelerisque.
                  </p>
                  <a
                    href="#"
                    className="more hover !text-[#d16b86] focus:!text-[#d16b86] hover:!text-[#d16b86]"
                  >
                    Learn More
                  </a>
                </div>
                {/*/.px */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <hr className="dark my-[4.5rem] xl:!my-[7rem] lg:!my-[7rem] md:!my-[7rem]" />
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                srcSet="/assets/img/illustrations/i9@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i9.png"
                width={800}
                height={556}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h3 className="!text-[0.8rem] uppercase !text-[#aab0bc] !tracking-[0.02rem] !mb-3">
              How It Works?
            </h3>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] !mb-6">
              Find out everything about creating a business model.
            </h3>
            <div className="flex flex-wrap mx-[-15px] !mt-[-20px]">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]">
                <h4>
                  <span className="!text-[#3f78e0]">1.</span> Creative Ideas
                </h4>
                <p className="!mb-0">
                  Nulla vitae elit libero a augue donec id elit non mi porta.
                </p>
              </div>
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]">
                <h4>
                  <span className="!text-[#3f78e0]">2.</span> Magic Touch
                </h4>
                <p className="!mb-0">
                  Nulla vitae elit libero a augue donec id elit non mi porta.
                </p>
              </div>
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]">
                <h4>
                  <span className="!text-[#3f78e0]">3.</span> Data Analysis
                </h4>
                <p className="!mb-0">
                  Nulla vitae elit libero a augue donec id elit non mi porta.
                </p>
              </div>
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]">
                <h4>
                  <span className="!text-[#3f78e0]">4.</span> Finalize Product
                </h4>
                <p className="!mb-0">
                  Nulla vitae elit libero a augue donec id elit non mi porta.
                </p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px]">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                srcSet="/assets/img/illustrations/i12@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i12.png"
                width={800}
                height={573}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h3 className="!text-[0.8rem] uppercase !text-[#aab0bc] !tracking-[0.02rem] xxl:!mt-8 !mb-3">
              Why Choose Us?
            </h3>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] !mb-6">
              We bring solutions to make life easier for our clients.
            </h3>
            <div className="accordion accordion-wrapper" id="accordionExample">
              <div className="card plain accordion-item">
                <div
                  className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                  id="headingOne"
                >
                  <button
                    className="accordion-button !text-[0.9rem] hover:!text-[#747ed1] before:!text-[#747ed1]"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Professional Design
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body !p-[0_0_0_1.1rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
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
                    className="collapsed !text-[0.9rem] hover:!text-[#747ed1] before:!text-[#747ed1]"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Top-Notch Support
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body !p-[0_0_0_1.1rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
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
                    className="collapsed !text-[0.9rem] hover:!text-[#747ed1] before:!text-[#747ed1]"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Header and Slider Options
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body !p-[0_0_0_1.1rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
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
      {/* /.container */}
    </section>
  );
}
