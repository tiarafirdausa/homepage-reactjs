import { pricingPlans3 } from "@/data/pricing";
import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] !text-center">
        <div className="md:w-10/12 lg:w-8/12 xl:w-9/12 xxl:w-8/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
          <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
            Our Pricing
          </h2>
          <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] !tracking-[-0.03em] !mb-10 xl:!px-20">
            We offer great prices and quality service for your business.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="pricing-wrapper !mb-10 xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem]">
        <div className="flex flex-wrap mx-0 !mt-[-30px]">
          {pricingPlans3.map((plan, index) => (
            <div key={index} className={plan.className}>
              <div className={plan.cardClassName}>
                <div className="card-body flex-[1_1_auto] p-[3rem_2rem]">
                  <h4 className="card-title !tracking-[-0.03em]">
                    {plan.title}
                  </h4>
                  <div className="prices !text-[#343f52]">
                    <div className="price !justify-start">
                      <span className="price-currency">$</span>
                      <span className="price-value">{plan.price}</span>
                      <span className="price-duration">mo</span>
                    </div>
                  </div>
                  <ul className="pl-0 list-none bullet-green !mt-7 !mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="relative !pl-[1.25rem] !mt-[0.35rem]"
                      >
                        <i
                          className={`uil ${
                            feature.included ? "uil-check" : "uil-times"
                          } absolute left-0 text-[1.05rem] leading-none !tracking-[normal] !text-center flex items-center justify-center ${
                            feature.included
                              ? "!text-[#45c4a0]"
                              : "!text-[#e2626b]"
                          } rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell`}
                        />
                        <span>
                          <strong>{feature.text}</strong>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className={plan.buttonClassName}>
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
      <div className="flex flex-wrap mx-[-15px]">
        <div className="xl:w-11/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
          <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] xl:!px-5 lg:!px-5">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px]">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 418.2 512"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/check-list.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#343f52] text-blue mr-5 !mt-1"
                  >
                    <path className="lineal-fill" d="M14.8 97.6h85.4V14.8z" />
                    <path
                      className="lineal-stroke"
                      d="M100.2 112.4H14.8C6.6 112.4 0 105.8 0 97.7c0-4 1.6-7.9 4.5-10.7L89.9 4.2c5.8-5.7 15.2-5.6 20.9.3 2.7 2.8 4.2 6.5 4.2 10.3v82.8c0 8.2-6.6 14.8-14.8 14.8zm-49-29.6h34.2V49.7L51.2 82.8zM403.4 320c-8.2 0-14.8-6.6-14.8-14.8v-269c0-3.6-3.2-6.6-7.2-6.6H168.7c-8.2 0-14.8-6.6-14.8-14.8 0-8.2 6.6-14.8 14.8-14.8h212.6c20.3 0 36.8 16.2 36.8 36.1v269c.1 8.3-6.5 14.9-14.7 14.9z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M381.4 512H36.8C16.5 512 0 495.8 0 475.9V97.6c0-4 1.6-7.8 4.5-10.6L89.9 4.2c5.9-5.7 15.2-5.5 20.9.3 5.7 5.9 5.5 15.2-.3 20.9l-80.9 78.5v372c0 3.6 3.2 6.6 7.2 6.6h344.6c4 0 7.2-3 7.2-6.6v-92.7c.2-8.2 7-14.6 15.2-14.4 7.9.2 14.2 6.5 14.4 14.4v92.7c0 19.9-16.5 36.1-36.8 36.1z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M403.4 112.4H168.7c-8.2-.2-14.6-7-14.4-15.2.2-7.9 6.5-14.2 14.4-14.4h219.9v-43c0-5.7-4.6-10.3-10.3-10.3H168.7c-8.2 0-14.8-6.6-14.8-14.8C154 6.6 160.6 0 168.7 0h209.6c22 0 39.8 17.9 39.9 39.8v57.8c0 8.2-6.6 14.8-14.8 14.8z"
                    />
                    <path className="lineal-fill" d="M73 189.6h124.1v65H73z" />
                    <path
                      className="lineal-stroke"
                      d="M197.1 269.4H73c-8.2 0-14.8-6.6-14.8-14.8v-65c0-8.2 6.6-14.8 14.7-14.8H197c8.2 0 14.8 6.6 14.8 14.8v65c.1 8.1-6.5 14.8-14.7 14.8.1 0 0 0 0 0zM87.8 239.8h94.6v-35.5H87.8v35.5zm201 25.3c-3.9 0-7.7-1.6-10.5-4.3l-23.6-23.6c-5.7-5.9-5.6-15.2.3-20.9 5.7-5.6 14.9-5.6 20.6 0l13.2 13.2 46-46c5.9-5.7 15.2-5.6 20.9.3 5.6 5.7 5.6 14.9 0 20.6l-56.4 56.4c-2.8 2.7-6.6 4.3-10.5 4.3z"
                    />
                    <path className="lineal-fill" d="M73 346.1h124.1v65H73z" />
                    <path
                      className="lineal-stroke"
                      d="M197.1 426H73c-8.2 0-14.8-6.6-14.8-14.8v-65c0-8.2 6.5-14.8 14.7-14.9h124.2c8.2 0 14.8 6.6 14.8 14.8v65c0 8.2-6.5 14.9-14.8 14.9.1 0 .1 0 0 0zM87.8 396.4h94.6v-35.5H87.8v35.5zm201 25.3c-3.9 0-7.7-1.6-10.5-4.3l-23.6-23.6c-5.7-5.9-5.6-15.2.3-20.9 5.7-5.6 14.9-5.6 20.6 0l13.2 13.2 46-46c5.9-5.7 15.2-5.6 20.9.3 5.6 5.7 5.6 14.9 0 20.6l-56.4 56.4c-2.8 2.7-6.6 4.3-10.5 4.3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="!text-[1rem] !tracking-[-0.03em]">
                    Can I cancel my subscription?
                  </h4>
                  <p className="!mb-0">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Etiam porta sem malesuada magna mollis euismod.
                  </p>
                </div>
              </div>
            </div>
            {/* /column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px]">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 418.2 512"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/check-list.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#343f52] text-blue mr-5 !mt-1"
                  >
                    <path className="lineal-fill" d="M14.8 97.6h85.4V14.8z" />
                    <path
                      className="lineal-stroke"
                      d="M100.2 112.4H14.8C6.6 112.4 0 105.8 0 97.7c0-4 1.6-7.9 4.5-10.7L89.9 4.2c5.8-5.7 15.2-5.6 20.9.3 2.7 2.8 4.2 6.5 4.2 10.3v82.8c0 8.2-6.6 14.8-14.8 14.8zm-49-29.6h34.2V49.7L51.2 82.8zM403.4 320c-8.2 0-14.8-6.6-14.8-14.8v-269c0-3.6-3.2-6.6-7.2-6.6H168.7c-8.2 0-14.8-6.6-14.8-14.8 0-8.2 6.6-14.8 14.8-14.8h212.6c20.3 0 36.8 16.2 36.8 36.1v269c.1 8.3-6.5 14.9-14.7 14.9z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M381.4 512H36.8C16.5 512 0 495.8 0 475.9V97.6c0-4 1.6-7.8 4.5-10.6L89.9 4.2c5.9-5.7 15.2-5.5 20.9.3 5.7 5.9 5.5 15.2-.3 20.9l-80.9 78.5v372c0 3.6 3.2 6.6 7.2 6.6h344.6c4 0 7.2-3 7.2-6.6v-92.7c.2-8.2 7-14.6 15.2-14.4 7.9.2 14.2 6.5 14.4 14.4v92.7c0 19.9-16.5 36.1-36.8 36.1z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M403.4 112.4H168.7c-8.2-.2-14.6-7-14.4-15.2.2-7.9 6.5-14.2 14.4-14.4h219.9v-43c0-5.7-4.6-10.3-10.3-10.3H168.7c-8.2 0-14.8-6.6-14.8-14.8C154 6.6 160.6 0 168.7 0h209.6c22 0 39.8 17.9 39.9 39.8v57.8c0 8.2-6.6 14.8-14.8 14.8z"
                    />
                    <path className="lineal-fill" d="M73 189.6h124.1v65H73z" />
                    <path
                      className="lineal-stroke"
                      d="M197.1 269.4H73c-8.2 0-14.8-6.6-14.8-14.8v-65c0-8.2 6.6-14.8 14.7-14.8H197c8.2 0 14.8 6.6 14.8 14.8v65c.1 8.1-6.5 14.8-14.7 14.8.1 0 0 0 0 0zM87.8 239.8h94.6v-35.5H87.8v35.5zm201 25.3c-3.9 0-7.7-1.6-10.5-4.3l-23.6-23.6c-5.7-5.9-5.6-15.2.3-20.9 5.7-5.6 14.9-5.6 20.6 0l13.2 13.2 46-46c5.9-5.7 15.2-5.6 20.9.3 5.6 5.7 5.6 14.9 0 20.6l-56.4 56.4c-2.8 2.7-6.6 4.3-10.5 4.3z"
                    />
                    <path className="lineal-fill" d="M73 346.1h124.1v65H73z" />
                    <path
                      className="lineal-stroke"
                      d="M197.1 426H73c-8.2 0-14.8-6.6-14.8-14.8v-65c0-8.2 6.5-14.8 14.7-14.9h124.2c8.2 0 14.8 6.6 14.8 14.8v65c0 8.2-6.5 14.9-14.8 14.9.1 0 .1 0 0 0zM87.8 396.4h94.6v-35.5H87.8v35.5zm201 25.3c-3.9 0-7.7-1.6-10.5-4.3l-23.6-23.6c-5.7-5.9-5.6-15.2.3-20.9 5.7-5.6 14.9-5.6 20.6 0l13.2 13.2 46-46c5.9-5.7 15.2-5.6 20.9.3 5.6 5.7 5.6 14.9 0 20.6l-56.4 56.4c-2.8 2.7-6.6 4.3-10.5 4.3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="!text-[1rem] !tracking-[-0.03em]">
                    Which payment methods do you accept?
                  </h4>
                  <p className="!mb-0">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Etiam porta sem malesuada magna mollis euismod.
                  </p>
                </div>
              </div>
            </div>
            {/* /column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px]">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 441.41 512"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/insurance.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#d16b86] text-pink mr-5 !mt-1"
                  >
                    <path
                      className="lineal-fill"
                      d="M254.93 457a46.24 46.24 0 01-24.13-40.62V285.62A70 70 0 00307.94 270a100.73 100.73 0 00-81.62-41.61h-110.6A100.88 100.88 0 0014.84 329.31v167.85H327.2v-.81z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M426.57 270.78a14.85 14.85 0 00-14.85 14.84v130.72a31.41 31.41 0 01-16.38 27.59l-66.66 36.32L262 443.93a31.4 31.4 0 01-16.39-27.59V305.05a85.35 85.35 0 0012.31.89c1.26 0 2.51 0 3.76-.1h1c1.13-.06 2.25-.14 3.37-.25l1.59-.18 1.65-.2a83.72 83.72 0 0041.13-17.47l1.09-.86 1.28-1.07c.85-.72 1.69-1.47 2.52-2.23l.41-.38c.95-.88 1.88-1.79 2.78-2.71a85 85 0 0010.13-12.56 85.74 85.74 0 0028 26.55 14.84 14.84 0 0015-25.63A55.78 55.78 0 01349 243.37a14.85 14.85 0 00-13.58-8.85h-13.48a14.85 14.85 0 00-13.58 8.85c-.45 1-.94 2-1.44 3a116.46 116.46 0 00-45.39-27.21 87.22 87.22 0 0027.23-63.34V87.5a14.85 14.85 0 00-29.69 0v68.29A57.86 57.86 0 01202 213.58h-62a57.86 57.86 0 01-57-57.79V87.5a57.87 57.87 0 0157.81-57.81h60.48a14.85 14.85 0 000-29.69h-60.51a87.6 87.6 0 00-87.5 87.5v68.29a87.23 87.23 0 0027.19 63.3A115.93 115.93 0 000 329.31v167.85A14.85 14.85 0 0014.84 512h313.84a14.76 14.76 0 007.1-1.81L409.54 470a61.06 61.06 0 0031.87-53.65V285.63a14.85 14.85 0 00-14.84-14.85z"
                    />
                    <path
                      className="lineal-fill"
                      d="M29.69 482.31v-153a86.13 86.13 0 0186-86h40.45v144.15a14.84 14.84 0 1029.68 0V243.29h40.46a86.35 86.35 0 0160.4 24.82 55 55 0 01-20.58 7.54h-.15c-1.15.17-2.31.29-3.47.38l-.56.06c-1.24.09-2.49.13-3.74.14H258a54.76 54.76 0 01-21.38-4.3A14.84 14.84 0 00216 285.62v130.72A61.12 61.12 0 00247.82 470l22.6 12.31z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M327.19 405.92a14.81 14.81 0 01-7.22-1.87l-24.85-13.86a14.84 14.84 0 0114.45-25.93l15.67 8.74 34.06-30.14a14.84 14.84 0 1119.7 22.23l-42 37.11a14.82 14.82 0 01-9.81 3.72z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="!text-[1rem] !tracking-[-0.03em]">
                    How can I manage my Account?
                  </h4>
                  <p className="!mb-0">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Etiam porta sem malesuada magna mollis euismod.
                  </p>
                </div>
              </div>
            </div>
            {/* /column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px]">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 324.02 512"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/padlock.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#45c4a0] text-green mr-5 !mt-1"
                  >
                    <path
                      className="lineal-fill"
                      d="M14.31 241.68v197.49a58.52 58.52 0 0058.52 58.52h178.36a58.52 58.52 0 0058.52-58.52V241.68zM162 407.85a47.7 47.7 0 1147.7-47.7 47.7 47.7 0 01-47.7 47.7z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M251.19 512H72.83A72.91 72.91 0 010 439.17V241.68a14.31 14.31 0 0114.31-14.3h295.4a14.31 14.31 0 0114.29 14.3v197.49A72.91 72.91 0 01251.19 512zM28.62 256v183.17a44.26 44.26 0 0044.21 44.21h178.36a44.26 44.26 0 0044.21-44.21V256zM162 422.16a62 62 0 1162-62 62.08 62.08 0 01-62 62zm0-95.4a33.39 33.39 0 1033.39 33.39A33.44 33.44 0 00162 326.76z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M68.56 234.54H20.38a14.31 14.31 0 010-28.62h48.18a14.31 14.31 0 010 28.62zm235.08 0h-48.18a14.31 14.31 0 010-28.62h48.18a14.31 14.31 0 010 28.62z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M45.14 256a14.3 14.3 0 01-14.31-14.31V124a124.16 124.16 0 01124-124h14.32a124.17 124.17 0 01124 124v101.16a14.31 14.31 0 11-28.62 0V124a95.51 95.51 0 00-95.4-95.4h-14.28A95.51 95.51 0 0059.44 124v117.68A14.3 14.3 0 0145.14 256z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="!text-[1rem] !tracking-[-0.03em]">
                    Is my credit card information secure?
                  </h4>
                  <p className="!mb-0">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Etiam porta sem malesuada magna mollis euismod.
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
    </>
  );
}
