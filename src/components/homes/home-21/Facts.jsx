import React from "react";
import Projects from "./Projects";

import Counter from "@/components/common/Counter";
import { teamMembers2 } from "@/data/team";
export default function Facts() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-14 xl:pt-8 lg:pt-8 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 lg:!mt-0 !mb-12">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full text-center lg:text-left xl:text-left xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-0 lg:!mt-0">
            <h2 className="!text-[0.8rem] uppercase !text-[#5eb9f0] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
              Company Facts
            </h2>
            <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] !mb-4 xxl:!pr-5">
              We are proud of our design team
            </h3>
            <p className="!mb-0 xxl:!pr-12">
              Just sit back and relax while we take care of your business needs
              for you.
            </p>
          </div>
          {/* /column */}
          <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-2 lg:!mt-2">
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px] !text-center">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <div className="icon btn btn-circle btn-lg btn-soft-sky pointer-events-none !mb-4 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-presentation-check before:content-['\ec66']" />
                </div>
                <h3 className="counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                  <Counter max={1000} />+
                </h3>
                <p className="!font-medium !mb-0">Completed Projects</p>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <div className="icon btn btn-circle btn-lg btn-soft-sky pointer-events-none !mb-4 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-user-check before:content-['\ed65']" />
                </div>
                <h3 className="counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                  <Counter max={50} />
                  K+
                </h3>
                <p className="!font-medium !mb-0">Happy Customers</p>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <div className="icon btn btn-circle btn-lg btn-soft-sky pointer-events-none !mb-4 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-trophy before:content-['\ed4f']" />
                </div>
                <h3 className="counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                  <Counter max={20} />+
                </h3>
                <p className="!font-medium !mb-0">Awards Won</p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] grid-view !mt-[-30px] xl:!mt-0">
          {teamMembers2.map((elm, i) => (
            <div
              key={i}
              className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] xl:!mt-0 max-w-full"
            >
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <img
                    className="rounded-[50%] !w-[5rem] !mb-4"
                    alt="image"
                    src={elm.image}
                    width={100}
                    height={100}
                  />
                  <h4 className="!mb-1">{elm.name}</h4>
                  <div className="!text-[.7rem] uppercase !tracking-[0.02rem] font-semibold !text-[#aab0bc] !mb-2">
                    {elm.role}
                  </div>
                  <p className="!mb-2">
                    Fermentum massa justo sit amet risus morbi leo.
                  </p>
                  <nav className="nav social !mb-0">
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]" />
                    </a>
                  </nav>
                  {/* /.social */}
                </div>
                {/*/.card-body */}
              </div>
              {/* /.card */}
            </div>
          ))}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
      <Projects />
      {/* /.overflow-hidden */}
    </section>
  );
}
