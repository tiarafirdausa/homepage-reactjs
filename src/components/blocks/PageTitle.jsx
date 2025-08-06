import React from "react";

export default function PageTitle({ pagename = "About" }) {
  return (
    <section className="wrapper !bg-[#edf2fc]">
      <div className="container pt-10 pb-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="md:w-9/12 lg:w-7/12 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
              Blocks - {pagename}
            </h1>
            <p className="lead xxl:!px-[2.5rem] !leading-[1.65] text-[0.9rem] font-medium">
              Copy any custom block snippet below and paste it on your page to
              build your website easily.
            </p>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
