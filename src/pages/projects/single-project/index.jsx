import Footer5 from "@/components/footers/Footer5";

import Header32 from "@/components/headers/Header32";

import PagrTitle2 from "@/components/projects/PagrTitle2";
import ProjectDetails from "@/components/projects/ProjectDetails";
import ProjectNavigation from "@/components/projects/ProjectNavigation";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Single Project 01 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function SingleProjectPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav transparent navbar-light xl:pt-[.3rem] lg:pt-[.3rem]"
        />
        <PagrTitle2 />
        <ProjectDetails />
        <ProjectNavigation />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
