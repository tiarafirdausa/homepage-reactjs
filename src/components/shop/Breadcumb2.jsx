import React from "react";

export default function Breadcumb2() {
  return (
    <div className="wrapper bg-[rgba(246,247,249,1)]">
      <div className="container py-3 xl:!py-5 lg:!py-5 md:!py-5">
        <nav className="inline-block" aria-label="breadcrumb">
          <ol className="breadcrumb flex flex-wrap bg-[none] p-0 !rounded-none list-none !mb-0">
            <li className="breadcrumb-item flex !text-[#60697b]">
              <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                Home
              </a>
            </li>
            <li
              className="breadcrumb-item flex !text-[#60697b] !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(96,105,123,0.35)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons active"
              aria-current="page"
            >
              Shop
            </li>
          </ol>
        </nav>
        {/* /nav */}
      </div>
      {/* /.container */}
    </div>
  );
}
