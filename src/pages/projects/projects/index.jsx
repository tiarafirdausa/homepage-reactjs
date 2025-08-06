import Footer5 from "@/components/footers/Footer5";

import Header32 from "@/components/headers/Header32";
import Pagetitle from "@/components/projects/Pagetitle";
import Projects1 from "@/components/projects/Projects1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Projects || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function ProjectsPage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
        />
        <Pagetitle />
        <Projects1 />
      </div>
      <Footer5 />
    </>
  );
}
