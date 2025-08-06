import React, { useState } from "react";

import { pricingPlans } from "@/data/pricing";
import { brands } from "@/data/brands";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
      <div className="container py-[4.5rem] xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-32 lg:pb-32 md:pb-32">
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase !text-[#aab0bc] xl:!mt-[8rem] lg:!mt-[8rem] !mb-3">
              Our Pricing
            </h2>
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-3">
              We offer great and premium prices.
            </h3>
            <p>
              Enjoy a{" "}
              <a href="#" className="hover !text-[#fab758]">
                free 30-day trial
              </a>{" "}
              and experience the full service. No credit card required!
            </p>
            <a
              href="#"
              className="btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !text-[.85rem] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
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
                <div className="h-4 w-4 block absolute z-[555] transition-[0.3s] duration-[ease-in-out] m-0 rounded-[100%] border-[none] left-0 top-0 !bg-[#fab758] opacity-100 switcher-button" />
              </div>
              <p className="!mb-0 !pl-3 !relative">
                Yearly <span className="!text-[#e2626b]">(Save 30%)</span>
              </p>
            </div>
            <div className="flex flex-wrap mx-[-15px] !mt-[25px] !relative">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
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
                          <span className="price-value">
                            {plan.monthlyPrice}
                          </span>
                          <span className="price-duration">mo</span>
                        </div>
                        <div
                          className={`price ${
                            !isMonthly ? "price-show" : "price-hidden"
                          }  !justify-start`}
                        >
                          <span className="price-currency">$</span>
                          <span className="price-value">
                            {plan.yearlyPrice}
                          </span>
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
                                  ? " !text-[#fab758]"
                                  : " !text-[#e2626b]"
                              } rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell`}
                            />
                            <span>{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#"
                        className="btn btn-purple !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !text-[.85rem] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
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
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-10 xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                srcSet="/assets/img/illustrations/i5@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i5.png"
                width={800}
                height={590}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
              Let’s Talk
            </h2>
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-3">
              Let's make something great together. We are trusted by over 5000+
              clients.
            </h3>
            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            </p>
            <a
              href="#"
              className="btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !text-[.85rem] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
            >
              Join Us
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="xl:!px-5 lg:!px-5">
          <div className="flex flex-wrap mx-0 md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-40px] items-center">
            {brands.slice(0, 6).map((elm, i) => (
              <div
                key={i}
                className="w-4/12 xl:w-2/12 lg:w-2/12 md:w-2/12 flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[40px] max-w-full"
              >
                <figure className="px-5 md:!px-0 lg:!px-2 xl:!px-3 xxl:!px-4">
                  <img
                    alt="image"
                    src={elm.src}
                    width={elm.width}
                    height={elm.height}
                  />
                </figure>
              </div>
            ))}
          </div>
          {/*/.row */}
        </div>
        {/* /div */}
      </div>
      {/* /.container */}
    </section>
  );
}
