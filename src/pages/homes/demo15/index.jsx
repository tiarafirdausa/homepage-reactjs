// src/pages/homes/demo15/index.jsx

import Hero from "@/components/homes/home-15/Hero";
import React, { useState, useEffect } from "react";
import MetaComponent from "@/components/common/MetaComponent";
import Header32 from "@/components/headers/Header32";
import Footer5 from "@/components/footers/Footer5";

import MediaTerbaru from "@/components/modul/media-terbaru";
import PostTerpopuler from "@/components/modul/post-terpopuler";
import Profile from "@/components/modul/profil";

import { getHomeModules } from "@/services/modulService";
import { getSettings } from "@/services/settingsService";
import PostTerbaru from "@/components/modul/post-terbaru";
import Header33 from "@/components/headers/Header33";

const componentMap = {
  "popular-post": PostTerpopuler,
  "recent-post": PostTerbaru,
  "media": MediaTerbaru,
  "profile": Profile,
};

export default function DemoPage15() {
  const [homeModules, setHomeModules] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const fetchAllModules = async () => {
      try {
        const modules = await getHomeModules();
        const fetchedModules = await Promise.all(
          modules.map(async (modul) => {
            let data = null;
            if (modul.folder === "profile") {
              const response = await getSettings();
              data = response;
            }
            return { ...modul, data };
          })
        );
        setHomeModules(fetchedModules);
      } catch (error) {
        console.error("Gagal mengambil data modul home:", error);
      } finally {
        setPageLoading(false);
      }
    };

    fetchAllModules();
  }, []);

  const renderModules = () => {
    if (pageLoading) {
      return <div>Loading modules...</div>;
    }

    return homeModules.map((modul) => {
      const Component = componentMap[modul.folder];
      if (Component) {
        if (
          modul.folder === "popular-post" ||
          modul.folder === "recent-post" ||
          modul.folder === "media"
        ) {
          return <Component key={modul.id_modul} className="!mt-16" />;
        }

        if (modul.folder === "profile" && modul.data) {
          return <Component key={modul.id_modul} settings={modul.data} />;
        }
      }
      return null;
    });
  };

  return (
    <>
      <MetaComponent />
      <div className="page-frame !bg-[#e0e9fa]">
        <div className="grow shrink-0">
          <Header33 />
          <section className="wrapper bg-[#21262c] opacity-100">
            <Hero />
          </section>
            {renderModules()}
          <Footer5 />
        </div>
      </div>
    </>
  );
}
