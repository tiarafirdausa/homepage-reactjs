import React from "react";

export default function Features() {
  return (
    <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem] items-center">
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
        <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !mb-3">
          Have Perfect Control
        </h3>
        <p className="lead !text-[1.1rem] !leading-[1.5] font-medium">
          We are focused on establishing long-term relationships with customers.
        </p>
        <p className="!mb-6">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et.
        </p>
        <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
          <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
            <ul className="pl-0 list-none bullet-bg bullet-soft-purple !mb-0">
              <li className="relative !pl-6">
                <span>
                  <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#747ed1] !bg-[#e6e8f7] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                </span>
                <span>Aenean quam ornare. Curabitur blandit.</span>
              </li>
              <li className="!mt-3 relative !pl-6">
                <span>
                  <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#747ed1] !bg-[#e6e8f7] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                </span>
                <span>Nullam quis risus eget urna mollis ornare.</span>
              </li>
            </ul>
          </div>
          {/*/column */}
          <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
            <ul className="pl-0 list-none bullet-bg bullet-soft-purple !mb-0">
              <li className="relative !pl-6">
                <span>
                  <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#747ed1] !bg-[#e6e8f7] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                </span>
                <span>Etiam porta euismod malesuada mollis.</span>
              </li>
              <li className="!mt-3 relative !pl-6">
                <span>
                  <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#747ed1] !bg-[#e6e8f7] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                </span>
                <span>Vivamus sagittis lacus vel augue rutrum.</span>
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
