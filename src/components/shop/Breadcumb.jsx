import React from "react";

export default function Breadcumb() {
  return (
    <section className="wrapper bg-[rgba(246,247,249,1)]">
      <div className="container py-14 xl:!py-24 lg:!py-24 md:!py-24 !text-center">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-10/12 xl:w-10/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
              Shop Layout
            </h1>
            <p className="lead !mb-1 !leading-[1.65] text-[0.9rem] font-medium">
              Integer posuere erat a ante venenatis dapibus.
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
