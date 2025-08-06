import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import Blogs1 from "@/components/blocks/blogs/Blogs1";
import Blogs2 from "@/components/blocks/blogs/Blogs2";
import Blogs3 from "@/components/blocks/blogs/Blogs3";
import Blogs4 from "@/components/blocks/blogs/Blogs4";
import PageTitle from "@/components/blocks/PageTitle";
import CodeSnippet from "@/components/common/CodeSnippet";
import Blogs from "@/components/homes/home-23/Blogs";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Blog || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageBlog() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Blogs" />
      <BlockPageLinks />
      <Blogs1 />
      <div className="!mt-[-150px]"></div>
      <CodeSnippet
        code={`
&quot;use client&quot;;
import { slidesData } from &quot;@&#x2F;data&#x2F;blogs&quot;;
import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

import Link from &quot;next&#x2F;link&quot;;

export default function Blogs1() {
  return (
    &lt;section id&#x3D;&quot;snippet-1&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] d&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center&quot;&gt;
          Our Journal
        &lt;&#x2F;h2&gt;
        &lt;p className&#x3D;&quot;lead text-[1rem] !mb-10 !text-center md:!px-24 lg:!px-[12.5rem] xl:!px-0&quot;&gt;
          Here are the latest company news from our blog that got the most
          attention.
        &lt;&#x2F;p&gt;
        &lt;div className&#x3D;&quot;swiper-container blog grid-view !mb-[7rem] xl:!mb-[10rem] lg:!mb-[10rem] md:!mb-[10rem]&quot;&gt;
          &lt;Swiper
            className&#x3D;&quot;swiper&quot;
            spaceBetween&#x3D;{30}
            modules&#x3D;{[Pagination]}
            pagination&#x3D;{{
              clickable: true,
              el: &quot;.spd17&quot;,
            }}
            breakpoints&#x3D;{{
              0: { slidesPerView: 1 },
              575: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          &gt;
            {slidesData.map((slide, index) &#x3D;&gt; (
              &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot; key&#x3D;{index}&gt;
                &lt;article&gt;
                  &lt;figure className&#x3D;&quot;overlay overlay-1 hover-scale rounded !mb-6 group&quot;&gt;
                    &lt;a href&#x3D;&quot;#&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105&quot;
                        alt&#x3D;&quot;image&quot;
                        src&#x3D;{slide.imageSrc}
                        width&#x3D;{560}
                        height&#x3D;{350}
                      &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
                      &lt;h5 className&#x3D;&quot;from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2&#x2F;4&quot;&gt;
                        Read More
                      &lt;&#x2F;h5&gt;
                    &lt;&#x2F;figcaption&gt;
                  &lt;&#x2F;figure&gt;
                  &lt;div className&#x3D;&quot;post-header&quot;&gt;
                    &lt;h2 className&#x3D;&quot;post-title h3 !mb-3 !text-[1.1rem] !leading-[1.4]&quot;&gt;
                      &lt;Link
                        className&#x3D;&quot;!text-[#343f52] hover:!text-[#343f52]&quot;
                        href&#x3D;{&#x60;&#x2F;blog-post&#x60;}
                      &gt;
                        {slide.title}
                      &lt;&#x2F;Link&gt;
                    &lt;&#x2F;h2&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div className&#x3D;&quot;post-footer&quot;&gt;
                    &lt;ul className&#x3D;&quot;!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none&quot;&gt;
                      &lt;li className&#x3D;&quot;post-date inline-block&quot;&gt;
                        &lt;i className&#x3D;&quot;uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-[&#39;\e9ba&#39;]&quot; &#x2F;&gt;
                        &lt;span&gt;{slide.date}&lt;&#x2F;span&gt;
                      &lt;&#x2F;li&gt;
                      &lt;li className&#x3D;&quot;post-comments inline-block before:content-[&#39;&#39;] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:mx-[0.6rem] before:my-0 before:rounded-[100%] before:bg-[#aab0bc] before:align-[0.15rem] !text-[.7rem]&quot;&gt;
                        &lt;a
                          className&#x3D;&quot;!text-[#aab0bc] hover:!text-[#343f52]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-[&#39;\eaec&#39;]&quot; &#x2F;&gt;
                          {slide.category}
                        &lt;&#x2F;a&gt;
                      &lt;&#x2F;li&gt;
                    &lt;&#x2F;ul&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;article&gt;
              &lt;&#x2F;SwiperSlide&gt;
            ))}

            {&#x2F;* &#x2F;.swiper-wrapper *&#x2F;}
          &lt;&#x2F;Swiper&gt;
          &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
            &lt;div className&#x3D;&quot;swiper-pagination spd17&quot;&gt;&lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.swiper *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.swiper-container *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}        
        `}
      />
      <Blogs2 />
      <CodeSnippet
        code={`
&quot;use client&quot;;
import { slidesData } from &quot;@&#x2F;data&#x2F;blogs&quot;;
import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

import Link from &quot;next&#x2F;link&quot;;

export default function Blogs2() {
  return (
    &lt;section id&#x3D;&quot;snippet-2&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 lg:!mt-0&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full xl:!mt-2 lg:!mt-2 !mt-[50px]&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
              Our Journal
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] !mb-6 xxl:!pr-5&quot;&gt;
              Here are the latest news from our blog that got the most
              attention.
            &lt;&#x2F;p&gt;
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-soft-primary !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.05)]&quot;
            &gt;
              View All News
            &lt;&#x2F;a&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full max-lg:!mt-[50px]&quot;&gt;
            &lt;Swiper
              className&#x3D;&quot;swiper&quot;
              spaceBetween&#x3D;{30}
              modules&#x3D;{[Pagination]}
              pagination&#x3D;{{
                clickable: true,
                el: &quot;.spd18&quot;,
              }}
              breakpoints&#x3D;{{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            &gt;
              {slidesData.map((slide, index) &#x3D;&gt; (
                &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot; key&#x3D;{index}&gt;
                  &lt;article&gt;
                    &lt;figure className&#x3D;&quot;overlay overlay-1 hover-scale rounded !mb-6 group&quot;&gt;
                      &lt;a href&#x3D;&quot;#&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105&quot;
                          alt&#x3D;&quot;image&quot;
                          src&#x3D;{slide.imageSrc}
                          width&#x3D;{560}
                          height&#x3D;{350}
                        &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                      &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
                        &lt;h5 className&#x3D;&quot;from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2&#x2F;4&quot;&gt;
                          Read More
                        &lt;&#x2F;h5&gt;
                      &lt;&#x2F;figcaption&gt;
                    &lt;&#x2F;figure&gt;
                    &lt;div className&#x3D;&quot;post-header&quot;&gt;
                      &lt;h2 className&#x3D;&quot;post-title h3 !mb-3 !text-[1.1rem] !leading-[1.4]&quot;&gt;
                        &lt;Link
                          className&#x3D;&quot;!text-[#343f52] hover:!text-[#343f52]&quot;
                          href&#x3D;{&#x60;&#x2F;blog-post&#x60;}
                        &gt;
                          {slide.title}
                        &lt;&#x2F;Link&gt;
                      &lt;&#x2F;h2&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div className&#x3D;&quot;post-footer&quot;&gt;
                      &lt;ul className&#x3D;&quot;!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none&quot;&gt;
                        &lt;li className&#x3D;&quot;post-date inline-block&quot;&gt;
                          &lt;i className&#x3D;&quot;uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-[&#39;\e9ba&#39;]&quot; &#x2F;&gt;
                          &lt;span&gt;{slide.date}&lt;&#x2F;span&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;post-comments inline-block before:content-[&#39;&#39;] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:mx-[0.6rem] before:my-0 before:rounded-[100%] before:bg-[#aab0bc] before:align-[0.15rem] !text-[.7rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#aab0bc] hover:!text-[#343f52]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            &lt;i className&#x3D;&quot;uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-[&#39;\eaec&#39;]&quot; &#x2F;&gt;
                            {slide.category}
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                      &lt;&#x2F;ul&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;article&gt;
                &lt;&#x2F;SwiperSlide&gt;
              ))}

              {&#x2F;* &#x2F;.swiper-wrapper *&#x2F;}
            &lt;&#x2F;Swiper&gt;
            &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
              &lt;div className&#x3D;&quot;swiper-pagination spd18&quot;&gt;&lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.swiper-container *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}        
        `}
      />
      <Blogs3 />
      <CodeSnippet
        code={`
&quot;use client&quot;;
import { blogPosts } from &quot;@&#x2F;data&#x2F;blogs&quot;;
import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;
import Link from &quot;next&#x2F;link&quot;;

export default function Blogs3() {
  return (
    &lt;section id&#x3D;&quot;snippet-3&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;lg:w-9&#x2F;12 xl:w-8&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[.75rem] !leading-[1.35] uppercase !text-[#3f78e0] !text-center&quot;&gt;
              Our News
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-6 !text-center&quot;&gt;
              Here are the latest company news from our blog that got the most
              attention.
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;!relative&quot;&gt;
          &lt;div
            className&#x3D;&quot;shape bg-dot primary rellax !w-[7rem] !h-[10rem] !absolute z-[1] opacity-50 !bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]&quot;
            data-rellax-speed&#x3D;{1}
            style&#x3D;{{ top: 0, left: &quot;-1.7rem&quot; }}
          &#x2F;&gt;
          &lt;div className&#x3D;&quot;swiper-container dots-closer blog grid-view !mb-6&quot;&gt;
            &lt;Swiper
              className&#x3D;&quot;swiper&quot;
              spaceBetween&#x3D;{0}
              modules&#x3D;{[Pagination]}
              pagination&#x3D;{{
                clickable: true,
                el: &quot;.spd5&quot;,
              }}
              breakpoints&#x3D;{{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            &gt;
              {blogPosts.map((post, index) &#x3D;&gt; (
                &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot; key&#x3D;{index}&gt;
                  &lt;div className&#x3D;&quot;item-inner&quot;&gt;
                    &lt;article&gt;
                      &lt;div className&#x3D;&quot;card&quot;&gt;
                        &lt;figure className&#x3D;&quot;card-img-top overlay overlay-1 hover-scale group&quot;&gt;
                          &lt;a href&#x3D;&quot;#&quot;&gt;
                            &lt;img
                              className&#x3D;&quot;!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105&quot;
                              alt&#x3D;&quot;image&quot;
                              src&#x3D;{post.imageUrl}
                              width&#x3D;{560}
                              height&#x3D;{350}
                            &#x2F;&gt;
                          &lt;&#x2F;a&gt;
                          &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
                            &lt;h5 className&#x3D;&quot;from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2&#x2F;4&quot;&gt;
                              Read More
                            &lt;&#x2F;h5&gt;
                          &lt;&#x2F;figcaption&gt;
                        &lt;&#x2F;figure&gt;
                        &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] !p-[1.75rem_1.75rem_1rem_1.75rem] max-md:!p-[40px_40px_20px]&quot;&gt;
                          &lt;div className&#x3D;&quot;post-header&quot;&gt;
                            &lt;h2 className&#x3D;&quot;post-title h3 !mt-1 !mb-3&quot;&gt;
                              &lt;Link
                                className&#x3D;&quot;!text-[#343f52] hover:!text-[#747ed1]&quot;
                                href&#x3D;{&#x60;&#x2F;blog-post&#x60;} &#x2F;&#x2F; Added directly in JSX
                              &gt;
                                {post.title}
                              &lt;&#x2F;Link&gt;
                            &lt;&#x2F;h2&gt;
                          &lt;&#x2F;div&gt;
                          {&#x2F;* &#x2F;.post-header *&#x2F;}
                          &lt;div className&#x3D;&quot;!relative&quot;&gt;
                            &lt;p&gt;{post.content}&lt;&#x2F;p&gt;
                          &lt;&#x2F;div&gt;
                          {&#x2F;* &#x2F;.post-content *&#x2F;}
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.card-body *&#x2F;}
                        &lt;div className&#x3D;&quot;card-footer xl:!p-[1.25rem_1.75rem_1.25rem] lg:!p-[1.25rem_1.75rem_1.25rem] md:!p-[1.25rem_1.75rem_1.25rem] max-md:!p-[0.9rem_2rem]&quot;&gt;
                          &lt;ul className&#x3D;&quot;!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none flex !mb-0&quot;&gt;
                            &lt;li className&#x3D;&quot;post-date inline-block&quot;&gt;
                              &lt;i className&#x3D;&quot;uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-[&#39;\e9ba&#39;]&quot; &#x2F;&gt;
                              &lt;span&gt;{post.date}&lt;&#x2F;span&gt;
                            &lt;&#x2F;li&gt;
                            &lt;li className&#x3D;&quot;post-comments inline-block before:content-[&#39;&#39;] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]&quot;&gt;
                              &lt;a
                                className&#x3D;&quot;!text-[#aab0bc] hover:!text-[#747ed1] hover:!border-[#747ed1]&quot;
                                href&#x3D;&quot;#&quot;
                              &gt;
                                &lt;i className&#x3D;&quot;uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-[&#39;\eaec&#39;]&quot; &#x2F;&gt;
                                {post.category}
                              &lt;&#x2F;a&gt;
                            &lt;&#x2F;li&gt;
                          &lt;&#x2F;ul&gt;
                          {&#x2F;* &#x2F;.post-meta *&#x2F;}
                        &lt;&#x2F;div&gt;
                        {&#x2F;* &#x2F;.card-footer *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card *&#x2F;}
                    &lt;&#x2F;article&gt;
                    {&#x2F;* &#x2F;article *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.item-inner *&#x2F;}
                &lt;&#x2F;SwiperSlide&gt;
              ))}

              {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
            &lt;&#x2F;Swiper&gt;
            &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
              &lt;div className&#x3D;&quot;swiper-pagination spd5 &quot;&gt;&lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.swiper *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.swiper-container *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.relative *&#x2F;}
      &lt;&#x2F;div&gt;
    &lt;&#x2F;section&gt;
  );
}        
        `}
      />
      <Blogs4 />
      <CodeSnippet
        code={`
&quot;use client&quot;;
import &lbrace; blogPosts4, slidesData &rbrace; from &quot;@&#x2F;data&#x2F;blogs&quot;;
import Link from &quot;next&#x2F;link&quot;;
import React from &quot;react&quot;;
import &lbrace; Pagination &rbrace; from &quot;swiper&#x2F;modules&quot;;
import &lbrace; Swiper, SwiperSlide &rbrace; from &quot;swiper&#x2F;react&quot;;

export default function Blogs4() &lbrace;
  return (
    &lt;section id&#x3D;&quot;snippet-4&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-center !mb-10&quot;&gt;
          &lt;div className&#x3D;&quot;md:w-8&#x2F;12 lg:w-9&#x2F;12 xl:w-8&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!pr-40&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-0&quot;&gt;
              Company news from our blog that got the most attention.
            &lt;&#x2F;h2&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;md:w-4&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-auto lg:!ml-auto md:!ml-auto xl:!text-right lg:!text-right md:!text-right !mt-5 xl:!mt-0 lg:!mt-0 md:!mt-0&quot;&gt;
            &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;btn btn-soft-primary !rounded-[50rem] !mb-0&quot;&gt;
              View All News
            &lt;&#x2F;a&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
        &lt;div className&#x3D;&quot;flex flex-wrap xl:mx-[-30px] lg:mx-[-20px] mx-[-15px] !mt-[-50px] blog grid-view&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] xl:!px-[30px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
            &lbrace;blogPosts4.map((post) &#x3D;&gt; (
              &lt;article key&#x3D;&lbrace;post.id&rbrace; className&#x3D;&quot;post !mb-8&quot;&gt;
                &lt;div className&#x3D;&quot;post-slider rounded !mb-6&quot;&gt;
                  &lt;div className&#x3D;&quot;swiper-container dots-over relative !z-10&quot;&gt;
                    &lt;Swiper
                      className&#x3D;&quot;swiper&quot;
                      modules&#x3D;&lbrace;[Pagination]&rbrace;
                      pagination&#x3D;&lbrace;&lbrace;
                        clickable: true,
                        el: &#x60;.spdb$&lbrace;post.id&rbrace;&#x60;,
                      &rbrace;&rbrace;
                    &gt;
                      &lbrace;post.images.map((image, index) &#x3D;&gt; (
                        &lt;SwiperSlide key&#x3D;&lbrace;index&rbrace; className&#x3D;&quot;swiper-slide&quot;&gt;
                          &lt;img
                            alt&#x3D;&lbrace;image.alt&rbrace;
                            width&#x3D;&lbrace;image.width&rbrace;
                            height&#x3D;&lbrace;image.height&rbrace;
                            src&#x3D;&lbrace;image.src&rbrace;
                          &#x2F;&gt;
                        &lt;&#x2F;SwiperSlide&gt;
                      ))&rbrace;
                    &lt;&#x2F;Swiper&gt;
                    &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                      &lt;div className&#x3D;&lbrace;&#x60;swiper-pagination spdb$&lbrace;post.id&rbrace;&#x60;&rbrace;&gt;&lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;post-header !mb-5&quot;&gt;
                  &lt;div className&#x3D;&quot;inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[&#39;&#39;] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2&#x2F;4 before:bg-[#3f78e0]&quot;&gt;
                    &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;hover&quot; rel&#x3D;&quot;category&quot;&gt;
                      &lbrace;post.category&rbrace;
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                  &lt;h2 className&#x3D;&quot;post-title !mt-1 !mb-4&quot;&gt;
                    &lt;Link
                      className&#x3D;&quot;!text-[#343f52] hover:!text-[#3f78e0]&quot;
                      href&#x3D;&lbrace;&#x60;&#x2F;blog-post&#x60;&rbrace;
                    &gt;
                      &lbrace;post.title&rbrace;
                    &lt;&#x2F;Link&gt;
                  &lt;&#x2F;h2&gt;
                  &lt;ul className&#x3D;&quot;!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none !mb-0&quot;&gt;
                    &lt;li className&#x3D;&quot;post-date inline-block&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-[&#39;\e9ba&#39;]&quot; &#x2F;&gt;
                      &lt;span&gt;&lbrace;post.date&rbrace;&lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;post-author inline-block before:content-[&#39;&#39;] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]&quot;&gt;
                      &lt;a
                        className&#x3D;&quot;!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]&quot;
                        href&#x3D;&quot;#&quot;
                      &gt;
                        &lt;i className&#x3D;&quot;uil uil-user pr-[0.2rem] align-[-.05rem] before:content-[&#39;\ed6f&#39;]&quot; &#x2F;&gt;
                        &lt;span&gt;By &lbrace;post.author&rbrace;&lt;&#x2F;span&gt;
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;post-comments inline-block before:content-[&#39;&#39;] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]&quot;&gt;
                      &lt;a
                        className&#x3D;&quot;!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]&quot;
                        href&#x3D;&quot;#&quot;
                      &gt;
                        &lt;i className&#x3D;&quot;uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-[&#39;\ea54&#39;]&quot; &#x2F;&gt;
                        &lbrace;post.comments&rbrace;
                        &lt;span&gt; Comments&lt;&#x2F;span&gt;
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;li&gt;
                  &lt;&#x2F;ul&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;!relative&quot;&gt;
                  &lt;p&gt;&lbrace;post.description&rbrace;&lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;article&gt;
            ))&rbrace;
            &lbrace;&#x2F;* &#x2F;.post *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[30px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-50px]&quot;&gt;
              &lbrace;slidesData.slice(0, 2).map((post, i) &#x3D;&gt; (
                &lt;div
                  key&#x3D;&lbrace;i&rbrace;
                  className&#x3D;&quot;max-lg:w-6&#x2F;12 max-md:w-full w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]&quot;
                &gt;
                  &lt;article className&#x3D;&quot;post&quot;&gt;
                    &lt;figure className&#x3D;&quot;overlay overlay-1 hover-scale group rounded !mb-5&quot;&gt;
                      &lt;a href&#x3D;&quot;#&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105&quot;
                          src&#x3D;&lbrace;post.imageSrc&rbrace;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&lbrace;560&rbrace;
                          height&#x3D;&lbrace;350&rbrace;
                        &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                      &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
                        &lt;h5 className&#x3D;&quot;from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2&#x2F;4&quot;&gt;
                          Read More
                        &lt;&#x2F;h5&gt;
                      &lt;&#x2F;figcaption&gt;
                    &lt;&#x2F;figure&gt;
                    &lt;div className&#x3D;&quot;post-header&quot;&gt;
                      &lt;div className&#x3D;&quot;inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[&#39;&#39;] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2&#x2F;4 before:bg-[#3f78e0]&quot;&gt;
                        &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;hover&quot; rel&#x3D;&quot;category&quot;&gt;
                          &lbrace;post.category&rbrace;
                        &lt;&#x2F;a&gt;
                      &lt;&#x2F;div&gt;
                      &lbrace;&#x2F;* &#x2F;.post-category *&#x2F;&rbrace;
                      &lt;h2 className&#x3D;&quot;post-title h3 !mt-1 !mb-3&quot;&gt;
                        &lt;Link
                          className&#x3D;&quot;!text-[#343f52] hover:!text-[#3f78e0]&quot;
                          href&#x3D;&lbrace;&#x60;&#x2F;blog-post&#x60;&rbrace;
                        &gt;
                          &lbrace;post.title&rbrace;
                        &lt;&#x2F;Link&gt;
                      &lt;&#x2F;h2&gt;
                    &lt;&#x2F;div&gt;
                    &lbrace;&#x2F;* &#x2F;.post-header *&#x2F;&rbrace;
                    &lt;div className&#x3D;&quot;post-footer&quot;&gt;
                      &lt;ul className&#x3D;&quot;!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none !mb-0&quot;&gt;
                        &lt;li className&#x3D;&quot;post-date inline-block&quot;&gt;
                          &lt;i className&#x3D;&quot;uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-[&#39;\e9ba&#39;]&quot; &#x2F;&gt;
                          &lt;span&gt;&lbrace;post.date&rbrace;&lt;&#x2F;span&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;post-comments inline-block before:content-[&#39;&#39;] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            &lt;i className&#x3D;&quot;uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-[&#39;\ea54&#39;]&quot; &#x2F;&gt;
                            4
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                      &lt;&#x2F;ul&gt;
                      &lbrace;&#x2F;* &#x2F;.post-meta *&#x2F;&rbrace;
                    &lt;&#x2F;div&gt;
                    &lbrace;&#x2F;* &#x2F;.post-footer *&#x2F;&rbrace;
                  &lt;&#x2F;article&gt;
                  &lbrace;&#x2F;* &#x2F;.post *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
              ))&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;

      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
    &lt;&#x2F;section&gt;
  );
&rbrace;        
        `}
      />
      <Blogs bgColor="" />

      <CodeSnippet
        code={`
&quot;use client&quot;;
import { blogPosts2 } from &quot;@&#x2F;data&#x2F;blogs&quot;;
import React from &quot;react&quot;;
import { Navigation } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;
import Link from &quot;next&#x2F;link&quot;;

export default function Blogs({ bgColor &#x3D; &quot;!bg-[#f3f8f5]&quot; }) {
  return (
    &lt;section className&#x3D;{&quot;wrapper  &quot; + bgColor}&gt;
      &lt;div className&#x3D;&quot;overflow-hidden&quot;&gt;
        &lt;div className&#x3D;&quot;container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 xxl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
              &lt;i className&#x3D;&quot;icn-flower !text-[#7cb798] xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] opacity-25 before:content-[&#39;\e907&#39;]&quot; &#x2F;&gt;
              &lt;h2 className&#x3D;&quot;xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] font-semibold !tracking-[normal] !text-center !mt-2 !mb-10&quot;&gt;
                Here are the latest posts from my blog that grabbed the most
                attention.
              &lt;&#x2F;h2&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;div
            className&#x3D;&quot;swiper-container nav-bottom nav-color !mb-[4.5rem] relative z-10&quot;
            data-margin&#x3D;{30}
            data-dots&#x3D;&quot;false&quot;
            data-nav&#x3D;&quot;true&quot;
            data-items-lg&#x3D;{3}
            data-items-md&#x3D;{2}
            data-items-xs&#x3D;{1}
          &gt;
            &lt;Swiper
              className&#x3D;&quot;swiper overflow-visible pb-2&quot;
              modules&#x3D;{[Navigation]}
              navigation&#x3D;{{
                prevEl: &quot;.snbp28&quot;,
                nextEl: &quot;.snbn28&quot;,
              }}
              spaceBetween&#x3D;{30}
              breakpoints&#x3D;{{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            &gt;
              {blogPosts2.map((blog, i) &#x3D;&gt; (
                &lt;SwiperSlide key&#x3D;{i} className&#x3D;&quot;swiper-slide&quot;&gt;
                  &lt;article&gt;
                    &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                      &lt;figure className&#x3D;&quot;card-img-top overlay overlay-1 group&quot;&gt;
                        &lt;a href&#x3D;&quot;#&quot;&gt;
                          &lt;img
                            srcSet&#x3D;{blog.srcSet}
                            alt&#x3D;&quot;image&quot;
                            src&#x3D;{blog.src}
                            width&#x3D;{410}
                            height&#x3D;{290}
                          &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                        &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
                          &lt;h5 className&#x3D;&quot;from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2&#x2F;4 group-hover:-translate-y-2&#x2F;4&quot;&gt;
                            Read More
                          &lt;&#x2F;h5&gt;
                        &lt;&#x2F;figcaption&gt;
                      &lt;&#x2F;figure&gt;
                      &lt;div className&#x3D;&quot;card-body p-6&quot;&gt;
                        &lt;div className&#x3D;&quot;post-header&quot;&gt;
                          &lt;div className&#x3D;&quot;post-category !mb-[.4rem] uppercase !tracking-[0.02rem] !text-[#aab0bc]&quot;&gt;
                            &lt;a
                              href&#x3D;&quot;#&quot;
                              className&#x3D;&quot;hover !text-[#7cb798]&quot;
                              rel&#x3D;&quot;category&quot;
                            &gt;
                              {blog.category}
                            &lt;&#x2F;a&gt;
                          &lt;&#x2F;div&gt;
                          {&#x2F;* &#x2F;.post-category *&#x2F;}
                          &lt;h2 className&#x3D;&quot;post-title h3 !mt-1 !mb-3 !text-[1.15rem] !font-semibold !tracking-[normal]&quot;&gt;
                            &lt;Link
                              className&#x3D;&quot;!text-[#343f52] hover:!text-[#7cb798]&quot;
                              href&#x3D;{&#x60;&#x2F;blog-post&#x60;}
                            &gt;
                              {blog.title}
                            &lt;&#x2F;Link&gt;
                          &lt;&#x2F;h2&gt;
                        &lt;&#x2F;div&gt;
                        {&#x2F;* &#x2F;.post-header *&#x2F;}
                        &lt;div className&#x3D;&quot;post-footer&quot;&gt;
                          &lt;ul className&#x3D;&quot;!text-[0.75rem] !text-[#aab0bc] m-0 p-0 list-none flex !mb-0&quot;&gt;
                            &lt;li className&#x3D;&quot;post-date inline-block&quot;&gt;
                              &lt;i className&#x3D;&quot;uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-[&#39;\e9ba&#39;]&quot; &#x2F;&gt;
                              &lt;span&gt;{blog.date}&lt;&#x2F;span&gt;
                            &lt;&#x2F;li&gt;
                            &lt;li className&#x3D;&quot;post-comments inline-block before:content-[&#39;&#39;] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]&quot;&gt;
                              &lt;a
                                className&#x3D;&quot;!text-[#aab0bc] hover:!text-[#7cb798] hover:!border-[#7cb798]&quot;
                                href&#x3D;&quot;#&quot;
                              &gt;
                                &lt;i className&#x3D;&quot;uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-[&#39;\ea54&#39;]&quot; &#x2F;&gt;
                                {blog.commentsCount}
                              &lt;&#x2F;a&gt;
                            &lt;&#x2F;li&gt;
                          &lt;&#x2F;ul&gt;
                          {&#x2F;* &#x2F;.post-meta *&#x2F;}
                        &lt;&#x2F;div&gt;
                        {&#x2F;* &#x2F;.post-footer *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;&#x2F;article&gt;
                  {&#x2F;* &#x2F;article *&#x2F;}
                &lt;&#x2F;SwiperSlide&gt;
              ))}

              {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
            &lt;&#x2F;Swiper&gt;
            &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
              &lt;div className&#x3D;&quot;swiper-navigation&quot;&gt;
                &lt;div className&#x3D;&quot;swiper-button swiper-button-prev snbp28&quot;&gt;&lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;swiper-button swiper-button-next snbn28&quot;&gt;&lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.swiper *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.swiper-container *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.overflow-hidden *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}        
        `}
      />
    </>
  );
}
