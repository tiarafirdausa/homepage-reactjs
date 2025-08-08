import Footer5 from "@/components/footers/Footer5";
import React, { useState, useEffect } from "react";
import Header33 from "@/components/headers/Header33";
import ProjectDetails3 from "@/components/projects/ProjectDetails3";
import { getPageBySlug } from "@/services/pagesService";
import MetaComponent from "@/components/common/MetaComponent";
import DOMPurify from 'dompurify';
import { BASE_URL } from "@/config/url";

export default function SingleProjectPage3({ slug }) {
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchPage = async () => {
        try {
          const data = await getPageBySlug(slug); 
          setPageContent(data);
          
        } catch (error) {
          console.error("Gagal mengambil konten halaman:", error);
        }
      };
      fetchPage();
    }
  }, [slug]);

  if (!pageContent) {
    return <div>Halaman tidak ditemukan.</div>;
  }

  const sanitizedContent = DOMPurify.sanitize(pageContent.content);
  const featuredImageSrc = pageContent.featured_image ? `${BASE_URL}${pageContent.featured_image}` : 'bg-[#343f52]';

  return (
    <>
      <MetaComponent/>
      <div className="grow shrink-0">
        <Header33 />
        <section
          className="wrapper image-wrapper bg-image bg-overlay !text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,0.5)]"
          style={{ backgroundImage: `url(${featuredImageSrc})` }}
        >
          <div className="container pt-28 pb-14 xl:pt-36 lg:pt-36 md:pt-36 xl:pb-24 lg:pb-24 md:pb-24 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 lg:w-8/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <div className="post-header">
                  <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3 !text-white">
                    {pageContent.title}
                  </h1>
                  <p className="lead !leading-[1.65] text-[.9rem] font-medium md:!px-14 lg:!px-14 xl:!px-20 xxl:!px-32">
                    Integer posuere erat a ante venenatis dapibus posuere.
                    Maecenas faucibus mollis interdum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectDetails3 
          content={sanitizedContent} 
          galleryImages={pageContent.gallery_images}
        />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
