import Counter from "@/components/common/Counter";
import { facts } from "@/data/facts";
import React from "react";

export default function Facts5() {
  return (
    <section id="snippet-5" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-10/12 xxl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="flex flex-wrap mx-[-15px] items-center justify-center counter-wrapper !mt-[-30px]">
              {facts.slice(0, 3).map((elm, i) => (
                <div
                  key={i}
                  className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
                >
                  <div className="card">
                    <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                      <div className="flex flex-row items-center">
                        <div>
                          <div className="icon btn btn-circle btn-lg btn-soft-red pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                            <i className="uil uil-users-alt before:content-['\ed70']" />
                          </div>
                        </div>
                        <div>
                          <h3 className="counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none">
                            <Counter max={elm.number} />
                          </h3>
                          <p className="!mb-0">{elm.description}</p>
                        </div>
                      </div>
                    </div>
                    {/*/.card-body */}
                  </div>
                  {/*/.card */}
                </div>
              ))}
            </div>
            {/*/.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
