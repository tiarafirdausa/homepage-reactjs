import React from "react";

export default function About() {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] md:mx-[-20px] xl:mx-[-35px] items-center !mb-10 xl:!mb-14 lg:!mb-14 md:!mb-14">
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[80px]">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
              <figure className="rounded-[0.4rem]">
                <img
                  className="rounded-[0.4rem]"
                  srcSet="/assets/img/photos/g12@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/g12.jpg"
                  width={293}
                  height={260}
                />
              </figure>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !self-end !mt-[25px]">
              <figure className="rounded-[0.4rem]">
                <img
                  className="rounded-[0.4rem]"
                  srcSet="/assets/img/photos/g13@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/g13.jpg"
                  width={293}
                  height={235}
                />
              </figure>
            </div>
            {/*/column */}
            <div className="w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
              <figure className="!rounded-[.4rem] xl:!mx-5 lg:!mx-5 md:!mx-5">
                <img
                  className="!rounded-[.4rem]"
                  srcSet="/assets/img/photos/g11@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/g11.jpg"
                  width={560}
                  height={285}
                />
              </figure>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[80px]">
          <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
            Who Are We?
          </h2>
          <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-4">
            Company that believes in the power of creative strategy.
          </h3>
          <p className="!mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum
            nulla sed.
          </p>
          <div className="flex flex-wrap mx-[-15px] !mt-[-15px] xl:mx-[-20px]">
            <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
              <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                <li className="relative !pl-6">
                  <span>
                    <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                  </span>
                  <span>
                    Aenean eu leo quam ornare curabitur blandit tempus.
                  </span>
                </li>
                <li className="relative !pl-6 !mt-3">
                  <span>
                    <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
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
                    <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                  </span>
                  <span>Etiam porta sem malesuada magna mollis euismod.</span>
                </li>
                <li className="relative !pl-6 !mt-3">
                  <span>
                    <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
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
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full">
          <div className="flex flex-row">
            <div>
              <div className="icon btn btn-circle pointer-events-none btn-soft-grape !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-base !leading-none !p-0 !rounded-[100%]">
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
              <div className="icon btn btn-circle pointer-events-none btn-soft-grape !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-base !leading-none !p-0 !rounded-[100%]">
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
              <div className="icon btn btn-circle pointer-events-none btn-soft-grape !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-base !leading-none !p-0 !rounded-[100%]">
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
    </>
  );
}
