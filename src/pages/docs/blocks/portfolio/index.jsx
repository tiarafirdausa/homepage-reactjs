import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import PageTitle from "@/components/blocks/PageTitle";
import Projects5 from "@/components/blocks/projects/Projects5";
import Projects6 from "@/components/blocks/projects/Projects6";
import CodeSnippet from "@/components/common/CodeSnippet";
import Projects1 from "@/components/homes/home-12/Projects";
import Projects3 from "@/components/homes/home-13/Projects";
import Projects2 from "@/components/homes/home-19/Projects";
import Projects7 from "@/components/homes/home-2/Projects";
import Projects9 from "@/components/homes/home-20/Projects";
import Projects8 from "@/components/homes/home-21/Projects";
import Projects10 from "@/components/homes/home-24/Projects";
import Projects11 from "@/components/homes/home-31/Projects";
import Projects12 from "@/components/homes/home-34/Projects";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Portfolio || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPagePortfolio() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Portfolio" />
      <BlockPageLinks />
      <div className="max-w-screen overflow-clip">
        <section className="wrapper !bg-[#ffffff]">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <div className="flex flex-wrap mx-[-15px] items-center !mb-7">
              <div className="md:w-8/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!pr-28 lg:!pr-28">
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                  Recent Projects
                </h2>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                  We love to turn ideas into
                  <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(116,126,209,.12)]">
                    beautiful things
                  </span>
                  .
                </p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
            <Projects3 />
            {/* /.projects-tiles */}
          </div>
          {/* /.container */}
        </section>
        <CodeSnippet
          code={` &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
        &lt;div className&#x3D;&quot;container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-center !mb-7&quot;&gt;
            &lt;div className&#x3D;&quot;md:w-8&#x2F;12 lg:w-8&#x2F;12 xl:w-7&#x2F;12 xxl:w-6&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full xl:!pr-28 lg:!pr-28&quot;&gt;
              &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
                Recent Projects
              &lt;&#x2F;h2&gt;
              &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium&quot;&gt;
                We love to turn ideas into
                &lt;span className&#x3D;&quot;relative z-[2] whitespace-nowrap after:content-[&#39;&#39;] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(116,126,209,.12)]&quot;&gt;
                  beautiful things
                &lt;&#x2F;span&gt;
                .
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;Projects3 &#x2F;&gt;
          {&#x2F;* &#x2F;.projects-tiles *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;section&gt;`}
        />
        <section id="snippet-2" className="wrapper !bg-[#ffffff]  ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <Projects2 />
          </div>
        </section>

        <CodeSnippet
          code={`
import { slidesData } from &quot;@&#x2F;data&#x2F;projects&quot;;
import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;
import Link from &quot;next&#x2F;link&quot;;

import { Gallery, Item } from &quot;react-photoswipe-gallery&quot;;
export default function Projects() {
  return (
    &lt;&gt;
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[7rem]&quot;&gt;
        &lt;div className&#x3D;&quot;lg:w-10&#x2F;12 xl:w-9&#x2F;12 xxl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
          &lt;h2 className&#x3D;&quot;!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]&quot;&gt;
            Latest Projects
          &lt;&#x2F;h2&gt;
          &lt;h3 className&#x3D;&quot;xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-10&quot;&gt;
            Check out some of our awesome projects with
            &lt;span className&#x3D;&quot;!relative z-[2] after:content-[&#39;&#39;] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2&#x2F;4 after:left-2&#x2F;4 style-2 yellow&quot;&gt;
              creative
            &lt;&#x2F;span&gt;
            ideas and great design.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;Gallery&gt;
        &lt;div className&#x3D;&quot;swiper-container grid-view relative !z-10&quot;&gt;
          &lt;Swiper
            className&#x3D;&quot;swiper&quot;
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
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules&#x3D;{[Pagination]}
            pagination&#x3D;{{
              clickable: true,
              el: &quot;.spd17&quot;,
            }}
          &gt;
            {slidesData.map((slide, index) &#x3D;&gt; (
              &lt;SwiperSlide className&#x3D;&quot;swiper-slide group&quot; key&#x3D;{index}&gt;
                &lt;Item
                  original&#x3D;{slide.fullImageSrc}
                  thumbnail&#x3D;{slide.fullImageSrc}
                  width&#x3D;{410}
                  height&#x3D;{440}
                &gt;
                  {({ ref, open }) &#x3D;&gt; (
                    &lt;figure className&#x3D;&quot;!rounded-[.4rem] !mb-6&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;!rounded-[.4rem]&quot;
                        srcSet&#x3D;{slide.imageSrcSet}
                        alt&#x3D;&quot;image&quot;
                        src&#x3D;{slide.imageSrc}
                        width&#x3D;{410}
                        height&#x3D;{440}
                        ref&#x3D;{ref}
                      &#x2F;&gt;
                      &lt;a
                        className&#x3D;&quot;item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]&quot;
                        onClick&#x3D;{open}
                        data-gallery&#x3D;&quot;projects-group&quot;
                      &gt;
                        &lt;i className&#x3D;&quot;uil uil-focus-add before:content-[&#39;\eb22&#39;]&quot; &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;figure&gt;
                  )}
                &lt;&#x2F;Item&gt;
                &lt;div className&#x3D;&quot;project-details flex justify-center flex-col&quot;&gt;
                  &lt;div className&#x3D;&quot;post-header&quot;&gt;
                    &lt;h2 className&#x3D;&quot;post-title h3&quot;&gt;
                      &lt;Link
                        href&#x3D;{&#x60;&#x2F;single-project&#x60;} &#x2F;&#x2F; Link added directly here
                        className&#x3D;&quot;!text-[#343f52] hover:!text-[#3f78e0]&quot;
                      &gt;
                        {slide.title}
                      &lt;&#x2F;Link&gt;
                    &lt;&#x2F;h2&gt;
                    &lt;div className&#x3D;&quot;uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]&quot;&gt;
                      {slide.category}
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;SwiperSlide&gt;
            ))}
            {&#x2F;*&#x2F;.swiper-slide *&#x2F;}

            {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
          &lt;&#x2F;Swiper&gt;
          &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
            &lt;div className&#x3D;&quot;swiper-pagination spd17&quot;&gt;&lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.swiper *&#x2F;}
        &lt;&#x2F;div&gt;{&quot; &quot;}
      &lt;&#x2F;Gallery&gt;
    &lt;&#x2F;&gt;
  );
}`}
        />
        <section id="snippet-3" className="wrapper !bg-[#ffffff]  ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <Projects1 />
          </div>
        </section>
        <CodeSnippet
          code={`

import { useEffect, useRef } from &quot;react&quot;;
import Link from &quot;next&#x2F;link&quot;;

export default function Projects() {
  const isotopContainer &#x3D; useRef();
  const initIsotop &#x3D; async () &#x3D;&gt; {
    const Isotope &#x3D; (await import(&quot;isotope-layout&quot;)).default;
    const imagesloaded &#x3D; (await import(&quot;imagesloaded&quot;)).default;

    &#x2F;&#x2F; Initialize Isotope in the mounted hook
    const isotope &#x3D; new Isotope(isotopContainer.current, {
      itemSelector: &quot;.item&quot;,
      layoutMode: &quot;masonry&quot;, &#x2F;&#x2F; or &#39;fitRows&#39;, depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      &quot;progress&quot;,
      function (instance, image) {
        &#x2F;&#x2F; Trigger Isotope layout
        isotope.layout();
      }
    );
  };

  useEffect(() &#x3D;&gt; {
    &#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;
    &#x2F;&#x2F; Magnate Animation

    setTimeout(() &#x3D;&gt; {
      initIsotop();
    }, 100);
  }, []);
  return (
    &lt;div className&#x3D;&quot;projects-tiles&quot;&gt;
      &lt;div className&#x3D;&quot;project itemgrid grid-view&quot;&gt;
        &lt;div
          ref&#x3D;{isotopContainer}
          className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] xl:!mt-[-70px] lg:!mt-[-70px] md:!mt-[-70px] isotope&quot;
        &gt;
          &lt;div className&#x3D;&quot;item xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full md:!mt-7 lg:!mt-20 xl:!mt-20 max-md:!mt-[50px]&quot;&gt;
            &lt;div className&#x3D;&quot;project-details flex justify-center !self-end flex-col !pl-0 !pb-0&quot;&gt;
              &lt;div className&#x3D;&quot;post-header&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-4 xxl:!pr-20&quot;&gt;
                  Check out some of our recent projects below.
                &lt;&#x2F;h2&gt;
                &lt;p className&#x3D;&quot;lead text-[1.05rem] !leading-[1.6] font-medium !mb-0&quot;&gt;
                  We love to turn ideas into beautiful things.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.post-header *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.project-details *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.item *&#x2F;}
          &lt;div className&#x3D;&quot;item xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[70px]&quot;&gt;
            &lt;figure className&#x3D;&quot;lift rounded !mb-6&quot;&gt;
              &lt;Link href&#x3D;{&#x60;&#x2F;single-project3&#x60;}&gt;
                &lt;img
                  srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;rp1@2x.jpg 2x&quot;
                  alt&#x3D;&quot;image&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;rp1.jpg&quot;
                  width&#x3D;{500}
                  height&#x3D;{400}
                &#x2F;&gt;
              &lt;&#x2F;Link&gt;
            &lt;&#x2F;figure&gt;
            &lt;div className&#x3D;&quot;uppercase !tracking-[0.02rem] text-[0.7rem] font-bold text-line relative align-top !pl-[1.4rem] before:content-[&#39;&#39;] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2&#x2F;4 before:bg-[#a07cc5] !mb-2 !text-[#a07cc5]&quot;&gt;
              Stationary
            &lt;&#x2F;div&gt;
            &lt;h2 className&#x3D;&quot;post-title h3&quot;&gt;Ipsum Ultricies Cursus&lt;&#x2F;h2&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.item *&#x2F;}
          &lt;div className&#x3D;&quot;item xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[70px]&quot;&gt;
            &lt;figure className&#x3D;&quot;lift rounded !mb-6&quot;&gt;
              &lt;Link href&#x3D;{&#x60;&#x2F;single-project2&#x60;}&gt;
                &lt;img
                  srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;rp2@2x.jpg 2x&quot;
                  alt&#x3D;&quot;image&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;rp2.jpg&quot;
                  width&#x3D;{750}
                  height&#x3D;{700}
                &#x2F;&gt;
              &lt;&#x2F;Link&gt;
            &lt;&#x2F;figure&gt;
            &lt;div className&#x3D;&quot;uppercase !tracking-[0.02rem] text-[0.7rem] font-bold text-line relative align-top !pl-[1.4rem] before:content-[&#39;&#39;] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2&#x2F;4 before:bg-[#7cb798] !mb-2 !text-[#7cb798]&quot;&gt;
              Invitation
            &lt;&#x2F;div&gt;
            &lt;h2 className&#x3D;&quot;post-title h3&quot;&gt;Mollis Ipsum Mattis&lt;&#x2F;h2&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.item *&#x2F;}
          &lt;div className&#x3D;&quot;item xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[70px]&quot;&gt;
            &lt;figure className&#x3D;&quot;lift rounded !mb-6&quot;&gt;
              &lt;Link href&#x3D;{&#x60;&#x2F;single-project&#x60;}&gt;
                &lt;img
                  srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;rp3@2x.jpg 2x&quot;
                  alt&#x3D;&quot;image&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;rp3.jpg&quot;
                  width&#x3D;{500}
                  height&#x3D;{337}
                &#x2F;&gt;
              &lt;&#x2F;Link&gt;
            &lt;&#x2F;figure&gt;
            &lt;div className&#x3D;&quot;uppercase !tracking-[0.02rem] text-[0.7rem] font-bold text-line relative align-top !pl-[1.4rem] before:content-[&#39;&#39;] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2&#x2F;4 before:bg-[#747ed1] !mb-2 !text-[#747ed1]&quot;&gt;
              Notebook
            &lt;&#x2F;div&gt;
            &lt;h2 className&#x3D;&quot;post-title h3&quot;&gt;Magna Tristique Inceptos&lt;&#x2F;h2&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.item *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.project *&#x2F;}
    &lt;&#x2F;div&gt;
  );
}`}
        />
        <section id="snippet-4" className="wrapper !bg-[#ffffff]  ">
          <div className="flex flex-wrap mx-[-15px] mt-[90px]">
            <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
              <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
                Latest Projects
              </h2>
              <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-10">
                Check out some of our awesome projects with creative ideas and
                great design.
              </h3>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}

          {/* /.container */}
          <div className="container-fluid xl:!px-6 lg:!px-6 md:!px-6">
            <Projects7 />
            {/* /.swiper-container */}
          </div>
        </section>

        <CodeSnippet
          code={`
import { projects } from &quot;@&#x2F;data&#x2F;projects&quot;;
import React from &quot;react&quot;;
import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Projects() {
  return (
    &lt;div className&#x3D;&quot;swiper-container blog grid-view !mb-[7rem] xl:!mb-[9rem] lg:!mb-[9rem] md:!mb-[9rem]&quot;&gt;
      &lt;Swiper
        className&#x3D;&quot;swiper&quot;
        modules&#x3D;{[Navigation, Pagination]}
        pagination&#x3D;{{
          clickable: true,
          el: &quot;.spd19&quot;,
        }}
        navigation&#x3D;{{
          prevEl: &quot;.snbp19&quot;,
          nextEl: &quot;.snbn19&quot;,
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
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      &gt;
        {projects.map((image, index) &#x3D;&gt; (
          &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot; key&#x3D;{index}&gt;
            &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
              &lt;img
                className&#x3D;&quot;!rounded-[0.4rem]&quot;
                alt&#x3D;{image.alt}
                width&#x3D;{image.width}
                height&#x3D;{image.height}
                src&#x3D;{image.src}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;SwiperSlide&gt;
        ))}
      &lt;&#x2F;Swiper&gt;
      {&#x2F;* &#x2F;.swiper *&#x2F;}
      &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
        &lt;div className&#x3D;&quot;swiper-navigation&quot;&gt;
          &lt;div className&#x3D;&quot;swiper-button swiper-button-prev snbp19&quot;&gt;&lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;swiper-button swiper-button-next snbn19&quot;&gt;&lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        &lt;div className&#x3D;&quot;swiper-pagination spd19&quot;&gt;&lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;div&gt;
  );
}`}
        />
        <Projects5 />
        <CodeSnippet
          code={`
        import &lbrace; projectData &rbrace; from &quot;@&#x2F;data&#x2F;projects&quot;;
        
        import Link from &quot;next&#x2F;link&quot;;
        
        import React, &lbrace; useEffect, useRef, useState &rbrace; from &quot;react&quot;;
        export default function Projects5() &lbrace;
          const isotopRef &#x3D; useRef(null);
          &#x2F;&#x2F; Handle filter item click
        
          const isotopContainer &#x3D; useRef();
          const initIsotop &#x3D; async () &#x3D;&gt; &lbrace;
            const Isotope &#x3D; (await import(&quot;isotope-layout&quot;)).default;
            const imagesloaded &#x3D; (await import(&quot;imagesloaded&quot;)).default;
        
            &#x2F;&#x2F; Initialize Isotope in the mounted hook
            isotopRef.current &#x3D; new Isotope(isotopContainer.current, &lbrace;
              itemSelector: &quot;.item&quot;,
              layoutMode: &quot;masonry&quot;, &#x2F;&#x2F; or &#39;fitRows&#39;, depending on your layout needs
            &rbrace;);
            imagesloaded(isotopContainer.current).on(
              &quot;progress&quot;,
              function (instance, image) &lbrace;
                &#x2F;&#x2F; Trigger Isotope layout
                isotopRef.current.layout();
              &rbrace;
            );
          &rbrace;;
        
          useEffect(() &#x3D;&gt; &lbrace;
            &#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;&#x2F;
            &#x2F;&#x2F; Magnate Animation
        
            setTimeout(() &#x3D;&gt; &lbrace;
              initIsotop();
            &rbrace;, 100);
          &rbrace;, []);
          return (
            &lt;section id&#x3D;&quot;snippet-5&quot; className&#x3D;&quot;wrapper !bg-[#ffffff]  &quot;&gt;
              &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
                  &lt;div className&#x3D;&quot;lg:w-9&#x2F;12 xl:w-8&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-8&quot;&gt;
                    &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !text-center !mb-3 !leading-[1.35]&quot;&gt;
                      Our Projects
                    &lt;&#x2F;h2&gt;
                    &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !text-center&quot;&gt;
                      Check out some of our awesome projects with creative ideas and
                      great design.
                    &lt;&#x2F;h3&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
                &lt;div className&#x3D;&quot;itemgrid grid-view projects-masonry&quot;&gt;
                  &lt;div
                    ref&#x3D;&lbrace;isotopContainer&rbrace;
                    className&#x3D;&quot;flex  flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] xl:!mt-[-80px] lg:!mt-[-80px] md:!mt-[-80px] isotope&quot;
                  &gt;
                    &lbrace;projectData.map((project) &#x3D;&gt; (
                      &lt;div
                        key&#x3D;&lbrace;project.projectId&rbrace;
                        className&#x3D;&lbrace;&#x60;project item xl:w-4&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!mt-[80px] xl:!px-[20px] lg:!mt-[80px] lg:!px-[20px] md:!mt-[80px] md:!px-[20px] !px-[15px] !mt-[50px] max-w-full $&lbrace;project.projectType&rbrace;&#x60;&rbrace;
                      &gt;
                        &lt;figure className&#x3D;&quot;lift rounded !mb-6&quot;&gt;
                          &lt;Link href&#x3D;&lbrace;&#x60;&#x2F;single-project&#x60;&rbrace;&gt;
                            &lt;img
                              alt&#x3D;&quot;image&quot;
                              src&#x3D;&lbrace;project.imageUrl&rbrace;
                              width&#x3D;&lbrace;project.imageWidth&rbrace;
                              height&#x3D;&lbrace;project.imageHeight&rbrace;
                            &#x2F;&gt;
                          &lt;&#x2F;Link&gt;
                        &lt;&#x2F;figure&gt;
                        &lt;div className&#x3D;&quot;project-details flex justify-center flex-col&quot;&gt;
                          &lt;div className&#x3D;&quot;post-header&quot;&gt;
                            &lt;div
                              className&#x3D;&quot;inline-flex uppercase !tracking-[0.02rem] text-[0.7rem] font-bold relative align-top !pl-[1.4rem] opacity-100  before:content-[&#39;&#39;] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2&#x2F;4 before:bg-[#7cb798] !mb-2&quot;
                              style&#x3D;&lbrace;&lbrace; color: project.categoryColor &rbrace;&rbrace;
                            &gt;
                              &lt;span
                                className&#x3D;&quot;before:content-[&#39;&#39;] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2&#x2F;4&quot;
                                style&#x3D;&lbrace;&lbrace; color: project.categoryColor &rbrace;&rbrace;
                              &gt;
                                &lbrace;project.category&rbrace;
                              &lt;&#x2F;span&gt;
                            &lt;&#x2F;div&gt;
                            &lt;h3 className&#x3D;&quot;post-title&quot;&gt;&lbrace;project.title&rbrace;&lt;&#x2F;h3&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    ))&rbrace;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;* &#x2F;.grid *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
        
              &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
            &lt;&#x2F;section&gt;
          );
        &rbrace;`}
        />

        <section id="snippet-6" className="wrapper !bg-[#ffffff]  ">
          <div className="flex flex-wrap mx-[-15px] mt-[90px]">
            <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
              <Projects6 />
            </div>
          </div>
        </section>
        <CodeSnippet
          code={`
import React from &quot;react&quot;;

export default function Projects6() {
  return (
    &lt;&gt;
      {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-center !mb-10&quot;&gt;
        &lt;div className&#x3D;&quot;md:w-8&#x2F;12 lg:w-9&#x2F;12 xl:w-8&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
          &lt;h2 className&#x3D;&quot;!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !mb-0&quot;&gt;
            Check out some of my latest projects with creative ideas.
          &lt;&#x2F;h2&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;column *&#x2F;}
        &lt;div className&#x3D;&quot;md:w-4&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-auto lg:!ml-auto md:!ml-auto xl:!text-right lg:!text-right md:!text-right !mt-5 xl:!mt-0 lg:!mt-0 md:!mt-0&quot;&gt;
          &lt;a
            href&#x3D;&quot;#&quot;
            className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
          &gt;
            See All Projects
            &lt;i className&#x3D;&quot;uil uil-arrow-up-right !ml-[.3rem] before:content-[&#39;\e950&#39;]&quot; &#x2F;&gt;
          &lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;.row *&#x2F;}
      &lt;div className&#x3D;&quot;card !bg-[#f6f3f9] !mb-10&quot;&gt;
        &lt;div className&#x3D;&quot;card-body p-14 pb-0&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full pb-14 self-center&quot;&gt;
              &lt;div className&#x3D;&quot;uppercase !tracking-[0.02rem] text-[0.75rem] font-semibold !mb-3 !text-[#a07cc5]&quot;&gt;
                Web Design
              &lt;&#x2F;div&gt;
              &lt;h3 className&#x3D;&quot;h1 post-title !mb-3 !leading-[1.3]&quot;&gt;
                Snowlake Theme
              &lt;&#x2F;h3&gt;
              &lt;p&gt;
                Maecenas faucibus mollis interdum sed posuere consectetur est at
                lobortis. Scelerisque id ligula porta felis euismod semper.
                Fusce dapibus tellus cursus.
              &lt;&#x2F;p&gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;btn btn-sm btn-violet !text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:!border-[#a07cc5] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5] btn-icon btn-icon-end !mb-0 !text-[0.75rem]&quot;
              &gt;
                See Project
                &lt;i className&#x3D;&quot;uil uil-arrow-up-right before:content-[&#39;\e950&#39;]&quot; &#x2F;&gt;
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
            &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 xl:!ml-[8.33333333%] lg:w-7&#x2F;12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] !px-[15px] max-w-full !self-end&quot;&gt;
              &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
                &lt;img
                  className&#x3D;&quot;max-w-full h-auto&quot;
                  srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f1@2x.png 2x&quot;
                  alt&#x3D;&quot;image&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f1.png&quot;
                  width&#x3D;{650}
                  height&#x3D;{370}
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.card-body *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;.card *&#x2F;}
      &lt;div className&#x3D;&quot;card !bg-[#edf2fc] !mb-10&quot;&gt;
        &lt;div className&#x3D;&quot;card-body p-14&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-50px] items-center&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 xl:!ml-[8.33333333%] lg:!order-2 lg:!ml-[8.33333333%] !mt-[50px]&quot;&gt;
              &lt;div className&#x3D;&quot;uppercase !tracking-[0.02rem] text-[0.75rem] font-semibold !mb-3 !text-[#3f78e0]&quot;&gt;
                Mobile Design
              &lt;&#x2F;div&gt;
              &lt;h3 className&#x3D;&quot;h1 post-title !mb-3 !leading-[1.3]&quot;&gt;Budget App&lt;&#x2F;h3&gt;
              &lt;p&gt;
                Maecenas faucibus mollis interdum sed posuere consectetur est at
                lobortis. Scelerisque id ligula porta felis euismod semper.
                Fusce dapibus tellus cursus.
              &lt;&#x2F;p&gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;btn btn-sm btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] btn-icon btn-icon-end !mb-0 !text-[0.75rem]&quot;
              &gt;
                See Project
                &lt;i className&#x3D;&quot;uil uil-arrow-up-right before:content-[&#39;\e950&#39;]&quot; &#x2F;&gt;
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
            &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
              &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
                &lt;img
                  className&#x3D;&quot;max-w-full h-auto&quot;
                  srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f2@2x.png 2x&quot;
                  alt&#x3D;&quot;image&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f2.png&quot;
                  width&#x3D;{600}
                  height&#x3D;{367}
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.card-body *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;.card *&#x2F;}
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-25px]&quot;&gt;
        &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full&quot;&gt;
          &lt;div className&#x3D;&quot;card !bg-[#f3f8f5] !mb-10 lg:!mb-0&quot;&gt;
            &lt;div className&#x3D;&quot;card-body p-14 pb-0&quot;&gt;
              &lt;div className&#x3D;&quot;uppercase !tracking-[0.02rem] text-[0.75rem] font-semibold !mb-3 !text-[#7cb798]&quot;&gt;
                Web Design
              &lt;&#x2F;div&gt;
              &lt;h3 className&#x3D;&quot;h1 post-title !mb-3 !leading-[1.3]&quot;&gt;
                Missio Theme
              &lt;&#x2F;h3&gt;
              &lt;p&gt;
                Maecenas faucibus mollis interdum sed posuere porta consectetur
                cursus porta lobortis. Scelerisque id ligula felis.
              &lt;&#x2F;p&gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;btn btn-sm btn-leaf !text-white !bg-[#7cb798] border-[#7cb798] hover:text-white hover:bg-[#7cb798] hover:!border-[#7cb798] focus:shadow-[rgba(113,165,142,1)] active:text-white active:bg-[#7cb798] active:border-[#7cb798] disabled:text-white disabled:bg-[#7cb798] disabled:border-[#7cb798] btn-icon btn-icon-end !text-[0.75rem] !mb-10&quot;
              &gt;
                See Project
                &lt;i className&#x3D;&quot;uil uil-arrow-up-right before:content-[&#39;\e950&#39;]&quot; &#x2F;&gt;
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.card-body *&#x2F;}
            &lt;img
              className&#x3D;&quot;card-img-bottom&quot;
              srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f3@2x.png 2x&quot;
              alt&#x3D;&quot;image&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f3.png&quot;
              width&#x3D;{620}
              height&#x3D;{370}
            &#x2F;&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.card *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
        &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full&quot;&gt;
          &lt;div className&#x3D;&quot;card !bg-[#fbf1f4] xl:!mb-0 lg:!mb-0&quot;&gt;
            &lt;div className&#x3D;&quot;card-body p-14 pb-0&quot;&gt;
              &lt;div className&#x3D;&quot;uppercase !tracking-[0.02rem] text-[0.75rem] font-semibold !mb-3 !text-[#d16b86]&quot;&gt;
                Mobile Design
              &lt;&#x2F;div&gt;
              &lt;h3 className&#x3D;&quot;h1 post-title !mb-3 !leading-[1.3]&quot;&gt;
                Storage App
              &lt;&#x2F;h3&gt;
              &lt;p&gt;
                Maecenas faucibus mollis interdum sed posuere consectetur est at
                lobortis. Scelerisque id ligula porta felis euismod semper.
              &lt;&#x2F;p&gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;btn btn-sm btn-pink !text-white !bg-[#d16b86] border-[#d16b86] hover:text-white hover:bg-[#d16b86] hover:!border-[#d16b86] active:text-white active:bg-[#d16b86] active:border-[#d16b86] disabled:text-white disabled:bg-[#d16b86] disabled:border-[#d16b86] btn-icon btn-icon-end !text-[0.75rem] !mb-10&quot;
              &gt;
                See Project
                &lt;i className&#x3D;&quot;uil uil-arrow-up-right before:content-[&#39;\e950&#39;]&quot; &#x2F;&gt;
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.card-body *&#x2F;}
            &lt;img
              className&#x3D;&quot;card-img-bottom&quot;
              srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f4@2x.png 2x&quot;
              alt&#x3D;&quot;image&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f4.png&quot;
              width&#x3D;{620}
              height&#x3D;{370}
            &#x2F;&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.card *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.row *&#x2F;}
    &lt;&#x2F;&gt;
  );
}`}
        />

        <section id="snippet-7" className="wrapper !bg-[#ffffff]  ">
          <div
            className="
        mt-[90px]"
          >
            <Projects8 isWave={false} />
          </div>
        </section>
        <CodeSnippet
          code={`
import { projects2 } from &quot;@&#x2F;data&#x2F;projects&quot;;
import React from &quot;react&quot;;
import { Navigation } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;
import Link from &quot;next&#x2F;link&quot;;

export default function Projects({ isWave &#x3D; true }) {
  return (
    &lt;&gt;
      &lt;div className&#x3D;&quot;overflow-hidden&quot;&gt;
        &lt;div className&#x3D;&quot;container pt-14 xl:pt-7 lg:pt-7 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
            &lt;div className&#x3D;&quot;lg:w-10&#x2F;12 xl:w-9&#x2F;12 xxl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
              &lt;h2 className&#x3D;&quot;!text-[0.8rem] uppercase !text-[#5eb9f0] !mb-3 !leading-[1.35] !tracking-[0.02rem]&quot;&gt;
                Latest Projects
              &lt;&#x2F;h2&gt;
              &lt;h3 className&#x3D;&quot;xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] !mb-10&quot;&gt;
                Check out some of our awesome projects with creative ideas and
                great design.
              &lt;&#x2F;h3&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;div
            className&#x3D;&quot;swiper-container grid-view nav-bottom nav-color !mb-[4.5rem] relative z-10&quot;
            data-margin&#x3D;{30}
            data-dots&#x3D;&quot;false&quot;
            data-nav&#x3D;&quot;true&quot;
            data-items-md&#x3D;{2}
            data-items-xs&#x3D;{1}
          &gt;
            &lt;Swiper
              className&#x3D;&quot;swiper overflow-visible&quot;
              spaceBetween&#x3D;{30}
              modules&#x3D;{[Navigation]}
              navigation&#x3D;{{
                prevEl: &quot;.snbp21&quot;,
                nextEl: &quot;.snbn21&quot;,
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
              {projects2.map((slide, index) &#x3D;&gt; (
                &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot; key&#x3D;{index}&gt;
                  &lt;figure className&#x3D;&quot;!rounded-[.4rem] !mb-7&quot;&gt;
                    &lt;Link href&#x3D;{&#x60;&#x2F;single-project&#x60;}&gt;
                      &lt;img
                        srcSet&#x3D;{slide.srcSet}
                        alt&#x3D;{slide.alt}
                        src&#x3D;{slide.src}
                        width&#x3D;{slide.width}
                        height&#x3D;{slide.height}
                      &#x2F;&gt;
                    &lt;&#x2F;Link&gt;
                  &lt;&#x2F;figure&gt;
                  &lt;div className&#x3D;&quot;project-details flex justify-center flex-col&quot;&gt;
                    &lt;div className&#x3D;&quot;post-header&quot;&gt;
                      &lt;h2 className&#x3D;&quot;post-title h3&quot;&gt;
                        &lt;Link
                          href&#x3D;{&#x60;&#x2F;single-project&#x60;}
                          className&#x3D;&quot;!text-[#343f52] hover:!text-[#5eb9f0]&quot;
                        &gt;
                          {slide.title}
                        &lt;&#x2F;Link&gt;
                      &lt;&#x2F;h2&gt;
                      &lt;div className&#x3D;&quot;uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]&quot;&gt;
                        {slide.category}
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;SwiperSlide&gt;
              ))}
              {&#x2F;*&#x2F;.swiper-slide *&#x2F;}

              {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
            &lt;&#x2F;Swiper&gt;
            &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
              &lt;div className&#x3D;&quot;swiper-navigation&quot;&gt;
                &lt;div className&#x3D;&quot;swiper-button swiper-button-prev snbp21&quot;&gt;&lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;swiper-button swiper-button-next snbn21&quot;&gt;&lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.swiper *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.swiper-container *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}
        {isWave &amp;&amp; (
          &lt;div className&#x3D;&quot;divider !text-[#f0f8fe] mx-[-0.5rem]&quot;&gt;
            &lt;svg xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot; viewBox&#x3D;&quot;0 0 1440 100&quot;&gt;
              &lt;path
                fill&#x3D;&quot;currentColor&quot;
                d&#x3D;&quot;M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z&quot;
              &#x2F;&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
        )}
      &lt;&#x2F;div&gt;
    &lt;&#x2F;&gt;
  );
}`}
        />
        <Projects9 />
        <CodeSnippet
          code={`
      import React from &quot;react&quot;;
      import Link from &quot;next&#x2F;link&quot;;
      
      import &lbrace; projects4 &rbrace; from &quot;@&#x2F;data&#x2F;projects&quot;;
      import &lbrace; Gallery, Item &rbrace; from &quot;react-photoswipe-gallery&quot;;
      export default function Projects() &lbrace;
        return (
          &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
            &lt;div className&#x3D;&quot;container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
                &lt;div className&#x3D;&quot;lg:w-11&#x2F;12 xl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-10&quot;&gt;
                  &lt;h2 className&#x3D;&quot;!text-[0.8rem] uppercase !text-[#aab0bc] !text-center !mb-3 !leading-[1.35]&quot;&gt;
                    Our Projects
                  &lt;&#x2F;h2&gt;
                  &lt;h3 className&#x3D;&quot;xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !text-center lg:!px-5 xl:!px-10 xxl:!px-[6rem] !mb-0&quot;&gt;
                    Check out some of our awesome projects with creative ideas and
                    great design.
                  &lt;&#x2F;h3&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
              &lt;Gallery&gt;
                &lt;div className&#x3D;&quot;itemgrid grid-view projects-masonry&quot;&gt;
                  &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] xl:!mt-[-80px] lg:!mt-[-80px] md:!mt-[-80px] isotope&quot;&gt;
                    &lbrace;projects4.map((project) &#x3D;&gt; (
                      &lt;div
                        key&#x3D;&lbrace;project.id&rbrace;
                        className&#x3D;&quot;project item group md:w-6&#x2F;12 lg:w-6&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full&quot;
                      &gt;
                        &lt;Item
                          original&#x3D;&lbrace;project.fullImage&rbrace;
                          thumbnail&#x3D;&lbrace;project.fullImage&rbrace;
                          width&#x3D;&lbrace;410&rbrace;
                          height&#x3D;&lbrace;440&rbrace;
                        &gt;
                          &lbrace;(&lbrace; ref, open &rbrace;) &#x3D;&gt; (
                            &lt;figure className&#x3D;&quot;!rounded-[.4rem] !mb-6&quot;&gt;
                              &lt;img
                                className&#x3D;&quot;!rounded-[.4rem]&quot;
                                srcSet&#x3D;&lbrace;project.srcSet&rbrace;
                                alt&#x3D;&quot;image&quot;
                                src&#x3D;&lbrace;project.src&rbrace;
                                width&#x3D;&lbrace;410&rbrace;
                                height&#x3D;&lbrace;440&rbrace;
                                ref&#x3D;&lbrace;ref&rbrace;
                              &#x2F;&gt;
                              &lt;a
                                className&#x3D;&quot;item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]&quot;
                                onClick&#x3D;&lbrace;open&rbrace;
                                data-gallery&#x3D;&quot;projects-group&quot;
                              &gt;
                                &lt;i className&#x3D;&quot;uil uil-focus-add before:content-[&#39;\eb22&#39;]&quot; &#x2F;&gt;
                              &lt;&#x2F;a&gt;
                            &lt;&#x2F;figure&gt;
                          )&rbrace;
                        &lt;&#x2F;Item&gt;
                        &lt;div className&#x3D;&quot;project-details flex justify-center flex-col&quot;&gt;
                          &lt;div className&#x3D;&quot;post-header&quot;&gt;
                            &lt;h2 className&#x3D;&quot;post-title h3 !text-[1.1rem] !leading-[1.4]&quot;&gt;
                              &lt;Link
                                href&#x3D;&lbrace;&#x60;&#x2F;single-project$&lbrace;project.id&rbrace;&#x60;&rbrace; &#x2F;&#x2F; Dynamically generate the link
                                className&#x3D;&quot;!text-[#343f52] hover:!text-[#3f78e0]&quot;
                              &gt;
                                &lbrace;project.title&rbrace;
                              &lt;&#x2F;Link&gt;
                            &lt;&#x2F;h2&gt;
                            &lt;div className&#x3D;&quot;uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]&quot;&gt;
                              &lbrace;project.category&rbrace;
                            &lt;&#x2F;div&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    ))&rbrace;
                    &lbrace;&#x2F;* &#x2F;.item *&#x2F;&rbrace;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;Gallery&gt;
              &lbrace;&#x2F;* &#x2F;.grid *&#x2F;&rbrace;
              &lt;div className&#x3D;&quot;text-center !mt-10&quot;&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-lg btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                &gt;
                  Start a Project
                &lt;&#x2F;a&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
          &lt;&#x2F;section&gt;
        );
      &rbrace;`}
        />
        <Projects10 bgColor="" />
        <CodeSnippet
          code={`
      import React from &quot;react&quot;;
      import Link from &quot;next&#x2F;link&quot;;
      
      import &lbrace; projects4 &rbrace; from &quot;@&#x2F;data&#x2F;projects&quot;;
      import &lbrace; Gallery, Item &rbrace; from &quot;react-photoswipe-gallery&quot;;
      export default function Projects() &lbrace;
        return (
          &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
            &lt;div className&#x3D;&quot;container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
                &lt;div className&#x3D;&quot;lg:w-11&#x2F;12 xl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-10&quot;&gt;
                  &lt;h2 className&#x3D;&quot;!text-[0.8rem] uppercase !text-[#aab0bc] !text-center !mb-3 !leading-[1.35]&quot;&gt;
                    Our Projects
                  &lt;&#x2F;h2&gt;
                  &lt;h3 className&#x3D;&quot;xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !text-center lg:!px-5 xl:!px-10 xxl:!px-[6rem] !mb-0&quot;&gt;
                    Check out some of our awesome projects with creative ideas and
                    great design.
                  &lt;&#x2F;h3&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
              &lt;Gallery&gt;
                &lt;div className&#x3D;&quot;itemgrid grid-view projects-masonry&quot;&gt;
                  &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] xl:!mt-[-80px] lg:!mt-[-80px] md:!mt-[-80px] isotope&quot;&gt;
                    &lbrace;projects4.map((project) &#x3D;&gt; (
                      &lt;div
                        key&#x3D;&lbrace;project.id&rbrace;
                        className&#x3D;&quot;project item group md:w-6&#x2F;12 lg:w-6&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full&quot;
                      &gt;
                        &lt;Item
                          original&#x3D;&lbrace;project.fullImage&rbrace;
                          thumbnail&#x3D;&lbrace;project.fullImage&rbrace;
                          width&#x3D;&lbrace;410&rbrace;
                          height&#x3D;&lbrace;440&rbrace;
                        &gt;
                          &lbrace;(&lbrace; ref, open &rbrace;) &#x3D;&gt; (
                            &lt;figure className&#x3D;&quot;!rounded-[.4rem] !mb-6&quot;&gt;
                              &lt;img
                                className&#x3D;&quot;!rounded-[.4rem]&quot;
                                srcSet&#x3D;&lbrace;project.srcSet&rbrace;
                                alt&#x3D;&quot;image&quot;
                                src&#x3D;&lbrace;project.src&rbrace;
                                width&#x3D;&lbrace;410&rbrace;
                                height&#x3D;&lbrace;440&rbrace;
                                ref&#x3D;&lbrace;ref&rbrace;
                              &#x2F;&gt;
                              &lt;a
                                className&#x3D;&quot;item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]&quot;
                                onClick&#x3D;&lbrace;open&rbrace;
                                data-gallery&#x3D;&quot;projects-group&quot;
                              &gt;
                                &lt;i className&#x3D;&quot;uil uil-focus-add before:content-[&#39;\eb22&#39;]&quot; &#x2F;&gt;
                              &lt;&#x2F;a&gt;
                            &lt;&#x2F;figure&gt;
                          )&rbrace;
                        &lt;&#x2F;Item&gt;
                        &lt;div className&#x3D;&quot;project-details flex justify-center flex-col&quot;&gt;
                          &lt;div className&#x3D;&quot;post-header&quot;&gt;
                            &lt;h2 className&#x3D;&quot;post-title h3 !text-[1.1rem] !leading-[1.4]&quot;&gt;
                              &lt;Link
                                href&#x3D;&lbrace;&#x60;&#x2F;single-project$&lbrace;project.id&rbrace;&#x60;&rbrace; &#x2F;&#x2F; Dynamically generate the link
                                className&#x3D;&quot;!text-[#343f52] hover:!text-[#3f78e0]&quot;
                              &gt;
                                &lbrace;project.title&rbrace;
                              &lt;&#x2F;Link&gt;
                            &lt;&#x2F;h2&gt;
                            &lt;div className&#x3D;&quot;uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]&quot;&gt;
                              &lbrace;project.category&rbrace;
                            &lt;&#x2F;div&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    ))&rbrace;
                    &lbrace;&#x2F;* &#x2F;.item *&#x2F;&rbrace;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;Gallery&gt;
              &lbrace;&#x2F;* &#x2F;.grid *&#x2F;&rbrace;
              &lt;div className&#x3D;&quot;text-center !mt-10&quot;&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-lg btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                &gt;
                  Start a Project
                &lt;&#x2F;a&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
          &lt;&#x2F;section&gt;
        );
      &rbrace;`}
        />
        <section id="snippet-10" className="wrapper !bg-[#ffffff]  ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <Projects11 />
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;
      
      import &lbrace; projects1 &rbrace; from &quot;@&#x2F;data&#x2F;projects&quot;;
      export default function Projects() &lbrace;
        return (
          &lt;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 lg:w-10&#x2F;12 xxl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-14&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase !text-[#aab0bc] !mb-3&quot;&gt;
                  Latest Projects
                &lt;&#x2F;h2&gt;
                &lt;h3 className&#x3D;&quot;!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !tracking-[-0.03em] !mb-[10]&quot;&gt;
                  Check out some of our
                  &lt;span className&#x3D;&quot;!relative z-[1] style-1 primary before:content-[&#39;&#39;] before:z-[-1] before:absolute before:opacity-100 before:block before:-translate-x-2&#x2F;4 before:-translate-y-2&#x2F;4 before:-rotate-1 before:w-[111%] before:h-[110%] before:rounded-[80%] before:border-t-0 before:border-[3px] before:border-solid before:border-[#3f78e0] before:left-2&#x2F;4 before:!top-[52%] after:content-[&#39;&#39;] after:z-[-1] after:absolute after:opacity-100 after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:-translate-x-2&#x2F;4 after:-translate-y-2&#x2F;4 after:-rotate-2 after:w-[107%] after:h-[111%] after:rounded-[80%] after:border-l-0 after:border-b-0 after:border-[3px] after:border-solid after:border-[#3f78e0] after:left-2&#x2F;4 after:top-[52%] max-xl:before:!hidden max-xl:after:!hidden max-lg:before:!hidden max-lg:after:!hidden max-md:before:!hidden max-md:after:!hidden max-sm:before:!hidden max-sm:after:!hidden&quot;&gt;
                    &lt;em&gt;awesome&lt;&#x2F;em&gt;
                  &lt;&#x2F;span&gt;
                  projects with creative ideas and great design.
                &lt;&#x2F;h3&gt;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
            &lbrace;projects1.map((project) &#x3D;&gt; (
              &lt;div
                key&#x3D;&lbrace;project.id&rbrace;
                className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-50px] items-center !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]&quot;
              &gt;
                &lt;div
                  className&#x3D;&lbrace;&#x60;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full $&lbrace;
                    project.order &#x3D;&#x3D;&#x3D; 2 ? &quot;xl:!order-2 lg:!order-2&quot; : &quot;&quot;
                  &rbrace; !mt-[50px]&#x60;&rbrace;
                &gt;
                  &lt;div className&#x3D;&quot;card&quot; style&#x3D;&lbrace;&lbrace; backgroundColor: project.cardBg &rbrace;&rbrace;&gt;
                    &lt;div className&#x3D;&quot;card-body !p-12 overflow-hidden&quot;&gt;
                      &lt;figure&gt;
                        &lt;a href&#x3D;&quot;#&quot;&gt;
                          &lt;img
                            srcSet&#x3D;&lbrace;project.imageSrcSet&rbrace;
                            alt&#x3D;&lbrace;project.imageAlt&rbrace;
                            src&#x3D;&lbrace;project.imageSrc&rbrace;
                            width&#x3D;&lbrace;project.imageWidth&rbrace;
                            height&#x3D;&lbrace;project.imageHeight&rbrace;
                          &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                      &lt;&#x2F;figure&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                  &lt;h3 className&#x3D;&quot;h1 post-title !tracking-[-0.03em] !mb-2 !leading-[1.3]&quot;&gt;
                    &lbrace;project.title&rbrace;
                  &lt;&#x2F;h3&gt;
                  &lt;div className&#x3D;&quot;uppercase !tracking-[0.02rem] text-[0.7rem] font-semibold !text-[#aab0bc] !mb-4&quot;&gt;
                    &lbrace;project.categories.map((category, index) &#x3D;&gt; (
                      &lt;span key&#x3D;&lbrace;index&rbrace;&gt;
                        &lbrace;category&rbrace;
                        &lbrace;index &lt; project.categories.length - 1 ? &quot;, &quot; : &quot;&quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    ))&rbrace;
                  &lt;&#x2F;div&gt;
                  &lt;p className&#x3D;&quot;!mb-6&quot;&gt;&lbrace;project.description&rbrace;&lt;&#x2F;p&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&lbrace;&#x60;btn $&lbrace;project.buttonClass&rbrace; !text-white rounded&#x60;&rbrace;
                  &gt;
                    &lbrace;project.buttonText&rbrace;
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            ))&rbrace;
          &lt;&#x2F;&gt;
        );
      &rbrace;`}
        />
        <Projects12 />
        <CodeSnippet
          code={`import React from &quot;react&quot;;
      import Link from &quot;next&#x2F;link&quot;;
      
      import &lbrace; projects9 &rbrace; from &quot;@&#x2F;data&#x2F;projects&quot;;
      import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;
      export default function Projects() &lbrace;
        return (
          &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot; id&#x3D;&quot;demos&quot;&gt;
            &lt;div className&#x3D;&quot;container py-[4.5rem] xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem] xl:pb-36 lg:pb-36 md:pb-36&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mb-10&quot;&gt;
                &lt;div className&#x3D;&quot;md:w-9&#x2F;12 lg:w-7&#x2F;12 xl:w-6&#x2F;12 xxl:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
                  &lt;div className&#x3D;&quot;counter-wrapper&quot;&gt;
                    &lt;h3 className&#x3D;&quot;xl:!text-[3.5rem] max-xl:!text-[calc(1.475rem_+_2.7vw)] !mb-3 !text-[#747ed1] !leading-none !text-center counter&quot;&gt;
                      &lt;Counter max&#x3D;&lbrace;21&rbrace; &#x2F;&gt;
                    &lt;&#x2F;h3&gt;
                  &lt;&#x2F;div&gt;
                  &lt;h2 className&#x3D;&quot;!text-[calc(1.335rem_+_1.02vw)] font-bold !leading-[1.2] xl:!text-[2.1rem] !mb-3 !text-center&quot;&gt;
                    Functional, impressive and rich demos to start with
                  &lt;&#x2F;h2&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
              &lt;div className&#x3D;&quot;demos-wrapper&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[0.8rem] !leading-[1.35] !font-bold uppercase !text-[#aab0bc] !mb-6 !text-center&quot;&gt;
                  New Demos
                &lt;&#x2F;h2&gt;
                &lbrace;projects9.map((project) &#x3D;&gt; (
                  &lt;div key&#x3D;&lbrace;project.id&rbrace; className&#x3D;&quot;project !mb-10&quot;&gt;
                    &lt;div className&#x3D;&quot;card&quot; style&#x3D;&lbrace;&lbrace; backgroundColor: project.cardBg &rbrace;&rbrace;&gt;
                      &lt;div className&#x3D;&quot;card-body xl:!pl-14 px-[40px] py-0 overflow-hidden&quot;&gt;
                        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-35px] items-center&quot;&gt;
                          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full&quot;&gt;
                            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-17.5px]&quot;&gt;
                              &lbrace;project.images.map((image, index) &#x3D;&gt; (
                                &lt;div
                                  key&#x3D;&lbrace;index&rbrace;
                                  className&#x3D;&quot;w-6&#x2F;12 flex-[0_0_auto] px-[17.5px] max-w-full&quot;
                                &gt;
                                  &lt;figure
                                    className&#x3D;&lbrace;&#x60;itooltip $&lbrace;image.tooltipClass&rbrace; $&lbrace;
                                      index &#x3D;&#x3D;&#x3D; 0 ? &quot;!mt-9&quot; : &quot;&quot;
                                    &rbrace;&#x60;&rbrace;
                                    title&#x3D;&lbrace;&#x60;&lt;h5 className&#x3D;&quot; $&lbrace;image.tooltipClass&rbrace; !mb-0&quot;&gt;Click to see the demo&lt;&#x2F;h5&gt;&#x60;&rbrace;
                                  &gt;
                                    &lt;Link href&#x3D;&lbrace;project.demoLink&rbrace; target&#x3D;&quot;_blank&quot;&gt;
                                      &lt;img
                                        className&#x3D;&lbrace;&#x60;shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] $&lbrace;image.className&rbrace;&#x60;&rbrace;
                                        srcSet&#x3D;&lbrace;image.srcSet&rbrace;
                                        alt&#x3D;&lbrace;image.alt&rbrace;
                                        src&#x3D;&lbrace;image.src&rbrace;
                                        width&#x3D;&lbrace;image.width&rbrace;
                                        height&#x3D;&lbrace;image.height&rbrace;
                                      &#x2F;&gt;
                                    &lt;&#x2F;Link&gt;
                                  &lt;&#x2F;figure&gt;
                                &lt;&#x2F;div&gt;
                              ))&rbrace;
                            &lt;&#x2F;div&gt;
                          &lt;&#x2F;div&gt;
                          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full hidden xl:block lg:block&quot;&gt;
                            &lt;h2 className&#x3D;&quot;post-title xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-4 !leading-[1.35]&quot;&gt;
                              &lbrace;project.title&rbrace;
                            &lt;&#x2F;h2&gt;
                            &lt;ul className&#x3D;&quot;pl-0 list-none bullet-grape flex flex-wrap mx-[-15px] !ml-0 !mt-[-10px]&quot;&gt;
                              &lbrace;project.features.map((feature, index) &#x3D;&gt; (
                                &lt;li
                                  key&#x3D;&lbrace;index&rbrace;
                                  className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full relative !pl-5 !mt-[10px]&quot;
                                &gt;
                                  &lt;span&gt;
                                    &lt;i
                                      className&#x3D;&quot;uil uil-check before:content-[&#39;\e9dd&#39;] absolute top-[-0.2rem] text-[1rem]&quot;
                                      style&#x3D;&lbrace;&lbrace; color: feature.iconColor &rbrace;&rbrace;
                                    &#x2F;&gt;
                                  &lt;&#x2F;span&gt;
                                  &lt;span&gt;&lbrace;feature.text&rbrace;&lt;&#x2F;span&gt;
                                &lt;&#x2F;li&gt;
                              ))&rbrace;
                            &lt;&#x2F;ul&gt;
                            &lt;Link
                              href&#x3D;&lbrace;project.demoLink&rbrace;
                              target&#x3D;&quot;_blank&quot;
                              className&#x3D;&lbrace;&#x60;btn btn-sm $&lbrace;project.button.className&rbrace; !text-white !bg-[$&lbrace;project.button.bgColor&rbrace;] border-[$&lbrace;project.button.borderColor&rbrace;] hover:text-white hover:bg-[$&lbrace;project.button.bgColor&rbrace;] hover:!border-[$&lbrace;project.button.borderColor&rbrace;] active:text-white active:bg-[$&lbrace;project.button.bgColor&rbrace;] active:border-[$&lbrace;project.button.borderColor&rbrace;] disabled:text-white disabled:bg-[$&lbrace;project.button.bgColor&rbrace;] disabled:border-[$&lbrace;project.button.borderColor&rbrace;] !rounded-[50rem] !mt-1&#x60;&rbrace;
                            &gt;
                              &lbrace;project.button.text&rbrace;
                            &lt;&#x2F;Link&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                ))&rbrace;
                &lbrace;&#x2F;* &#x2F;.project *&#x2F;&rbrace;
                &lt;div className&#x3D;&quot;text-center !mt-12&quot;&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                  &gt;
                    See All Demos
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;* &#x2F;.demos-wrapper *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
            &lt;div className&#x3D;&quot;overflow-hidden&quot;&gt;
              &lt;div className&#x3D;&quot;divider !text-[#f2f3fb] mx-[-0.5rem]&quot;&gt;
                &lt;svg xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot; viewBox&#x3D;&quot;0 0 1440 100&quot;&gt;
                  &lt;path
                    fill&#x3D;&quot;currentColor&quot;
                    d&#x3D;&quot;M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;* &#x2F;.overflow-hidden *&#x2F;&rbrace;
          &lt;&#x2F;section&gt;
        );
      &rbrace;`}
        />
      </div>
    </>
  );
}
