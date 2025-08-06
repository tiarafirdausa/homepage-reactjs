import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import PageTitle from "@/components/blocks/PageTitle";
import React from "react";

import { Link } from "react-router-dom";
import CodeSnippet from "@/components/common/CodeSnippet";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Hero || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageHero() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Hero" />
      <BlockPageLinks />
      <>
        <section className="wrapper !bg-[#ffffff]">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <div
                  className="alert alert-primary !text-[#2c549d] !bg-[#edf2fc] !border-[#2c549d] alert-icon !p-[1rem] !pl-10 !border-0"
                  role="alert"
                >
                  <i className="uil uil-exclamation-circle before:content-['\ead0']" />
                  Click on the image to see the live demo of the hero example.
                </div>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        <section id="snippet-1" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-10 xl:pt-14 lg:pt-14 md:pt-14">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo1`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="950"
                      src="/assets/img/docs/hero1.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper bg-gradient-yellow&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-8 !text-center&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full&quot;&gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;w-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i2@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i2.png&quot;
                width&#x3D;{800}
                height&#x3D;{538}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;md:w-10&#x2F;12 lg:w-5&#x2F;12 xl:w-5&#x2F;12 md:!ml-[8.33333333%] lg:!ml-0 xl:!ml-0 flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full text-center lg:text-left xl:text-left&quot;&gt;
            &lt;h1 className&#x3D;&quot;!text-[calc(1.375rem_+_1.5vw)] font-bold !leading-[1.15] xl:!text-[2.5rem] !mb-5 md:mx-[-1.25rem] lg:mx-0&quot;&gt;
              Grow Your Business with Our Solutions.
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.1rem] !leading-[1.55] !mb-7&quot;&gt;
              We help our clients to increase their website traffic, rankings
              and visibility in search results.
            &lt;&#x2F;p&gt;
            &lt;span&gt;
              &lt;a className&#x3D;&quot;btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !text-[.85rem] !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;&gt;
                Try It For Free
              &lt;&#x2F;a&gt;
            &lt;&#x2F;span&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-2" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo2`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1104"
                      src="/assets/img/docs/hero2.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] lg:mx-0 xl:mx-[-20px] !mb-7 md:!mb-10 lg:!mb-[6rem] xl:!mb-[6rem] items-center&quot;&gt;
      &lt;div
        className&#x3D;&quot;md:w-8&#x2F;12 md:!ml-[16.66666667%] lg:w-6&#x2F;12 lg:!ml-[8.33333333%] xl:w-6&#x2F;12 xl:!ml-[8.33333333%] w-full flex-[0_0_auto] !px-[15px] lg:px-0 xl:!px-[20px] max-w-full !relative lg:!order-2 xl:!order-2&quot;
        data-cue&#x3D;&quot;zoomIn&quot;
      &gt;
        &lt;div
          className&#x3D;&quot;shape bg-dot primary rellax !w-[7rem] !h-[9rem] absolute z-[1] opacity-50 !bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]&quot;
          data-rellax-speed&#x3D;{1}
          style&#x3D;{{ top: &quot;-1.7rem&quot;, left: &quot;-1.5rem&quot; }}
        &#x2F;&gt;
        &lt;div
          className&#x3D;&quot;shape rounded !bg-[#edf2fc] rellax xl:block lg:block md:block absolute z-[1]&quot;
          data-rellax-speed&#x3D;{0}
          style&#x3D;{{
            bottom: &quot;-1.8rem&quot;,
            right: &quot;-0.8rem&quot;,
            width: &quot;85%&quot;,
            height: &quot;90%&quot;,
          }}
        &#x2F;&gt;
        &lt;figure className&#x3D;&quot;rounded-[0.4rem] relative z-[2]&quot;&gt;
          &lt;img
            className&#x3D;&quot;rounded-[0.4rem]&quot;
            srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about7@2x.jpg 2x&quot;
            alt&#x3D;&quot;image&quot;
            width&#x3D;{575}
            height&#x3D;{550}
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about7.jpg&quot;
          &#x2F;&gt;
        &lt;&#x2F;figure&gt;
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;column *&#x2F;}
      &lt;div
        className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] lg:px-0 xl:!px-[20px] max-w-full xl:!mt-[-2.5rem] lg:!mt-[-2.5rem] !mt-[4rem] text-center lg:text-left xl:text-left&quot;
        data-cues&#x3D;&quot;slideInDown&quot;
        data-group&#x3D;&quot;page-title&quot;
        data-delay&#x3D;{600}
      &gt;
        &lt;h1 className&#x3D;&quot;!text-[calc(1.385rem_+_1.62vw)] !font-normal !tracking-[normal] font-DMSerif !leading-[1.1] xl:!text-[2.6rem] !mb-5&quot;&gt;
          We bring solutions to make life easier for our customers.
        &lt;&#x2F;h1&gt;
        &lt;p className&#x3D;&quot;lead text-[1.25rem] leading-normal !mb-7 md:!px-10 lg:!px-0&quot;&gt;
          We have considered our solutions to support every stage of your
          growth.
        &lt;&#x2F;p&gt;
        &lt;div
          className&#x3D;&quot;flex justify-center lg:!justify-start xl:!justify-start&quot;
          data-cues&#x3D;&quot;slideInDown&quot;
          data-group&#x3D;&quot;page-title-buttons&quot;
          data-delay&#x3D;{900}
        &gt;
          &lt;span&gt;
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mr-2&quot;
            &gt;
              Explore Now
            &lt;&#x2F;a&gt;
          &lt;&#x2F;span&gt;
          &lt;span&gt;
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-lg btn-outline-primary !rounded-[50rem]&quot;
            &gt;
              Free Trial
            &lt;&#x2F;a&gt;
          &lt;&#x2F;span&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;column *&#x2F;}
    &lt;&#x2F;div&gt;
  );
}`}
        />

        <section id="snippet-3" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo3`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1124"
                      src="/assets/img/docs/hero3.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`
import ModalVideo from &quot;@&#x2F;components&#x2F;common&#x2F;ModalVideo&quot;;


import TypeWriter from &quot;@&#x2F;components&#x2F;common&#x2F;TypeWriter&quot;;
import { useState } from &quot;react&quot;;
export default function Hero() {
  const [isOpen, setIsOpen] &#x3D; useState(false);
  return (
    &lt;&gt;
      &lt;section className&#x3D;&quot;wrapper bg-[#262b32] opacity-100 angled lower-start relative border-0 before:content-[&#39;&#39;] before:block before:absolute before:z-0 before:border-y-transparent before:border-[#262b32] before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:content-[&#39;&#39;] after:block after:absolute after:z-0 after:border-l-[100vw] after:border-r-transparent after:border-b-[4rem] after:border-y-transparent after:border-[#262b32] after:border-0 after:border-solid after:right-0&quot;&gt;
        &lt;div className&#x3D;&quot;container pt-7 xl:pt-12 lg:pt-12 md:pt-12 pb-8&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-0 !mt-[-50px] items-center&quot;&gt;
            &lt;div
              className&#x3D;&quot;lg:w-6&#x2F;12 xl:w-6&#x2F;12 w-full flex-[0_0_auto] max-w-full px-0 !mt-[50px]&quot;
              data-cues&#x3D;&quot;slideInDown&quot;
              data-group&#x3D;&quot;page-title&quot;
              data-delay&#x3D;{600}
            &gt;
              &lt;h1 className&#x3D;&quot;!text-[calc(1.375rem_+_1.5vw)] font-bold !leading-[1.15] xl:!text-[2.5rem] !text-white !mb-4&quot;&gt;
                Sandbox focuses on &lt;br &#x2F;&gt;
                &lt;span
                  className&#x3D;&quot;typer !text-[#54a8c7] whitespace-nowrap&quot;
                  data-delay&#x3D;{100}
                  data-words&#x3D;&quot;&quot;
                &gt;
                  &lt;TypeWriter
                    strings&#x3D;{[
                      &quot;customer satisfaction&quot;,
                      &quot;business needs&quot;,
                      &quot;creative ideas&quot;,
                    ]}
                  &#x2F;&gt;
                &lt;&#x2F;span&gt;
                &lt;span className&#x3D;&quot;cursor !text-[#54a8c7]&quot; data-owner&#x3D;&quot;typer&quot; &#x2F;&gt;
              &lt;&#x2F;h1&gt;
              &lt;p className&#x3D;&quot;lead !text-[1.2rem] !leading-[1.5] !text-white !mb-7 md:!pr-32 xl:!pr-0 lg:!pr-0 xxl:!pr-20&quot;&gt;
                We carefully consider our solutions to support each and every
                stage of your growth.
              &lt;&#x2F;p&gt;
              &lt;div&gt;
                &lt;a className&#x3D;&quot;btn btn-lg btn-aqua !text-white !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] active:!text-[#343f52] active:bg-[#54a8c7] active:border-[#54a8c7] disabled:!text-[#343f52] disabled:bg-[#54a8c7] disabled:border-[#54a8c7] rounded&quot;&gt;
                  Get Started
                &lt;&#x2F;a&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
            &lt;div
              className&#x3D;&quot;lg:w-5&#x2F;12 xl:w-5&#x2F;12 w-full flex-[0_0_auto] max-w-full px-0 !mt-[50px] lg:!ml-[8.33333333%] xl:!ml-[8.33333333%] !mb-[-8rem] relative z-[3]&quot;
              data-cues&#x3D;&quot;slideInDown&quot;
            &gt;
              &lt;div className&#x3D;&quot;!relative&quot;&gt;
                &lt;a
                  className&#x3D;&quot;btn btn-circle btn-aqua !text-white !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] active:!text-[#343f52] active:bg-[#54a8c7] active:border-[#54a8c7] disabled:!text-[#343f52] disabled:bg-[#54a8c7] disabled:border-[#54a8c7] btn-play ripple !mx-auto !mb-6 !absolute !text-[calc(1.355rem_+_1.26vw)] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] before:!bg-[#54a8c7] after:!bg-[#54a8c7] before:content-[&#39;&#39;] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:content-[&#39;&#39;] after:block after:absolute after:z-[-1] after:rounded-[50%] after:inset-0 after:[animation-delay:.5s]&quot;
                  style&#x3D;{{
                    top: &quot;50%&quot;,
                    left: &quot;50%&quot;,
                    transform: &quot;translate(-50%, -50%)&quot;,
                    zIndex: 3,
                  }}
                  onClick&#x3D;{() &#x3D;&gt; setIsOpen(true)}
                &gt;
                  &lt;i className&#x3D;&quot;icn-caret-right !ml-[0.15rem] !relative z-[2] before:content-[&#39;\e900&#39;] !text-[calc(1.355rem_+_1.26vw)]&quot; &#x2F;&gt;
                &lt;&#x2F;a&gt;
                &lt;figure className&#x3D;&quot;!rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;!rounded-[.4rem]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about13@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about13.jpg&quot;
                    width&#x3D;{590}
                    height&#x3D;{650}
                  &#x2F;&gt;
                &lt;&#x2F;figure&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;div *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;section&gt;{&quot; &quot;}
      &lt;ModalVideo
        isOpen&#x3D;{isOpen}
        setIsOpen&#x3D;{setIsOpen}
        src&#x3D;{&quot;&#x2F;assets&#x2F;media&#x2F;movie.mp4&quot;}
      &#x2F;&gt;{&quot; &quot;}
    &lt;&#x2F;&gt;
  );
}`}
        />

        <section id="snippet-4" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo4`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1186"
                      src="/assets/img/docs/hero4.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff] !relative min-h-[70vh] xl:!flex lg:!flex items-center z-[1]&quot;&gt;
      &lt;div
        className&#x3D;&quot;rounded-4-lg-start xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] max-w-full xl:!order-2 xl:!absolute top-0 lg:!order-2 lg:!absolute !right-0 image-wrapper bg-image bg-cover !h-full min-h-[50vh] bg-[center_center] bg-no-repeat !bg-scroll z-0 lg:rounded-tl-[0.8rem] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[0.8rem] xl:rounded-tl-[0.8rem] xl:rounded-tr-none xl:rounded-br-none xl:rounded-bl-[0.8rem]&quot;
        style&#x3D;{{
          backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about16.jpg)&quot;,
        }}
      &#x2F;&gt;
      {&#x2F;*&#x2F;column *&#x2F;}
      &lt;div className&#x3D;&quot;container&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
            &lt;div
              className&#x3D;&quot;!mt-10 md:!mt-12 xl:!mt-[-2.5rem] lg:!mt-[-2.5rem] px-10 md:!px-12 xl:!pl-0 lg:!pl-0 xl:!pr-16 lg:!pr-16 text-center lg:text-left xl:text-left&quot;
              data-cues&#x3D;&quot;slideInDown&quot;
              data-group&#x3D;&quot;page-title&quot;
              data-delay&#x3D;{600}
            &gt;
              &lt;h1 className&#x3D;&quot;!text-[calc(1.385rem_+_1.62vw)] !leading-[1.1] font-DMSerif !tracking-normal !font-normal xl:!text-[2.6rem] !mb-5&quot;&gt;
                Just sit &amp;amp; relax while we take care of your business needs.
              &lt;&#x2F;h1&gt;
              &lt;p className&#x3D;&quot;lead text-[1.25rem] leading-normal !mb-7 xl:!pr-[2.5rem] lg:!pr-[2.5rem] md:!pr-[2.5rem]&quot;&gt;
                We make your spending stress-free for you to have the perfect
                control.
              &lt;&#x2F;p&gt;
              &lt;div
                className&#x3D;&quot;flex justify-center lg:!justify-start xl:!justify-start&quot;
                data-cues&#x3D;&quot;slideInDown&quot;
                data-group&#x3D;&quot;page-title-buttons&quot;
                data-delay&#x3D;{900}
              &gt;
                &lt;span&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-lg btn-violet !text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:!border-[#a07cc5] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5] !rounded-[50rem] !mr-2&quot;
                  &gt;
                    Explore Now
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;span&gt;
                &lt;span&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-lg btn-outline-violet !rounded-[50rem] !text-[#a07cc5] !border-[#a07cc5] hover:!bg-[#a07cc5] hover:!text-white&quot;
                  &gt;
                    Contact Us
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;span&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;div *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-5" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo5`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1650"
                      src="/assets/img/docs/hero5.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;&gt;
      &lt;section className&#x3D;&quot;wrapper !bg-[#edf2fc]&quot;&gt;
        &lt;div className&#x3D;&quot;container pt-10 pb-20 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40 !text-center&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
            &lt;div
              className&#x3D;&quot;md:w-10&#x2F;12 lg:w-8&#x2F;12 xl:w-8&#x2F;12 xxl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-16&quot;
              data-cues&#x3D;&quot;slideInDown&quot;
              data-group&#x3D;&quot;page-title&quot;
            &gt;
              &lt;h1 className&#x3D;&quot;!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-4&quot;&gt;
                Staying on top of your bills never been this easy
              &lt;&#x2F;h1&gt;
              &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] xl:!px-14 xxl:!px-6 !mb-7&quot;&gt;
                Easily achieve your saving goals. Have all your recurring and
                one time expenses and incomes in one place.
              &lt;&#x2F;p&gt;
              &lt;div
                className&#x3D;&quot;flex justify-center&quot;
                data-cues&#x3D;&quot;slideInDown&quot;
                data-group&#x3D;&quot;page-title-buttons&quot;
                data-delay&#x3D;{600}
              &gt;
                &lt;span&gt;
                  &lt;a className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded mx-1&quot;&gt;
                    Get Started
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;span&gt;
                &lt;span&gt;
                  &lt;a className&#x3D;&quot;btn btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] rounded mx-1&quot;&gt;
                    Free Trial
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;span&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;section&gt;
      {&#x2F;* &#x2F;section *&#x2F;}
    &lt;&#x2F;&gt;
  );
}`}
        />

        <section id="snippet-6" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo6`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1382"
                      src="/assets/img/docs/hero6.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#eff7fa]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-5 pb-20 lg:py-28 xl:py-36 xl:!pb-[10rem] !relative&quot;&gt;
        &lt;img
          className&#x3D;&quot;xl:!absolute lg:!absolute max-lg:!left-0 w-full lg:w-10&#x2F;12 xl:w-11&#x2F;12 xxl:w-10&#x2F;12 flex-[0_0_auto] max-w-full lg:!px-5 xl:!px-0 !ml-[-1.25rem] sm:!ml-[-2rem] md:!ml-[-2.5rem] lg:!ml-0 xl:!ml-0 md:!mb-4 lg:!mb-0&quot;
          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices@2x.png 2x&quot;
          data-cue&#x3D;&quot;fadeIn&quot;
          alt&#x3D;&quot;image&quot;
          style&#x3D;{{ top: &quot;-1%&quot;, left: &quot;-21%&quot; }}
          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices.png&quot;
          width&#x3D;{1100}
          height&#x3D;{900}
        &#x2F;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-0 items-center&quot;&gt;
          &lt;div
            className&#x3D;&quot;md:w-10&#x2F;12 lg:w-5&#x2F;12 xl:w-5&#x2F;12 flex-[0_0_auto] max-w-full md:!ml-[8.33333333%] lg:!ml-[58.33333333%] xxl:!ml-[50%] xxl:!pl-14 xl:!mt-[-2.25rem] lg:!mt-[-2.25rem] md:!mt-[-2.25rem] text-center lg:text-left xl:text-left&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;page-title&quot;
            data-delay&#x3D;{600}
          &gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[2.3rem] !text-[calc(1.355rem_+_1.26vw)] !leading-[1.2] font-bold !text-[#343f52] !tracking-[-0.01rem] !mb-4 sm:mx-[-0.5rem] md:mx-0&quot;&gt;
              Get all of your steps, exercise, sleep and meds in one place.
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.1rem] !leading-[1.55] font-medium !mb-7 md:!px-10 lg:!px-0&quot;&gt;
              Sandbox is now available to download from both the App Store and
              Google Play Store.
            &lt;&#x2F;p&gt;
            &lt;div
              className&#x3D;&quot;flex justify-center lg:!justify-start xl:!justify-start&quot;
              data-cues&#x3D;&quot;slideInDown&quot;
              data-group&#x3D;&quot;page-title-buttons&quot;
              data-delay&#x3D;{900}
            &gt;
              &lt;span&gt;
                &lt;a className&#x3D;&quot;!text-[.85rem] btn btn-aqua !text-white !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] focus:text-white active:text-white active:bg-[#54a8c7] active:border-[#54a8c7] disabled:text-white disabled:bg-[#54a8c7] disabled:border-[#54a8c7] btn-icon btn-icon-start rounded !mr-2&quot;&gt;
                  &lt;i className&#x3D;&quot;uil uil-apple !mr-[.3rem] before:content-[&#39;\e938&#39;]&quot; &#x2F;&gt;
                  App Store
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
              &lt;span&gt;
                &lt;a className&#x3D;&quot;!text-[.85rem] btn btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] btn-icon btn-icon-start rounded&quot;&gt;
                  &lt;i className&#x3D;&quot;uil uil-google-play !mr-[.3rem] before:content-[&#39;\eb4f&#39;]&quot; &#x2F;&gt;
                  Google Play
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-7" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo7`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1582"
                      src="/assets/img/docs/hero7.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper bg-gradient-purple&quot;&gt;
      &lt;div className&#x3D;&quot;container py-[4.5rem] xl:pt-20 lg:pt-20 md:pt-20 xl:pb-32 lg:pb-32 md:pb-32&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
          &lt;div
            className&#x3D;&quot;xl:w-9&#x2F;12 lg:w-9&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;
            data-cues&#x3D;&quot;zoomIn&quot;
            data-group&#x3D;&quot;welcome&quot;
            data-interval&#x3D;{-200}
          &gt;
            &lt;h2 className&#x3D;&quot;xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] !leading-[1.15] font-bold !mb-4&quot;&gt;
              Creative. Smart. Awesome.
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.2rem] leading-normal md:!px-5 xl:!px-20 xxl:!px-10 !mb-7&quot;&gt;
              We are an award winning web &amp;amp; mobile design agency that
              strongly believes in the power of creative ideas.
            &lt;&#x2F;p&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;div
          className&#x3D;&quot;flex justify-center&quot;
          data-cues&#x3D;&quot;slideInDown&quot;
          data-group&#x3D;&quot;join&quot;
          data-delay&#x3D;{900}
        &gt;
          &lt;span&gt;
            &lt;a className&#x3D;&quot;btn btn-lg btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] mx-1&quot;&gt;
              See Projects
            &lt;&#x2F;a&gt;
          &lt;&#x2F;span&gt;
          &lt;span&gt;
            &lt;a className&#x3D;&quot;btn btn-lg btn-outline-purple !text-[#747ed1] bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] focus:shadow-[rgba(116,126,209,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:!text-[#747ed1] disabled:bg-transparent disabled:border-[#747ed1] !rounded-[50rem] mx-1&quot;&gt;
              Contact Us
            &lt;&#x2F;a&gt;
          &lt;&#x2F;span&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;div *&#x2F;}
        &lt;div
          className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[3.5rem]&quot;
          data-cue&#x3D;&quot;fadeIn&quot;
          data-delay&#x3D;{1600}
        &gt;
          &lt;div className&#x3D;&quot;xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;max-w-full h-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i12@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i12.png&quot;
                width&#x3D;{800}
                height&#x3D;{573}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-8" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo8`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1186"
                      src="/assets/img/docs/hero8.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper bg-gradient-purple&quot;&gt;
      &lt;div className&#x3D;&quot;container py-[4.5rem] xl:pt-20 lg:pt-20 md:pt-20 xl:pb-32 lg:pb-32 md:pb-32&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
          &lt;div
            className&#x3D;&quot;xl:w-9&#x2F;12 lg:w-9&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;
            data-cues&#x3D;&quot;zoomIn&quot;
            data-group&#x3D;&quot;welcome&quot;
            data-interval&#x3D;{-200}
          &gt;
            &lt;h2 className&#x3D;&quot;xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] !leading-[1.15] font-bold !mb-4&quot;&gt;
              Creative. Smart. Awesome.
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.2rem] leading-normal md:!px-5 xl:!px-20 xxl:!px-10 !mb-7&quot;&gt;
              We are an award winning web &amp;amp; mobile design agency that
              strongly believes in the power of creative ideas.
            &lt;&#x2F;p&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;div
          className&#x3D;&quot;flex justify-center&quot;
          data-cues&#x3D;&quot;slideInDown&quot;
          data-group&#x3D;&quot;join&quot;
          data-delay&#x3D;{900}
        &gt;
          &lt;span&gt;
            &lt;a className&#x3D;&quot;btn btn-lg btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] mx-1&quot;&gt;
              See Projects
            &lt;&#x2F;a&gt;
          &lt;&#x2F;span&gt;
          &lt;span&gt;
            &lt;a className&#x3D;&quot;btn btn-lg btn-outline-purple !text-[#747ed1] bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] focus:shadow-[rgba(116,126,209,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:!text-[#747ed1] disabled:bg-transparent disabled:border-[#747ed1] !rounded-[50rem] mx-1&quot;&gt;
              Contact Us
            &lt;&#x2F;a&gt;
          &lt;&#x2F;span&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;div *&#x2F;}
        &lt;div
          className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[3.5rem]&quot;
          data-cue&#x3D;&quot;fadeIn&quot;
          data-delay&#x3D;{1600}
        &gt;
          &lt;div className&#x3D;&quot;xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;max-w-full h-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i12@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i12.png&quot;
                width&#x3D;{800}
                height&#x3D;{573}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-9" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo9`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1196"
                      src="/assets/img/docs/hero9.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

import TypeWriter from &quot;@&#x2F;components&#x2F;common&#x2F;TypeWriter&quot;;
export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#edf2fc]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-10 pb-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-28 lg:pb-28 md:pb-28&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
          &lt;div
            className&#x3D;&quot;md:w-10&#x2F;12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-5&#x2F;12 xl:!ml-0 xl:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full lg:!mt-[-.5rem] xl:!mt-[-.5rem] text-center lg:text-left xl:text-left order-2 lg:!order-none xl:!order-none&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;page-title&quot;
            data-delay&#x3D;{600}
          &gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[2.6rem] !text-[calc(1.385rem_+_1.62vw)] !leading-[1.1] !font-DMSerif !font-normal !tracking-normal [word-spacing:normal!important] !mb-5 md:mx-10 lg:mx-0&quot;&gt;
              Sandbox is effortless and powerful with &lt;br &#x2F;&gt;
              &lt;span
                className&#x3D;&quot;typer !text-[#3f78e0] whitespace-nowrap&quot;
                data-delay&#x3D;{100}
              &#x2F;&gt;
              &lt;span className&#x3D;&quot;cursor !text-[#3f78e0]&quot; data-owner&#x3D;&quot;typer&quot;&gt;
                &lt;TypeWriter
                  strings&#x3D;{[
                    &quot;easy usage&quot;,
                    &quot;fast transactions&quot;,
                    &quot;secure payments&quot;,
                  ]}
                &#x2F;&gt;
              &lt;&#x2F;span&gt;
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium !mb-7&quot;&gt;
              Achieve your saving goals. Have all your recurring and one time
              expenses and incomes in one place.
            &lt;&#x2F;p&gt;
            &lt;div
              className&#x3D;&quot;flex justify-center lg:!justify-start xl:!justify-start&quot;
              data-cues&#x3D;&quot;slideInDown&quot;
              data-group&#x3D;&quot;page-title-buttons&quot;
              data-delay&#x3D;{900}
            &gt;
              &lt;span&gt;
                &lt;a className&#x3D;&quot;btn btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded !mr-2&quot;&gt;
                  Get Started
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
              &lt;span&gt;
                &lt;a className&#x3D;&quot;btn btn-lg btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] rounded&quot;&gt;
                  Free Trial
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
              &lt;div
                className&#x3D;&quot;w-3&#x2F;12 !ml-[8.33333333%] lg:!ml-0 lg:w-4&#x2F;12 xl:!ml-0 xl:w-4&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full flex flex-col&quot;
                data-cues&#x3D;&quot;zoomIn&quot;
                data-group&#x3D;&quot;col-start&quot;
                data-delay&#x3D;{300}
              &gt;
                &lt;div className&#x3D;&quot;ml-auto !mt-auto&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;!max-w-full h-auto rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa20@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa20.jpg&quot;
                    width&#x3D;{125}
                    height&#x3D;{90}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;ml-auto !mt-5 !mb-10&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;!max-w-full h-auto rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa18@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa18.jpg&quot;
                    width&#x3D;{150}
                    height&#x3D;{166}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
              &lt;div
                className&#x3D;&quot;w-4&#x2F;12 lg:w-5&#x2F;12 xl:w-5&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full&quot;
                data-cue&#x3D;&quot;zoomIn&quot;
              &gt;
                &lt;div&gt;
                  &lt;img
                    className&#x3D;&quot;w-full max-w-full h-auto rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa16@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa16.jpg&quot;
                    width&#x3D;{285}
                    height&#x3D;{546}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
              &lt;div
                className&#x3D;&quot;w-3&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full flex flex-col&quot;
                data-cues&#x3D;&quot;zoomIn&quot;
                data-group&#x3D;&quot;col-end&quot;
                data-delay&#x3D;{300}
              &gt;
                &lt;div className&#x3D;&quot;!mt-auto&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;!max-w-full h-auto rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa21@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa21.jpg&quot;
                    width&#x3D;{125}
                    height&#x3D;{40}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;!mt-5&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;!max-w-full h-auto rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa19@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa19.jpg&quot;
                    width&#x3D;{150}
                    height&#x3D;{147}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;!mt-5 !mb-10&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;!max-w-full h-auto rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa17@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa17.jpg&quot;
                    width&#x3D;{175}
                    height&#x3D;{102}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-10" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo10`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1754"
                      src="/assets/img/docs/hero10.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-12 xl:pt-16 lg:pt-16 md:pt-16 pb-12 xl:pb-[15rem] lg:pb-[15rem] md:pb-[9rem] !text-center&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div
            className&#x3D;&quot;lg:w-8&#x2F;12 xl:w-7&#x2F;12 xxl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;page-title&quot;
          &gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-[1.15] font-bold !mb-4 md:!px-20 lg:!px-0&quot;&gt;
              We bring solutions to make life
              &lt;span className&#x3D;&quot;!relative z-[1] after:content-[&#39;&#39;] after:absolute after:z-[-1] after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2&#x2F;4 after:left-2&#x2F;4 underline-3 style-3 primary&quot;&gt;
                easier
              &lt;&#x2F;span&gt;
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.2rem] leading-normal !mb-[1.75rem] md:mx-[4rem] lg:mx-[2.5rem] xl:mx-[2.5rem]&quot;&gt;
              We are a creative company that focuses on long term relationships
              with customers.
            &lt;&#x2F;p&gt;
            &lt;div&gt;
              &lt;a className&#x3D;&quot;btn btn-lg btn-orange !text-white !bg-[#f78b77] border-[#f78b77] hover:text-white hover:bg-[#f78b77] hover:!border-[#f78b77] active:text-white active:bg-[#f78b77] active:border-[#f78b77] disabled:text-white disabled:bg-[#f78b77] disabled:border-[#f78b77] !text-[.85rem] rounded !mb-5&quot;&gt;
                Read More
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-11" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo11`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1154"
                      src="/assets/img/docs/hero11.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`
import ModalVideo from &quot;@&#x2F;components&#x2F;common&#x2F;ModalVideo&quot;;

import { useState } from &quot;react&quot;;
import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

const sliderItems &#x3D; [
  {
    type: &quot;image&quot;,
    imageSrc: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about21.jpg&quot;,
    imageSrcSet: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about21@2x.jpg 2x&quot;,
    width: 575,
    height: 550,
  },
  {
    type: &quot;video&quot;,
    imageSrc: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about22.jpg&quot;,
    imageSrcSet: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about22@2x.jpg 2x&quot;,
    videoUrl: &quot;&#x2F;assets&#x2F;media&#x2F;movie.mp4&quot;,
    width: 575,
    height: 550,
  },
  {
    type: &quot;image&quot;,
    imageSrc: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about23.jpg&quot;,
    imageSrcSet: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about23@2x.jpg 2x&quot;,
    width: 575,
    height: 550,
  },
];

export default function Hero() {
  const [isOpen, setIsOpen] &#x3D; useState(false);
  return (
    &lt;&gt;
      &lt;section
        className&#x3D;&quot;wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-content !text-white !bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]&quot;
        style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg4.jpg)&quot; }}
      &gt;
        &lt;div
          className&#x3D;&quot;container pt-32 pb-24&quot;
          style&#x3D;{{ zIndex: 5, position: &quot;relative&quot; }}
        &gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-0 !mt-[-70px] items-center&quot;&gt;
            &lt;div
              className&#x3D;&quot;md:w-10&#x2F;12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-6&#x2F;12 xl:!ml-0 xl:w-6&#x2F;12 w-full flex-[0_0_auto] max-w-full content text-center lg:text-left xl:text-left !mt-[70px]&quot;
              data-cues&#x3D;&quot;slideInDown&quot;
              data-group&#x3D;&quot;page-title&quot;
              data-delay&#x3D;{600}
            &gt;
              &lt;h1 className&#x3D;&quot;xl:!text-[2.2rem] !text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.25] !mb-5 !text-white&quot;&gt;
                Crafting project specific solutions with expertise.
              &lt;&#x2F;h1&gt;
              &lt;p className&#x3D;&quot;lead text-[1.05rem] !leading-[1.5] font-medium !mb-7 xl:!pr-10&quot;&gt;
                We’re a creative company that focuses on establishing long-term
                relationships with customers.
              &lt;&#x2F;p&gt;
              &lt;div
                className&#x3D;&quot;flex justify-center lg:!justify-start xl:!justify-start&quot;
                data-cues&#x3D;&quot;slideInDown&quot;
                data-group&#x3D;&quot;page-title-buttons&quot;
                data-delay&#x3D;{900}
              &gt;
                &lt;span&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-lg btn-white !rounded-[50rem] !mr-2&quot;
                  &gt;
                    Explore Now
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;span&gt;
                &lt;span&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)] active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]&quot;
                  &gt;
                    Contact Us
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;span&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;column *&#x2F;}
            &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] !mt-[70px]&quot;&gt;
              &lt;div className&#x3D;&quot;swiper-container dots-over !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] relative z-10&quot;&gt;
                &lt;Swiper
                  className&#x3D;&quot;swiper&quot;
                  spaceBetween&#x3D;{5}
                  modules&#x3D;{[Navigation, Pagination]}
                  pagination&#x3D;{{
                    clickable: true,
                    el: &quot;.spd4&quot;,
                  }}
                  navigation&#x3D;{{
                    prevEl: &quot;.snbp1&quot;,
                    nextEl: &quot;.snbn1&quot;,
                  }}
                &gt;
                  {sliderItems.map((item, index) &#x3D;&gt; (
                    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot; key&#x3D;{index}&gt;
                      {item.type &#x3D;&#x3D;&#x3D; &quot;image&quot; ? (
                        &lt;img
                          srcSet&#x3D;{item.imageSrcSet}
                          className&#x3D;&quot;rounded-[.4rem] w-full h-auto&quot;
                          alt&#x3D;&quot;image&quot;
                          src&#x3D;{item.imageSrc}
                          width&#x3D;{item.width}
                          height&#x3D;{item.height}
                        &#x2F;&gt;
                      ) : (
                        &lt;&gt;
                          &lt;a
                            className&#x3D;&quot;btn btn-circle btn-white btn-play ripple !mx-auto !mb-5 !absolute z-[2] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !text-[calc(1.355rem_+_1.26vw)] hover:translate-y-0 inline-flex items-center justify-center leading-none !p-0 !rounded-[100%] before:content-[&#39;&#39;] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#ffffff] after:content-[&#39;&#39;] after:block after:absolute after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#ffffff]&quot;
                            style&#x3D;{{
                              top: &quot;50%&quot;,
                              left: &quot;50%&quot;,
                              transform: &quot;translate(-50%, -50%)&quot;,
                              zIndex: 3,
                            }}
                            onClick&#x3D;{() &#x3D;&gt; setIsOpen(true)}
                            data-gallery&#x3D;&quot;hero&quot;
                          &gt;
                            &lt;i className&#x3D;&quot;icn-caret-right&quot; &#x2F;&gt;
                          &lt;&#x2F;a&gt;
                          &lt;img
                            srcSet&#x3D;{item.imageSrcSet}
                            className&#x3D;&quot;rounded-[.4rem] w-full h-auto&quot;
                            alt&#x3D;&quot;image&quot;
                            src&#x3D;{item.imageSrc}
                            width&#x3D;{item.width}
                            height&#x3D;{item.height}
                          &#x2F;&gt;
                        &lt;&#x2F;&gt;
                      )}
                    &lt;&#x2F;SwiperSlide&gt;
                  ))}
                  {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
                &lt;&#x2F;Swiper&gt;
                &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                  &lt;div className&#x3D;&quot;swiper-navigation&quot;&gt;
                    &lt;div className&#x3D;&quot;swiper-button swiper-button-prev snbp1&quot;&gt;&lt;&#x2F;div&gt;
                    &lt;div className&#x3D;&quot;swiper-button swiper-button-next snbn1&quot;&gt;&lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div className&#x3D;&quot;swiper-pagination spd4&quot;&gt;&lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.swiper *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.swiper-container *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;section&gt;
      &lt;ModalVideo
        isOpen&#x3D;{isOpen}
        setIsOpen&#x3D;{setIsOpen}
        src&#x3D;{&quot;&#x2F;assets&#x2F;media&#x2F;movie.mp4&quot;}
      &#x2F;&gt;
    &lt;&#x2F;&gt;
  );
}`}
        />

        <section id="snippet-12" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo12`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1566"
                      src="/assets/img/docs/hero12.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#fef4f2]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-10 pb-20 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-5 items-center&quot;&gt;
          &lt;div
            className&#x3D;&quot;md:w-10&#x2F;12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-5&#x2F;12 xl:!ml-0 xl:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full text-center lg:text-left xl:text-left order-2 lg:!order-none xl:!order-none&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;page-title&quot;
            data-delay&#x3D;{600}
          &gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[2.4rem] !text-[calc(1.375rem_+_1.5vw)] font-bold !leading-[1.2] !mb-5 md:mx-[-1.25rem] lg:mx-0 xl:mx-0&quot;&gt;
              Creative. Smart. Awesome.
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium !mb-7&quot;&gt;
              We specialize in web, mobile and identity design. We love to turn
              ideas into beautiful things.
            &lt;&#x2F;p&gt;
            &lt;div
              className&#x3D;&quot;flex justify-center lg:!justify-start xl:!justify-start&quot;
              data-cues&#x3D;&quot;slideInDown&quot;
              data-group&#x3D;&quot;page-title-buttons&quot;
              data-delay&#x3D;{900}
            &gt;
              &lt;span&gt;
                &lt;a className&#x3D;&quot;btn btn-orange !text-white !bg-[#f78b77] border-[#f78b77] hover:text-white hover:bg-[#f78b77] hover:!border-[#f78b77] active:text-white active:bg-[#f78b77] active:border-[#f78b77] disabled:text-white disabled:bg-[#f78b77] disabled:border-[#f78b77] rounded !mr-2&quot;&gt;
                  See Projects
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
              &lt;span&gt;
                &lt;a className&#x3D;&quot;btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] rounded&quot;&gt;
                  Learn More
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div
            className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full&quot;
            data-cue&#x3D;&quot;slideInDown&quot;
          &gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;w-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i6@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i6.png&quot;
                width&#x3D;{800}
                height&#x3D;{499}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-13" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo13`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1906"
                      src="/assets/img/docs/hero13.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`
import ModalVideo from &quot;@&#x2F;components&#x2F;common&#x2F;ModalVideo&quot;;
import React, { useState } from &quot;react&quot;;

export default function Hero() {
  const [isOpen, setIsOpen] &#x3D; useState(false);
  return (
    &lt;&gt;
      &lt;section
        className&#x3D;&quot;wrapper image-wrapper bg-image bg-overlay bg-overlay-300 !text-white bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.3)]&quot;
        style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg2.jpg)&quot; }}
      &gt;
        &lt;div className&#x3D;&quot;container pt-28 pb-36 xl:pt-36 lg:pt-36 md:pt-36 xl:pb-40 lg:pb-40 md:pb-40 !text-center&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mb-12&quot;&gt;
            &lt;div
              className&#x3D;&quot;md:w-9&#x2F;12 lg:w-7&#x2F;12 xl:w-7&#x2F;12 xxl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;
              data-cues&#x3D;&quot;zoomIn&quot;
              data-group&#x3D;&quot;page-title&quot;
              data-interval&#x3D;{-200}
            &gt;
              &lt;h2 className&#x3D;&quot;h6 uppercase !tracking-[0.05rem] !text-white !mb-5&quot;&gt;
                Hello! This is Sandbox
              &lt;&#x2F;h2&gt;
              &lt;h3 className&#x3D;&quot;xl:!text-[2.4rem] !text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] !text-white !mb-7&quot;&gt;
                We bring rapid solutions for your business
              &lt;&#x2F;h3&gt;
              &lt;a
                className&#x3D;&quot;btn btn-circle btn-white btn-play ripple !mx-auto !mb-5 !relative z-[2] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !text-[calc(1.355rem_+_1.26vw)] hover:translate-y-0 inline-flex items-center justify-center leading-none p-0 !rounded-[100%] before:content-[&#39;&#39;] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#ffffff] after:content-[&#39;&#39;] after:block after:absolute after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#ffffff]&quot;
                onClick&#x3D;{() &#x3D;&gt; setIsOpen(true)}
              &gt;
                &lt;i className&#x3D;&quot;icn-caret-right !ml-[0.15rem] !relative z-[2] before:content-[&#39;\e900&#39;] !text-[calc(1.355rem_+_1.26vw)]&quot; &#x2F;&gt;
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;section&gt;

      &lt;ModalVideo
        isOpen&#x3D;{isOpen}
        setIsOpen&#x3D;{setIsOpen}
        src&#x3D;{&quot;&#x2F;assets&#x2F;media&#x2F;movie.mp4&quot;}
      &#x2F;&gt;
    &lt;&#x2F;&gt;
  );
}`}
        />

        <section id="snippet-14" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo14`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1678"
                      src="/assets/img/docs/hero14.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#f6f3f9]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-0 lg:pb-0 md:pb-0&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-35px] md:mx-[-20px] !mt-[-15px] xl:!mt-0 lg:!mt-0 !mb-16&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[35px] md:!px-[20px] !mt-[15px] xl:!mt-0 lg:!mt-0 max-w-full&quot;&gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[3.3rem] !text-[calc(1.455rem_+_2.46vw)] !leading-[1.05] font-bold !mb-0&quot;&gt;
              We bring rapid solutions for your business.
            &lt;&#x2F;h1&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[35px] md:!px-[20px] !mt-[15px] xl:!mt-0 lg:!mt-0 max-w-full&quot;&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.25rem] !leading-[1.6] font-medium !my-3&quot;&gt;
              We are an award winning branding design agency that strongly
              believes in the power of creative ideas.
            &lt;&#x2F;p&gt;
            &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;more hover !text-[#a07cc5]&quot;&gt;
              Learn More
            &lt;&#x2F;a&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;!relative&quot;&gt;
          &lt;div
            className&#x3D;&quot;shape bg-dot violet rellax !w-[7rem] !h-[12.5rem] !absolute z-[1] opacity-50&quot;
            data-rellax-speed&#x3D;{1}
            style&#x3D;{{ top: &quot;-2.5rem&quot;, right: &quot;-2.7rem&quot; }}
          &#x2F;&gt;
          &lt;figure className&#x3D;&quot;rounded-[.4rem] xl:!mb-[-10rem] lg:!mb-[-10rem] md:!mb-[-10rem]&quot;&gt;
            &lt;img
              className&#x3D;&quot;rounded-[.4rem]&quot;
              srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about18@2x.jpg 2x&quot;
              alt&#x3D;&quot;image&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about18.jpg&quot;
              width&#x3D;{1200}
              height&#x3D;{650}
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-15" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo15`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1210"
                      src="/assets/img/docs/hero15.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`
import ModalVideo from &quot;@&#x2F;components&#x2F;common&#x2F;ModalVideo&quot;;
import { useState } from &quot;react&quot;;
import { Autoplay, Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Hero() {
  const [isOpen, setIsOpen] &#x3D; useState(false);
  return (
    &lt;&gt;
      &lt;div className&#x3D;&quot;swiper-container swiper-hero dots-over relative z-10&quot;&gt;
        &lt;Swiper
          className&#x3D;&quot;swiper&quot;
          modules&#x3D;{[Navigation, Pagination, Autoplay]}
          pagination&#x3D;{{
            clickable: true,
            el: &quot;.spd7&quot;,
          }}
          spaceBetween&#x3D;{0}
          speed&#x3D;{3000}
          autoplay&#x3D;{{
            delay: 3000,
          }}
          navigation&#x3D;{{
            prevEl: &quot;.snbp7&quot;,
            nextEl: &quot;.snbn7&quot;,
          }}
        &gt;
          &lt;SwiperSlide
            className&#x3D;&quot;swiper-slide bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 bg-image !bg-cover !bg-[center_center] !h-[750px] before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]&quot;
            style&#x3D;{{
              backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg7.jpg)&quot;,
            }}
          &gt;
            &lt;div className&#x3D;&quot;container !h-full&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !h-full&quot;&gt;
                &lt;div className&#x3D;&quot;md:w-10&#x2F;12 md:!ml-[8.33333333%] lg:w-7&#x2F;12 lg:!ml-0 xl:w-6&#x2F;12 xxl:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full text-center lg:text-left xl:text-left justify-center self-center items-start&quot;&gt;
                  &lt;h2 className&#x3D;&quot;xl:!text-[2.8rem] !leading-[1.2] font-bold !text-[calc(1.405rem_+_1.86vw)] !mb-4 !text-white animate__animated animate__slideInDown animate__delay-1s&quot;&gt;
                    We bring solutions to make life easier.
                  &lt;&#x2F;h2&gt;
                  &lt;p className&#x3D;&quot;lead text-[1.15rem] leading-normal !mb-7 !text-white animate__animated animate__slideInRight animate__delay-2s&quot;&gt;
                    We are a creative company that focuses on long term
                    relationships with customers.
                  &lt;&#x2F;p&gt;
                  &lt;div className&#x3D;&quot;animate__animated animate__slideInUp animate__delay-3s&quot;&gt;
                    &lt;a
                      href&#x3D;&quot;#&quot;
                      className&#x3D;&quot;btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)] active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]&quot;
                    &gt;
                      Read More
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.row *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.container *&#x2F;}
          &lt;&#x2F;SwiperSlide&gt;
          {&#x2F;*&#x2F;.swiper-slide *&#x2F;}
          &lt;SwiperSlide
            className&#x3D;&quot;swiper-slide bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 bg-image !bg-cover !bg-[center_center] !h-[750px] before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]&quot;
            style&#x3D;{{
              backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg8.jpg)&quot;,
            }}
          &gt;
            &lt;div className&#x3D;&quot;container !h-full&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !h-full&quot;&gt;
                &lt;div className&#x3D;&quot;md:w-11&#x2F;12 lg:w-8&#x2F;12 xl:w-7&#x2F;12 xxl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center justify-center self-center&quot;&gt;
                  &lt;h2 className&#x3D;&quot;xl:!text-[2.8rem] !leading-[1.2] font-bold !text-[calc(1.405rem_+_1.86vw)] !mb-4 !text-white animate__animated animate__slideInDown animate__delay-1s&quot;&gt;
                    We are trusted by over a million customers.
                  &lt;&#x2F;h2&gt;
                  &lt;p className&#x3D;&quot;lead text-[1.15rem] leading-normal !mb-7 !text-white animate__animated animate__slideInRight animate__delay-2s&quot;&gt;
                    Here a few reasons why our customers choose us.
                  &lt;&#x2F;p&gt;
                  &lt;div className&#x3D;&quot;animate__animated animate__slideInUp animate__delay-3s&quot;&gt;
                    &lt;a
                      onClick&#x3D;{() &#x3D;&gt; setIsOpen(true)}
                      className&#x3D;&quot;btn btn-circle btn-white btn-play ripple !mx-auto !mb-5 !relative z-[2] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !text-[calc(1.355rem_+_1.26vw)] hover:translate-y-0 inline-flex items-center justify-center leading-none p-0 !rounded-[100%] before:content-[&#39;&#39;] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#ffffff] after:content-[&#39;&#39;] after:block after:absolute after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#ffffff]&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;icn-caret-right !ml-[0.15rem] !relative z-[2] before:content-[&#39;\e900&#39;] !text-[calc(1.355rem_+_1.26vw)]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.row *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.container *&#x2F;}
          &lt;&#x2F;SwiperSlide&gt;
          {&#x2F;*&#x2F;.swiper-slide *&#x2F;}
          &lt;SwiperSlide
            className&#x3D;&quot;swiper-slide bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 bg-image !bg-cover !bg-[center_center] !h-[750px] before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]&quot;
            style&#x3D;{{
              backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg9.jpg)&quot;,
            }}
          &gt;
            &lt;div className&#x3D;&quot;container !h-full&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !h-full&quot;&gt;
                &lt;div className&#x3D;&quot;md:w-10&#x2F;12 md:!ml-[8.33333333%] lg:w-7&#x2F;12 lg:!ml-[41.66666667%] xl:w-6&#x2F;12 xl:!ml-[50%] xxl:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xxl:!ml-[50%] text-center lg:text-left xl:text-left justify-center self-center items-start&quot;&gt;
                  &lt;h2 className&#x3D;&quot;xl:!text-[2.8rem] !leading-[1.2] font-bold !text-[calc(1.405rem_+_1.86vw)] !mb-4 !text-white animate__animated animate__slideInDown animate__delay-1s&quot;&gt;
                    Just sit and relax.
                  &lt;&#x2F;h2&gt;
                  &lt;p className&#x3D;&quot;lead text-[1.15rem] leading-normal !mb-7 !text-white animate__animated animate__slideInRight animate__delay-2s&quot;&gt;
                    We make sure your spending is stress free so that you can
                    have the perfect control.
                  &lt;&#x2F;p&gt;
                  &lt;div className&#x3D;&quot;animate__animated animate__slideInUp animate__delay-3s&quot;&gt;
                    &lt;a
                      href&#x3D;&quot;#&quot;
                      className&#x3D;&quot;btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)] active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]&quot;
                    &gt;
                      Contact Us
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.row *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.container *&#x2F;}
          &lt;&#x2F;SwiperSlide&gt;
          {&#x2F;*&#x2F;.swiper-slide *&#x2F;}

          {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
        &lt;&#x2F;Swiper&gt;
        &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
          &lt;div className&#x3D;&quot;swiper-navigation&quot;&gt;
            &lt;div className&#x3D;&quot;swiper-button swiper-button-prev snbp7&quot;&gt;&lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;swiper-button swiper-button-next snbn7&quot;&gt;&lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;swiper-pagination spd7&quot;&gt;&lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.swiper *&#x2F;}
      &lt;&#x2F;div&gt;

      &lt;ModalVideo
        isOpen&#x3D;{isOpen}
        setIsOpen&#x3D;{setIsOpen}
        src&#x3D;{&quot;&#x2F;assets&#x2F;media&#x2F;movie.mp4&quot;}
      &#x2F;&gt;
    &lt;&#x2F;&gt;
  );
}`}
        />

        <section id="snippet-16" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo16`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1135"
                      src="/assets/img/docs/hero16.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper bg-[rgba(246,247,249,1)]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-50px] xl:!mt-0 lg:!mt-0 items-center&quot;&gt;
          &lt;div
            className&#x3D;&quot;md:w-8&#x2F;12 lg:w-5&#x2F;12 xl:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full flex !relative !mx-auto&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;header&quot;
          &gt;
            &lt;div className&#x3D;&quot;img-mask mask-1&quot;&gt;
              &lt;img
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about17@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about17.jpg&quot;
                width&#x3D;{560}
                height&#x3D;{540}
              &#x2F;&gt;
            &lt;&#x2F;div&gt;
            &lt;div
              className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute&quot;
              style&#x3D;{{ bottom: &quot;10%&quot;, right: &quot;2%&quot; }}
            &gt;
              &lt;div className&#x3D;&quot;card-body py-4 px-5&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-row items-center&quot;&gt;
                  &lt;div&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 409.6 409.6&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;check.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] !text-[#d16b86] text-pink !mx-auto !mr-3&quot;
                    &gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-49.9 18.2-98.1 51.2-135.5 4.4-5 12-5.5 17-1.1s5.5 12 1.1 17c-29.1 33-45.2 75.5-45.2 119.5 0 99.6 81.1 180.7 180.7 180.7s180.7-81.1 180.7-180.7S304.4 24.1 204.8 24.1c-27.3-.1-54.2 6.1-78.7 18-6 2.9-13.2.4-16.1-5.6-2.9-6-.4-13.2 5.6-16.1C143.4 6.9 173.9-.1 204.8 0c112.9 0 204.8 91.9 204.8 204.8s-91.9 204.8-204.8 204.8z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M349.4 204.8c0 79.8-64.7 144.6-144.6 144.6S60.2 284.6 60.2 204.8 125 60.2 204.8 60.2 349.4 125 349.4 204.8z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M204.8 361.4c-86.4 0-156.6-70.2-156.6-156.6S118.4 48.2 204.8 48.2s156.6 70.2 156.6 156.6-70.2 156.6-156.6 156.6zm0-289.1c-73.1 0-132.5 59.4-132.5 132.5s59.4 132.5 132.5 132.5 132.5-59.5 132.5-132.5S277.9 72.3 204.8 72.3z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M200.9 246.7c-8.8 0-17.2-3.5-23.5-9.7L145 204.5c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l32.5 32.5c3.6 3.5 9.3 3.5 12.8 0l49.8-49.9c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17L224.4 237c-6.2 6.2-14.7 9.7-23.5 9.7z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;h3 className&#x3D;&quot;counter !mb-0 whitespace-nowrap&quot;&gt;250+&lt;&#x2F;h3&gt;
                    &lt;p className&#x3D;&quot;!text-[0.7rem] leading-normal !mb-0 whitespace-nowrap&quot;&gt;
                      Projects Done
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.card-body *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.card *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div
            className&#x3D;&quot;lg:w-6&#x2F;12 lg:!ml-[8.33333333%] xl:w-6&#x2F;12 xl:!ml-[8.33333333%] xxl:w-5&#x2F;12 flex-[0_0_auto] !px-[15px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full text-center lg:text-left xl:text-left&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;page-title&quot;
            data-delay&#x3D;{600}
          &gt;
            &lt;h1 className&#x3D;&quot;!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-5&quot;&gt;
              I&#39;m User Interface Designer &amp;amp; Developer.
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead text-[1.25rem] !leading-[1.5] !mb-7 md:!px-10 lg:!px-0&quot;&gt;
              Hello! I&#39;m Julia, a freelance user interface designer &amp;amp;
              developer based in London. I’m very passionate about the work that
              I do.
            &lt;&#x2F;p&gt;
            &lt;div
              className&#x3D;&quot;flex justify-center lg:!justify-start xl:!justify-start&quot;
              data-cues&#x3D;&quot;slideInDown&quot;
              data-group&#x3D;&quot;page-title-buttons&quot;
              data-delay&#x3D;{900}
            &gt;
              &lt;span&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-lg btn-pink !text-white !bg-[#d16b86] border-[#d16b86] hover:text-white hover:bg-[#d16b86] hover:!border-[#d16b86] active:text-white active:bg-[#d16b86] active:border-[#d16b86] disabled:text-white disabled:bg-[#d16b86] disabled:border-[#d16b86] !rounded-[50rem] !mr-2&quot;
                &gt;
                  See My Works
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
              &lt;span&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-lg btn-outline-pink !rounded-[50rem] !text-[#d16b86] !border-[#d16b86] hover:!bg-[#d16b86] hover:!text-white&quot;
                &gt;
                  Contact Me
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-17" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo17`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1458"
                      src="/assets/img/docs/hero17.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper bg-[rgba(246,247,249,1)]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-14 xl:pt-24 lg:pt-24 md:pt-24 !text-center&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div
            className&#x3D;&quot;lg:w-8&#x2F;12 xl:w-8&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;page-title&quot;
            data-delay&#x3D;{600}
          &gt;
            &lt;h2 className&#x3D;&quot;!text-[0.8rem] !tracking-[0.05rem] !leading-[1.35] uppercase !text-[#343f52] !mb-4&quot;&gt;
              Hello! This is Sandbox
            &lt;&#x2F;h2&gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[2.9rem] !text-[calc(1.415rem_+_1.98vw)] !leading-[1.2] font-bold !mb-7&quot;&gt;
              We bring rapid solutions for your business.
            &lt;&#x2F;h1&gt;
            &lt;div
              className&#x3D;&quot;flex justify-center !mb-5 xl:!mb-0 lg:!mb-0 md:!mb-0&quot;
              data-cues&#x3D;&quot;slideInDown&quot;
              data-group&#x3D;&quot;page-title-buttons&quot;
              data-delay&#x3D;{900}
            &gt;
              &lt;span&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-lg btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] !rounded-[50rem] !mr-2&quot;
                &gt;
                  Explore Now
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
              &lt;span&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-lg btn-outline-violet !rounded-[50rem] !text-[#343f52] !border-[#343f52] hover:!bg-[#343f52] hover:!text-white&quot;
                &gt;
                  Contact Us
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;figure className&#x3D;&quot;absoute&quot; style&#x3D;{{ bottom: 0, left: 0, zIndex: 2 }}&gt;
        &lt;img
          alt&#x3D;&quot;image&quot;
          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg11.jpg&quot;
          width&#x3D;{2800}
          height&#x3D;{1300}
        &#x2F;&gt;
      &lt;&#x2F;figure&gt;
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-18" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo18`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1176"
                      src="/assets/img/docs/hero18.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div className&#x3D;&quot;container-card&quot;&gt;
        &lt;div
          className&#x3D;&quot;card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 !mt-2 !mb-5 [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll relative z-0 before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.5)] xxl:!rounded-[.8rem] rounded-0&quot;
          style&#x3D;{{
            backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg22.png)&quot;,
          }}
        &gt;
          &lt;div className&#x3D;&quot;card-body py-[4.5rem] px-0&quot;&gt;
            &lt;div className&#x3D;&quot;container&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] items-center text-center lg:text-left xl:text-left&quot;&gt;
                &lt;div
                  className&#x3D;&quot;lg:w-6&#x2F;12 xl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px] max-w-full&quot;
                  data-cues&#x3D;&quot;slideInDown&quot;
                  data-group&#x3D;&quot;page-title&quot;
                  data-delay&#x3D;{900}
                &gt;
                  &lt;h1 className&#x3D;&quot;xl:!text-[2.3rem] !text-[calc(1.355rem_+_1.26vw)] font-semibold !leading-[1.2] !tracking-[normal] !mb-4 xl:!mr-5 xxl:!mr-0&quot;&gt;
                    Networking
                    &lt;span className&#x3D;&quot;text-gradient gradient-1&quot;&gt;solutions&lt;&#x2F;span&gt;
                    for worldwide communication
                  &lt;&#x2F;h1&gt;
                  &lt;p className&#x3D;&quot;lead !text-[1.15rem] !leading-[1.5] font-medium !mb-7 xxl:!pr-20&quot;&gt;
                    We&#39;re a company that focuses on establishing long-term
                    relationships with customers.
                  &lt;&#x2F;p&gt;
                  &lt;div&gt;
                    &lt;a
                      href&#x3D;&quot;#&quot;
                      className&#x3D;&quot;btn btn-lg btn-gradient gradient-1 rounded&quot;
                    &gt;
                      Explore Now
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px] max-w-full&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;max-w-full h-auto !mb-[-8rem]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;3d6@2x.png 2x&quot;
                    data-cue&#x3D;&quot;fadeIn&quot;
                    data-delay&#x3D;{300}
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;3d6.png&quot;
                    width&#x3D;{800}
                    height&#x3D;{817}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.row *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.container *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.card-body *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.card *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container-card *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-19" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo19`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1346"
                      src="/assets/img/docs/hero19.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg16.png)&quot; }}&gt;
      &lt;div className&#x3D;&quot;container pt-28 pb-36 xl:pt-32 lg:pt-32 md:pt-32 xl:pb-28 lg:pb-28 md:pb-28 !text-center&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div
            className&#x3D;&quot;lg:w-8&#x2F;12 xl:w-7&#x2F;12 xxl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;page-title&quot;
          &gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] font-semibold !leading-[1.15] !text-white !mb-4 md:!px-20 lg:!px-0 xl:!px-0&quot;&gt;
              We bring solutions to make life
              &lt;span className&#x3D;&quot;!relative z-[2] after:content-[&#39;&#39;] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-0 after:w-[110%] after:h-[0.3em] after:-translate-x-2&#x2F;4 after:left-2&#x2F;4 style-2 yellow&quot;&gt;
                easier
              &lt;&#x2F;span&gt;
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.2rem] !text-white !leading-[1.5] font-medium !mb-7 md:mx-[4rem] lg:mx-[2.5rem] xl:mx-[2.5rem]&quot;&gt;
              We are a creative company that focuses on long term relationships
              with customers.
            &lt;&#x2F;p&gt;
            &lt;div&gt;
              &lt;a className&#x3D;&quot;btn btn-white rounded !mb-10 xxl:!mb-5&quot;&gt;
                Read More
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;div className&#x3D;&quot;overflow-hidden&quot;&gt;
        &lt;div className&#x3D;&quot;divider !text-[#fefefe] mx-[-0.5rem]&quot;&gt;
          &lt;svg xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot; viewBox&#x3D;&quot;0 0 1440 60&quot;&gt;
            &lt;path fill&#x3D;&quot;currentColor&quot; d&#x3D;&quot;M0,0V60H1440V0A5771,5771,0,0,1,0,0Z&quot; &#x2F;&gt;
          &lt;&#x2F;svg&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-20" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo20`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1374"
                      src="/assets/img/docs/hero20.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;video-wrapper relative overflow-hidden bg-overlay bg-overlay-gradient !px-0 !mt-0 min-h-[80vh] xl:rounded-[1rem] lg:rounded-[1rem] md:rounded-[1rem]&quot;&gt;
      &lt;video
        poster&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;movie2.jpg&quot;
        src&#x3D;&quot;&#x2F;assets&#x2F;media&#x2F;movie2.mp4&quot;
        autoPlay
        loop
        playsInline
        muted
      &#x2F;&gt;
      &lt;div className&#x3D;&quot;video-content absolute z-[2] w-full h-full flex items-center justify-center text-center flex-col left-0 top-0&quot;&gt;
        &lt;div className&#x3D;&quot;container !text-center&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
            &lt;div className&#x3D;&quot;lg:w-8&#x2F;12 xl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center !text-white !mx-auto&quot;&gt;
              &lt;h1 className&#x3D;&quot;xl:!text-[2.7rem] !text-[calc(1.395rem_+_1.74vw)] font-semibold !leading-[1.15] !text-white !mb-5&quot;&gt;
                &lt;span className&#x3D;&quot;rotator-zoom&quot;&gt;
                  Rapid Solutions,Innovative Thinking,Top-Notch Support
                &lt;&#x2F;span&gt;
              &lt;&#x2F;h1&gt;
              &lt;p className&#x3D;&quot;lead !text-[1.2rem] !leading-[1.6] font-medium !mb-0 xxl:!mx-8&quot;&gt;
                We are a digital agency specializing in web design, mobile
                development and seo optimization.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.video-content *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.content-overlay *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-21" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo21`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1146"
                      src="/assets/img/docs/hero21.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

import AnimatedText from &quot;@&#x2F;components&#x2F;common&#x2F;AnimatedText&quot;;
import { brands } from &quot;@&#x2F;data&#x2F;brands&quot;;
export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 !mb-[4.5rem] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-0 max-w-full xl:!order-2 lg:!order-2&quot;&gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;img-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i21@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i21.png&quot;
                width&#x3D;{800}
                height&#x3D;{559}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;md:w-10&#x2F;12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-5&#x2F;12 xl:!ml-0 xl:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-0 max-w-full text-center lg:text-left xl:text-left&quot;&gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[2.7rem] !text-[calc(1.395rem_+_1.74vw)] !leading-[1.15] !mb-5 md:mx-[-1.25rem] lg:mx-0 !mt-7&quot;&gt;
              A digital agency
              &lt;br className&#x3D;&quot;xl:!hidden lg:!hidden md:!hidden&quot; &#x2F;&gt;
              specializing on
              &lt;br className&#x3D;&quot;xl:!hidden lg:!hidden md:!hidden&quot; &#x2F;&gt;
              &lt;span className&#x3D;&quot;rotator-fade !text-[#5eb9f0]&quot;&gt;
                &lt;AnimatedText
                  strings&#x3D;{[&quot;mobile design&quot;, &quot;web design&quot;, &quot;3D animation&quot;]}
                &#x2F;&gt;
              &lt;&#x2F;span&gt;
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.1rem] !leading-[1.55] font-medium !mb-7&quot;&gt;
              We are an award winning design agency that strongly believes in
              the power of creative ideas.
            &lt;&#x2F;p&gt;
            &lt;span&gt;
              &lt;a className&#x3D;&quot;btn btn-lg btn-sky !text-white !bg-[#5eb9f0] border-[#5eb9f0] hover:text-white hover:!bg-[#5eb9f0] hover:!border-[#5eb9f0] focus:shadow-[rgba(88,167,216,1)] active:text-white active:!bg-[#5eb9f0] active:border-[#5eb9f0] disabled:text-white disabled:!bg-[#5eb9f0] disabled:border-[#5eb9f0] !rounded-[50rem] !mr-2&quot;&gt;
                Get Started
              &lt;&#x2F;a&gt;
            &lt;&#x2F;span&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;p className&#x3D;&quot;text-center !mb-8&quot;&gt;
          Trusted by over 2K+ clients across the world
        &lt;&#x2F;p&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] row-cols-4 row-cols-md-4 row-cols-lg-7 row-cols-xl-7 !mt-[-50px] !mb-2 items-center justify-center&quot;&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          {brands.slice(0, 6).map((elm, i) &#x3D;&gt; (
            &lt;div
              key&#x3D;{i}
              className&#x3D;&quot;w-1&#x2F;4 xl:w-[14.2857142857%] lg:w-[14.2857142857%] md:w-1&#x2F;4 flex-[0_0_auto] !px-[15px] !mt-[50px] max-w-full&quot;
            &gt;
              &lt;img
                className&#x3D;&quot;md:!px-[0.75rem] lg:!px-0 xl:!px-[0.5rem] xxl:!px-[1.25rem]&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;{elm.src}
                width&#x3D;{elm.width}
                height&#x3D;{elm.height}
              &#x2F;&gt;
            &lt;&#x2F;div&gt;
          ))}

          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;div className&#x3D;&quot;overflow-hidden&quot;&gt;
        &lt;div className&#x3D;&quot;divider !text-[#f0f8fe] mx-[-0.5rem]&quot;&gt;
          &lt;svg xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot; viewBox&#x3D;&quot;0 0 1440 100&quot;&gt;
            &lt;path
              fill&#x3D;&quot;currentColor&quot;
              d&#x3D;&quot;M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z&quot;
            &#x2F;&gt;
          &lt;&#x2F;svg&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.overflow-hidden *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-22" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo22`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1192"
                      src="/assets/img/docs/hero22.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`
import ModalVideo from &quot;@&#x2F;components&#x2F;common&#x2F;ModalVideo&quot;;
import React, { useState } from &quot;react&quot;;

export default function Hero() {
  const [isOpen, setIsOpen] &#x3D; useState(false);
  return (
    &lt;&gt;
      &lt;section className&#x3D;&quot;section-frame br-fix overflow-hidden xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem]&quot;&gt;
        &lt;div
          className&#x3D;&quot;wrapper image-wrapper bg-cover bg-image bg-overlay bg-overlay-500 bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]&quot;
          style&#x3D;{{
            backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg26.jpg)&quot;,
          }}
        &gt;
          &lt;div className&#x3D;&quot;container pt-32 xl:pt-[12.5rem] lg:pt-[12.5rem] pb-28 xl:pb-36 lg:pb-36 !text-center&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
              &lt;div
                className&#x3D;&quot;md:w-9&#x2F;12 lg:w-8&#x2F;12 xl:w-7&#x2F;12 xxl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;
                data-cues&#x3D;&quot;zoomIn&quot;
                data-group&#x3D;&quot;page-title&quot;
                data-interval&#x3D;{-200}
                data-delay&#x3D;{500}
              &gt;
                &lt;h2 className&#x3D;&quot;h6 uppercase !tracking-[0.05rem] !text-white !mb-5&quot;&gt;
                  Hello! We are Sandbox
                &lt;&#x2F;h2&gt;
                &lt;h3 className&#x3D;&quot;xl:!text-[2.7rem] !text-[calc(1.395rem_+_1.74vw)] !leading-[1.15] !text-white !mb-7&quot;&gt;
                  Grow your business with our marketing solutions
                &lt;&#x2F;h3&gt;
                &lt;a
                  className&#x3D;&quot;btn btn-circle btn-white btn-play ripple !mx-auto !relative z-[2] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !text-[calc(1.355rem_+_1.26vw)] hover:translate-y-0 inline-flex items-center justify-center leading-none !p-0 !rounded-[100%] before:content-[&#39;&#39;] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#ffffff] after:content-[&#39;&#39;] after:block after:absolute after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#ffffff] after:[animation-delay:0.5s]&quot;
                  onClick&#x3D;{() &#x3D;&gt; setIsOpen(true)}
                &gt;
                  &lt;i className&#x3D;&quot;icn-caret-right !ml-[0.15rem] !relative z-[2] before:content-[&#39;\e900&#39;] !text-[calc(1.355rem_+_1.26vw)]&quot; &#x2F;&gt;
                &lt;&#x2F;a&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}
          &lt;div className&#x3D;&quot;overflow-hidden&quot;&gt;
            &lt;div className&#x3D;&quot;divider !text-white mx-[-0.5rem]&quot;&gt;
              &lt;svg xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot; viewBox&#x3D;&quot;0 0 1440 60&quot;&gt;
                &lt;path
                  fill&#x3D;&quot;currentColor&quot;
                  d&#x3D;&quot;M0,0V60H1440V0A5771,5771,0,0,1,0,0Z&quot;
                &#x2F;&gt;
              &lt;&#x2F;svg&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.overflow-hidden *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.wrapper *&#x2F;}
      &lt;&#x2F;section&gt;
      &lt;ModalVideo
        isOpen&#x3D;{isOpen}
        setIsOpen&#x3D;{setIsOpen}
        src&#x3D;{&quot;&#x2F;assets&#x2F;media&#x2F;movie.mp4&quot;}
      &#x2F;&gt;{&quot; &quot;}
    &lt;&#x2F;&gt;
  );
}`}
        />

        <section id="snippet-23" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo23`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1236"
                      src="/assets/img/docs/hero23.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`


import { useState } from &quot;react&quot;;
import { Autoplay, Navigation, Thumbs } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

const slidesData &#x3D; [
  {
    backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg28.jpg)&quot;,
  },
  {
    backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg29.jpg)&quot;,
  },
  {
    backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg30.jpg)&quot;,
  },
  {
    backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg31.jpg)&quot;,
  },
];
const slidesData2 &#x3D; [
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg28-th.jpg&quot;,
    srcSet: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg28-th@2x.jpg 2x&quot;,
    alt: &quot;image 1&quot;,
    width: 50,
    height: 50,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg29-th.jpg&quot;,
    srcSet: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg29-th@2x.jpg 2x&quot;,
    alt: &quot;image 2&quot;,
    width: 50,
    height: 50,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg30-th.jpg&quot;,
    srcSet: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg30-th@2x.jpg 2x&quot;,
    alt: &quot;image 3&quot;,
    width: 50,
    height: 50,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg31-th.jpg&quot;,
    srcSet: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg31-th@2x.jpg 2x&quot;,
    alt: &quot;image 4&quot;,
    width: 50,
    height: 50,
  },
];

export default function Hero() {
  const [swiperRef, setSwiperRef] &#x3D; useState(null);
  return (
    &lt;section className&#x3D;&quot;wrapper bg-[#21262c] opacity-100&quot;&gt;
      &lt;div className&#x3D;&quot;swiper-container swiper-thumbs-container swiper-fullscreen nav-dark relative z-10&quot;&gt;
        &lt;Swiper
          className&#x3D;&quot;swiper&quot;
          modules&#x3D;{[Navigation, Thumbs, Autoplay]}
          navigation&#x3D;{{
            prevEl: &quot;.snbp24&quot;,
            nextEl: &quot;.snbn24&quot;,
          }}
          spaceBetween&#x3D;{0}
          speed&#x3D;{3000}
          autoplay&#x3D;{{
            delay: 3000,
          }}
          slidesPerView&#x3D;{1}
          thumbs&#x3D;{{ swiper: swiperRef }}
        &gt;
          {slidesData.map((slide, index) &#x3D;&gt; (
            &lt;SwiperSlide
              key&#x3D;{index}
              className&#x3D;&quot;swiper-slide bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 bg-image !bg-cover !bg-[center_center] before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]&quot;
              style&#x3D;{{
                backgroundImage: slide.backgroundImage,
              }}
            &#x2F;&gt;
          ))}
          {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
        &lt;&#x2F;Swiper&gt;
        {&#x2F;* &#x2F;.swiper *&#x2F;}
        &lt;Swiper
          className&#x3D;&quot;swiper swiper-thumbs&quot;
          onSwiper&#x3D;{setSwiperRef}
          modules&#x3D;{[Thumbs]}
        &gt;
          {slidesData2.map((slide, index) &#x3D;&gt; (
            &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot; key&#x3D;{index}&gt;
              &lt;img
                srcSet&#x3D;{slide.srcSet}
                alt&#x3D;{slide.alt}
                src&#x3D;{slide.src}
                width&#x3D;{slide.width}
                height&#x3D;{slide.height}
              &#x2F;&gt;
            &lt;&#x2F;SwiperSlide&gt;
          ))}
          {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
        &lt;&#x2F;Swiper&gt;
        &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
          &lt;div className&#x3D;&quot;swiper-navigation&quot;&gt;
            &lt;div className&#x3D;&quot;swiper-button swiper-button-prev snbp24&quot;&gt;&lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;swiper-button swiper-button-next snbn24&quot;&gt;&lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.swiper *&#x2F;}
        &lt;div className&#x3D;&quot;swiper-static&quot;&gt;
          &lt;div className&#x3D;&quot;container !h-full flex items-center justify-center&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
              &lt;div className&#x3D;&quot;lg:w-8&#x2F;12 xl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mt-[-2.5rem] !text-center&quot;&gt;
                &lt;h1 className&#x3D;&quot;!text-[0.95rem] uppercase !tracking-[.05rem] !leading-[1.3] font-semibold !text-white !mb-3 animate__animated animate__zoomIn animate__delay-1s&quot;&gt;
                  I&#39;m Julia Sandbox
                &lt;&#x2F;h1&gt;
                &lt;h2 className&#x3D;&quot;xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-[1.15] font-semibold !tracking-[normal] !text-white !mb-0 animate__animated animate__zoomIn animate__delay-2s&quot;&gt;
                  couples &amp;amp; wedding photographer
                &lt;&#x2F;h2&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.swiper-static *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.swiper-container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-24" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo24`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="897"
                      src="/assets/img/docs/hero24.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`

import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

import { Gallery, Item } from &quot;react-photoswipe-gallery&quot;;
const slidesData &#x3D; [
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;cf1.jpg&quot;,
    alt: &quot;image 1&quot;,
    width: 1200,
    height: 800,
    href: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;cf1.jpg&quot;,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;cf2.jpg&quot;,
    alt: &quot;image 2&quot;,
    width: 1200,
    height: 800,
    href: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;cf2.jpg&quot;,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;cf3.jpg&quot;,
    alt: &quot;image 3&quot;,
    width: 1200,
    height: 800,
    href: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;cf3.jpg&quot;,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;cf4.jpg&quot;,
    alt: &quot;image 4&quot;,
    width: 1200,
    height: 800,
    href: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;cf4.jpg&quot;,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;cf5.jpg&quot;,
    alt: &quot;image 5&quot;,
    width: 1200,
    height: 800,
    href: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;cf5.jpg&quot;,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;cf6.jpg&quot;,
    alt: &quot;image 6&quot;,
    width: 1200,
    height: 800,
    href: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;cf6.jpg&quot;,
  },
];
export default function Hero() {
  return (
    &lt;section id&#x3D;&quot;home&quot;&gt;
      &lt;div className&#x3D;&quot;wrapper bg-[rgba(246,247,249,1)] overflow-hidden&quot;&gt;
        &lt;div className&#x3D;&quot;container-fluid xl:!px-0 pt-6 pb-10&quot;&gt;
          &lt;Gallery&gt;
            &lt;div className&#x3D;&quot;swiper-container swiper-auto relative z-10&quot;&gt;
              &lt;Swiper
                className&#x3D;&quot;swiper overflow-visible&quot;
                modules&#x3D;{[Navigation, Pagination]}
                pagination&#x3D;{{
                  clickable: true,
                  el: &quot;.spd29&quot;,
                }}
                navigation&#x3D;{{
                  prevEl: &quot;.snbp29&quot;,
                  nextEl: &quot;.snbn29&quot;,
                }}
                spaceBetween&#x3D;{30}
                breakpoints&#x3D;{{
                  0: { slidesPerView: 1 },
                  575: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: &quot;auto&quot;,
                  },
                }}
                centeredSlides
                initialSlide&#x3D;{1}
                loop
              &gt;
                {slidesData.map((slide, index) &#x3D;&gt; (
                  &lt;SwiperSlide className&#x3D;&quot;swiper-slide group&quot; key&#x3D;{index}&gt;
                    &lt;Item
                      original&#x3D;{slide.src}
                      thumbnail&#x3D;{slide.src}
                      width&#x3D;{slide.width}
                      height&#x3D;{slide.height}
                    &gt;
                      {({ ref, open }) &#x3D;&gt; (
                        &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                          &lt;img
                            className&#x3D;&quot;rounded-[0.4rem]&quot;
                            alt&#x3D;{slide.alt}
                            src&#x3D;{slide.src}
                            width&#x3D;{slide.width}
                            height&#x3D;{slide.height}
                            ref&#x3D;{ref}
                          &#x2F;&gt;
                          &lt;a
                            className&#x3D;&quot;item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]&quot;
                            onClick&#x3D;{open}
                            data-gallery&#x3D;&quot;gallery-group&quot;
                          &gt;
                            &lt;i className&#x3D;&quot;uil uil-focus-add before:content-[&#39;\eb22&#39;]&quot; &#x2F;&gt;
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;figure&gt;
                      )}
                    &lt;&#x2F;Item&gt;
                  &lt;&#x2F;SwiperSlide&gt;
                ))}
                {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
              &lt;&#x2F;Swiper&gt;
              {&#x2F;* &#x2F;.swiper *&#x2F;}
              &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                &lt;div className&#x3D;&quot;swiper-navigation&quot;&gt;
                  &lt;div className&#x3D;&quot;swiper-button swiper-button-prev snbp29&quot;&gt;&lt;&#x2F;div&gt;
                  &lt;div className&#x3D;&quot;swiper-button swiper-button-next snbn29&quot;&gt;&lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;swiper-pagination spd29&quot;&gt;&lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;Gallery&gt;
          {&#x2F;* &#x2F;.swiper-container *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.cotnainer *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.overflow-hidden *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-25" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo25`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="946"
                      src="/assets/img/docs/hero25.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`
import { blogPosts3 } from &quot;@&#x2F;data&#x2F;blogs&quot;;
import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

import Link from &quot;next&#x2F;link&quot;;
export default function Hero() {
  return (
    &lt;div className&#x3D;&quot;swiper-container blog grid-view !mb-24 relative z-10&quot;&gt;
      &lt;Swiper
        className&#x3D;&quot;swiper&quot;
        spaceBetween&#x3D;{30}
        modules&#x3D;{[Pagination]}
        pagination&#x3D;{{
          clickable: true,
          el: &quot;.spd30&quot;,
        }}
        breakpoints&#x3D;{{
          0: { slidesPerView: 1 },
          575: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 2,
          },
        }}
      &gt;
        {blogPosts3.map((slide, index) &#x3D;&gt; (
          &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot; key&#x3D;{index}&gt;
            &lt;figure className&#x3D;&quot;overlay caption caption-overlay rounded !mb-0&quot;&gt;
              &lt;a href&#x3D;&quot;#&quot;&gt;
                &lt;img
                  alt&#x3D;{slide.alt}
                  src&#x3D;{slide.src}
                  width&#x3D;{slide.width}
                  height&#x3D;{slide.height}
                &#x2F;&gt;
              &lt;&#x2F;a&gt;
              &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
                &lt;span className&#x3D;&quot;badge badge-lg bg-[rgba(255,255,255)] opacity-100 uppercase !mb-3&quot;&gt;
                  {slide.badge}
                &lt;&#x2F;span&gt;
                &lt;h2 className&#x3D;&quot;post-title h3 !mt-1 !mb-3&quot;&gt;
                  &lt;Link
                    className&#x3D;&quot;text-[#aab0bc] hover:!text-[#d16b86]&quot;
                    href&#x3D;{&#x60;&#x2F;blog-post&#x60;}
                  &gt;
                    {slide.title}
                  &lt;&#x2F;Link&gt;
                &lt;&#x2F;h2&gt;
                &lt;ul className&#x3D;&quot;!text-[0.75rem] !text-[#aab0bc] m-0 p-0 list-none !mb-0&quot;&gt;
                  &lt;li className&#x3D;&quot;post-date inline-block&quot;&gt;
                    &lt;i className&#x3D;&quot;uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-[&#39;\e9ba&#39;]&quot; &#x2F;&gt;
                    &lt;span&gt;{slide.date}&lt;&#x2F;span&gt;
                  &lt;&#x2F;li&gt;
                  &lt;li className&#x3D;&quot;post-author inline-block before:content-[&#39;&#39;] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]&quot;&gt;
                    &lt;a
                      className&#x3D;&quot;!text-[#aab0bc] hover:!text-[#d16b86] hover:!border-[#d16b86]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-user pr-[0.2rem] align-[-.05rem] before:content-[&#39;\ed6f&#39;]&quot; &#x2F;&gt;
                      &lt;span&gt;By {slide.author}&lt;&#x2F;span&gt;
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;li&gt;
                  &lt;li className&#x3D;&quot;post-comments inline-block before:content-[&#39;&#39;] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]&quot;&gt;
                    &lt;a
                      className&#x3D;&quot;!text-[#aab0bc] hover:!text-[#d16b86] hover:!border-[#d16b86]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-[&#39;\ea54&#39;]&quot; &#x2F;&gt;
                      {slide.commentsCount}
                      &lt;span&gt; Comments&lt;&#x2F;span&gt;
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;li&gt;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;figcaption&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;SwiperSlide&gt;
        ))}

        {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
      &lt;&#x2F;Swiper&gt;
      &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
        &lt;div className&#x3D;&quot;swiper-pagination spd30&quot;&gt;&lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.swiper *&#x2F;}
    &lt;&#x2F;div&gt;
  );
}`}
        />

        <section id="snippet-26" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo26`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1194"
                      src="/assets/img/docs/hero26.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#f0f0f8]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-10 lg:pt-14 xl:!pt-14 xxl:!pt-10 lg:pb-10 xl:pb-10 xxl:pb-0&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] items-center text-center lg:text-left xl:text-left&quot;&gt;
          &lt;div
            className&#x3D;&quot;lg:w-6&#x2F;12 xl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px]&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;page-title&quot;
            data-delay&#x3D;{900}
          &gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] !leading-[1.15] font-semibold !mb-4 xl:!mr-5 xl:!mt-[-2.5rem] lg:!mt-[-2.5rem]&quot;&gt;
              Grow Your Business with
              &lt;br className&#x3D;&quot;hidden md:block xl:!hidden lg:!hidden&quot; &#x2F;&gt;
              &lt;span className&#x3D;&quot;!text-[#605dba]&quot;&gt;Our Marketing Solutions&lt;&#x2F;span&gt;
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.2rem] !leading-[1.5] !mb-7 xxl:!pr-20&quot;&gt;
              We help our clients to increase their website
              &lt;br className&#x3D;&quot;hidden md:block xl:!hidden lg:!hidden&quot; &#x2F;&gt;
              traffic, rankings and visibility in search results.
            &lt;&#x2F;p&gt;
            &lt;div className&#x3D;&quot;inline-flex !mr-2&quot;&gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;btn btn-lg btn-grape !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] rounded&quot;
              &gt;
                Try it for Free
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;inline-flex&quot;&gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;btn btn-lg btn-outline-grape !text-[#605dba] bg-[#605dba] !border-[#605dba] !border-[2px] hover:!text-white hover:!bg-[#605dba] hover:!border-[#605dba] focus:shadow-[rgba(96,93,186,1)] active:!text-white active:bg-[#605dba] active:border-[#605dba] disabled:!text-white disabled:bg-transparent disabled:border-[#605dba] rounded&quot;
              &gt;
                Explore Now
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;w-10&#x2F;12 md:w-7&#x2F;12 lg:w-6&#x2F;12 xl:w-5&#x2F;12 !mx-auto flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-5 md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px]&quot;&gt;
            &lt;img
              className&#x3D;&quot;max-w-full h-auto !mb-[-3.5rem] md:!mb-[-4.5rem] lg:!mb-[-9rem] xl:!mb-[-9rem]&quot;
              srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;3d11@2x.png 2x&quot;
              data-cue&#x3D;&quot;fadeIn&quot;
              data-delay&#x3D;{300}
              alt&#x3D;&quot;image&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;3d11.png&quot;
              width&#x3D;{800}
              height&#x3D;{1080}
            &#x2F;&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
        &lt;img
          className&#x3D;&quot;w-full max-w-full !h-auto&quot;
          alt&#x3D;&quot;image&quot;
          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;clouds.png&quot;
          width&#x3D;{3170}
          height&#x3D;{250}
        &#x2F;&gt;
      &lt;&#x2F;figure&gt;
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-27" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo27`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1114"
                      src="/assets/img/docs/hero27.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section
      className&#x3D;&quot;wrapper image-wrapper bg-cover bg-image bg-xs-none bg-[rgba(246,247,249,1)] bg-[center_center] bg-no-repeat bg-scroll relative z-0 max-sm:!bg-none md:min-h-[25rem] max-md:min-h-[20rem]&quot;
      style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg37.jpg)&quot; }}
    &gt;
      &lt;div className&#x3D;&quot;container pt-28 pb-20 sm:!py-28 xxl:!py-40&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div
            className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 sm:w-6&#x2F;12 xxl:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full max-sm:!text-center text-left&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;page-title&quot;
            data-interval&#x3D;{-200}
            data-delay&#x3D;{500}
          &gt;
            &lt;h2 className&#x3D;&quot;xl:!text-[2.8rem] !text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] !tracking-[-0.035em] !mb-4 !mt-0 xl:!mt-5 lg:!mt-5 xl:!pr-5 xxl:!pr-0&quot;&gt;
              We bring solutions to make life
              &lt;span className&#x3D;&quot;underline-3 style-3 yellow !relative z-[1] after:content-[&#39;&#39;] after:absolute after:z-[-1] after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2&#x2F;4 after:left-2&#x2F;4&quot;&gt;
                easier
              &lt;&#x2F;span&gt;
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead text-[1.15rem] !leading-[1.5] font-medium !mb-7 lg:!pr-5 xl:!pr-5 xxl:!pr-0&quot;&gt;
              We are a creative company that focuses on long term relationships
              with customers.
            &lt;&#x2F;p&gt;
            &lt;div&gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;btn btn-lg btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] rounded&quot;
              &gt;
                Read More
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-28" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo28`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1370"
                      src="/assets/img/docs/hero28.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper bg-gradient-blend&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-24 xl:pt-32 lg:pt-32 md:pt-32 pb-14 md:pb-32 xl:pb-40 lg:pb-40&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-3&#x2F;12 lg:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;div className&#x3D;&quot;img-mask mask-2&quot;&gt;
              &lt;img
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about28@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about28.jpg&quot;
                width&#x3D;{385}
                height&#x3D;{360}
              &#x2F;&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-10&quot;&gt;
          &lt;div className&#x3D;&quot;md:w-10&#x2F;12 lg:w-9&#x2F;12 xl:w-9&#x2F;12 xxl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[0.85rem] !leading-[1.35] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3&quot;&gt;
              Hello! I&#39;m Julia
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;xl:!text-[2.4rem] !text-[calc(1.365rem_+_1.38vw)] font-semibold !leading-[1.15] !mb-5 xl:!px-14&quot;&gt;
              I’m a corporate &lt;em&gt;brand designer&lt;&#x2F;em&gt; based in New York City.
            &lt;&#x2F;h3&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.1rem]&quot;&gt;
              I’m very passionate about the work that I do, and if you are
              curious you can find my works on
              &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;hover !text-[#60697b]&quot;&gt;
                Dribbble
              &lt;&#x2F;a&gt;
              , my portfolio on
              &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;hover !text-[#60697b]&quot;&gt;
                Behance
              &lt;&#x2F;a&gt;
              , and my shots on
              &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;hover !text-[#60697b]&quot;&gt;
                Instagram
              &lt;&#x2F;a&gt;
              .
            &lt;&#x2F;p&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;div className&#x3D;&quot;overflow-hidden&quot;&gt;
        &lt;div className&#x3D;&quot;divider !text-[#fefefe] mx-[-0.5rem]&quot;&gt;
          &lt;svg xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot; viewBox&#x3D;&quot;0 0 1440 92.26&quot;&gt;
            &lt;path
              fill&#x3D;&quot;currentColor&quot;
              d&#x3D;&quot;M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z&quot;
            &#x2F;&gt;
          &lt;&#x2F;svg&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.overflow-hidden *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-29" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo29`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1238"
                      src="/assets/img/docs/hero29.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section
      className&#x3D;&quot;wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 [background-size:100%] bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.6)]&quot;
      style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg23.png)&quot; }}
    &gt;
      &lt;div className&#x3D;&quot;container pt-24 xl:pt-32 lg:pt-32 md:pt-32 pb-9&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-0 !mt-[-50px] items-center text-center lg:text-left xl:text-left&quot;&gt;
          &lt;div
            className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 xxl:w-5&#x2F;12 w-full flex-[0_0_auto] max-w-full !relative !mt-[50px]&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;page-title&quot;
            data-delay&#x3D;{700}
          &gt;
            &lt;img
              className&#x3D;&quot;h-9 !absolute hidden xl:block lg:block&quot;
              data-cue&#x3D;&quot;fadeIn&quot;
              data-delay&#x3D;{3000}
              style&#x3D;{{ top: &quot;-9%&quot;, left: &quot;-6%&quot; }}
              alt&#x3D;&quot;image&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle1.svg&quot;
              width&#x3D;{74}
              height&#x3D;{72}
            &#x2F;&gt;
            &lt;img
              className&#x3D;&quot;!h-[5rem] !absolute hidden xl:block lg:block&quot;
              data-cue&#x3D;&quot;fadeIn&quot;
              data-delay&#x3D;{3000}
              style&#x3D;{{ bottom: &quot;9%&quot;, right: &quot;-22%&quot; }}
              alt&#x3D;&quot;image&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle2.svg&quot;
              width&#x3D;{152}
              height&#x3D;{147}
            &#x2F;&gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] font-semibold !leading-[1.15] !mb-4&quot;&gt;
              Manage all your bills, accounts and budgets in
              &lt;span className&#x3D;&quot;text-gradient gradient-7&quot;&gt;one place.&lt;&#x2F;span&gt;
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.2rem] !leading-[1.5] !font-normal !mb-7&quot;&gt;
              Sandbox is available to download from both App Store and Google
              Play Store.
            &lt;&#x2F;p&gt;
            &lt;div
              className&#x3D;&quot;flex justify-center lg:!justify-start xl:!justify-start&quot;
              data-cues&#x3D;&quot;slideInDown&quot;
              data-group&#x3D;&quot;page-title-buttons&quot;
              data-delay&#x3D;{1800}
            &gt;
              &lt;span className&#x3D;&quot;inline-flex&quot;&gt;
                &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;!mr-2 inline-block&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;!h-[3rem] !rounded-[0.8rem]&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;button-appstore.svg&quot;
                    width&#x3D;{123}
                    height&#x3D;{40}
                  &#x2F;&gt;
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
              &lt;span className&#x3D;&quot;inline-flex&quot;&gt;
                &lt;a className&#x3D;&quot;inline-block&quot; href&#x3D;&quot;#&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;!h-[3rem] !rounded-[0.8rem]&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;button-google-play.svg&quot;
                    width&#x3D;{135}
                    height&#x3D;{40}
                  &#x2F;&gt;
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div
            className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] max-w-full !ml-auto !mb-[-10rem] xxl:!mb-[-15rem] !mt-[50px]&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-delay&#x3D;{600}
          &gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;w-full max-w-full !h-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices3@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices3.png&quot;
                width&#x3D;{645}
                height&#x3D;{735}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;div className&#x3D;&quot;overflow-hidden&quot; style&#x3D;{{ zIndex: 1 }}&gt;
        &lt;div className&#x3D;&quot;divider !text-[#fefefe] mx-[-0.5rem]&quot;&gt;
          &lt;svg xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot; viewBox&#x3D;&quot;0 0 1440 100&quot;&gt;
            &lt;g fill&#x3D;&quot;currentColor&quot;&gt;
              &lt;polygon points&#x3D;&quot;1440 100 0 100 0 85 1440 0 1440 100&quot; &#x2F;&gt;
            &lt;&#x2F;g&gt;
          &lt;&#x2F;svg&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.overflow-hidden *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-30" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo30`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1026"
                      src="/assets/img/docs/hero30.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

import AnimatedText from &quot;@&#x2F;components&#x2F;common&#x2F;AnimatedText&quot;;
export default function Hero() {
  return (
    &lt;div className&#x3D;&quot;container pt-36 xl:pt-[12.5rem] lg:pt-[12.5rem] md:pt-[12.5rem] !text-center !relative&quot;&gt;
      &lt;div
        className&#x3D;&quot;absolute&quot;
        style&#x3D;{{
          top: &quot;-15%&quot;,
          left: &quot;50%&quot;,
          transform: &quot;translateX(-50%)&quot;,
        }}
        data-cue&#x3D;&quot;fadeIn&quot;
      &gt;
        &lt;img
          className&#x3D;&quot;!rounded-[0.8rem]&quot;
          alt&#x3D;&quot;image&quot;
          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;blurry.png&quot;
          width&#x3D;{1400}
          height&#x3D;{1080}
        &#x2F;&gt;
      &lt;&#x2F;div&gt;
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !relative&quot;&gt;
        &lt;div className&#x3D;&quot;lg:w-8&#x2F;12 xl:w-8&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative&quot;&gt;
          &lt;div
            className&#x3D;&quot;absolute shape grape w-5 hidden xl:block lg:block&quot;
            style&#x3D;{{ top: &quot;-5%&quot;, left: &quot;-15%&quot; }}
            data-cue&#x3D;&quot;fadeIn&quot;
            data-delay&#x3D;{1500}
          &gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 219.5 219.5&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;svg&#x2F;pie.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg !w-full !h-full&quot;
            &gt;
              &lt;path
                className&#x3D;&quot;svg-fill&quot;
                d&#x3D;&quot;M219.5 219.5H0c0-58.19 23.14-114.06 64.29-155.21A219.561 219.561 0 01219.5 0v219.5z&quot;
              &#x2F;&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
          &lt;div
            className&#x3D;&quot;absolute shape violet !w-[2.5rem] hidden xl:block lg:block&quot;
            style&#x3D;{{ bottom: &quot;30%&quot;, left: &quot;-20%&quot; }}
            data-cue&#x3D;&quot;fadeIn&quot;
            data-delay&#x3D;{1500}
          &gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 457.71 446.45&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;svg&#x2F;scribble.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg !w-full !h-full&quot;
            &gt;
              &lt;path
                className&#x3D;&quot;svg-fill&quot;
                d&#x3D;&quot;M205.62 442.54c-.51-.41-.99-.84-1.46-1.31-10.4-10.39-3.61-27.12 11.63-52.5 11.72-19.51 28.48-43.74 46.22-69.39 17.53-25.34 35.66-51.54 49.01-73.47 14.73-24.19 18.57-35.01 19.51-39.48-3.86-.28-13.15.3-33.78 6.52-19.71 5.94-43.09 14.92-65.7 23.6-63.8 24.49-85.35 31.41-96.51 19.5-3.21-3.43-7.62-11.04-1.12-23.54 2.49-4.79 6.64-10.51 12.68-17.5 10.4-12.03 25.04-26.34 40.55-41.49 14.02-13.7 28.53-27.87 39.53-40.11 9.93-11.04 14.15-17.43 15.94-20.82-3.43-.75-10.24-1.51-23.25-.92-14.99.68-33.44 2.89-51.28 5.02-46.92 5.61-74.09 8.33-86.81-.99-4.78-3.5-7.67-8.42-8.41-14.24-1.97-15.58 12.45-33.15 29.14-53.5 5.31-6.47 13.31-16.22 17.36-22.68-4.51-.38-12.43-.4-25.97 1.1-16.54 1.82-35.62 5.22-50.95 7.96-12.62 2.25-22.6 4.03-28.48 4.49C6.6 39.3.58 34.17.04 27.28c-.54-6.88 4.6-12.9 11.48-13.44 4.66-.37 14.58-2.13 26.06-4.18C54.56 6.63 75.7 2.86 94 1.07c26.41-2.6 40.16-.54 47.48 7.13 7.01 7.34 6.45 17.66-1.68 30.66-4.72 7.55-11.63 15.98-18.95 24.9-6.18 7.53-12.57 15.31-17.24 22.19-3.35 4.92-4.95 8.13-5.71 10.07 3 .54 9.09 1.08 20.87.43 13.21-.73 29.07-2.63 45.86-4.64 59.99-7.17 94.33-10.22 102.49 10.62 7.4 18.93-16.51 43.51-62.99 88.92-12.69 12.4-24.68 24.11-34.04 34.28-3.17 3.45-5.68 6.34-7.67 8.75 15.88-4.42 41.18-14.13 59.67-21.22 62.4-23.96 101.69-37.87 121.09-29.14 5.38 2.42 9.26 6.47 11.23 11.72 7.48 19.95-16.15 57.31-71.83 137.82-15.49 22.39-30.12 43.55-41.18 61.25-7.13 11.4-11.3 19.11-13.75 24.25 8.97-3.3 25.58-11 55.73-28.8 32.68-19.29 70.61-44.04 101.09-63.94 24.62-16.07 44.07-28.76 54.65-34.68 6.03-3.37 13.64-1.22 17.01 4.81 3.37 6.03 1.22 13.64-4.81 17.01-9.83 5.5-29.92 18.61-53.18 33.79-33.46 21.84-75.1 49.01-110.05 69.21-49.35 28.51-70.85 35.44-82.46 26.07z&quot;
              &#x2F;&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
          &lt;div
            className&#x3D;&quot;absolute shape fuchsia w-6 hidden xl:block lg:block&quot;
            style&#x3D;{{
              top: &quot;0%&quot;,
              right: &quot;-25%&quot;,
              transform: &quot;rotate(70deg)&quot;,
            }}
            data-cue&#x3D;&quot;fadeIn&quot;
            data-delay&#x3D;{1500}
          &gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 411.42 329.24&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;svg&#x2F;tri.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg !w-full !h-full&quot;
            &gt;
              &lt;g data-name&#x3D;&quot;Layer 2&quot;&gt;
                &lt;path
                  className&#x3D;&quot;svg-fill&quot;
                  d&#x3D;&quot;M164.34 21.92L8.72 251.15c-22.54 33.2 1.24 78.09 41.37 78.09h311.24c40.13 0 63.91-44.89 41.37-78.09L247.08 21.92a50 50 0 00-82.74 0z&quot;
                  data-name&#x3D;&quot;Layer 1&quot;
                &#x2F;&gt;
              &lt;&#x2F;g&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
          &lt;div
            className&#x3D;&quot;absolute shape yellow w-6 hidden xl:block lg:block&quot;
            style&#x3D;{{ bottom: &quot;25%&quot;, right: &quot;-17%&quot; }}
            data-cue&#x3D;&quot;fadeIn&quot;
            data-delay&#x3D;{1500}
          &gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 500 500&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;svg&#x2F;circle.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg !w-full !h-full&quot;
            &gt;
              &lt;g data-name&#x3D;&quot;Layer 2&quot;&gt;
                &lt;path
                  className&#x3D;&quot;svg-fill&quot;
                  d&#x3D;&quot;M250 0C111.93 0 0 111.93 0 250s111.93 250 250 250 250-111.93 250-250S388.07 0 250 0zm0 425a175 175 0 11175-175 175 175 0 01-175 175z&quot;
                  data-name&#x3D;&quot;Layer 1&quot;
                &#x2F;&gt;
              &lt;&#x2F;g&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
          &lt;div data-cues&#x3D;&quot;slideInDown&quot; data-group&#x3D;&quot;page-title&quot;&gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[3.2rem] !text-[calc(1.445rem_+_2.34vw)] font-semibold !leading-[1.15] !mb-5 md:mx-10 lg:mx-0 xl:mx-0&quot;&gt;
              We are a digital web agency specializing on &lt;br &#x2F;&gt;
              &lt;span className&#x3D;&quot;rotator-fade !text-[#605dba]&quot;&gt;
                &lt;AnimatedText
                  strings&#x3D;{[
                    &quot;web design.&quot;,
                    &quot;SEO services.&quot;,
                    &quot;e-commerce.&quot;,
                    &quot;Google Adwords.&quot;,
                  ]}
                &#x2F;&gt;
              &lt;&#x2F;span&gt;
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.2rem] !leading-[1.6] !mb-8&quot;&gt;
              We are an award winning digital web agency that strongly believes
              in the power of creative ideas.
            &lt;&#x2F;p&gt;
          &lt;&#x2F;div&gt;
          &lt;div
            className&#x3D;&quot;flex justify-center&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-delay&#x3D;{600}
          &gt;
            &lt;span&gt;
              &lt;a className&#x3D;&quot;btn btn-lg btn-grape !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] !rounded-[0.8rem] mx-1&quot;&gt;
                See Projects
              &lt;&#x2F;a&gt;
            &lt;&#x2F;span&gt;
            &lt;span&gt;
              &lt;a className&#x3D;&quot;btn btn-lg btn-fuchsia !text-white !bg-[#e668b3] border-[#e668b3] hover:text-white hover:bg-[#e668b3] hover:!border-[#e668b3] active:text-white active:bg-[#e668b3] active:border-[#e668b3] disabled:text-white disabled:bg-[#e668b3] disabled:border-[#e668b3] !rounded-[0.8rem] mx-1&quot;&gt;
                Contact Us
              &lt;&#x2F;a&gt;
            &lt;&#x2F;span&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;div *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.row *&#x2F;}
    &lt;&#x2F;div&gt;
  );
}`}
        />

        <section id="snippet-31" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo31`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1940"
                      src="/assets/img/docs/hero31.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-12 xl:pt-16 lg:pt-16 md:pt-16 pb-36 xl:pb-28 lg:pb-28 md:pb-28 !text-center&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div
            className&#x3D;&quot;lg:w-9&#x2F;12 xl:w-8&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;page-title&quot;
            data-delay&#x3D;{500}
          &gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[3.2rem] !text-[calc(1.445rem_+_2.34vw)] font-bold !leading-[1.15] !tracking-[-0.03em] !mb-4 md:!px-8 lg:!px-0&quot;&gt;
              We bring rapid solutions for your
              &lt;span className&#x3D;&quot;!relative z-[1] style-1 primary before:content-[&#39;&#39;] before:z-[-1] before:absolute before:opacity-100 before:block before:-translate-x-2&#x2F;4 before:-translate-y-2&#x2F;4 before:-rotate-1 before:w-[111%] before:h-[110%] before:rounded-[80%] before:border-t-0 before:border-[3px] before:border-solid before:border-[#3f78e0] before:left-2&#x2F;4 before:!top-[52%] after:content-[&#39;&#39;] after:z-[-1] after:absolute after:opacity-100 after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:-translate-x-2&#x2F;4 after:-translate-y-2&#x2F;4 after:-rotate-2 after:w-[107%] after:h-[111%] after:rounded-[80%] after:border-l-0 after:border-b-0 after:border-[3px] after:border-solid after:border-[#3f78e0] after:left-2&#x2F;4 after:top-[52%] max-xl:before:!hidden max-xl:after:!hidden max-lg:before:!hidden max-lg:after:!hidden max-md:before:!hidden max-md:after:!hidden max-sm:before:!hidden max-sm:after:!hidden&quot;&gt;
                &lt;em&gt;business&lt;&#x2F;em&gt;
              &lt;&#x2F;span&gt;
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.2rem] !leading-[1.5] !mb-7&quot;&gt;
              We are creative company that values quality and focuses on
              establishing long-term relationships with customers.
            &lt;&#x2F;p&gt;
            &lt;div&gt;
              &lt;a className&#x3D;&quot;btn btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded !mb-10 xxl:!mb-5&quot;&gt;
                See Projects
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;lg:w-10&#x2F;12 xl:w-9&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mt-[3rem] !mb-[-12.5rem] relative z-[3]&quot;&gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;max-w-full h-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i28@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i28.png&quot;
                width&#x3D;{960}
                height&#x3D;{630}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;div className&#x3D;&quot;overflow-hidden&quot;&gt;
        &lt;div className&#x3D;&quot;divider !text-[#f2f3fb] mx-[-0.5rem]&quot;&gt;
          &lt;svg xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot; viewBox&#x3D;&quot;0 0 1440 70&quot;&gt;
            &lt;path
              fill&#x3D;&quot;currentColor&quot;
              d&#x3D;&quot;M1440,70H0V45.16a5762.49,5762.49,0,0,1,1440,0Z&quot;
            &#x2F;&gt;
          &lt;&#x2F;svg&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-32" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo32`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1040"
                      src="/assets/img/docs/hero32.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`&lt;section className&#x3D;&quot;wrapper gradient-8 !relative before:content-[&#39;&#39;] before:absolute before:w-full before:h-full before:bg-cover before:pointer-events-none before:left-0 before:top-0 before:bg-[url(/assets/img/photos/lines.png)]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-28 xl:pt-36 lg:pt-36 md:pt-36 pb-[12.5rem] xl:pb-[17.5rem] lg:pb-[17.5rem] !text-center&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div
            className&#x3D;&quot;lg:w-10&#x2F;12 xl:w-9&#x2F;12 xxl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;
            data-cues&#x3D;&quot;zoomIn&quot;
            data-group&#x3D;&quot;page-title&quot;
            data-interval&#x3D;{-200}
            data-delay&#x3D;{500}
          &gt;
            &lt;h2 className&#x3D;&quot;h6 uppercase !text-[0.85rem] !tracking-[0.05rem] !leading-[1.55] !text-white !mb-5&quot;&gt;
              Hello! We are Sandbox
            &lt;&#x2F;h2&gt;
            &lt;h1 className&#x3D;&quot;xl:!text-[3.4rem] !text-[calc(1.465rem_+_2.58vw)] !leading-[1.05] font-semibold !mb-8 !text-white&quot;&gt;
              We have considered our solutions to
              &lt;span className&#x3D;&quot;relative z-[2] whitespace-nowrap after:content-[&#39;&#39;] after:block after:absolute after:w-[102.5%] after:h-[10%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[4%] motion-reduce:after:transition-none after:bg-[#3f78e0] after:!bg-[linear-gradient(45deg,#08aeea_0,#2af598_100%)]&quot;&gt;
                &lt;em&gt;assist&lt;&#x2F;em&gt;
              &lt;&#x2F;span&gt;
              every stage of your growth.
            &lt;&#x2F;h1&gt;
            &lt;div
              className&#x3D;&quot;flex justify-center !mb-4&quot;
              data-cues&#x3D;&quot;zoomIn&quot;
              data-group&#x3D;&quot;page-title-buttons&quot;
              data-delay&#x3D;{900}
            &gt;
              &lt;span&gt;
                &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;btn btn-lg btn-white&quot;&gt;
                  Explore Now
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;`}
        />

        <section id="snippet-33" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo33`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1120"
                      src="/assets/img/docs/hero33.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;section-frame xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem] xxl:!mx-12 overflow-hidden&quot;&gt;
      &lt;div
        className&#x3D;&quot;wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500 bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.5)]&quot;
        style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg23.png)&quot; }}
      &gt;
        &lt;div className&#x3D;&quot;container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem] !text-center !relative&quot;&gt;
          &lt;div
            className&#x3D;&quot;!absolute shape yellow hidden xl:block lg:block w-5&quot;
            style&#x3D;{{ top: &quot;18%&quot;, left: &quot;5%&quot; }}
          &gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 219.5 219.5&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;svg&#x2F;pie.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg !w-full !h-full&quot;
            &gt;
              &lt;path
                className&#x3D;&quot;svg-fill&quot;
                d&#x3D;&quot;M219.5 219.5H0c0-58.19 23.14-114.06 64.29-155.21A219.561 219.561 0 01219.5 0v219.5z&quot;
              &#x2F;&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
          &lt;div
            className&#x3D;&quot;!absolute shape leaf hidden xl:block lg:block !w-[2.5rem]&quot;
            style&#x3D;{{ bottom: &quot;30%&quot;, left: &quot;2%&quot; }}
          &gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 457.71 446.45&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;svg&#x2F;scribble.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg !w-full !h-full&quot;
            &gt;
              &lt;path
                className&#x3D;&quot;svg-fill&quot;
                d&#x3D;&quot;M205.62 442.54c-.51-.41-.99-.84-1.46-1.31-10.4-10.39-3.61-27.12 11.63-52.5 11.72-19.51 28.48-43.74 46.22-69.39 17.53-25.34 35.66-51.54 49.01-73.47 14.73-24.19 18.57-35.01 19.51-39.48-3.86-.28-13.15.3-33.78 6.52-19.71 5.94-43.09 14.92-65.7 23.6-63.8 24.49-85.35 31.41-96.51 19.5-3.21-3.43-7.62-11.04-1.12-23.54 2.49-4.79 6.64-10.51 12.68-17.5 10.4-12.03 25.04-26.34 40.55-41.49 14.02-13.7 28.53-27.87 39.53-40.11 9.93-11.04 14.15-17.43 15.94-20.82-3.43-.75-10.24-1.51-23.25-.92-14.99.68-33.44 2.89-51.28 5.02-46.92 5.61-74.09 8.33-86.81-.99-4.78-3.5-7.67-8.42-8.41-14.24-1.97-15.58 12.45-33.15 29.14-53.5 5.31-6.47 13.31-16.22 17.36-22.68-4.51-.38-12.43-.4-25.97 1.1-16.54 1.82-35.62 5.22-50.95 7.96-12.62 2.25-22.6 4.03-28.48 4.49C6.6 39.3.58 34.17.04 27.28c-.54-6.88 4.6-12.9 11.48-13.44 4.66-.37 14.58-2.13 26.06-4.18C54.56 6.63 75.7 2.86 94 1.07c26.41-2.6 40.16-.54 47.48 7.13 7.01 7.34 6.45 17.66-1.68 30.66-4.72 7.55-11.63 15.98-18.95 24.9-6.18 7.53-12.57 15.31-17.24 22.19-3.35 4.92-4.95 8.13-5.71 10.07 3 .54 9.09 1.08 20.87.43 13.21-.73 29.07-2.63 45.86-4.64 59.99-7.17 94.33-10.22 102.49 10.62 7.4 18.93-16.51 43.51-62.99 88.92-12.69 12.4-24.68 24.11-34.04 34.28-3.17 3.45-5.68 6.34-7.67 8.75 15.88-4.42 41.18-14.13 59.67-21.22 62.4-23.96 101.69-37.87 121.09-29.14 5.38 2.42 9.26 6.47 11.23 11.72 7.48 19.95-16.15 57.31-71.83 137.82-15.49 22.39-30.12 43.55-41.18 61.25-7.13 11.4-11.3 19.11-13.75 24.25 8.97-3.3 25.58-11 55.73-28.8 32.68-19.29 70.61-44.04 101.09-63.94 24.62-16.07 44.07-28.76 54.65-34.68 6.03-3.37 13.64-1.22 17.01 4.81 3.37 6.03 1.22 13.64-4.81 17.01-9.83 5.5-29.92 18.61-53.18 33.79-33.46 21.84-75.1 49.01-110.05 69.21-49.35 28.51-70.85 35.44-82.46 26.07z&quot;
              &#x2F;&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
          &lt;div
            className&#x3D;&quot;!absolute shape fuchsia hidden xl:block lg:block w-6&quot;
            style&#x3D;{{
              top: &quot;20%&quot;,
              right: &quot;2%&quot;,
              transform: &quot;rotate(70deg)&quot;,
            }}
          &gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 411.42 329.24&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;svg&#x2F;tri.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg !w-full !h-full&quot;
            &gt;
              &lt;g data-name&#x3D;&quot;Layer 2&quot;&gt;
                &lt;path
                  className&#x3D;&quot;svg-fill&quot;
                  d&#x3D;&quot;M164.34 21.92L8.72 251.15c-22.54 33.2 1.24 78.09 41.37 78.09h311.24c40.13 0 63.91-44.89 41.37-78.09L247.08 21.92a50 50 0 00-82.74 0z&quot;
                  data-name&#x3D;&quot;Layer 1&quot;
                &#x2F;&gt;
              &lt;&#x2F;g&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
          &lt;div
            className&#x3D;&quot;!absolute shape grape hidden xl:block lg:block w-6&quot;
            style&#x3D;{{ bottom: &quot;28%&quot;, right: &quot;5%&quot; }}
          &gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 500 500&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;svg&#x2F;circle.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg !w-full !h-full&quot;
            &gt;
              &lt;g data-name&#x3D;&quot;Layer 2&quot;&gt;
                &lt;path
                  className&#x3D;&quot;svg-fill&quot;
                  d&#x3D;&quot;M250 0C111.93 0 0 111.93 0 250s111.93 250 250 250 250-111.93 250-250S388.07 0 250 0zm0 425a175 175 0 11175-175 175 175 0 01-175 175z&quot;
                  data-name&#x3D;&quot;Layer 1&quot;
                &#x2F;&gt;
              &lt;&#x2F;g&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
            &lt;div className&#x3D;&quot;lg:w-9&#x2F;12 xl:w-9&#x2F;12 xxl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
              &lt;h1 className&#x3D;&quot;font-semibold !leading-[1.15] xl:!text-[3.5rem] !text-[calc(1.475rem_+_2.7vw)] md:!px-10 lg:!px-0 xl:!px-8 !mb-5&quot;&gt;
                👋 Hello! I&#39;m
                &lt;img
                  className&#x3D;&quot;inline !w-[3.5rem] mx-1&quot;
                  alt&#x3D;&quot;image&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;avatars&#x2F;avatar.png&quot;
                  width&#x3D;{140}
                  height&#x3D;{170}
                &#x2F;&gt;
                Camille, a product designer.
              &lt;&#x2F;h1&gt;
              &lt;p className&#x3D;&quot;lead !text-[1.2rem] !leading-[1.6] md:!px-10 lg:!px-0 xl:!px-0 lg:mx-[-2.5rem] xl:mx-0 !mb-8&quot;&gt;
                I’m very passionate about the work that I do, and if you are
                curious you can find my works on
                &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;hover !text-[#60697b]&quot;&gt;
                  Dribbble
                &lt;&#x2F;a&gt;
                , my portfolio on
                &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;hover !text-[#60697b]&quot;&gt;
                  Behance
                &lt;&#x2F;a&gt;
                .
              &lt;&#x2F;p&gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;btn btn-lg btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] btn-icon btn-icon-end&quot;
              &gt;
                See My Works
                &lt;i className&#x3D;&quot;uil uil-arrow-up-right !ml-[.3rem] before:content-[&#39;\e950&#39;]&quot; &#x2F;&gt;
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.wrapper *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />

        <section id="snippet-34" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure>
                  <Link to={`/demo34`} target="_blank">
                    <img
                      className="max-w-full h-auto"
                      alt="image"
                      width="2140"
                      height="1024"
                      src="/assets/img/docs/hero34.jpg"
                    />
                  </Link>
                </figure>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
        </section>
        <CodeSnippet
          code={`import React from &quot;react&quot;;

import TypeWriter from &quot;@&#x2F;components&#x2F;common&#x2F;TypeWriter&quot;;
export default function Hero() {
  return (
    &lt;section className&#x3D;&quot;wrapper bg-gradient-purple&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem]&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-5px] !mt-[-50px] items-center&quot;&gt;
          &lt;div
            className&#x3D;&quot;md:w-10&#x2F;12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-5&#x2F;12 xl:!ml-0 xl:w-5&#x2F;12 w-full flex-[0_0_auto] max-w-full text-center lg:text-left xl:text-left order-2 lg:!order-none xl:!order-none px-[5px] !mt-[50px]&quot;
            data-cues&#x3D;&quot;slideInDown&quot;
            data-group&#x3D;&quot;page-title&quot;
            data-delay&#x3D;{600}
          &gt;
            &lt;h1 className&#x3D;&quot;!text-[calc(1.375rem_+_1.5vw)] font-bold !leading-[1.15] xl:!text-[2.5rem] !mb-5 md:mx-10 lg:mx-0&quot;&gt;
              Create a powerful but effortless website for &lt;br &#x2F;&gt;
              &lt;span
                className&#x3D;&quot;typer !text-[#747ed1] whitespace-nowrap&quot;
                data-delay&#x3D;{100}
              &gt;
                &lt;TypeWriter
                  strings&#x3D;{[
                    &quot;your business.&quot;,
                    &quot;your portfolio.&quot;,
                    &quot;your startup.&quot;,
                    &quot;digital marketing.&quot;,
                  ]}
                &#x2F;&gt;
              &lt;&#x2F;span&gt;
              &lt;span className&#x3D;&quot;cursor !text-[#747ed1]&quot; data-owner&#x3D;&quot;typer&quot; &#x2F;&gt;
            &lt;&#x2F;h1&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.15rem] !leading-[1.6] !font-medium !mb-7&quot;&gt;
              Build your website in minutes with the help of countless amazing
              features of Sandbox.
            &lt;&#x2F;p&gt;
            &lt;div
              className&#x3D;&quot;flex justify-center xl:!justify-start lg:!justify-start !mb-4&quot;
              data-cues&#x3D;&quot;slideInDown&quot;
              data-group&#x3D;&quot;page-title-buttons&quot;
              data-delay&#x3D;{900}
            &gt;
              &lt;span&gt;
                &lt;a
                  className&#x3D;&quot;btn btn-lg btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mr-2 scroll&quot;
                  href&#x3D;&quot;#demos&quot;
                &gt;
                  Check Demos
                &lt;&#x2F;a&gt;
              &lt;&#x2F;span&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] max-w-full !ml-auto !relative px-[5px] !mt-[50px]&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-10px] !mt-[-20px]&quot;&gt;
              &lt;div
                className&#x3D;&quot;w-4&#x2F;12 flex-[0_0_auto] px-[10px] max-w-full flex flex-col !ml-auto&quot;
                data-cues&#x3D;&quot;fadeIn&quot;
                data-group&#x3D;&quot;col-start&quot;
                data-delay&#x3D;{900}
              &gt;
                &lt;div className&#x3D;&quot;ml-auto !mt-6&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc1@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc1.jpg&quot;
                    width&#x3D;{160}
                    height&#x3D;{100}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;ml-auto !mt-4&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc2@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc2.jpg&quot;
                    width&#x3D;{180}
                    height&#x3D;{220}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;ml-auto !mt-4&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc3@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc3.jpg&quot;
                    width&#x3D;{200}
                    height&#x3D;{100}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
              &lt;div
                className&#x3D;&quot;w-4&#x2F;12 flex-[0_0_auto] px-[10px] max-w-full&quot;
                data-cues&#x3D;&quot;fadeIn&quot;
                data-group&#x3D;&quot;col-middle&quot;
              &gt;
                &lt;div&gt;
                  &lt;img
                    className&#x3D;&quot;w-full max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc4@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc4.jpg&quot;
                    width&#x3D;{200}
                    height&#x3D;{150}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;img
                    className&#x3D;&quot;w-full max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mt-4&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc5@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc5.jpg&quot;
                    width&#x3D;{200}
                    height&#x3D;{180}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;img
                    className&#x3D;&quot;w-full max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mt-4&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc6@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc6.jpg&quot;
                    width&#x3D;{200}
                    height&#x3D;{150}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
              &lt;div
                className&#x3D;&quot;w-4&#x2F;12 flex-[0_0_auto] px-[10px] max-w-full flex flex-col&quot;
                data-cues&#x3D;&quot;fadeIn&quot;
                data-group&#x3D;&quot;col-end&quot;
                data-delay&#x3D;{900}
              &gt;
                &lt;div className&#x3D;&quot;!mt-8&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc7@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc7.jpg&quot;
                    width&#x3D;{180}
                    height&#x3D;{230}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;!mt-4 !mb-10&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc8@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;vc8.jpg&quot;
                    width&#x3D;{200}
                    height&#x3D;{190}
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
            &lt;div
              className&#x3D;&quot;relative !mt-[-10rem] !mb-40&quot;
              data-cue&#x3D;&quot;fadeIn&quot;
              data-delay&#x3D;{1800}
            &gt;
              &lt;div
                className&#x3D;&quot;btn btn-circle btn-fuchsia !text-white !bg-[#e668b3] border-[#e668b3] hover:text-white hover:bg-[#e668b3] hover:!border-[#e668b3] active:text-white active:bg-[#e668b3] active:border-[#e668b3] disabled:text-white disabled:bg-[#e668b3] disabled:border-[#e668b3] pointer-events-none ripple !absolute counter-wrapper flex-col !hidden xxl:!flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%] before:content-[&#39;&#39;] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#e668b3] after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:content-[&#39;&#39;] after:block after:absolute after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#e668b3] after:[animation-delay:.5s]&quot;
                style&#x3D;{{
                  bottom: 0,
                  right: &quot;-8%&quot;,
                  width: 120,
                  height: 120,
                }}
              &gt;
                &lt;h3 className&#x3D;&quot;xl:!text-[1.3rem] !leding-[1.4] font-bold !text-[calc(1.255rem_+_0.06vw)] !text-white !mt-[-0.25rem] !mb-0&quot;&gt;
                  NO
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!text-[0.85rem] !font-medium !mb-0&quot;&gt;jQuery&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
        />
      </>
    </>
  );
}
