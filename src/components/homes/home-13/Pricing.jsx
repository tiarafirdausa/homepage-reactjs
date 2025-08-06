import React, { useState } from "react";

import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0 !mb-10 xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] xl:!mt-32 lg:!mt-32 !mb-3">
              Our Pricing
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
              We offer
              <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(116,126,209,.12)]">
                great prices
              </span>
              , premium and quality products for your business.
            </p>
            <p>
              Enjoy a{" "}
              <a href="#" className="hover !text-[#747ed1]">
                free 30-day trial
              </a>{" "}
              and experience the full service. No credit card required!
            </p>
            <a
              href="#"
              className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
            >
              See All Prices
            </a>
          </div>
          {/*/column */}
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] pricing-wrapper max-lg:!mt-[30px]">
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
                        className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !text-[.85rem] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
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
        <div className="flex flex-wrap mx-[-15px] !mt-[-50px] xl:mx-[-35px] lg:mx-[-20px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
                <figure className="!rounded-[.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative">
                  <img
                    className="!rounded-[.4rem]"
                    srcSet="/assets/img/photos/g5@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g5.jpg"
                    width={350}
                    height={350}
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                  <div className="w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        srcSet="/assets/img/photos/g6@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/g6.jpg"
                        width={375}
                        height={250}
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
                    <div className="card !bg-[#e9eaf8] !text-center">
                      <div className="card-body !py-12 !px-[2rem] counter-wrapper">
                        <h3 className="counter !whitespace-nowrap xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                          5000+
                        </h3>
                        <p className="!mb-0 text-[0.8rem] font-medium">
                          Satisfied Customers
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
              Let’s Talk
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
              Let’s make something great together. We are
              <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(116,126,209,.12)]">
                trusted by
              </span>
              over 5000+ clients. Join them by using our services and grow your
              business.
            </p>
            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            </p>
            <a
              href="#"
              className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
            >
              Join Us
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
