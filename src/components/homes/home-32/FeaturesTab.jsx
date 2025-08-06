import React from "react";

import { listFeatures } from "@/data/features";
export default function FeaturesTab() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-8/12 lg:!ml-[16.66666667%] xl:w-8/12 xl:!ml-[16.66666667%] w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h2 className="!text-[0.8rem] uppercase !text-[#3f78e0] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
              Why Choose Sandbox?
            </h2>
            <h3 className="xl:!text-[2rem] !leading-[1.2] !text-[calc(1.325rem_+_0.9vw)] font-semibold !mb-10 xl:!px-10 xxl:!px-20">
              Here are a few reasons why our customers choose Sandbox.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <ul className="nav nav-tabs nav-tabs-bg flex justify-between nav-justified xl:!flex-row lg:!flex-row flex-col !border-transparent">
          <li className="nav-item !mb-[20px]">
            <a
              className="nav-link !flex flex-row hover:!shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] active"
              data-bs-toggle="tab"
              href="#tab2-1"
            >
              <div>
                <img
                  className="svg-inject icon-svg icon-svg-md !w-[4rem] !text-[#fab758] !mr-[1.25rem]"
                  alt="image"
                  src="/assets/img/illustrations/ni7.png"
                  width={471}
                  height={356}
                />
              </div>
              <div>
                <h3 className="!mb-2">Easy Usage</h3>
                <p>Duis mollis commodo luctus cursus commodo tortor.</p>
              </div>
            </a>
          </li>
          <li className="nav-item !mb-[20px]">
            <a
              className="nav-link !flex flex-row hover:!shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
              data-bs-toggle="tab"
              href="#tab2-2"
            >
              <div>
                <img
                  className="svg-inject icon-svg icon-svg-md !w-[4rem] !text-[#45c4a0] !mr-[1.25rem]"
                  alt="image"
                  src="/assets/img/illustrations/ni8.png"
                  width={443}
                  height={400}
                />
              </div>
              <div>
                <h3 className="!mb-2">Fast Transactions</h3>
                <p>Vivamus sagittis lacus augue fusce dapibus tellus nibh.</p>
              </div>
            </a>
          </li>
          <li className="nav-item !mb-[20px]">
            <a
              className="nav-link !flex flex-row hover:!shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
              data-bs-toggle="tab"
              href="#tab2-3"
            >
              <div>
                <img
                  className="svg-inject icon-svg icon-svg-md !w-[4rem] !text-[#e2626b] !mr-[1.25rem]"
                  alt="image"
                  src="/assets/img/illustrations/ni9.png"
                  width={410}
                  height={321}
                />
              </div>
              <div>
                <h3 className="!mb-2">Secure Payments</h3>
                <p>Vestibulum ligula porta felis maecenas faucibus mollis.</p>
              </div>
            </a>
          </li>
        </ul>
        {/* /.nav-tabs */}
        <div className="tab-content !mt-6 xl:!mt-8 lg:!mt-8 md:!mb-9">
          <div className="tab-pane fade show active" id="tab2-1">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <div className="flex flex-wrap mx-[-12.5px] !mt-[-25px] items-center">
                  <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !ml-auto"
                      srcSet="/assets/img/photos/sa13@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/sa13.jpg"
                      width={300}
                      height={355}
                    />
                  </div>
                  {/* /column */}
                  <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                      srcSet="/assets/img/photos/sa14@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/sa14.jpg"
                      width={300}
                      height={155}
                    />
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto]"
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
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <h2 className="!mb-3 !leading-[1.35]">Easy Usage</h2>
                <p>
                  Etiam porta sem malesuada magna mollis euismod. Donec
                  ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                  porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                  tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                  fermentum massa justo sit amet risus. Nullam quis risus eget
                  urna.
                </p>
                <ul className="pl-0 list-none bullet-bg bullet-soft-yellow">
                  {listFeatures.map((elm, i) => (
                    <li key={i} className="relative !pl-6">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      {elm}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !mt-2"
                >
                  Learn More
                </a>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/.tab-pane */}
          <div className="tab-pane fade" id="tab2-2">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] xl:!order-2 lg:!order-2">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                  <div className="w-5/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5 flex !ml-auto"
                      srcSet="/assets/img/photos/sa9@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/sa9.jpg"
                      width={250}
                      height={178}
                    />
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] !ml-auto"
                      srcSet="/assets/img/photos/sa10@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/sa10.jpg"
                      width={200}
                      height={221}
                    />
                  </div>
                  {/* /column */}
                  <div className="w-7/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                      srcSet="/assets/img/photos/sa11@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/sa11.jpg"
                      width={350}
                      height={163}
                    />
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex w-11/12 flex-[0_0_auto]"
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
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <h2 className="!mb-3 !leading-[1.35]">Fast Transactions</h2>
                <p>
                  Etiam porta sem malesuada magna mollis euismod. Donec
                  ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                  porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                  tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                  fermentum massa justo sit amet risus. Nullam quis risus eget
                  urna.
                </p>
                <ul className="pl-0 list-none bullet-bg bullet-soft-green">
                  {listFeatures.map((elm, i) => (
                    <li key={i} className="relative !pl-6 !mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      {elm}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !mt-2"
                >
                  Learn More
                </a>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/.tab-pane */}
          <div className="tab-pane fade" id="tab2-3">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                  <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                      srcSet="/assets/img/photos/sa5@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/sa5.jpg"
                      width={300}
                      height={174}
                    />
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] !ml-auto"
                      srcSet="/assets/img/photos/sa6@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/sa6.jpg"
                      width={250}
                      height={276}
                    />
                  </div>
                  {/* /column */}
                  <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5"
                      srcSet="/assets/img/photos/sa7@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/sa7.jpg"
                      width={300}
                      height={181}
                    />
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto]"
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
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <h2 className="!mb-3 !leading-[1.35]">Secure Payments</h2>
                <p>
                  Etiam porta sem malesuada magna mollis euismod. Donec
                  ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                  porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                  tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                  fermentum massa justo sit amet risus. Nullam quis risus eget
                  urna.
                </p>
                <ul className="pl-0 list-none bullet-bg bullet-soft-red">
                  {listFeatures.map((elm, i) => (
                    <li key={i} className="relative !pl-6">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                      {elm}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !mt-2"
                >
                  Learn More
                </a>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/.tab-pane */}
        </div>
        {/* /.tab-content */}
      </div>
      {/* /.container */}
    </section>
  );
}
