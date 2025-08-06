import React from "react";
import Testimonials from "./Testimonials";
import Faqs from "./Faqs";
import Features from "./Features";
import Plans from "./Plans";

export default function Pricing() {
  return (
    <section className="wrapper">
      <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
        <div className="pricing-wrapper !relative !mt-[-8rem] xl:!mt-[-12.5rem] lg:!mt-[-12.5rem] md:!mt-[-12.5rem] !mb-14 xl:!mb-20 lg:!mb-20 md:!mb-20">
          <div
            className="shape bg-dot primary rellax !w-[6rem] !h-[8rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50"
            data-rellax-speed={1}
            style={{ top: "2rem", right: "-2.4rem" }}
          />
          <div
            className="shape !rounded-[50%] bg-line red rellax !w-[8rem] !h-[8rem] hidden xl:block lg:block absolute z-[1] opacity-50"
            data-rellax-speed={1}
            style={{ bottom: "0.5rem", left: "-2.5rem" }}
          />
          <Plans />
          {/*/.row */}
        </div>
        {/*/.pricing-wrapper */}
        <Features />
        {/*/.row */}
        <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center">
          Pricing FAQ
        </h2>
        <p className="lead text-[0.9rem] font-medium !leading-[1.65] !text-center !mb-10 md:!px-24 xl:!px-0 lg:!px-0">
          If you don't see an answer to your question, you can send us an email
          from our contact form.
        </p>
        <Faqs />
        {/*/.row */}
        <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center">
          Happy Customers
        </h2>
        <p className="lead text-[0.9rem] font-medium !leading-[1.65] !text-center !mb-6 md:!px-24 lg:!px-0">
          Customer satisfaction is our major goal. See what our customers are
          saying about us.
        </p>
        <div className="!relative">
          <div
            className="shape !rounded-[50%] !bg-[#fff8ee] rellax !w-[6rem] !h-[6rem] absolute z-[1]"
            data-rellax-speed={1}
            style={{ bottom: "0.5rem", right: "-1.7rem" }}
          />
          <div
            className="shape bg-dot primary rellax !w-[6rem] !h-[6rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50"
            data-rellax-speed={1}
            style={{ top: "-1rem", left: "-1.7rem" }}
          />
          <Testimonials />
          {/* /.swiper-container */}
        </div>
        {/* /.relative */}
      </div>
      {/* /.container */}
    </section>
  );
}
