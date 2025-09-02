// src/pages/blogs/blog2/index.jsx

import Blogs from "@/components/blogs/Blogs";
import Sidebar from "@/components/blogs/Sidebar";
import Footer5 from "@/components/footers/Footer5";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  getPosts,
  getPostsByCategory,
  getPostsByTag,
} from "@/services/postService";
import MetaComponent from "@/components/common/MetaComponent";
import Header32 from "@/components/headers/Header32";
import { useLocation } from "react-router-dom";

export default function BlogPage2({ slug: propSlug, type }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const { slug: paramSlug } = useParams();
  const currentSlug = paramSlug || propSlug;
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query") || "";
  const [displayName, setDisplayName] = useState(currentSlug || "");

  const fetchPosts = async (pageIndex = 1) => {
    setLoading(true);
    try {
      let data;
      const pageSize = 5;
      const params = { pageIndex, pageSize };
      if (searchQuery) {
        params.query = searchQuery;
      }

      if (type === "category" && currentSlug) {
        data = await getPostsByCategory(currentSlug, params);
        if (data.data?.length > 0 && data.data[0].category) {
          setDisplayName(data.data[0].category.name);
        }
      } else if (type === "tag" && currentSlug) {
        data = await getPostsByTag(currentSlug, params);
        if (data.data?.length > 0) {
          const currentTag = data.data[0].tags.find(
            (tag) => tag.slug === currentSlug
          );
          if (currentTag) {
            setDisplayName(currentTag.name);
          }
        }
      } else {
        data = await getPosts(params);
      }
      setPosts(data.data);
      setCurrentPage(data.pageIndex);
      setTotalPages(Math.ceil(data.total / pageSize));
    } catch (error) {
      console.error("Gagal mengambil data post:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentSlug, type, currentPage, searchQuery]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <MetaComponent />
      <div className="grow shrink-0">
        <Header32 colorClass="!bg-[#edf2fc]" />
        <section className="section-frame overflow-hidden">
          <div className="wrapper !bg-[#edf2fc]">
            <div className="container py-14 xl:!py-24 lg:!py-24 md:!py-24 !text-center">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="md:w-7/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                  <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
                    {searchQuery
                      ? `Hasil Pencarian: "${searchQuery}"`
                      : type === "category"
                      ? `Kategori: ${displayName}`
                      : type === "tag"
                      ? `Tags: #${displayName}`
                      : "Semua Post"}
                  </h1>
                  <p className="lead lg:!px-[1.25rem] xl:!px-[1.25rem] xxl:!px-[2rem] !leading-[1.65] text-[0.9rem] font-medium !mb-[.25rem]">
                    Welcome to our journal. Here you can find the latest company
                    news and business articles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper !bg-[#ffffff]">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px]">
              <Blogs
                marginTop={false}
                parentClass="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px]"
                posts={posts}
                totalPages={totalPages}
                activePage={currentPage}
                onPageChange={handlePageChange}
              />
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}