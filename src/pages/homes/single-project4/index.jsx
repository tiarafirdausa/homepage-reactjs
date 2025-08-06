import Footer5 from "@/components/footers/Footer5";

import Header32 from "@/components/headers/Header32";
import ProjectDetails4 from "@/components/projects/ProjectDetails4";
import ProjectNavigation from "@/components/projects/ProjectNavigation";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Single Project 04 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function SingleProjectPage4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-soft-primary !bg-[rgba(246,247,249)]"
          navClass="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
        />
        <div
          className="wrapper image-wrapper bg-image h-[30rem] max-lg:h-[25rem] bg-cover bg-[center_center] bg-no-repeat !bg-scroll relative z-0"
          style={{ backgroundImage: "url(/assets/img/photos/pp23.jpg)" }}
        />

        <ProjectDetails4 />
        <ProjectNavigation />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
