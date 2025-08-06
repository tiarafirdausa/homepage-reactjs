import React, { useState } from "react";

import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div className="flex flex-wrap mx-[-15px] !mt-[-30px] items-center">
      <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
        <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
          Our Pricing
        </h2>
        <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] !font-DMSerif !font-normal !tracking-normal [word-spacing:normal!important] !mb-[1.25rem]">
          We offer great and premium prices.
        </h3>
        <p className="!mb-[1.25rem]">
          Enjoy a{" "}
          <a href="#" className="hover !text-[#3f78e0]">
            free 30-day trial
          </a>{" "}
          and experience the full service. No credit card required!
        </p>
        <a
          href="#"
          className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !text-[.85rem] !rounded-[.4rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
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
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px] ${
                index == 1 ? "popular" : ""
              }`}
            >
              <div className="pricing card">
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
                              ? "bg-[#e6e8f7] !text-[#747ed1]"
                              : "!bg-[#fae3e4] !text-[#e2626b]"
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
                    className="btn btn-grape !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !text-[.85rem] !rounded-[0.8rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
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
