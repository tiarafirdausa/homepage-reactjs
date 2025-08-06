import { useState } from "react";

export default function Pricing3() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section id="snippet-3" className="wrapper !bg-[#ffffff]  ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-7 !text-center">
          Our Pricing
        </h2>
        <div className="pricing-wrapper">
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
            <p className="!mb-0 !pl-3 !relative">
              Yearly <span className="!text-[#e2626b]">(Save 30%)</span>
            </p>
          </div>
          <div className="flex flex-wrap mx-0 !mt-2">
            <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] max-w-full !mt-[30px]">
              <div className="pricing card !shadow-none !border-0">
                <div className="card-body flex-[1_1_auto] py-[60px] px-[40px] !border-0 border-[#fff]">
                  <div className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !p-0 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !rounded-[100%]">
                    {" "}
                    <i className="uil uil-shopping-bag before:content-['\ecba']" />{" "}
                  </div>
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
                  <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8">
                    <li className="relative !pl-6">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        <strong>1</strong> Project{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        <strong>100K</strong> API Access{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        <strong>100MB</strong> Storage{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-times bullet-soft-red absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-['\ed3b'] before:align-middle before:table-cell" />
                      <span>
                        {" "}
                        Weekly <strong>Reports</strong>{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-times bullet-soft-red absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-['\ed3b'] before:align-middle before:table-cell" />
                      <span>
                        {" "}
                        7/24 <strong>Support</strong>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-soft-primary !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.05)]"
                  >
                    Choose Plan
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] max-w-full !mt-[30px]">
              <div className="pricing card !shadow-none !border-0">
                <div className="card-body flex-[1_1_auto] py-[60px] px-[40px] !border-0 border-[#fff]">
                  <div className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !p-0 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !rounded-[100%]">
                    {" "}
                    <i className="uil uil-shopping-cart-alt before:content-['\ecbc']" />{" "}
                  </div>
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
                  <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8">
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        <strong>5</strong> Projects{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        <strong>100K</strong> API Access{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        <strong>200MB</strong> Storage{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        {" "}
                        Weekly <strong>Reports</strong>
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-times bullet-soft-red absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-['\ed3b'] before:align-middle before:table-cell" />
                      <span>
                        {" "}
                        7/24 <strong>Support</strong>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-soft-primary !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.05)]"
                  >
                    Choose Plan
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] max-w-full !mt-[30px]">
              <div className="pricing card !bg-[#edf2fc]">
                <div className="card-body flex-[1_1_auto] py-[60px] px-[40px] !border-0 border-[#fff]">
                  <div className="icon btn btn-circle btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !p-0 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !rounded-[100%]">
                    {" "}
                    <i className="uil uil-store before:content-['\ed04']" />{" "}
                  </div>
                  <h4 className="card-title">Corporate Plan</h4>
                  <div className="prices !text-[#343f52]">
                    <div
                      className={`price ${
                        isMonthly ? "price-show" : "price-hidden"
                      }  !justify-start`}
                    >
                      <span className="price-currency">$</span>
                      <span className="price-value">29</span>
                      <span className="price-duration">mo</span>
                    </div>
                    <div
                      className={`price ${
                        !isMonthly ? "price-show" : "price-hidden"
                      }  !justify-start`}
                    >
                      <span className="price-currency">$</span>
                      <span className="price-value">299</span>
                      <span className="price-duration">yr</span>
                    </div>
                  </div>
                  {/*/.prices */}
                  <ul className="pl-0 list-none bullet-bg bullet-primary !mt-7 !mb-8">
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-white bg-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        <strong>20</strong> Projects{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-white bg-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        <strong>300K</strong> API Access{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-white bg-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        <strong>500MB</strong> Storage{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-white bg-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        {" "}
                        Weekly <strong>Reports</strong>
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-white bg-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        {" "}
                        7/24 <strong>Support</strong>
                      </span>
                    </li>
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
            <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] max-w-full !mt-[30px]">
              <div className="pricing card !shadow-none !border-0">
                <div className="card-body flex-[1_1_auto] py-[60px] px-[40px] !border-0 border-[#fff]">
                  <div className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !p-0 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !rounded-[100%]">
                    {" "}
                    <i className="uil uil-store-alt before:content-['\ecf9']" />{" "}
                  </div>
                  <h4 className="card-title">Community Plan</h4>
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
                  <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8">
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        <strong>90</strong> Projects{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        <strong>900K</strong> API Access{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        <strong>900MB</strong> Storage{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        {" "}
                        Weekly <strong>Reports</strong>{" "}
                      </span>
                    </li>
                    <li className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      <span>
                        {" "}
                        7/24 <strong>Support</strong>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-soft-primary !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.05)]"
                  >
                    Choose Plan
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
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
