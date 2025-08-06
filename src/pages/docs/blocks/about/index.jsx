import About1 from "@/components/blocks/about/About1";
import About2 from "@/components/blocks/about/About2";
import About3 from "@/components/blocks/about/About3";
import About4 from "@/components/blocks/about/About4";
import About5 from "@/components/blocks/about/About5";
import About6 from "@/components/blocks/about/About6";
import About7 from "@/components/blocks/about/About7";
import About8 from "@/components/blocks/about/About8";
import About9 from "@/components/blocks/about/About9";
import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import PageTitle from "@/components/blocks/PageTitle";
import CodeSnippet from "@/components/common/CodeSnippet";
import Features1 from "@/components/homes/home-15/Features";
import Features2 from "@/components/homes/home-19/Features2";
import About from "@/components/homes/home-23/About";
import Features from "@/components/homes/home-29/Features";

import VideoSection from "@/components/homes/home-8/VideoSection";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks About || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageAbout() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle />
      <BlockPageLinks />
      <About1 />
      <CodeSnippet
        code={`
import React from &quot;react&quot;;

export default function About1() &lbrace;
  return (
    &lt;section
      id&#x3D;&quot;snippet-1&quot;
      className&#x3D;&quot;wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid&quot;
    &gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;md:w-8&#x2F;12 lg:w-6&#x2F;12 xl:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] xl:!order-2 lg:!order-2 !relative&quot;&gt;
            &lt;div
              className&#x3D;&quot;shape !bg-[#edf2fc] !rounded-[50%] rellax !w-[10rem] !h-[10rem] absolute z-[1]&quot;
              data-rellax-speed&#x3D;&lbrace;1&rbrace;
              style&#x3D;&lbrace;&lbrace; top: &quot;-2rem&quot;, right: &quot;-1.9rem&quot; &rbrace;&rbrace;
            &#x2F;&gt;
            &lt;figure className&#x3D;&quot;!rounded-[.4rem] z-[2] relative&quot;&gt;
              &lt;img
                className&#x3D;&quot;!rounded-[.4rem] &quot;
                src&#x3D;&quot;..&#x2F;..&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about7.jpg&quot;
                srcSet&#x3D;&quot;..&#x2F;..&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about7@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
              Who Are We?
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium&quot;&gt;
              We are a digital and branding company that believes in the power
              of creative strategy and along with great design.
            &lt;&#x2F;p&gt;
            &lt;p className&#x3D;&quot;!mb-6&quot;&gt;
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            &lt;&#x2F;p&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-25px] !mt-[-30px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[25px] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                  &lt;div&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 512 512&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;target.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  !mr-4&quot;
                    &gt;
                      &lt;circle
                        className&#x3D;&quot;lineal-fill&quot;
                        cx&#x3D;&quot;283.8&quot;
                        cy&#x3D;&quot;283.8&quot;
                        r&#x3D;&lbrace;143&rbrace;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Our Mission&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                      Dapibus eu leo quam ornare curabitur blandit tempus.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[25px] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                  &lt;div&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 409.6 404.7&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;award-2.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  !mr-4&quot;
                    &gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M90.8 404.7c-6.5 0-12.4-4-14.7-10.1L57.7 347 10 328.7c-8.1-3.1-12.2-12.2-9-20.4.8-2 2-3.9 3.5-5.5l93.6-93.6 97.3 97.3-93.6 93.6c-2.9 2.9-6.9 4.6-11 4.6zm-60.7-93.8l39.5 15.2c4.1 1.6 7.4 4.9 9 9l15.2 39.5 68.1-68.1-63.7-63.7-68.1 68.1zm288.7 93.8c-4.2 0-8.2-1.7-11.1-4.6l-20.8-20.8 16.8-16.8 12.1 12.1 15.2-39.5c1.6-4.1 4.9-7.4 9-9l39.4-15.2-76.4-76.5 16.8-16.8 85.2 85.2c6.1 6.1 6.1 16.1 0 22.3-1.6 1.6-3.4 2.8-5.5 3.6L351.9 347l-18.3 47.6c-1.9 5-6.2 8.7-11.4 9.8-1.1.2-2.2.3-3.4.3z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M347.3 224.1c5.1-15.7 31-28.9 31-46.3s-25.9-30.6-31-46.3c-5.3-16.3 7.8-42.2-2.1-55.7s-38.6-9.2-52.4-19.2-18-38.6-34.4-43.9C242.7 7.6 222.2 28 204.8 28s-37.9-20.4-53.6-15.3c-16.3 5.3-20.8 34-34.4 43.9s-42.4 5.5-52.4 19.2 3.2 39.4-2.1 55.7c-5.1 15.7-31.1 28.8-31.1 46.3s25.9 30.6 31 46.3c5.3 16.3-7.8 42.1 2.1 55.7S103 289 116.7 299s18.1 38.6 34.4 43.9c15.7 5.1 36.2-15.3 53.6-15.3s37.9 20.4 53.6 15.3c16.3-5.3 20.8-34 34.4-43.9s42.4-5.5 52.4-19.2-3.1-39.3 2.2-55.7zm-142.5 48.7c-52.5 0-95-42.5-95-95s42.5-95 95-95 95 42.5 95 95-42.5 95-95 95z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M253 355.7c-10.1 0-19.6-4.6-28.8-9.1-7-3.4-14.3-7-19.4-7s-12.4 3.6-19.4 7c-9.2 4.5-18.7 9.1-28.8 9.1-3.1 0-6.2-.5-9.1-1.4-13.7-4.5-20.7-17.6-26.8-29.2-3.5-6.7-7.2-13.6-10.9-16.3s-11.6-4.2-19.2-5.5c-12.8-2.2-27.4-4.8-35.8-16.3s-6.3-26-4.5-38.8c1.1-7.6 2.2-15.6.7-20.2-1.4-4.2-6.7-9.8-11.9-15.1-9.2-9.5-19.7-20.2-19.7-34.9s10.5-25.4 19.7-34.9c5.2-5.3 10.6-10.8 12-15.1 1.5-4.7.4-12.6-.7-20.2C48.6 95 46.5 80.4 54.8 69s23-14.1 35.8-16.3c7.5-1.3 15.3-2.7 19.2-5.5s7.4-9.6 10.9-16.3c6.1-11.6 13.1-24.8 26.8-29.2 2.9-1 6-1.4 9.1-1.4 10.1 0 19.6 4.6 28.8 9.1 7 3.4 14.3 7 19.4 7s12.4-3.6 19.4-7C233.4 4.6 243 0 253 0c3.1 0 6.2.5 9.1 1.4 13.7 4.5 20.7 17.6 26.8 29.2 3.5 6.7 7.2 13.6 10.9 16.3s11.6 4.2 19.2 5.5c12.9 2.2 27.4 4.8 35.8 16.3s6.3 26 4.5 38.8c-1.1 7.6-2.2 15.6-.7 20.2 1.4 4.2 6.7 9.8 11.9 15.1 9.2 9.5 19.7 20.2 19.7 34.9s-10.5 25.4-19.7 34.9c-5.2 5.3-10.6 10.9-11.9 15.1-1.5 4.7-.4 12.6.7 20.2 1.8 12.9 3.9 27.4-4.5 38.8s-23 14.1-35.8 16.3c-7.5 1.3-15.3 2.7-19.2 5.5s-7.4 9.6-10.9 16.3c-6.1 11.6-13.1 24.8-26.8 29.2-2.9 1.2-6 1.7-9.1 1.7zm-48.2-39.9c10.6 0 20.4 4.8 29.8 9.4 6.8 3.3 13.8 6.7 18.4 6.7.6 0 1.2-.1 1.7-.2 4.5-1.5 9.1-10.1 13.1-17.8 4.8-9.1 9.8-18.5 18-24.5s18.9-7.9 29.1-9.7c8.4-1.5 18-3.1 20.7-6.9s1.3-13.2.1-21.6c-1.4-10.3-2.9-21 .3-30.8 3.1-9.5 10.4-17 17.5-24.3 6.1-6.2 13-13.3 13-18.3s-6.9-12.1-13-18.3c-7.1-7.3-14.4-14.8-17.5-24.3-3.2-9.9-1.7-20.5-.3-30.8 1.2-8.4 2.5-17.9-.1-21.6s-12.3-5.4-20.7-6.9c-10.2-1.8-20.8-3.6-29.1-9.7s-13.2-15.4-18-24.5c-4-7.6-8.6-16.3-13.1-17.8-.6-.2-1.2-.3-1.8-.2-4.6 0-11.6 3.4-18.4 6.7-9.5 4.6-19.3 9.4-29.8 9.4s-20.4-4.8-29.8-9.4c-6.8-3.3-13.8-6.7-18.4-6.7-.6 0-1.2.1-1.8.2-4.5 1.5-9.1 10.1-13.1 17.8-4.8 9.1-9.8 18.5-18 24.5s-18.9 7.9-29.1 9.7c-8.4 1.5-18 3.2-20.7 6.9s-1.3 13.2-.1 21.6c1.4 10.3 2.9 21-.3 30.8-3.1 9.5-10.4 17-17.5 24.3-6 6.2-12.9 13.3-12.9 18.3s6.9 12.1 13 18.3c7.1 7.3 14.4 14.8 17.5 24.3 3.2 9.9 1.7 20.5.3 30.8-1.2 8.4-2.5 17.9.1 21.6s12.3 5.4 20.7 6.9c10.2 1.8 20.8 3.6 29.1 9.7s13.2 15.4 18 24.5c4 7.6 8.6 16.3 13.1 17.7.6.2 1.2.3 1.8.2 4.6 0 11.6-3.4 18.4-6.7 9.5-4.6 19.3-9.3 29.8-9.3z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M204.8 284.7c-59 0-106.9-47.9-106.9-106.9 0-59 47.9-106.9 106.9-106.9 59 0 106.9 47.8 106.9 106.8v.1c-.1 59-47.9 106.9-106.9 106.9zm0-190c-45.9 0-83.2 37.2-83.2 83.1 0 45.9 37.2 83.2 83.1 83.2 45.9 0 83.2-37.2 83.2-83.1 0-25.8-12-50.1-32.4-65.9-14.4-11.2-32.3-17.3-50.7-17.3z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Our Values&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                      Aenean lacinia bibendum nulla sed consectetur.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;

      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
    &lt;&#x2F;section&gt;
  );
&rbrace;        
        `}
      />
      <About2 />
      <CodeSnippet
        code={`
import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;
import &lbrace; facts &rbrace; from &quot;@&#x2F;data&#x2F;facts&quot;;
import React from &quot;react&quot;;

export default function About2() &lbrace;
  return (
    &lt;section id&#x3D;&quot;snippet-2&quot; className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-70px] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[70px] !relative&quot;&gt;
            &lt;div
              className&#x3D;&quot;btn btn-circle btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !absolute counter-wrapper  flex-col max-md:!hidden xl:!flex lg:!flex md:!flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%] z-10&quot;
              style&#x3D;&lbrace;&lbrace;
                top: &quot;50%&quot;,
                left: &quot;50%&quot;,
                transform: &quot;translate(-50%, -50%)&quot;,
                width: 170,
                height: 170,
              &rbrace;&rbrace;
            &gt;
              &lt;h3 className&#x3D;&quot;!text-white !mb-1 !mt-[-0.5rem] relative z-[3]&quot;&gt;
                &lt;span className&#x3D;&quot;counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] leading-none !mb-2 xl:!text-[2.2rem] &quot;&gt;
                  &lt;Counter max&#x3D;&lbrace;20&rbrace; &#x2F;&gt;+
                &lt;&#x2F;span&gt;
              &lt;&#x2F;h3&gt;
              &lt;p className&#x3D;&quot;!text-[0.8rem] font-medium !mb-0&quot;&gt;
                Year Experience
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-12.5px] !mt-[-25px] items-center&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 xl:!ml-[16.66666667%] lg:w-10&#x2F;12 lg:!ml-[16.66666667%] md:w-10&#x2F;12 md:!ml-[16.66666667%] w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]&quot;&gt;
                    &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;rounded-[0.4rem]&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;ab1.jpg&quot;
                        srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;ab1@2x.jpg 2x&quot;
                        alt&#x3D;&quot;image&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;figure&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
                  &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]&quot;&gt;
                    &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;rounded-[0.4rem]&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;ab2.jpg&quot;
                        srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;ab2@2x.jpg 2x&quot;
                        alt&#x3D;&quot;image&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;figure&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]&quot;&gt;
                &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;rounded-[0.4rem]&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;ab3.jpg&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;ab3@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                  &#x2F;&gt;
                &lt;&#x2F;figure&gt;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[70px]&quot;&gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 512 390.3&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;handshake.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4&quot;
            &gt;
              &lt;path
                className&#x3D;&quot;lineal-stroke&quot;
                d&#x3D;&quot;M508.4 133.5L378.5 3.7c-4.9-4.9-12.8-4.9-17.6 0l-73.1 73.1-14.4-14.4c-4.9-4.9-12.8-4.9-17.6 0l-22.9 22.9-81.8-81.6c-4.9-4.9-12.8-4.9-17.6 0L3.7 133.5c-4.9 4.9-4.9 12.8 0 17.6L85.6 233c4.9 4.9 12.8 4.9 17.6 0l52.1-52.1 26.5 26.5c.3.3.6.6 1 .9 5 4 12.2 3.7 16.7-.9L256 151l120.7 120.6-13 13-103.6-103.4c-4.9-4.9-12.8-4.9-17.6 0-.3.3-.6.6-.9 1-4 5-3.7 12.2.9 16.7l123.8 123.8-13 13-123.8-123.9c-5-4.7-12.9-4.6-17.6.4-4.6 4.8-4.6 12.4 0 17.2L315.3 333l-13 13-7.7-7.7-95.9-95.8c-4.5-4.5-11.7-4.9-16.7-.9-.4.3-.7.5-1 .9-1.2 1.2-2.1 2.6-2.7 4.1-.3.7-.5 1.5-.7 2.3-.1.4-.1.8-.2 1.2-.4 3.7 1 7.4 3.6 10l43.5 43.5 43.5 43.5-13 13-115-115c-4.9-4.9-12.8-4.9-17.6 0-4.9 4.9-4.9 12.8 0 17.6l123.8 123.9c4.9 4.9 12.8 4.9 17.6 0l21.9-21.9 7.7 7.7c4.8 4.9 12.7 4.9 17.6 0l21.9-21.9 11.5 11.5c4.9 4.9 12.8 4.9 17.6 0l30.7-30.7c4.9-4.9 4.9-12.8 0-17.6l-11.5-11.5 21.9-21.9c4.9-4.9 4.9-12.8 0-17.6L264.8 124.5c-4.9-4.9-12.8-4.9-17.6 0l-56.6 56.6-9.2-9.2 83.1-83.1 14.4 14.4 3.1 3.2.4.4 126.3 126.3c4.9 4.9 12.8 4.9 17.6 0l81.9-81.9c5-4.9 5-12.8.2-17.7z&quot;
              &#x2F;&gt;
              &lt;path
                className&#x3D;&quot;lineal-fill&quot;
                d&#x3D;&quot;M30.106 142.324L142.323 30.107 206.6 94.382 94.382 206.6zm275.29-47.939l64.276-64.276 112.216 112.217-64.275 64.276z&quot;
              &#x2F;&gt;
            &lt;&#x2F;svg&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-5&quot;&gt;
              We are a creative company that focuses on establishing long-term
              relationships with customers.
            &lt;&#x2F;h3&gt;
            &lt;p className&#x3D;&quot;!mb-7&quot;&gt;
              Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum
              nulla sed consectetur. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet. Vestibulum id ligula porta felis
              euismod semper. Vestibulum id ligula.
            &lt;&#x2F;p&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] counter-wrapper !mt-[-30px]&quot;&gt;
              &lbrace;facts.slice(0, 3).map((elm, i) &#x3D;&gt; (
                &lt;div
                  key&#x3D;&lbrace;i&rbrace;
                  className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;
                &gt;
                  &lt;h3 className&#x3D;&quot;counter !text-[#3f78e0] xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2&quot;&gt;
                    &lt;Counter max&#x3D;&lbrace;7518&rbrace; &#x2F;&gt;
                  &lt;&#x2F;h3&gt;
                  &lt;p className&#x3D;&quot;!text-[0.8rem] font-medium !mb-0&quot;&gt;
                    &lbrace;elm.description&rbrace;
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              ))&rbrace;

              &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;

      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
    &lt;&#x2F;section&gt;
  );
&rbrace;    
    `}
      />
      <About3 />
      <CodeSnippet
        code={`
import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;
import &lbrace; facts &rbrace; from &quot;@&#x2F;data&#x2F;facts&quot;;

import React from &quot;react&quot;;

export default function About3() &lbrace;
  return (
    &lt;section
      id&#x3D;&quot;snippet-3&quot;
      className&#x3D;&quot;wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid&quot;
    &gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-2 lg:pb-2 md:pb-[5rem]&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
            &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
              &lt;img
                className&#x3D;&quot;rounded-[0.4rem]&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about5@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about5.jpg&quot;
                width&#x3D;&lbrace;1200&rbrace;
                height&#x3D;&lbrace;650&rbrace;
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
                &lt;div
                  className&#x3D;&quot;card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 !text-white !mt-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2&#x2F;4 lg:-translate-y-2&#x2F;4 bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0&quot;
                  style&#x3D;&lbrace;&lbrace;
                    backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg2.jpg)&quot;,
                  &rbrace;&rbrace;
                &gt;
                  &lt;div className&#x3D;&quot;card-body p-[2.25rem] xl:!p-[2.5rem]&quot;&gt;
                    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-20px] !text-center&quot;&gt;
                      &lbrace;facts.map((item, index) &#x3D;&gt; (
                        &lt;div
                          key&#x3D;&lbrace;index&rbrace;
                          className&#x3D;&quot;w-6&#x2F;12 xl:w-3&#x2F;12 lg:w-3&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]&quot;
                        &gt;
                          &lt;h3 className&#x3D;&quot;counter counter-lg !text-white xl:!text-[2.2rem] !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2&quot;&gt;
                            &lt;Counter max&#x3D;&lbrace;item.number&rbrace; &#x2F;&gt;
                          &lt;&#x2F;h3&gt;
                          &lt;p className&#x3D;&quot;!text-[0.8rem] font-medium !mb-0 !text-white&quot;&gt;
                            &lbrace;item.description&rbrace;
                          &lt;&#x2F;p&gt;
                        &lt;&#x2F;div&gt;
                      ))&rbrace;
                      &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
                    &lt;&#x2F;div&gt;
                    &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.card *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;

        &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;

      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
    &lt;&#x2F;section&gt;
  );
&rbrace;  
  `}
      />
      <section id="snippet-4" className="wrapper !bg-[#ffffff]  ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <Features1 />
        </div>
      </section>
      <CodeSnippet
        code={`
import React from &quot;react&quot;;

export default function Features() &lbrace;
  return (
    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center&quot;&gt;
      &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative xl:!order-2 lg:!order-2&quot;&gt;
        &lt;div
          className&#x3D;&quot;shape bg-dot primary bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] rellax !w-[6rem] !h-[10rem] absolute z-[1] opacity-50&quot;
          data-rellax-speed&#x3D;&lbrace;1&rbrace;
          style&#x3D;&lbrace;&lbrace; top: &quot;3rem&quot;, left: &quot;5.5rem&quot; &rbrace;&rbrace;
        &#x2F;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap !relative overlap-grid-2&quot;&gt;
          &lt;div className&#x3D;&quot;item xl:w-[70%] xl:z-[3] xl:ml-[30%] xl:!mt-0 lg:w-[70%] lg:z-[3] lg:ml-[30%] lg:!mt-0 md:w-[70%] md:z-[3] md:ml-[30%] md:!mt-0&quot;&gt;
            &lt;figure className&#x3D;&quot;!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative&quot;&gt;
              &lt;img
                className&#x3D;&quot;!rounded-[.4rem]&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about2@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about2.jpg&quot;
                width&#x3D;&lbrace;450&rbrace;
                height&#x3D;&lbrace;450&rbrace;
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;item xl:w-[55%] xl:!mt-[-45%] xl:z-[4] xl:ml-0 lg:w-[55%] lg:!mt-[-45%] lg:z-[4] lg:ml-0 md:w-[55%] md:!mt-[-45%] md:z-[4] md:ml-0&quot;&gt;
            &lt;figure className&#x3D;&quot;!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative&quot;&gt;
              &lt;img
                className&#x3D;&quot;!rounded-[.4rem]&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about3@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about3.jpg&quot;
                width&#x3D;&lbrace;450&rbrace;
                height&#x3D;&lbrace;450&rbrace;
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
      &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
        &lt;svg
          xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
          viewBox&#x3D;&quot;0 0 409.6 362.5&quot;
          data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;megaphone.svg&quot;
          className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4&quot;
        &gt;
          &lt;path
            className&#x3D;&quot;lineal-stroke&quot;
            d&#x3D;&quot;M343.4 302.9L61 302.5c-25.3-.2-47.5-16.8-54.8-40.9l-3.9-12.9c-7.1-24.2 2.5-50.3 23.5-64.2L262.1 29.8c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.3 249.8c2.4 6.4-.9 13.5-7.3 15.8-1.3.5-2.8.7-4.2.7zM261.8 59.4L39.3 205c-12 7.9-17.4 22.8-13.4 36.6l3.8 12.9c4.2 13.8 16.8 23.3 31.2 23.4l265.8.4-64.9-218.9z&quot;
          &#x2F;&gt;
          &lt;path
            className&#x3D;&quot;lineal-stroke&quot;
            d&#x3D;&quot;M138 362.5c-40.4 0-72.8-31.1-73.6-70.8 0-6.8 5.5-12.3 12.3-12.3 6.6 0 12.1 5.2 12.3 11.8.6 26.2 22.1 46.7 49 46.7 14.2 0 27.7-6.2 37-16.9 4.5-5.1 12.2-5.7 17.4-1.2 5.1 4.5 5.7 12.2 1.2 17.4-14 16.1-34.3 25.3-55.6 25.3z&quot;
          &#x2F;&gt;
          &lt;path
            className&#x3D;&quot;lineal-fill&quot;
            d&#x3D;&quot;M183.4 96l57.8 194.5 102.1.1-74.5-250.5L183.4 96z&quot;
          &#x2F;&gt;
          &lt;path
            className&#x3D;&quot;lineal-stroke&quot;
            d&#x3D;&quot;M343.4 302.9l-102.1-.1c-5.4 0-10.2-3.6-11.8-8.8L171.6 99.5c-1.6-5.2.5-10.8 5.1-13.8l85.4-55.9c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.5 250.6c1.9 6.5-1.8 13.4-8.3 15.3-1.1.2-2.3.4-3.4.4zm-92.9-24.7l76.4.1-65.1-218.9-63.9 41.8 52.6 177z&quot;
          &#x2F;&gt;
          &lt;path
            className&#x3D;&quot;lineal-stroke&quot;
            d&#x3D;&quot;M351.8 330.6c-5.4 0-10.2-3.6-11.8-8.8l-91-306c-2.1-6.5 1.3-13.4 7.8-15.6 6.5-2.1 13.4 1.3 15.6 7.8.1.3.2.5.2.8l91 305.9c1.9 6.5-1.8 13.4-8.3 15.3-1.1.4-2.3.6-3.5.6zM338 91.7c-6.8 0-12.3-5.5-12.3-12.3 0-1.8.4-3.6 1.2-5.3l13.4-28.5c2.9-6.2 10.2-8.8 16.4-5.9 6.2 2.9 8.8 10.2 5.9 16.4l-13.4 28.5c-2.1 4.3-6.4 7.1-11.2 7.1zm28.2 64.9c-6.8 0-12.3-5.5-12.3-12.3 0-5.7 3.9-10.6 9.4-12l31.1-7.5c6.6-1.5 13.2 2.6 14.7 9.3 1.5 6.5-2.5 13-9 14.7l-31.2 7.4c-.8.3-1.8.4-2.7.4zm29.1 90c-2.7 0-5.4-.9-7.5-2.6l-24.9-19.4c-5.4-4.2-6.3-11.9-2.2-17.3s11.9-6.3 17.3-2.2l24.9 19.4c5.4 4.2 6.3 11.9 2.1 17.3-2.3 3-5.9 4.7-9.7 4.8z&quot;
          &#x2F;&gt;
        &lt;&#x2F;svg&gt;
        &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
          Who Are We?
        &lt;&#x2F;h2&gt;
        &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium&quot;&gt;
          We are a digital and branding company that believes in the power of
          creative strategy and along with great design.
        &lt;&#x2F;p&gt;
        &lt;p className&#x3D;&quot;!mb-6&quot;&gt;
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et.
        &lt;&#x2F;p&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-15px] xl:mx-[-20px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full&quot;&gt;
            &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary !mb-0&quot;&gt;
              &lt;li className&#x3D;&quot;relative !pl-6&quot;&gt;
                &lt;span&gt;
                  &lt;i className&#x3D;&quot;uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell absolute left-0&quot; &#x2F;&gt;
                &lt;&#x2F;span&gt;
                &lt;span&gt;Aenean eu leo quam ornare curabitur blandit tempus.&lt;&#x2F;span&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;relative !pl-6 !mt-3&quot;&gt;
                &lt;span&gt;
                  &lt;i className&#x3D;&quot;uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell absolute left-0&quot; &#x2F;&gt;
                &lt;&#x2F;span&gt;
                &lt;span&gt;
                  Nullam quis risus eget urna mollis ornare donec elit.
                &lt;&#x2F;span&gt;
              &lt;&#x2F;li&gt;
            &lt;&#x2F;ul&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full&quot;&gt;
            &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary !mb-0&quot;&gt;
              &lt;li className&#x3D;&quot;relative !pl-6&quot;&gt;
                &lt;span&gt;
                  &lt;i className&#x3D;&quot;uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell absolute left-0&quot; &#x2F;&gt;
                &lt;&#x2F;span&gt;
                &lt;span&gt;Etiam porta sem malesuada magna mollis euismod.&lt;&#x2F;span&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;relative !pl-6 !mt-3&quot;&gt;
                &lt;span&gt;
                  &lt;i className&#x3D;&quot;uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell absolute left-0&quot; &#x2F;&gt;
                &lt;&#x2F;span&gt;
                &lt;span&gt;Fermentum massa vivamus faucibus amet euismod.&lt;&#x2F;span&gt;
              &lt;&#x2F;li&gt;
            &lt;&#x2F;ul&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
    &lt;&#x2F;div&gt;
  );
&rbrace;        
        `}
      />
      <About4 />
      <CodeSnippet
        code={`

import React from &quot;react&quot;;

export default function About4() &lbrace;
  return (
    &lt;section id&#x3D;&quot;snippet-5&quot; className&#x3D;&quot;wrapper !bg-[#ffffff]  &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2&quot;&gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;w-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i2@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i2.png&quot;
                width&#x3D;&lbrace;800&rbrace;
                height&#x3D;&lbrace;538&rbrace;
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase text-line relative align-top !pl-[1.4rem] inline-flex !tracking-[0.02rem] !leading-[1.35] before:content-[&#39;&#39;] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2&#x2F;4 before:bg-[#3f78e0] !text-[#3f78e0] !mb-3&quot;&gt;
              Why Choose Us?
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-7&quot;&gt;
              A few reasons why our valued customers choose us.
            &lt;&#x2F;h3&gt;
            &lt;div className&#x3D;&quot;accordion accordion-wrapper&quot; id&#x3D;&quot;accordionExample&quot;&gt;
              &lt;div className&#x3D;&quot;card plain accordion-item&quot;&gt;
                &lt;div
                  className&#x3D;&quot;card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit&quot;
                  id&#x3D;&quot;headingOne&quot;
                &gt;
                  &lt;button
                    className&#x3D;&quot;accordion-button !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]&quot;
                    data-bs-toggle&#x3D;&quot;collapse&quot;
                    data-bs-target&#x3D;&quot;#collapseOne&quot;
                    aria-expanded&#x3D;&quot;true&quot;
                    aria-controls&#x3D;&quot;collapseOne&quot;
                  &gt;
                    Professional Design
                  &lt;&#x2F;button&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.card-header *&#x2F;&rbrace;
                &lt;div
                  id&#x3D;&quot;collapseOne&quot;
                  className&#x3D;&quot;accordion-collapse collapse show&quot;
                  aria-labelledby&#x3D;&quot;headingOne&quot;
                  data-bs-parent&#x3D;&quot;#accordionExample&quot;
                &gt;
                  &lt;div className&#x3D;&quot;card-body !p-[0_0_0_1.1rem]&quot;&gt;
                    &lt;p&gt;
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.accordion-collapse *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.accordion-item *&#x2F;&rbrace;
              &lt;div className&#x3D;&quot;card plain accordion-item&quot;&gt;
                &lt;div
                  className&#x3D;&quot;card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit&quot;
                  id&#x3D;&quot;headingTwo&quot;
                &gt;
                  &lt;button
                    className&#x3D;&quot;collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]&quot;
                    data-bs-toggle&#x3D;&quot;collapse&quot;
                    data-bs-target&#x3D;&quot;#collapseTwo&quot;
                    aria-expanded&#x3D;&quot;false&quot;
                    aria-controls&#x3D;&quot;collapseTwo&quot;
                  &gt;
                    Top-Notch Support
                  &lt;&#x2F;button&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.card-header *&#x2F;&rbrace;
                &lt;div
                  id&#x3D;&quot;collapseTwo&quot;
                  className&#x3D;&quot;accordion-collapse collapse&quot;
                  aria-labelledby&#x3D;&quot;headingTwo&quot;
                  data-bs-parent&#x3D;&quot;#accordionExample&quot;
                &gt;
                  &lt;div className&#x3D;&quot;card-body !p-[0_0_0_1.1rem]&quot;&gt;
                    &lt;p&gt;
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.accordion-collapse *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.accordion-item *&#x2F;&rbrace;
              &lt;div className&#x3D;&quot;card plain accordion-item&quot;&gt;
                &lt;div
                  className&#x3D;&quot;card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit&quot;
                  id&#x3D;&quot;headingThree&quot;
                &gt;
                  &lt;button
                    className&#x3D;&quot;collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]&quot;
                    data-bs-toggle&#x3D;&quot;collapse&quot;
                    data-bs-target&#x3D;&quot;#collapseThree&quot;
                    aria-expanded&#x3D;&quot;false&quot;
                    aria-controls&#x3D;&quot;collapseThree&quot;
                  &gt;
                    Header and Slider Options
                  &lt;&#x2F;button&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.card-header *&#x2F;&rbrace;
                &lt;div
                  id&#x3D;&quot;collapseThree&quot;
                  className&#x3D;&quot;accordion-collapse collapse&quot;
                  aria-labelledby&#x3D;&quot;headingThree&quot;
                  data-bs-parent&#x3D;&quot;#accordionExample&quot;
                &gt;
                  &lt;div className&#x3D;&quot;card-body !p-[0_0_0_1.1rem]&quot;&gt;
                    &lt;p&gt;
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.accordion-collapse *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.accordion-item *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;.accordion *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;section&gt;
  );
&rbrace;      
      `}
      />
      <About5 />
      <CodeSnippet
        code={`
import ProgressBarComponent from &quot;@&#x2F;components&#x2F;common&#x2F;ProgressBar&quot;;
import &lbrace; skills2 &rbrace; from &quot;@&#x2F;data&#x2F;progress&quot;;

import React from &quot;react&quot;;

export default function About5() &lbrace;
  return (
    &lt;section id&#x3D;&quot;snippet-6&quot; className&#x3D;&quot;wrapper !bg-[#ffffff]  &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-24 lg:!mb-24 md:!mb-24 items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;w-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i8@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i8.png&quot;
                width&#x3D;&lbrace;800&rbrace;
                height&#x3D;&lbrace;559&rbrace;
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-6 xxl:!pr-6&quot;&gt;
              We bring rapid solutions to make the life of our customers easier.
            &lt;&#x2F;h3&gt;
            &lt;ul className&#x3D;&quot;progress-list !mt-3 m-0 p-0&quot;&gt;
              &lbrace;skills2.map((skill, index) &#x3D;&gt; (
                &lt;li key&#x3D;&lbrace;index&rbrace; className&#x3D;&quot;!mb-4&quot;&gt;
                  &lt;p className&#x3D;&quot;!mb-1&quot;&gt;&lbrace;skill.name&rbrace;&lt;&#x2F;p&gt;
                  &lt;div className&#x3D;&lbrace;&#x60;progressbar line relative $&lbrace;skill.color&rbrace;&#x60;&rbrace;&gt;
                    &lt;ProgressBarComponent max&#x3D;&lbrace;skill.value&rbrace; &#x2F;&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;li&gt;
              ))&rbrace;
            &lt;&#x2F;ul&gt;
            &lbrace;&#x2F;* &#x2F;.progress-list *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;section&gt;
  );
&rbrace;        
        `}
      />

      <section id="snippet-7" className="wrapper !bg-[#ffffff]  ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <VideoSection />
        </div>
      </section>

      <CodeSnippet
        code={`
        import ModalVideo from &quot;@&#x2F;components&#x2F;common&#x2F;ModalVideo&quot;;
        import React, &lbrace; useState &rbrace; from &quot;react&quot;;
        
        
        import &lbrace; skills &rbrace; from &quot;@&#x2F;data&#x2F;progress&quot;;
        import ProgressBarComponent from &quot;@&#x2F;components&#x2F;common&#x2F;ProgressBar&quot;;
        export default function VideoSection() &lbrace;
          const [isOpen, setIsOpen] &#x3D; useState(false);
          return (
            &lt;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] items-center !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]&quot;&gt;
                &lt;div className&#x3D;&quot;md:w-8&#x2F;12 lg:w-6&#x2F;12 xl:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full !relative !mt-[80px]&quot;&gt;
                  &lt;a
                    className&#x3D;&quot;btn btn-circle btn-aqua !text-[#343f52] !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] focus:!text-white active:!text-[#343f52] active:bg-[#54a8c7] active:border-[#54a8c7] disabled:text-white disabled:bg-[#54a8c7] disabled:border-[#54a8c7] btn-play ripple !mx-auto !mb-5 !absolute xl:!text-[2.3rem] !text-[calc(1.355rem_+_1.26vw)] w-[3.5rem] h-[3.5rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] before:!bg-[#54a8c7] after:!bg-[#54a8c7] before:content-[&#39;&#39;] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:content-[&#39;&#39;] after:block after:absolute after:z-[-1] after:rounded-[50%] after:inset-0 after:[animation-delay:.5s]&quot;
                    style&#x3D;&lbrace;&lbrace;
                      top: &quot;50%&quot;,
                      left: &quot;50%&quot;,
                      transform: &quot;translate(-50%, -50%)&quot;,
                      zIndex: 3,
                    &rbrace;&rbrace;
                    onClick&#x3D;&lbrace;() &#x3D;&gt; setIsOpen(true)&rbrace;
                  &gt;
                    &lt;i className&#x3D;&quot;icn-caret-right !ml-[0.15rem] !relative z-[2] before:content-[&#39;\e900&#39;] !text-[calc(1.355rem_+_1.26vw)]&quot; &#x2F;&gt;
                  &lt;&#x2F;a&gt;
                  &lt;div
                    className&#x3D;&quot;shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block !absolute z-[1]&quot;
                    data-rellax-speed&#x3D;&lbrace;0&rbrace;
                    style&#x3D;&lbrace;&lbrace;
                      bottom: &quot;-1.8rem&quot;,
                      right: &quot;-1.5rem&quot;,
                      width: &quot;85%&quot;,
                      height: &quot;90%&quot;,
                    &rbrace;&rbrace;
                  &#x2F;&gt;
                  &lt;figure className&#x3D;&quot;!rounded-[.4rem] relative z-[2]&quot;&gt;
                    &lt;img
                      className&#x3D;&quot;!rounded-[.4rem]&quot;
                      srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about12@2x.jpg 2x&quot;
                      alt&#x3D;&quot;image&quot;
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about12.jpg&quot;
                      width&#x3D;&lbrace;650&rbrace;
                      height&#x3D;&lbrace;520&rbrace;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
                &lt;div className&#x3D;&quot;lg:w-5&#x2F;12 xl:w-4&#x2F;12 xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full !mt-[80px]&quot;&gt;
                  &lt;h3 className&#x3D;&quot;xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] font-DMSerif !font-normal tracking-normal !mb-3 [word-spacing:normal!important]&quot;&gt;
                    Sandbox Brings Awesomeness
                  &lt;&#x2F;h3&gt;
                  &lt;p className&#x3D;&quot;lead text-[1.05rem] !leading-[1.6] !mb-6&quot;&gt;
                    We have considered our solutions to
                    &lt;span className&#x3D;&quot;relative z-[2] whitespace-nowrap after:content-[&#39;&#39;] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(84,168,199,.12)]&quot;&gt;
                      support every stage
                    &lt;&#x2F;span&gt;
                    of your growth.
                  &lt;&#x2F;p&gt;
                  &lt;ul className&#x3D;&quot;progress-list m-0 p-0 list-none&quot;&gt;
                    &lbrace;skills.map((skill, index) &#x3D;&gt; (
                      &lt;li key&#x3D;&lbrace;index&rbrace; className&#x3D;&quot;!mb-[1rem]&quot;&gt;
                        &lt;p className&#x3D;&quot;!mb-[.25rem]&quot;&gt;&lbrace;skill.name&rbrace;&lt;&#x2F;p&gt;
                        &lt;div className&#x3D;&quot;progressbar line relative aqua&quot;&gt;
                          &lt;ProgressBarComponent max&#x3D;&lbrace;skill.value&rbrace; &#x2F;&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;li&gt;
                    ))&rbrace;
                  &lt;&#x2F;ul&gt;
                  &lbrace;&#x2F;* &#x2F;.progress-list *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;&lbrace;&quot; &quot;&rbrace;
              &lt;ModalVideo
                isOpen&#x3D;&lbrace;isOpen&rbrace;
                setIsOpen&#x3D;&lbrace;setIsOpen&rbrace;
                src&#x3D;&lbrace;&quot;&#x2F;assets&#x2F;media&#x2F;movie.mp4&quot;&rbrace;
              &#x2F;&gt;&lbrace;&quot; &quot;&rbrace;
            &lt;&#x2F;&gt;
          );
        &rbrace;  
        `}
      />
      <section id="snippet-8" className="wrapper !bg-[#ffffff]  ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <Features2 />
        </div>
      </section>

      <CodeSnippet
        code={`
import React from &quot;react&quot;;

export default function Features2() {
  return (
    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] items-center !mt-[7rem]&quot;&gt;
      &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !mt-[80px]&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
          &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
            &lt;figure className&#x3D;&quot;!rounded-[.4rem] xl:!mx-5 lg:!mx-5 md:!mx-5&quot;&gt;
              &lt;img
                className&#x3D;&quot;!rounded-[.4rem]&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g8@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g8.jpg&quot;
                width&#x3D;{1120}
                height&#x3D;{570}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
            &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
              &lt;img
                className&#x3D;&quot;rounded-[0.4rem]&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g9@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g9.jpg&quot;
                width&#x3D;{293}
                height&#x3D;{260}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
            &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
              &lt;img
                className&#x3D;&quot;rounded-[0.4rem]&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g10@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g10.jpg&quot;
                width&#x3D;{293}
                height&#x3D;{235}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;column *&#x2F;}
      &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !mt-[80px]&quot;&gt;
        &lt;h2 className&#x3D;&quot;!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]&quot;&gt;
          What Makes Us Different?
        &lt;&#x2F;h2&gt;
        &lt;h3 className&#x3D;&quot;xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-8&quot;&gt;
          We bring
          &lt;span className&#x3D;&quot;!relative z-[2] after:content-[&#39;&#39;] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2&#x2F;4 after:left-2&#x2F;4 style-2 yellow&quot;&gt;
            solutions
          &lt;&#x2F;span&gt;
          to make life easier for our customers.
        &lt;&#x2F;h3&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 256 256&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;lamp.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] solid-mono text-[#e668b3] text-fuchsia !mr-4&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M128 36.86a8 8 0 01-8-8V8a8 8 0 0116 0v20.86a8 8 0 01-8 8zm70.1 29.04a8 8 0 01-5.67-13.64l14.77-14.77a8 8 0 1111.31 11.31l-14.77 14.77a8 8 0 01-5.64 2.33zM248 136h-20.86a8 8 0 010-16H248a8 8 0 010 16zm-35.15 84.85a8.06 8.06 0 01-5.67-2.34l-14.76-14.77a8 8 0 0111.31-11.31l14.77 14.77a8 8 0 010 11.31 7.92 7.92 0 01-5.65 2.34zm-169.7 0a8 8 0 01-5.66-13.65l14.77-14.77a8 8 0 0111.31 11.31L48.8 218.51a7.93 7.93 0 01-5.65 2.34zM28.86 136H8a8 8 0 010-16h20.86a8 8 0 110 16zM57.9 65.9a8 8 0 01-5.66-2.33L37.47 48.8a8 8 0 1111.31-11.31l14.77 14.77A8 8 0 0157.9 65.9z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M160 224v13.33A18.76 18.76 0 01141.33 256h-26.67c-9 0-18.66-6.83-18.66-21.76V224zm15-154a74.93 74.93 0 00-63-15c-28.27 5.91-51.2 29-57.07 57.21a74.74 74.74 0 0028.16 75.41A32.19 32.19 0 0195.25 208v.12A2 2 0 0196 208h64a.93.93 0 01.53.11V208c1.49-8.11 6.29-15.57 13.65-21.33A74.72 74.72 0 00175 70zm-7 63.36a8.06 8.06 0 01-8-8A29.32 29.32 0 00130.67 96a8 8 0 110-16A45.43 45.43 0 01176 125.33a8.06 8.06 0 01-8 8z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M95.25 208H96a1.8 1.8 0 00-.75.11z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M160.53 208v.11a.93.93 0 00-.53-.11z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Creativity&lt;&#x2F;h4&gt;
                &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                  Curabitur blandit lacus porttitor ridiculus mus.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 256 255.98&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;bulb.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] solid-mono text-[#a07cc5] text-violet !mr-4&quot;
                &gt;
                  &lt;circle
                    className&#x3D;&quot;fill-primary&quot;
                    cx&#x3D;&quot;58.67&quot;
                    cy&#x3D;&quot;149.31&quot;
                    r&#x3D;{32}
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M88 202.65H29.33A29.36 29.36 0 000 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16A29.36 29.36 0 0088 202.65z&quot;
                  &#x2F;&gt;
                  &lt;circle
                    className&#x3D;&quot;fill-primary&quot;
                    cx&#x3D;&quot;197.33&quot;
                    cy&#x3D;&quot;149.31&quot;
                    r&#x3D;{32}
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M226.67 202.65H168A29.36 29.36 0 00138.67 232v16a8 8 0 008 8H248a8 8 0 008-8v-16a29.36 29.36 0 00-29.33-29.35z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M149.76 108.48v7.68A11.9 11.9 0 01137.81 128h-19.63c-5.76 0-12-4.27-12-13.76v-5.76zM176 47.68a47.26 47.26 0 01-17.6 36.91 22.89 22.89 0 00-8.32 13.23H106a20 20 0 00-7.79-12.69A47.13 47.13 0 0180 46.73C80.53 21.34 101.76.33 127.25 0a47.34 47.34 0 0134.56 13.88A46.82 46.82 0 01176 47.68z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Innovative Thinking&lt;&#x2F;h4&gt;
                &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                  Curabitur blandit lacus porttitor ridiculus mus.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 255.97 256&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;puzzle.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] solid-mono text-[#f78b77] text-orange !mr-4&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M221.86 91a33.65 33.65 0 01-22.72-8.75v40.21h-27.2a43.26 43.26 0 003.73-17.71 44.8 44.8 0 10-86 17.71H56.85v-111A11.42 11.42 0 0168.26 0h119.47a11.42 11.42 0 0111.41 11.41v20.05A34.1 34.1 0 11221.86 91z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M142.79 181.25a34.13 34.13 0 0033.55 40.62 33.66 33.66 0 0022.75-8.77v31.52A11.41 11.41 0 01187.72 256H68.28a11.41 11.41 0 01-11.38-11.38V213.1a34.12 34.12 0 11-22.75-59.5 33.71 33.71 0 0122.75 8.77v-29.2H112a34.12 34.12 0 1137.76 0h49.37v29.2a34.09 34.09 0 00-56.3 18.88z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Rapid Solutions&lt;&#x2F;h4&gt;
                &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                  Curabitur blandit lacus porttitor ridiculus mus.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 256 244.09&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;headphone.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] solid-mono text-[#45c4a0] text-green !mr-4&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M35.72 92.28a92.28 92.28 0 01184.56 0v47.63a8.93 8.93 0 01-17.86 0V92.28a74.42 74.42 0 10-148.84 0v47.63a8.93 8.93 0 11-17.86 0zm175.63 62.51a8.93 8.93 0 018.93 8.93v35.72a32.75 32.75 0 01-32.75 32.75h-35.72a8.94 8.94 0 010-17.87h35.72a14.88 14.88 0 0014.89-14.88v-35.72a8.93 8.93 0 018.93-8.93z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M107.16 223.26A20.84 20.84 0 01128 202.42h11.91a20.84 20.84 0 010 41.67H128a20.84 20.84 0 01-20.84-20.83zm20.84-3a3 3 0 100 5.95h11.91a3 3 0 000-5.95z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M32.74 107.16A32.74 32.74 0 000 139.91v23.81a32.75 32.75 0 0032.74 32.75h11.91a8.93 8.93 0 008.93-8.94v-71.44a8.93 8.93 0 00-8.93-8.93zm190.52 0A32.74 32.74 0 01256 139.91v23.81a32.75 32.75 0 01-32.74 32.75h-11.91a8.93 8.93 0 01-8.93-8.94v-71.44a8.93 8.93 0 018.93-8.93z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Top-Notch Support&lt;&#x2F;h4&gt;
                &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                  Curabitur blandit lacus porttitor ridiculus mus.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;column *&#x2F;}
    &lt;&#x2F;div&gt;
  );
}        
        `}
      />

      <section id="snippet-9" className="wrapper !bg-[#ffffff]  ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <About6 />
        </div>
      </section>
      <CodeSnippet
        code={`
import ProgressCircle from &quot;@&#x2F;components&#x2F;common&#x2F;CircularProgress&quot;;
import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;
import { listFeatures } from &quot;@&#x2F;data&#x2F;features&quot;;

import React from &quot;react&quot;;

export default function About6() {
  return (
    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
      &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] xl:!order-2 lg:!order-2 !relative !mt-[50px]&quot;&gt;
        &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
          &lt;img
            className&#x3D;&quot;max-w-full h-auto rounded-[0.4rem]&quot;
            srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about27@2x.jpg 2x&quot;
            alt&#x3D;&quot;image&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about27.jpg&quot;
            width&#x3D;{625}
            height&#x3D;{590}
          &#x2F;&gt;
        &lt;&#x2F;figure&gt;
        &lt;div
          className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute xl:block lg:block md:block max-sm:!hidden&quot;
          style&#x3D;{{ top: &quot;15%&quot;, left: &quot;-7%&quot; }}
        &gt;
          &lt;div className&#x3D;&quot;card-body py-4 px-5&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-row items-center&quot;&gt;
              &lt;div&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 256 234.66&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;cloud-group.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia mr-3&quot;
                &gt;
                  &lt;circle
                    className&#x3D;&quot;fill-secondary&quot;
                    cx&#x3D;{128}
                    cy&#x3D;&quot;149.33&quot;
                    r&#x3D;&quot;21.33&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M162.67 234.66H93.34a8 8 0 01-8-8v-16a29.36 29.36 0 0129.33-29.33h26.67a29.35 29.35 0 0129.33 29.33v16a8 8 0 01-8 8zm32-64h-14.19a55.46 55.46 0 0116.85 40v2.67H216a8.06 8.06 0 008-8V200a29.32 29.32 0 00-29.33-29.34zm-133.34 0A29.31 29.31 0 0032 200v5.35a8.06 8.06 0 008 8h18.67v-2.67a55.46 55.46 0 0116.85-40z&quot;
                  &#x2F;&gt;
                  &lt;circle
                    className&#x3D;&quot;fill-secondary&quot;
                    cx&#x3D;&quot;74.67&quot;
                    cy&#x3D;&quot;138.66&quot;
                    r&#x3D;&quot;21.33&quot;
                  &#x2F;&gt;
                  &lt;circle
                    className&#x3D;&quot;fill-secondary&quot;
                    cx&#x3D;&quot;181.33&quot;
                    cy&#x3D;&quot;138.66&quot;
                    r&#x3D;&quot;21.33&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M27.2 162.94a52.21 52.21 0 018.8-6.56A42.48 42.48 0 01107.73 112a41 41 0 0140.54 0A42.48 42.48 0 01220 156.38a55.09 55.09 0 015.83 4 64.4 64.4 0 00-26.65-118.49A81.31 81.31 0 00128 0C90.19 0 57.39 26.3 49.1 62.18 21.54 65.07 0 88.22 0 116.26c0 19.93 11 37.21 27.2 46.68z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h3 className&#x3D;&quot;!text-[1.25rem] counter !leading-[1.4] !mb-0 whitespace-nowrap&quot;&gt;
                  &lt;Counter max&#x3D;{25000} &#x2F;&gt;+
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!text-[0.8rem] leading-normal !mb-0 whitespace-nowrap&quot;&gt;
                  Happy Clients
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.card-body *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.card *&#x2F;}
        &lt;div
          className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute !text-center xl:block lg:block md:block max-sm:!hidden&quot;
          style&#x3D;{{ bottom: &quot;10%&quot;, left: &quot;-10%&quot; }}
        &gt;
          &lt;div className&#x3D;&quot;card-body p-6&quot;&gt;
            &lt;div className&#x3D;&quot;progressbar semi-circle fuchsia !relative !mb-3 !m-[0_auto_1rem] !w-[8.5rem] !h-[4.25rem]&quot;&gt;
              &lt;ProgressCircle max&#x3D;{80} &#x2F;&gt;
            &lt;&#x2F;div&gt;
            &lt;h4 className&#x3D;&quot;!mb-0&quot;&gt;Time Saved&lt;&#x2F;h4&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.card-body *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.card *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;column *&#x2F;}
      &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
        &lt;h2 className&#x3D;&quot;!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3&quot;&gt;
          What Makes Us Different?
        &lt;&#x2F;h2&gt;
        &lt;h3 className&#x3D;&quot;xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-4 xl:mr-[-1.25rem] lg:mr-[-1.25rem]&quot;&gt;
          We make spending stress free so you have the perfect control.
        &lt;&#x2F;h3&gt;
        &lt;p className&#x3D;&quot;!mb-6&quot;&gt;
          Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
          nulla non metus auctor fringilla. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus.
          Integer posuere erat a ante venenatis dapibus posuere velit.
        &lt;&#x2F;p&gt;
        &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary&quot;&gt;
          {listFeatures.map((elm, i) &#x3D;&gt; (
            &lt;li key&#x3D;{i} className&#x3D;&quot;relative !pl-6&quot;&gt;
              &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
              {elm}
            &lt;&#x2F;li&gt;
          ))}
        &lt;&#x2F;ul&gt;
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;column *&#x2F;}
    &lt;&#x2F;div&gt;
  );
}        
        `}
      />
      <About />

      <CodeSnippet
        code={`
        
import React from &quot;react&quot;;

import { skills3 } from &quot;@&#x2F;data&#x2F;progress&quot;;
import ProgressBarComponent from &quot;@&#x2F;components&#x2F;common&#x2F;ProgressBar&quot;;
export default function About() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-30px] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;md:w-8&#x2F;12 lg:w-6&#x2F;12 xl:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mx-auto !mt-[30px]&quot;&gt;
            &lt;div className&#x3D;&quot;img-mask mask-1&quot;&gt;
              &lt;img
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about29.jpg&quot;
                width&#x3D;{610}
                height&#x3D;{610}
              &#x2F;&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
            &lt;h2 className&#x3D;&quot;xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] font-semibold !tracking-[normal] !mb-5&quot;&gt;
              Hi, I&#39;m Julia, a documentary wedding and couples photographer
              currently working from and based in London.
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;!mb-6&quot;&gt;
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et. Duis mollis, est non commodo luctus, nisi
              erat porttitor ligula, eget lacinia odio. Sed posuere consectetur
              est at lobortis facilisis in.
            &lt;&#x2F;p&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] counter-wrapper !mt-[-30px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;h3 className&#x3D;&quot;counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none font-semibold !mb-2&quot;&gt;
                  500K+
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!text-[0.8rem] font-medium !mb-0&quot;&gt;Shots Taken&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;h3 className&#x3D;&quot;counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none font-semibold !mb-2&quot;&gt;
                  500+
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!text-[0.8rem] font-medium !mb-0&quot;&gt;
                  Happy Clients
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;h3 className&#x3D;&quot;counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none font-semibold !mb-2&quot;&gt;
                  25
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!text-[0.8rem] font-medium !mb-0&quot;&gt;Awards Won&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-8&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
            &lt;h3 className&#x3D;&quot;!text-[1.15rem] !leading-[1.4] font-semibold&quot;&gt;
              My Skills
            &lt;&#x2F;h3&gt;
            &lt;p&gt;
              Etiam porta sem malesuada magna mollis euismod. Praesent commodo
              cursus magna vel consectetur purus sit amet fermentum.
            &lt;&#x2F;p&gt;
            &lt;ul className&#x3D;&quot;progress-list m-0 p-0 list-none&quot;&gt;
              {skills3.map((skill, index) &#x3D;&gt; (
                &lt;li key&#x3D;{index} className&#x3D;{skill.className}&gt;
                  &lt;p className&#x3D;&quot;!mb-[.25rem]&quot;&gt;{skill.name}&lt;&#x2F;p&gt;
                  &lt;div className&#x3D;&quot;progressbar line relative soft-leaf&quot;&gt;
                    &lt;ProgressBarComponent max&#x3D;{skill.value} &#x2F;&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;li&gt;
              ))}
            &lt;&#x2F;ul&gt;
            {&#x2F;* &#x2F;.progress-list *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
            &lt;h3 className&#x3D;&quot;!text-[1.15rem] !leading-[1.4] font-semibold&quot;&gt;
              Why Choose Me?
            &lt;&#x2F;h3&gt;
            &lt;p&gt;
              Vestibulum id ligula porta felis euismod semper. Cras mattis
              consectetur purus sit amet fermentum. Donec ullamcorper nulla non
              metus auctor fringilla. Nullam id dolor id nibh ultricies. Cras
              mattis consectetur purus amet fermentum.
            &lt;&#x2F;p&gt;
            &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-leaf !mb-0&quot;&gt;
              &lt;li className&#x3D;&quot;relative !pl-6&quot;&gt;
                &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e7f2ec] !text-[#7cb798] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                Aenean eu leo quam pellentesque.
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e7f2ec] !text-[#7cb798] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                Nullam quis risus eget urna mollis.
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e7f2ec] !text-[#7cb798] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                Donec id elit non mi porta gravida.
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e7f2ec] !text-[#7cb798] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                Fusce dapibus tellus ac commodo.
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e7f2ec] !text-[#7cb798] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                Cras justo odio dapibus ac facilisis in.
              &lt;&#x2F;li&gt;
            &lt;&#x2F;ul&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
            &lt;h3 className&#x3D;&quot;!text-[1.15rem] !leading-[1.4] font-semibold&quot;&gt;
              My Process
            &lt;&#x2F;h3&gt;
            &lt;div className&#x3D;&quot;flex flex-row !mb-5&quot;&gt;
              &lt;div&gt;
                &lt;span className&#x3D;&quot;icon btn btn-circle btn-soft-leaf pointer-events-none !mt-1 !mr-5 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]&quot;&gt;
                  &lt;span className&#x3D;&quot;number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0&quot;&gt;
                    1
                  &lt;&#x2F;span&gt;
                &lt;&#x2F;span&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h5 className&#x3D;&quot;!mb-1 !text-[.95rem] !leading-[1.5] !tracking-[normal] font-semibold&quot;&gt;
                  Collect Ideas
                &lt;&#x2F;h5&gt;
                &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                  Nulla vitae elit libero pharetra augue dapibus. Praesent
                  commodo cursus.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;flex flex-row !mb-5&quot;&gt;
              &lt;div&gt;
                &lt;span className&#x3D;&quot;icon btn btn-circle btn-soft-leaf pointer-events-none !mt-1 !mr-5 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]&quot;&gt;
                  &lt;span className&#x3D;&quot;number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0&quot;&gt;
                    2
                  &lt;&#x2F;span&gt;
                &lt;&#x2F;span&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h5 className&#x3D;&quot;!mb-1 !text-[.95rem] !leading-[1.5] !tracking-[normal] font-semibold&quot;&gt;
                  Data Analysis
                &lt;&#x2F;h5&gt;
                &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                  Vivamus sagittis lacus vel augue laoreet. Etiam porta sem
                  malesuada magna.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;span className&#x3D;&quot;icon btn btn-circle btn-soft-leaf pointer-events-none !mt-1 !mr-5 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]&quot;&gt;
                  &lt;span className&#x3D;&quot;number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0&quot;&gt;
                    3
                  &lt;&#x2F;span&gt;
                &lt;&#x2F;span&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h5 className&#x3D;&quot;!mb-1 !text-[.95rem] !leading-[1.5] !tracking-[normal] font-semibold&quot;&gt;
                  Finalize Product
                &lt;&#x2F;h5&gt;
                &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                  Cras mattis consectetur purus sit amet. Aenean lacinia
                  bibendum nulla sed.
                &lt;&#x2F;p&gt;
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
}        
        `}
      />
      <About7 />

      <CodeSnippet
        code={`
import React from &quot;react&quot;;

import { process } from &quot;@&#x2F;data&#x2F;process&quot;;
export default function About7() {
  return (
    &lt;section id&#x3D;&quot;about&quot;&gt;
      &lt;div className&#x3D;&quot;wrapper&quot;&gt;
        &lt;div className&#x3D;&quot;container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-30px] items-center&quot;&gt;
            &lt;div className&#x3D;&quot;md:w-8&#x2F;12 lg:w-6&#x2F;12 xl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 lg:!order-2 !mx-auto md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[30px]&quot;&gt;
              &lt;div className&#x3D;&quot;img-mask mask-2&quot;&gt;
                &lt;img
                  alt&#x3D;&quot;image&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about30.jpg&quot;
                  width&#x3D;{1000}
                  height&#x3D;{850}
                &#x2F;&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;column *&#x2F;}
            &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[30px]&quot;&gt;
              &lt;h2 className&#x3D;&quot;xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold !mb-3&quot;&gt;
                About Me
              &lt;&#x2F;h2&gt;
              &lt;p className&#x3D;&quot;lead !text-[1.1rem] !leading-[1.55] font-medium&quot;&gt;
                I&#39;m Caitlyn Sandbox, a photographer specializing in food, drink
                and product photography.
              &lt;&#x2F;p&gt;
              &lt;p&gt;
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa
                justo sit amet risus. Etiam porta sem malesuada magna mollis
                euismod. Vestibulum id ligula.
              &lt;&#x2F;p&gt;
              &lt;p&gt;
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Aenean lacinia bibendum nulla sed
                consectetur. Curabitur blandit tempus porttitor. Lorem ipsum
                dolor sit amet, consectetur.
              &lt;&#x2F;p&gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;btn btn-yellow !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
              &gt;
                Learn More
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-10 xl:!mt-16 lg:!mt-16 md:!mt-16&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px]&quot;&gt;
              &lt;h2 className&#x3D;&quot;xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold !mb-3&quot;&gt;
                My Working Process
              &lt;&#x2F;h2&gt;
              &lt;p&gt;
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Fusce dapibus, tellus ac cursus. Aenean eu leo quam.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
            &lt;div className&#x3D;&quot;xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px]&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px]&quot;&gt;
                {process.map((column, index) &#x3D;&gt; (
                  &lt;div
                    key&#x3D;{index}
                    className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px]&quot;
                  &gt;
                    &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                      &lt;div&gt;
                        &lt;span className&#x3D;&quot;icon btn btn-circle btn-yellow !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !mr-4 !mt-1 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]&quot;&gt;
                          &lt;span className&#x3D;&quot;number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0&quot;&gt;
                            {column.number}
                          &lt;&#x2F;span&gt;
                        &lt;&#x2F;span&gt;
                      &lt;&#x2F;div&gt;
                      &lt;div&gt;
                        &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;{column.title}&lt;&#x2F;h4&gt;
                        &lt;p className&#x3D;&quot;!mb-0&quot;&gt;{column.description}&lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                ))}
                {&#x2F;*&#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.row *&#x2F;}
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
}          
          `}
      />
      <section id="snippet-10" className="wrapper !bg-[#ffffff]  ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <Features />
        </div>
      </section>

      <CodeSnippet
        code={`
import React from &quot;react&quot;;

export default function Features() {
  return (
    &lt;&gt;
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
        &lt;div className&#x3D;&quot;md:w-11&#x2F;12 lg:w-9&#x2F;12 xl:w-8&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative&quot;&gt;
          &lt;img
            className&#x3D;&quot;!h-[3rem] absolute hidden xl:block lg:block&quot;
            style&#x3D;{{ top: &quot;-20%&quot;, right: &quot;-12%&quot; }}
            alt&#x3D;&quot;image&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle3.svg&quot;
            width&#x3D;{85}
            height&#x3D;{82}
          &#x2F;&gt;
          &lt;img
            className&#x3D;&quot;!h-[7rem] absolute hidden xl:block lg:block&quot;
            style&#x3D;{{ bottom: &quot;5%&quot;, left: &quot;-17%&quot; }}
            alt&#x3D;&quot;image&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle9.svg&quot;
            width&#x3D;{206}
            height&#x3D;{214}
          &#x2F;&gt;
          &lt;h2 className&#x3D;&quot;!text-[0.8rem] uppercase !text-[#aab0bc] !mb-3 !text-center !leading-[1.35]&quot;&gt;
            Why Choose Sandbox?
          &lt;&#x2F;h2&gt;
          &lt;h3 className&#x3D;&quot;!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:!text-[2rem] !mb-14 !text-center&quot;&gt;
            Here are a few
            &lt;span className&#x3D;&quot;text-gradient gradient-7&quot;&gt;reasons why&lt;&#x2F;span&gt; our
            customers choose the Sandbox app.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;div className&#x3D;&quot;flex-wrap mx-[-15px] flex items-start !mb-36&quot;&gt;
        &lt;div
          className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!sticky lg:!sticky&quot;
          style&#x3D;{{ top: &quot;8rem&quot; }}
        &gt;
          &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
            &lt;img
              className&#x3D;&quot;w-full max-w-full !h-auto&quot;
              srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices5@2x.png 2x&quot;
              alt&#x3D;&quot;image&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices5.png&quot;
              width&#x3D;{630}
              height&#x3D;{795}
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
        &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-row !mb-8&quot;&gt;
            &lt;div&gt;
              &lt;div className&#x3D;&quot;svg-bg svg-bg-lg bg-[#e6e5f4] !rounded-[0.8rem] !mr-5&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 256 256&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;calendar.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M66.67 117.33H40a8 8 0 00-8 8V152a8 8 0 008 8h26.67a8 8 0 008-8v-26.67a8 8 0 00-8-8zm0 64H40a8 8 0 00-8 8V216a8 8 0 008 8h26.67a8 8 0 008-8v-26.67a8 8 0 00-8-8zm74.66-64h-26.67a8 8 0 00-8 8V152a8 8 0 008 8h26.67a8 8 0 008-8v-26.67a8 8 0 00-8-8zm0 64h-26.67a8 8 0 00-8 8V216a8 8 0 008 8h26.67a8 8 0 008-8v-26.67a8 8 0 00-8-8zm74.67-64h-26.67a8 8 0 00-8 8V152a8 8 0 008 8H216a8 8 0 008-8v-26.67a8 8 0 00-8-8z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M224 32H32A32 32 0 000 64v160a32 32 0 0032 32h192a32 32 0 0032-32V64a32 32 0 00-32-32zm10.67 192A10.67 10.67 0 01224 234.67H32A10.67 10.67 0 0121.33 224V107.09h213.33V224z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M64 0H53.33a10.67 10.67 0 00-10.67 10.67v42.67A10.68 10.68 0 0053.33 64H64a10.67 10.67 0 0010.67-10.66V10.67A10.67 10.67 0 0064 0zm138.67 0H192a10.67 10.67 0 00-10.67 10.67v42.67A10.67 10.67 0 00192 64h10.67a10.67 10.67 0 0010.67-10.67V10.67A10.67 10.67 0 00202.67 0z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Scheduled Transactions&lt;&#x2F;h4&gt;
              &lt;p&gt;
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus magna.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;flex flex-row !mb-8&quot;&gt;
            &lt;div&gt;
              &lt;div className&#x3D;&quot;svg-bg svg-bg-lg bg-[#e1f6f0] !rounded-[0.8rem] !mr-5&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 256 256&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;currency.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M206.43 82.68h-30.59c-12.5 0-22.67-10.18-22.67-22.67 0-6.56 2.85-12.42 7.31-16.56-10.08-3.89-21.01-6.11-32.48-6.11-50.08 0-90.67 40.59-90.67 90.67s40.59 90.67 90.67 90.67 90.67-40.59 90.67-90.67c0-16.53-4.5-31.98-12.24-45.33zm-82.48 37.33h8.11c12.46 0 22.61 10.14 22.61 22.61 0 11.22-8.08 20.43-18.67 22.32v8.4c0 4.42-3.58 8-8 8s-8-3.58-8-8v-8h-10.67c-4.42 0-8-3.58-8-8s3.58-8 8-8h22.72c3.65 0 6.61-2.98 6.61-6.61s-2.98-6.72-6.61-6.72h-8.11c-12.46 0-22.61-10.14-22.61-22.61 0-11.22 8.08-20.43 18.67-22.32v-8.4c0-4.42 3.58-8 8-8s8 3.58 8 8v8h10.67c4.42 0 8 3.58 8 8s-3.58 8-8 8h-22.72c-3.65 0-6.61 2.98-6.61 6.61-.02 3.74 2.96 6.72 6.61 6.72z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M245.33 117.33c-5.89 0-10.67 4.78-10.67 10.67 0 58.82-47.86 106.67-106.67 106.67S21.33 186.82 21.33 128 69.18 21.33 128 21.33c19.5 0 38.98 5.46 55.78 14.94L170 50.05a10.661 10.661 0 007.54 18.21h46.93c5.89 0 10.67-4.78 10.67-10.67V10.68c0-4.32-2.59-8.21-6.58-9.86-4-1.66-8.58-.75-11.63 2.32l-17.54 17.54C178.4 7.48 153.52 0 128 0 57.42 0 0 57.43 0 128s57.42 128 128 128 128-57.42 128-128c0-5.89-4.77-10.67-10.67-10.67z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Multiple Currencies&lt;&#x2F;h4&gt;
              &lt;p&gt;
                Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit
                libero, a pharetra augue. Maecenas faucibus mollis interdum.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;flex flex-row !mb-8&quot;&gt;
            &lt;div&gt;
              &lt;div className&#x3D;&quot;svg-bg svg-bg-lg bg-[#f8e7ec] !rounded-[0.8rem] !mr-5&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 256 256&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;server.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M250.58 126.14l-56-19a8 8 0 00-5.16 0l-56 19a8 8 0 00-5.42 7.57v42.87c0 52.32 58.38 77.72 60.88 78.8a8.19 8.19 0 003.12.62 7.85 7.85 0 003.12-.64c2.5-1.06 60.88-26.48 60.88-78.78v-42.87a8 8 0 00-5.42-7.57zm-23.52 40.45l-29.33 37.33a10.66 10.66 0 01-15.33 1.5l-18.67-16a10.66 10.66 0 0113.87-16.19l10.22 8.77 22.47-28.57a10.66 10.66 0 0116.77 13.18z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M202.67 0H32a32 32 0 000 64h170.67a32 32 0 000-64zM32 42.67A10.67 10.67 0 1142.67 32 10.67 10.67 0 0132 42.67zm42.67 0A10.67 10.67 0 1185.34 32a10.67 10.67 0 01-10.67 10.67zM32 85.33a32 32 0 000 64h74.67v-15.57a29.38 29.38 0 0120-27.84l55.89-19a29 29 0 019.49-1.6zM32 128a10.67 10.67 0 1110.67-10.67A10.7 10.7 0 0132 128zm42.67 0a10.67 10.67 0 1110.67-10.67A10.7 10.7 0 0174.67 128zm32 48.53v-5.87H32a32 32 0 000 64h95.68c-12.27-15.57-21.01-35.09-21.01-58.13zM32 213.33a10.67 10.67 0 1110.67-10.66A10.7 10.7 0 0132 213.33zm42.67 0a10.67 10.67 0 1110.67-10.66 10.7 10.7 0 01-10.67 10.66z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Database Management&lt;&#x2F;h4&gt;
              &lt;p&gt;
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Cum sociis natoque penatibus et magnis dis parturient
                montes.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;flex flex-row !mb-8&quot;&gt;
            &lt;div&gt;
              &lt;div className&#x3D;&quot;svg-bg svg-bg-lg !bg-[#fef3e4] !rounded-[0.8rem] !mr-5&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 256 256&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;devices.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M226.67 0H80a29.35 29.35 0 00-29.33 29.33v13.33H72v-8a13.34 13.34 0 0113.33-13.33h136a13.34 13.34 0 0113.33 13.33v186.67a13.35 13.35 0 01-13.33 13.33h-82.74A44.07 44.07 0 01132.7 256h94a29.33 29.33 0 0029.3-29.33V29.33A29.35 29.35 0 00226.67 0z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M97.17 64h-77C9 64 0 73.87 0 86v148c0 12.13 9 22 20.16 22h77c11.12 0 20.16-9.87 20.16-22V86c.01-12.13-9.03-22-20.15-22zm5.5 168c0 4.42-3.28 8-7.33 8H22c-4.05 0-7.33-3.58-7.33-8V85.33c0-4.42 3.28-8 7.33-8h3.66c4.05 0 7.33 3.58 7.33 8s3.28 8 7.33 8H77c4.05 0 7.33-3.59 7.33-8s3.28-8 7.33-8h3.66c4 0 7.33 3.58 7.33 8V232z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M154.67 186.67A13.33 13.33 0 10168 200a13.35 13.35 0 00-13.33-13.33z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Sync Between Devices&lt;&#x2F;h4&gt;
              &lt;p&gt;
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus magna.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;flex flex-row !mb-8&quot;&gt;
            &lt;div&gt;
              &lt;div className&#x3D;&quot;svg-bg svg-bg-lg bg-[#e0e9fa] !rounded-[0.8rem] !mr-5&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 256 234.67&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;search.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M117.15 74.85a53.33 53.33 0 1053.33 53.33 53.39 53.39 0 00-53.33-53.33zm0 85.33a32 32 0 1132-32 32 32 0 01-32 32z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M149.7 149.68a10.61 10.61 0 017.53 3.12l31.65 31.65a10.67 10.67 0 01-15.09 15.09l-31.65-31.65a10.67 10.67 0 017.56-18.21z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M224 0H32A32 32 0 000 32v170.67a32 32 0 0032 32h192a32 32 0 0032-32V32a32 32 0 00-32-32zm0 213.33H32a10.68 10.68 0 01-10.67-10.67V53.33h213.33v149.33A10.67 10.67 0 01224 213.33z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Smart Search&lt;&#x2F;h4&gt;
              &lt;p&gt;
                Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit
                libero, a pharetra augue. Maecenas faucibus mollis interdum.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;flex flex-row !mb-8&quot;&gt;
            &lt;div&gt;
              &lt;div className&#x3D;&quot;svg-bg svg-bg-lg !bg-[#eaf3ef] !rounded-[0.8rem] !mr-5&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 256 256&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;compare.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M123.22 148.5A8 8 0 00116 144H19.36a8 8 0 00-8 8c0 57.34 46.94 104 104.66 104a104.67 104.67 0 0045.45-10.29 8 8 0 003.76-10.71z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-secondary&quot;
                    d&#x3D;&quot;M152 19a8 8 0 00-8 8v95.39a7.93 7.93 0 00.8 3.49l41.73 85.95a8 8 0 0010.65 3.73c36.29-17.48 58.82-53.19 58.82-93.19C256 65.36 209.34 19 152 19z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;fill-primary&quot;
                    d&#x3D;&quot;M112 104V8a8 8 0 00-8-8A104.13 104.13 0 000 104a8 8 0 008 8h96a8 8 0 008-8z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Detailed Reports&lt;&#x2F;h4&gt;
              &lt;p&gt;
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Cum sociis natoque penatibus et magnis dis parturient
                montes.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
    &lt;&#x2F;&gt;
  );
}        
        `}
      />
      <About8 />
      <CodeSnippet
        code={`
import { features2 } from &quot;@&#x2F;data&#x2F;features&quot;;

import React from &quot;react&quot;;

export default function About8() {
  return (
    &lt;section id&#x3D;&quot;snippet-11&quot; className&#x3D;&quot;wrapper !bg-[#ffffff]  &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] md:mx-[-20px] xl:mx-[-35px] items-center !mb-10 xl:!mb-14 lg:!mb-14 md:!mb-14&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[80px]&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;rounded-[0.4rem]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g12@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g12.jpg&quot;
                    width&#x3D;{293}
                    height&#x3D;{260}
                  &#x2F;&gt;
                &lt;&#x2F;figure&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !self-end !mt-[25px]&quot;&gt;
                &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;rounded-[0.4rem]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g13@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g13.jpg&quot;
                    width&#x3D;{293}
                    height&#x3D;{235}
                  &#x2F;&gt;
                &lt;&#x2F;figure&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                &lt;figure className&#x3D;&quot;!rounded-[.4rem] xl:!mx-5 lg:!mx-5 md:!mx-5&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;!rounded-[.4rem]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g11@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g11.jpg&quot;
                    width&#x3D;{560}
                    height&#x3D;{285}
                  &#x2F;&gt;
                &lt;&#x2F;figure&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[80px]&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[0.8rem] uppercase !text-[#3f78e0] !mb-3 !leading-[1.35] !tracking-[0.02rem]&quot;&gt;
              Who Are We?
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;xl:!text-[2rem] !leading-[1.2] !text-[calc(1.325rem_+_0.9vw)] font-semibold !mb-5&quot;&gt;
              Company that believes in the power of creative strategy.
            &lt;&#x2F;h3&gt;
            &lt;p className&#x3D;&quot;!mb-6&quot;&gt;
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum
              nulla sed.
            &lt;&#x2F;p&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;h3 className&#x3D;&quot;counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none xl:!text-[2.2rem] !mb-1&quot;&gt;
                  99.7%
                &lt;&#x2F;h3&gt;
                &lt;h5 className&#x3D;&quot;!mb-0&quot;&gt;Customer Satisfaction&lt;&#x2F;h5&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;h3 className&#x3D;&quot;counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none xl:!text-[2.2rem] !mb-1&quot;&gt;
                  12x
                &lt;&#x2F;h3&gt;
                &lt;h5 className&#x3D;&quot;!mb-0&quot;&gt;Revenue Growth&lt;&#x2F;h5&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-7 xl:!mb-9 lg:!mb-9 md:!mb-9&quot;&gt;
          {features2.map((column, index) &#x3D;&gt; (
            &lt;div
              key&#x3D;{index}
              className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[30px]&quot;
            &gt;
              &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                &lt;div&gt;
                  &lt;div className&#x3D;&quot;icon btn btn-block pointer-events-none btn-soft-primary !mr-4 !w-10 !h-10&quot;&gt;
                    &lt;span className&#x3D;&quot;number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0&quot;&gt;
                      {column.number}
                    &lt;&#x2F;span&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h3&gt;{column.title}&lt;&#x2F;h3&gt;
                  &lt;p className&#x3D;&quot;!mb-2&quot;&gt;{column.description}&lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          ))}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;text-center&quot;&gt;
          &lt;a
            href&#x3D;&quot;#&quot;
            className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0]&quot;
          &gt;
            More Details
          &lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;section&gt;
  );
}          
          
          `}
      />
      <div className="my-[-6rem] xl:!my-[-8rem] lg:!my-[-8rem] md:!my-[-8rem]"></div>
      <About9 />
      <CodeSnippet
        code={`
import React from &quot;react&quot;;

import &lbrace; timelineData &rbrace; from &quot;@&#x2F;data&#x2F;experiences&quot;;
export default function About9() &lbrace;
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div className&#x3D;&quot;container py-[6rem] xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] items-center xl:!mt-[8rem] lg:!mt-[8rem] !mb-[6rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]&quot;&gt;
          &lt;div className&#x3D;&quot;md:w-8&#x2F;12 lg:w-6&#x2F;12 xl:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mx-auto !mt-[50px]&quot;&gt;
            &lt;div className&#x3D;&quot;img-mask mask-3 xxl:!px-5&quot;&gt;
              &lt;img
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;avatars&#x2F;avatar@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;avatars&#x2F;avatar.jpg&quot;
                width&#x3D;&lbrace;560&rbrace;
                height&#x3D;&lbrace;525&rbrace;
              &#x2F;&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !mb-3&quot;&gt;
              More about me
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.2rem] font-medium !leading-[1.65]&quot;&gt;
              👋 Hello! I&#39;m Camille, a multidisciplinary product designer 🧸
              based in New York City 🚕. I’m very passionate about the work 💌
              that I do.
            &lt;&#x2F;p&gt;
            &lt;p&gt;
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh ut fermentum massa justo
              sit amet risus.
            &lt;&#x2F;p&gt;
            &lt;p&gt;
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Aenean lacinia bibendum nulla sed consectetur.
            &lt;&#x2F;p&gt;
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-navy !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-end !mt-2&quot;
            &gt;
              Learn More
              &lt;i className&#x3D;&quot;uil uil-arrow-up-right !ml-[.3rem] before:content-[&#39;\e950&#39;]&quot; &#x2F;&gt;
            &lt;&#x2F;a&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mx-auto !mt-[50px]&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !mb-3&quot;&gt;
              My experiences
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.2rem] !font-regular !leading-[1.6] xxl:!pr-8&quot;&gt;
              I&#39;ve had the pleasure to work with companies 🏢 across a variety
              of industries 🏛️ I&#39;m always interested in new ✨ and exciting
              adventures 🧨
            &lt;&#x2F;p&gt;
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-navy !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-end !mt-2&quot;
            &gt;
              Download Resume
              &lt;i className&#x3D;&quot;uil uil-arrow-up-right !ml-[.3rem] before:content-[&#39;\e950&#39;]&quot; &#x2F;&gt;
            &lt;&#x2F;a&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
            &lt;ul className&#x3D;&quot;timeline xl:table lg:table md:table !w-full !m-0 !p-0 !list-none&quot;&gt;
              &lbrace;timelineData.map((entry, index) &#x3D;&gt; (
                &lt;li
                  key&#x3D;&lbrace;index&rbrace;
                  className&#x3D;&quot;relative !pl-8 xl:table-row xl:p-0 lg:table-row lg:p-0 md:table-row md:p-0&quot;
                &gt;
                  &lt;div className&#x3D;&quot;timeline-info meta uppercase !tracking-[0.02rem] font-bold !text-[#aab0bc] !text-[0.7rem] whitespace-nowrap !mb-2 xl:text-right xl:table-cell xl:align-top xl:!pr-6 lg:text-right lg:table-cell lg:align-top lg:!pr-6 md:text-right md:table-cell md:align-top md:!pr-6&quot;&gt;
                    &lbrace;entry.date&rbrace;
                  &lt;&#x2F;div&gt;
                  &lt;div
                    className&#x3D;&lbrace;&#x60;timeline-marker absolute w-[0.6rem] !text-[#3f78e0] left-0 inset-y-0 xl:relative xl:table-cell xl:align-top lg:relative lg:table-cell lg:align-top md:relative md:table-cell md:align-top before:w-[0.55rem] before:h-[0.55rem] before:content-[&#39;&#39;] before:block before:absolute before:rounded-[100%] before:left-0 before:top-[0.2rem] before:bg-[#3f78e0] $&lbrace;
                      entry.hasBottomLine
                        ? &quot;after:w-px after:content-[&#39;&#39;] after:block after:absolute after:left-1 after:top-4 after:bottom-0 after:bg-[rgba(164,174,198,.2)]&quot;
                        : &quot;&quot;
                    &rbrace;&#x60;&rbrace;
                  &#x2F;&gt;
                  &lt;div className&#x3D;&quot;table-cell align-top pb-8 xl:!pl-6 lg:!pl-6 md:!pl-6&quot;&gt;
                    &lt;h3 className&#x3D;&quot;timeline-title xl:!mt-[-0.25rem] lg:!mt-[-0.25rem] md:!mt-[-0.25rem]&quot;&gt;
                      &lbrace;entry.title&rbrace;
                    &lt;&#x2F;h3&gt;
                    &lt;p className&#x3D;&quot;!m-0&quot;&gt;&lbrace;entry.description&rbrace;&lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;li&gt;
              ))&rbrace;
            &lt;&#x2F;ul&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
    &lt;&#x2F;section&gt;
  );
&rbrace;          
          `}
      />
    </>
  );
}
