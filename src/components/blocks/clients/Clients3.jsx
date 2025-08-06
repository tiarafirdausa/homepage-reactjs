import { brandImages } from "@/data/brands";

import React from "react";

export default function Clients3() {
  return (
    <section id="snippet-3" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
          Our Clients
        </h2>
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] !mb-10 !mt-[-25px]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] !px-[15px] max-w-full !mt-[25px]">
            <h3 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-0">
              We are trusted by over 300+ clients. Join them by using our
              services and grow your business.
            </h3>
          </div>
          {/* /column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] !px-[15px] max-w-full !mt-[25px]">
            <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-0">
              Donec ullamcorper nulla non metus auctor fringilla. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer posuere erat a ante. Maecenas faucibus mollis
              interdum. Cras justo odio mollis.
            </p>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] row-cols-2 row-cols-md-3 row-cols-xl-5 xl:mx-[-15px] lg:mx-[-15px] !mt-[-30px] justify-center">
          {brandImages.slice(0, 5).map((elm, i) => (
            <div
              key={i}
              className="xl:w-1/5 lg:w-4/12 md:w-4/12 w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !h-full items-center">
                <div className="card-body items-center flex !px-3 py-6 xl:!p-8 lg:!p-8 md:!p-8">
                  <figure className="md:!px-3 xl:!px-0 xxl:!px-3 !mb-0">
                    <img alt="image" src={elm} width="450" height="301" />
                  </figure>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
          ))}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
