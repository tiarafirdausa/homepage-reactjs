import Blogs from "@/components/blogs/Blogs";
import Sidebar from "@/components/blogs/Sidebar";
import Footer5 from "@/components/footers/Footer5";
import Header34 from "@/components/headers/Header34";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blogs 03 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function BlogPage3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header34
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
        />
        <section className="section-frame overflow-hidden">
          <div className="wrapper !bg-[#edf2fc]">
            <div className="container py-14 xl:!py-24 lg:!py-24 md:!py-24 !text-center">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="md:w-7/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                  <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
                    Business News
                  </h1>
                  <p className="lead lg:!px-[1.25rem] xl:!px-[1.25rem] xxl:!px-[2rem] !leading-[1.65] text-[0.9rem] font-medium !mb-[.25rem]">
                    Welcome to our journal. Here you can find the latest company
                    news and business articles.
                  </p>
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.wrapper */}
        </section>

        <div className="wrapper !bg-[#ffffff]">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px]">
              <Sidebar />
              <Blogs
                marginTop={false}
                parentClass="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
