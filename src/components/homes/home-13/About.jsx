import React from "react";

import { facts } from "@/data/facts";
import Counter from "@/components/common/Counter";
import { features } from "@/data/features";
import { steps } from "@/data/process";
export default function About() {
  return (
    <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0">
      <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[-10rem]">
            <figure className="rounded-[0.4rem]">
              <img
                className="rounded-[0.4rem]"
                srcSet="/assets/img/photos/about5@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/about5.jpg"
                width={1200}
                height={650}
              />
            </figure>
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <div
                  className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 !text-white !mt-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2/4 lg:-translate-y-2/4 bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
                  style={{
                    backgroundImage: "url(/assets/img/photos/bg2.jpg)",
                  }}
                >
                  <div className="card-body p-[2.25rem] xl:!p-[2.5rem]">
                    <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-20px] !text-center">
                      {facts.map((item, index) => (
                        <div
                          key={index}
                          className="w-6/12 xl:w-3/12 lg:w-3/12 flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]"
                        >
                          <h3 className="counter counter-lg !text-white xl:!text-[2.2rem] !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2">
                            <Counter max={item.number} />
                          </h3>
                          <p className="!text-[0.8rem] font-medium !mb-0 !text-white">
                            {item.description}
                          </p>
                        </div>
                      ))}
                      {/*/column */}
                    </div>
                    {/*/.row */}
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.card */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] !mt-[25px] md:!mt-[4.5rem] lg:!mt-0 xl:!mt-0 !mb-20 items-center">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[20px] !mt-[40px] max-w-full xl:!order-2 lg:!order-2">
            <div
              className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]"
              data-cues="fadeIn"
              data-group="images"
            >
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[16.66666667%] !self-end">
                <figure className="rounded-[0.4rem]">
                  <img
                    className="rounded-[0.4rem]"
                    srcSet="/assets/img/photos/g1@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g1.jpg"
                    width={300}
                    height={312}
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full !self-end">
                <figure className="rounded-[0.4rem]">
                  <img
                    className="rounded-[0.4rem]"
                    srcSet="/assets/img/photos/g2@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g2.jpg"
                    width={350}
                    height={263}
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%]">
                <figure className="rounded-[0.4rem]">
                  <img
                    className="rounded-[0.4rem]"
                    srcSet="/assets/img/photos/g3@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g3.jpg"
                    width={350}
                    height={226}
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full !self-start">
                <figure className="rounded-[0.4rem]">
                  <img
                    className="rounded-[0.4rem]"
                    srcSet="/assets/img/photos/g4@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g4.jpg"
                    width={300}
                    height={338}
                  />
                </figure>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] !px-[15px] !mt-[40px] max-w-full">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
              What We Do?
            </h2>
            <p className="lead !mb-8 xxl:!pr-2 !text-[1.05rem] !leading-[1.6]">
              The full service we are offering is
              <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(116,126,209,.12)]">
                specifically
              </span>
              designed to meet your business needs and projects.
            </p>
            <div
              className="flex flex-wrap mx-[-15px] xl:mx-[-25px] !mt-[-30px]"
              data-cues="slideInUp"
              data-group="services"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="md:w-6/12 lg:w-full xl:w-6/12 w-full flex-[0_0_auto] xl:!px-[25px] !px-[15px] max-w-full !mt-[30px]"
                >
                  <div className="flex flex-row">
                    <div>
                      <div className="icon btn btn-circle btn-lg btn-soft-purple pointer-events-none !mr-5 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 !rounded-[100%]">
                        <i
                          className={`!text-[calc(1.255rem_+_0.06vw)] before:content-['${feature.icon}'] uil ${feature.uilClass}`}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="!mb-1">{feature.title}</h4>
                      <p className="!mb-0">{feature.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
          How We Do It?
        </h2>
        <p className="lead !mb-8 !text-[1.05rem] !leading-[1.6]">
          We make your spending
          <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(116,126,209,.12)]">
            stress-free
          </span>
          for you to have the perfect control.
        </p>
        <div
          className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] process-wrapper line"
          data-cues="slideInUp"
          data-group="process"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full !relative ${step.borderClass}`}
            >
              <span
                className={`icon btn btn-circle btn-lg ${step.iconClass} pointer-events-none !mb-4 !relative z-[2] xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]`}
              >
                <span className="number">{step.number}</span>
              </span>
              <h4 className="!mb-1">{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
