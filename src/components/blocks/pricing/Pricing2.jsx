import { useState } from "react";
const basicFeatures = [
  { text: "1 Project", included: true },
  { text: "100K API Access", included: true },
  { text: "100MB Storage", included: true },
  { text: "Weekly Reports", included: false },
  { text: "7/24 Support", included: false },
];

const premiumFeatures = [
  { text: "5 Projects", included: true },
  { text: "100K API Access", included: true },
  { text: "200MB Storage", included: true },
  { text: "Weekly Reports", included: true },
  { text: "7/24 Support", included: false },
];

const corporateFeatures = [
  { text: "20 Projects", included: true },
  { text: "300K API Access", included: true },
  { text: "500MB Storage", included: true },
  { text: "Weekly Reports", included: true },
  { text: "7/24 Support", included: true },
];

export default function Pricing2() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section id="snippet-2" className="wrapper !bg-[#ffffff]  ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
              Our Pricing
            </h2>
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-[5rem] xl:!mb-6 lg:!mb-6 md:!mb-6 lg:!px-10 xl:!px-10">
              We offer great prices, premium products and quality service for
              your business.
            </h3>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="pricing-wrapper !relative">
          <div
            className="shape bg-dot primary rellax !w-[6rem] !h-[8rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50"
            data-rellax-speed={1}
            style={{ top: "2rem", right: "-2.4rem" }}
          />
          <div
            className="shape !rounded-[50%] bg-line red rellax !w-[8rem] !h-[8rem] hidden xl:block lg:block absolute z-[1] opacity-50"
            data-rellax-speed={1}
            style={{ bottom: "0.5rem", left: "-2.5rem" }}
          />
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
              <div className="h-4 w-4 block absolute z-[555] transition-[0.3s] duration-[ease-in-out] m-0 rounded-[100%] border-[none] left-0 top-0 !bg-[#3f78e0] opacity-100 switcher-button" />
            </div>
            <p className="!mb-0 !pl-3 !relative">Yearly</p>
          </div>
          <div className="flex flex-wrap mx-[-15px] !mt-3 xl:!mt-5 lg:!mt-5 md:!mt-5">
            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <div className="pricing card !text-center">
                <div className="card-body flex-[1_1_auto]  pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 412.9"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/shopping-basket.svg"
                    className="svg-inject icon-svg text-[#3f78e0] !mb-3 !w-[2.6rem] !h-[2.6rem] m-[0_auto]"
                  >
                    <path
                      className="lineal-fill"
                      d="M453.8 238.1l-9.6 76.3H67.8l-9.6-76.3z"
                    />
                    <circle
                      className="lineal-fill"
                      cx="178.1"
                      cy="149.9"
                      r="35.1"
                    />
                    <circle
                      className="lineal-fill"
                      cx="333.9"
                      cy="149.9"
                      r="35.1"
                    />
                    <path
                      className="lineal-stroke"
                      d="M498.6 136.5h-60.2c-7.4-.2-13.6 5.7-13.8 13.1-.2 7.4 5.7 13.6 13.1 13.8h11.8l-7.5 61.3H70.1l-7.5-61.3h68.9c7.4 25.7 34.3 40.6 60 33.1 16-4.6 28.5-17.1 33.1-33.1h62.6c7.4 25.7 34.3 40.6 60 33.2 25.7-7.4 40.6-34.3 33.2-60-4.9-17.1-18.9-30.1-36.3-33.9l-39-94.2c-2.8-6.9-10.7-10.1-17.6-7.3s-10.1 10.7-7.3 17.6l35.7 86.2c-14 5.5-24.6 17.2-28.8 31.6h-62.6c-4.2-14.4-14.8-26.1-28.8-31.7l35.7-86.2c2.8-6.9-.4-14.7-7.3-17.6s-14.7.4-17.6 7.3l-39.1 94.2c-17.4 3.8-31.3 16.9-36.2 33.9H13.4C6 136.7.1 142.9.3 150.3c.2 7.1 5.9 12.9 13.1 13.1h22.1l29.8 237.8c.9 6.7 6.6 11.8 13.3 11.8h354.8c6.8 0 12.5-5 13.3-11.8l29.8-237.8h22c7.4-.2 13.3-6.4 13.1-13.8-.2-7.2-5.9-12.9-13-13.1zm-165-8.2c.4 0 .9.1 1.3.1h.7c11.9.9 20.8 11.3 19.9 23.2-.9 11.9-11.3 20.8-23.2 19.9-11.9-.9-20.8-11.3-19.9-23.2.8-11.1 10-19.7 21.2-20zm-157.1.1h.7c.4 0 .9-.1 1.3-.1 11.9.2 21.4 10 21.3 22-.2 11.9-10 21.4-22 21.3-11.9-.2-21.4-10-21.3-22 .2-11.2 8.9-20.4 20-21.2zm-103 123.1h365.1l-6.3 49.5H79.7l-6.2-49.5zM90.4 386L83 327.9h345.9l-7.4 58.1H90.4z"
                    />
                  </svg>
                  <h4 className="card-title">Basic Plan</h4>
                  <div className="prices !text-[#343f52]">
                    <div
                      className={`price ${
                        isMonthly ? "price-show" : "price-hidden"
                      }  !justify-start`}
                    >
                      <span className="price-currency">$</span>
                      <span className="price-value">9</span>
                      <span className="price-duration">mo</span>
                    </div>
                    <div
                      className={`price ${
                        !isMonthly ? "price-show" : "price-hidden"
                      }  !justify-start`}
                    >
                      <span className="price-currency">$</span>
                      <span className="price-value">99</span>
                      <span className="price-duration">yr</span>
                    </div>
                  </div>
                  {/*/.prices */}
                  <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8 text-left">
                    {basicFeatures.map((feature, index) => {
                      const iconClass = feature.included
                        ? "uil-check"
                        : "uil-times bullet-soft-red";
                      const bgColor = feature.included ? "#dce7f9" : "#fae3e4";
                      const textColor = feature.included
                        ? "#3f78e0"
                        : "#e2626b";
                      const iconContent = feature.included ? "e9dd" : "ed3b";

                      return (
                        <li
                          key={index}
                          className={`relative !pl-6 ${
                            index !== 0 ? "!mt-[0.35rem]" : ""
                          }`}
                        >
                          <i
                            className={`${iconClass} absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center rounded-[100%] top-[0.2rem] before:align-middle before:table-cell`}
                            style={{
                              backgroundColor: bgColor,
                              color: textColor,
                            }}
                          />
                          <span>
                            <strong>{feature.text.split(" ")[0]}</strong>{" "}
                            {feature.text.split(" ").slice(1).join(" ")}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  >
                    Choose Plan
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full popular !mt-[30px]">
              <div className="pricing card !text-center">
                <div className="card-body flex-[1_1_auto]  pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 479.8 512"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/home.svg"
                    className="svg-inject icon-svg text-[#3f78e0] !mb-3 !w-[2.6rem] !h-[2.6rem] m-[0_auto]"
                  >
                    <path
                      className="lineal-stroke"
                      d="M308 512H61.9c-8 0-14.4-6.5-14.4-14.4V227.2c0-4.3 2-8.4 5.4-11.2l178-143.7c5.3-4.3 12.8-4.3 18.1 0L427 216c3.4 2.7 5.4 6.9 5.4 11.2v269.6c-.2 8-6.8 14.3-14.8 14-7.7-.2-13.8-6.4-14-14V234.1L239.9 102 76.3 234.1v249.1H308c8 .2 14.3 6.8 14 14.8-.2 7.6-6.3 13.8-14 14z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M465.4 209.8c-3.3 0-6.4-1.1-9-3.2L239.9 32.9 23.5 206.7c-6.2 5-15.3 4-20.3-2.2s-4-15.3 2.2-20.3l225.5-181c5.3-4.2 12.8-4.2 18.1 0l225.5 181c6.2 5 7.2 14.1 2.2 20.3-2.8 3.3-6.9 5.3-11.3 5.3z"
                    />
                    <ellipse
                      transform="rotate(-80.781 239.904 207.686)"
                      className="lineal-fill"
                      cx="239.9"
                      cy="207.7"
                      rx="42.9"
                      ry={43}
                    />
                    <path
                      className="lineal-stroke"
                      d="M239.9 265.1c-31.7 0-57.4-25.7-57.4-57.4s25.7-57.4 57.4-57.4 57.4 25.7 57.4 57.4c-.1 31.7-25.7 57.3-57.4 57.4zm0-85.9c-15.8 0-28.5 12.8-28.5 28.5s12.8 28.5 28.5 28.5 28.5-12.8 28.5-28.5c0-15.8-12.8-28.5-28.5-28.5z"
                    />
                    <path
                      className="lineal-fill"
                      d="M171.8 325.7h136.1v171.9H171.8z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M308 512H171.8c-8 0-14.4-6.5-14.4-14.4V325.7c0-8 6.5-14.4 14.4-14.4H308c8 0 14.4 6.5 14.4 14.4v171.9c0 7.9-6.4 14.4-14.4 14.4zm-121.8-28.9h107.3v-143H186.2v143zm234.2-317.7c-7.9 0-14.4-6.5-14.4-14.4V73.3h-28.6c-8 0-14.4-6.5-14.4-14.4s6.5-14.4 14.4-14.4h43c8 0 14.4 6.5 14.4 14.4v92c0 8-6.4 14.4-14.4 14.5 0-.1 0 0 0 0z"
                    />
                  </svg>
                  <h4 className="card-title">Premium Plan</h4>
                  <div className="prices !text-[#343f52]">
                    <div
                      className={`price ${
                        isMonthly ? "price-show" : "price-hidden"
                      }  !justify-start`}
                    >
                      <span className="price-currency">$</span>
                      <span className="price-value">19</span>
                      <span className="price-duration">mo</span>
                    </div>
                    <div
                      className={`price ${
                        !isMonthly ? "price-show" : "price-hidden"
                      }  !justify-start`}
                    >
                      <span className="price-currency">$</span>
                      <span className="price-value">199</span>
                      <span className="price-duration">yr</span>
                    </div>
                  </div>
                  {/*/.prices */}
                  <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8 text-left">
                    {premiumFeatures.map((feature, index) => {
                      const iconClass = feature.included
                        ? "uil-check"
                        : "uil-times bullet-soft-red";
                      const bgColor = feature.included ? "#dce7f9" : "#fae3e4";
                      const textColor = feature.included
                        ? "#3f78e0"
                        : "#e2626b";

                      return (
                        <li
                          key={index}
                          className="relative !pl-6 !mt-[0.35rem]"
                        >
                          <i
                            className={`${iconClass} absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center rounded-[100%] top-[0.2rem] before:align-middle before:table-cell`}
                            style={{
                              backgroundColor: bgColor,
                              color: textColor,
                            }}
                          />
                          <span>
                            <strong>{feature.text.split(" ")[0]}</strong>{" "}
                            {feature.text.split(" ").slice(1).join(" ")}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  >
                    Choose Plan
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 md:!ml-[25%] w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-0 lg:!ml-0 !mt-[30px]">
              <div className="pricing card !text-center">
                <div className="card-body flex-[1_1_auto]  pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 409.6 380.8"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/briefcase-2.svg"
                    className="svg-inject icon-svg text-[#3f78e0] !mb-3 !w-[2.6rem] !h-[2.6rem] m-[0_auto]"
                  >
                    <path
                      className="lineal-stroke"
                      d="M299.9 104.7h-23.8V56.5c0-18.1-14.6-32.7-32.7-32.7h-77.2c-18 0-32.7 14.7-32.7 32.7v48.2h-23.8V56.5C109.8 25.3 135 0 166.2 0h77.2c31.2 0 56.4 25.3 56.5 56.5v48.2z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M360.5 380.8H49.1c-27.1 0-49-22-49.1-49.1V119.1C0 92 22 70 49.1 70h311.5c27.1 0 49 22 49.1 49.1v212.7c-.1 27.1-22.1 49-49.2 49zM49.1 93.8c-14 0-25.3 11.3-25.3 25.3v212.7c0 14 11.3 25.3 25.3 25.3h311.5c14 0 25.3-11.3 25.3-25.3V119.1c0-14-11.3-25.3-25.3-25.3H49.1z"
                    />
                    <path
                      className="lineal-fill"
                      d="M49.2 81.7c-18.4 0-33.3 14.8-33.3 33.2 0 2.7.3 5.3.9 7.9C35.4 197.9 103.6 254 184.2 254h41.2c80.6 0 148.8-56.1 167.3-131.2 4.3-17.8-6.6-35.8-24.5-40.2-2.6-.6-5.2-.9-7.9-.9H49.2z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M225.4 265.9h-41.2c-41.5-.1-81.8-14.2-114.3-40C38 200.5 15.3 165.2 5.4 125.6-.5 101.4 14.3 77 38.6 71.1c3.5-.9 7.1-1.3 10.7-1.3h311.1c24.9 0 45.2 20.2 45.2 45.1 0 3.6-.4 7.2-1.3 10.7-9.9 39.6-32.6 74.8-64.5 100.2-32.6 25.9-72.9 40-114.4 40.1zM49.2 93.6c-6.6 0-12.9 3-16.9 8.2-4.1 5.1-5.5 11.8-3.9 18.2 17.6 71.8 81.9 122.3 155.8 122.2h41.2c73.9.1 138.3-50.4 155.8-122.2 1.6-6.3.1-13-3.9-18.1-4.1-5.2-10.3-8.3-16.9-8.2l-311.2-.1z"
                    />
                    <path
                      className="lineal-fill"
                      d="M128.5 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M128.5 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z"
                    />
                    <path
                      className="lineal-fill"
                      d="M294.9 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M294.9 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z"
                    />
                  </svg>
                  <h4 className="card-title">Corporate Plan</h4>
                  <div className="prices !text-[#343f52]">
                    <div
                      className={`price ${
                        isMonthly ? "price-show" : "price-hidden"
                      }  !justify-start`}
                    >
                      <span className="price-currency">$</span>
                      <span className="price-value">49</span>
                      <span className="price-duration">mo</span>
                    </div>
                    <div
                      className={`price ${
                        !isMonthly ? "price-show" : "price-hidden"
                      }  !justify-start`}
                    >
                      <span className="price-currency">$</span>
                      <span className="price-value">499</span>
                      <span className="price-duration">yr</span>
                    </div>
                  </div>
                  {/*/.prices */}
                  <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8 text-left">
                    {corporateFeatures.map((feature, index) => {
                      return (
                        <li
                          key={index}
                          className="relative !pl-6 !mt-[0.35rem]"
                        >
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            <strong>{feature.text.split(" ")[0]}</strong>{" "}
                            {feature.text.split(" ").slice(1).join(" ")}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  >
                    Choose Plan
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/.pricing-wrapper */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
