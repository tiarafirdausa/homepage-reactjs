import Faqs from "@/components/career/Faqs";
import Features from "@/components/career/Features";
import Jobs from "@/components/career/Jobs";
import Testimonials from "@/components/career/Teatimonials";
import Footer5 from "@/components/footers/Footer5";
import Header32 from "@/components/headers/Header32";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";

export default function CareerPage() {
  return (
    <>
      <MetaComponent/>
      <div className="grow shrink-0">
        <Header32/>
        <Jobs />
      </div>
      <Footer5/>
    </>
  );
}
