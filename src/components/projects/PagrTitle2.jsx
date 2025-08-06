import React from "react";

export default function PagrTitle2() {
  return (
    <section className="wrapper !bg-[#edf2fc]">
      <div className="container pt-10 pb-36 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-60 lg:pb-60 md:pb-60 !text-center">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="md:w-10/12 lg:w-8/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="post-header">
              <div className="inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                <a href="#" className="hover" rel="category">
                  Identity
                </a>
              </div>
              {/* /.post-category */}
              <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
                Commodo Dolor Bibendum Parturient Cursus Mollis
              </h1>
              <p className="lead !leading-[1.65] text-[.9rem] font-medium md:!px-14 lg:!px-14 xl:!px-20 xxl:!px-32">
                Integer posuere erat a ante venenatis dapibus posuere. Maecenas
                faucibus mollis interdum.
              </p>
            </div>
            {/* /.post-header */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
