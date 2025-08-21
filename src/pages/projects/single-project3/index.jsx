// src/pages/SingleProjectPage3.jsx

import Footer5 from "@/components/footers/Footer5";
import React, { useState, useEffect } from "react";
import ProjectDetails3 from "@/components/projects/ProjectDetails3";
import { getPageBySlug } from "@/services/pagesService";
import MetaComponent from "@/components/common/MetaComponent";
import DOMPurify from "dompurify";
import { BASE_URL } from "@/config/url";
import Header33 from "@/components/headers/Header33";

export default function SingleProjectPage3({ slug }) {
  const [pageContent, setPageContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchPage = async () => {
        setLoading(true);
        try {
          const data = await getPageBySlug(slug);
          setPageContent(data);
        } catch (error) {
          console.error("Gagal mengambil konten halaman:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchPage();
    }
  }, [slug]);

  if (loading || !pageContent) {
    return <div>Loading...</div>;
  }

  const sanitizedContent = DOMPurify.sanitize(pageContent.content, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allowfullscreen', 'webkitallowfullscreen', 'mozallowfullscreen', 'frameborder'],
  });

  const featuredImageSrc = pageContent.featured_image
    ? `${BASE_URL}${pageContent.featured_image}`
    : "/assets/img/photos/bg5.jpg";

  return (
    <>
      <MetaComponent
        title={pageContent.title}
        description={pageContent.meta_description}
        image={pageContent.featured_image}
      />
      <div className="grow shrink-0">
        <Header33 />
      </div>

      <section
        className="wrapper image-wrapper bg-image bg-overlay !text-white !bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
        style={{ backgroundImage: `url(${featuredImageSrc})` }}
      >
        <div className="container pt-32 pb-20 xl:pt-40 lg:pt-40 md:pt-40 xl:pb-36 lg:pb-36 md:pb-36 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 lg:w-10/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <div className="post-header !mb-[.9rem]">
                <h1 className="!text-white !text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-4">
                  {pageContent.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="lg:w-10/12 xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <ProjectDetails3
                content={sanitizedContent}
                galleryImages={pageContent.gallery_images}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer5 hasMarginTop={false} />
    </>
  );
}