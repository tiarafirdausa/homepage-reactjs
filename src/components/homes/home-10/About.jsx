import React from "react";

export default function About() {
  return (
    <>
      {" "}
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[2.5rem] xl:!mb-[3.5rem] lg:!mb-[3.5rem] md:!mb-[3.5rem] items-center">
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
          <div className="flex flex-wrap mx-[-12.5px] !mt-[-25px] items-center">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]">
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                <div className="xl:w-10/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[16.66666667%] md:w-10/12 md:!ml-[16.66666667%] w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]">
                  <figure className="rounded-[0.4rem]">
                    <img
                      className="!rounded-[0.4rem]"
                      srcSet="/assets/img/photos/ab1@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/ab1.jpg"
                      width={240}
                      height={245}
                    />
                  </figure>
                </div>
                {/*/column */}
                <div className="w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]">
                  <figure className="rounded-[0.4rem]">
                    <img
                      className="!rounded-[0.4rem]"
                      srcSet="/assets/img/photos/ab2@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/ab2.jpg"
                      width={290}
                      height={225}
                    />
                  </figure>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]">
              <figure className="rounded-[0.4rem]">
                <img
                  className="!rounded-[0.4rem]"
                  srcSet="/assets/img/photos/ab3@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/ab3.jpg"
                  width={290}
                  height={440}
                />
              </figure>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
          <h2 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !mb-3">
            Who Are We?
          </h2>
          <p className="lead !text-[1.1rem] !leading-[1.55] font-medium">
            We are a digital and branding company that believes in the power of
            creative strategy and along with great design.
          </p>
          <p className="!mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </p>
          <div className="flex flex-wrap mx-[-15px] !mt-[-15px] xl:mx-[-20px]">
            <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
              <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                <li className="relative !pl-6">
                  <span>
                    <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#feeae7] !text-[#f78b77] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                  </span>
                  <span>
                    Aenean eu leo quam ornare curabitur blandit tempus.
                  </span>
                </li>
                <li className="relative !pl-6 !mt-3">
                  <span>
                    <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#feeae7] !text-[#f78b77] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                  </span>
                  <span>
                    Nullam quis risus eget urna mollis ornare donec elit.
                  </span>
                </li>
              </ul>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
              <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                <li className="relative !pl-6">
                  <span>
                    <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#feeae7] !text-[#f78b77] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                  </span>
                  <span>Etiam porta sem malesuada magna mollis euismod.</span>
                </li>
                <li className="relative !pl-6 !mt-3">
                  <span>
                    <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#feeae7] !text-[#f78b77] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                  </span>
                  <span>Fermentum massa vivamus faucibus amet euismod.</span>
                </li>
              </ul>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full">
          <div className="flex flex-row">
            <div>
              <div className="icon btn btn-circle pointer-events-none btn-soft-orange !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-base !leading-none !p-0 !rounded-[100%]">
                <span className="number text-[0.9rem]">1</span>
              </div>
            </div>
            <div>
              <h4 className="!text-[1rem] !leading-[1.45]">Our Vision</h4>
              <p className="!mb-2">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget. Fusce dapibus tellus.
              </p>
            </div>
          </div>
        </div>
        {/*/column */}
        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full">
          <div className="flex flex-row">
            <div>
              <div className="icon btn btn-circle pointer-events-none btn-soft-orange !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-base !leading-none !p-0 !rounded-[100%]">
                <span className="number text-[0.9rem]">2</span>
              </div>
            </div>
            <div>
              <h4 className="!text-[1rem] !leading-[1.45]">Our Mission</h4>
              <p className="!mb-2">
                Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel
                augue laoreet. Sed posuere consectetur.
              </p>
            </div>
          </div>
        </div>
        {/*/column */}
        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full">
          <div className="flex flex-row">
            <div>
              <div className="icon btn btn-circle pointer-events-none btn-soft-orange !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-base !leading-none !p-0 !rounded-[100%]">
                <span className="number text-[0.9rem]">3</span>
              </div>
            </div>
            <div>
              <h4 className="!text-[1rem] !leading-[1.45]">Our Values</h4>
              <p className="!mb-2">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Praesent commodo cursus magna scelerisque.
              </p>
            </div>
          </div>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
      <div className="flex flex-wrap mx-[-15px] !mt-[-50px] xl:mx-[-35px] lg:mx-[-20px] !mb-[2.5rem] xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem] items-center">
        <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
              <figure className="!rounded-[.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative">
                <img
                  className="!rounded-[.4rem]"
                  srcSet="/assets/img/photos/g5@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/g5.jpg"
                  width={350}
                  height={350}
                />
              </figure>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                <div className="w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                  <figure className="rounded-[0.4rem]">
                    <img
                      className="rounded-[0.4rem]"
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
                  <div className="card !bg-[#feece9] !text-center">
                    <div className="card-body !py-12 !px-[2rem] counter-wrapper">
                      <h3 className="counter !whitespace-nowrap xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                        5000+
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
          <h2 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !mb-3">
            Let’s Talk
          </h2>
          <p className="lead !text-[1.1rem] !leading-[1.55] font-medium">
            Let’s make something great together. We are trusted by over 5000+
            clients. Join them by using our services and grow your business.
          </p>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
            massa justo sit amet risus.
          </p>
          <a
            href="#"
            className="btn btn-orange !text-white !bg-[#f78b77] border-[#f78b77] hover:text-white hover:bg-[#f78b77] hover:!border-[#f78b77] active:text-white active:bg-[#f78b77] active:border-[#f78b77] disabled:text-white disabled:bg-[#f78b77] disabled:border-[#f78b77] !text-[.85rem] !rounded-[.4rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
          >
            Join Us
          </a>
        </div>
        {/*/column */}
      </div>
    </>
  );
}
