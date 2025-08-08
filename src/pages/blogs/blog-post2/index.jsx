import BlogSingle from "@/components/blogs/BlogSingle";
import Sidebar from "@/components/blogs/Sidebar";
import Footer5 from "@/components/footers/Footer5";
import Header33 from "@/components/headers/Header33";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { getSinglePostBySlug, getPosts } from "@/services/postService";
import MetaComponent from "@/components/common/MetaComponent";
import { BASE_URL } from "@/config/url";
export default function BlogPostPage2() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]); 

   useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        try {
          const [singlePostData, allPostsData] = await Promise.all([
            getSinglePostBySlug(slug),
            getPosts(),
          ]);
          setPost(singlePostData);
          setAllPosts(allPostsData.data || []);
        } catch (error) {
          console.error(`Gagal mengambil data:`, error);
        }
      }
    };
    fetchData();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const relatedPosts = allPosts.filter(
    (p) => p.category.id === post.category.id && p.id !== post.id
  );

  return (
    <>
      <MetaComponent/>
      <div className="grow shrink-0">
        <Header33
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav navbar-light transparent xl:pt-[6px] lg:pt-[6px]"
        />
      </div>
      <section
        className="wrapper image-wrapper bg-image bg-overlay !text-white !bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
        style={{ backgroundImage: `url(${post.featured_image ? `${BASE_URL}${post.featured_image}` : '/assets/img/photos/bg5.jpg'})`  }}
      >
        <div className="container pt-32 pb-20 xl:pt-40 lg:pt-40 md:pt-40 xl:pb-36 lg:pb-36 md:pb-36 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 lg:w-10/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <div className="post-header !mb-[.9rem]">
                <div className="inline-flex uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-white !mb-[0.4rem] text-line relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#ffffff]">
                  <a
                    href="#"
                    className="!text-inherit opacity-100"
                    rel="category"
                  >
                    {post.category.name}
                  </a>
                </div>
                {/* /.post-category */}
                <h1 className="!text-white !text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-4">
                  {post.title}
                </h1>
                <ul className="!text-[0.8rem] !text-white m-0 p-0 list-none">
                  <li className="post-date inline-block">
                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                    <span>{new Date(post.published_at).toLocaleDateString()}</span>
                  </li>
                  <li className="post-author inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#ffffff]">
                    <a
                      className="!text-[0.8rem] !text-white hover:text-white"
                      href="#"
                    >
                      <i className="uil uil-user pr-[0.2rem] align-[-.05rem] before:content-['\ed6f']" />
                      <span>{post.author_name}</span>
                    </a>
                  </li>
                  <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#ffffff]">
                    <a
                      className="!text-[0.8rem] !text-white hover:text-white"
                      href="#"
                    >
                      <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']" />
                      3<span> Comments</span>
                    </a>
                  </li>
                  <li className="post-likes inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#ffffff]">
                    <a
                      className="!text-[0.8rem] !text-white hover:text-white"
                      href="#"
                    >
                      <i className="uil uil-heart-alt pr-[0.2rem] align-[-.05rem] before:content-['\eb60']" />
                      3<span> Likes</span>
                    </a>
                  </li>
                </ul>
                {/* /.post-meta */}
              </div>
              {/* /.post-header */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>

      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px]">
            <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px]">
              <BlogSingle marginTop={false} post={post} relatedPosts={relatedPosts}/>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>

      <Footer5 hasMarginTop={false} />
    </>
  );
}
