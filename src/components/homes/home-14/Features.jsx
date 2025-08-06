import React from "react";

import { listFeatures2 } from "@/data/features";
export default function Features() {
  return (
    <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2 !relative">
        <div
          className="shape !rounded-[50%] bg-line leaf rellax !w-[8rem] !h-[8rem] !absolute z-[1] opacity-50"
          data-rellax-speed={1}
          style={{ bottom: "-2.5rem", right: "-1.5rem" }}
        />
        <figure className="rounded-[0.4rem] relative z-[2]">
          <img
            className="rounded-[0.4rem]"
            srcSet="/assets/img/photos/about19@2x.jpg 2x"
            alt="image"
            src="/assets/img/photos/about19.jpg"
            width={650}
            height={525}
          />
        </figure>
      </div>
      {/*/column */}
      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full">
        <h3 className="xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !leading-[1.3] font-bold !mb-4">
          Why Choose Us?
        </h3>
        <p className="!mb-5">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus
          varius.
        </p>
        <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
          <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
            <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
              {listFeatures2.slice(0, 2).map((elm, i) => (
                <li key={i} className="relative !pl-6">
                  <span>
                    <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#a07cc5] !bg-[#eee7f5] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                  </span>
                  <span>{elm}</span>{" "}
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
                    <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#a07cc5] !bg-[#eee7f5] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                  </span>
                  <span>{elm}</span>{" "}
                </li>
              ))}
            </ul>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <a
          href="#"
          className="btn btn-soft-violet !text-[.85rem] !tracking-[normal] !rounded-[50rem] !mt-6 !mb-0"
        >
          More Details
        </a>
      </div>
      {/*/column */}
    </div>
  );
}
