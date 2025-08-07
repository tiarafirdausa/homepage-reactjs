// src/components/AppRoutes.jsx

import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getMenuWithItems } from "@/services/menuService";

// Lazy-loaded components for dynamic routes
const PageContent = lazy(() => import("@/pages/about/about/index"));
const PostList = lazy(() => import("@/pages/blogs/blog2/index"));
const CategoryPage = lazy(() => import("@/pages/blogs/blog2/index"));
// const MediaList = lazy(() => import("@/components/MediaList"));
// const MediaCategoryPage = lazy(() => import("@/components/MediaCategoryPage"));
// const CustomPage = lazy(() => import("@/components/CustomPage"));
// const NotFoundPage = lazy(() => import("@/pages/utility/404"));

const componentMap = {
  page: PageContent,
  post: PostList, 
  category: CategoryPage,
//   media: MediaList,
//   media_category: MediaCategoryPage,
};


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
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<DemoPage15 />} />
        <Route path="/signin" element={<SigninPage />} />
        
        {menuItems.map((item) => {
          let path = item.url;
          if (item.type === 'post' && item.reference_id) {
            path = `/post/${item.url.replace(/^\//, '')}`;
          } else if (item.type === 'media' && item.reference_id) {
            path = `/media/${item.url.replace(/^\//, '')}`;
          }

          const Component = componentMap[item.type];
          
          if (path && Component) {
            return (
              <Route
                key={item.id}
                path={path}
                element={<Component itemId={item.reference_id} url={item.url} />}
              />
            );
          }
          return null;
        })}

      </Routes>
    </Suspense>
  );
};

export default AppRoutes;