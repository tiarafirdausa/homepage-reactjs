// DemoPage15.jsx

import Hero from "@/components/homes/home-15/Hero";
import React, { useState, useEffect } from "react";
import MetaComponent from "@/components/common/MetaComponent";
import Header32 from "@/components/headers/Header32";
import Footer5 from "@/components/footers/Footer5";

import MediaTerbaru from "@/components/modul/media-terbaru";
import PostTerpopuler from "@/components/modul/post-terpopuler";
import Profile from "@/components/modul/profil";
import PostTerbaru from "@/components/modul/post-terbaru";
import Link from "@/components/modul/links";

import { getHomeModules } from "@/services/modulService";
import { getPosts } from "@/services/postService";
import { getBanners } from "@/services/bannerService";
import Header33 from "@/components/headers/Header33";

const componentMap = {
  "popular-post": PostTerpopuler,
  "recent-post": PostTerbaru,
  media: MediaTerbaru,
  profile: Profile,
  link: Link,
};

export default function DemoPage15() {
  const [homeModules, setHomeModules] = useState([]);
  const [heroItems, setHeroItems] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [modules, postsResponse, bannersResponse] = await Promise.all([
          getHomeModules(),
          getPosts({ pageSize: 3 }),
          getBanners(),
        ]);

        setHomeModules(modules);

        const posts = postsResponse.data.map((post) => ({
          ...post,
          type: "post",
          heroTitle: post.title,
          heroExcerpt: post.excerpt,
          heroImage: post.featured_image,
          heroLink: `/post/${post.slug}`,
        }));

        const banners = bannersResponse.data.map((banner) => ({
          ...banner,
          type: "banner",
          heroTitle: banner.judul,
          heroExcerpt: banner.keterangan,
          heroImage: banner.gambar,
          heroLink: banner.link,
        }));

        const combinedItems = [...banners, ...posts];
        setHeroItems(combinedItems);
      } catch (error) {
        console.error("Gagal mengambil data halaman utama:", error);
      } finally {
        setPageLoading(false);
      }
    };
    fetchAllData();
  }, []);

  const renderModules = () => {
    if (pageLoading) {
      return <div>Loading modules...</div>;
    }

    return homeModules.map((modul) => {
      const Component = componentMap[modul.folder];
      if (Component) {
        return (
          <Component
            key={modul.id_modul}
            className="!mt-16"
            title={modul.judul}
          />
        );
      }
      return null;
    });
  };

  return (
    <>
      <MetaComponent />
      <Header33 />
      {!pageLoading && heroItems.length > 0 && <Hero heroItems={heroItems} />}
      
      {/* Wrapper dihapus dari sini, pemanggilan modul langsung */}
      {renderModules()}

      <Footer5 />
    </>
  );
}