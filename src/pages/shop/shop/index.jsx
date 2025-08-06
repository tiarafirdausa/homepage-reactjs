import Footer5 from "@/components/footers/Footer5";
import Header31 from "@/components/headers/Header31";
import Breadcumb from "@/components/shop/Breadcumb";
import Features from "@/components/shop/Features";
import Shop from "@/components/shop/Shop";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Shop || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function ShopPage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0 shop">
        <Header31 />
        <Breadcumb />
        <Shop />
        <Features />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
