// src/components/AppRoutes.jsx

import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getMenuWithItems } from "@/services/menuService";

// Menggunakan lazy() untuk memuat komponen secara dinamis (lazy loading)
const PageContent = lazy(() => import("@/pages/projects/single-project3"));
const PostList = lazy(() => import("@/pages/blogs/blog2/index"));
const PostDetail = lazy(() => import("@/pages/blogs/blog-post2/index"));
const Media = lazy(() => import("@/pages/homes/demo14/index"));
const NotFoundPage = lazy(() => import("@/pages/utility/404-page/index"));
const Link = lazy(() => import("@/pages/career/career"));

const AppRoutes = ({ DemoPage15, SigninPage }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data = await getMenuWithItems("main-menu");
        setMenuItems(data.items);
      } catch (error) {
        console.error("Gagal mengambil menu items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenuItems();
  }, []);

  if (loading) {
    return <div>Loading routes...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<DemoPage15 />} />
        <Route path="/signin" element={<SigninPage />} />

        {menuItems
          .filter((item) => item.type === "page")
          .map((item) => (
            <Route
              key={item.id}
              path={item.url}
              element={<PageContent slug={item.url.replace(/^\//, "")} />}
            />
          ))}

        {menuItems
          .filter((item) => item.type === "post" || item.type === "category")
          .map((item) => (
            <Route
              key={item.id}
              path={item.url}
              element={
                <PostList type={item.type} slug={item.url.replace(/^\//, "")} />
              }
            />
          ))}

        {menuItems
          .filter(
            (item) => item.type === "media" || item.type === "media_category"
          )
          .map((item) => (
            <Route
              key={item.id}
              path={item.url}
              element={
                <Media
                  categorySlug={
                    item.type === "media_category"
                      ? item.url.split("/").pop()
                      : null
                  }
                />
              }
            />
          ))}

        {menuItems
          .filter((item) => item.type === "link")
          .map((item) => (
            <Route key={item.id} path={item.url} element={<Link />} />
          ))}

        <Route path="/kategori/:slug" element={<PostList type="category" />} />
        <Route path="/tags/:slug" element={<PostList type="tag" />} />
        <Route path="/post/:slug" element={<PostDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;