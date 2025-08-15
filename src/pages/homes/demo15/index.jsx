// src/pages/homes/demo15/index.jsx
import Contact from "@/components/homes/home-15/Contact";
import Hero from "@/components/homes/home-15/Hero";
import Process from "@/components/homes/home-15/Process";
import React, { useState, useEffect } from "react";
import MetaComponent from "@/components/common/MetaComponent";
import Blogs4 from "@/components/blocks/blogs/Blogs4";
import { getPosts } from "@/services/postService";
import Projects from "@/components/homes/home-2/Projects";
import { getMedia } from "@/services/mediaService";
import Header32 from "@/components/headers/Header32";
import Footer5 from "@/components/footers/Footer5";

export default function DemoPage15() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts({ perPage: 3 });
        setPosts(response.data);
      } catch (error) {
        console.error("Gagal mengambil data blog:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchProjects = async () => {
      try {
        const response = await getMedia({ pageSize: 5 });
        setProjects(response.data);
      } catch (error) {
        console.error("Gagal mengambil data proyek:", error);
      } finally {
        setProjectsLoading(false);
      }
    };

    fetchPosts();
    fetchProjects();
  }, []);

  return (
    <>
      <MetaComponent />
      <div className="grow shrink-0">
        <Header32/>
        <>
          <section className="wrapper bg-[#21262c] opacity-100">
            <Hero />
          </section>
          <section className="wrapper !bg-[#ffffff] angled lower-end relative after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
            <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
              <Process />
              {loading ? (
                <div>Loading posts...</div>
              ) : (
                <Blogs4 posts={posts} className="!mt-16" />
              )}

              <div className="flex flex-wrap mx-[-15px] !mt-12">
                <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
                  <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
                    Latest Projects
                  </h2>
                  <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-DMSerif !font-normal xl:!text-[2rem] !leading-[1.2] !mb-8">
                    Check out some of our awesome projects with creative ideas
                    and great design.
                  </h3>
                </div>
              </div>

              {projectsLoading ? (
                <div>Loading projects...</div>
              ) : (
                <Projects projects={projects} />
              )}

              <Contact className="!mt-12" />
            </div>
          </section>
        </>
        <Footer5 />
      </div>{" "}
    </>
  );
}
