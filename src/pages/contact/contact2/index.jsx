import Contact2 from "@/components/contact/Contact2";
import Footer5 from "@/components/footers/Footer5";
import Header32 from "@/components/headers/Header32";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Contact 02 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function ContactPage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav transparent navbar-light"
        />
        <section className="wrapper !bg-[#edf2fc]">
          <div className="container pt-10 pb-36 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3 !text-[#343f52]">
                  Get in Touch
                </h1>
                <nav className="inline-block" aria-label="breadcrumb">
                  <ol className="breadcrumb flex flex-wrap bg-[none] p-0 !rounded-none list-none !mb-[20px]">
                    <li className="breadcrumb-item flex !text-[#60697b]">
                      <a
                        className="!text-[#60697b] hover:!text-[#3f78e0]"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item flex !text-[#60697b] !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(96,105,123,.35)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons active"
                      aria-current="page"
                    >
                      Contact
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

        <Contact2 />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
