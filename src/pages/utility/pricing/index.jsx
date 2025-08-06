import MetaComponent from "@/components/common/MetaComponent";
import Footer5 from "@/components/footers/Footer5";
import Header32 from "@/components/headers/Header32";
import Pagetitle from "@/components/utility/pricing/Pagetitle";
import Pricing from "@/components/utility/pricing/Pricing";
import React from "react";
const metadata = {
  title:
    "Pricing || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function PricingPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav transparent navbar-light"
        />
        <Pagetitle />
        <Pricing />
        <section
          className="wrapper image-wrapper bg-auto no-overlay bg-image !text-center !mb-[4.5rem] xl:!mb-24 lg:!mb-24 md:!mb-24 bg-map relative z-0 bg-[center_center] bg-no-repeat !bg-scroll"
          style={{ backgroundImage: "url(/assets/img/map.png)" }}
        >
          <div className="container xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center">
                  Join Our Community
                </h2>
                <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-5 xl:!px-3 lg:!px-3 md:!px-24">
                  We are trusted by over 5000+ clients. Join them by using our
                  services and grow your business.
                </p>
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  Join Us
                </a>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
