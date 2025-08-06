import React from "react";

import { listFeatures2 } from "@/data/features";
export default function Services() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-[4.5rem] xl:pt-[17.5rem] lg:pt-[17.5rem] md:pt-[17.5rem] pb-[4.5rem] xl:pb-[7rem] lg:pb-[7rem] md:pb-[7rem]">
        <div className="flex flex-wrap mx-[-15px] !mb-8 !text-center">
          <div className="lg:w-8/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[0.8rem] uppercase !text-[#a07cc5] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
              What We Do
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold">
              We make your spending stress-free for you to have the perfect
              control.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] !relative">
            <div
              className="shape bg-dot violet rellax !w-[7rem] !h-[8rem] !absolute z-[1] opacity-50"
              data-rellax-speed={1}
              style={{ bottom: "-2rem", left: "-0.7rem" }}
            />
            <figure className="!rounded-[.4rem] !mb-0">
              <img
                className="!rounded-[.4rem]"
                srcSet="/assets/img/photos/se3@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/se3.jpg"
                width={595}
                height={507}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h3 className="xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] font-bold !leading-[1.3] !mb-4">
              Package Design
            </h3>
            <p className="!mb-5">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et. Maecenas faucibus mollis interdum. Maecenas
              sed diam eget risus varius.
            </p>
            <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                  {listFeatures2.slice(0, 2).map((elm, i) => (
                    <li key={i} className="relative !pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                      </span>
                      <span>{elm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                  {listFeatures2.slice(2).map((elm, i) => (
                    <li key={i} className="relative !pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                      </span>
                      <span>{elm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
            <a
              href="#"
              className="btn btn-soft-leaf !text-[.85rem] !tracking-[normal] !rounded-[50rem] !mt-6 !mb-0"
            >
              More Details
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] xl:!order-2 lg:!order-2 !relative">
            <div
              className="shape !rounded-[50%] !bg-[#f6f3f9] rellax !w-[8rem] !h-[8rem] absolute"
              data-rellax-speed={1}
              style={{ bottom: "-2.5rem", right: "-1.5rem" }}
            />
            <figure className="!rounded-[.4rem] !mb-0">
              <img
                className="!rounded-[.4rem]"
                srcSet="/assets/img/photos/se4@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/se4.jpg"
                width={595}
                height={507}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h3 className="xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] font-bold !leading-[1.3] !mb-4">
              Corporate Design
            </h3>
            <p className="!mb-5">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </p>
            <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                  {listFeatures2.slice(0, 2).map((elm, i) => (
                    <li key={i} className="relative !pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                      </span>
                      <span>{elm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                  {listFeatures2.slice(2).map((elm, i) => (
                    <li key={i} className="relative !pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                      </span>
                      <span>{elm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
            <a
              href="#"
              className="btn btn-soft-leaf !text-[.85rem] !tracking-[normal] !rounded-[50rem] !mt-6 !mb-0"
            >
              More Details
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
