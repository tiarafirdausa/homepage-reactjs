// src/components/homes/home-2/Profile.jsx
import React from "react";
import { BASE_URL } from "@/config/url";

export default function Profile({ settings }) {
  if (!settings || !settings.general || !settings.appearance) {
    return (
      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-20">
          <div>Memuat informasi...</div>
        </div>
      </section>
    );
  }

  const { general, appearance } = settings;

  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-12 xl:!py-16 lg:!py-16 md:!py-16">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] items-center">
          <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mx-auto !mt-[50px]">
            <div className="img-mask mask-3 xxl:!px-5">
              <img
                src={`${BASE_URL}${appearance.logo}`} 
                alt={general.site_title}
                width={100}
                height={100}
              />
            </div>
          </div>
          {/* /column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h2 className="!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !mb-3">
              About Us
            </h2>
            <p className="lead !text-[1.2rem] font-medium !leading-[1.65]">
              👋 Hello! We are **{general.short_title}**
            </p>
            <p>
              {general.site_description}
            </p>
            <p>
              Lokasi kami berada di **{general.address}**, dan Anda dapat menghubungi kami di nomor **{general.phone}**.
            </p>
            <a
              href="#"
              className="btn btn-navy !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-end !mt-2"
            >
              Learn More
              <i className="uil uil-arrow-up-right !ml-[.3rem] before:content-['\e950']" />
            </a>
          </div>
          {/* /column */}
        </div>
      </div>
      {/* /.container */}
    </section>
  );
}