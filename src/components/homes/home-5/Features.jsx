import React from "react";

import { listFeatures2 } from "@/data/features";
export default function Features() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 lg:!mb-[12.5rem] xl:!mb-[17.5rem]">
        <div className="flex flex-wrap mx-0 !mb-[6rem]">
          <div
            className="w-9/12 sm:w-10/12 lg:w-9/12 xl:w-9/12 flex-[0_0_auto] max-w-full !mx-auto !mt-[-5rem] xl:!mt-[-10rem] lg:!mt-[-10rem] md:!mt-[-10rem]"
            data-cues=""
            data-group="images"
            data-delay={1500}
          >
            <img
              className="max-w-full h-auto !mx-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
              data-cue="slideInUp"
              srcSet="/assets/img/photos/sa1@2x.jpg 2x"
              alt="image"
              src="/assets/img/photos/sa1.jpg"
              width={1000}
              height={625}
            />
            <img
              className="absolute !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
              data-cue="slideInRight"
              srcSet="/assets/img/photos/sa2@2x.jpg 2x"
              style={{
                top: "20%",
                right: "-10%",
                maxWidth: "30%",
                height: "auto",
              }}
              alt="image"
              src="/assets/img/photos/sa2.jpg"
              width={200}
              height={313}
            />
            <img
              className="absolute !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
              data-cue="slideInLeft"
              srcSet="/assets/img/photos/sa3@2x.jpg 2x"
              style={{
                top: "10%",
                left: "-10%",
                maxWidth: "30%",
                height: "auto",
              }}
              alt="image"
              src="/assets/img/photos/sa3.jpg"
              width={268}
              height={85}
            />
            <img
              className="absolute !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
              data-cue="slideInLeft"
              srcSet="/assets/img/photos/sa4@2x.jpg 2x"
              style={{
                bottom: "10%",
                left: "-13%",
                maxWidth: "30%",
                height: "auto",
              }}
              alt="image"
              src="/assets/img/photos/sa4.jpg"
              width={260}
              height={287}
            />
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px] !relative">
            <div
              className="shape rounded !bg-[#fae6e7] rellax !block !absolute"
              data-rellax-speed={0}
              style={{
                top: "50%",
                left: "50%",
                width: "50%",
                height: "60%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              }}
            />
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] !relative">
              <div className="w-6/12 flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]">
                <img
                  className="max-w-full h-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                  srcSet="/assets/img/photos/sa5@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/sa5.jpg"
                  width={300}
                  height={174}
                />
                <img
                  className="max-w-full h-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-[2.5rem]/12 flex-[0_0_auto] !ml-auto"
                  srcSet="/assets/img/photos/sa6@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/sa6.jpg"
                  width={250}
                  height={276}
                />
              </div>
              {/* /column */}
              <div className="w-6/12 flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]">
                <img
                  className="max-w-full h-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5"
                  srcSet="/assets/img/photos/sa7@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/sa7.jpg"
                  width={300}
                  height={181}
                />
                <img
                  className="max-w-full h-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-[2.5rem]/12 flex-[0_0_auto]"
                  srcSet="/assets/img/photos/sa8@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/sa8.jpg"
                  width={250}
                  height={276}
                />
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5">
              We have considered our solutions to support every stage of growth.
            </h3>
            <p className="!mb-5">
              Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
              nulla non metus auctor fringilla. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac
              cursus commodo.
            </p>
            <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                  {listFeatures2.slice(0, 2).map((elm, i) => (
                    <li key={i} className="relative !pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#e2626b] !bg-[#fae3e4] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                      </span>
                      <span>{elm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                  {listFeatures2.slice(2).map((elm, i) => (
                    <li key={i} className="relative !pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#e2626b] !bg-[#fae3e4] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                      </span>
                      <span>{elm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px] !relative xl:!order-2 lg:!order-2">
            <div
              className="shape rounded !bg-[#e1f6f0] rellax !block !absolute"
              data-rellax-speed={0}
              style={{
                top: "50%",
                left: "50%",
                width: "50%",
                height: "60%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              }}
            />
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] !relative">
              <div className="w-5/12 flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full">
                <img
                  className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5 flex !ml-auto"
                  data-cue="fadeIn"
                  data-delay={300}
                  srcSet="/assets/img/photos/sa9@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/sa9.jpg"
                  width={250}
                  height={178}
                />
                <img
                  className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] !ml-auto"
                  data-cue="fadeIn"
                  data-delay={600}
                  srcSet="/assets/img/photos/sa10@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/sa10.jpg"
                  width={200}
                  height={221}
                />
              </div>
              {/* /column */}
              <div className="w-7/12 flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full">
                <img
                  className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                  data-cue="fadeIn"
                  data-delay={900}
                  srcSet="/assets/img/photos/sa11@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/sa11.jpg"
                  width={350}
                  height={163}
                />
                <img
                  className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex w-11/12 flex-[0_0_auto]"
                  data-cue="fadeIn"
                  data-delay={1200}
                  srcSet="/assets/img/photos/sa12@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/sa12.jpg"
                  width={325}
                  height={212}
                />
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5">
              We make spending stress free so you have the perfect control.
            </h3>
            <p className="!mb-5">
              Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
              nulla non metus auctor fringilla. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac
              cursus commodo.
            </p>
            <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                  {listFeatures2.slice(0, 2).map((elm, i) => (
                    <li key={i} className="relative !pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#45c4a0] !bg-[#def4ee] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                      </span>
                      <span>{elm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                  {listFeatures2.slice(2).map((elm, i) => (
                    <li key={i} className="relative !pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#45c4a0] !bg-[#def4ee] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                      </span>
                      <span>{elm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px] !relative">
            <div
              className="shape !rounded-[.4rem] !bg-[#fef3e4] rellax !block !absolute"
              data-rellax-speed={0}
              style={{
                top: "50%",
                left: "50%",
                width: "50%",
                height: "60%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              }}
            />
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] !relative items-center">
              <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] !px-[15px] max-w-full">
                <img
                  className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !ml-auto"
                  data-cue="fadeIn"
                  data-delay={300}
                  srcSet="/assets/img/photos/sa13@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/sa13.jpg"
                  width={300}
                  height={355}
                />
              </div>
              {/* /column */}
              <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] !px-[15px] max-w-full">
                <img
                  className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                  data-cue="fadeIn"
                  data-delay={900}
                  srcSet="/assets/img/photos/sa14@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/sa14.jpg"
                  width={300}
                  height={155}
                />
                <img
                  className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto]"
                  data-cue="fadeIn"
                  data-delay={1200}
                  srcSet="/assets/img/photos/sa15@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/sa15.jpg"
                  width={250}
                  height={258}
                />
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5">
              We bring solutions to manage your finance the way works best.
            </h3>
            <p className="!mb-5">
              Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
              nulla non metus auctor fringilla. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac
              cursus commodo.
            </p>
            <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                  {listFeatures2.slice(0, 2).map((elm, i) => (
                    <li key={i} className="relative !pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#fab758] !bg-[#feeed9] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                      </span>
                      <span>{elm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                  {listFeatures2.slice(2).map((elm, i) => (
                    <li key={i} className="relative !pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#fab758] !bg-[#feeed9] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                      </span>
                      <span>{elm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
