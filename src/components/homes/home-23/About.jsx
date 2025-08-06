import React from "react";

import { skills3 } from "@/data/progress";
import ProgressBarComponent from "@/components/common/ProgressBar";
export default function About() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-30px] items-center">
          <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mx-auto !mt-[30px]">
            <div className="img-mask mask-1">
              <img
                alt="image"
                src="/assets/img/photos/about29.jpg"
                width={610}
                height={610}
              />
            </div>
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[30px]">
            <h2 className="xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] font-semibold !tracking-[normal] !mb-5">
              Hi, I'm Julia, a documentary wedding and couples photographer
              currently working from and based in London.
            </h2>
            <p className="!mb-6">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et. Duis mollis, est non commodo luctus, nisi
              erat porttitor ligula, eget lacinia odio. Sed posuere consectetur
              est at lobortis facilisis in.
            </p>
            <div className="flex flex-wrap mx-[-15px] counter-wrapper !mt-[-30px]">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <h3 className="counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none font-semibold !mb-2">
                  500K+
                </h3>
                <p className="!text-[0.8rem] font-medium !mb-0">Shots Taken</p>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <h3 className="counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none font-semibold !mb-2">
                  500+
                </h3>
                <p className="!text-[0.8rem] font-medium !mb-0">
                  Happy Clients
                </p>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <h3 className="counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none font-semibold !mb-2">
                  25
                </h3>
                <p className="!text-[0.8rem] font-medium !mb-0">Awards Won</p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-8">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[30px]">
            <h3 className="!text-[1.15rem] !leading-[1.4] font-semibold">
              My Skills
            </h3>
            <p>
              Etiam porta sem malesuada magna mollis euismod. Praesent commodo
              cursus magna vel consectetur purus sit amet fermentum.
            </p>
            <ul className="progress-list m-0 p-0 list-none">
              {skills3.map((skill, index) => (
                <li key={index} className={skill.className}>
                  <p className="!mb-[.25rem]">{skill.name}</p>
                  <div className="progressbar line relative soft-leaf">
                    <ProgressBarComponent max={skill.value} />
                  </div>
                </li>
              ))}
            </ul>
            {/* /.progress-list */}
          </div>
          {/* /column */}
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[30px]">
            <h3 className="!text-[1.15rem] !leading-[1.4] font-semibold">
              Why Choose Me?
            </h3>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cras mattis
              consectetur purus sit amet fermentum. Donec ullamcorper nulla non
              metus auctor fringilla. Nullam id dolor id nibh ultricies. Cras
              mattis consectetur purus amet fermentum.
            </p>
            <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
              <li className="relative !pl-6">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e7f2ec] !text-[#7cb798] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Aenean eu leo quam pellentesque.
              </li>
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e7f2ec] !text-[#7cb798] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Nullam quis risus eget urna mollis.
              </li>
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e7f2ec] !text-[#7cb798] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Donec id elit non mi porta gravida.
              </li>
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e7f2ec] !text-[#7cb798] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Fusce dapibus tellus ac commodo.
              </li>
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e7f2ec] !text-[#7cb798] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Cras justo odio dapibus ac facilisis in.
              </li>
            </ul>
          </div>
          {/* /column */}
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[30px]">
            <h3 className="!text-[1.15rem] !leading-[1.4] font-semibold">
              My Process
            </h3>
            <div className="flex flex-row !mb-5">
              <div>
                <span className="icon btn btn-circle btn-soft-leaf pointer-events-none !mt-1 !mr-5 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                  <span className="number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0">
                    1
                  </span>
                </span>
              </div>
              <div>
                <h5 className="!mb-1 !text-[.95rem] !leading-[1.5] !tracking-[normal] font-semibold">
                  Collect Ideas
                </h5>
                <p className="!mb-0">
                  Nulla vitae elit libero pharetra augue dapibus. Praesent
                  commodo cursus.
                </p>
              </div>
            </div>
            <div className="flex flex-row !mb-5">
              <div>
                <span className="icon btn btn-circle btn-soft-leaf pointer-events-none !mt-1 !mr-5 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                  <span className="number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0">
                    2
                  </span>
                </span>
              </div>
              <div>
                <h5 className="!mb-1 !text-[.95rem] !leading-[1.5] !tracking-[normal] font-semibold">
                  Data Analysis
                </h5>
                <p className="!mb-0">
                  Vivamus sagittis lacus vel augue laoreet. Etiam porta sem
                  malesuada magna.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <span className="icon btn btn-circle btn-soft-leaf pointer-events-none !mt-1 !mr-5 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                  <span className="number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0">
                    3
                  </span>
                </span>
              </div>
              <div>
                <h5 className="!mb-1 !text-[.95rem] !leading-[1.5] !tracking-[normal] font-semibold">
                  Finalize Product
                </h5>
                <p className="!mb-0">
                  Cras mattis consectetur purus sit amet. Aenean lacinia
                  bibendum nulla sed.
                </p>
              </div>
            </div>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
