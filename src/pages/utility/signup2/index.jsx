import Footer5 from "@/components/footers/Footer5";

import Header33 from "@/components/headers/Header33";

import Signup2 from "@/components/utility/Signup2";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Signup 02 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function SignupPage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header33 />
        <section className="wrapper bg-[#21262c] opacity-100 !text-white">
          <div className="container pt-32 xl:pt-40 lg:pt-40 md:pt-40 pb-[12.5rem] xl:pb-[12.5rem] lg:pb-[12.5rem] md:pb-[12.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3 !text-white">
                  Sign Up
                </h1>
                <nav className="inline-block" aria-label="breadcrumb">
                  <ol className="breadcrumb flex flex-wrap bg-[none] !mb-4 p-0 !rounded-none list-none">
                    <li className="breadcrumb-item flex !text-[#60697b]">
                      <a className="text-inherit hover:!text-white" href="#">
                        Home
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item active flex !text-white !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(255,255,255,0.35)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons"
                      aria-current="page"
                    >
                      Sign Up
                    </li>
                  </ol>
                </nav>
                {/* /nav */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>

        <Signup2 />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
