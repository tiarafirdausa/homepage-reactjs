import React from "react";

export default function Facts() {
  return (
    <section className="wrapper bg-gradient-purple">
      <div className="container pt-7 xl:pt-10 lg:pt-10 md:pt-10 pb-[4.5rem] xl:pb-28 lg:pb-28 md:pb-28">
        <div className="flex flex-wrap mx-[-15px] !mb-8 !text-center">
          <div className="md:w-11/12 lg:w-10/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <img
              className="m-[0_auto]"
              srcSet="/assets/img/demos/icon@2x.png 2x"
              alt="image"
              src="/assets/img/demos/icon.png"
              width={40}
              height={48}
            />
            <h2 className="!text-[calc(1.335rem_+_1.02vw)] font-bold !leading-[1.2] xl:!text-[2.1rem] !mb-3 !text-center !mt-3 lg:!px-10 xl:!px-0">
              Save your time and money by choosing Sandbox for your website.
            </h2>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px] !text-center">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <h3 className="counter xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] !text-[#747ed1] !mb-1 !tracking-[normal] !leading-none">
                  250+
                </h3>
                <p className="!font-medium !text-[0.9rem] !mb-0">UI elements</p>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <h3 className="counter xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] !text-[#747ed1] !mb-1 !tracking-[normal] !leading-none">
                  130+
                </h3>
                <p className="!font-medium !text-[0.9rem] !mb-0">
                  Pre-made blocks
                </p>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <h3 className="counter xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] !text-[#747ed1] !mb-1 !tracking-[normal] !leading-none">
                  100+
                </h3>
                <p className="!font-medium !text-[0.9rem] !mb-0">
                  Neatly coded pages
                </p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
