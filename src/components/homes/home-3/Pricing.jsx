import React, { useState } from "react";

import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !mb-24 xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
      <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
        <h2 className="!text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top !pl-[1.4rem] !tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#54a8c7] !text-[#54a8c7] lg:!mt-32 xl:!mt-32 !mb-3">
          Our Pricing
        </h2>
        <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-3">
          We offer great and premium prices.
        </h3>
        <p>
          Enjoy a{" "}
          <a href="#" className="hover !text-[#54a8c7]">
            free 30-day trial
          </a>{" "}
          and experience the full service. No credit card required!
        </p>
        <a
          href="#"
          className="btn btn-aqua !text-white !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] focus:text-white active:text-white active:bg-[#54a8c7] active:border-[#54a8c7] disabled:text-white disabled:bg-[#54a8c7] disabled:border-[#54a8c7] !text-[.85rem] rounded !mt-2"
        >
          See All Prices
        </a>
      </div>
      {/*/column */}
      <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] pricing-wrapper !mt-[30px]">
        <div className="flex flex-wrap items-center switcher xl:!justify-end lg:!justify-end">
          <p className="!mb-0 !pr-[.75rem]">Monthly</p>
          <div
            onClick={() => {
              setIsMonthly((pre) => !pre);
            }}
            className="pricing-switchers w-8 h-4 clear-both !text-center !relative bg-[rgba(30,34,40,0.07)] !box-content rounded-3xl border-[0.2rem] border-solid border-transparent"
          >
            <div
              className={`pricing-switcher cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercas ${
                isMonthly ? "pricing-switcher-active !text-white" : ""
              }`}
            />
            <div
              className={`pricing-switcher cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercas ${
                !isMonthly ? "pricing-switcher-active !text-white" : ""
              }`}
            />
            <div className="h-4 w-4 block absolute z-[555] transition-[0.3s] duration-[ease-in-out] m-0 rounded-[100%] border-[none] left-0 top-0 !bg-[#747ed1] opacity-100 switcher-button" />
          </div>
          <p className="!mb-0 !pl-3 !relative">
            Yearly <span className="!text-[#e2626b]">(Save 30%)</span>
          </p>
        </div>
        <div className="flex flex-wrap mx-[-15px] !mt-[25px] !relative">
          <>
            <div
              className="shape bg-dot aqua rellax !w-[6rem] !h-[8rem] absolute z-[1] opacity-50"
              data-rellax-speed={1}
              style={{
                bottom: "-0.5rem",
                right: "-1.6rem",
                transform: "translate3d(0px, 12px, 0px)",
              }}
            />
            <div
              className="shape !rounded-[50%] !bg-[#edf2fc] rellax !w-[8rem] !h-[8rem] absolute z-[1]"
              data-rellax-speed={1}
              style={{
                top: "-1rem",
                left: "-2rem",
                transform: "translate3d(0px, -20px, 0px)",
              }}
            />
          </>

          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px] ${
                index == 1 ? "popular" : ""
              } `}
            >
              <div className="pricing card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !border-[#cfceea] ">
                <div className="card-body !p-[3rem_40px_3.5rem_40px]">
                  <div className="prices !text-[#343f52]">
                    <div
                      className={`price ${
                        isMonthly ? "price-show" : "price-hidden"
                      }  !justify-start`}
                    >
                      <span className="price-currency">$</span>
                      <span className="price-value">{plan.monthlyPrice}</span>
                      <span className="price-duration">mo</span>
                    </div>
                    <div
                      className={`price ${
                        !isMonthly ? "price-show" : "price-hidden"
                      }  !justify-start`}
                    >
                      <span className="price-currency">$</span>
                      <span className="price-value">{plan.yearlyPrice}</span>
                      <span className="price-duration">yr</span>
                    </div>
                  </div>
                  <h4 className="card-title !mt-2">{plan.title}</h4>
                  <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="relative !pl-[1.5rem] !mt-[0.35rem]"
                      >
                        <i
                          className={`uil ${
                            feature.included ? "uil-check" : "uil-times"
                          } absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center ${
                            feature.included
                              ? "bg-[#e0eff5] !text-[#54a8c7]"
                              : "!bg-[#e0eff5] !text-[#e2626b]"
                          } rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell`}
                        />
                        <span>
                          <strong>{feature.text}</strong>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="btn btn-grape !text-white !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] active:text-white active:bg-[#54a8c7] active:border-[#54a8c7] disabled:text-white disabled:bg-[#54a8c7] disabled:border-[#54a8c7] !text-[.85rem] !rounded-[.4rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*/.row */}
      </div>
      {/*/column */}
    </div>
  );
}
