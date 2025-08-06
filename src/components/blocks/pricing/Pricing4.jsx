import React from "react";

export default function Pricing4() {
  return (
    <section id="snippet-4" className="wrapper !bg-[#ffffff]  ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-12 xl:pb-14 lg:pb-14 md:pb-14">
        <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
          Our Pricing
        </h2>
        <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
          We offer{" "}
          <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]">
            great prices
          </span>
          , premium and quality products for your business.
        </p>
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <p>
              Enjoy a{" "}
              <a href="#" className="hover">
                free 30-day trial
              </a>{" "}
              and experience the full service. No credit card required!
            </p>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <a
          href="#"
          className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
        >
          See All Prices
        </a>
        <div className="table-responsive !mt-10 xl:!mt-0 lg:!mt-0">
          <table className="table table-borderless table-striped !text-center">
            <thead>
              <tr>
                <th className="!w-[22.5rem]" />
                <th>
                  <div className="h4 !mb-1">Basic Plan</div>
                  <div className="!text-[.75rem] font-medium !text-[#aab0bc]">
                    $9 / Monthly
                  </div>
                </th>
                <th>
                  <div className="h4 !mb-1">Premium Plan</div>
                  <div className="!text-[.75rem] font-medium !text-[#aab0bc]">
                    $19 / Monthly
                  </div>
                </th>
                <th>
                  <div className="h4 !mb-1">Corporate Plan</div>
                  <div className="!text-[.75rem] font-medium !text-[#aab0bc]">
                    $29 / Monthly
                  </div>
                </th>
                <th>
                  <div className="h4 !mb-1">Business Plan</div>
                  <div className="!text-[.75rem] font-medium !text-[#aab0bc]">
                    $49 / Monthly
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="option text-left">Project</td>
                <td>1</td>
                <td>5</td>
                <td>20</td>
                <td>90</td>
              </tr>
              <tr>
                <td className="option text-left">API Access</td>
                <td>100K</td>
                <td>200K</td>
                <td>300K</td>
                <td>900K</td>
              </tr>
              <tr>
                <td className="option text-left">Storage</td>
                <td>100MB</td>
                <td>200MB</td>
                <td>500MB</td>
                <td>900MB</td>
              </tr>
              <tr>
                <td className="option text-left">Weekly Reports</td>
                <td>-</td>
                <td>
                  <i className="uil uil-check !bg-[#e0e9fa] !text-[#3f78e0]  !rounded-[50%] p-1 before:content-['\e9dd']" />
                </td>
                <td>
                  <i className="uil uil-check !bg-[#e0e9fa] !text-[#3f78e0]  !rounded-[50%] p-1 before:content-['\e9dd']" />
                </td>
                <td>
                  <i className="uil uil-check !bg-[#e0e9fa] !text-[#3f78e0]  !rounded-[50%] p-1 before:content-['\e9dd']" />
                </td>
              </tr>
              <tr>
                <td className="option text-left">24/7 Support</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <i className="uil uil-check !bg-[#e0e9fa] !text-[#3f78e0]  !rounded-[50%] p-1 before:content-['\e9dd']" />
                </td>
                <td>
                  <i className="uil uil-check !bg-[#e0e9fa] !text-[#3f78e0]  !rounded-[50%] p-1 before:content-['\e9dd']" />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th className="!w-[22.5rem]" />
                <th>
                  <a
                    href="#"
                    className="btn btn-soft-primary !rounded-[50rem] !mt-1"
                  >
                    Choose Plan
                  </a>
                </th>
                <th>
                  <a
                    href="#"
                    className="btn btn-soft-primary !rounded-[50rem] !mt-1"
                  >
                    Choose Plan
                  </a>
                </th>
                <th>
                  <a
                    href="#"
                    className="btn btn-soft-primary !rounded-[50rem] !mt-1"
                  >
                    Choose Plan
                  </a>
                </th>
                <th>
                  <a
                    href="#"
                    className="btn btn-soft-primary !rounded-[50rem] !mt-1"
                  >
                    Choose Plan
                  </a>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* /.table-responsive */}
      </div>
      {/* /.container */}

      {/*/.container */}
    </section>
  );
}
