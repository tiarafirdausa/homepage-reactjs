import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import AppFeatures from "@/components/blocks/features/AppFeatures";
import Features1 from "@/components/blocks/features/Features1";
import Features2 from "@/components/blocks/features/Features2";
import Features3 from "@/components/blocks/features/Features3";
import Services from "@/components/blocks/features/Services";
import PageTitle from "@/components/blocks/PageTitle";
import CodeSnippet from "@/components/common/CodeSnippet";
import ProgressBarComponent from "@/components/common/ProgressBar";
import Gallery from "@/components/homes/home-23/Gallery";

import Expertise from "@/components/homes/home-28/Expertise";
import Services1 from "@/components/homes/home-31/Services";

import { skills2 } from "@/data/progress";
import { designItems, services } from "@/data/services";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Features || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageFeatures() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Features" />
      <BlockPageLinks />
      <Features1 />
      <CodeSnippet
        code={`import { listFeatures2 } from &quot;@&#x2F;data&#x2F;features&quot;;

import React from &quot;react&quot;;

export default function Features1() {
  return (
    &lt;section id&#x3D;&quot;snippet-1&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] !relative&quot;&gt;
            &lt;div
              className&#x3D;&quot;shape bg-dot violet rellax !w-[7rem] !h-[8rem] !absolute z-[1] opacity-50&quot;
              data-rellax-speed&#x3D;{1}
              style&#x3D;{{ bottom: &quot;-2rem&quot;, left: &quot;-0.7rem&quot; }}
            &#x2F;&gt;
            &lt;figure className&#x3D;&quot;!rounded-[.4rem] !mb-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;!rounded-[.4rem]&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;se3@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;se3.jpg&quot;
                width&#x3D;{595}
                height&#x3D;{507}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
            &lt;h3 className&#x3D;&quot;xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] font-bold !leading-[1.3] !mb-4&quot;&gt;
              Package Design
            &lt;&#x2F;h3&gt;
            &lt;p className&#x3D;&quot;!mb-5&quot;&gt;
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et. Maecenas faucibus mollis interdum. Maecenas
              sed diam eget risus varius.
            &lt;&#x2F;p&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-15px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]&quot;&gt;
                &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-leaf !mb-0&quot;&gt;
                  {listFeatures2.slice(0, 2).map((elm, i) &#x3D;&gt; (
                    &lt;li key&#x3D;{i} className&#x3D;&quot;relative !pl-6&quot;&gt;
                      &lt;span&gt;
                        &lt;i className&#x3D;&quot;uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                      &lt;&#x2F;span&gt;
                      &lt;span&gt;{elm}&lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                  ))}
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]&quot;&gt;
                &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-leaf !mb-0&quot;&gt;
                  {listFeatures2.slice(2).map((elm, i) &#x3D;&gt; (
                    &lt;li key&#x3D;{i} className&#x3D;&quot;relative !pl-6&quot;&gt;
                      &lt;span&gt;
                        &lt;i className&#x3D;&quot;uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                      &lt;&#x2F;span&gt;
                      &lt;span&gt;{elm}&lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                  ))}
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-soft-leaf !text-[.85rem] !tracking-[normal] !rounded-[50rem] !mt-6 !mb-0&quot;
            &gt;
              More Details
            &lt;&#x2F;a&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] xl:!order-2 lg:!order-2 !relative&quot;&gt;
            &lt;div
              className&#x3D;&quot;shape !rounded-[50%] !bg-[#f6f3f9] rellax !w-[8rem] !h-[8rem] absolute&quot;
              data-rellax-speed&#x3D;{1}
              style&#x3D;{{ bottom: &quot;-2.5rem&quot;, right: &quot;-1.5rem&quot; }}
            &#x2F;&gt;
            &lt;figure className&#x3D;&quot;!rounded-[.4rem] !mb-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;!rounded-[.4rem]&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;se4@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;se4.jpg&quot;
                width&#x3D;{595}
                height&#x3D;{507}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
            &lt;h3 className&#x3D;&quot;xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] font-bold !leading-[1.3] !mb-4&quot;&gt;
              Corporate Design
            &lt;&#x2F;h3&gt;
            &lt;p className&#x3D;&quot;!mb-5&quot;&gt;
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            &lt;&#x2F;p&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-15px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]&quot;&gt;
                &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-leaf !mb-0&quot;&gt;
                  {listFeatures2.slice(0, 2).map((elm, i) &#x3D;&gt; (
                    &lt;li key&#x3D;{i} className&#x3D;&quot;relative !pl-6&quot;&gt;
                      &lt;span&gt;
                        &lt;i className&#x3D;&quot;uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                      &lt;&#x2F;span&gt;
                      &lt;span&gt;{elm}&lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                  ))}
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]&quot;&gt;
                &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-leaf !mb-0&quot;&gt;
                  {listFeatures2.slice(2).map((elm, i) &#x3D;&gt; (
                    &lt;li key&#x3D;{i} className&#x3D;&quot;relative !pl-6&quot;&gt;
                      &lt;span&gt;
                        &lt;i className&#x3D;&quot;uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                      &lt;&#x2F;span&gt;
                      &lt;span&gt;{elm}&lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                  ))}
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-soft-leaf !text-[.85rem] !tracking-[normal] !rounded-[50rem] !mt-6 !mb-0&quot;
            &gt;
              More Details
            &lt;&#x2F;a&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Features2 />
      <CodeSnippet
        code={`import &lbrace; services &rbrace; from &quot;@&#x2F;data&#x2F;services&quot;;
import React from &quot;react&quot;;

export default function Features2() &lbrace;
  return (
    &lt;section id&#x3D;&quot;snippet-2&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;lg:w-8&#x2F;12 xl:w-7&#x2F;12 xxl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]&quot;&gt;
              What We Do?
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-9&quot;&gt;
              The service we offer is specifically designed to meet your needs.
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] !mt-[-40px]&quot;&gt;
          &lbrace;services.map((elm, i) &#x3D;&gt; (
            &lt;div
              key&#x3D;&lbrace;i&rbrace;
              className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full&quot;
            &gt;
              &lt;div
                className&#x3D;&lbrace;&#x60;icon btn btn-block btn-lg $&lbrace;elm.btnClass&rbrace; pointer-events-none !mb-5&#x60;&rbrace;
              &gt;
                &lt;i className&#x3D;&lbrace;elm.iconClass&rbrace; &#x2F;&gt;
              &lt;&#x2F;div&gt;
              &lt;h4&gt;&lbrace;elm.title&rbrace;&lt;&#x2F;h4&gt;
              &lt;p className&#x3D;&quot;!mb-3&quot;&gt;&lbrace;elm.description&rbrace;&lt;&#x2F;p&gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;more hover !text-[#fab758] focus:!text-[#fab758] hover:!text-[#fab758]&quot;
              &gt;
                Learn More
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
          ))&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;

      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
    &lt;&#x2F;section&gt;
  );
&rbrace;`}
      />
      <>
        <section id="snippet-3" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
                <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
                  What We Do?
                </h2>
                <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-10 xl:!px-10">
                  The service we offer is specifically designed to meet your
                  needs.
                </h3>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
            <div className="!relative">
              <div
                className="shape !rounded-[50%] !bg-[#edf2fc] rellax !w-[6rem] !h-[6rem] !absolute z-[1]"
                data-rellax-speed={1}
                style={{ bottom: "-0.5rem", right: "-2.2rem", zIndex: 0 }}
              />
              <div
                className="shape bg-dot yellow rellax !w-[6rem] !h-[7rem] !absolute opacity-50"
                data-rellax-speed={1}
                style={{ top: "-0.5rem", left: "-2.5rem", zIndex: 0 }}
              />
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] !text-center">
                <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]">
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 511.9"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/search-2.svg"
                        className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]"
                      >
                        <path
                          className="lineal-stroke"
                          d="M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"
                        />
                        <circle
                          className="lineal-fill"
                          cx="297.1"
                          cy="214.9"
                          r="111.1"
                        />
                        <path
                          className="lineal-stroke"
                          d="M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"
                        />
                      </svg>
                      <h4>SEO Services</h4>
                      <p className="!mb-2">
                        Nulla vitae elit libero, a pharetra augue. Donec id elit
                        non mi porta gravida at eget metus cras justo.
                      </p>
                      <a
                        href="#"
                        className="more hover !text-[#fab758] focus:!text-[#fab758] hover:!text-[#fab758]"
                      >
                        Learn More
                      </a>
                    </div>
                    {/*/.card-body */}
                  </div>
                  {/*/.card */}
                </div>
                {/*/column */}
                <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]">
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 442.8"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/browser.svg"
                        className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3 m-[0_auto]"
                      >
                        <path
                          className="lineal-stroke"
                          d="M464.2 442.8H47.7C21.4 442.8 0 421.4 0 395.1V47.7C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7c0 7.6-6.2 13.8-13.8 13.9-7.6 0-13.8-6.2-13.9-13.8 0-11.1-9-20-20.1-20.1H47.7c-11.1 0-20 9-20.1 20.1v347.3c0 11.1 9 20.1 20.1 20.1h416.5c11.1 0 20.1-9 20.1-20.1V209.4c0-7.6 6.2-13.8 13.8-13.9 7.6 0 13.8 6.2 13.9 13.8V395c0 26.4-21.4 47.8-47.8 47.8z"
                        />
                        <path
                          className="lineal-fill"
                          d="M13.8 47.7v69.9h484.3V47.7c0-18.7-15.2-33.9-33.9-33.9H47.7C29 13.8 13.8 29 13.8 47.7z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M498.2 131.5H13.8c-7.6 0-13.8-6.2-13.8-13.8v-70C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7v69.9c0 7.7-6.2 13.9-13.8 13.9zM27.7 103.8h456.6v-56c0-11.1-9-20.1-20.1-20.1H47.8c-11.1 0-20 9-20.1 20v56.1z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M294.7 79.6h-26.3c-7.6 0-13.8-6.2-13.8-13.8S260.8 52 268.4 52h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8zm73.4 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8 0 7.6-6.2 13.8-13.8 13.8zm73.3 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8z"
                        />
                        <path
                          className="lineal-fill"
                          d="M112.8 268.5h286.4v63.6H112.8z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M399.2 345.9H112.8c-7.6 0-13.8-6.2-13.8-13.8v-63.7c0-7.6 6.2-13.8 13.8-13.8h286.4c7.6 0 13.8 6.2 13.8 13.8v63.7c.1 7.6-6.1 13.8-13.8 13.8zm-272.6-27.6h258.8v-36H126.6v36zm230.9-95.5h-203c-7.6.2-14-5.8-14.2-13.5s5.8-14 13.5-14.2h203.8c7.6-.2 14 5.8 14.2 13.5s-5.8 14-13.5 14.2h-.8z"
                        />
                      </svg>
                      <h4>Web Design</h4>
                      <p className="!mb-2">
                        Nulla vitae elit libero, a pharetra augue. Donec id elit
                        non mi porta gravida at eget metus cras justo.
                      </p>
                      <a
                        href="#"
                        className="more hover !text-[#e2626b] focus:!text-[#e2626b] hover:!text-[#e2626b]"
                      >
                        Learn More
                      </a>
                    </div>
                    {/*/.card-body */}
                  </div>
                  {/*/.card */}
                </div>
                {/*/column */}
                <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]">
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 454.6"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/chat-2.svg"
                        className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mb-3 m-[0_auto]"
                      >
                        <path
                          className="lineal-fill"
                          d="M131.5 126.8h249V15.2H15.2v256.3h116.3z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M496.8 194.4c-8.4 0-15.2 6.8-15.2 15.2v158.3h-29.7c-8.4 0-15.2 6.8-15.2 15.2 0 .5 0 1.1.1 1.6l2.8 27.2-75.7-42.1c-2.3-1.3-4.8-1.9-7.4-1.9H146.7V142h233.8c8.4 0 15.2-6.8 15.2-15.2V15.2c0-8.4-6.8-15.2-15.2-15.2H15.2C6.8 0 0 6.8 0 15.2v256.3c0 8.4 6.8 15.2 15.2 15.2h101v96.4c0 8.4 6.8 15.2 15.2 15.2h221l97.8 54.3c7.3 4.1 16.6 1.4 20.7-5.9 1.5-2.7 2.2-5.9 1.8-9l-4.1-39.5h28.1c8.4 0 15.2-6.8 15.2-15.2V209.6c.1-8.4-6.7-15.2-15.1-15.2zM30.4 256.3V30.4h334.8v81.2H131.5c-8.4 0-15.2 6.8-15.2 15.2v129.5H30.4z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M413.8 223.6H214.4c-8.4 0-15.2-6.8-15.2-15.2s6.8-15.2 15.2-15.2h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.2-15.2 15.2zm0 85.9H214.4c-8.4 0-15.2-6.8-15.2-15.2S206 279 214.4 279h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.3-15.2 15.3z"
                        />
                      </svg>
                      <h4>Social Engagement</h4>
                      <p className="!mb-2">
                        Nulla vitae elit libero, a pharetra augue. Donec id elit
                        non mi porta gravida at eget metus cras justo.
                      </p>
                      <a
                        href="#"
                        className="more hover !text-[#45c4a0] focus:!text-[#45c4a0] hover:!text-[#45c4a0]"
                      >
                        Learn More
                      </a>
                    </div>
                    {/*/.card-body */}
                  </div>
                  {/*/.card */}
                </div>
                {/*/column */}
                <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]">
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 409.6 362.5"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/megaphone.svg"
                        className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#3f78e0] text-blue !mb-3 m-[0_auto]"
                      >
                        <path
                          className="lineal-stroke"
                          d="M343.4 302.9L61 302.5c-25.3-.2-47.5-16.8-54.8-40.9l-3.9-12.9c-7.1-24.2 2.5-50.3 23.5-64.2L262.1 29.8c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.3 249.8c2.4 6.4-.9 13.5-7.3 15.8-1.3.5-2.8.7-4.2.7zM261.8 59.4L39.3 205c-12 7.9-17.4 22.8-13.4 36.6l3.8 12.9c4.2 13.8 16.8 23.3 31.2 23.4l265.8.4-64.9-218.9z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M138 362.5c-40.4 0-72.8-31.1-73.6-70.8 0-6.8 5.5-12.3 12.3-12.3 6.6 0 12.1 5.2 12.3 11.8.6 26.2 22.1 46.7 49 46.7 14.2 0 27.7-6.2 37-16.9 4.5-5.1 12.2-5.7 17.4-1.2 5.1 4.5 5.7 12.2 1.2 17.4-14 16.1-34.3 25.3-55.6 25.3z"
                        />
                        <path
                          className="lineal-fill"
                          d="M183.4 96l57.8 194.5 102.1.1-74.5-250.5L183.4 96z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M343.4 302.9l-102.1-.1c-5.4 0-10.2-3.6-11.8-8.8L171.6 99.5c-1.6-5.2.5-10.8 5.1-13.8l85.4-55.9c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.5 250.6c1.9 6.5-1.8 13.4-8.3 15.3-1.1.2-2.3.4-3.4.4zm-92.9-24.7l76.4.1-65.1-218.9-63.9 41.8 52.6 177z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M351.8 330.6c-5.4 0-10.2-3.6-11.8-8.8l-91-306c-2.1-6.5 1.3-13.4 7.8-15.6 6.5-2.1 13.4 1.3 15.6 7.8.1.3.2.5.2.8l91 305.9c1.9 6.5-1.8 13.4-8.3 15.3-1.1.4-2.3.6-3.5.6zM338 91.7c-6.8 0-12.3-5.5-12.3-12.3 0-1.8.4-3.6 1.2-5.3l13.4-28.5c2.9-6.2 10.2-8.8 16.4-5.9 6.2 2.9 8.8 10.2 5.9 16.4l-13.4 28.5c-2.1 4.3-6.4 7.1-11.2 7.1zm28.2 64.9c-6.8 0-12.3-5.5-12.3-12.3 0-5.7 3.9-10.6 9.4-12l31.1-7.5c6.6-1.5 13.2 2.6 14.7 9.3 1.5 6.5-2.5 13-9 14.7l-31.2 7.4c-.8.3-1.8.4-2.7.4zm29.1 90c-2.7 0-5.4-.9-7.5-2.6l-24.9-19.4c-5.4-4.2-6.3-11.9-2.2-17.3s11.9-6.3 17.3-2.2l24.9 19.4c5.4 4.2 6.3 11.9 2.1 17.3-2.3 3-5.9 4.7-9.7 4.8z"
                        />
                      </svg>
                      <h4>Content Marketing</h4>
                      <p className="!mb-2">
                        Nulla vitae elit libero, a pharetra augue. Donec id elit
                        non mi porta gravida at eget metus cras justo.
                      </p>
                      <a
                        href="#"
                        className="more hover !text-[#3f78e0] hover:!text-[#3f78e0]"
                      >
                        Learn More
                      </a>
                    </div>
                    {/*/.card-body */}
                  </div>
                  {/*/.card */}
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/* /.relative */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={`  &lt;section id&#x3D;&quot;snippet-3&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 !text-center&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
              &lt;div className&#x3D;&quot;md:w-10&#x2F;12 xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]&quot;&gt;
                  What We Do?
                &lt;&#x2F;h2&gt;
                &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-10 xl:!px-10&quot;&gt;
                  The service we offer is specifically designed to meet your
                  needs.
                &lt;&#x2F;h3&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
            &lt;div className&#x3D;&quot;!relative&quot;&gt;
              &lt;div
                className&#x3D;&quot;shape !rounded-[50%] !bg-[#edf2fc] rellax !w-[6rem] !h-[6rem] !absolute z-[1]&quot;
                data-rellax-speed&#x3D;{1}
                style&#x3D;{{ bottom: &quot;-0.5rem&quot;, right: &quot;-2.2rem&quot;, zIndex: 0 }}
              &#x2F;&gt;
              &lt;div
                className&#x3D;&quot;shape bg-dot yellow rellax !w-[6rem] !h-[7rem] !absolute opacity-50&quot;
                data-rellax-speed&#x3D;{1}
                style&#x3D;{{ top: &quot;-0.5rem&quot;, left: &quot;-2.5rem&quot;, zIndex: 0 }}
              &#x2F;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] !text-center&quot;&gt;
                &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-6&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]&quot;&gt;
                  &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                    &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                      &lt;svg
                        xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                        viewBox&#x3D;&quot;0 0 512 511.9&quot;
                        data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;search-2.svg&quot;
                        className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]&quot;
                      &gt;
                        &lt;path
                          className&#x3D;&quot;lineal-stroke&quot;
                          d&#x3D;&quot;M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z&quot;
                        &#x2F;&gt;
                        &lt;circle
                          className&#x3D;&quot;lineal-fill&quot;
                          cx&#x3D;&quot;297.1&quot;
                          cy&#x3D;&quot;214.9&quot;
                          r&#x3D;&quot;111.1&quot;
                        &#x2F;&gt;
                        &lt;path
                          className&#x3D;&quot;lineal-stroke&quot;
                          d&#x3D;&quot;M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;svg&gt;
                      &lt;h4&gt;SEO Services&lt;&#x2F;h4&gt;
                      &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                        Nulla vitae elit libero, a pharetra augue. Donec id elit
                        non mi porta gravida at eget metus cras justo.
                      &lt;&#x2F;p&gt;
                      &lt;a
                        href&#x3D;&quot;#&quot;
                        className&#x3D;&quot;more hover !text-[#fab758] focus:!text-[#fab758] hover:!text-[#fab758]&quot;
                      &gt;
                        Learn More
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card-body *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.card *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-6&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]&quot;&gt;
                  &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                    &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                      &lt;svg
                        xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                        viewBox&#x3D;&quot;0 0 512 442.8&quot;
                        data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;browser.svg&quot;
                        className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3 m-[0_auto]&quot;
                      &gt;
                        &lt;path
                          className&#x3D;&quot;lineal-stroke&quot;
                          d&#x3D;&quot;M464.2 442.8H47.7C21.4 442.8 0 421.4 0 395.1V47.7C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7c0 7.6-6.2 13.8-13.8 13.9-7.6 0-13.8-6.2-13.9-13.8 0-11.1-9-20-20.1-20.1H47.7c-11.1 0-20 9-20.1 20.1v347.3c0 11.1 9 20.1 20.1 20.1h416.5c11.1 0 20.1-9 20.1-20.1V209.4c0-7.6 6.2-13.8 13.8-13.9 7.6 0 13.8 6.2 13.9 13.8V395c0 26.4-21.4 47.8-47.8 47.8z&quot;
                        &#x2F;&gt;
                        &lt;path
                          className&#x3D;&quot;lineal-fill&quot;
                          d&#x3D;&quot;M13.8 47.7v69.9h484.3V47.7c0-18.7-15.2-33.9-33.9-33.9H47.7C29 13.8 13.8 29 13.8 47.7z&quot;
                        &#x2F;&gt;
                        &lt;path
                          className&#x3D;&quot;lineal-stroke&quot;
                          d&#x3D;&quot;M498.2 131.5H13.8c-7.6 0-13.8-6.2-13.8-13.8v-70C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7v69.9c0 7.7-6.2 13.9-13.8 13.9zM27.7 103.8h456.6v-56c0-11.1-9-20.1-20.1-20.1H47.8c-11.1 0-20 9-20.1 20v56.1z&quot;
                        &#x2F;&gt;
                        &lt;path
                          className&#x3D;&quot;lineal-stroke&quot;
                          d&#x3D;&quot;M294.7 79.6h-26.3c-7.6 0-13.8-6.2-13.8-13.8S260.8 52 268.4 52h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8zm73.4 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8 0 7.6-6.2 13.8-13.8 13.8zm73.3 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8z&quot;
                        &#x2F;&gt;
                        &lt;path
                          className&#x3D;&quot;lineal-fill&quot;
                          d&#x3D;&quot;M112.8 268.5h286.4v63.6H112.8z&quot;
                        &#x2F;&gt;
                        &lt;path
                          className&#x3D;&quot;lineal-stroke&quot;
                          d&#x3D;&quot;M399.2 345.9H112.8c-7.6 0-13.8-6.2-13.8-13.8v-63.7c0-7.6 6.2-13.8 13.8-13.8h286.4c7.6 0 13.8 6.2 13.8 13.8v63.7c.1 7.6-6.1 13.8-13.8 13.8zm-272.6-27.6h258.8v-36H126.6v36zm230.9-95.5h-203c-7.6.2-14-5.8-14.2-13.5s5.8-14 13.5-14.2h203.8c7.6-.2 14 5.8 14.2 13.5s-5.8 14-13.5 14.2h-.8z&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;svg&gt;
                      &lt;h4&gt;Web Design&lt;&#x2F;h4&gt;
                      &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                        Nulla vitae elit libero, a pharetra augue. Donec id elit
                        non mi porta gravida at eget metus cras justo.
                      &lt;&#x2F;p&gt;
                      &lt;a
                        href&#x3D;&quot;#&quot;
                        className&#x3D;&quot;more hover !text-[#e2626b] focus:!text-[#e2626b] hover:!text-[#e2626b]&quot;
                      &gt;
                        Learn More
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card-body *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.card *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-6&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]&quot;&gt;
                  &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                    &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                      &lt;svg
                        xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                        viewBox&#x3D;&quot;0 0 512 454.6&quot;
                        data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;chat-2.svg&quot;
                        className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mb-3 m-[0_auto]&quot;
                      &gt;
                        &lt;path
                          className&#x3D;&quot;lineal-fill&quot;
                          d&#x3D;&quot;M131.5 126.8h249V15.2H15.2v256.3h116.3z&quot;
                        &#x2F;&gt;
                        &lt;path
                          className&#x3D;&quot;lineal-stroke&quot;
                          d&#x3D;&quot;M496.8 194.4c-8.4 0-15.2 6.8-15.2 15.2v158.3h-29.7c-8.4 0-15.2 6.8-15.2 15.2 0 .5 0 1.1.1 1.6l2.8 27.2-75.7-42.1c-2.3-1.3-4.8-1.9-7.4-1.9H146.7V142h233.8c8.4 0 15.2-6.8 15.2-15.2V15.2c0-8.4-6.8-15.2-15.2-15.2H15.2C6.8 0 0 6.8 0 15.2v256.3c0 8.4 6.8 15.2 15.2 15.2h101v96.4c0 8.4 6.8 15.2 15.2 15.2h221l97.8 54.3c7.3 4.1 16.6 1.4 20.7-5.9 1.5-2.7 2.2-5.9 1.8-9l-4.1-39.5h28.1c8.4 0 15.2-6.8 15.2-15.2V209.6c.1-8.4-6.7-15.2-15.1-15.2zM30.4 256.3V30.4h334.8v81.2H131.5c-8.4 0-15.2 6.8-15.2 15.2v129.5H30.4z&quot;
                        &#x2F;&gt;
                        &lt;path
                          className&#x3D;&quot;lineal-stroke&quot;
                          d&#x3D;&quot;M413.8 223.6H214.4c-8.4 0-15.2-6.8-15.2-15.2s6.8-15.2 15.2-15.2h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.2-15.2 15.2zm0 85.9H214.4c-8.4 0-15.2-6.8-15.2-15.2S206 279 214.4 279h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.3-15.2 15.3z&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;svg&gt;
                      &lt;h4&gt;Social Engagement&lt;&#x2F;h4&gt;
                      &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                        Nulla vitae elit libero, a pharetra augue. Donec id elit
                        non mi porta gravida at eget metus cras justo.
                      &lt;&#x2F;p&gt;
                      &lt;a
                        href&#x3D;&quot;#&quot;
                        className&#x3D;&quot;more hover !text-[#45c4a0] focus:!text-[#45c4a0] hover:!text-[#45c4a0]&quot;
                      &gt;
                        Learn More
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card-body *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.card *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-6&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]&quot;&gt;
                  &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                    &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                      &lt;svg
                        xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                        viewBox&#x3D;&quot;0 0 409.6 362.5&quot;
                        data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;megaphone.svg&quot;
                        className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#3f78e0] text-blue !mb-3 m-[0_auto]&quot;
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
                      &lt;h4&gt;Content Marketing&lt;&#x2F;h4&gt;
                      &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                        Nulla vitae elit libero, a pharetra augue. Donec id elit
                        non mi porta gravida at eget metus cras justo.
                      &lt;&#x2F;p&gt;
                      &lt;a
                        href&#x3D;&quot;#&quot;
                        className&#x3D;&quot;more hover !text-[#3f78e0] hover:!text-[#3f78e0]&quot;
                      &gt;
                        Learn More
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card-body *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.card *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.row *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.relative *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}

          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-4" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full xl:!order-2 lg:!order-2 !mt-[50px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                  <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%] !self-end !mt-[25px]">
                    <div className="card !bg-[#fef3e4]">
                      <div className="card-body p-[40px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 507 512"
                          data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/telephone-3.svg"
                          className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3"
                        >
                          <path
                            className="lineal-fill"
                            d="M402.4 437.9c0-10.5-4.4-20.4-12.6-28.7-5.1-5.6-10.6-11-16-16.1-2.7-2.6-5.5-5.3-8.1-8l-23.4-23.4c-18-18-41.3-18-59.4 0-2.4 2.4-4.9 4.8-7.3 7.2-6.4 6.4-13.1 12.9-19.6 19.9-11.6-5.2-23-12.4-36.5-23.2-13.4-10.9-62.2-59.7-73.2-73.2-10.7-13.5-17.9-25-23.2-36.5 7-6.4 13.5-13.1 19.9-19.6 2.4-2.4 4.8-4.9 7.2-7.3 18-18 18-41.3 0-59.4l-23.4-23.4c-2.7-2.7-5.4-5.4-8-8.1-5.2-5.3-10.6-10.8-16.1-16-8.3-8.2-18.3-12.6-28.7-12.6s-20.5 4.5-29.1 12.7l-.2.2L33.4 134c-10.8 10.6-17.4 24.8-18.6 39.9-2.1 25 5.3 48.4 11 63.6C39.6 275 60.4 309.7 91.3 347c11.2 13.3 23.2 26 35.9 37.8 11.8 12.7 24.4 24.7 37.8 35.8 37.2 31 72 51.7 109.5 65.6 15.3 5.7 38.6 13 63.6 11 15.1-1.2 29.3-7.8 39.9-18.6l11.6-11.4.2-.2c8.2-8.5 12.6-18.6 12.6-29.1z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M507 237.1C507 106.4 400.7 0 270 0c-54.9 0-108.2 19.1-150.6 54-6.1 5.1-7 14.2-1.9 20.3 5.1 6.1 14.1 7 20.2 2 37.3-30.6 84-47.4 132.3-47.4 114.9 0 208.3 93.4 208.3 208.3-.1 63.1-28.7 122.8-77.8 162.4l-.2-.2c-5.4-5.8-11.1-11.4-16.4-16.5l-.2-.1c-2.5-2.3-5-4.8-7.4-7.3l-23.8-23.8c-11.6-11.6-25.4-17.7-39.9-17.7s-28.3 6.1-39.9 17.7l-3.4 3.4c-1.1 1.1-2.6 2.5-3.8 3.7l-1.8 1.7c-3.5 3.5-7.1 7-10.8 10.7-8.6-4.9-16.8-10.5-24.4-16.7-12.9-10.5-60.4-58.1-71-71-6.2-7.7-11.8-15.8-16.8-24.4 3.7-3.6 7.2-7.2 10.7-10.7l1.7-1.8c1.3-1.3 2.6-2.6 3.8-3.9 1.1-1.1 2.2-2.3 3.4-3.4 23.5-23.5 23.5-56.2 0-79.7L149 148.3c4.5-6.1 9.4-11.8 14.8-17.1 58.5-58.5 153.6-58.5 212 0 44.9 45 56.6 113.4 29.3 170.8-3.4 7.2-.4 15.8 6.8 19.2s15.8.4 19.2-6.8c32.6-68.4 18.7-149.9-34.9-203.5-69.7-69.7-183.1-69.7-252.7 0-5.3 5.3-10.3 10.9-14.9 16.8-5-5.2-10.3-10.6-16-15.8-10.9-11-24.3-16.7-38.6-16.7s-27.8 5.7-39.1 16.6l-.2.2-.2.2-.1.1-11.3 11.6C9.9 136.9 1.8 154.2.4 172.7c-2.3 27.8 5.7 53.2 11.8 69.8 14.5 39.2 36.1 75.3 68.1 113.7C91.7 369.9 104 382.8 117 395c12.2 13 25.1 25.3 38.8 36.8 38.4 31.9 74.5 53.5 113.6 68 14.2 5.2 35.8 12.2 60 12.2 3.3 0 6.7-.1 10-.4 18.5-1.5 35.8-9.5 48.7-22.7l11.6-11.3.1-.1.2-.2.2-.2c10.9-11.3 16.6-24.9 16.6-39.1 0-4.5-.6-9-1.8-13.4 58-45 91.9-114.2 92-187.5zM379.5 457L368 468.4l-.1.1c-8.2 8.4-19.2 13.6-30.9 14.4-2.5.2-5 .3-7.5.3-19.5 0-37.8-6-49.9-10.4-36-13.4-69.5-33.4-105.2-63.1-12.9-10.8-25.1-22.3-36.6-34.6-.2-.3-.5-.5-.7-.7-12.3-11.4-23.8-23.6-34.6-36.5-29.8-35.9-49.9-69.4-63.3-105.4-5.2-14.1-11.9-35.3-10.1-57.4.9-11.8 6-22.8 14.5-31l.1-.1L55 132.5c5.8-5.6 12.4-8.5 19.1-8.5s13 2.9 18.6 8.4l.4.4c5.3 4.9 10.6 10.3 15.5 15.3 2.6 2.7 5.2 5.4 7.8 8l23.8 23.8c12.4 12.4 12.4 26.6 0 39l-3.6 3.6c-1.2 1.2-2.4 2.5-3.7 3.8l-1.9 1.8c-5.6 5.7-11.5 11.6-17.6 17.2-4.6 4.2-6 10.9-3.4 16.5 5.7 12.7 13.7 25.2 25 39.5l.1.2c11.7 14.4 60.9 63.6 75.3 75.3l.1.1c14.3 11.3 26.9 19.3 39.5 25 5.7 2.6 12.3 1.2 16.5-3.4 5.6-6.1 11.5-12 17.3-17.6l1.9-1.8c1.2-1.2 2.4-2.4 3.7-3.6s2.4-2.4 3.6-3.6c6.1-6.1 12.8-9.3 19.5-9.3s13.4 3.2 19.5 9.3l23.8 23.8c2.6 2.6 5.3 5.2 8 7.8 5 4.9 10.4 10.1 15.3 15.5l.4.4c3.9 3.9 8.4 10.3 8.4 18.6.1 6.6-2.8 13.2-8.4 19z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M274.8 258.4h-36.5c.1-4.4 6.9-9 14.7-14.3 13.4-9.2 30-20.6 30-40.4 0-20.4-18.1-31.4-35.1-31.4-16.6 0-34.1 10.2-34.1 29.2 0 8.7 3.9 13.2 11.6 13.2 8.6 0 13.3-5 13.3-9.7 0-7.8 5.1-9.4 9.4-9.4 7.1 0 9.6 4.8 9.6 8.8 0 8-9.9 15.2-20.4 22.9-12.4 9.1-25.2 18.5-25.2 31.2v14c0 5.2 6.6 8.4 11.3 8.4h51.5c4.4 0 8.2-5.3 8.2-11.4s-3.8-11.1-8.3-11.1z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M351.9 234.9h-4.8v-8.7c0-5-5-8.2-12.7-8.2s-12.7 3.2-12.7 8.2v8.7H313l24.6-49.3c.5-1 .8-2.2.8-3.3 0-6.2-8.2-10-12.7-10-4.6-.1-8.8 2.5-10.7 6.6l-33.4 65.5c-.8 1.5-1.3 3.2-1.3 5 0 5.5 3.6 9.3 9 9.3h32.4v13.9c0 5.8 6.6 8.4 12.7 8.4s12.7-2.6 12.7-8.4v-13.9h4.8c4.3 0 8.4-5.8 8.4-11.9 0-5.7-2.6-11.9-8.4-11.9z"
                          />
                        </svg>
                        <h4>24/7 Support</h4>
                        <p className="!mb-0">
                          Nulla vitae elit libero, a pharetra augue. Donec id
                          elit non mi porta.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !self-end !mt-[25px]">
                    <div className="card !bg-[#fae6e7]">
                      <div className="card-body p-[40px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 339.8 409.6"
                          data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/shield.svg"
                          className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3"
                        >
                          <path
                            className="lineal-stroke"
                            d="M169.9 409.6c-5.5 0-10.9-1.2-15.8-3.5C107.8 384.8 0 327.5 0 255.5V72.1c0-10.7 8.7-19.4 19.4-19.5 2.1 0 4.2.3 6.1 1 9.2 3.1 18.9 4.7 28.6 4.6 31.5.1 60.7-16.3 76.9-43.3C136.6 5.7 146.6 0 157.4 0h25c10.8.1 20.8 5.7 26.4 14.9 16.2 27 45.4 43.4 76.9 43.3 9.7 0 19.4-1.6 28.6-4.6 10.2-3.4 21.2 2.1 24.6 12.3.7 2 1 4.1 1 6.1v48c0 6.5-5.3 11.8-11.7 11.8-6.5 0-11.8-5.3-11.8-11.7V77.6c-10 2.8-20.3 4.2-30.6 4.2-39.7.2-76.5-20.6-97-54.6-1.3-2.2-3.7-3.6-6.3-3.6h-25c-2.6 0-5 1.4-6.3 3.6-20.5 34-57.3 54.8-97 54.6-10.3 0-20.6-1.4-30.6-4.2v178c0 47.7 72.5 98 140.4 129.3 3.8 1.7 8.2 1.7 12 0 67.9-31.3 140.4-81.6 140.4-129.3v-74.9c0-6.5 5.3-11.8 11.8-11.7 6.5 0 11.7 5.3 11.7 11.7v74.9c0 72-107.8 129.3-154.1 150.6-5 2.2-10.4 3.4-15.9 3.4z"
                          />
                          <path
                            className="lineal-fill"
                            d="M156 269l-62.2-31.1c-11.8-5.9-16.6-20.2-10.7-32 5.9-11.8 20.2-16.6 32-10.7l44.9 22.5 56.6-70.7c8.2-10.3 23.2-12 33.5-3.7 10.3 8.2 12 23.2 3.7 33.5l-68.6 85.8c-6.9 8.8-19.1 11.5-29.2 6.4z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M166.7 283.3c-5.5 0-11-1.3-15.9-3.8l-62.2-31.1c-17.6-8.8-24.7-30.2-15.9-47.8s30.2-24.7 47.8-15.9l36.4 18.2 50.6-63.3c12.3-15.4 34.7-17.9 50.1-5.6 15.4 12.3 17.9 34.7 5.6 50.1l-68.6 85.8c-6.8 8.5-17.1 13.4-27.9 13.4zm-62.2-78.8c-6.7 0-12.1 5.4-12.1 12.1 0 4.6 2.6 8.8 6.7 10.8l62.2 31.1c5.1 2.6 11.3 1.2 14.9-3.3l68.6-85.8c4.3-5.1 3.7-12.8-1.4-17.1-5.1-4.3-12.8-3.7-17.1 1.4-.1.2-.3.3-.4.5l-56.6 70.7c-3.5 4.3-9.5 5.6-14.4 3.2L110 205.6c-1.7-.7-3.6-1.1-5.5-1.1z"
                          />
                        </svg>
                        <h4>Secure Payments</h4>
                        <p className="!mb-0">
                          Nulla vitae elit libero, a pharetra augue. Donec id
                          elit non mi porta.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/*/column */}
                  <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <div className="card !bg-[#eaf3ef]">
                      <div className="card-body p-[40px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 409.6 361.2"
                          data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/cloud-computing-3.svg"
                          className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#7cb798] text-leaf !mb-3"
                        >
                          <path
                            className="lineal-stroke"
                            d="M309.9 231h-12.7c-6.1.2-11.3-4.6-11.5-10.8-.2-6.1 4.6-11.3 10.8-11.5h13.4c23 0 41.6-18.7 41.6-41.6 0-20-14.3-37.1-33.9-40.8-6-1.1-10-6.9-8.9-13 0-.3.1-.5.2-.7 10-38.6-13.2-78-51.8-88-5.9-1.5-11.9-2.3-18-2.3-24.7-.1-47.7 12.6-60.9 33.5-3 4.7-8.9 6.5-14 4.2-23.4-10.6-50.9-.2-61.5 23.2-2.7 6-4.1 12.5-4.1 19.1 0 3.6.4 7.2 1.3 10.7 1.4 6-2.3 12-8.3 13.4-.1 0-.2 0-.3.1-22.5 4.7-36.9 26.7-32.2 49.2 4 19.3 21 33.1 40.7 33.1h138.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8H99.8c-35.3 0-63.8-28.6-63.8-63.9 0-26.3 16.1-49.8 40.5-59.4-.1-1.8-.2-3.6-.2-5.4 0-38 30.8-68.7 68.8-68.7 6.6 0 13.2 1 19.5 2.8C196.6-4.7 255.9-12 297 20.1c26.6 20.7 40.1 54 35.4 87.4 33 12.4 49.6 49.3 37.2 82.3-9.3 24.8-33.2 41.2-59.7 41.2z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M204.8 334.3c-6.1 0-11.1-5-11.1-11.1V220.8c-.2-6.1 4.6-11.3 10.8-11.5 6.1-.2 11.3 4.6 11.5 10.8v103.1c-.1 6.1-5.1 11.1-11.2 11.1z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M398.5 334.3H11.1C5 334.1.1 329 .3 322.8c.2-5.9 4.9-10.6 10.8-10.8h387.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8z"
                          />
                          <path
                            className="lineal-fill"
                            d="M234.8 350.1h-60.1c-8 0-14.5-6.5-14.5-14.4v-25c0-8 6.5-14.5 14.4-14.5h60.1c8 0 14.5 6.5 14.5 14.5v25c.1 7.9-6.4 14.4-14.4 14.4z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M234.8 361.2h-60.1c-14.1 0-25.6-11.5-25.6-25.6v-25c0-14.1 11.5-25.6 25.6-25.6h60.1c14.1 0 25.6 11.5 25.6 25.6v25c0 14.2-11.4 25.6-25.6 25.6zm-60-53.9c-1.8 0-3.3 1.5-3.3 3.3v25c0 1.8 1.5 3.3 3.3 3.3h60.1c1.8 0 3.3-1.5 3.3-3.3v-25c0-1.8-1.5-3.3-3.3-3.3h-60.1zM71.3 356.5c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1zm267 0c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1z"
                          />
                        </svg>
                        <h4>Daily Updates</h4>
                        <p className="!mb-0">
                          Nulla vitae elit libero, a pharetra augue.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !self-start !mt-[25px]">
                    <div className="card !bg-[#e0e9fa]">
                      <div className="card-body p-[40px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 427.5"
                          className="icon-svg icon-svg-md !text-[#3f78e0] !mb-3 !w-[2.6rem] !h-[2.6rem]"
                        >
                          <path
                            className="lineal-fill"
                            d="M186.9 353.4h138.3V413H186.9z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M460.2 0H51.8C23.2 0 0 23.2 0 51.8v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.6h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-45.1c0-8-6.5-14.5-14.5-14.5H51.8C39.2 339 29 328.8 29 316.2V51.8C29 39.2 39.2 29 51.8 29h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-45.9c-8-.2-14.6 6.1-14.8 14.1-.2 8 6.1 14.6 14.1 14.8h46.7c28.6 0 51.7-23.2 51.8-51.8V51.8C512 23.2 488.8 0 460.2 0zM201.3 398.5v-30.6h109.4v30.6H201.3z"
                          />
                          <path
                            className="lineal-fill"
                            d="M218.2 291.3h-75.6v-90.6c0-20.9 16.9-37.8 37.8-37.8s37.8 16.9 37.8 37.8v90.6zm75.6 0h-75.6V155.4c0-20.9 16.9-37.8 37.8-37.8s37.8 16.9 37.8 37.8v135.9z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M369.4 215.4c8 0 14.4-6.4 14.5-14.4v-91c0-28.9-23.5-52.2-52.3-52.2-28.3 0-51.4 22.6-52.2 50.8-25.8-12.9-57.1-2.5-70.1 23.3-3.4 6.9-5.3 14.4-5.5 22.1-25.8-12.9-57.2-2.5-70.1 23.3-3.6 7.3-5.5 15.3-5.5 23.4v90.6c0 8 6.5 14.5 14.5 14.5h226.7c8 .2 14.6-6.1 14.8-14.1.2-8-6.1-14.6-14.1-14.8h-61.9V110c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v91c.1 8 6.6 14.4 14.6 14.4zm-212.3-14.7c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v76.1h-46.6v-76.1zm75.6 0v-45.4c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v121.5h-46.6v-76.1z"
                          />
                        </svg>
                        <h4>Market Research</h4>
                        <p className="!mb-0">
                          Nulla vitae elit libero, a pharetra augue. Donec id
                          elit non mi porta gravida at eget.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
                <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
                  What We Do?
                </h2>
                <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5">
                  The service we offer is specifically designed to meet your
                  needs.
                </h3>
                <p>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Maecenas sed diam eget risus varius blandit sit amet
                  non magna. Maecenas faucibus mollis interdum. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et.
                </p>
                <a
                  href="#"
                  className="btn btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] !rounded-[50rem] !mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  More Details
                </a>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={` &lt;section id&#x3D;&quot;snippet-4&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full xl:!order-2 lg:!order-2 !mt-[50px]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 md:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%] !self-end !mt-[25px]&quot;&gt;
                    &lt;div className&#x3D;&quot;card !bg-[#fef3e4]&quot;&gt;
                      &lt;div className&#x3D;&quot;card-body p-[40px]&quot;&gt;
                        &lt;svg
                          xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                          viewBox&#x3D;&quot;0 0 507 512&quot;
                          data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;telephone-3.svg&quot;
                          className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3&quot;
                        &gt;
                          &lt;path
                            className&#x3D;&quot;lineal-fill&quot;
                            d&#x3D;&quot;M402.4 437.9c0-10.5-4.4-20.4-12.6-28.7-5.1-5.6-10.6-11-16-16.1-2.7-2.6-5.5-5.3-8.1-8l-23.4-23.4c-18-18-41.3-18-59.4 0-2.4 2.4-4.9 4.8-7.3 7.2-6.4 6.4-13.1 12.9-19.6 19.9-11.6-5.2-23-12.4-36.5-23.2-13.4-10.9-62.2-59.7-73.2-73.2-10.7-13.5-17.9-25-23.2-36.5 7-6.4 13.5-13.1 19.9-19.6 2.4-2.4 4.8-4.9 7.2-7.3 18-18 18-41.3 0-59.4l-23.4-23.4c-2.7-2.7-5.4-5.4-8-8.1-5.2-5.3-10.6-10.8-16.1-16-8.3-8.2-18.3-12.6-28.7-12.6s-20.5 4.5-29.1 12.7l-.2.2L33.4 134c-10.8 10.6-17.4 24.8-18.6 39.9-2.1 25 5.3 48.4 11 63.6C39.6 275 60.4 309.7 91.3 347c11.2 13.3 23.2 26 35.9 37.8 11.8 12.7 24.4 24.7 37.8 35.8 37.2 31 72 51.7 109.5 65.6 15.3 5.7 38.6 13 63.6 11 15.1-1.2 29.3-7.8 39.9-18.6l11.6-11.4.2-.2c8.2-8.5 12.6-18.6 12.6-29.1z&quot;
                          &#x2F;&gt;
                          &lt;path
                            className&#x3D;&quot;lineal-stroke&quot;
                            d&#x3D;&quot;M507 237.1C507 106.4 400.7 0 270 0c-54.9 0-108.2 19.1-150.6 54-6.1 5.1-7 14.2-1.9 20.3 5.1 6.1 14.1 7 20.2 2 37.3-30.6 84-47.4 132.3-47.4 114.9 0 208.3 93.4 208.3 208.3-.1 63.1-28.7 122.8-77.8 162.4l-.2-.2c-5.4-5.8-11.1-11.4-16.4-16.5l-.2-.1c-2.5-2.3-5-4.8-7.4-7.3l-23.8-23.8c-11.6-11.6-25.4-17.7-39.9-17.7s-28.3 6.1-39.9 17.7l-3.4 3.4c-1.1 1.1-2.6 2.5-3.8 3.7l-1.8 1.7c-3.5 3.5-7.1 7-10.8 10.7-8.6-4.9-16.8-10.5-24.4-16.7-12.9-10.5-60.4-58.1-71-71-6.2-7.7-11.8-15.8-16.8-24.4 3.7-3.6 7.2-7.2 10.7-10.7l1.7-1.8c1.3-1.3 2.6-2.6 3.8-3.9 1.1-1.1 2.2-2.3 3.4-3.4 23.5-23.5 23.5-56.2 0-79.7L149 148.3c4.5-6.1 9.4-11.8 14.8-17.1 58.5-58.5 153.6-58.5 212 0 44.9 45 56.6 113.4 29.3 170.8-3.4 7.2-.4 15.8 6.8 19.2s15.8.4 19.2-6.8c32.6-68.4 18.7-149.9-34.9-203.5-69.7-69.7-183.1-69.7-252.7 0-5.3 5.3-10.3 10.9-14.9 16.8-5-5.2-10.3-10.6-16-15.8-10.9-11-24.3-16.7-38.6-16.7s-27.8 5.7-39.1 16.6l-.2.2-.2.2-.1.1-11.3 11.6C9.9 136.9 1.8 154.2.4 172.7c-2.3 27.8 5.7 53.2 11.8 69.8 14.5 39.2 36.1 75.3 68.1 113.7C91.7 369.9 104 382.8 117 395c12.2 13 25.1 25.3 38.8 36.8 38.4 31.9 74.5 53.5 113.6 68 14.2 5.2 35.8 12.2 60 12.2 3.3 0 6.7-.1 10-.4 18.5-1.5 35.8-9.5 48.7-22.7l11.6-11.3.1-.1.2-.2.2-.2c10.9-11.3 16.6-24.9 16.6-39.1 0-4.5-.6-9-1.8-13.4 58-45 91.9-114.2 92-187.5zM379.5 457L368 468.4l-.1.1c-8.2 8.4-19.2 13.6-30.9 14.4-2.5.2-5 .3-7.5.3-19.5 0-37.8-6-49.9-10.4-36-13.4-69.5-33.4-105.2-63.1-12.9-10.8-25.1-22.3-36.6-34.6-.2-.3-.5-.5-.7-.7-12.3-11.4-23.8-23.6-34.6-36.5-29.8-35.9-49.9-69.4-63.3-105.4-5.2-14.1-11.9-35.3-10.1-57.4.9-11.8 6-22.8 14.5-31l.1-.1L55 132.5c5.8-5.6 12.4-8.5 19.1-8.5s13 2.9 18.6 8.4l.4.4c5.3 4.9 10.6 10.3 15.5 15.3 2.6 2.7 5.2 5.4 7.8 8l23.8 23.8c12.4 12.4 12.4 26.6 0 39l-3.6 3.6c-1.2 1.2-2.4 2.5-3.7 3.8l-1.9 1.8c-5.6 5.7-11.5 11.6-17.6 17.2-4.6 4.2-6 10.9-3.4 16.5 5.7 12.7 13.7 25.2 25 39.5l.1.2c11.7 14.4 60.9 63.6 75.3 75.3l.1.1c14.3 11.3 26.9 19.3 39.5 25 5.7 2.6 12.3 1.2 16.5-3.4 5.6-6.1 11.5-12 17.3-17.6l1.9-1.8c1.2-1.2 2.4-2.4 3.7-3.6s2.4-2.4 3.6-3.6c6.1-6.1 12.8-9.3 19.5-9.3s13.4 3.2 19.5 9.3l23.8 23.8c2.6 2.6 5.3 5.2 8 7.8 5 4.9 10.4 10.1 15.3 15.5l.4.4c3.9 3.9 8.4 10.3 8.4 18.6.1 6.6-2.8 13.2-8.4 19z&quot;
                          &#x2F;&gt;
                          &lt;path
                            className&#x3D;&quot;lineal-stroke&quot;
                            d&#x3D;&quot;M274.8 258.4h-36.5c.1-4.4 6.9-9 14.7-14.3 13.4-9.2 30-20.6 30-40.4 0-20.4-18.1-31.4-35.1-31.4-16.6 0-34.1 10.2-34.1 29.2 0 8.7 3.9 13.2 11.6 13.2 8.6 0 13.3-5 13.3-9.7 0-7.8 5.1-9.4 9.4-9.4 7.1 0 9.6 4.8 9.6 8.8 0 8-9.9 15.2-20.4 22.9-12.4 9.1-25.2 18.5-25.2 31.2v14c0 5.2 6.6 8.4 11.3 8.4h51.5c4.4 0 8.2-5.3 8.2-11.4s-3.8-11.1-8.3-11.1z&quot;
                          &#x2F;&gt;
                          &lt;path
                            className&#x3D;&quot;lineal-stroke&quot;
                            d&#x3D;&quot;M351.9 234.9h-4.8v-8.7c0-5-5-8.2-12.7-8.2s-12.7 3.2-12.7 8.2v8.7H313l24.6-49.3c.5-1 .8-2.2.8-3.3 0-6.2-8.2-10-12.7-10-4.6-.1-8.8 2.5-10.7 6.6l-33.4 65.5c-.8 1.5-1.3 3.2-1.3 5 0 5.5 3.6 9.3 9 9.3h32.4v13.9c0 5.8 6.6 8.4 12.7 8.4s12.7-2.6 12.7-8.4v-13.9h4.8c4.3 0 8.4-5.8 8.4-11.9 0-5.7-2.6-11.9-8.4-11.9z&quot;
                          &#x2F;&gt;
                        &lt;&#x2F;svg&gt;
                        &lt;h4&gt;24&#x2F;7 Support&lt;&#x2F;h4&gt;
                        &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                          Nulla vitae elit libero, a pharetra augue. Donec id
                          elit non mi porta.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !self-end !mt-[25px]&quot;&gt;
                    &lt;div className&#x3D;&quot;card !bg-[#fae6e7]&quot;&gt;
                      &lt;div className&#x3D;&quot;card-body p-[40px]&quot;&gt;
                        &lt;svg
                          xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                          viewBox&#x3D;&quot;0 0 339.8 409.6&quot;
                          data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;shield.svg&quot;
                          className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3&quot;
                        &gt;
                          &lt;path
                            className&#x3D;&quot;lineal-stroke&quot;
                            d&#x3D;&quot;M169.9 409.6c-5.5 0-10.9-1.2-15.8-3.5C107.8 384.8 0 327.5 0 255.5V72.1c0-10.7 8.7-19.4 19.4-19.5 2.1 0 4.2.3 6.1 1 9.2 3.1 18.9 4.7 28.6 4.6 31.5.1 60.7-16.3 76.9-43.3C136.6 5.7 146.6 0 157.4 0h25c10.8.1 20.8 5.7 26.4 14.9 16.2 27 45.4 43.4 76.9 43.3 9.7 0 19.4-1.6 28.6-4.6 10.2-3.4 21.2 2.1 24.6 12.3.7 2 1 4.1 1 6.1v48c0 6.5-5.3 11.8-11.7 11.8-6.5 0-11.8-5.3-11.8-11.7V77.6c-10 2.8-20.3 4.2-30.6 4.2-39.7.2-76.5-20.6-97-54.6-1.3-2.2-3.7-3.6-6.3-3.6h-25c-2.6 0-5 1.4-6.3 3.6-20.5 34-57.3 54.8-97 54.6-10.3 0-20.6-1.4-30.6-4.2v178c0 47.7 72.5 98 140.4 129.3 3.8 1.7 8.2 1.7 12 0 67.9-31.3 140.4-81.6 140.4-129.3v-74.9c0-6.5 5.3-11.8 11.8-11.7 6.5 0 11.7 5.3 11.7 11.7v74.9c0 72-107.8 129.3-154.1 150.6-5 2.2-10.4 3.4-15.9 3.4z&quot;
                          &#x2F;&gt;
                          &lt;path
                            className&#x3D;&quot;lineal-fill&quot;
                            d&#x3D;&quot;M156 269l-62.2-31.1c-11.8-5.9-16.6-20.2-10.7-32 5.9-11.8 20.2-16.6 32-10.7l44.9 22.5 56.6-70.7c8.2-10.3 23.2-12 33.5-3.7 10.3 8.2 12 23.2 3.7 33.5l-68.6 85.8c-6.9 8.8-19.1 11.5-29.2 6.4z&quot;
                          &#x2F;&gt;
                          &lt;path
                            className&#x3D;&quot;lineal-stroke&quot;
                            d&#x3D;&quot;M166.7 283.3c-5.5 0-11-1.3-15.9-3.8l-62.2-31.1c-17.6-8.8-24.7-30.2-15.9-47.8s30.2-24.7 47.8-15.9l36.4 18.2 50.6-63.3c12.3-15.4 34.7-17.9 50.1-5.6 15.4 12.3 17.9 34.7 5.6 50.1l-68.6 85.8c-6.8 8.5-17.1 13.4-27.9 13.4zm-62.2-78.8c-6.7 0-12.1 5.4-12.1 12.1 0 4.6 2.6 8.8 6.7 10.8l62.2 31.1c5.1 2.6 11.3 1.2 14.9-3.3l68.6-85.8c4.3-5.1 3.7-12.8-1.4-17.1-5.1-4.3-12.8-3.7-17.1 1.4-.1.2-.3.3-.4.5l-56.6 70.7c-3.5 4.3-9.5 5.6-14.4 3.2L110 205.6c-1.7-.7-3.6-1.1-5.5-1.1z&quot;
                          &#x2F;&gt;
                        &lt;&#x2F;svg&gt;
                        &lt;h4&gt;Secure Payments&lt;&#x2F;h4&gt;
                        &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                          Nulla vitae elit libero, a pharetra augue. Donec id
                          elit non mi porta.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 md:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                    &lt;div className&#x3D;&quot;card !bg-[#eaf3ef]&quot;&gt;
                      &lt;div className&#x3D;&quot;card-body p-[40px]&quot;&gt;
                        &lt;svg
                          xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                          viewBox&#x3D;&quot;0 0 409.6 361.2&quot;
                          data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;cloud-computing-3.svg&quot;
                          className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#7cb798] text-leaf !mb-3&quot;
                        &gt;
                          &lt;path
                            className&#x3D;&quot;lineal-stroke&quot;
                            d&#x3D;&quot;M309.9 231h-12.7c-6.1.2-11.3-4.6-11.5-10.8-.2-6.1 4.6-11.3 10.8-11.5h13.4c23 0 41.6-18.7 41.6-41.6 0-20-14.3-37.1-33.9-40.8-6-1.1-10-6.9-8.9-13 0-.3.1-.5.2-.7 10-38.6-13.2-78-51.8-88-5.9-1.5-11.9-2.3-18-2.3-24.7-.1-47.7 12.6-60.9 33.5-3 4.7-8.9 6.5-14 4.2-23.4-10.6-50.9-.2-61.5 23.2-2.7 6-4.1 12.5-4.1 19.1 0 3.6.4 7.2 1.3 10.7 1.4 6-2.3 12-8.3 13.4-.1 0-.2 0-.3.1-22.5 4.7-36.9 26.7-32.2 49.2 4 19.3 21 33.1 40.7 33.1h138.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8H99.8c-35.3 0-63.8-28.6-63.8-63.9 0-26.3 16.1-49.8 40.5-59.4-.1-1.8-.2-3.6-.2-5.4 0-38 30.8-68.7 68.8-68.7 6.6 0 13.2 1 19.5 2.8C196.6-4.7 255.9-12 297 20.1c26.6 20.7 40.1 54 35.4 87.4 33 12.4 49.6 49.3 37.2 82.3-9.3 24.8-33.2 41.2-59.7 41.2z&quot;
                          &#x2F;&gt;
                          &lt;path
                            className&#x3D;&quot;lineal-stroke&quot;
                            d&#x3D;&quot;M204.8 334.3c-6.1 0-11.1-5-11.1-11.1V220.8c-.2-6.1 4.6-11.3 10.8-11.5 6.1-.2 11.3 4.6 11.5 10.8v103.1c-.1 6.1-5.1 11.1-11.2 11.1z&quot;
                          &#x2F;&gt;
                          &lt;path
                            className&#x3D;&quot;lineal-stroke&quot;
                            d&#x3D;&quot;M398.5 334.3H11.1C5 334.1.1 329 .3 322.8c.2-5.9 4.9-10.6 10.8-10.8h387.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8z&quot;
                          &#x2F;&gt;
                          &lt;path
                            className&#x3D;&quot;lineal-fill&quot;
                            d&#x3D;&quot;M234.8 350.1h-60.1c-8 0-14.5-6.5-14.5-14.4v-25c0-8 6.5-14.5 14.4-14.5h60.1c8 0 14.5 6.5 14.5 14.5v25c.1 7.9-6.4 14.4-14.4 14.4z&quot;
                          &#x2F;&gt;
                          &lt;path
                            className&#x3D;&quot;lineal-stroke&quot;
                            d&#x3D;&quot;M234.8 361.2h-60.1c-14.1 0-25.6-11.5-25.6-25.6v-25c0-14.1 11.5-25.6 25.6-25.6h60.1c14.1 0 25.6 11.5 25.6 25.6v25c0 14.2-11.4 25.6-25.6 25.6zm-60-53.9c-1.8 0-3.3 1.5-3.3 3.3v25c0 1.8 1.5 3.3 3.3 3.3h60.1c1.8 0 3.3-1.5 3.3-3.3v-25c0-1.8-1.5-3.3-3.3-3.3h-60.1zM71.3 356.5c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1zm267 0c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1z&quot;
                          &#x2F;&gt;
                        &lt;&#x2F;svg&gt;
                        &lt;h4&gt;Daily Updates&lt;&#x2F;h4&gt;
                        &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                          Nulla vitae elit libero, a pharetra augue.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !self-start !mt-[25px]&quot;&gt;
                    &lt;div className&#x3D;&quot;card !bg-[#e0e9fa]&quot;&gt;
                      &lt;div className&#x3D;&quot;card-body p-[40px]&quot;&gt;
                        &lt;svg
                          xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                          viewBox&#x3D;&quot;0 0 512 427.5&quot;
                          className&#x3D;&quot;icon-svg icon-svg-md !text-[#3f78e0] !mb-3 !w-[2.6rem] !h-[2.6rem]&quot;
                        &gt;
                          &lt;path
                            className&#x3D;&quot;lineal-fill&quot;
                            d&#x3D;&quot;M186.9 353.4h138.3V413H186.9z&quot;
                          &#x2F;&gt;
                          &lt;path
                            className&#x3D;&quot;lineal-stroke&quot;
                            d&#x3D;&quot;M460.2 0H51.8C23.2 0 0 23.2 0 51.8v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.6h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-45.1c0-8-6.5-14.5-14.5-14.5H51.8C39.2 339 29 328.8 29 316.2V51.8C29 39.2 39.2 29 51.8 29h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-45.9c-8-.2-14.6 6.1-14.8 14.1-.2 8 6.1 14.6 14.1 14.8h46.7c28.6 0 51.7-23.2 51.8-51.8V51.8C512 23.2 488.8 0 460.2 0zM201.3 398.5v-30.6h109.4v30.6H201.3z&quot;
                          &#x2F;&gt;
                          &lt;path
                            className&#x3D;&quot;lineal-fill&quot;
                            d&#x3D;&quot;M218.2 291.3h-75.6v-90.6c0-20.9 16.9-37.8 37.8-37.8s37.8 16.9 37.8 37.8v90.6zm75.6 0h-75.6V155.4c0-20.9 16.9-37.8 37.8-37.8s37.8 16.9 37.8 37.8v135.9z&quot;
                          &#x2F;&gt;
                          &lt;path
                            className&#x3D;&quot;lineal-stroke&quot;
                            d&#x3D;&quot;M369.4 215.4c8 0 14.4-6.4 14.5-14.4v-91c0-28.9-23.5-52.2-52.3-52.2-28.3 0-51.4 22.6-52.2 50.8-25.8-12.9-57.1-2.5-70.1 23.3-3.4 6.9-5.3 14.4-5.5 22.1-25.8-12.9-57.2-2.5-70.1 23.3-3.6 7.3-5.5 15.3-5.5 23.4v90.6c0 8 6.5 14.5 14.5 14.5h226.7c8 .2 14.6-6.1 14.8-14.1.2-8-6.1-14.6-14.1-14.8h-61.9V110c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v91c.1 8 6.6 14.4 14.6 14.4zm-212.3-14.7c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v76.1h-46.6v-76.1zm75.6 0v-45.4c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v121.5h-46.6v-76.1z&quot;
                          &#x2F;&gt;
                        &lt;&#x2F;svg&gt;
                        &lt;h4&gt;Market Research&lt;&#x2F;h4&gt;
                        &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                          Nulla vitae elit libero, a pharetra augue. Donec id
                          elit non mi porta gravida at eget.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]&quot;&gt;
                  What We Do?
                &lt;&#x2F;h2&gt;
                &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5&quot;&gt;
                  The service we offer is specifically designed to meet your
                  needs.
                &lt;&#x2F;h3&gt;
                &lt;p&gt;
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Maecenas sed diam eget risus varius blandit sit amet
                  non magna. Maecenas faucibus mollis interdum. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et.
                &lt;&#x2F;p&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] !rounded-[50rem] !mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                &gt;
                  More Details
                &lt;&#x2F;a&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}

          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-5" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px] !relative">
                <div
                  className="shape rounded !bg-[#fae6e7] rellax !block !absolute"
                  data-rellax-speed={0}
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "50%",
                    height: "60%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 0,
                  }}
                />
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] !relative">
                  <div className="w-6/12 flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]">
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                      srcSet="/assets/img/photos/sa5@2x.jpg 2x"
                      alt="image"
                      width="300"
                      height="174"
                      src="/assets/img/photos/sa5.jpg"
                    />
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] !ml-auto"
                      srcSet="/assets/img/photos/sa6@2x.jpg 2x"
                      alt="image"
                      width="250"
                      height="276"
                      src="/assets/img/photos/sa6.jpg"
                    />
                  </div>
                  {/* /column */}
                  <div className="w-6/12 flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]">
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5"
                      srcSet="/assets/img/photos/sa7@2x.jpg 2x"
                      alt="image"
                      width="300"
                      height="181"
                      src="/assets/img/photos/sa7.jpg"
                    />
                    <img
                      className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto]"
                      srcSet="/assets/img/photos/sa8@2x.jpg 2x"
                      alt="image"
                      width="250"
                      height="276"
                      src="/assets/img/photos/sa8.jpg"
                    />
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5">
                  We have considered our solutions to support every stage of
                  growth.
                </h3>
                <p className="!mb-5">
                  Etiam porta sem malesuada magna mollis euismod. Donec
                  ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                  porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                  tellus ac cursus commodo.
                </p>
                <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                    <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                      <li className="relative !pl-6">
                        <span>
                          <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#e2626b] !bg-[#fae3e4] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                        </span>
                        <span>
                          Aenean quam ornare curabitur blandit consectetur.
                        </span>
                      </li>
                      <li className="!mt-3 relative !pl-6">
                        <span>
                          <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#e2626b] !bg-[#fae3e4] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                        </span>
                        <span>
                          Nullam quis risus eget urna mollis ornare aenean leo.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                    <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                      <li className="relative !pl-6">
                        <span>
                          <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#e2626b] !bg-[#fae3e4] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                        </span>
                        <span>
                          Etiam porta euismod malesuada mollis nisl ornare.
                        </span>
                      </li>
                      <li className="!mt-3 relative !pl-6">
                        <span>
                          <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#e2626b] !bg-[#fae3e4] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']" />
                        </span>
                        <span>
                          Vivamus sagittis lacus augue rutrum maecenas odio.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={`   &lt;section id&#x3D;&quot;snippet-5&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px] !relative&quot;&gt;
                &lt;div
                  className&#x3D;&quot;shape rounded !bg-[#fae6e7] rellax !block !absolute&quot;
                  data-rellax-speed&#x3D;{0}
                  style&#x3D;{{
                    top: &quot;50%&quot;,
                    left: &quot;50%&quot;,
                    width: &quot;50%&quot;,
                    height: &quot;60%&quot;,
                    transform: &quot;translate(-50%, -50%)&quot;,
                    zIndex: 0,
                  }}
                &#x2F;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] !relative&quot;&gt;
                  &lt;div className&#x3D;&quot;w-6&#x2F;12 flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]&quot;&gt;
                    &lt;img
                      className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5&quot;
                      srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa5@2x.jpg 2x&quot;
                      alt&#x3D;&quot;image&quot;
                      width&#x3D;&quot;300&quot;
                      height&#x3D;&quot;174&quot;
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa5.jpg&quot;
                    &#x2F;&gt;
                    &lt;img
                      className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10&#x2F;12 flex-[0_0_auto] !ml-auto&quot;
                      srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa6@2x.jpg 2x&quot;
                      alt&#x3D;&quot;image&quot;
                      width&#x3D;&quot;250&quot;
                      height&#x3D;&quot;276&quot;
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa6.jpg&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;w-6&#x2F;12 flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] max-w-full !mt-[25px]&quot;&gt;
                    &lt;img
                      className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5&quot;
                      srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa7@2x.jpg 2x&quot;
                      alt&#x3D;&quot;image&quot;
                      width&#x3D;&quot;300&quot;
                      height&#x3D;&quot;181&quot;
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa7.jpg&quot;
                    &#x2F;&gt;
                    &lt;img
                      className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10&#x2F;12 flex-[0_0_auto]&quot;
                      srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa8@2x.jpg 2x&quot;
                      alt&#x3D;&quot;image&quot;
                      width&#x3D;&quot;250&quot;
                      height&#x3D;&quot;276&quot;
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa8.jpg&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5&quot;&gt;
                  We have considered our solutions to support every stage of
                  growth.
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!mb-5&quot;&gt;
                  Etiam porta sem malesuada magna mollis euismod. Donec
                  ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                  porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                  tellus ac cursus commodo.
                &lt;&#x2F;p&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-15px]&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]&quot;&gt;
                    &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-leaf !mb-0&quot;&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6&quot;&gt;
                        &lt;span&gt;
                          &lt;i className&#x3D;&quot;uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#e2626b] !bg-[#fae3e4] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                        &lt;&#x2F;span&gt;
                        &lt;span&gt;
                          Aenean quam ornare curabitur blandit consectetur.
                        &lt;&#x2F;span&gt;
                      &lt;&#x2F;li&gt;
                      &lt;li className&#x3D;&quot;!mt-3 relative !pl-6&quot;&gt;
                        &lt;span&gt;
                          &lt;i className&#x3D;&quot;uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#e2626b] !bg-[#fae3e4] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                        &lt;&#x2F;span&gt;
                        &lt;span&gt;
                          Nullam quis risus eget urna mollis ornare aenean leo.
                        &lt;&#x2F;span&gt;
                      &lt;&#x2F;li&gt;
                    &lt;&#x2F;ul&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]&quot;&gt;
                    &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-leaf !mb-0&quot;&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6&quot;&gt;
                        &lt;span&gt;
                          &lt;i className&#x3D;&quot;uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#e2626b] !bg-[#fae3e4] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                        &lt;&#x2F;span&gt;
                        &lt;span&gt;
                          Etiam porta euismod malesuada mollis nisl ornare.
                        &lt;&#x2F;span&gt;
                      &lt;&#x2F;li&gt;
                      &lt;li className&#x3D;&quot;!mt-3 relative !pl-6&quot;&gt;
                        &lt;span&gt;
                          &lt;i className&#x3D;&quot;uil uil-check !w-4 !h-4 text-[0.8rem] leading-none !tracking-[normal] text-center table !text-[#e2626b] !bg-[#fae3e4] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                        &lt;&#x2F;span&gt;
                        &lt;span&gt;
                          Vivamus sagittis lacus augue rutrum maecenas odio.
                        &lt;&#x2F;span&gt;
                      &lt;&#x2F;li&gt;
                    &lt;&#x2F;ul&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}

          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-6" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
                <figure className="m-0 p-0">
                  <img
                    className="w-auto"
                    srcSet="/assets/img/illustrations/i7@2x.png 2x"
                    alt="image"
                    width="800"
                    height="621"
                    src="/assets/img/illustrations/i7.png"
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
                <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5">
                  We make your spending stress-free for you to have the perfect
                  control.
                </h3>
                <p className="!mb-6">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et.
                </p>
                <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] !mt-[15px] max-w-full">
                    <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                      <li className="relative !pl-6">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                        </span>
                        <span>Aenean quam ornare. Curabitur blandit.</span>
                      </li>
                      <li className="relative !pl-6 !mt-3">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                        </span>
                        <span>Nullam quis risus eget urna mollis ornare.</span>
                      </li>
                    </ul>
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] !mt-[15px] max-w-full">
                    <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                      <li className="relative !pl-6">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                        </span>
                        <span>Etiam porta euismod malesuada mollis.</span>
                      </li>
                      <li className="relative !pl-6 !mt-3">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                        </span>
                        <span>Vivamus sagittis lacus vel augue rutrum.</span>
                      </li>
                    </ul>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={` &lt;section id&#x3D;&quot;snippet-6&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2&quot;&gt;
                &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;w-auto&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i7@2x.png 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    width&#x3D;&quot;800&quot;
                    height&#x3D;&quot;621&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i7.png&quot;
                  &#x2F;&gt;
                &lt;&#x2F;figure&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
                &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5&quot;&gt;
                  We make your spending stress-free for you to have the perfect
                  control.
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!mb-6&quot;&gt;
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et.
                &lt;&#x2F;p&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-15px]&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] !mt-[15px] max-w-full&quot;&gt;
                    &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary !mb-0&quot;&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6&quot;&gt;
                        &lt;span&gt;
                          &lt;i className&#x3D;&quot;uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell absolute left-0&quot; &#x2F;&gt;
                        &lt;&#x2F;span&gt;
                        &lt;span&gt;Aenean quam ornare. Curabitur blandit.&lt;&#x2F;span&gt;
                      &lt;&#x2F;li&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6 !mt-3&quot;&gt;
                        &lt;span&gt;
                          &lt;i className&#x3D;&quot;uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell absolute left-0&quot; &#x2F;&gt;
                        &lt;&#x2F;span&gt;
                        &lt;span&gt;Nullam quis risus eget urna mollis ornare.&lt;&#x2F;span&gt;
                      &lt;&#x2F;li&gt;
                    &lt;&#x2F;ul&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] !mt-[15px] max-w-full&quot;&gt;
                    &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary !mb-0&quot;&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6&quot;&gt;
                        &lt;span&gt;
                          &lt;i className&#x3D;&quot;uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell absolute left-0&quot; &#x2F;&gt;
                        &lt;&#x2F;span&gt;
                        &lt;span&gt;Etiam porta euismod malesuada mollis.&lt;&#x2F;span&gt;
                      &lt;&#x2F;li&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6 !mt-3&quot;&gt;
                        &lt;span&gt;
                          &lt;i className&#x3D;&quot;uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell absolute left-0&quot; &#x2F;&gt;
                        &lt;&#x2F;span&gt;
                        &lt;span&gt;Vivamus sagittis lacus vel augue rutrum.&lt;&#x2F;span&gt;
                      &lt;&#x2F;li&gt;
                    &lt;&#x2F;ul&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}

          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-7" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-10">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[30px] xl:!order-2 lg:!order-2">
                <ul className="progress-list m-0 p-0 list-none">
                  {skills2.map((elm, i) => (
                    <li key={i} className="!mb-[1rem]">
                      <p className="!mb-[.25rem]">{elm.name}</p>
                      <div className={`progressbar line relative ${elm.color}`}>
                        <ProgressBarComponent max={elm.value} />
                      </div>
                    </li>
                  ))}
                </ul>
                {/* /.progress-list */}
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[30px]">
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                  What I Do?
                </h2>
                <p className="lead text-[1rem] !leading-[1.65] font-medium !mb-5">
                  Duis mollis est commodo luctus nisi erat porttitor ligula,
                  eget lacinia odio sem nec elit. Nullam quis risus eget urna
                  mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
                  Praesent commodo cursus magna, vel scelerisque nisl.
                </p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !text-center">
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 442.8"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/browser.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#a07cc5] text-violet !mb-3 m-[0_auto]"
                >
                  <path
                    className="lineal-stroke"
                    d="M464.2 442.8H47.7C21.4 442.8 0 421.4 0 395.1V47.7C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7c0 7.6-6.2 13.8-13.8 13.9-7.6 0-13.8-6.2-13.9-13.8 0-11.1-9-20-20.1-20.1H47.7c-11.1 0-20 9-20.1 20.1v347.3c0 11.1 9 20.1 20.1 20.1h416.5c11.1 0 20.1-9 20.1-20.1V209.4c0-7.6 6.2-13.8 13.8-13.9 7.6 0 13.8 6.2 13.9 13.8V395c0 26.4-21.4 47.8-47.8 47.8z"
                  />
                  <path
                    className="lineal-fill"
                    d="M13.8 47.7v69.9h484.3V47.7c0-18.7-15.2-33.9-33.9-33.9H47.7C29 13.8 13.8 29 13.8 47.7z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M498.2 131.5H13.8c-7.6 0-13.8-6.2-13.8-13.8v-70C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7v69.9c0 7.7-6.2 13.9-13.8 13.9zM27.7 103.8h456.6v-56c0-11.1-9-20.1-20.1-20.1H47.8c-11.1 0-20 9-20.1 20v56.1z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M294.7 79.6h-26.3c-7.6 0-13.8-6.2-13.8-13.8S260.8 52 268.4 52h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8zm73.4 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8 0 7.6-6.2 13.8-13.8 13.8zm73.3 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8z"
                  />
                  <path
                    className="lineal-fill"
                    d="M112.8 268.5h286.4v63.6H112.8z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M399.2 345.9H112.8c-7.6 0-13.8-6.2-13.8-13.8v-63.7c0-7.6 6.2-13.8 13.8-13.8h286.4c7.6 0 13.8 6.2 13.8 13.8v63.7c.1 7.6-6.1 13.8-13.8 13.8zm-272.6-27.6h258.8v-36H126.6v36zm230.9-95.5h-203c-7.6.2-14-5.8-14.2-13.5s5.8-14 13.5-14.2h203.8c7.6-.2 14 5.8 14.2 13.5s-5.8 14-13.5 14.2h-.8z"
                  />
                </svg>
                <h4>Web Design</h4>
                <p className="!mb-2">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus. Cras justo cum sociis natoque
                  magnis.
                </p>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 327.4 512"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/smartphone.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#3f78e0] text-blue !mb-3 m-[0_auto]"
                >
                  <path
                    className="lineal-fill"
                    d="M313.7 72.3V47c0-18.4-14.9-33.2-33.2-33.2H47c-18.4 0-33.2 14.9-33.2 33.2v25.3h299.9zM13.8 398.4V465c0 18.4 14.9 33.2 33.2 33.2h233.4c18.4 0 33.2-14.9 33.2-33.2v-66.6H13.8z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M280.4 0H47C21.1 0 0 21.1 0 47v418c0 25.9 21.1 47 47 47h233.4c25.9 0 47-21.1 47-47V352.3c0-7.6-6.2-13.8-13.8-13.7-7.6 0-13.7 6.2-13.7 13.7v32.3H27.5V86.1h272.4V256c0 7.6 6.1 13.8 13.7 13.8s13.8-6.1 13.8-13.7V47c0-25.9-21-47-47-47zm19.5 412.1V465c0 10.8-8.7 19.5-19.5 19.5H47c-10.8 0-19.5-8.7-19.5-19.5v-52.9h272.4zM27.5 58.6V47c0-10.8 8.7-19.5 19.5-19.5h233.4c10.8 0 19.5 8.7 19.5 19.5v11.6H27.5z"
                  />
                  <circle cx="163.7" cy="448.3" r="9.4" />
                  <path
                    className="lineal-stroke"
                    d="M163.7 471.5c-12.8 0-23.2-10.4-23.2-23.2 0-12.8 10.4-23.2 23.2-23.2s23.2 10.4 23.2 23.2-10.4 23.2-23.2 23.2zm-25.4-248.1H69.5c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.8 6.2 13.8 13.8s-6.2 13.8-13.8 13.8h-55v32.1h55c7.6 0 13.8 6.2 13.8 13.8-.1 7.5-6.2 13.7-13.8 13.7z"
                  />
                  <path
                    className="lineal-fill"
                    d="M189.2 150H258v59.6h-68.8z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M258 223.4h-68.8c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.6-6.1 13.8-13.7 13.8zm-55-27.5h41.3v-32.1h-41.4l.1 32.1z"
                  />
                  <path
                    className="lineal-fill"
                    d="M69.5 265.6h68.8v59.6H69.5z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M138.3 339H69.5c-7.6 0-13.8-6.2-13.8-13.8v-59.7c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.7-6.1 13.9-13.7 13.9zm-55-27.5h41.2v-32.1H83.2l.1 32.1zM258 339h-68.8c-7.6 0-13.8-6.2-13.7-13.8 0-7.6 6.2-13.7 13.7-13.7h55v-32.1h-55c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.8 6.2 13.8 13.8v59.6c0 7.6-6.2 13.8-13.8 13.8z"
                  />
                </svg>
                <h4>Mobile Design</h4>
                <p className="!mb-2">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus. Cras justo cum sociis natoque
                  magnis.
                </p>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 427.5"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/settings-3.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#7cb798] text-leaf !mb-3 m-[0_auto]"
                >
                  <path
                    className="lineal-fill"
                    d="M186.9 353.4h138.3V413H186.9z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M460.2 0H51.8C23.2 0 0 23.2 0 51.7v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.7h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-41.9c.3-1.2.4-2.4.4-3.6-.2-8-6.9-14.3-14.8-14.1H51.8C39.2 339 29 328.8 29 316.2V51.7c0-12.6 10.2-22.8 22.8-22.8h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-46.7c-8 .2-14.3 6.9-14.1 14.8.2 8 6.9 14.3 14.8 14.1h45.9c28.6 0 51.7-23.2 51.8-51.7V51.7C512 23.2 488.8 0 460.2 0zM310.7 367.9v30.7H201.3v-30.7h109.4z"
                  />
                  <path
                    className="lineal-fill"
                    d="M220.1 271.6c-12.7-19.8-6.9-46.3 12.9-59s46.3-6.9 59 12.9c9 14 9 32 0 46.1h100.6v-50.3l-30.4-4.9c-4.9-16.3-13.6-31.3-25.3-43.7l11-28.7-47.3-27.3-19.4 23.8c-16.6-3.9-33.9-3.9-50.5 0l-19.4-23.8-47.2 27.3 11 28.7c-11.7 12.4-20.3 27.4-25.3 43.7l-30.3 4.9v50.3h100.6z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M392.5 286.1H291.9c-8 0-14.5-6.5-14.5-14.5 0-2.8.8-5.5 2.3-7.8 8.4-13.1 4.6-30.6-8.6-39-13.1-8.4-30.6-4.6-39 8.6-5.9 9.3-5.9 21.1 0 30.4 4.3 6.7 2.4 15.7-4.3 20-2.3 1.5-5.1 2.3-7.8 2.3H119.4c-8 0-14.5-6.5-14.4-14.5v-50.3c0-7.1 5.2-13.1 12.2-14.3l21.8-3.5c4.7-12.2 11.3-23.6 19.5-33.7l-7.9-20.6c-2.5-6.6.1-14.1 6.3-17.7l47.3-27.3c6.2-3.5 14-2.1 18.5 3.4l13.9 17.1c12.9-2 26.1-2 39 0l13.9-17.1c4.5-5.5 12.3-7 18.5-3.4l47.3 27.3c6.2 3.6 8.8 11.1 6.3 17.7l-7.9 20.6c8.2 10.2 14.7 21.5 19.4 33.7l21.8 3.5c7 1.1 12.2 7.2 12.2 14.3v50.3c-.1 8-6.6 14.5-14.6 14.5zm-80-29h65.6v-23.5l-18.2-2.9c-5.5-.9-10-4.8-11.6-10.1-4.3-14.2-11.9-27.2-22-38-3.8-4-5-9.9-3-15.1l6.6-17.2-25.9-15-11.6 14.3c-3.5 4.3-9.1 6.2-14.5 5-14.5-3.3-29.5-3.3-43.9 0-5.4 1.2-11-.7-14.5-5l-11.6-14.3-25.9 15 6.6 17.2c2 5.2.8 11-3 15.1-10.1 10.8-17.7 23.8-22 38-1.6 5.3-6.1 9.2-11.6 10.1l-18.2 2.9v23.5h65.6c-.4-2.8-.6-5.7-.6-8.6.4-31.6 26.3-56.8 57.9-56.4 31 .4 56 25.4 56.4 56.4 0 2.9-.2 5.8-.6 8.6z"
                  />
                </svg>
                <h4>Development</h4>
                <p className="!mb-2">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus. Cras justo cum sociis natoque
                  magnis.
                </p>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 511.9"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/search-2.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#d16b86] text-pink !mb-3 m-[0_auto]"
                >
                  <path
                    className="lineal-stroke"
                    d="M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"
                  />
                  <circle
                    className="lineal-fill"
                    cx="297.1"
                    cy="214.9"
                    r="111.1"
                  />
                  <path
                    className="lineal-stroke"
                    d="M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"
                  />
                </svg>
                <h4>SEO</h4>
                <p className="!mb-2">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus. Cras justo cum sociis natoque
                  magnis.
                </p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={`  &lt;section id&#x3D;&quot;snippet-7&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-10&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[30px] xl:!order-2 lg:!order-2&quot;&gt;
                &lt;ul className&#x3D;&quot;progress-list m-0 p-0 list-none&quot;&gt;
                  &lbrace;skills2.map((elm, i) &#x3D;&gt; (
                    &lt;li key&#x3D;&lbrace;i&rbrace; className&#x3D;&quot;!mb-[1rem]&quot;&gt;
                      &lt;p className&#x3D;&quot;!mb-[.25rem]&quot;&gt;&lbrace;elm.name&rbrace;&lt;&#x2F;p&gt;
                      &lt;div className&#x3D;&lbrace;&#x60;progressbar line relative $&lbrace;elm.color&rbrace;&#x60;&rbrace;&gt;
                        &lt;ProgressBarComponent max&#x3D;&lbrace;elm.value&rbrace; &#x2F;&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;li&gt;
                  ))&rbrace;
                &lt;&#x2F;ul&gt;
                &lbrace;&#x2F;* &#x2F;.progress-list *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
                  What I Do?
                &lt;&#x2F;h2&gt;
                &lt;p className&#x3D;&quot;lead text-[1rem] !leading-[1.65] font-medium !mb-5&quot;&gt;
                  Duis mollis est commodo luctus nisi erat porttitor ligula,
                  eget lacinia odio sem nec elit. Nullam quis risus eget urna
                  mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
                  Praesent commodo cursus magna, vel scelerisque nisl.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !text-center&quot;&gt;
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 512 442.8&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;browser.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#a07cc5] text-violet !mb-3 m-[0_auto]&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M464.2 442.8H47.7C21.4 442.8 0 421.4 0 395.1V47.7C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7c0 7.6-6.2 13.8-13.8 13.9-7.6 0-13.8-6.2-13.9-13.8 0-11.1-9-20-20.1-20.1H47.7c-11.1 0-20 9-20.1 20.1v347.3c0 11.1 9 20.1 20.1 20.1h416.5c11.1 0 20.1-9 20.1-20.1V209.4c0-7.6 6.2-13.8 13.8-13.9 7.6 0 13.8 6.2 13.9 13.8V395c0 26.4-21.4 47.8-47.8 47.8z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-fill&quot;
                    d&#x3D;&quot;M13.8 47.7v69.9h484.3V47.7c0-18.7-15.2-33.9-33.9-33.9H47.7C29 13.8 13.8 29 13.8 47.7z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M498.2 131.5H13.8c-7.6 0-13.8-6.2-13.8-13.8v-70C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7v69.9c0 7.7-6.2 13.9-13.8 13.9zM27.7 103.8h456.6v-56c0-11.1-9-20.1-20.1-20.1H47.8c-11.1 0-20 9-20.1 20v56.1z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M294.7 79.6h-26.3c-7.6 0-13.8-6.2-13.8-13.8S260.8 52 268.4 52h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8zm73.4 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8 0 7.6-6.2 13.8-13.8 13.8zm73.3 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-fill&quot;
                    d&#x3D;&quot;M112.8 268.5h286.4v63.6H112.8z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M399.2 345.9H112.8c-7.6 0-13.8-6.2-13.8-13.8v-63.7c0-7.6 6.2-13.8 13.8-13.8h286.4c7.6 0 13.8 6.2 13.8 13.8v63.7c.1 7.6-6.1 13.8-13.8 13.8zm-272.6-27.6h258.8v-36H126.6v36zm230.9-95.5h-203c-7.6.2-14-5.8-14.2-13.5s5.8-14 13.5-14.2h203.8c7.6-.2 14 5.8 14.2 13.5s-5.8 14-13.5 14.2h-.8z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
                &lt;h4&gt;Web Design&lt;&#x2F;h4&gt;
                &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus. Cras justo cum sociis natoque
                  magnis.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 327.4 512&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;smartphone.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#3f78e0] text-blue !mb-3 m-[0_auto]&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;lineal-fill&quot;
                    d&#x3D;&quot;M313.7 72.3V47c0-18.4-14.9-33.2-33.2-33.2H47c-18.4 0-33.2 14.9-33.2 33.2v25.3h299.9zM13.8 398.4V465c0 18.4 14.9 33.2 33.2 33.2h233.4c18.4 0 33.2-14.9 33.2-33.2v-66.6H13.8z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M280.4 0H47C21.1 0 0 21.1 0 47v418c0 25.9 21.1 47 47 47h233.4c25.9 0 47-21.1 47-47V352.3c0-7.6-6.2-13.8-13.8-13.7-7.6 0-13.7 6.2-13.7 13.7v32.3H27.5V86.1h272.4V256c0 7.6 6.1 13.8 13.7 13.8s13.8-6.1 13.8-13.7V47c0-25.9-21-47-47-47zm19.5 412.1V465c0 10.8-8.7 19.5-19.5 19.5H47c-10.8 0-19.5-8.7-19.5-19.5v-52.9h272.4zM27.5 58.6V47c0-10.8 8.7-19.5 19.5-19.5h233.4c10.8 0 19.5 8.7 19.5 19.5v11.6H27.5z&quot;
                  &#x2F;&gt;
                  &lt;circle cx&#x3D;&quot;163.7&quot; cy&#x3D;&quot;448.3&quot; r&#x3D;&quot;9.4&quot; &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M163.7 471.5c-12.8 0-23.2-10.4-23.2-23.2 0-12.8 10.4-23.2 23.2-23.2s23.2 10.4 23.2 23.2-10.4 23.2-23.2 23.2zm-25.4-248.1H69.5c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.8 6.2 13.8 13.8s-6.2 13.8-13.8 13.8h-55v32.1h55c7.6 0 13.8 6.2 13.8 13.8-.1 7.5-6.2 13.7-13.8 13.7z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-fill&quot;
                    d&#x3D;&quot;M189.2 150H258v59.6h-68.8z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M258 223.4h-68.8c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.6-6.1 13.8-13.7 13.8zm-55-27.5h41.3v-32.1h-41.4l.1 32.1z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-fill&quot;
                    d&#x3D;&quot;M69.5 265.6h68.8v59.6H69.5z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M138.3 339H69.5c-7.6 0-13.8-6.2-13.8-13.8v-59.7c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.7-6.1 13.9-13.7 13.9zm-55-27.5h41.2v-32.1H83.2l.1 32.1zM258 339h-68.8c-7.6 0-13.8-6.2-13.7-13.8 0-7.6 6.2-13.7 13.7-13.7h55v-32.1h-55c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.8 6.2 13.8 13.8v59.6c0 7.6-6.2 13.8-13.8 13.8z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
                &lt;h4&gt;Mobile Design&lt;&#x2F;h4&gt;
                &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus. Cras justo cum sociis natoque
                  magnis.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 512 427.5&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;settings-3.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#7cb798] text-leaf !mb-3 m-[0_auto]&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;lineal-fill&quot;
                    d&#x3D;&quot;M186.9 353.4h138.3V413H186.9z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M460.2 0H51.8C23.2 0 0 23.2 0 51.7v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.7h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-41.9c.3-1.2.4-2.4.4-3.6-.2-8-6.9-14.3-14.8-14.1H51.8C39.2 339 29 328.8 29 316.2V51.7c0-12.6 10.2-22.8 22.8-22.8h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-46.7c-8 .2-14.3 6.9-14.1 14.8.2 8 6.9 14.3 14.8 14.1h45.9c28.6 0 51.7-23.2 51.8-51.7V51.7C512 23.2 488.8 0 460.2 0zM310.7 367.9v30.7H201.3v-30.7h109.4z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-fill&quot;
                    d&#x3D;&quot;M220.1 271.6c-12.7-19.8-6.9-46.3 12.9-59s46.3-6.9 59 12.9c9 14 9 32 0 46.1h100.6v-50.3l-30.4-4.9c-4.9-16.3-13.6-31.3-25.3-43.7l11-28.7-47.3-27.3-19.4 23.8c-16.6-3.9-33.9-3.9-50.5 0l-19.4-23.8-47.2 27.3 11 28.7c-11.7 12.4-20.3 27.4-25.3 43.7l-30.3 4.9v50.3h100.6z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M392.5 286.1H291.9c-8 0-14.5-6.5-14.5-14.5 0-2.8.8-5.5 2.3-7.8 8.4-13.1 4.6-30.6-8.6-39-13.1-8.4-30.6-4.6-39 8.6-5.9 9.3-5.9 21.1 0 30.4 4.3 6.7 2.4 15.7-4.3 20-2.3 1.5-5.1 2.3-7.8 2.3H119.4c-8 0-14.5-6.5-14.4-14.5v-50.3c0-7.1 5.2-13.1 12.2-14.3l21.8-3.5c4.7-12.2 11.3-23.6 19.5-33.7l-7.9-20.6c-2.5-6.6.1-14.1 6.3-17.7l47.3-27.3c6.2-3.5 14-2.1 18.5 3.4l13.9 17.1c12.9-2 26.1-2 39 0l13.9-17.1c4.5-5.5 12.3-7 18.5-3.4l47.3 27.3c6.2 3.6 8.8 11.1 6.3 17.7l-7.9 20.6c8.2 10.2 14.7 21.5 19.4 33.7l21.8 3.5c7 1.1 12.2 7.2 12.2 14.3v50.3c-.1 8-6.6 14.5-14.6 14.5zm-80-29h65.6v-23.5l-18.2-2.9c-5.5-.9-10-4.8-11.6-10.1-4.3-14.2-11.9-27.2-22-38-3.8-4-5-9.9-3-15.1l6.6-17.2-25.9-15-11.6 14.3c-3.5 4.3-9.1 6.2-14.5 5-14.5-3.3-29.5-3.3-43.9 0-5.4 1.2-11-.7-14.5-5l-11.6-14.3-25.9 15 6.6 17.2c2 5.2.8 11-3 15.1-10.1 10.8-17.7 23.8-22 38-1.6 5.3-6.1 9.2-11.6 10.1l-18.2 2.9v23.5h65.6c-.4-2.8-.6-5.7-.6-8.6.4-31.6 26.3-56.8 57.9-56.4 31 .4 56 25.4 56.4 56.4 0 2.9-.2 5.8-.6 8.6z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
                &lt;h4&gt;Development&lt;&#x2F;h4&gt;
                &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus. Cras justo cum sociis natoque
                  magnis.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 512 511.9&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;search-2.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#d16b86] text-pink !mb-3 m-[0_auto]&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z&quot;
                  &#x2F;&gt;
                  &lt;circle
                    className&#x3D;&quot;lineal-fill&quot;
                    cx&#x3D;&quot;297.1&quot;
                    cy&#x3D;&quot;214.9&quot;
                    r&#x3D;&quot;111.1&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
                &lt;h4&gt;SEO&lt;&#x2F;h4&gt;
                &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus. Cras justo cum sociis natoque
                  magnis.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;

          &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-8" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] !text-center">
              <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
                <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
                  App Features
                </h2>
                <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-9 xl:!px-12">
                  Sandbox is the only app you need to track your goals for
                  better health.
                </h3>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-40px]">
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/target.svg"
                      className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#54a8c7] text-aqua !mr-4"
                    >
                      <circle
                        className="lineal-fill"
                        cx="283.8"
                        cy="283.8"
                        r={143}
                      />
                      <path
                        className="lineal-stroke"
                        d="M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z"
                      />
                      <path
                        className="lineal-fill"
                        d="M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3"
                      />
                      <path
                        className="lineal-stroke"
                        d="M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z"
                      />
                      <path
                        className="lineal-fill"
                        d="M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="!mb-1">Fitness Goal</h4>
                    <p className="!mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 316.5 409.6"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/medal.svg"
                      className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#fab758] text-yellow !mr-4"
                    >
                      <path
                        className="lineal-stroke"
                        d="M158.2 409.6c-59.4 0-107.5-48.2-107.5-107.5S99 194.6 158.3 194.6s107.5 48.2 107.5 107.5c0 20-5.6 39.6-16.1 56.6-3.4 5.5-10.6 7.1-16 3.7s-7.1-10.6-3.7-16c24.4-39.5 12.2-91.3-27.3-115.8S111.3 218.5 86.8 258s-12.2 91.3 27.3 115.8c22.5 13.9 50.2 16.4 74.8 6.8 6-2.3 12.7.6 15.1 6.6 2.3 6-.6 12.7-6.6 15.1-12.5 4.8-25.8 7.3-39.2 7.3z"
                      />
                      <path
                        className="lineal-fill"
                        d="M158.2 206.2c19.9 0 39.4 6.2 55.6 17.8l88.1-152.5c4.6-8 3.7-18-2.2-25l-23-27.1c-4.1-4.9-10.2-7.7-16.6-7.7H56.4c-6.4 0-12.5 2.8-16.6 7.7l-23 27.2c-6 7-6.9 17-2.2 25l88 152.4c16.2-11.6 35.7-17.8 55.6-17.8zm73.4-134l-73.3 127-73.4-127h146.7z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M213.8 235.6c-2.4 0-4.8-.8-6.8-2.2-29.2-20.8-68.5-20.8-97.7 0-5.2 3.7-12.5 2.5-16.2-2.7l-.6-.9-88-152.5c-7-12.2-5.7-27.5 3.4-38.3l23-27.2C37.2 4.3 46.6 0 56.4 0h203.7c9.8 0 19.2 4.3 25.5 11.8l23 27.1c9.1 10.8 10.5 26.1 3.4 38.3l-88.1 152.5c-1.6 2.8-4.4 4.9-7.6 5.6-.8.2-1.6.3-2.5.3zM56.4 23.3c-3 0-5.8 1.3-7.8 3.6L25.7 54c-2.8 3.3-3.2 7.9-1 11.7l82.1 142c11.2-6.1 23.4-10.2 36-12.1L74.8 78c-3.2-5.6-1.3-12.7 4.3-15.9 1.8-1 3.8-1.6 5.8-1.6h146.7c6.4 0 11.6 5.2 11.6 11.7 0 2-.5 4-1.6 5.8l-67.9 117.7c12.6 1.8 24.8 5.9 36 12.1l82-142c2.1-3.7 1.7-8.4-1-11.6l-23-27.2c-1.9-2.3-4.8-3.6-7.7-3.6l-203.6-.1zm48.7 60.5l53.2 92.1 53.2-92.1H105.1zm45.1 192.9l-4.4 2.7c-1.1.8-2.4 1.2-3.8 1.2-4.4 0-7.4-4.7-7.4-9.4-.1-3.3 1.6-6.3 4.4-8l20-12.1c1.3-.8 2.9-1.1 4.4-1.1 4.8 0 10.4 2.9 10.4 7.4v96.2c0 4.9-5.9 7.3-11.8 7.3s-11.8-2.4-11.8-7.3v-76.9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="!mb-1">Activity Tracking</h4>
                    <p className="!mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 409.6 391.2"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/clock-3.svg"
                      className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#e2626b] text-red !mr-4"
                    >
                      <path
                        className="lineal-fill"
                        d="M148.9 61.3C136 24.4 95.7 4.9 58.8 17.8S2.4 71.1 15.3 108c6.5 18.5 20.3 33.5 38.3 41.4 15.9-42.8 51.3-75.5 95.3-88.1z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M53.5 160.7c-1.6 0-3.1-.4-4.6-1C7.5 141.4-11.3 93 7 51.5s66.8-60.3 108.2-42c20.8 9.2 36.9 26.6 44.4 48.1 2.1 5.9-1 12.3-6.9 14.4-.2.1-.4.1-.6.2-40.5 11.6-73.1 41.7-87.9 81.1-1.8 4.5-6 7.4-10.7 7.4zM82.1 25.2c-32.8 0-59.5 26.6-59.5 59.5 0 19.4 9.5 37.7 25.4 48.8C65.2 97.2 95.8 69 133.4 54.7c-10.7-18.3-30.2-29.5-51.3-29.5z"
                      />
                      <path
                        className="lineal-fill"
                        d="M327.5 13.9c-30.1 0-56.9 19-66.8 47.5 44 12.6 79.4 45.2 95.4 88.1 35.8-15.8 52-57.6 36.2-93.3-11.3-25.8-36.7-42.3-64.8-42.3z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M356.1 160.7c-4.7 0-8.9-2.9-10.6-7.4-14.8-39.5-47.4-69.6-87.9-81.2-6-1.7-9.5-8-7.8-14 .1-.2.1-.4.2-.6C264.9 14.7 311.7-7.9 354.5 7S420 68.8 405 111.7c-7.5 21.5-23.6 38.9-44.4 48.1-1.4.6-2.9.9-4.5.9zM276.2 54.6c37.6 14.3 68.1 42.5 85.4 78.8 26.9-18.8 33.5-55.9 14.7-82.8s-55.9-33.5-82.8-14.7c-7.1 4.9-13 11.3-17.3 18.7zm-79.4 176c-3.1 0-6.1-.7-8.8-2.1l-45.1-22.6c-5.6-2.8-7.8-9.6-5-15.2s9.6-7.8 15.2-5l43.3 21.6 57.4-57.4c4.4-4.4 11.6-4.4 16 0s4.4 11.6 0 16l-58.9 58.9c-3.8 3.7-8.8 5.8-14.1 5.8z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M204.8 391.2c-96.8 0-175.6-78.8-175.6-175.6S108 39.9 204.8 39.9c69.8 0 133 41.3 161 105.2 2.5 5.7-.1 12.4-5.9 14.9s-12.4-.1-14.9-5.9c-24.4-55.7-79.4-91.7-140.2-91.7-84.4 0-153 68.6-153 153s68.6 153 153 153 153-68.6 153-153c-.2-6.2 4.7-11.5 11-11.6 6.2-.2 11.5 4.7 11.6 11v.7c0 96.9-78.8 175.7-175.6 175.7z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M287.1 281.5c-1.9 0-3.7-.5-5.4-1.4l-102.4-55.7c-5.5-3-7.5-9.8-4.5-15.3s9.8-7.5 15.3-4.5l102.5 55.7c5.5 3 7.5 9.8 4.5 15.3-2 3.6-5.8 5.9-10 5.9zm-82.3-178.4c-6.2 0-11.3-5-11.3-11.3V51.2c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3v40.5c0 6.3-5 11.3-11.3 11.4zm0 288.1c-6.2 0-11.3-5.1-11.3-11.3v-40.5c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3v40.5c0 6.2-5 11.3-11.3 11.3zm164.3-164.3h-40.5c-6.2.2-11.5-4.7-11.6-11-.2-6.2 4.7-11.5 11-11.6h41.2c6.2.2 11.2 5.4 11 11.6-.3 6-5.1 10.8-11.1 11zm-288.1 0H40.5c-6.2-.2-11.2-5.4-11-11.6.2-6 5-10.8 11-11H81c6.2.2 11.2 5.4 11 11.6-.2 6-5 10.8-11 11z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M241.2 62.5c-6.2 0-11.3-5.1-11.3-11.3V27.9c0-2.9-2.4-5.3-5.3-5.3H185c-2.9 0-5.3 2.4-5.3 5.3v23.4c0 6.2-5.1 11.3-11.3 11.3s-11.3-5.1-11.3-11.3V27.9C157.1 12.5 169.6 0 185 0h39.6c15.4 0 27.9 12.5 27.9 27.9v23.4c-.1 6.2-5.1 11.2-11.3 11.2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="!mb-1">Sleep Analysis</h4>
                    <p className="!mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 409.6 409.6"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/check.svg"
                      className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#d16b86] text-pink !mr-4"
                    >
                      <path
                        className="lineal-stroke"
                        d="M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-49.9 18.2-98.1 51.2-135.5 4.4-5 12-5.5 17-1.1s5.5 12 1.1 17c-29.1 33-45.2 75.5-45.2 119.5 0 99.6 81.1 180.7 180.7 180.7s180.7-81.1 180.7-180.7S304.4 24.1 204.8 24.1c-27.3-.1-54.2 6.1-78.7 18-6 2.9-13.2.4-16.1-5.6-2.9-6-.4-13.2 5.6-16.1C143.4 6.9 173.9-.1 204.8 0c112.9 0 204.8 91.9 204.8 204.8s-91.9 204.8-204.8 204.8z"
                      />
                      <path
                        className="lineal-fill"
                        d="M349.4 204.8c0 79.8-64.7 144.6-144.6 144.6S60.2 284.6 60.2 204.8 125 60.2 204.8 60.2 349.4 125 349.4 204.8z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M204.8 361.4c-86.4 0-156.6-70.2-156.6-156.6S118.4 48.2 204.8 48.2s156.6 70.2 156.6 156.6-70.2 156.6-156.6 156.6zm0-289.1c-73.1 0-132.5 59.4-132.5 132.5s59.4 132.5 132.5 132.5 132.5-59.5 132.5-132.5S277.9 72.3 204.8 72.3z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M200.9 246.7c-8.8 0-17.2-3.5-23.5-9.7L145 204.5c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l32.5 32.5c3.6 3.5 9.3 3.5 12.8 0l49.8-49.9c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17L224.4 237c-6.2 6.2-14.7 9.7-23.5 9.7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="!mb-1">Workout Report</h4>
                    <p className="!mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 466.4"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/shop-2.svg"
                      className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#45c4a0] text-green !mr-4"
                    >
                      <path
                        className="lineal-fill"
                        d="M201.4 172.5h-96l26.1-158.4h83zm205.2 0h-96L297.5 14.1h83zm-216.7 97.1c7.2-7 16.8-10.9 26.9-10.8 9.6 0 18.8 3.1 26.9 5.8 4 1.4 8.1 2.6 12.3 3.5 4.2-.9 8.3-2.1 12.3-3.5 8.1-2.7 17.3-5.8 26.9-5.8 10-.1 19.7 3.7 26.9 10.8 24.4 22.9 15.9 48.4 10.9 63.7l-.3.8c-4.6 14-22 59.8-51.4 59.8-15.6 0-20.9-2.5-24.8-4.4l-.6-.3-.6.3c-3.9 1.9-9.1 4.4-24.8 4.4-29.3 0-46.7-45.8-51.4-59.8l-.3-.8c-4.8-15.3-13.3-40.8 11.1-63.7z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M511.1 147.4l-6.4-25.9c-1.9-7.6-9.6-12.1-17.2-10.2-7.5 1.9-12.1 9.5-10.3 17l6.4 25.9c.4 1.8-.7 3.6-2.5 4.1-.3.1-.5.1-.8.1h-61.7l-14.2-86-7.3-44.1h52.6c1.5 0 2.9 1 3.2 2.5l6.6 26.8c1.9 7.6 9.6 12.1 17.2 10.2 7.5-1.9 12.1-9.5 10.3-17L480.5 24C477 9.9 464.3 0 449.8 0H62.2C47.7 0 35 9.9 31.5 24L.9 147.4c-4.2 17 6.1 34.1 23.1 38.3 2.5.6 5.1.9 7.6.9h8.1v265.6c0 7.8 6.3 14.1 14.2 14.1h404.2c7.8 0 14.1-6.3 14.1-14.1V257.8c0-7.8-6.3-14.2-14.1-14.2s-14.2 6.3-14.2 14.1V438H68V186.7h412.4c17.5 0 31.6-14.2 31.6-31.6 0-2.6-.3-5.2-.9-7.7zM227.5 28.3h56.9l10.8 130.1h-78.4l10.7-130.1zM29 157.1c-.7-.8-.9-1.9-.6-2.9L59 30.8c.4-1.5 1.7-2.5 3.2-2.5h52.6l-5.3 32.1-16.2 98H31.6c-1 0-2-.5-2.6-1.3zm98.3-30.8l16.2-98h55.6l-10.7 130.1H122l5.3-32.1zm196.3 32.1L315.2 57l-2.4-28.7h55.6l16.2 98 5.3 32.1h-66.3z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M256 220c-7.8 0-14.1 6.3-14.1 14.1v15c-7.4-2.3-15.9-4.4-25-4.4-13.6-.1-26.8 5.1-36.6 14.6-31 29.1-19.9 62.4-14.6 78.4l.3.8c6.9 20.9 27 69.5 64.8 69.5 12.6 0 19.9-1.5 25.3-3.4 5.4 2 12.8 3.4 25.3 3.4 37.8 0 57.9-48.6 64.8-69.5l.3-.8c5.3-16 16.3-49.3-14.6-78.4-9.8-9.5-22.9-14.7-36.6-14.6-9.1 0-17.6 2.1-25 4.4v-15c-.1-7.8-6.4-14.1-14.3-14.1zm39.2 53c6.4-.1 12.7 2.4 17.2 6.9 16.5 15.5 13 31.3 7.1 48.9l-.3.8c-8.2 24.9-23.2 50.1-37.9 50.1-12.4 0-15.8-1.7-18.6-3l-.7-.3c-3.9-1.8-8.3-1.8-12.2 0l-.6.3c-2.8 1.3-6.2 3-18.6 3-14.8 0-29.7-25.1-37.9-50l-.3-.8c-5.8-17.6-9.3-33.4 7.1-48.9 4.5-4.6 10.8-7.1 17.2-6.9 7.3 0 15 2.6 22.5 5 4.6 1.7 9.4 3 14.2 4 1.7.3 3.3.3 5 0 4.8-1 9.6-2.3 14.2-4 7.6-2.6 15.3-5.1 22.6-5.1z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="!mb-1">Nutritional Analysis</h4>
                    <p className="!mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 409.6 356.2"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/team.svg"
                      className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#747ed1] text-purple !mr-4"
                    >
                      <path
                        className="lineal-fill"
                        d="M265.2 180.7H144.4v-17.6c0-33.3 27-60.4 60.4-60.4s60.4 27 60.4 60.4v17.6z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M265.2 191.7H144.4c-6.1 0-11.1-5-11.1-11.1V163c-.5-39.5 31.1-71.8 70.6-72.3s71.8 31.1 72.3 70.6v19.3c0 6.2-4.9 11.1-11 11.1zm-109.7-22.1h98.6v-6.5c.4-27.2-21.4-49.6-48.6-50s-49.6 21.4-50 48.6v7.9z"
                      />
                      <path
                        className="lineal-fill"
                        d="M250.4 56.7c0 25.2-20.4 45.6-45.6 45.6s-45.6-20.4-45.6-45.6 20.4-45.6 45.6-45.6c25.2 0 45.6 20.4 45.6 45.6z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M204.8 113.3c-31.3 0-56.7-25.4-56.7-56.7S173.5-.1 204.8-.1s56.7 25.4 56.7 56.7c-.1 31.3-25.4 56.7-56.7 56.7zm0-91.2c-19.1 0-34.5 15.4-34.5 34.5s15.4 34.5 34.5 34.5 34.5-15.4 34.5-34.5c0-19-15.5-34.4-34.5-34.5zm193.7 334.1H296.8c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.7c-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.4-6 2.3-11.9 8.3-13.3 5.8-1.4 11.7 2.2 13.2 8 1.2 4.9 1.8 9.9 1.8 14.9v14.8c0 6.1-4.9 11.1-11.1 11.1z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M347.6 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.2 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.3-27.3 27.4 0 15.1 12.3 27.3 27.4 27.3S375 256 375 241c0-15.1-12.3-27.3-27.4-27.4zM112.8 356.2H11.1c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1.2 10.9 5.3 10.7 11.4-.2 5.9-4.9 10.6-10.7 10.7-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.5-5.9 2.2-11.9 8.1-13.4s11.9 2.2 13.4 8.1c1.2 4.9 1.8 9.9 1.8 14.9v14.8c.1 6.1-4.9 11.1-11.1 11.1.1 0 .1 0 0 0z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M61.9 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.1 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.2-27.3 27.4 0 15.1 12.2 27.4 27.4 27.4 15.1 0 27.3-12.2 27.3-27.3 0-15.2-12.3-27.4-27.4-27.5zm142.9 72.1c-6.1 0-11.1-5-11.1-11.1v-56.4c-.2-6.1 4.6-11.2 10.7-11.4 6.1-.2 11.2 4.6 11.4 10.7v57.1c.1 6.2-4.9 11.1-11 11.1z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M279.5 285.7H130.1c-6.1.2-11.2-4.6-11.4-10.7s4.6-11.2 10.7-11.4h150.2c6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="!mb-1">Activity Sharing</h4>
                    <p className="!mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={` &lt;section id&#x3D;&quot;snippet-8&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
              &lt;div className&#x3D;&quot;md:w-10&#x2F;12 xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]&quot;&gt;
                  App Features
                &lt;&#x2F;h2&gt;
                &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-9 xl:!px-12&quot;&gt;
                  Sandbox is the only app you need to track your goals for
                  better health.
                &lt;&#x2F;h3&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-40px]&quot;&gt;
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[40px]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                  &lt;div&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 512 512&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;target.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#54a8c7] text-aqua !mr-4&quot;
                    &gt;
                      &lt;circle
                        className&#x3D;&quot;lineal-fill&quot;
                        cx&#x3D;&quot;283.8&quot;
                        cy&#x3D;&quot;283.8&quot;
                        r&#x3D;{143}
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
                    &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Fitness Goal&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[40px]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                  &lt;div&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 316.5 409.6&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;medal.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#fab758] text-yellow !mr-4&quot;
                    &gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M158.2 409.6c-59.4 0-107.5-48.2-107.5-107.5S99 194.6 158.3 194.6s107.5 48.2 107.5 107.5c0 20-5.6 39.6-16.1 56.6-3.4 5.5-10.6 7.1-16 3.7s-7.1-10.6-3.7-16c24.4-39.5 12.2-91.3-27.3-115.8S111.3 218.5 86.8 258s-12.2 91.3 27.3 115.8c22.5 13.9 50.2 16.4 74.8 6.8 6-2.3 12.7.6 15.1 6.6 2.3 6-.6 12.7-6.6 15.1-12.5 4.8-25.8 7.3-39.2 7.3z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M158.2 206.2c19.9 0 39.4 6.2 55.6 17.8l88.1-152.5c4.6-8 3.7-18-2.2-25l-23-27.1c-4.1-4.9-10.2-7.7-16.6-7.7H56.4c-6.4 0-12.5 2.8-16.6 7.7l-23 27.2c-6 7-6.9 17-2.2 25l88 152.4c16.2-11.6 35.7-17.8 55.6-17.8zm73.4-134l-73.3 127-73.4-127h146.7z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M213.8 235.6c-2.4 0-4.8-.8-6.8-2.2-29.2-20.8-68.5-20.8-97.7 0-5.2 3.7-12.5 2.5-16.2-2.7l-.6-.9-88-152.5c-7-12.2-5.7-27.5 3.4-38.3l23-27.2C37.2 4.3 46.6 0 56.4 0h203.7c9.8 0 19.2 4.3 25.5 11.8l23 27.1c9.1 10.8 10.5 26.1 3.4 38.3l-88.1 152.5c-1.6 2.8-4.4 4.9-7.6 5.6-.8.2-1.6.3-2.5.3zM56.4 23.3c-3 0-5.8 1.3-7.8 3.6L25.7 54c-2.8 3.3-3.2 7.9-1 11.7l82.1 142c11.2-6.1 23.4-10.2 36-12.1L74.8 78c-3.2-5.6-1.3-12.7 4.3-15.9 1.8-1 3.8-1.6 5.8-1.6h146.7c6.4 0 11.6 5.2 11.6 11.7 0 2-.5 4-1.6 5.8l-67.9 117.7c12.6 1.8 24.8 5.9 36 12.1l82-142c2.1-3.7 1.7-8.4-1-11.6l-23-27.2c-1.9-2.3-4.8-3.6-7.7-3.6l-203.6-.1zm48.7 60.5l53.2 92.1 53.2-92.1H105.1zm45.1 192.9l-4.4 2.7c-1.1.8-2.4 1.2-3.8 1.2-4.4 0-7.4-4.7-7.4-9.4-.1-3.3 1.6-6.3 4.4-8l20-12.1c1.3-.8 2.9-1.1 4.4-1.1 4.8 0 10.4 2.9 10.4 7.4v96.2c0 4.9-5.9 7.3-11.8 7.3s-11.8-2.4-11.8-7.3v-76.9z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Activity Tracking&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[40px]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                  &lt;div&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 409.6 391.2&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;clock-3.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#e2626b] text-red !mr-4&quot;
                    &gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M148.9 61.3C136 24.4 95.7 4.9 58.8 17.8S2.4 71.1 15.3 108c6.5 18.5 20.3 33.5 38.3 41.4 15.9-42.8 51.3-75.5 95.3-88.1z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M53.5 160.7c-1.6 0-3.1-.4-4.6-1C7.5 141.4-11.3 93 7 51.5s66.8-60.3 108.2-42c20.8 9.2 36.9 26.6 44.4 48.1 2.1 5.9-1 12.3-6.9 14.4-.2.1-.4.1-.6.2-40.5 11.6-73.1 41.7-87.9 81.1-1.8 4.5-6 7.4-10.7 7.4zM82.1 25.2c-32.8 0-59.5 26.6-59.5 59.5 0 19.4 9.5 37.7 25.4 48.8C65.2 97.2 95.8 69 133.4 54.7c-10.7-18.3-30.2-29.5-51.3-29.5z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M327.5 13.9c-30.1 0-56.9 19-66.8 47.5 44 12.6 79.4 45.2 95.4 88.1 35.8-15.8 52-57.6 36.2-93.3-11.3-25.8-36.7-42.3-64.8-42.3z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M356.1 160.7c-4.7 0-8.9-2.9-10.6-7.4-14.8-39.5-47.4-69.6-87.9-81.2-6-1.7-9.5-8-7.8-14 .1-.2.1-.4.2-.6C264.9 14.7 311.7-7.9 354.5 7S420 68.8 405 111.7c-7.5 21.5-23.6 38.9-44.4 48.1-1.4.6-2.9.9-4.5.9zM276.2 54.6c37.6 14.3 68.1 42.5 85.4 78.8 26.9-18.8 33.5-55.9 14.7-82.8s-55.9-33.5-82.8-14.7c-7.1 4.9-13 11.3-17.3 18.7zm-79.4 176c-3.1 0-6.1-.7-8.8-2.1l-45.1-22.6c-5.6-2.8-7.8-9.6-5-15.2s9.6-7.8 15.2-5l43.3 21.6 57.4-57.4c4.4-4.4 11.6-4.4 16 0s4.4 11.6 0 16l-58.9 58.9c-3.8 3.7-8.8 5.8-14.1 5.8z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M204.8 391.2c-96.8 0-175.6-78.8-175.6-175.6S108 39.9 204.8 39.9c69.8 0 133 41.3 161 105.2 2.5 5.7-.1 12.4-5.9 14.9s-12.4-.1-14.9-5.9c-24.4-55.7-79.4-91.7-140.2-91.7-84.4 0-153 68.6-153 153s68.6 153 153 153 153-68.6 153-153c-.2-6.2 4.7-11.5 11-11.6 6.2-.2 11.5 4.7 11.6 11v.7c0 96.9-78.8 175.7-175.6 175.7z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M287.1 281.5c-1.9 0-3.7-.5-5.4-1.4l-102.4-55.7c-5.5-3-7.5-9.8-4.5-15.3s9.8-7.5 15.3-4.5l102.5 55.7c5.5 3 7.5 9.8 4.5 15.3-2 3.6-5.8 5.9-10 5.9zm-82.3-178.4c-6.2 0-11.3-5-11.3-11.3V51.2c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3v40.5c0 6.3-5 11.3-11.3 11.4zm0 288.1c-6.2 0-11.3-5.1-11.3-11.3v-40.5c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3v40.5c0 6.2-5 11.3-11.3 11.3zm164.3-164.3h-40.5c-6.2.2-11.5-4.7-11.6-11-.2-6.2 4.7-11.5 11-11.6h41.2c6.2.2 11.2 5.4 11 11.6-.3 6-5.1 10.8-11.1 11zm-288.1 0H40.5c-6.2-.2-11.2-5.4-11-11.6.2-6 5-10.8 11-11H81c6.2.2 11.2 5.4 11 11.6-.2 6-5 10.8-11 11z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M241.2 62.5c-6.2 0-11.3-5.1-11.3-11.3V27.9c0-2.9-2.4-5.3-5.3-5.3H185c-2.9 0-5.3 2.4-5.3 5.3v23.4c0 6.2-5.1 11.3-11.3 11.3s-11.3-5.1-11.3-11.3V27.9C157.1 12.5 169.6 0 185 0h39.6c15.4 0 27.9 12.5 27.9 27.9v23.4c-.1 6.2-5.1 11.2-11.3 11.2z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Sleep Analysis&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[40px]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                  &lt;div&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 409.6 409.6&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;check.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#d16b86] text-pink !mr-4&quot;
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
                    &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Workout Report&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[40px]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                  &lt;div&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 512 466.4&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;shop-2.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#45c4a0] text-green !mr-4&quot;
                    &gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M201.4 172.5h-96l26.1-158.4h83zm205.2 0h-96L297.5 14.1h83zm-216.7 97.1c7.2-7 16.8-10.9 26.9-10.8 9.6 0 18.8 3.1 26.9 5.8 4 1.4 8.1 2.6 12.3 3.5 4.2-.9 8.3-2.1 12.3-3.5 8.1-2.7 17.3-5.8 26.9-5.8 10-.1 19.7 3.7 26.9 10.8 24.4 22.9 15.9 48.4 10.9 63.7l-.3.8c-4.6 14-22 59.8-51.4 59.8-15.6 0-20.9-2.5-24.8-4.4l-.6-.3-.6.3c-3.9 1.9-9.1 4.4-24.8 4.4-29.3 0-46.7-45.8-51.4-59.8l-.3-.8c-4.8-15.3-13.3-40.8 11.1-63.7z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M511.1 147.4l-6.4-25.9c-1.9-7.6-9.6-12.1-17.2-10.2-7.5 1.9-12.1 9.5-10.3 17l6.4 25.9c.4 1.8-.7 3.6-2.5 4.1-.3.1-.5.1-.8.1h-61.7l-14.2-86-7.3-44.1h52.6c1.5 0 2.9 1 3.2 2.5l6.6 26.8c1.9 7.6 9.6 12.1 17.2 10.2 7.5-1.9 12.1-9.5 10.3-17L480.5 24C477 9.9 464.3 0 449.8 0H62.2C47.7 0 35 9.9 31.5 24L.9 147.4c-4.2 17 6.1 34.1 23.1 38.3 2.5.6 5.1.9 7.6.9h8.1v265.6c0 7.8 6.3 14.1 14.2 14.1h404.2c7.8 0 14.1-6.3 14.1-14.1V257.8c0-7.8-6.3-14.2-14.1-14.2s-14.2 6.3-14.2 14.1V438H68V186.7h412.4c17.5 0 31.6-14.2 31.6-31.6 0-2.6-.3-5.2-.9-7.7zM227.5 28.3h56.9l10.8 130.1h-78.4l10.7-130.1zM29 157.1c-.7-.8-.9-1.9-.6-2.9L59 30.8c.4-1.5 1.7-2.5 3.2-2.5h52.6l-5.3 32.1-16.2 98H31.6c-1 0-2-.5-2.6-1.3zm98.3-30.8l16.2-98h55.6l-10.7 130.1H122l5.3-32.1zm196.3 32.1L315.2 57l-2.4-28.7h55.6l16.2 98 5.3 32.1h-66.3z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M256 220c-7.8 0-14.1 6.3-14.1 14.1v15c-7.4-2.3-15.9-4.4-25-4.4-13.6-.1-26.8 5.1-36.6 14.6-31 29.1-19.9 62.4-14.6 78.4l.3.8c6.9 20.9 27 69.5 64.8 69.5 12.6 0 19.9-1.5 25.3-3.4 5.4 2 12.8 3.4 25.3 3.4 37.8 0 57.9-48.6 64.8-69.5l.3-.8c5.3-16 16.3-49.3-14.6-78.4-9.8-9.5-22.9-14.7-36.6-14.6-9.1 0-17.6 2.1-25 4.4v-15c-.1-7.8-6.4-14.1-14.3-14.1zm39.2 53c6.4-.1 12.7 2.4 17.2 6.9 16.5 15.5 13 31.3 7.1 48.9l-.3.8c-8.2 24.9-23.2 50.1-37.9 50.1-12.4 0-15.8-1.7-18.6-3l-.7-.3c-3.9-1.8-8.3-1.8-12.2 0l-.6.3c-2.8 1.3-6.2 3-18.6 3-14.8 0-29.7-25.1-37.9-50l-.3-.8c-5.8-17.6-9.3-33.4 7.1-48.9 4.5-4.6 10.8-7.1 17.2-6.9 7.3 0 15 2.6 22.5 5 4.6 1.7 9.4 3 14.2 4 1.7.3 3.3.3 5 0 4.8-1 9.6-2.3 14.2-4 7.6-2.6 15.3-5.1 22.6-5.1z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Nutritional Analysis&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[40px]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                  &lt;div&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 409.6 356.2&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;team.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#747ed1] text-purple !mr-4&quot;
                    &gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M265.2 180.7H144.4v-17.6c0-33.3 27-60.4 60.4-60.4s60.4 27 60.4 60.4v17.6z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M265.2 191.7H144.4c-6.1 0-11.1-5-11.1-11.1V163c-.5-39.5 31.1-71.8 70.6-72.3s71.8 31.1 72.3 70.6v19.3c0 6.2-4.9 11.1-11 11.1zm-109.7-22.1h98.6v-6.5c.4-27.2-21.4-49.6-48.6-50s-49.6 21.4-50 48.6v7.9z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M250.4 56.7c0 25.2-20.4 45.6-45.6 45.6s-45.6-20.4-45.6-45.6 20.4-45.6 45.6-45.6c25.2 0 45.6 20.4 45.6 45.6z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M204.8 113.3c-31.3 0-56.7-25.4-56.7-56.7S173.5-.1 204.8-.1s56.7 25.4 56.7 56.7c-.1 31.3-25.4 56.7-56.7 56.7zm0-91.2c-19.1 0-34.5 15.4-34.5 34.5s15.4 34.5 34.5 34.5 34.5-15.4 34.5-34.5c0-19-15.5-34.4-34.5-34.5zm193.7 334.1H296.8c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.7c-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.4-6 2.3-11.9 8.3-13.3 5.8-1.4 11.7 2.2 13.2 8 1.2 4.9 1.8 9.9 1.8 14.9v14.8c0 6.1-4.9 11.1-11.1 11.1z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M347.6 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.2 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.3-27.3 27.4 0 15.1 12.3 27.3 27.4 27.3S375 256 375 241c0-15.1-12.3-27.3-27.4-27.4zM112.8 356.2H11.1c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1.2 10.9 5.3 10.7 11.4-.2 5.9-4.9 10.6-10.7 10.7-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.5-5.9 2.2-11.9 8.1-13.4s11.9 2.2 13.4 8.1c1.2 4.9 1.8 9.9 1.8 14.9v14.8c.1 6.1-4.9 11.1-11.1 11.1.1 0 .1 0 0 0z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M61.9 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.1 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.2-27.3 27.4 0 15.1 12.2 27.4 27.4 27.4 15.1 0 27.3-12.2 27.3-27.3 0-15.2-12.3-27.4-27.4-27.5zm142.9 72.1c-6.1 0-11.1-5-11.1-11.1v-56.4c-.2-6.1 4.6-11.2 10.7-11.4 6.1-.2 11.2 4.6 11.4 10.7v57.1c.1 6.2-4.9 11.1-11 11.1z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M279.5 285.7H130.1c-6.1.2-11.2-4.6-11.4-10.7s4.6-11.2 10.7-11.4h150.2c6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.8z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Activity Sharing&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}

          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-9" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-0 lg:px-0 !px-[15px] max-w-full !mt-[50px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !text-center">
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="flex flex-wrap mx-[-15px]">
                      <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                        <figure className="!rounded-[.4rem] !mb-6">
                          <img
                            className="!rounded-[.4rem]"
                            srcSet="/assets/img/photos/se1@2x.jpg 2x"
                            alt="image"
                            width="340"
                            height="325"
                            src="/assets/img/photos/se1.jpg"
                          />
                        </figure>
                      </div>
                      {/* /column */}
                      <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                        <div className="card">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <div className="icon btn btn-circle btn-lg btn-soft-purple pointer-events-none !mb-3 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                              <i className="uil uil-monitor before:content-['\ec19']" />
                            </div>
                            <h4>Web Design</h4>
                            <p className="!mb-2">
                              Nulla vitae elit libero, a pharetra augue. Donec
                              id elit non mi porta gravida.
                            </p>
                            <a
                              href="#"
                              className="more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]"
                            >
                              Learn More
                            </a>
                          </div>
                          {/*/.card-body */}
                        </div>
                        {/*/.card */}
                      </div>
                      {/* /column */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /column */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="flex flex-wrap mx-[-15px]">
                      <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                        <figure className="!rounded-[.4rem] !mb-6 xl:!mb-0 lg:!mb-0 md:!mb-0">
                          <img
                            className="!rounded-[.4rem]"
                            srcSet="/assets/img/photos/se2@2x.jpg 2x"
                            alt="image"
                            width="340"
                            height="325"
                            src="/assets/img/photos/se2.jpg"
                          />
                        </figure>
                      </div>
                      {/* /column */}
                      <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                        <div className="card xl:!mb-6 lg:!mb-6 md:!mb-6 lg:!mt-6 xl:!mt-6">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <div className="icon btn btn-circle btn-lg btn-soft-purple pointer-events-none !mb-3 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                              <i className="uil uil-mobile-android before:content-['\ec0a']" />
                            </div>
                            <h4>Mobile Design</h4>
                            <p className="!mb-2">
                              Nulla vitae elit libero, a pharetra augue. Donec
                              id elit non mi porta gravida.
                            </p>
                            <a
                              href="#"
                              className="more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]"
                            >
                              Learn More
                            </a>
                          </div>
                          {/*/.card-body */}
                        </div>
                        {/*/.card */}
                      </div>
                      {/* /column */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              {/* /column */}
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] !mt-[50px]">
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                  What We Do?
                </h2>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                  The full service we are offering is specifically designed to
                  meet your business needs.
                </p>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
                  risus eget urna mollis ornare vel eu leo. Nullam quis risus
                  eget urna mollis ornare vel eu leo. Maecenas faucibus mollis
                  elit interdum. Duis mollis, est non commodo luctus, nisi erat
                  ligula.
                </p>
                <a
                  href="#"
                  className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mt-3"
                >
                  More Details
                </a>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={`&lt;section id&#x3D;&quot;snippet-9&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:px-0 lg:px-0 !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px] !text-center&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
                      &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                        &lt;figure className&#x3D;&quot;!rounded-[.4rem] !mb-6&quot;&gt;
                          &lt;img
                            className&#x3D;&quot;!rounded-[.4rem]&quot;
                            srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;se1@2x.jpg 2x&quot;
                            alt&#x3D;&quot;image&quot;
                            width&#x3D;&quot;340&quot;
                            height&#x3D;&quot;325&quot;
                            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;se1.jpg&quot;
                          &#x2F;&gt;
                        &lt;&#x2F;figure&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                      &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                        &lt;div className&#x3D;&quot;card&quot;&gt;
                          &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                            &lt;div className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-purple pointer-events-none !mb-3 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]&quot;&gt;
                              &lt;i className&#x3D;&quot;uil uil-monitor before:content-[&#39;\ec19&#39;]&quot; &#x2F;&gt;
                            &lt;&#x2F;div&gt;
                            &lt;h4&gt;Web Design&lt;&#x2F;h4&gt;
                            &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                              Nulla vitae elit libero, a pharetra augue. Donec
                              id elit non mi porta gravida.
                            &lt;&#x2F;p&gt;
                            &lt;a
                              href&#x3D;&quot;#&quot;
                              className&#x3D;&quot;more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]&quot;
                            &gt;
                              Learn More
                            &lt;&#x2F;a&gt;
                          &lt;&#x2F;div&gt;
                          {&#x2F;*&#x2F;.card-body *&#x2F;}
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.card *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.row *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
                      &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 lg:!order-2 md:!order-2&quot;&gt;
                        &lt;figure className&#x3D;&quot;!rounded-[.4rem] !mb-6 xl:!mb-0 lg:!mb-0 md:!mb-0&quot;&gt;
                          &lt;img
                            className&#x3D;&quot;!rounded-[.4rem]&quot;
                            srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;se2@2x.jpg 2x&quot;
                            alt&#x3D;&quot;image&quot;
                            width&#x3D;&quot;340&quot;
                            height&#x3D;&quot;325&quot;
                            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;se2.jpg&quot;
                          &#x2F;&gt;
                        &lt;&#x2F;figure&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                      &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                        &lt;div className&#x3D;&quot;card xl:!mb-6 lg:!mb-6 md:!mb-6 lg:!mt-6 xl:!mt-6&quot;&gt;
                          &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                            &lt;div className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-purple pointer-events-none !mb-3 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]&quot;&gt;
                              &lt;i className&#x3D;&quot;uil uil-mobile-android before:content-[&#39;\ec0a&#39;]&quot; &#x2F;&gt;
                            &lt;&#x2F;div&gt;
                            &lt;h4&gt;Mobile Design&lt;&#x2F;h4&gt;
                            &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                              Nulla vitae elit libero, a pharetra augue. Donec
                              id elit non mi porta gravida.
                            &lt;&#x2F;p&gt;
                            &lt;a
                              href&#x3D;&quot;#&quot;
                              className&#x3D;&quot;more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]&quot;
                            &gt;
                              Learn More
                            &lt;&#x2F;a&gt;
                          &lt;&#x2F;div&gt;
                          {&#x2F;*&#x2F;.card-body *&#x2F;}
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.card *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.row *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] !mt-[50px]&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
                  What We Do?
                &lt;&#x2F;h2&gt;
                &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium&quot;&gt;
                  The full service we are offering is specifically designed to
                  meet your business needs.
                &lt;&#x2F;p&gt;
                &lt;p&gt;
                  Donec ullamcorper nulla non metus auctor fringilla. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
                  risus eget urna mollis ornare vel eu leo. Nullam quis risus
                  eget urna mollis ornare vel eu leo. Maecenas faucibus mollis
                  elit interdum. Duis mollis, est non commodo luctus, nisi erat
                  ligula.
                &lt;&#x2F;p&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mt-3&quot;
                &gt;
                  More Details
                &lt;&#x2F;a&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}

          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-10" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] !mt-[-40px] items-center">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[20px] !mt-[40px] max-w-full xl:!order-2 lg:!order-2">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                  <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[16.66666667%] !self-end !mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        srcSet="/assets/img/photos/g1@2x.jpg 2x"
                        alt="image"
                        width="300"
                        height="312"
                        src="/assets/img/photos/g1.jpg"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !self-end !mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        srcSet="/assets/img/photos/g2@2x.jpg 2x"
                        alt="image"
                        width="350"
                        height="263"
                        src="/assets/img/photos/g2.jpg"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%] !mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        srcSet="/assets/img/photos/g3@2x.jpg 2x"
                        alt="image"
                        width="350"
                        height="226"
                        src="/assets/img/photos/g3.jpg"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !self-start !mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        srcSet="/assets/img/photos/g4@2x.jpg 2x"
                        alt="image"
                        width="300"
                        height="338"
                        src="/assets/img/photos/g4.jpg"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] !px-[15px] !mt-[40px] max-w-full">
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                  What We Do?
                </h2>
                <p className="lead !mb-8 xxl:!pr-2 !text-[1.05rem] !leading-[1.6]">
                  The full service we are offering is
                  <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]">
                    specifically
                  </span>
                  designed to meet your business needs and projects.
                </p>
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-25px] !mt-[-30px]">
                  {services.slice(0, 4).map((elm, i) => (
                    <div
                      key={i}
                      className="md:w-6/12 lg:w-full xl:w-6/12 w-full flex-[0_0_auto] xl:!px-[25px] !px-[15px] max-w-full !mt-[30px]"
                    >
                      <div className="flex flex-row">
                        <div>
                          <div className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-5 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 !rounded-[100%]">
                            <i
                              className={
                                "!text-[calc(1.255rem_+_0.06vw)] " +
                                elm.iconClass
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="!mb-1">{elm.title}</h4>
                          <p className="!mb-0">{elm.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={`  &lt;section id&#x3D;&quot;snippet-10&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] !mt-[-40px] items-center&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] px-[20px] !mt-[40px] max-w-full xl:!order-2 lg:!order-2&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[16.66666667%] !self-end !mt-[25px]&quot;&gt;
                    &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;rounded-[0.4rem]&quot;
                        srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g1@2x.jpg 2x&quot;
                        alt&#x3D;&quot;image&quot;
                        width&#x3D;&quot;300&quot;
                        height&#x3D;&quot;312&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g1.jpg&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;figure&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !self-end !mt-[25px]&quot;&gt;
                    &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;rounded-[0.4rem]&quot;
                        srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g2@2x.jpg 2x&quot;
                        alt&#x3D;&quot;image&quot;
                        width&#x3D;&quot;350&quot;
                        height&#x3D;&quot;263&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g2.jpg&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;figure&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] px-[12.5px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%] !mt-[25px]&quot;&gt;
                    &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;rounded-[0.4rem]&quot;
                        srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g3@2x.jpg 2x&quot;
                        alt&#x3D;&quot;image&quot;
                        width&#x3D;&quot;350&quot;
                        height&#x3D;&quot;226&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g3.jpg&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;figure&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !self-start !mt-[25px]&quot;&gt;
                    &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;rounded-[0.4rem]&quot;
                        srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g4@2x.jpg 2x&quot;
                        alt&#x3D;&quot;image&quot;
                        width&#x3D;&quot;300&quot;
                        height&#x3D;&quot;338&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g4.jpg&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;figure&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] !px-[15px] !mt-[40px] max-w-full&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
                  What We Do?
                &lt;&#x2F;h2&gt;
                &lt;p className&#x3D;&quot;lead !mb-8 xxl:!pr-2 !text-[1.05rem] !leading-[1.6]&quot;&gt;
                  The full service we are offering is
                  &lt;span className&#x3D;&quot;relative z-[2] whitespace-nowrap after:content-[&#39;&#39;] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]&quot;&gt;
                    specifically
                  &lt;&#x2F;span&gt;
                  designed to meet your business needs and projects.
                &lt;&#x2F;p&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-25px] !mt-[-30px]&quot;&gt;
                  {services.slice(0, 4).map((elm, i) &#x3D;&gt; (
                    &lt;div
                      key&#x3D;{i}
                      className&#x3D;&quot;md:w-6&#x2F;12 lg:w-full xl:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[25px] !px-[15px] max-w-full !mt-[30px]&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                        &lt;div&gt;
                          &lt;div className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-5 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 !rounded-[100%]&quot;&gt;
                            &lt;i
                              className&#x3D;{
                                &quot;!text-[calc(1.255rem_+_0.06vw)] &quot; +
                                elm.iconClass
                              }
                            &#x2F;&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                        &lt;div&gt;
                          &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;{elm.title}&lt;&#x2F;h4&gt;
                          &lt;p className&#x3D;&quot;!mb-0&quot;&gt;{elm.description}&lt;&#x2F;p&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  ))}

                  {&#x2F;*&#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}

          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-11" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-8/12 lg:!ml-[16.66666667%] xl:w-8/12 xl:!ml-[16.66666667%] w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
                <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
                  Why Choose Sandbox?
                </h2>
                <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-10 xl:!px-10 xxl:!px-20">
                  Here are a few reasons why our customers choose Sandbox.
                </h3>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
            <ul className="nav nav-tabs nav-tabs-bg flex justify-between nav-justified xl:!flex-row lg:!flex-row flex-col">
              <li className="nav-item !mb-[20px]">
                <a
                  className="nav-link !flex flex-row active"
                  data-bs-toggle="tab"
                  href="#tab2-1"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 294.2 409.6"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/rocket.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mr-4"
                    >
                      <path
                        className="lineal-stroke"
                        d="M31.2 342.9c-2.4 1.7-5.8 1.1-7.5-1.3-.6-.9-1-2-1-3.1v-77.1l68.9-77.2V150L5 247.1c-3.2 3.6-5 8.2-5 13v78.4c0 15.5 12.6 28.1 28.1 28.1 5.8 0 11.5-1.8 16.2-5.1l9.6-6.8-13.1-18.6-9.6 6.8zm258.1-95.8L200.7 148v34.2l70.8 79.3v77.1c0 3-2.4 5.4-5.4 5.4-1.1 0-2.2-.3-3.1-1l-9.6-6.7-13.1 18.6 9.6 6.7c12.7 8.9 30.3 5.9 39.2-6.9 3.3-4.7 5.1-10.4 5.1-16.1v-78.4c0-4.8-1.8-9.5-4.9-13.1zM147.1 409.6l-6.1-3.9c-2-1.3-49.3-32-49.3-72.5 0-40 23.3-72.6 53.1-74.2.8 0 1.6-.1 2.3-.1 4.1 0 8.1.6 12.1 1.7 9.1 2.7 17.6 8.4 24.6 16.6 11.9 14 18.7 34.4 18.7 55.9 0 40.5-47.2 71.2-49.3 72.5l-6.1 4zm0-127.9h-1c-17.5.9-31.7 24-31.7 51.5 0 19.6 19.9 39.1 32.6 48.9 12.7-9.8 32.6-29.3 32.6-48.9 0-16.2-4.9-31.2-13.3-41.1-4.1-4.8-8.8-8.1-13.6-9.5-1.8-.6-3.7-.9-5.6-.9z"
                      />
                      <path
                        className="lineal-fill"
                        d="M147.1 11.4c-13.1 0-96.4 71.4-96.4 143.4 0 24.5 29.3 178.4 29.3 178.4h134.1s29.3-153.9 29.3-178.4c.1-72.4-83.9-143.4-96.3-143.4zm49.8 159.2c-1 4.9-2.7 9.6-5.1 14-.8 1.4-1.6 2.8-2.5 4.2-3.7 5.4-8.3 10.1-13.7 13.7-1.3.9-2.7 1.8-4.2 2.5-24.7 13.4-55.6 4.2-68.9-20.5s-4.2-55.6 20.5-68.9c7.4-4 15.8-6.2 24.3-6.1 3.4 0 6.9.3 10.2 1 4.9 1 9.6 2.7 14 5.1 7.2 3.9 13.4 9.5 17.9 16.3 5.7 8.4 8.7 18.3 8.7 28.4-.1 3.5-.4 6.9-1.2 10.3z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M147.1 222.6c-34.4 0-62.2-28-62.2-62.3 0-34.4 28-62.2 62.3-62.2 10.3 0 20.4 2.6 29.5 7.5 2.6 1.4 5.2 3.1 7.6 4.9 24.8 18.5 32.2 52.4 17.5 79.6-1 1.8-2 3.5-3.1 5.1-4.5 6.6-10.2 12.3-16.8 16.8-1.6 1.1-3.4 2.2-5.1 3.1-9.1 4.9-19.3 7.5-29.7 7.5zm0-101.7c-21.8-.3-39.7 17-40.1 38.8s17 39.7 38.8 40.1h1.3c2.7 0 5.4-.3 8-.8 3.8-.8 7.4-2.1 10.8-4 1.1-.6 2.2-1.3 3.2-2 4.2-2.8 7.8-6.5 10.7-10.7.7-1.1 1.4-2.1 2-3.3 1.9-3.4 3.2-7 4-10.8.5-2.6.8-5.3.8-8 0-12.5-5.9-24.2-15.9-31.6-1.5-1.1-3.1-2.2-4.8-3.1-3.4-1.9-7-3.2-10.8-4-2.6-.5-5.3-.8-8-.8v.2z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M89.5 321.8h115.2c9-47.9 27.4-149.1 27.4-167 0-63-69.5-123.9-85-131.5-6.7 3.3-26.8 18.4-46.8 43.2-24.6 30.4-38.2 61.8-38.2 88.4 0 17.9 18.4 119.1 27.4 166.9zm134.1 22.8H70.7l-1.8-9.3c-3-15.9-29.5-155.7-29.5-180.6 0-42.2 25-80.9 45.9-106C101.1 29.9 131.8 0 147.1 0c15 0 45.7 29.8 61.5 48.6 21.1 25.1 46.2 63.8 46.2 106.2 0 24.9-26.5 164.7-29.5 180.6l-1.7 9.2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4>Easy Usage</h4>
                    <p>
                      Duis mollis commodo luctus cursus commodo tortor mauris.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item !mb-[20px]">
                <a
                  className="nav-link !flex flex-row"
                  data-bs-toggle="tab"
                  href="#tab2-2"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 465.5"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/savings.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mr-4"
                    >
                      <path
                        className="lineal-stroke"
                        d="M156.8 465.5c-9.9 0-24.2-4.8-56.2-40.6-16.2-18.2-29.5-36-30.1-36.8-.4-.5-.7-1-1-1.6-6.1-11-9.3-23.3-9.3-35.8v-90.9c0-7.9 6.4-14.4 14.3-14.4h116c16.5 0 32.4 6.5 44.2 18.1l59.4 58.5c17.2 17.2 17.3 45.1.1 62.3s-45.1 17.3-62.3.1L172.7 325c-5.9 0-15.5-.1-23.1-.1l-10.8-.1c-7.9 0-14.3-6.5-14.3-14.4s6.5-14.3 14.4-14.3h.1l10.8.1c6.8 0 14.1.1 19.6.1h6.9c4.2 0 8.5.1 12.7 4.3l63.5 63.5c6 6 15.7 6 21.7 0s6-15.7 0-21.7L214.6 284c-6.4-6.3-15-9.9-24-9.8H88.9v76.5c0 7.4 1.8 14.6 5.2 21.1 2.6 3.5 13.6 17.9 26.5 32.4 25.5 28.8 35.2 32.2 36.5 32.6h155.1c10.6 0 22.9-5.5 34.6-11.2 9.9-4.8 83.3-54.6 127.3-84.9l.7-.5c8.2-5.1 10.7-15.8 5.6-23.9-4.9-7.9-15.2-10.5-23.3-6L350 381.4c-6.6 4.4-15.5 2.6-19.9-4-4.4-6.6-2.6-15.5 4-19.9l107.5-71.3c.2-.1.3-.2.5-.3 21.8-13.1 50.1-6 63.2 15.8 12.9 21.6 6.2 49.6-15.2 62.8-13.3 9.2-115.8 79.6-130.8 86.9-14.7 7.1-30.5 14.1-47.1 14.1H156.8z"
                      />
                      <path
                        className="lineal-fill"
                        d="M14.4 242.2h84.2v189.6H14.4z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M98.5 446.1H14.4c-7.9 0-14.4-6.4-14.4-14.4V242.2c0-7.9 6.4-14.4 14.3-14.4h84.1c7.9 0 14.3 6.4 14.3 14.4v189.6c.1 7.9-6.3 14.3-14.2 14.3zm-69.8-28.7h55.4V256.5H28.7v160.9zM273 214.2c-59.2 0-107.1-48-107.1-107.1C165.9 47.9 213.9 0 273.1 0c59.1 0 107.1 48 107.1 107.1-.1 59.1-48.1 107.1-107.2 107.1zm0-185.5c-43.3 0-78.4 35.1-78.4 78.4s35.1 78.4 78.4 78.4c43.3 0 78.4-35.1 78.4-78.4-.1-43.3-35.1-78.3-78.4-78.4z"
                      />
                      <circle
                        className="lineal-fill"
                        cx="348.9"
                        cy="178.6"
                        r="92.8"
                      />
                      <path
                        className="lineal-stroke"
                        d="M348.9 285.7c-59.1 0-107.1-47.9-107.1-107.1 0-59.1 47.9-107.1 107.1-107.1S456 119.4 456 178.6c-.1 59.1-48 107-107.1 107.1zm0-185.5c-43.3 0-78.4 35.1-78.4 78.4S305.7 257 349 257s78.4-35.1 78.4-78.4c-.1-43.3-35.2-78.4-78.5-78.4z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M345.4 224.9c-15.5-.5-28.2-8.5-28.2-16.8 0-4.4 3.9-10.9 8.8-10.9 5.4 0 9.8 7.6 19.4 9.3v-20.9c-11.9-4.5-25.9-10.1-25.9-26.6s12.1-24.3 25.9-26.2v-3.6c0-1.8 2.1-3.5 4.9-3.5 2.5 0 4.9 1.7 4.9 3.5v3.2c8 .3 23.1 2.3 23.1 11.2 0 3.5-2.3 10.6-8 10.6-4.3 0-6.7-4.1-15.1-4.8v18.9c11.8 4.4 25.5 10.5 25.5 27.9 0 16-10.4 25.7-25.5 28.2v3.8c0 1.8-2.5 3.5-4.9 3.5-2.9 0-4.9-1.7-4.9-3.5v-3.3zm1.3-59.7v-15.4c-5.8 1.2-8.3 4.1-8.3 7.2 0 3.8 3.4 6.1 8.3 8.2zm7.2 23.9v17.3c4.4-1 7.9-3.5 7.9-8.1 0-4.3-3.2-7-7.9-9.2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4>Fast Transactions</h4>
                    <p>
                      Vivamus sagittis lacus augue fusce dapibus tellus nibh.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item !mb-[20px]">
                <a
                  className="nav-link !flex flex-row"
                  data-bs-toggle="tab"
                  href="#tab2-3"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 339.8 409.6"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/shield.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mr-4"
                    >
                      <path
                        className="lineal-stroke"
                        d="M169.9 409.6c-5.5 0-10.9-1.2-15.8-3.5C107.8 384.8 0 327.5 0 255.5V72.1c0-10.7 8.7-19.4 19.4-19.5 2.1 0 4.2.3 6.1 1 9.2 3.1 18.9 4.7 28.6 4.6 31.5.1 60.7-16.3 76.9-43.3C136.6 5.7 146.6 0 157.4 0h25c10.8.1 20.8 5.7 26.4 14.9 16.2 27 45.4 43.4 76.9 43.3 9.7 0 19.4-1.6 28.6-4.6 10.2-3.4 21.2 2.1 24.6 12.3.7 2 1 4.1 1 6.1v48c0 6.5-5.3 11.8-11.7 11.8-6.5 0-11.8-5.3-11.8-11.7V77.6c-10 2.8-20.3 4.2-30.6 4.2-39.7.2-76.5-20.6-97-54.6-1.3-2.2-3.7-3.6-6.3-3.6h-25c-2.6 0-5 1.4-6.3 3.6-20.5 34-57.3 54.8-97 54.6-10.3 0-20.6-1.4-30.6-4.2v178c0 47.7 72.5 98 140.4 129.3 3.8 1.7 8.2 1.7 12 0 67.9-31.3 140.4-81.6 140.4-129.3v-74.9c0-6.5 5.3-11.8 11.8-11.7 6.5 0 11.7 5.3 11.7 11.7v74.9c0 72-107.8 129.3-154.1 150.6-5 2.2-10.4 3.4-15.9 3.4z"
                      />
                      <path
                        className="lineal-fill"
                        d="M156 269l-62.2-31.1c-11.8-5.9-16.6-20.2-10.7-32 5.9-11.8 20.2-16.6 32-10.7l44.9 22.5 56.6-70.7c8.2-10.3 23.2-12 33.5-3.7 10.3 8.2 12 23.2 3.7 33.5l-68.6 85.8c-6.9 8.8-19.1 11.5-29.2 6.4z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M166.7 283.3c-5.5 0-11-1.3-15.9-3.8l-62.2-31.1c-17.6-8.8-24.7-30.2-15.9-47.8s30.2-24.7 47.8-15.9l36.4 18.2 50.6-63.3c12.3-15.4 34.7-17.9 50.1-5.6 15.4 12.3 17.9 34.7 5.6 50.1l-68.6 85.8c-6.8 8.5-17.1 13.4-27.9 13.4zm-62.2-78.8c-6.7 0-12.1 5.4-12.1 12.1 0 4.6 2.6 8.8 6.7 10.8l62.2 31.1c5.1 2.6 11.3 1.2 14.9-3.3l68.6-85.8c4.3-5.1 3.7-12.8-1.4-17.1-5.1-4.3-12.8-3.7-17.1 1.4-.1.2-.3.3-.4.5l-56.6 70.7c-3.5 4.3-9.5 5.6-14.4 3.2L110 205.6c-1.7-.7-3.6-1.1-5.5-1.1z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4>Secure Payments</h4>
                    <p>
                      Vestibulum ligula porta felis maecenas faucibus mollis.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
            {/* /.nav-tabs */}
            <div className="tab-content !mt-6 xl:!mt-8 lg:!mt-8">
              <div className="tab-pane fade show active" id="tab2-1">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                    <div className="flex flex-wrap mx-[-12.5px] !mt-[-25px] items-center">
                      <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !ml-auto"
                          srcSet="/assets/img/photos/sa13@2x.jpg 2x"
                          alt="image"
                          width="300"
                          height="355"
                          src="/assets/img/photos/sa13.jpg"
                        />
                      </div>
                      {/* /column */}
                      <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                          srcSet="/assets/img/photos/sa14@2x.jpg 2x"
                          alt="image"
                          width="300"
                          height="155"
                          src="/assets/img/photos/sa14.jpg"
                        />
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto]"
                          srcSet="/assets/img/photos/sa15@2x.jpg 2x"
                          alt="image"
                          width="250"
                          height="258"
                          src="/assets/img/photos/sa15.jpg"
                        />
                      </div>
                      {/* /column */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                    <h2 className="!mb-3 !leading-[1.35]">Easy Usage</h2>
                    <p>
                      Etiam porta sem malesuada magna mollis euismod. Donec
                      ullamcorper nulla non metus auctor fringilla. Morbi leo
                      risus, porta ac consectetur ac, vestibulum at eros. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Nullam quis risus eget urna.
                    </p>
                    <ul className="pl-0 list-none bullet-bg bullet-soft-yellow">
                      <li className="relative !pl-6">
                        <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#feeed9] !text-[#fab758] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        Aenean eu leo quam. Pellentesque ornare.
                      </li>
                      <li className="relative !pl-6 !mt-[0.35rem]">
                        <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#feeed9] !text-[#fab758] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        Nullam quis risus eget urna mollis ornare.
                      </li>
                      <li className="relative !pl-6 !mt-[0.35rem]">
                        <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#feeed9] !text-[#fab758] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        Donec id elit non mi porta gravida at eget.
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !mt-2"
                    >
                      Learn More
                    </a>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.tab-pane */}
              <div className="tab-pane fade" id="tab2-2">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] xl:!order-2 lg:!order-2">
                    <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                      <div className="w-5/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5 flex !ml-auto"
                          srcSet="/assets/img/photos/sa9@2x.jpg 2x"
                          alt="image"
                          width="250"
                          height="178"
                          src="/assets/img/photos/sa9.jpg"
                        />
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] !ml-auto"
                          srcSet="/assets/img/photos/sa10@2x.jpg 2x"
                          alt="image"
                          width="200"
                          height="221"
                          src="/assets/img/photos/sa10.jpg"
                        />
                      </div>
                      {/* /column */}
                      <div className="w-7/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                          srcSet="/assets/img/photos/sa11@2x.jpg 2x"
                          alt="image"
                          width="350"
                          height="163"
                          src="/assets/img/photos/sa11.jpg"
                        />
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex w-11/12 flex-[0_0_auto]"
                          srcSet="/assets/img/photos/sa12@2x.jpg 2x"
                          alt="image"
                          width="325"
                          height="212"
                          src="/assets/img/photos/sa12.jpg"
                        />
                      </div>
                      {/* /column */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                    <h2 className="!mb-3 !leading-[1.35]">Fast Transactions</h2>
                    <p>
                      Etiam porta sem malesuada magna mollis euismod. Donec
                      ullamcorper nulla non metus auctor fringilla. Morbi leo
                      risus, porta ac consectetur ac, vestibulum at eros. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Nullam quis risus eget urna.
                    </p>
                    <ul className="pl-0 list-none bullet-bg bullet-soft-green">
                      <li className="relative !pl-6 !mt-[0.35rem]">
                        <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        Aenean eu leo quam. Pellentesque ornare.
                      </li>
                      <li className="relative !pl-6 !mt-[0.35rem]">
                        <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        Nullam quis risus eget urna mollis ornare.
                      </li>
                      <li className="relative !pl-6 !mt-[0.35rem]">
                        <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        Donec id elit non mi porta gravida at eget.
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] !mt-2"
                    >
                      Learn More
                    </a>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.tab-pane */}
              <div className="tab-pane fade" id="tab2-3">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                    <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                      <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                          srcSet="/assets/img/photos/sa5@2x.jpg 2x"
                          alt="image"
                          width="300"
                          height="174"
                          src="/assets/img/photos/sa5.jpg"
                        />
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] !ml-auto"
                          srcSet="/assets/img/photos/sa6@2x.jpg 2x"
                          alt="image"
                          width="250"
                          height="276"
                          src="/assets/img/photos/sa6.jpg"
                        />
                      </div>
                      {/* /column */}
                      <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5"
                          srcSet="/assets/img/photos/sa7@2x.jpg 2x"
                          alt="image"
                          width="300"
                          height="181"
                          src="/assets/img/photos/sa7.jpg"
                        />
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto]"
                          srcSet="/assets/img/photos/sa8@2x.jpg 2x"
                          alt="image"
                          width="250"
                          height="276"
                          src="/assets/img/photos/sa8.jpg"
                        />
                      </div>
                      {/* /column */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                    <h2 className="!mb-3 !leading-[1.35]">Secure Payments</h2>
                    <p>
                      Etiam porta sem malesuada magna mollis euismod. Donec
                      ullamcorper nulla non metus auctor fringilla. Morbi leo
                      risus, porta ac consectetur ac, vestibulum at eros. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Nullam quis risus eget urna.
                    </p>
                    <ul className="pl-0 list-none bullet-bg bullet-soft-red">
                      <li className="relative !pl-6">
                        <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        Aenean eu leo quam. Pellentesque ornare.
                      </li>
                      <li className="relative !pl-6 !mt-[0.35rem]">
                        <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        Nullam quis risus eget urna mollis ornare.
                      </li>
                      <li className="relative !pl-6 !mt-[0.35rem]">
                        <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        Donec id elit non mi porta gravida at eget.
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-red !text-white !bg-[#e2626b] border-[#e2626b] hover:text-white hover:bg-[#e2626b] hover:!border-[#e2626b] active:text-white active:bg-[#e2626b] active:border-[#e2626b] disabled:text-white disabled:bg-[#e2626b] disabled:border-[#e2626b] !mt-2"
                    >
                      Learn More
                    </a>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.tab-pane */}
            </div>
            {/* /.tab-content */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={`   &lt;section id&#x3D;&quot;snippet-11&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
              &lt;div className&#x3D;&quot;md:w-10&#x2F;12 md:!ml-[8.33333333%] lg:w-8&#x2F;12 lg:!ml-[16.66666667%] xl:w-8&#x2F;12 xl:!ml-[16.66666667%] w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]&quot;&gt;
                  Why Choose Sandbox?
                &lt;&#x2F;h2&gt;
                &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-10 xl:!px-10 xxl:!px-20&quot;&gt;
                  Here are a few reasons why our customers choose Sandbox.
                &lt;&#x2F;h3&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
            &lt;ul className&#x3D;&quot;nav nav-tabs nav-tabs-bg flex justify-between nav-justified xl:!flex-row lg:!flex-row flex-col&quot;&gt;
              &lt;li className&#x3D;&quot;nav-item !mb-[20px]&quot;&gt;
                &lt;a
                  className&#x3D;&quot;nav-link !flex flex-row active&quot;
                  data-bs-toggle&#x3D;&quot;tab&quot;
                  href&#x3D;&quot;#tab2-1&quot;
                &gt;
                  &lt;div&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 294.2 409.6&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;rocket.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mr-4&quot;
                    &gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M31.2 342.9c-2.4 1.7-5.8 1.1-7.5-1.3-.6-.9-1-2-1-3.1v-77.1l68.9-77.2V150L5 247.1c-3.2 3.6-5 8.2-5 13v78.4c0 15.5 12.6 28.1 28.1 28.1 5.8 0 11.5-1.8 16.2-5.1l9.6-6.8-13.1-18.6-9.6 6.8zm258.1-95.8L200.7 148v34.2l70.8 79.3v77.1c0 3-2.4 5.4-5.4 5.4-1.1 0-2.2-.3-3.1-1l-9.6-6.7-13.1 18.6 9.6 6.7c12.7 8.9 30.3 5.9 39.2-6.9 3.3-4.7 5.1-10.4 5.1-16.1v-78.4c0-4.8-1.8-9.5-4.9-13.1zM147.1 409.6l-6.1-3.9c-2-1.3-49.3-32-49.3-72.5 0-40 23.3-72.6 53.1-74.2.8 0 1.6-.1 2.3-.1 4.1 0 8.1.6 12.1 1.7 9.1 2.7 17.6 8.4 24.6 16.6 11.9 14 18.7 34.4 18.7 55.9 0 40.5-47.2 71.2-49.3 72.5l-6.1 4zm0-127.9h-1c-17.5.9-31.7 24-31.7 51.5 0 19.6 19.9 39.1 32.6 48.9 12.7-9.8 32.6-29.3 32.6-48.9 0-16.2-4.9-31.2-13.3-41.1-4.1-4.8-8.8-8.1-13.6-9.5-1.8-.6-3.7-.9-5.6-.9z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M147.1 11.4c-13.1 0-96.4 71.4-96.4 143.4 0 24.5 29.3 178.4 29.3 178.4h134.1s29.3-153.9 29.3-178.4c.1-72.4-83.9-143.4-96.3-143.4zm49.8 159.2c-1 4.9-2.7 9.6-5.1 14-.8 1.4-1.6 2.8-2.5 4.2-3.7 5.4-8.3 10.1-13.7 13.7-1.3.9-2.7 1.8-4.2 2.5-24.7 13.4-55.6 4.2-68.9-20.5s-4.2-55.6 20.5-68.9c7.4-4 15.8-6.2 24.3-6.1 3.4 0 6.9.3 10.2 1 4.9 1 9.6 2.7 14 5.1 7.2 3.9 13.4 9.5 17.9 16.3 5.7 8.4 8.7 18.3 8.7 28.4-.1 3.5-.4 6.9-1.2 10.3z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M147.1 222.6c-34.4 0-62.2-28-62.2-62.3 0-34.4 28-62.2 62.3-62.2 10.3 0 20.4 2.6 29.5 7.5 2.6 1.4 5.2 3.1 7.6 4.9 24.8 18.5 32.2 52.4 17.5 79.6-1 1.8-2 3.5-3.1 5.1-4.5 6.6-10.2 12.3-16.8 16.8-1.6 1.1-3.4 2.2-5.1 3.1-9.1 4.9-19.3 7.5-29.7 7.5zm0-101.7c-21.8-.3-39.7 17-40.1 38.8s17 39.7 38.8 40.1h1.3c2.7 0 5.4-.3 8-.8 3.8-.8 7.4-2.1 10.8-4 1.1-.6 2.2-1.3 3.2-2 4.2-2.8 7.8-6.5 10.7-10.7.7-1.1 1.4-2.1 2-3.3 1.9-3.4 3.2-7 4-10.8.5-2.6.8-5.3.8-8 0-12.5-5.9-24.2-15.9-31.6-1.5-1.1-3.1-2.2-4.8-3.1-3.4-1.9-7-3.2-10.8-4-2.6-.5-5.3-.8-8-.8v.2z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M89.5 321.8h115.2c9-47.9 27.4-149.1 27.4-167 0-63-69.5-123.9-85-131.5-6.7 3.3-26.8 18.4-46.8 43.2-24.6 30.4-38.2 61.8-38.2 88.4 0 17.9 18.4 119.1 27.4 166.9zm134.1 22.8H70.7l-1.8-9.3c-3-15.9-29.5-155.7-29.5-180.6 0-42.2 25-80.9 45.9-106C101.1 29.9 131.8 0 147.1 0c15 0 45.7 29.8 61.5 48.6 21.1 25.1 46.2 63.8 46.2 106.2 0 24.9-26.5 164.7-29.5 180.6l-1.7 9.2z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;h4&gt;Easy Usage&lt;&#x2F;h4&gt;
                    &lt;p&gt;
                      Duis mollis commodo luctus cursus commodo tortor mauris.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;nav-item !mb-[20px]&quot;&gt;
                &lt;a
                  className&#x3D;&quot;nav-link !flex flex-row&quot;
                  data-bs-toggle&#x3D;&quot;tab&quot;
                  href&#x3D;&quot;#tab2-2&quot;
                &gt;
                  &lt;div&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 512 465.5&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;savings.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mr-4&quot;
                    &gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M156.8 465.5c-9.9 0-24.2-4.8-56.2-40.6-16.2-18.2-29.5-36-30.1-36.8-.4-.5-.7-1-1-1.6-6.1-11-9.3-23.3-9.3-35.8v-90.9c0-7.9 6.4-14.4 14.3-14.4h116c16.5 0 32.4 6.5 44.2 18.1l59.4 58.5c17.2 17.2 17.3 45.1.1 62.3s-45.1 17.3-62.3.1L172.7 325c-5.9 0-15.5-.1-23.1-.1l-10.8-.1c-7.9 0-14.3-6.5-14.3-14.4s6.5-14.3 14.4-14.3h.1l10.8.1c6.8 0 14.1.1 19.6.1h6.9c4.2 0 8.5.1 12.7 4.3l63.5 63.5c6 6 15.7 6 21.7 0s6-15.7 0-21.7L214.6 284c-6.4-6.3-15-9.9-24-9.8H88.9v76.5c0 7.4 1.8 14.6 5.2 21.1 2.6 3.5 13.6 17.9 26.5 32.4 25.5 28.8 35.2 32.2 36.5 32.6h155.1c10.6 0 22.9-5.5 34.6-11.2 9.9-4.8 83.3-54.6 127.3-84.9l.7-.5c8.2-5.1 10.7-15.8 5.6-23.9-4.9-7.9-15.2-10.5-23.3-6L350 381.4c-6.6 4.4-15.5 2.6-19.9-4-4.4-6.6-2.6-15.5 4-19.9l107.5-71.3c.2-.1.3-.2.5-.3 21.8-13.1 50.1-6 63.2 15.8 12.9 21.6 6.2 49.6-15.2 62.8-13.3 9.2-115.8 79.6-130.8 86.9-14.7 7.1-30.5 14.1-47.1 14.1H156.8z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M14.4 242.2h84.2v189.6H14.4z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M98.5 446.1H14.4c-7.9 0-14.4-6.4-14.4-14.4V242.2c0-7.9 6.4-14.4 14.3-14.4h84.1c7.9 0 14.3 6.4 14.3 14.4v189.6c.1 7.9-6.3 14.3-14.2 14.3zm-69.8-28.7h55.4V256.5H28.7v160.9zM273 214.2c-59.2 0-107.1-48-107.1-107.1C165.9 47.9 213.9 0 273.1 0c59.1 0 107.1 48 107.1 107.1-.1 59.1-48.1 107.1-107.2 107.1zm0-185.5c-43.3 0-78.4 35.1-78.4 78.4s35.1 78.4 78.4 78.4c43.3 0 78.4-35.1 78.4-78.4-.1-43.3-35.1-78.3-78.4-78.4z&quot;
                      &#x2F;&gt;
                      &lt;circle
                        className&#x3D;&quot;lineal-fill&quot;
                        cx&#x3D;&quot;348.9&quot;
                        cy&#x3D;&quot;178.6&quot;
                        r&#x3D;&quot;92.8&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M348.9 285.7c-59.1 0-107.1-47.9-107.1-107.1 0-59.1 47.9-107.1 107.1-107.1S456 119.4 456 178.6c-.1 59.1-48 107-107.1 107.1zm0-185.5c-43.3 0-78.4 35.1-78.4 78.4S305.7 257 349 257s78.4-35.1 78.4-78.4c-.1-43.3-35.2-78.4-78.5-78.4z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M345.4 224.9c-15.5-.5-28.2-8.5-28.2-16.8 0-4.4 3.9-10.9 8.8-10.9 5.4 0 9.8 7.6 19.4 9.3v-20.9c-11.9-4.5-25.9-10.1-25.9-26.6s12.1-24.3 25.9-26.2v-3.6c0-1.8 2.1-3.5 4.9-3.5 2.5 0 4.9 1.7 4.9 3.5v3.2c8 .3 23.1 2.3 23.1 11.2 0 3.5-2.3 10.6-8 10.6-4.3 0-6.7-4.1-15.1-4.8v18.9c11.8 4.4 25.5 10.5 25.5 27.9 0 16-10.4 25.7-25.5 28.2v3.8c0 1.8-2.5 3.5-4.9 3.5-2.9 0-4.9-1.7-4.9-3.5v-3.3zm1.3-59.7v-15.4c-5.8 1.2-8.3 4.1-8.3 7.2 0 3.8 3.4 6.1 8.3 8.2zm7.2 23.9v17.3c4.4-1 7.9-3.5 7.9-8.1 0-4.3-3.2-7-7.9-9.2z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;h4&gt;Fast Transactions&lt;&#x2F;h4&gt;
                    &lt;p&gt;
                      Vivamus sagittis lacus augue fusce dapibus tellus nibh.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;nav-item !mb-[20px]&quot;&gt;
                &lt;a
                  className&#x3D;&quot;nav-link !flex flex-row&quot;
                  data-bs-toggle&#x3D;&quot;tab&quot;
                  href&#x3D;&quot;#tab2-3&quot;
                &gt;
                  &lt;div&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 339.8 409.6&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;shield.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mr-4&quot;
                    &gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M169.9 409.6c-5.5 0-10.9-1.2-15.8-3.5C107.8 384.8 0 327.5 0 255.5V72.1c0-10.7 8.7-19.4 19.4-19.5 2.1 0 4.2.3 6.1 1 9.2 3.1 18.9 4.7 28.6 4.6 31.5.1 60.7-16.3 76.9-43.3C136.6 5.7 146.6 0 157.4 0h25c10.8.1 20.8 5.7 26.4 14.9 16.2 27 45.4 43.4 76.9 43.3 9.7 0 19.4-1.6 28.6-4.6 10.2-3.4 21.2 2.1 24.6 12.3.7 2 1 4.1 1 6.1v48c0 6.5-5.3 11.8-11.7 11.8-6.5 0-11.8-5.3-11.8-11.7V77.6c-10 2.8-20.3 4.2-30.6 4.2-39.7.2-76.5-20.6-97-54.6-1.3-2.2-3.7-3.6-6.3-3.6h-25c-2.6 0-5 1.4-6.3 3.6-20.5 34-57.3 54.8-97 54.6-10.3 0-20.6-1.4-30.6-4.2v178c0 47.7 72.5 98 140.4 129.3 3.8 1.7 8.2 1.7 12 0 67.9-31.3 140.4-81.6 140.4-129.3v-74.9c0-6.5 5.3-11.8 11.8-11.7 6.5 0 11.7 5.3 11.7 11.7v74.9c0 72-107.8 129.3-154.1 150.6-5 2.2-10.4 3.4-15.9 3.4z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-fill&quot;
                        d&#x3D;&quot;M156 269l-62.2-31.1c-11.8-5.9-16.6-20.2-10.7-32 5.9-11.8 20.2-16.6 32-10.7l44.9 22.5 56.6-70.7c8.2-10.3 23.2-12 33.5-3.7 10.3 8.2 12 23.2 3.7 33.5l-68.6 85.8c-6.9 8.8-19.1 11.5-29.2 6.4z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;lineal-stroke&quot;
                        d&#x3D;&quot;M166.7 283.3c-5.5 0-11-1.3-15.9-3.8l-62.2-31.1c-17.6-8.8-24.7-30.2-15.9-47.8s30.2-24.7 47.8-15.9l36.4 18.2 50.6-63.3c12.3-15.4 34.7-17.9 50.1-5.6 15.4 12.3 17.9 34.7 5.6 50.1l-68.6 85.8c-6.8 8.5-17.1 13.4-27.9 13.4zm-62.2-78.8c-6.7 0-12.1 5.4-12.1 12.1 0 4.6 2.6 8.8 6.7 10.8l62.2 31.1c5.1 2.6 11.3 1.2 14.9-3.3l68.6-85.8c4.3-5.1 3.7-12.8-1.4-17.1-5.1-4.3-12.8-3.7-17.1 1.4-.1.2-.3.3-.4.5l-56.6 70.7c-3.5 4.3-9.5 5.6-14.4 3.2L110 205.6c-1.7-.7-3.6-1.1-5.5-1.1z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;h4&gt;Secure Payments&lt;&#x2F;h4&gt;
                    &lt;p&gt;
                      Vestibulum ligula porta felis maecenas faucibus mollis.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
            &lt;&#x2F;ul&gt;
            {&#x2F;* &#x2F;.nav-tabs *&#x2F;}
            &lt;div className&#x3D;&quot;tab-content !mt-6 xl:!mt-8 lg:!mt-8&quot;&gt;
              &lt;div className&#x3D;&quot;tab-pane fade show active&quot; id&#x3D;&quot;tab2-1&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-12.5px] !mt-[-25px] items-center&quot;&gt;
                      &lt;div className&#x3D;&quot;w-6&#x2F;12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !ml-auto&quot;
                          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa13@2x.jpg 2x&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;300&quot;
                          height&#x3D;&quot;355&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa13.jpg&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                      &lt;div className&#x3D;&quot;w-6&#x2F;12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5&quot;
                          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa14@2x.jpg 2x&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;300&quot;
                          height&#x3D;&quot;155&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa14.jpg&quot;
                        &#x2F;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10&#x2F;12 flex-[0_0_auto]&quot;
                          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa15@2x.jpg 2x&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;250&quot;
                          height&#x3D;&quot;258&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa15.jpg&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.row *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                    &lt;h2 className&#x3D;&quot;!mb-3 !leading-[1.35]&quot;&gt;Easy Usage&lt;&#x2F;h2&gt;
                    &lt;p&gt;
                      Etiam porta sem malesuada magna mollis euismod. Donec
                      ullamcorper nulla non metus auctor fringilla. Morbi leo
                      risus, porta ac consectetur ac, vestibulum at eros. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Nullam quis risus eget urna.
                    &lt;&#x2F;p&gt;
                    &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-yellow&quot;&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6&quot;&gt;
                        &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#feeed9] !text-[#fab758] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                        Aenean eu leo quam. Pellentesque ornare.
                      &lt;&#x2F;li&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                        &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#feeed9] !text-[#fab758] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                        Nullam quis risus eget urna mollis ornare.
                      &lt;&#x2F;li&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                        &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#feeed9] !text-[#fab758] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                        Donec id elit non mi porta gravida at eget.
                      &lt;&#x2F;li&gt;
                    &lt;&#x2F;ul&gt;
                    &lt;a
                      href&#x3D;&quot;#&quot;
                      className&#x3D;&quot;btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !mt-2&quot;
                    &gt;
                      Learn More
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.tab-pane *&#x2F;}
              &lt;div className&#x3D;&quot;tab-pane fade&quot; id&#x3D;&quot;tab2-2&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] xl:!order-2 lg:!order-2&quot;&gt;
                    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
                      &lt;div className&#x3D;&quot;w-5&#x2F;12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5 flex !ml-auto&quot;
                          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa9@2x.jpg 2x&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;250&quot;
                          height&#x3D;&quot;178&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa9.jpg&quot;
                        &#x2F;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10&#x2F;12 flex-[0_0_auto] !ml-auto&quot;
                          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa10@2x.jpg 2x&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;200&quot;
                          height&#x3D;&quot;221&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa10.jpg&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                      &lt;div className&#x3D;&quot;w-7&#x2F;12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5&quot;
                          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa11@2x.jpg 2x&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;350&quot;
                          height&#x3D;&quot;163&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa11.jpg&quot;
                        &#x2F;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex w-11&#x2F;12 flex-[0_0_auto]&quot;
                          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa12@2x.jpg 2x&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;325&quot;
                          height&#x3D;&quot;212&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa12.jpg&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.row *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                    &lt;h2 className&#x3D;&quot;!mb-3 !leading-[1.35]&quot;&gt;Fast Transactions&lt;&#x2F;h2&gt;
                    &lt;p&gt;
                      Etiam porta sem malesuada magna mollis euismod. Donec
                      ullamcorper nulla non metus auctor fringilla. Morbi leo
                      risus, porta ac consectetur ac, vestibulum at eros. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Nullam quis risus eget urna.
                    &lt;&#x2F;p&gt;
                    &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-green&quot;&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                        &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                        Aenean eu leo quam. Pellentesque ornare.
                      &lt;&#x2F;li&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                        &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                        Nullam quis risus eget urna mollis ornare.
                      &lt;&#x2F;li&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                        &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                        Donec id elit non mi porta gravida at eget.
                      &lt;&#x2F;li&gt;
                    &lt;&#x2F;ul&gt;
                    &lt;a
                      href&#x3D;&quot;#&quot;
                      className&#x3D;&quot;btn btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] !mt-2&quot;
                    &gt;
                      Learn More
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.tab-pane *&#x2F;}
              &lt;div className&#x3D;&quot;tab-pane fade&quot; id&#x3D;&quot;tab2-3&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
                      &lt;div className&#x3D;&quot;w-6&#x2F;12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5&quot;
                          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa5@2x.jpg 2x&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;300&quot;
                          height&#x3D;&quot;174&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa5.jpg&quot;
                        &#x2F;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10&#x2F;12 flex-[0_0_auto] !ml-auto&quot;
                          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa6@2x.jpg 2x&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;250&quot;
                          height&#x3D;&quot;276&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa6.jpg&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                      &lt;div className&#x3D;&quot;w-6&#x2F;12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5&quot;
                          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa7@2x.jpg 2x&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;300&quot;
                          height&#x3D;&quot;181&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa7.jpg&quot;
                        &#x2F;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10&#x2F;12 flex-[0_0_auto]&quot;
                          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa8@2x.jpg 2x&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;250&quot;
                          height&#x3D;&quot;276&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa8.jpg&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.row *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                    &lt;h2 className&#x3D;&quot;!mb-3 !leading-[1.35]&quot;&gt;Secure Payments&lt;&#x2F;h2&gt;
                    &lt;p&gt;
                      Etiam porta sem malesuada magna mollis euismod. Donec
                      ullamcorper nulla non metus auctor fringilla. Morbi leo
                      risus, porta ac consectetur ac, vestibulum at eros. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Nullam quis risus eget urna.
                    &lt;&#x2F;p&gt;
                    &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-red&quot;&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6&quot;&gt;
                        &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                        Aenean eu leo quam. Pellentesque ornare.
                      &lt;&#x2F;li&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                        &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                        Nullam quis risus eget urna mollis ornare.
                      &lt;&#x2F;li&gt;
                      &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                        &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                        Donec id elit non mi porta gravida at eget.
                      &lt;&#x2F;li&gt;
                    &lt;&#x2F;ul&gt;
                    &lt;a
                      href&#x3D;&quot;#&quot;
                      className&#x3D;&quot;btn btn-red !text-white !bg-[#e2626b] border-[#e2626b] hover:text-white hover:bg-[#e2626b] hover:!border-[#e2626b] active:text-white active:bg-[#e2626b] active:border-[#e2626b] disabled:text-white disabled:bg-[#e2626b] disabled:border-[#e2626b] !mt-2&quot;
                    &gt;
                      Learn More
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.tab-pane *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.tab-content *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}

          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-12" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] xl:!px-5">
              {services.slice(0, 3).map((elm, i) => (
                <div
                  key={i}
                  className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full"
                >
                  <div className="flex flex-row">
                    <div>
                      <div className="icon btn btn-circle pointer-events-none btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                        <i className={elm.iconClass} />
                      </div>
                    </div>
                    <div>
                      <h4>{elm.title}</h4>
                      <p className="!mb-2">{elm.description}</p>
                      <a href="#" className="more hover">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>

        <CodeSnippet
          code={`   &lt;section id&#x3D;&quot;snippet-12&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] xl:!px-5&quot;&gt;
              {services.slice(0, 3).map((elm, i) &#x3D;&gt; (
                &lt;div
                  key&#x3D;{i}
                  className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full&quot;
                &gt;
                  &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                    &lt;div&gt;
                      &lt;div className&#x3D;&quot;icon btn btn-circle pointer-events-none btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]&quot;&gt;
                        &lt;i className&#x3D;{elm.iconClass} &#x2F;&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div&gt;
                      &lt;h4&gt;{elm.title}&lt;&#x2F;h4&gt;
                      &lt;p className&#x3D;&quot;!mb-2&quot;&gt;{elm.description}&lt;&#x2F;p&gt;
                      &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;more hover&quot;&gt;
                        Learn More
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              ))}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}

          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-13" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] !text-center">
              <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
                <h2 className="!text-[0.8rem] uppercase !text-[#3f78e0] !mb-3 !leading-[1.35]">
                  What We Do?
                </h2>
                <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:!text-[2rem] !mb-10 xxl:!px-10">
                  The service we offer is specifically designed to meet your
                  needs.
                </h3>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-60px] xxl:!px-5 !text-center items-end">
              {designItems.map((item, index) => (
                <div
                  key={index}
                  className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[60px]"
                >
                  <div className="md:!px-20 lg:!px-3 xl:!px-3">
                    <figure className="!mb-6">
                      <img
                        className="max-w-full h-auto"
                        srcSet={item.imgSrcSet}
                        alt={item.alt}
                        src={item.imgSrc}
                        width={item.width}
                        height={item.height}
                      />
                    </figure>
                    <h3>{item.title}</h3>
                    <p className="!mb-2">{item.description}</p>
                    <a href="#" className="more hover">
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={`&lt;section id&#x3D;&quot;snippet-13&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
              &lt;div className&#x3D;&quot;md:w-10&#x2F;12 xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[0.8rem] uppercase !text-[#3f78e0] !mb-3 !leading-[1.35]&quot;&gt;
                  What We Do?
                &lt;&#x2F;h2&gt;
                &lt;h3 className&#x3D;&quot;!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:!text-[2rem] !mb-10 xxl:!px-10&quot;&gt;
                  The service we offer is specifically designed to meet your
                  needs.
                &lt;&#x2F;h3&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-60px] xxl:!px-5 !text-center items-end&quot;&gt;
              {designItems.map((item, index) &#x3D;&gt; (
                &lt;div
                  key&#x3D;{index}
                  className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[60px]&quot;
                &gt;
                  &lt;div className&#x3D;&quot;md:!px-20 lg:!px-3 xl:!px-3&quot;&gt;
                    &lt;figure className&#x3D;&quot;!mb-6&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;max-w-full h-auto&quot;
                        srcSet&#x3D;{item.imgSrcSet}
                        alt&#x3D;{item.alt}
                        src&#x3D;{item.imgSrc}
                        width&#x3D;{item.width}
                        height&#x3D;{item.height}
                      &#x2F;&gt;
                    &lt;&#x2F;figure&gt;
                    &lt;h3&gt;{item.title}&lt;&#x2F;h3&gt;
                    &lt;p className&#x3D;&quot;!mb-2&quot;&gt;{item.description}&lt;&#x2F;p&gt;
                    &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;more hover&quot;&gt;
                      Learn More
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              ))}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}

          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
      </>
      <Gallery />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

import { cardData } from &quot;@&#x2F;data&#x2F;gallery&quot;;
export default function Gallery() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div className&#x3D;&quot;container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;lg:w-full xl:w-10&#x2F;12 xxl:w-8&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
            &lt;i className&#x3D;&quot;icn-flower !text-[#7cb798] xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] opacity-25 before:content-[&#39;\e907&#39;]&quot; &#x2F;&gt;
            &lt;h2 className&#x3D;&quot;xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] font-semibold !tracking-[normal] !text-center !mt-2 !mb-10&quot;&gt;
              I absolutely love shooting weddings and couples because there are
              so many feelings to capture.
            &lt;&#x2F;h2&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] grid-view md:mx-[-20px] lg:mx-[-20px] xl:mx-[-25px] !mt-[-40px] xl:!mt-0 lg:!mt-0 !text-center&quot;&gt;
          {cardData.map((card) &#x3D;&gt; (
            &lt;div
              key&#x3D;{card.id}
              className&#x3D;&quot;sm:w-8&#x2F;12 md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mx-auto max-lg:!mt-[40px]&quot;
            &gt;
              &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                &lt;figure className&#x3D;&quot;card-img-top overlay overlay-1 group&quot;&gt;
                  &lt;a
                    className&#x3D;&quot;relative block z-[3] cursor-pointer inset-0&quot;
                    href&#x3D;&quot;#&quot;
                  &gt;
                    &lt;img
                      className&#x3D;&quot;max-w-full h-auto&quot;
                      alt&#x3D;&quot;image&quot;
                      src&#x3D;{card.imageSrc}
                      width&#x3D;{card.width}
                      height&#x3D;{card.height}
                    &#x2F;&gt;
                  &lt;&#x2F;a&gt;
                  &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
                    &lt;h5 className&#x3D;&quot;from-top !mb-0 !absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2&#x2F;4 !text-white&quot;&gt;
                      View Gallery
                    &lt;&#x2F;h5&gt;
                  &lt;&#x2F;figcaption&gt;
                &lt;&#x2F;figure&gt;
                &lt;div className&#x3D;&quot;card-body p-6&quot;&gt;
                  &lt;h3 className&#x3D;&quot;!text-[1.05rem] !mb-0&quot;&gt;{card.title}&lt;&#x2F;h3&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          ))}
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Features3 />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function Features3() {
  return (
    &lt;section id&#x3D;&quot;services&quot;&gt;
      &lt;div className&#x3D;&quot;wrapper &quot;&gt;
        &lt;div className&#x3D;&quot;container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:px-0 lg:px-0 !mt-[50px]&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px] !text-center&quot;&gt;
                &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                  &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-6&quot;&gt;
                    &lt;figure className&#x3D;&quot;card-img-top overlay overlay-1 group&quot;&gt;
                      &lt;a href&#x3D;&quot;#&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto&quot;
                          alt&#x3D;&quot;image&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;fs4.jpg&quot;
                          width&#x3D;{600}
                          height&#x3D;{400}
                        &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                      &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
                        &lt;h5 className&#x3D;&quot;from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2&#x2F;4 group-hover:-translate-y-2&#x2F;4&quot;&gt;
                          View Gallery
                        &lt;&#x2F;h5&gt;
                      &lt;&#x2F;figcaption&gt;
                    &lt;&#x2F;figure&gt;
                    &lt;div className&#x3D;&quot;card-body p-4&quot;&gt;
                      &lt;h3 className&#x3D;&quot;h4 !mb-0&quot;&gt;Products&lt;&#x2F;h3&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card-body *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                    &lt;figure className&#x3D;&quot;card-img-top overlay overlay-1 group&quot;&gt;
                      &lt;a href&#x3D;&quot;#&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto&quot;
                          alt&#x3D;&quot;image&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;fs6.jpg&quot;
                          width&#x3D;{600}
                          height&#x3D;{400}
                        &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                      &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
                        &lt;h5 className&#x3D;&quot;from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2&#x2F;4 group-hover:-translate-y-2&#x2F;4&quot;&gt;
                          View Gallery
                        &lt;&#x2F;h5&gt;
                      &lt;&#x2F;figcaption&gt;
                    &lt;&#x2F;figure&gt;
                    &lt;div className&#x3D;&quot;card-body p-4&quot;&gt;
                      &lt;h3 className&#x3D;&quot;h4 !mb-0&quot;&gt;Recipes&lt;&#x2F;h3&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card-body *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                  &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] xl:!mt-6 lg:!mt-6 md:!mt-6 !mb-6&quot;&gt;
                    &lt;figure className&#x3D;&quot;card-img-top overlay overlay-1 group&quot;&gt;
                      &lt;a href&#x3D;&quot;#&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto&quot;
                          alt&#x3D;&quot;image&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;fs5.jpg&quot;
                          width&#x3D;{600}
                          height&#x3D;{400}
                        &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                      &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
                        &lt;h5 className&#x3D;&quot;from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2&#x2F;4 group-hover:-translate-y-2&#x2F;4&quot;&gt;
                          View Gallery
                        &lt;&#x2F;h5&gt;
                      &lt;&#x2F;figcaption&gt;
                    &lt;&#x2F;figure&gt;
                    &lt;div className&#x3D;&quot;card-body p-4&quot;&gt;
                      &lt;h3 className&#x3D;&quot;h4 !mb-0&quot;&gt;Restaurants&lt;&#x2F;h3&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card-body *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                    &lt;figure className&#x3D;&quot;card-img-top overlay overlay-1 group&quot;&gt;
                      &lt;a href&#x3D;&quot;#&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;max-w-full h-auto&quot;
                          alt&#x3D;&quot;image&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;fs7.jpg&quot;
                          width&#x3D;{600}
                          height&#x3D;{400}
                        &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                      &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
                        &lt;h5 className&#x3D;&quot;from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2&#x2F;4 group-hover:-translate-y-2&#x2F;4&quot;&gt;
                          View Gallery
                        &lt;&#x2F;h5&gt;
                      &lt;&#x2F;figcaption&gt;
                    &lt;&#x2F;figure&gt;
                    &lt;div className&#x3D;&quot;card-body p-4&quot;&gt;
                      &lt;h3 className&#x3D;&quot;h4 !mb-0&quot;&gt;Still Life&lt;&#x2F;h3&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card-body *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.row *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
            &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] xl:px-0 lg:px-0 !mt-[50px]&quot;&gt;
              &lt;h2 className&#x3D;&quot;xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold !mb-3&quot;&gt;
                My Services
              &lt;&#x2F;h2&gt;
              &lt;p className&#x3D;&quot;lead !text-[1.1rem] !leading-[1.55] font-medium&quot;&gt;
                I would like to give you a unique photography experience,
                capture your products with excellent composition and lighting
                skills.
              &lt;&#x2F;p&gt;
              &lt;p&gt;
                Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nullam quis risus
                eget urna mollis ornare vel eu leo. Nullam quis risus eget urna
                mollis ornare vel eu leo. Maecenas faucibus mollis elit
                interdum. Duis mollis, est non commodo luctus, nisi erat ligula
                mollis metus auctor fringilla.
              &lt;&#x2F;p&gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
              &gt;
                More Details
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
      <section id="snippet-16" className="wrapper !bg-[#ffffff]">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <Expertise />
        </div>
      </section>
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function Expertise() {
  return (
    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center&quot;&gt;
      &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 !mt-[50px] max-w-full xl:!ml-[8.33333333%] xl:!order-2 lg:!ml-[8.33333333%] lg:!order-2&quot;&gt;
        &lt;h2 className&#x3D;&quot;xl:!text-[2rem] !text-[calc(1.325rem_+_.9vw)] font-semibold !leading-[1.2] !mb-3&quot;&gt;
          My areas of &lt;em&gt;expertise&lt;&#x2F;em&gt;
        &lt;&#x2F;h2&gt;
        &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.55] !font-normal&quot;&gt;
          The full service I am offering is specifically designed to meet your
          business needs.
        &lt;&#x2F;p&gt;
        &lt;p&gt;
          Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam quis risus eget urna
          mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare
          vel eu leo. Maecenas faucibus mollis elit interdum. Duis mollis, est
          non commodo luctus, nisi erat ligula magna mollis.
        &lt;&#x2F;p&gt;
        &lt;a
          href&#x3D;&quot;#&quot;
          className&#x3D;&quot;btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
        &gt;
          More Details
        &lt;&#x2F;a&gt;
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;column *&#x2F;}
      &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 !mt-[50px] max-w-full&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px] !text-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
              &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-6&quot;&gt;
                  &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 256 256&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;edit.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-aqua !mb-3 m-[0_auto]&quot;
                    &gt;
                      &lt;path
                        className&#x3D;&quot;fill-primary&quot;
                        d&#x3D;&quot;M152 0H29.33A29.32 29.32 0 000 29.33v165.33A29.32 29.32 0 0029.33 224h78.72l2.35-13.12a29.71 29.71 0 018.11-15.68l62.83-62.72V29.33A29.33 29.33 0 00152 0zM42.67 42.67h42.67a10.67 10.67 0 110 21.33H42.66a10.67 10.67 0 010-21.33zM96 149.33H42.67a10.67 10.67 0 110-21.33H96a10.67 10.67 0 110 21.33zm42.67-42.66h-96a10.67 10.67 0 010-21.34h96a10.67 10.67 0 110 21.34z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;fill-secondary&quot;
                        d&#x3D;&quot;M133.63 256a8 8 0 01-7.89-9.38l5.67-32.06a8 8 0 012.22-4.27l79.2-79.2c9.73-9.75 19.28-7.12 24.51-1.89l13.2 13.2a18.69 18.69 0 010 26.4l-79.2 79.2a7.83 7.83 0 01-4.27 2.22l-32 5.67a10.71 10.71 0 01-1.44.11zm32.05-13.65z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                    &lt;h3&gt;Content Marketing&lt;&#x2F;h3&gt;
                    &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida.
                    &lt;&#x2F;p&gt;
                    &lt;a
                      href&#x3D;&quot;#&quot;
                      className&#x3D;&quot;more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]&quot;
                    &gt;
                      Learn More
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.card-body *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                  &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 255.98 256&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;team.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-aqua !mb-3 m-[0_auto]&quot;
                    &gt;
                      &lt;circle
                        className&#x3D;&quot;fill-primary&quot;
                        cx&#x3D;{128}
                        cy&#x3D;&quot;26.67&quot;
                        r&#x3D;&quot;26.67&quot;
                      &#x2F;&gt;
                      &lt;circle
                        className&#x3D;&quot;fill-primary&quot;
                        cx&#x3D;&quot;202.67&quot;
                        cy&#x3D;{176}
                        r&#x3D;&quot;26.67&quot;
                      &#x2F;&gt;
                      &lt;circle
                        className&#x3D;&quot;fill-primary&quot;
                        cx&#x3D;&quot;53.33&quot;
                        cy&#x3D;{176}
                        r&#x3D;&quot;26.67&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;fill-primary&quot;
                        d&#x3D;&quot;M173.33 106.67H82.66a8 8 0 01-8-8v-5.33A29.35 29.35 0 01104 64h48a29.35 29.35 0 0129.33 29.32v5.33a8 8 0 01-8 8.02zM248 256h-90.67a8 8 0 01-8-8v-5.33a29.36 29.36 0 0129.33-29.33h48A29.36 29.36 0 01256 242.67V248a8 8 0 01-8 8zm-149.33 0H8a8 8 0 01-8-8v-5.33a29.36 29.36 0 0129.33-29.33h48a29.37 29.37 0 0129.33 29.33V248a8 8 0 01-8 8z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;fill-secondary&quot;
                        d&#x3D;&quot;M29.33 136.13a8 8 0 01-8-8 107.1 107.1 0 0161.73-96.77 8 8 0 116.73 14.51 91 91 0 00-52.48 82.26 8 8 0 01-7.98 8zm197.34 0a8 8 0 01-8-8 91 91 0 00-52.48-82.26 8 8 0 116.74-14.51 107.09 107.09 0 0161.73 96.77 8 8 0 01-8 8zM128 234.8a105.08 105.08 0 01-11.15-.58 8 8 0 011.66-15.9 93.73 93.73 0 0019.6-.06 8 8 0 011.76 15.9 110.68 110.68 0 01-11.87.64z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                    &lt;h3&gt;Social Engagement&lt;&#x2F;h3&gt;
                    &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida.
                    &lt;&#x2F;p&gt;
                    &lt;a
                      href&#x3D;&quot;#&quot;
                      className&#x3D;&quot;more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]&quot;
                    &gt;
                      Learn More
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.card-body *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
              &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 lg:!order-2 md:!order-2&quot;&gt;
                &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-6 xl:!mb-0 lg:!mb-0 md:!mb-0&quot;&gt;
                  &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 256 256&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;lamp.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-aqua !mb-3 m-[0_auto]&quot;
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
                    &lt;h3&gt;Identity &amp;amp; Branding&lt;&#x2F;h3&gt;
                    &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida.
                    &lt;&#x2F;p&gt;
                    &lt;a
                      href&#x3D;&quot;#&quot;
                      className&#x3D;&quot;more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]&quot;
                    &gt;
                      Learn More
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.card-body *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] xl:!mb-6 lg:!mb-6 md:!mb-6 lg:!mt-6 xl:!mt-6&quot;&gt;
                  &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                    &lt;svg
                      xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                      viewBox&#x3D;&quot;0 0 256 256&quot;
                      data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;delivery-box.svg&quot;
                      className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-aqua !mb-3 m-[0_auto]&quot;
                    &gt;
                      &lt;path
                        className&#x3D;&quot;fill-secondary&quot;
                        d&#x3D;&quot;M172 20.57L55.79 80 9.6 57.32 123.71 1A9.43 9.43 0 01132 1zm74.27 36.75l-118.21 58.56-44.27-21.8-6.38-3.25L193.7 31.36l6.4 3.24z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;fill-primary&quot;
                        d&#x3D;&quot;M118.59 132.76L118.46 256 5.23 196.91A9.89 9.89 0 010 188.22V74.2l48 23.64v41.55a9.6 9.6 0 1019.2 0v-31.94l6.4 3.12zm137.28-58.43l-118.08 58.31-.13 123.23L256 194.08z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;svg&gt;
                    &lt;h3&gt;Product Design&lt;&#x2F;h3&gt;
                    &lt;p className&#x3D;&quot;!mb-2&quot;&gt;
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida.
                    &lt;&#x2F;p&gt;
                    &lt;a
                      href&#x3D;&quot;#&quot;
                      className&#x3D;&quot;more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]&quot;
                    &gt;
                      Learn More
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.card-body *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;column *&#x2F;}
    &lt;&#x2F;div&gt;
  );
}`}
      />
      <AppFeatures />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function AppFeatures() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-32 xl:pt-40 lg:pt-40 md:pt-40 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
          &lt;div className&#x3D;&quot;lg:w-10&#x2F;12 xl:w-9&#x2F;12 xxl:w-8&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative&quot;&gt;
            &lt;img
              className&#x3D;&quot;!h-[3rem] absolute hidden xl:block lg:block&quot;
              style&#x3D;{{ top: &quot;-45%&quot;, left: &quot;23%&quot; }}
              alt&#x3D;&quot;image&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle3.svg&quot;
              width&#x3D;{85}
              height&#x3D;{82}
            &#x2F;&gt;
            &lt;img
              className&#x3D;&quot;h-8 absolute hidden xl:block lg:block&quot;
              style&#x3D;{{ top: &quot;6%&quot;, right: &quot;2%&quot; }}
              alt&#x3D;&quot;image&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle4.svg&quot;
              width&#x3D;{42}
              height&#x3D;{55}
            &#x2F;&gt;
            &lt;h2 className&#x3D;&quot;!text-[0.8rem] !leading-[1.35] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3&quot;&gt;
              App Features
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] !mb-12 lg:!px-5 xl:!px-0 xxl:!px-6&quot;&gt;
              Sandbox makes your spending
              &lt;span className&#x3D;&quot;text-gradient gradient-7&quot;&gt;stress-free&lt;&#x2F;span&gt; for
              you to have the perfect control.
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mb-40&quot;&gt;
          &lt;div className&#x3D;&quot;xxl:w-11&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] !text-center&quot;&gt;
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;svg-bg svg-bg-lg !bg-[#fef3e4] !rounded-[0.8rem] !mb-4&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 256 256&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;cloud-network-2.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                  &gt;
                    &lt;g data-name&#x3D;&quot;Layer 2&quot;&gt;
                      &lt;g data-name&#x3D;&quot;Layer 1&quot;&gt;
                        &lt;path
                          className&#x3D;&quot;fill-secondary&quot;
                          d&#x3D;&quot;M229 204.06a25.63 25.63 0 00-13.31 3.8l-42.34-29.32V128a10.67 10.67 0 00-21.35 0v56.11a10.63 10.63 0 004.59 8.77l46.9 32.48A26.59 26.59 0 00203 230a26 26 0 1026-26zm0 30.61a4.64 4.64 0 114.64-4.64 4.64 4.64 0 01-4.64 4.64zm-90.33-28.25V128a10.67 10.67 0 10-21.34 0v78.42a26 26 0 1021.34 0zM128 234.67a4.64 4.64 0 114.64-4.64 4.64 4.64 0 01-4.64 4.64z&quot;
                        &#x2F;&gt;
                        &lt;path
                          className&#x3D;&quot;fill-primary&quot;
                          d&#x3D;&quot;M49.84 172.21l14.1-.18 2.73-1.89V128a26.71 26.71 0 0126.67-26.67 26.41 26.41 0 0117.33 6.57 26.14 26.14 0 0134.66 0 26.53 26.53 0 0144 20.1v42.14l.56.39 16.46-.19a8.5 8.5 0 002.08-.31 65.34 65.34 0 00-9.23-127.65A81 81 0 0049.07 62.91 55.07 55.07 0 000 117.57c0 28.03 21 51.5 49.84 54.64z&quot;
                        &#x2F;&gt;
                        &lt;path
                          className&#x3D;&quot;fill-secondary&quot;
                          d&#x3D;&quot;M104 128a10.67 10.67 0 10-21.33 0v50.53l-42.33 29.31A25.91 25.91 0 1053 230a25.68 25.68 0 00-.48-4.67l46.89-32.48a10.63 10.63 0 004.59-8.77V128zM27 234.67a4.64 4.64 0 114.65-4.67 4.64 4.64 0 01-4.65 4.67z&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;g&gt;
                    &lt;&#x2F;g&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Always up to Date&lt;&#x2F;h4&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;svg-bg svg-bg-lg bg-[#e1f6f0] !rounded-[0.8rem] !mb-4&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 186.69 256&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;touchscreen.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;fill-secondary&quot;
                      d&#x3D;&quot;M26.69 83.54V58.66a32 32 0 0164 0V80a31.67 31.67 0 013.25.37A47.94 47.94 0 1010.69 48a47.71 47.71 0 0016 35.54z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;fill-primary&quot;
                      d&#x3D;&quot;M170.69 117.33a16 16 0 00-16 16V136a2.68 2.68 0 01-5.35 0v-13.33a16 16 0 10-32 0V136a2.67 2.67 0 11-5.34 0v-24a16 16 0 00-32 0v24a2.67 2.67 0 11-5.34 0V58.67a16 16 0 00-32 0v96a5.32 5.32 0 01-5.33-5.33V128h-5.27C14.51 128 0 142.16 0 159.71.08 216.05 41.09 256 66.3 256h67.06a53.32 53.32 0 0053.33-53.33v-69.33a16 16 0 00-16-16z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Easy Usage&lt;&#x2F;h4&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;svg-bg svg-bg-lg bg-[#e9eaf8] !rounded-[0.8rem] !mb-4&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 192 256&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;lock.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;fill-primary&quot;
                      d&#x3D;&quot;M168 96H24a24 24 0 00-24 24v112a24 24 0 0024 24h144a24 24 0 0024-24V120a24 24 0 00-24-24z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;fill-secondary&quot;
                      d&#x3D;&quot;M160 64v32h-21.33V64a42.67 42.67 0 10-85.34 0v32H32V64a64 64 0 01128 0z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Secure Payments&lt;&#x2F;h4&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;svg-bg svg-bg-lg bg-[#f8e7ec] !rounded-[0.8rem] !mb-4&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 255.99 256.01&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;rocket.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;fill-primary&quot;
                      d&#x3D;&quot;M250.75 0c-50-.89-107 25.22-143 65.75a135.36 135.36 0 00-92.77 39.5 5.32 5.32 0 003 9.07L59 120.23l-5 5.68a5.34 5.34 0 00.2 7.33l68.56 68.56a5.32 5.32 0 007.33.21l5.68-5.08 5.86 41.07a5.31 5.31 0 003.78 4.11 4.88 4.88 0 001.52.24 6.06 6.06 0 004.12-1.71 135 135 0 0039.16-92.42c40.57-36.14 66.89-93.12 65.74-143a5.33 5.33 0 00-5.2-5.2zM201.6 92.1a26.66 26.66 0 110-37.71 26.57 26.57 0 010 37.71z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;fill-secondary&quot;
                      d&#x3D;&quot;M29.05 180.31C17.63 191.72 2 243.3.22 249.14A5.36 5.36 0 005.33 256a5.41 5.41 0 001.53-.23c5.84-1.74 57.41-17.42 68.83-28.85a33 33 0 00-46.64-46.62z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Fast Transactions&lt;&#x2F;h4&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;svg-bg svg-bg-lg bg-[#f0eaf6] !rounded-[0.8rem] !mb-4&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 256 245.34&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;bar-chart.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;fill-secondary&quot;
                      d&#x3D;&quot;M32 106.67A10.67 10.67 0 0124.91 88l48-42.67a10.62 10.62 0 018.37-2.61l83 10.07 47-44.56A10.66 10.66 0 01226 23.74l-50.67 48a10.73 10.73 0 01-8.61 2.85L83.49 64.5 39.09 104a10.61 10.61 0 01-7.09 2.7z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;fill-secondary&quot;
                      d&#x3D;&quot;M226.67 53.34A8 8 0 01221 51l-37.32-37.34A8 8 0 01189.33 0h37.33a8 8 0 018 8v37.33a8 8 0 01-4.95 7.39 7.66 7.66 0 01-3.04.62z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;fill-primary&quot;
                      d&#x3D;&quot;M74.67 184v29.33h-64V184A13.33 13.33 0 0124 170.67h37.33A13.34 13.34 0 0174.67 184zM160 120v93.33H96V120a13.33 13.33 0 0113.33-13.33h37.33A13.33 13.33 0 01160 120zm85.33 21.34v72h-64v-72A13.32 13.32 0 01194.66 128H232a13.31 13.31 0 0113.33 13.34z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;fill-secondary&quot;
                      d&#x3D;&quot;M248 245.34H8a8 8 0 010-16h240a8 8 0 010 16z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Reports &amp;amp; Forecasting&lt;&#x2F;h4&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;svg-bg svg-bg-lg bg-[#feece9] !rounded-[0.8rem] !mb-4&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 256 256&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;safe.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                  &gt;
                    &lt;g data-name&#x3D;&quot;Layer 2&quot;&gt;
                      &lt;path
                        className&#x3D;&quot;fill-secondary&quot;
                        d&#x3D;&quot;M186.58 19.47l-56-19a8 8 0 00-5.16 0l-56 19A8 8 0 0064 27.06v42.86c0 52.32 58.38 77.73 60.88 78.8a8.1 8.1 0 003.12.64 7.85 7.85 0 003.12-.64c2.5-1.07 60.88-26.5 60.88-78.82V27.06a8 8 0 00-5.42-7.59zm-23.52 40.45l-29.33 37.33a10.67 10.67 0 01-7.35 4h-1a10.7 10.7 0 01-6.94-2.56l-18.67-16a10.66 10.66 0 0113.83-16.11l10.22 8.75 22.47-28.58a10.66 10.66 0 0116.77 13.17z&quot;
                      &#x2F;&gt;
                      &lt;path
                        className&#x3D;&quot;fill-primary&quot;
                        d&#x3D;&quot;M237.34 42.67h-24V64h21.33v117.33H21.33V64h21.33V42.67h-24A18.74 18.74 0 000 61.33v144A18.75 18.75 0 0018.66 224h81.69c-1.25 5.34-4.57 14-13.45 22.9a5.33 5.33 0 003.77 9.1h74.67a5.34 5.34 0 003.78-9.1c-8.86-8.87-12.27-17.54-13.6-22.9h81.82A18.75 18.75 0 00256 205.33v-144a18.74 18.74 0 00-18.66-18.66z&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;g&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Online Banking&lt;&#x2F;h4&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;svg-bg svg-bg-lg bg-[#e0e9fa] !rounded-[0.8rem] !mb-4&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 255.98 256.06&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;controls.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;fill-secondary&quot;
                      d&#x3D;&quot;M53.34 10.67v42.67H32V10.67a10.66 10.66 0 1121.32 0zm0 96v138.67a10.67 10.67 0 11-21.34 0V106.67zm183.97-53.31H224V10.69a10.67 10.67 0 00-21.34 0v42.69h-13.35a18.68 18.68 0 00-18.67 18.67v16a18.69 18.69 0 0018.67 18.67h13.33v138.67a10.67 10.67 0 1021.34 0V106.72h13.33A18.69 18.69 0 00256 88.05v-16a18.69 18.69 0 00-18.67-18.69zM152 160h-13.34V10.69a10.68 10.68 0 00-21.35 0V160H104a18.7 18.7 0 00-18.69 18.7v16A18.7 18.7 0 00104 213.38h13.33v32a10.68 10.68 0 0021.35 0v-32H152a18.7 18.7 0 0018.68-18.68v-16A18.71 18.71 0 00152 160z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;fill-primary&quot;
                      d&#x3D;&quot;M85.34 72v16a18.69 18.69 0 01-18.67 18.67h-48A18.62 18.62 0 010 88V72a18.69 18.69 0 0118.67-18.67h48A18.76 18.76 0 0185.34 72zm85.3 106.67v16A18.69 18.69 0 01152 213.34h-48a18.62 18.62 0 01-18.7-18.67v-16A18.69 18.69 0 01104 160h48a18.76 18.76 0 0118.64 18.67zM256 72v16a18.69 18.69 0 01-18.67 18.67h-48A18.62 18.62 0 01170.64 88V72a18.69 18.69 0 0118.67-18.67h48A18.76 18.76 0 01256 72z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Configurable Fields&lt;&#x2F;h4&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;svg-bg svg-bg-lg !bg-[#eaf3ef] !rounded-[0.8rem] !mb-4&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 256 256.02&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;checked.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg solid text-[#343f52] text-navy&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;fill-primary&quot;
                      d&#x3D;&quot;M128 64a64 64 0 1064 64 64.06 64.06 0 00-64-64zm34.48 52.59L127.81 154a10.68 10.68 0 01-15.36.29l-18.67-18.71a10.67 10.67 0 1115.08-15.09l10.84 10.83 27.13-29.22a10.68 10.68 0 0115.65 14.53z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;fill-secondary&quot;
                      d&#x3D;&quot;M16 128a111.94 111.94 0 01173.14-93.77L173 50.36A8 8 0 00178.67 64h48a8 8 0 008-8V8A8 8 0 00221 2.36l-20.41 20.42A126.79 126.79 0 00128 0 128 128 0 005.47 165a8 8 0 1015.31-4.61A112.8 112.8 0 0116 128zm234.53-36.94a8 8 0 10-15.31 4.61A112 112 0 01128 240a111 111 0 01-61-18.14l16-16.22A8 8 0 0077.33 192h-48a8 8 0 00-8 8.08l.53 48a8 8 0 0013.68 5.54l20-20.26A126.83 126.83 0 00128 256 127.95 127.95 0 00250.53 91z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;List of Transactions&lt;&#x2F;h4&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <section id="snippet-18" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <Services1 />
        </div>
      </section>
      <CodeSnippet
        code={`import React from &quot;react&quot;;

import { listFeatures } from &quot;@&#x2F;data&#x2F;features&quot;;
export default function Services() {
  return (
    &lt;&gt;
      {&quot; &quot;}
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
        &lt;div className&#x3D;&quot;md:w-10&#x2F;12 lg:w-9&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-14&quot;&gt;
          &lt;h2 className&#x3D;&quot;!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase !text-[#aab0bc] !mb-3&quot;&gt;
            Our Services
          &lt;&#x2F;h2&gt;
          &lt;h3 className&#x3D;&quot;!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !tracking-[-0.03em] xxl:!px-10&quot;&gt;
            The service we offer is
            &lt;span className&#x3D;&quot;!relative z-[1] style-1 primary before:content-[&#39;&#39;] before:z-[-1] before:absolute before:opacity-100 before:block before:-translate-x-2&#x2F;4 before:-translate-y-2&#x2F;4 before:-rotate-1 before:w-[111%] before:h-[110%] before:rounded-[80%] before:border-t-0 before:border-[3px] before:border-solid before:border-[#3f78e0] before:left-2&#x2F;4 before:!top-[52%] after:content-[&#39;&#39;] after:z-[-1] after:absolute after:opacity-100 after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:-translate-x-2&#x2F;4 after:-translate-y-2&#x2F;4 after:-rotate-2 after:w-[107%] after:h-[111%] after:rounded-[80%] after:border-l-0 after:border-b-0 after:border-[3px] after:border-solid after:border-[#3f78e0] after:left-2&#x2F;4 after:top-[52%] max-xl:before:!hidden max-xl:after:!hidden max-lg:before:!hidden max-lg:after:!hidden max-md:before:!hidden max-md:after:!hidden max-sm:before:!hidden max-sm:after:!hidden&quot;&gt;
              &lt;em&gt;designed&lt;&#x2F;em&gt;
            &lt;&#x2F;span&gt;
            to meet your business needs.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-50px] items-center !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]&quot;&gt;
        &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
          &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
            &lt;img
              className&#x3D;&quot;max-w-full h-auto&quot;
              srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i29@2x.png 2x&quot;
              alt&#x3D;&quot;image&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i29.png&quot;
              width&#x3D;{800}
              height&#x3D;{472}
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
        &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto !mt-[50px]&quot;&gt;
          &lt;div className&#x3D;&quot;svg-bg !bg-[#e0e9fa] rounded !mb-5&quot;&gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 256.02 256&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;like.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg solid text-[#3f78e0] text-primary&quot;
            &gt;
              &lt;g data-name&#x3D;&quot;Layer 2&quot;&gt;
                &lt;path
                  className&#x3D;&quot;fill-primary&quot;
                  d&#x3D;&quot;M226.67 21.33a8 8 0 018 8v144a8 8 0 01-8 8H107.31a21.3 21.3 0 00-15.09 6.25L64 215.81v-13.14a21.34 21.34 0 00-21.33-21.33H29.33a8 8 0 01-8-8v-144a8 8 0 018-8h197.34zm0-21.33H29.33A29.35 29.35 0 000 29.33v144a29.36 29.36 0 0029.33 29.33h13.33V248a8 8 0 004.94 7.39 7.82 7.82 0 003.07.61 8.09 8.09 0 005.67-2.34l51-51h119.35A29.36 29.36 0 00256 173.34v-144A29.39 29.39 0 00226.67 0z&quot;
                &#x2F;&gt;
                &lt;path
                  className&#x3D;&quot;fill-secondary&quot;
                  d&#x3D;&quot;M96 146.67a10.67 10.67 0 01-10.67 10.67H74.66A10.68 10.68 0 0164 146.67v-64A10.67 10.67 0 0174.66 72h10.67A10.67 10.67 0 0196 82.67zm89.92-10.88C184 148.06 172.8 157.34 160 157.34h-8.11c-21.33 0-36.16-4-45.44-7.79a25.36 25.36 0 00.21-2.88v-64A21.24 21.24 0 00104 72.32c5.65-4.48 12.69-11.73 12.69-19.84 0-6.61 0-20.27 12.8-20.27 8.53 0 17.81 7.89 17.81 25.17A48.86 48.86 0 01145 72h21.23A25.76 25.76 0 01192 97.71c0 .32-1.28 27.09-6.51 38z&quot;
                &#x2F;&gt;
              &lt;&#x2F;g&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
          &lt;h3 className&#x3D;&quot;h1 !leading-[1.3] post-title !tracking-[-0.03em] !mb-3&quot;&gt;
            Social Media Marketing
          &lt;&#x2F;h3&gt;
          &lt;p&gt;
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus.
          &lt;&#x2F;p&gt;
          &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary&quot;&gt;
            {listFeatures.map((elm, i) &#x3D;&gt; (
              &lt;li key&#x3D;{i} className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                {elm}
              &lt;&#x2F;li&gt;
            ))}
          &lt;&#x2F;ul&gt;
          &lt;a
            href&#x3D;&quot;#&quot;
            className&#x3D;&quot;more hover !text-[#3f78e0] hover:!text-[#3f78e0]&quot;
          &gt;
            Learn More
          &lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-50px] items-center !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]&quot;&gt;
        &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 lg:!order-2 !mt-[50px]&quot;&gt;
          &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
            &lt;img
              className&#x3D;&quot;max-w-full h-auto&quot;
              srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i30@2x.png 2x&quot;
              alt&#x3D;&quot;image&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i30.png&quot;
              width&#x3D;{800}
              height&#x3D;{479}
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
        &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mr-auto !mt-[50px]&quot;&gt;
          &lt;div className&#x3D;&quot;svg-bg bg-[#e1f6f0] rounded !mb-5&quot;&gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 256 256&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;layout-2.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg solid text-[#45c4a0] text-green&quot;
            &gt;
              &lt;path
                className&#x3D;&quot;fill-secondary&quot;
                d&#x3D;&quot;M0 102.4v141.87A11.73 11.73 0 0011.73 256h51.2a11.73 11.73 0 0011.73-11.73V102.4a11.73 11.73 0 00-11.73-11.73h-51.2A11.73 11.73 0 000 102.4z&quot;
              &#x2F;&gt;
              &lt;path
                className&#x3D;&quot;fill-primary&quot;
                d&#x3D;&quot;M244.27 0H11.73A11.73 11.73 0 000 11.73v51.2a11.73 11.73 0 0011.73 11.73h232.53A11.72 11.72 0 00256 62.93v-51.2A11.7 11.7 0 00244.27 0zM102.4 256h141.87A11.73 11.73 0 00256 244.27V102.4a11.73 11.73 0 00-11.73-11.73H102.4a11.73 11.73 0 00-11.73 11.73v141.87A11.73 11.73 0 00102.4 256z&quot;
              &#x2F;&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
          &lt;h3 className&#x3D;&quot;h1 !leading-[1.3] post-title !tracking-[-0.03em] !mb-3&quot;&gt;
            Web Design &amp;amp; Development
          &lt;&#x2F;h3&gt;
          &lt;p&gt;
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus.
          &lt;&#x2F;p&gt;
          &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-green&quot;&gt;
            {listFeatures.map((elm, i) &#x3D;&gt; (
              &lt;li key&#x3D;{i} className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                {elm}
              &lt;&#x2F;li&gt;
            ))}
          &lt;&#x2F;ul&gt;
          &lt;a
            href&#x3D;&quot;#&quot;
            className&#x3D;&quot;more hover !text-[#45c4a0] focus:!text-[#45c4a0] hover:!text-[#45c4a0]&quot;
          &gt;
            Learn More
          &lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-50px] items-center&quot;&gt;
        &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
          &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
            &lt;img
              className&#x3D;&quot;max-w-full h-auto&quot;
              srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i31@2x.png 2x&quot;
              alt&#x3D;&quot;image&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i31.png&quot;
              width&#x3D;{800}
              height&#x3D;{512}
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
        &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto !mt-[50px]&quot;&gt;
          &lt;div className&#x3D;&quot;svg-bg bg-[#fbe7f3] rounded !mb-5&quot;&gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 256 218.67&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;bullhorn.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg solid text-[#e668b3] text-fuchsia&quot;
            &gt;
              &lt;path
                className&#x3D;&quot;fill-secondary&quot;
                d&#x3D;&quot;M88 208a48.06 48.06 0 01-48-48 45.85 45.85 0 012.26-14.48 10.66 10.66 0 1120.22 6.75 24.28 24.28 0 00-1.15 7.73 26.65 26.65 0 0052.56 6.22 10.67 10.67 0 0120.77 4.87A47.71 47.71 0 0188 208z&quot;
              &#x2F;&gt;
              &lt;path
                className&#x3D;&quot;fill-primary&quot;
                d&#x3D;&quot;M248 210.67a8 8 0 01-2.22-.32L5.78 141A8 8 0 010 133.34v-48a8 8 0 015.78-7.68l240-69.32A8 8 0 01256 16v186.7a8 8 0 01-3.2 6.4 8.09 8.09 0 01-4.8 1.57z&quot;
              &#x2F;&gt;
              &lt;path
                className&#x3D;&quot;fill-primary&quot;
                d&#x3D;&quot;M245.33 218.67A10.67 10.67 0 01234.66 208V10.67a10.67 10.67 0 1121.34 0V208a10.66 10.66 0 01-10.67 10.67zm-234.66-64A10.66 10.66 0 010 144V74.69a10.67 10.67 0 0121.34 0V144a10.67 10.67 0 01-10.67 10.67z&quot;
              &#x2F;&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
          &lt;h3 className&#x3D;&quot;h1 !leading-[1.3] post-title !tracking-[-0.03em] !mb-3&quot;&gt;
            Content Marketing Services
          &lt;&#x2F;h3&gt;
          &lt;p&gt;
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus.
          &lt;&#x2F;p&gt;
          &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-fuchsia&quot;&gt;
            {listFeatures.map((elm, i) &#x3D;&gt; (
              &lt;li key&#x3D;{i} className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#fbe4f1] !text-[#e668b3] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                {elm}
              &lt;&#x2F;li&gt;
            ))}
          &lt;&#x2F;ul&gt;
          &lt;a
            href&#x3D;&quot;#&quot;
            className&#x3D;&quot;more hover !text-[#e668b3] focus:!text-[#e668b3] hover:!text-[#e668b3]&quot;
          &gt;
            Learn More
          &lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
    &lt;&#x2F;&gt;
  );
}`}
      />
      <Services />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function Services() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div className&#x3D;&quot;container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-start !mt-[-50px] !mb-[8rem] xl:!mb-[10rem] lg:!mb-[10rem] md:!mb-[10rem]&quot;&gt;
          &lt;div
            className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!sticky lg:!sticky !mt-[50px]&quot;
            style&#x3D;{{ top: &quot;8rem&quot; }}
          &gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.345rem_+_1.14vw)] !leading-[1.2] xl:!text-[2.2rem] !mb-5&quot;&gt;
              The service I offer is specifically designed to meet your needs.
            &lt;&#x2F;h3&gt;
            &lt;p className&#x3D;&quot;!mb-7&quot;&gt;
              Cras mattis consectetur purus sit amet fermentum. Donec
              ullamcorper nulla non metus auctor fringilla. Integer posuere erat
              a ante venenatis dapibus posuere velit aliquet.
            &lt;&#x2F;p&gt;
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-end&quot;
            &gt;
              More Details
              &lt;i className&#x3D;&quot;uil uil-arrow-up-right !ml-[.3rem] before:content-[&#39;\e950&#39;]&quot; &#x2F;&gt;
            &lt;&#x2F;a&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto !mt-[50px]&quot;&gt;
            &lt;div className&#x3D;&quot;card !bg-[#fdf1f8] !mb-6&quot;&gt;
              &lt;div className&#x3D;&quot;card-body flex flex-row p-[40px]&quot;&gt;
                &lt;div&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 512 511.9&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;search-2.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e668b3] text-fuchsia mr-5&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z&quot;
                    &#x2F;&gt;
                    &lt;circle
                      className&#x3D;&quot;lineal-fill&quot;
                      cx&#x3D;&quot;297.1&quot;
                      cy&#x3D;&quot;214.9&quot;
                      r&#x3D;&quot;111.1&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h3 className&#x3D;&quot;!text-[1.05rem] !mb-2&quot;&gt;User Research&lt;&#x2F;h3&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    nulla non metus auctor eget lacinia odio sem aget elit.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.card-body *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.card *&#x2F;}
            &lt;div className&#x3D;&quot;card !bg-[#eff7fa] !mb-6&quot;&gt;
              &lt;div className&#x3D;&quot;card-body flex flex-row p-[40px]&quot;&gt;
                &lt;div&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 507.4 512&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;puzzle-2.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#54a8c7] text-aqua mr-5&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M257.9 15.2v65.1c-28.7-15.6-64.7-5-80.3 23.8s-5 64.7 23.8 80.3c17.6 9.6 38.9 9.6 56.6 0v65.1h59.9c-8.4-31.6 10.5-64 42.1-72.4 31.6-8.4 64 10.5 72.4 42.1 2.6 9.9 2.6 20.4 0 30.3h59.9V70.7c0-30.7-24.9-55.5-55.5-55.5H257.9z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M436.7 0h-366C31.7 0 0 31.7 0 70.7v370.6c0 39 31.7 70.7 70.7 70.7h188.1c8.4 0 15.2-6.8 15.2-15.1V453c5.5 1 11.2 1.3 16.8 1 17.5-.9 34.2-7.9 47.1-19.9 30.1-28 31.7-75.1 3.7-105.2-23.2-24.8-60.2-30.8-90-14.6-7.3 4-10.1 13.2-6.1 20.6 4 7.4 13.2 10.1 20.6 6.1 7.4-4 15.7-5.8 24.1-5.2 24.3 1.7 42.6 22.8 40.9 47-1.5 21.8-19.8 39.8-41.7 40.8-8.1.4-16.1-1.4-23.2-5.3-2.2-1.2-4.7-1.8-7.3-1.8-8.4 0-15.2 6.8-15.2 15.2v49.9h-173c-22.3 0-40.3-18.1-40.3-40.3V264.6h28.7c-.5 2.6-.8 5.2-1 7.8-2.9 41 28 76.6 69 79.5 1.8.1 3.6.2 5.3.2 18.8.1 37-7.1 50.7-20 24.8-23.2 30.8-60.1 14.6-89.9-.1-.2-.2-.3-.3-.5-4.1-7.3-13.4-9.9-20.7-5.7-7.3 4.1-9.9 13.4-5.7 20.7 4 7.4 5.8 15.8 5.2 24.2-1.7 24.3-22.8 42.5-47.1 40.8-21.8-1.5-39.8-19.8-40.8-41.7-.4-8.1 1.4-16.1 5.2-23.3 1.2-2.2 1.9-4.7 1.9-7.3 0-8.4-6.8-15.2-15.2-15.2H30.4V70.7c0-22.3 18.1-40.3 40.3-40.3h172v28.7c-8.7-1.6-17.6-1.6-26.2 0-40.5 7.2-67.4 45.9-60.1 86.4s45.9 67.4 86.4 60.1v43.9c0 8.4 6.8 15.2 15.2 15.2h59.9c1.6 0 3.2-.3 4.7-.7 8-2.6 12.3-11.2 9.7-19.2-.6-2.5-1-5.1-1.2-7.7-1.5-24.3 16.9-45.2 41.2-46.7.9-.1 1.8-.1 2.7-.1 3.8 0 7.6.5 11.3 1.5 23.5 6.2 37.5 30.4 31.3 53.9-.3 1.3-.5 2.6-.5 3.9 0 8.4 6.8 15.2 15.2 15.2h59.9c8.4 0 15.2-6.8 15.2-15.2V70.7c-.1-39-31.7-70.7-70.7-70.7zM477 234.2h-27.5c0-41.1-33.3-74.4-74.4-74.4-1.5 0-3 0-4.6.1-36 2.2-65.9 30.9-69.5 66.8-.2 2.5-.4 5-.4 7.5h-27.5v-49.9c0-2.5-.6-5-1.8-7.3-4-7.4-13.2-10.1-20.6-6.1-7.4 4-15.7 5.8-24.1 5.2-24.3-1.7-42.6-22.8-40.9-47 1.5-21.8 19.8-39.8 41.7-40.8 8.1-.4 16.1 1.4 23.2 5.3 2.2 1.2 4.7 1.8 7.3 1.8 8.4 0 15.2-6.8 15.2-15.2V30.4h163.6c22.3 0 40.3 18.1 40.3 40.3v163.5z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h3 className&#x3D;&quot;!text-[1.05rem] !mb-2&quot;&gt;
                    Strategy &amp;amp; Planning
                  &lt;&#x2F;h3&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    nulla non metus auctor eget lacinia odio sem aget elit.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.card-body *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.card *&#x2F;}
            &lt;div className&#x3D;&quot;card !bg-[#fff8ee] !mb-6&quot;&gt;
              &lt;div className&#x3D;&quot;card-body flex flex-row p-[40px]&quot;&gt;
                &lt;div&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 327.4 512&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;smartphone.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow mr-5&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M313.7 72.3V47c0-18.4-14.9-33.2-33.2-33.2H47c-18.4 0-33.2 14.9-33.2 33.2v25.3h299.9zM13.8 398.4V465c0 18.4 14.9 33.2 33.2 33.2h233.4c18.4 0 33.2-14.9 33.2-33.2v-66.6H13.8z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M280.4 0H47C21.1 0 0 21.1 0 47v418c0 25.9 21.1 47 47 47h233.4c25.9 0 47-21.1 47-47V352.3c0-7.6-6.2-13.8-13.8-13.7-7.6 0-13.7 6.2-13.7 13.7v32.3H27.5V86.1h272.4V256c0 7.6 6.1 13.8 13.7 13.8s13.8-6.1 13.8-13.7V47c0-25.9-21-47-47-47zm19.5 412.1V465c0 10.8-8.7 19.5-19.5 19.5H47c-10.8 0-19.5-8.7-19.5-19.5v-52.9h272.4zM27.5 58.6V47c0-10.8 8.7-19.5 19.5-19.5h233.4c10.8 0 19.5 8.7 19.5 19.5v11.6H27.5z&quot;
                    &#x2F;&gt;
                    &lt;circle cx&#x3D;&quot;163.7&quot; cy&#x3D;&quot;448.3&quot; r&#x3D;&quot;9.4&quot; &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M163.7 471.5c-12.8 0-23.2-10.4-23.2-23.2 0-12.8 10.4-23.2 23.2-23.2s23.2 10.4 23.2 23.2-10.4 23.2-23.2 23.2zm-25.4-248.1H69.5c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.8 6.2 13.8 13.8s-6.2 13.8-13.8 13.8h-55v32.1h55c7.6 0 13.8 6.2 13.8 13.8-.1 7.5-6.2 13.7-13.8 13.7z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M189.2 150H258v59.6h-68.8z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M258 223.4h-68.8c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.6-6.1 13.8-13.7 13.8zm-55-27.5h41.3v-32.1h-41.4l.1 32.1z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M69.5 265.6h68.8v59.6H69.5z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M138.3 339H69.5c-7.6 0-13.8-6.2-13.8-13.8v-59.7c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.7-6.1 13.9-13.7 13.9zm-55-27.5h41.2v-32.1H83.2l.1 32.1zM258 339h-68.8c-7.6 0-13.8-6.2-13.7-13.8 0-7.6 6.2-13.7 13.7-13.7h55v-32.1h-55c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.8 6.2 13.8 13.8v59.6c0 7.6-6.2 13.8-13.8 13.8z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h3 className&#x3D;&quot;!text-[1.05rem] !mb-2&quot;&gt;App Design&lt;&#x2F;h3&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    nulla non metus auctor eget lacinia odio sem aget elit.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.card-body *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.card *&#x2F;}
            &lt;div className&#x3D;&quot;card !bg-[#f3f8f5] !mb-6&quot;&gt;
              &lt;div className&#x3D;&quot;card-body flex flex-row p-[40px]&quot;&gt;
                &lt;div&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 409.6 332.7&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;design.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#7cb798] text-leaf mr-5&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M350.9 54.2H58.7c-6.2.2-11.4-4.7-11.5-10.9S51.8 31.9 58 31.7h292.9c6.2-.2 11.4 4.7 11.5 10.9s-4.7 11.4-10.9 11.5c-.2.1-.4.1-.6.1zM239.8 328.9a11.182 11.182 0 01-10.6-14.8c2.8-8.3 16.2-47.4 25.6-63.6-9.5-10.1-37-40.3-49.9-66.1-12.1 23.4-39.5 54.4-50.1 66 10.1 16.5 22.7 54.9 25.4 63.6.4 1.2.6 2.4.6 3.7 0 6.2-5 11.2-11.2 11.2-4.9 0-9.3-3.2-10.7-7.9v-.1c-6.6-20.7-18.4-52.9-24.3-60.3-4.8-6.1-3.4-14.5-.8-19.8.5-.9 1.1-1.8 1.8-2.6 20.6-22.3 50.7-59.4 52.7-72.4.6-3.7 3.3-10.1 14.8-10.7 12.5-.7 16.6 4.8 17.8 9.4 5.7 21.5 40 60.3 52.7 73.4.8.8 1.5 1.8 2 2.8 2.6 5.1 4 13.3-.5 19.5-5.7 7.7-18.2 41.6-24.8 61.1-1.3 4.6-5.6 7.7-10.5 7.6z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M204.8 254.9c-6.2 0-11.2-5-11.2-11.2V167c.3-6.2 5.6-10.9 11.8-10.6 5.7.3 10.3 4.9 10.6 10.6v76.7c0 6.2-5 11.2-11.2 11.2z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M366.6 244.6c-6.2 0-11.2-5-11.2-11.2v-28.6c0-83.1-67.6-150.6-150.6-150.6S54.2 121.7 54.2 204.8v28.6c-.2 6.2-5.4 11.1-11.5 10.9-5.9-.2-10.7-4.9-10.9-10.9v-28.6c-.1-95.5 77.2-172.9 172.7-173 46 0 90.1 18.2 122.6 50.8 32.6 32.3 50.9 76.3 50.9 122.2v28.6c-.1 6.2-5.2 11.2-11.4 11.2z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M220 74.7h-30.4c-9.1 0-16.5-7.4-16.5-16.5V27.7c0-9.1 7.4-16.5 16.5-16.5H220c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M220 85.9h-30.4c-15.3 0-27.7-12.4-27.7-27.7V27.7c0-15.3 12.4-27.7 27.7-27.7H220c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.4-63.5c-2.9 0-5.3 2.4-5.3 5.3v30.5c0 2.9 2.4 5.3 5.3 5.3H220c2.9 0 5.3-2.4 5.3-5.3V27.7c0-2.9-2.4-5.3-5.3-5.3h-30.4z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M381.9 275.4h-30.5c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M381.9 286.6h-30.5c-15.3 0-27.7-12.4-27.7-27.7v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3h-30.5z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M58.2 275.4H27.7c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5V259c0 9.1-7.4 16.5-16.5 16.4z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M58.2 286.6H27.7C12.4 286.6 0 274.2 0 258.9v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3H27.7zm234.1 109.5h-114c-6.2 0-11.2-5-11.2-11.2 0-6.2 5-11.2 11.2-11.2h114c6.2 0 11.2 5 11.2 11.2 0 6.2-5 11.2-11.2 11.2z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h3 className&#x3D;&quot;!text-[1.05rem] !mb-2&quot;&gt;Brand Design&lt;&#x2F;h3&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    nulla non metus auctor eget lacinia odio sem aget elit.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.card-body *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.card *&#x2F;}
            &lt;div className&#x3D;&quot;card !bg-[#fef4f2] !mb-6&quot;&gt;
              &lt;div className&#x3D;&quot;card-body flex flex-row p-[40px]&quot;&gt;
                &lt;div&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 409.6 332&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;video-editing.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#f78b77] text-orange mr-5&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M318 0H53.9C24.2.1.1 24.2 0 53.9v210.8c0 29.8 24.2 53.9 53.9 53.9H318c29.8 0 54-24.1 54-53.9V53.9C371.9 24.1 347.8 0 318 0zm31.3 264.7c0 17.3-14 31.3-31.3 31.3H54c-17.3 0-31.3-14-31.3-31.3V53.9c0-17.3 13.9-31.3 31.2-31.3H318c17.3 0 31.3 14 31.3 31.3v210.8z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M152.5 189.9v-65.7c0-3.8 3-6.8 6.8-6.8 1.2 0 2.3.3 3.3.9l57.9 32.8c3.3 1.9 4.4 6 2.6 9.3-.6 1.1-1.5 1.9-2.6 2.6l-57.9 32.8c-3.3 1.9-7.4.7-9.3-2.6-.5-1-.8-2.1-.8-3.3z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M159.3 208c-10 0-18.1-8.1-18.1-18.1v-65.7c0-10 8.1-18.1 18.1-18.1 3.1 0 6.2.8 8.9 2.3l57.9 32.9c8.7 4.9 11.8 16 6.8 24.7-1.6 2.9-4 5.2-6.8 6.8l-57.9 32.8c-2.7 1.6-5.8 2.4-8.9 2.4zm4.5-76v50.1L208 157l-44.2-25z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M186 261.2c-56.3 0-101.9-45.7-101.9-101.9.2-6.3 5.4-11.2 11.7-11 6 .2 10.8 5 11 11 0 43.8 35.5 79.3 79.3 79.3s79.3-35.5 79.3-79.3S229.8 80 186 80c-6.3-.2-11.2-5.4-11-11.7.2-6 5-10.8 11-11 56.3.6 101.5 46.6 100.9 102.9-.5 55.6-45.4 100.5-100.9 101z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M201.7 314.2l-30.6 6.3c-2.2.5-4.3-1-4.8-3.2-.1-.5-.1-1.1 0-1.6l6.3-30.6c.4-1.9 1.3-3.6 2.7-5L362.2 93.2c6.2-6.2 16.3-6.2 22.5 0l8.9 8.9c6.2 6.2 6.2 16.3 0 22.5L206.7 311.5c-1.3 1.4-3.1 2.3-5 2.7z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M401.6 94.1l-8.9-8.9c-10.6-10.6-27.9-10.6-38.5 0l-20.5 20.5c-.8.5-1.6 1.1-2.3 1.9-.5.6-1 1.2-1.4 1.8L167.3 272.2c-3 2.9-5 6.6-5.8 10.7l-6.3 30.6c-.2 1-.3 2.1-.3 3.1 0 8.5 6.9 15.4 15.4 15.4 1 0 2.1-.1 3.1-.4l30.6-6.3c4-.9 7.8-2.9 10.7-5.8l163.8-163.8c.3-.2.5-.4.8-.7s.6-.6.8-.9l21.5-21.5c10.6-10.6 10.6-27.9 0-38.5zM199.1 303.3l-19.4 4 4-19.4L340 131.7l15.4 15.4-156.3 156.2zm186.6-186.6L371.3 131 356 115.7l14.4-14.4c.8-.8 2-1.3 3.2-1.3s2.3.4 3.2 1.3l8.9 8.9c1.8 1.8 1.8 4.7 0 6.5z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h3 className&#x3D;&quot;!text-[1.05rem] !mb-2&quot;&gt;Motion Graphic&lt;&#x2F;h3&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    nulla non metus auctor eget lacinia odio sem aget elit.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.card-body *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.card *&#x2F;}
            &lt;div className&#x3D;&quot;card !bg-[#f0f0f8]&quot;&gt;
              &lt;div className&#x3D;&quot;card-body flex flex-row p-[40px]&quot;&gt;
                &lt;div&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 512 442.8&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;browser.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#605dba] text-grape mr-5&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M464.2 442.8H47.7C21.4 442.8 0 421.4 0 395.1V47.7C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7c0 7.6-6.2 13.8-13.8 13.9-7.6 0-13.8-6.2-13.9-13.8 0-11.1-9-20-20.1-20.1H47.7c-11.1 0-20 9-20.1 20.1v347.3c0 11.1 9 20.1 20.1 20.1h416.5c11.1 0 20.1-9 20.1-20.1V209.4c0-7.6 6.2-13.8 13.8-13.9 7.6 0 13.8 6.2 13.9 13.8V395c0 26.4-21.4 47.8-47.8 47.8z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M13.8 47.7v69.9h484.3V47.7c0-18.7-15.2-33.9-33.9-33.9H47.7C29 13.8 13.8 29 13.8 47.7z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M498.2 131.5H13.8c-7.6 0-13.8-6.2-13.8-13.8v-70C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7v69.9c0 7.7-6.2 13.9-13.8 13.9zM27.7 103.8h456.6v-56c0-11.1-9-20.1-20.1-20.1H47.8c-11.1 0-20 9-20.1 20v56.1z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M294.7 79.6h-26.3c-7.6 0-13.8-6.2-13.8-13.8S260.8 52 268.4 52h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8zm73.4 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8 0 7.6-6.2 13.8-13.8 13.8zm73.3 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M112.8 268.5h286.4v63.6H112.8z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M399.2 345.9H112.8c-7.6 0-13.8-6.2-13.8-13.8v-63.7c0-7.6 6.2-13.8 13.8-13.8h286.4c7.6 0 13.8 6.2 13.8 13.8v63.7c.1 7.6-6.1 13.8-13.8 13.8zm-272.6-27.6h258.8v-36H126.6v36zm230.9-95.5h-203c-7.6.2-14-5.8-14.2-13.5s5.8-14 13.5-14.2h203.8c7.6-.2 14 5.8 14.2 13.5s-5.8 14-13.5 14.2h-.8z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h3 className&#x3D;&quot;!text-[1.05rem] !mb-2&quot;&gt;Web Design&lt;&#x2F;h3&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    nulla non metus auctor eget lacinia odio sem aget elit.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.card-body *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.card *&#x2F;}
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
  );
}
