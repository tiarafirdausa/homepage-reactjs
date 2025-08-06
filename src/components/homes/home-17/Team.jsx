import React from "react";

export default function Team() {
  return (
    <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
      <div className="md:w-8/12 xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full lg:!order-2 xl:!order-2">
        <figure className="rounded-[0.4rem]">
          <img
            className="rounded-[0.4rem]"
            srcSet="/assets/img/photos/about24@2x.jpg 2x"
            alt="image"
            src="/assets/img/photos/about24.jpg"
            width={650}
            height={555}
          />
        </figure>
      </div>
      {/*/column */}
      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full">
        <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
          Our Team
        </h2>
        <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5">
          Save your time by choosing our professional team.
        </h3>
        <p className="!mb-6">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et.
        </p>
        <div className="flex flex-wrap mx-[-15px] !mt-[-15px] xl:mx-[-20px]">
          <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
            <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
              <li className="relative !pl-6">
                <span>
                  <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dadce0] !text-[#343f52] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                </span>
                <span>Aenean eu leo quam ornare curabitur blandit tempus.</span>
              </li>
              <li className="relative !pl-6 !mt-3">
                <span>
                  <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dadce0] !text-[#343f52] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
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
                  <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dadce0] !text-[#343f52] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                </span>
                <span>Etiam porta sem malesuada magna mollis euismod.</span>
              </li>
              <li className="relative !pl-6 !mt-3">
                <span>
                  <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dadce0] !text-[#343f52] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
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
  );
}
