import React, { useState } from "react";

import { pricingPlans2 } from "@/data/pricing";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="flex flex-wrap mx-[-15px]">
      <div className="xl:w-11/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
        <div className="pricing-wrapper !mb-10 xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem]">
          <div className="flex flex-wrap items-center justify-center switcher">
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
              Yearly <span className="!text-[#747ed1]">(Save 30%)</span>
            </p>
          </div>
          <div className="flex flex-wrap mx-[-15px] !mt-3 xl:!mt-5 lg:!mt-5 md:!mt-5">
            {pricingPlans2.map((plan, index) => (
              <div
                key={index}
                className={`md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px] ${
                  plan.isPopular ? "popular" : ""
                } ${
                  pricingPlans2.length == index + 1
                    ? "xl:!ml-0 lg:!ml-0 md:!ml-[25%]"
                    : ""
                }`}
              >
                <div className="pricing card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
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
                    <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8 text-left">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="relative !pl-6 !mt-[0.35rem]">
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
                      className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[.4rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
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
        {/*/.pricing-wrapper */}
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] !mb-20">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px] max-w-full">
            <div className="flex flex-row">
              <div>
                <span className="icon btn btn-sm btn-circle btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mr-5 w-[1.8rem] h-[1.8rem] text-[0.8rem] inline-flex items-center justify-center !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-comment-exclamation before:content-['\ea41'] text-[.85rem]" />
                </span>
              </div>
              <div>
                <h4>Can I cancel my subscription?</h4>
                <p className="!mb-0">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Etiam porta sem malesuada magna mollis euismod maecenas.
                </p>
              </div>
            </div>
          </div>
          {/* /column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px] max-w-full">
            <div className="flex flex-row">
              <div>
                <span className="icon btn btn-sm btn-circle btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mr-5 w-[1.8rem] h-[1.8rem] text-[0.8rem] inline-flex items-center justify-center !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-comment-exclamation before:content-['\ea41'] text-[.85rem]" />
                </span>
              </div>
              <div>
                <h4>Which payment methods do you accept?</h4>
                <p className="!mb-0">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Etiam porta sem malesuada magna mollis euismod maecenas.
                </p>
              </div>
            </div>
          </div>
          {/* /column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px] max-w-full">
            <div className="flex flex-row">
              <div>
                <span className="icon btn btn-sm btn-circle btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mr-5 w-[1.8rem] h-[1.8rem] text-[0.8rem] inline-flex items-center justify-center !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-comment-exclamation before:content-['\ea41'] text-[.85rem]" />
                </span>
              </div>
              <div>
                <h4>How can I manage my Account?</h4>
                <p className="!mb-0">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Etiam porta sem malesuada magna mollis euismod maecenas.
                </p>
              </div>
            </div>
          </div>
          {/* /column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px] max-w-full">
            <div className="flex flex-row">
              <div>
                <span className="icon btn btn-sm btn-circle btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mr-5 w-[1.8rem] h-[1.8rem] text-[0.8rem] inline-flex items-center justify-center !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-comment-exclamation before:content-['\ea41'] text-[.85rem]" />
                </span>
              </div>
              <div>
                <h4>Is my credit card information secure?</h4>
                <p className="!mb-0">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Etiam porta sem malesuada magna mollis euismod maecenas.
                </p>
              </div>
            </div>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /column */}
    </div>
  );
}
