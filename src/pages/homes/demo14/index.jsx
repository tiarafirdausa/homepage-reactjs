// import Projects from "@/components/homes/home-14/Projects";
import Projects from "@/components/homes/home-20/Projects";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import Footer5 from "@/components/footers/Footer5";
import Header32 from "@/components/headers/Header32";
export default function DemoPage14() {
  return (
    <>
      <MetaComponent />
          <div className="grow shrink-0">
            <Header32/>
            
              <Projects />
          </div>
          <Footer5 />
    </>
  );
}
