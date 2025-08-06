import { Link } from "react-router-dom";
import React from "react";

export default function Hero() {
  return (
    <>
      <section className="wrapper !bg-[#edf2fc]">
        <div className="container pt-10 pb-20 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div
              className="md:w-10/12 lg:w-8/12 xl:w-8/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-16"
              data-cues="slideInDown"
              data-group="page-title"
            >
              <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-4">
                Staying on top of your bills never been this easy
              </h1>
              <p className="lead !text-[1.05rem] !leading-[1.6] xl:!px-14 xxl:!px-6 !mb-7">
                Easily achieve your saving goals. Have all your recurring and
                one time expenses and incomes in one place.
              </p>
              <div
                className="flex justify-center"
                data-cues="slideInDown"
                data-group="page-title-buttons"
                data-delay={600}
              >
                <span>
                  <Link
                    to={`/signup`}
                    className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded mx-1"
                  >
                    Get Started
                  </Link>
                </span>
                <span>
                  <Link
                    to={`/signup`}
                    className="btn btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] rounded mx-1"
                  >
                    Free Trial
                  </Link>
                </span>
              </div>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /section */}
    </>
  );
}
