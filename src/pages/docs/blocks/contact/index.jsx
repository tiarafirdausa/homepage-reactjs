import Contact from "@/components/about/Contact";
import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import Contact1 from "@/components/blocks/contact/Contact1";
import Contact10 from "@/components/blocks/contact/Contact10";
import COntact11 from "@/components/blocks/contact/COntact11";
import Contact3 from "@/components/blocks/contact/Contact3";
import Contact4 from "@/components/blocks/contact/Contact4";
import Contact6 from "@/components/blocks/contact/Contact6";
import Contact7 from "@/components/blocks/contact/Contact7";
import Contact8 from "@/components/blocks/contact/Contact8";
import Contact9 from "@/components/blocks/contact/Contact9";
import PageTitle from "@/components/blocks/PageTitle";
import CodeSnippet from "@/components/common/CodeSnippet";
import Contact2 from "@/components/homes/home-15/Contact";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Contact || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageContact() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Contact" />
      <BlockPageLinks />
      <Contact1 />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function Contact1() {
  return (
    &lt;section id&#x3D;&quot;snippet-1&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-50px] xl:mx-[-35px] lg:mx-[-20px] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full xl:!order-2 lg:!order-2 !relative !mt-[50px]&quot;&gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;w-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i14@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i14.png&quot;
                width&#x3D;&quot;800&quot;
                height&#x3D;&quot;584&quot;
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
              Let’s Talk
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium&quot;&gt;
              Let&#39;s make something great together. We are
              &lt;span className&#x3D;&quot;relative z-[2] whitespace-nowrap after:content-[&#39;&#39;] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)] purple&quot;&gt;
                trusted by
              &lt;&#x2F;span&gt;
              over 5000+ clients. Join them by using our services and grow your
              business.
            &lt;&#x2F;p&gt;
            &lt;p&gt;
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            &lt;&#x2F;p&gt;
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mt-2&quot;
            &gt;
              Join Us
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
      <Contact2 />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function Contact() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[&#39;&#39;] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-32 pb-[4.5rem] xl:pt-36 lg:pt-36 md:pt-36 xl:pb-24 lg:pb-24 md:pb-24&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;md:w-8&#x2F;12 lg:w-6&#x2F;12 xl:w-5&#x2F;12 lg:!ml-0 xl:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative&quot;&gt;
            &lt;div
              className&#x3D;&quot;shape bg-dot primary rellax !w-[7rem] !h-[12.5rem] !bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50&quot;
              data-rellax-speed&#x3D;{1}
              style&#x3D;{{ top: &quot;-2rem&quot;, left: &quot;-1.4rem&quot; }}
            &#x2F;&gt;
            &lt;figure className&#x3D;&quot;!rounded-[.4rem] relative z-[2]&quot;&gt;
              &lt;img
                className&#x3D;&quot;!rounded-[.4rem] w-full max-w-full !h-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about4@2x.jpg 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about4.jpg&quot;
                width&#x3D;{480}
                height&#x3D;{550}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 320.8 409.6&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;telemarketer.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4&quot;
            &gt;
              &lt;path
                className&#x3D;&quot;lineal-fill&quot;
                d&#x3D;&quot;M276.1 367.9v-8.5c0-63.6-52.1-115.7-115.7-115.7s-115.7 52-115.7 115.7v8.5c0 16.6 13.4 30 30 30h171.5c16.5 0 29.9-13.4 29.9-30z&quot;
              &#x2F;&gt;
              &lt;path
                className&#x3D;&quot;lineal-stroke&quot;
                d&#x3D;&quot;M246.1 409.6H74.6c-23 0-41.7-18.7-41.7-41.7v-8.5c0-70.4 57.1-127.5 127.5-127.5S287.9 289 287.9 359.4v8.5c-.1 23-18.7 41.7-41.8 41.7zm-85.7-154.2c-57.4.1-103.9 46.6-104 104v8.5c0 10.1 8.2 18.2 18.2 18.2h171.5c10.1 0 18.2-8.2 18.2-18.2v-8.5c0-57.5-46.5-104-103.9-104zm145.5-109.9h-23.5c0-67.4-54.6-122-122-122s-122 54.6-122 122H14.9C14.9 65.3 80.2 0 160.4 0s145.5 65.3 145.5 145.5z&quot;
              &#x2F;&gt;
              &lt;path
                className&#x3D;&quot;lineal-stroke&quot;
                d&#x3D;&quot;M160.4 251.3c-57 0-103.2-46.2-103.2-103.2S103.4 44.9 160.4 44.9s103.2 46.2 103.2 103.2c-.1 57-46.3 103.1-103.2 103.2zm0-182.9c-44 0-79.7 35.7-79.7 79.7s35.7 79.7 79.7 79.7 79.7-35.7 79.7-79.7c-.1-44-35.7-79.6-79.7-79.7z&quot;
              &#x2F;&gt;
              &lt;path
                className&#x3D;&quot;lineal-fill&quot;
                d&#x3D;&quot;M68.3 130.4c0-5.6-2.9-10.8-7.6-13.8-15-9.4-34.7-4.9-44.1 10.1-3.2 5.1-4.9 11.1-4.9 17.1v21.5c0 17.7 14.4 32 32.1 32.1 6 0 11.8-1.7 16.9-4.9 4.7-3 7.6-8.2 7.6-13.8v-48.3z&quot;
              &#x2F;&gt;
              &lt;path
                className&#x3D;&quot;lineal-stroke&quot;
                d&#x3D;&quot;M43.8 209.2C19.6 209.1 0 189.5 0 165.3v-21.5C0 119.6 19.5 100 43.7 100c8.2 0 16.3 2.3 23.3 6.7 8.2 5.1 13.1 14.1 13.1 23.8v48.4c.1 9.7-4.9 18.7-13.1 23.8-6.9 4.2-15 6.5-23.2 6.5zm0-85.8c-11.2 0-20.3 9.1-20.4 20.4v21.5c0 11.2 9.1 20.3 20.4 20.4 3.8 0 7.5-1.1 10.7-3.1 1.3-.9 2.1-2.3 2.1-3.9v-48.3c0-1.6-.8-3-2.1-3.9-3.2-2-6.9-3-10.7-3.1z&quot;
              &#x2F;&gt;
              &lt;path
                className&#x3D;&quot;lineal-fill&quot;
                d&#x3D;&quot;M252.4 130.4c0-5.6 2.9-10.8 7.6-13.8 15-9.4 34.7-4.9 44.1 10.1 3.2 5.1 4.9 11.1 4.9 17.1v21.5c0 17.7-14.4 32-32.1 32.1-6 0-11.8-1.7-16.9-4.9-4.7-3-7.6-8.2-7.6-13.8v-48.3z&quot;
              &#x2F;&gt;
              &lt;path
                className&#x3D;&quot;lineal-stroke&quot;
                d&#x3D;&quot;M276.9 209.2c-8.2 0-16.2-2.3-23.1-6.6-8.2-5.1-13.2-14.1-13.1-23.8v-48.4c-.1-9.7 4.9-18.7 13.1-23.8 20.5-12.8 47.5-6.6 60.3 13.9 4.4 7 6.7 15.1 6.7 23.3v21.5c0 24.2-19.6 43.8-43.9 43.9zm0-85.8c-3.8 0-7.5 1.1-10.7 3.1-1.3.9-2.1 2.3-2.1 3.9v48.4c0 1.6.8 3 2.1 3.9 9.5 5.9 22.1 3 28-6.5 2-3.2 3.1-7 3.1-10.8v-21.5c0-11.3-9.1-20.4-20.4-20.5z&quot;
              &#x2F;&gt;
              &lt;path
                className&#x3D;&quot;lineal-stroke&quot;
                d&#x3D;&quot;M251.2 195.9h-83.3c-6.5 0-11.7-5.2-11.7-11.7s5.2-11.7 11.7-11.7h83.3c6.5 0 11.7 5.3 11.7 11.7 0 6.5-5.3 11.7-11.7 11.7z&quot;
              &#x2F;&gt;
            &lt;&#x2F;svg&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-8&quot;&gt;
              Convinced yet? Let&#39;s make something great together.
            &lt;&#x2F;h2&gt;
            &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;div className&#x3D;&quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-6 !mt-[-0.25rem]&quot;&gt;
                  &lt;i className&#x3D;&quot;uil uil-location-pin-alt before:content-[&#39;\ebd8&#39;]&quot; &#x2F;&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h5 className&#x3D;&quot;!mb-1&quot;&gt;Address&lt;&#x2F;h5&gt;
                &lt;address className&#x3D;&quot;not-italic !leading-[inherit] !mb-4&quot;&gt;
                  Moonshine St. 14&#x2F;05 Light City,
                  &lt;br className&#x3D;&quot;hidden xl:block lg:block md:block&quot; &#x2F;&gt;
                  London, United Kingdom
                &lt;&#x2F;address&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;div className&#x3D;&quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-6 !mt-[-0.25rem]&quot;&gt;
                  &lt;i className&#x3D;&quot;uil uil-phone-volume before:content-[&#39;\ec50&#39;]&quot; &#x2F;&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h5 className&#x3D;&quot;!mb-1&quot;&gt;Phone&lt;&#x2F;h5&gt;
                &lt;p&gt;00 (123) 456 78 90&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;div className&#x3D;&quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-6 !mt-[-0.25rem]&quot;&gt;
                  &lt;i className&#x3D;&quot;uil uil-envelope before:content-[&#39;\eac8&#39;]&quot; &#x2F;&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h5 className&#x3D;&quot;!mb-1&quot;&gt;E-mail&lt;&#x2F;h5&gt;
                &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                  &lt;a
                    href&#x3D;&quot;mailto:sandbox@email.com&quot;
                    className&#x3D;&quot;!text-[#60697b]&quot;
                  &gt;
                    sandbox@email.com
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
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
      <Contact3 />

      <CodeSnippet
        code={`import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;
import React from &quot;react&quot;;

export default function Contact3() {
  return (
    &lt;section id&#x3D;&quot;snippet-3&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-50px] xl:mx-[-35px] lg:mx-[-20px] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative&quot;&gt;
            &lt;div
              className&#x3D;&quot;shape bg-dot primary rellax !w-[8rem] !h-[8rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50&quot;
              data-rellax-speed&#x3D;{1}
              style&#x3D;{{ top: 0, left: &quot;-1.4rem&quot;, zIndex: 0 }}
            &#x2F;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full&quot;&gt;
                &lt;figure className&#x3D;&quot;!rounded-[.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;!rounded-[.4rem]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g5@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g5.jpg&quot;
                    width&#x3D;&quot;350&quot;
                    height&#x3D;&quot;350&quot;
                  &#x2F;&gt;
                &lt;&#x2F;figure&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
                  &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2&quot;&gt;
                    &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;rounded-[0.4rem]&quot;
                        srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g6@2x.jpg 2x&quot;
                        alt&#x3D;&quot;image&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g6.jpg&quot;
                        width&#x3D;&quot;375&quot;
                        height&#x3D;&quot;250&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;figure&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 lg:w-10&#x2F;12 md:w-10&#x2F;12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full&quot;&gt;
                    &lt;div className&#x3D;&quot;card !bg-[#e0e9fa] !text-center&quot;&gt;
                      &lt;div className&#x3D;&quot;card-body !py-12 !px-[2rem] counter-wrapper&quot;&gt;
                        &lt;h3 className&#x3D;&quot;counter !whitespace-nowrap xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2&quot;&gt;
                          &lt;Counter max&#x3D;{5000} &#x2F;&gt;+
                        &lt;&#x2F;h3&gt;
                        &lt;p className&#x3D;&quot;!mb-0 text-[0.8rem] font-medium&quot;&gt;
                          Satisfied Customers
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
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
              Let’s Talk
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium&quot;&gt;
              Let&#39;s make something great together. We are
              &lt;span className&#x3D;&quot;relative z-[2] whitespace-nowrap after:content-[&#39;&#39;] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]&quot;&gt;
                trusted by
              &lt;&#x2F;span&gt;
              over 5000+ clients. Join them by using our services and grow your
              business.
            &lt;&#x2F;p&gt;
            &lt;p&gt;
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            &lt;&#x2F;p&gt;
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
            &gt;
              Join Us
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
      <Contact />
      <CodeSnippet
        code={`
import React from &quot;react&quot;;

export default function Contact() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div className&#x3D;&quot;container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;w-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i5@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i5.png&quot;
                width&#x3D;{800}
                height&#x3D;{590}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase text-line relative align-top !pl-[1.4rem] inline-flex !tracking-[0.02rem] !leading-[1.35] before:content-[&#39;&#39;] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2&#x2F;4 before:bg-[#3f78e0] !text-[#3f78e0] !mb-3&quot;&gt;
              Get In Touch
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-7&quot;&gt;
              Got any questions? Don&#39;t hesitate to get in touch.
            &lt;&#x2F;h3&gt;
            &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;div className&#x3D;&quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]&quot;&gt;
                  &lt;i className&#x3D;&quot;uil uil-location-pin-alt before:content-[&#39;\ebd8&#39;]&quot; &#x2F;&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h5 className&#x3D;&quot;!mb-1&quot;&gt;Address&lt;&#x2F;h5&gt;
                &lt;address className&#x3D;&quot;not-italic !leading-[inherit] !mb-4&quot;&gt;
                  Moonshine St. 14&#x2F;05 Light City, London
                &lt;&#x2F;address&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;div className&#x3D;&quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]&quot;&gt;
                  &lt;i className&#x3D;&quot;uil uil-phone-volume before:content-[&#39;\ec50&#39;]&quot; &#x2F;&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h5 className&#x3D;&quot;!mb-1&quot;&gt;Phone&lt;&#x2F;h5&gt;
                &lt;p&gt;00 (123) 456 78 90&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;div className&#x3D;&quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]&quot;&gt;
                  &lt;i className&#x3D;&quot;uil uil-envelope before:content-[&#39;\eac8&#39;]&quot; &#x2F;&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h5 className&#x3D;&quot;!mb-1&quot;&gt;E-mail&lt;&#x2F;h5&gt;
                &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                  &lt;a
                    href&#x3D;&quot;mailto:sandbox@email.com&quot;
                    className&#x3D;&quot;!text-[#60697b]&quot;
                  &gt;
                    sandbox@email.com
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
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
      <Contact4 />
      <CodeSnippet
        code={`import Image from &amp;quot;next&amp;#x2F;image&amp;quot;;
import React from &amp;quot;react&amp;quot;;

export default function Contact() {
  return (
    &amp;lt;section className&amp;#x3D;&amp;quot;wrapper !bg-[#ffffff]&amp;quot;&amp;gt;
      &amp;lt;div className&amp;#x3D;&amp;quot;container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24&amp;quot;&amp;gt;
        &amp;lt;div className&amp;#x3D;&amp;quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&amp;quot;&amp;gt;
          &amp;lt;div className&amp;#x3D;&amp;quot;xl:w-7&amp;#x2F;12 lg:w-7&amp;#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&amp;quot;&amp;gt;
            &amp;lt;figure className&amp;#x3D;&amp;quot;m-0 p-0&amp;quot;&amp;gt;
              &amp;lt;Image
                className&amp;#x3D;&amp;quot;w-auto&amp;quot;
                srcSet&amp;#x3D;&amp;quot;&amp;#x2F;assets&amp;#x2F;img&amp;#x2F;illustrations&amp;#x2F;i5@2x.png 2x&amp;quot;
                alt&amp;#x3D;&amp;quot;image&amp;quot;
                src&amp;#x3D;&amp;quot;&amp;#x2F;assets&amp;#x2F;img&amp;#x2F;illustrations&amp;#x2F;i5.png&amp;quot;
                width&amp;#x3D;{800}
                height&amp;#x3D;{590}
              &amp;#x2F;&amp;gt;
            &amp;lt;&amp;#x2F;figure&amp;gt;
          &amp;lt;&amp;#x2F;div&amp;gt;
          {&amp;#x2F;*&amp;#x2F;column *&amp;#x2F;}
          &amp;lt;div className&amp;#x3D;&amp;quot;xl:w-5&amp;#x2F;12 lg:w-5&amp;#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&amp;quot;&amp;gt;
            &amp;lt;h2 className&amp;#x3D;&amp;quot;!text-[.75rem] uppercase text-line relative align-top !pl-[1.4rem] inline-flex !tracking-[0.02rem] !leading-[1.35] before:content-[&amp;#39;&amp;#39;] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2&amp;#x2F;4 before:bg-[#3f78e0] !text-[#3f78e0] !mb-3&amp;quot;&amp;gt;
              Get In Touch
            &amp;lt;&amp;#x2F;h2&amp;gt;
            &amp;lt;h3 className&amp;#x3D;&amp;quot;!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-7&amp;quot;&amp;gt;
              Got any questions? Don&amp;#39;t hesitate to get in touch.
            &amp;lt;&amp;#x2F;h3&amp;gt;
            &amp;lt;div className&amp;#x3D;&amp;quot;flex flex-row&amp;quot;&amp;gt;
              &amp;lt;div&amp;gt;
                &amp;lt;div className&amp;#x3D;&amp;quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]&amp;quot;&amp;gt;
                  &amp;lt;i className&amp;#x3D;&amp;quot;uil uil-location-pin-alt before:content-[&amp;#39;\ebd8&amp;#39;]&amp;quot; &amp;#x2F;&amp;gt;
                &amp;lt;&amp;#x2F;div&amp;gt;
              &amp;lt;&amp;#x2F;div&amp;gt;
              &amp;lt;div&amp;gt;
                &amp;lt;h5 className&amp;#x3D;&amp;quot;!mb-1&amp;quot;&amp;gt;Address&amp;lt;&amp;#x2F;h5&amp;gt;
                &amp;lt;address className&amp;#x3D;&amp;quot;not-italic !leading-[inherit] !mb-4&amp;quot;&amp;gt;
                  Moonshine St. 14&amp;#x2F;05 Light City, London
                &amp;lt;&amp;#x2F;address&amp;gt;
              &amp;lt;&amp;#x2F;div&amp;gt;
            &amp;lt;&amp;#x2F;div&amp;gt;
            &amp;lt;div className&amp;#x3D;&amp;quot;flex flex-row&amp;quot;&amp;gt;
              &amp;lt;div&amp;gt;
                &amp;lt;div className&amp;#x3D;&amp;quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]&amp;quot;&amp;gt;
                  &amp;lt;i className&amp;#x3D;&amp;quot;uil uil-phone-volume before:content-[&amp;#39;\ec50&amp;#39;]&amp;quot; &amp;#x2F;&amp;gt;
                &amp;lt;&amp;#x2F;div&amp;gt;
              &amp;lt;&amp;#x2F;div&amp;gt;
              &amp;lt;div&amp;gt;
                &amp;lt;h5 className&amp;#x3D;&amp;quot;!mb-1&amp;quot;&amp;gt;Phone&amp;lt;&amp;#x2F;h5&amp;gt;
                &amp;lt;p&amp;gt;00 (123) 456 78 90&amp;lt;&amp;#x2F;p&amp;gt;
              &amp;lt;&amp;#x2F;div&amp;gt;
            &amp;lt;&amp;#x2F;div&amp;gt;
            &amp;lt;div className&amp;#x3D;&amp;quot;flex flex-row&amp;quot;&amp;gt;
              &amp;lt;div&amp;gt;
                &amp;lt;div className&amp;#x3D;&amp;quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]&amp;quot;&amp;gt;
                  &amp;lt;i className&amp;#x3D;&amp;quot;uil uil-envelope before:content-[&amp;#39;\eac8&amp;#39;]&amp;quot; &amp;#x2F;&amp;gt;
                &amp;lt;&amp;#x2F;div&amp;gt;
              &amp;lt;&amp;#x2F;div&amp;gt;
              &amp;lt;div&amp;gt;
                &amp;lt;h5 className&amp;#x3D;&amp;quot;!mb-1&amp;quot;&amp;gt;E-mail&amp;lt;&amp;#x2F;h5&amp;gt;
                &amp;lt;p className&amp;#x3D;&amp;quot;!mb-0&amp;quot;&amp;gt;
                  &amp;lt;a
                    href&amp;#x3D;&amp;quot;mailto:sandbox@email.com&amp;quot;
                    className&amp;#x3D;&amp;quot;!text-[#60697b]&amp;quot;
                  &amp;gt;
                    sandbox@email.com
                  &amp;lt;&amp;#x2F;a&amp;gt;
                &amp;lt;&amp;#x2F;p&amp;gt;
              &amp;lt;&amp;#x2F;div&amp;gt;
            &amp;lt;&amp;#x2F;div&amp;gt;
          &amp;lt;&amp;#x2F;div&amp;gt;
          {&amp;#x2F;*&amp;#x2F;column *&amp;#x2F;}
        &amp;lt;&amp;#x2F;div&amp;gt;
        {&amp;#x2F;*&amp;#x2F;.row *&amp;#x2F;}
      &amp;lt;&amp;#x2F;div&amp;gt;
      {&amp;#x2F;* &amp;#x2F;.container *&amp;#x2F;}
    &amp;lt;&amp;#x2F;section&amp;gt;
  );
}`}
      />
      <Contact6 />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function Contact6() {
  return (
    &lt;section id&#x3D;&quot;snippet-6&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;div className&#x3D;&quot;card&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-0&quot;&gt;
                &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] max-w-full !self-stretch&quot;&gt;
                  &lt;div className&#x3D;&quot;map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]&quot;&gt;
                    &lt;iframe
                      src&#x3D;&quot;https:&#x2F;&#x2F;www.google.com&#x2F;maps&#x2F;embed?pb&#x3D;!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str&quot;
                      style&#x3D;{{ width: &quot;100%&quot;, height: &quot;100%&quot;, border: 0 }}
                      allowFullScreen&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.map *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] max-w-full&quot;&gt;
                  &lt;div className&#x3D;&quot;p-10 xl:!p-[4.5rem] lg:!p-[4.5rem] md:!p-12&quot;&gt;
                    &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                      &lt;div&gt;
                        &lt;div className&#x3D;&quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]&quot;&gt;
                          &lt;i className&#x3D;&quot;uil uil-location-pin-alt before:content-[&#39;\ebd8&#39;]&quot; &#x2F;&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      &lt;div className&#x3D;&quot;!self-start !justify-start&quot;&gt;
                        &lt;h5 className&#x3D;&quot;!mb-1&quot;&gt;Address&lt;&#x2F;h5&gt;
                        &lt;address className&#x3D;&quot;not-italic !leading-[inherit] !mb-4&quot;&gt;
                          Moonshine St. 14&#x2F;05 Light City,
                          &lt;br className&#x3D;&quot;hidden xl:block lg:block md:block&quot; &#x2F;&gt;
                          London, United Kingdom
                        &lt;&#x2F;address&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;div *&#x2F;}
                    &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                      &lt;div&gt;
                        &lt;div className&#x3D;&quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]&quot;&gt;
                          &lt;i className&#x3D;&quot;uil uil-phone-volume before:content-[&#39;\ec50&#39;]&quot; &#x2F;&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      &lt;div&gt;
                        &lt;h5 className&#x3D;&quot;!mb-1&quot;&gt;Phone&lt;&#x2F;h5&gt;
                        &lt;p&gt;
                          00 (123) 456 78 90 &lt;br &#x2F;&gt;
                          00 (987) 654 32 10
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;div *&#x2F;}
                    &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                      &lt;div&gt;
                        &lt;div className&#x3D;&quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]&quot;&gt;
                          &lt;i className&#x3D;&quot;uil uil-envelope before:content-[&#39;\eac8&#39;]&quot; &#x2F;&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      &lt;div&gt;
                        &lt;h5 className&#x3D;&quot;!mb-1&quot;&gt;E-mail&lt;&#x2F;h5&gt;
                        &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                          &lt;a
                            href&#x3D;&quot;mailto:sandbox@email.com&quot;
                            className&#x3D;&quot;!text-[#60697b]&quot;
                          &gt;
                            sandbox@email.com
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;p&gt;
                        &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                          &lt;a
                            href&#x3D;&quot;mailto:help@sandbox.com&quot;
                            className&#x3D;&quot;!text-[#60697b]&quot;
                          &gt;
                            help@sandbox.com
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;div *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;div *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.row *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.card *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Contact7 />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function Contact7() {
  return (
    &lt;section id&#x3D;&quot;snippet-7&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 !text-center&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;md:w-9&#x2F;12 lg:w-7&#x2F;12 xl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
            &lt;svg
              xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
              viewBox&#x3D;&quot;0 0 507.4 512&quot;
              data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;puzzle-2.svg&quot;
              className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4 m-[0_auto]&quot;
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
            &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
              Join Our Community
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead text-[1rem] !mb-6 xl:!px-10 xxl:!px-20&quot;&gt;
              We are trusted by over 5000+ clients. Join them by using our
              services and grow your business.
            &lt;&#x2F;p&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-5&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;div className&#x3D;&quot;newsletter-wrapper&quot;&gt;
              {&#x2F;* Begin Mailchimp Signup Form *&#x2F;}
              &lt;div id&#x3D;&quot;mc_embed_signup2&quot;&gt;
                &lt;form
                  action&#x3D;&quot;https:&#x2F;&#x2F;elemisfreebies.us20.list-manage.com&#x2F;subscribe&#x2F;post?u&#x3D;aa4947f70a475ce162057838d&amp;id&#x3D;b49ef47a9a&quot;
                  method&#x3D;&quot;post&quot;
                  id&#x3D;&quot;mc-embedded-subscribe-form2&quot;
                  name&#x3D;&quot;mc-embedded-subscribe-form&quot;
                  className&#x3D;&quot;validate&quot;
                  target&#x3D;&quot;_blank&quot;
                  noValidate&#x3D;&quot;&quot;
                &gt;
                  &lt;div id&#x3D;&quot;mc_embed_signup_scroll2&quot;&gt;
                    &lt;div className&#x3D;&quot;!text-left input-group !relative form-floating&quot;&gt;
                      &lt;input
                        type&#x3D;&quot;email&quot;
                        defaultValue&#x3D;&quot;&quot;
                        name&#x3D;&quot;EMAIL&quot;
                        className&#x3D;&quot;required email form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]&quot;
                        placeholder&#x3D;&quot;&quot;
                        id&#x3D;&quot;mce-EMAIL2&quot;
                      &#x2F;&gt;
                      &lt;label
                        htmlFor&#x3D;&quot;mce-EMAIL2&quot;
                        className&#x3D;&quot;inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope&quot;
                      &gt;
                        Email Address
                      &lt;&#x2F;label&gt;
                      &lt;input
                        type&#x3D;&quot;submit&quot;
                        defaultValue&#x3D;&quot;Join&quot;
                        name&#x3D;&quot;subscribe&quot;
                        id&#x3D;&quot;mc-embedded-subscribe2&quot;
                        className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0]&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div id&#x3D;&quot;mce-responses2&quot; className&#x3D;&quot;clear&quot;&gt;
                      &lt;div
                        className&#x3D;&quot;response&quot;
                        id&#x3D;&quot;mce-error-response2&quot;
                        style&#x3D;{{ display: &quot;none&quot; }}
                      &#x2F;&gt;
                      &lt;div
                        className&#x3D;&quot;response&quot;
                        id&#x3D;&quot;mce-success-response2&quot;
                        style&#x3D;{{ display: &quot;none&quot; }}
                      &#x2F;&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* real people should not fill this in and expect good things - do not remove this or risk form bot signups*&#x2F;}
                    &lt;div
                      style&#x3D;{{ position: &quot;absolute&quot;, left: &quot;-5000px&quot; }}
                      aria-hidden&#x3D;&quot;true&quot;
                    &gt;
                      &lt;input
                        type&#x3D;&quot;text&quot;
                        name&#x3D;&quot;b_ddc180777a163e0f9f66ee014_4b1bcfa0bc&quot;
                        tabIndex&#x3D;{-1}
                        defaultValue&#x3D;&quot;&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div className&#x3D;&quot;clear&quot; &#x2F;&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;form&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*End mc_embed_signup*&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.newsletter-wrapper *&#x2F;}
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
      <Contact8 />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function Contact8() {
  return (
    &lt;section id&#x3D;&quot;snippet-8&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-0&quot;&gt;
            &lt;div
              className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] max-w-full image-wrapper bg-image rounded-t-[0.4rem] rounded-lg-start hidden xl:block lg:block md:block bg-cover bg-[center_center] bg-no-repeat !bg-scroll md:min-h-[25rem]&quot;
              style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;tm1.jpg)&quot; }}
            &#x2F;&gt;
            {&#x2F;*&#x2F;column *&#x2F;}
            &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] max-w-full&quot;&gt;
              &lt;div className&#x3D;&quot;p-10 md:!p-12 xl:!p-[4rem] lg:!p-[4rem]&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
                  Let’s Talk
                &lt;&#x2F;h2&gt;
                &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium&quot;&gt;
                  Let&#39;s make something great together. We are trusted by over
                  5000+ clients. Join them by using our services and grow your
                  business.
                &lt;&#x2F;p&gt;
                &lt;p&gt;
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus.
                &lt;&#x2F;p&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                &gt;
                  Join Us
                &lt;&#x2F;a&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;div *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.card *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Contact9 />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function Contact9() {
  return (
    &lt;section id&#x3D;&quot;snippet-9&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;card !bg-[#edf2fc]&quot;&gt;
          &lt;div className&#x3D;&quot;card-body p-14&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 512 395.7&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;email.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] !mb-4&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M483.6 395.7H53.3C23.9 395.7 0 371.9 0 342.4V53.3C0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3v222.8c0 7.9-6.4 14.2-14.2 14.2s-14.2-6.4-14.2-14.2V53.3c0-13.7-11.1-24.8-24.8-24.8H53.3c-13.7 0-24.8 11.1-24.8 24.8v289.2c0 13.7 11.1 24.8 24.8 24.8h430.3c7.9.2 14.1 6.7 13.8 14.6-.2 7.5-6.3 13.6-13.8 13.8z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-fill&quot;
                    d&#x3D;&quot;M497.8 53.3L256 236.4 14.2 53.3c0-21.6 17.5-39.1 39.1-39.1h405.4c21.6 0 39.1 17.5 39.1 39.1z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M256 250.6c-3.1 0-6.1-1-8.6-2.9L5.6 64.6C2.1 61.9 0 57.7 0 53.3 0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3c0 4.4-2.1 8.6-5.6 11.3L264.6 247.7c-2.5 1.9-5.5 2.9-8.6 2.9zM29.3 46.8L256 218.6 482.7 46.8c-2.9-10.9-12.8-18.4-24-18.4H53.3c-11.3.1-21.1 7.6-24 18.4zm454.2 348.7c-3.1 0-6.1-1-8.6-2.9l-99.6-75.4c-6.3-4.7-7.5-13.7-2.7-19.9 4.7-6.3 13.7-7.5 19.9-2.7l99.6 75.4c6.3 4.7 7.5 13.7 2.8 19.9-2.7 3.6-6.9 5.7-11.4 5.6zm-449-4.6c-7.9 0-14.2-6.4-14.2-14.2 0-4.5 2.1-8.7 5.6-11.4l93.5-70.8c6.3-4.7 15.2-3.5 19.9 2.7 4.7 6.3 3.5 15.2-2.7 19.9L43.1 388c-2.5 1.9-5.5 2.9-8.6 2.9z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
                &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 xl:!pr-10 lg:!pr-10&quot;&gt;
                  If you like what you see, let&#39;s work together.
                &lt;&#x2F;h2&gt;
                &lt;p className&#x3D;&quot;lead text-[0.9rem] font-medium !leading-[1.65] xl:!pr-14 lg:!pr-14 !mb-0&quot;&gt;
                  I bring rapid solutions to make the life of my clients easier.
                  Have any questions? Reach out to me from this contact form and
                  I will get back to you shortly.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                &lt;form
                  className&#x3D;&quot;contact-form needs-validation&quot;
                  method&#x3D;&quot;post&quot;
                  action&#x3D;&quot;&#x2F;assets&#x2F;php&#x2F;contact.php&quot;
                  noValidate&#x3D;&quot;&quot;
                &gt;
                  &lt;div className&#x3D;&quot;messages&quot; &#x2F;&gt;
                  &lt;div className&#x3D;&quot;flex flex-wrap mx-[-10px]&quot;&gt;
                    &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] px-[10px] max-w-full&quot;&gt;
                      &lt;div className&#x3D;&quot;form-floating relative !mb-4&quot;&gt;
                        &lt;input
                          id&#x3D;&quot;frm_name&quot;
                          type&#x3D;&quot;text&quot;
                          name&#x3D;&quot;name&quot;
                          className&#x3D;&quot;form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]&quot;
                          placeholder&#x3D;&quot;&quot;
                          required&#x3D;&quot;required&quot;
                          data-error&#x3D;&quot;First Name is required.&quot;
                        &#x2F;&gt;
                        &lt;label
                          htmlFor&#x3D;&quot;frm_name&quot;
                          className&#x3D;&quot;inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope&quot;
                        &gt;
                          Name *
                        &lt;&#x2F;label&gt;
                        &lt;div className&#x3D;&quot;invalid-feedback&quot;&gt;
                          Please enter your name.
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;column *&#x2F;}
                    &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] px-[10px] max-w-full&quot;&gt;
                      &lt;div className&#x3D;&quot;form-floating relative !mb-4&quot;&gt;
                        &lt;input
                          id&#x3D;&quot;frm_email&quot;
                          type&#x3D;&quot;email&quot;
                          name&#x3D;&quot;email&quot;
                          className&#x3D;&quot;form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]&quot;
                          placeholder&#x3D;&quot;&quot;
                          required&#x3D;&quot;required&quot;
                          data-error&#x3D;&quot;Valid email is required.&quot;
                        &#x2F;&gt;
                        &lt;label
                          htmlFor&#x3D;&quot;frm_email&quot;
                          className&#x3D;&quot;inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope&quot;
                        &gt;
                          Email *
                        &lt;&#x2F;label&gt;
                        &lt;div className&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                        &lt;div className&#x3D;&quot;invalid-feedback&quot;&gt;
                          Please provide a valid email address.
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;column *&#x2F;}
                    &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] px-[10px] max-w-full&quot;&gt;
                      &lt;div className&#x3D;&quot;form-floating relative !mb-4&quot;&gt;
                        &lt;textarea
                          id&#x3D;&quot;frm_message&quot;
                          name&#x3D;&quot;message&quot;
                          className&#x3D;&quot;form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]&quot;
                          placeholder&#x3D;&quot;&quot;
                          style&#x3D;{{ height: 150 }}
                          required&#x3D;&quot;&quot;
                          defaultValue&#x3D;{&quot;&quot;}
                        &#x2F;&gt;
                        &lt;label
                          htmlFor&#x3D;&quot;frm_message&quot;
                          className&#x3D;&quot;inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope&quot;
                        &gt;
                          Message *
                        &lt;&#x2F;label&gt;
                        &lt;div className&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                        &lt;div className&#x3D;&quot;invalid-feedback&quot;&gt;
                          Please enter your messsage.
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;column *&#x2F;}
                    &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] px-[10px] max-w-full&quot;&gt;
                      &lt;input
                        type&#x3D;&quot;submit&quot;
                        className&#x3D;&quot;btn btn-outline-primary !rounded-[50rem] btn-send !mb-3&quot;
                        defaultValue&#x3D;&quot;Send message&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.row *&#x2F;}
                &lt;&#x2F;form&gt;
                {&#x2F;* &#x2F;form *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.card-body *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.card *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Contact10 />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function Contact9() {
  return (
    &lt;section id&#x3D;&quot;snippet-9&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;card !bg-[#edf2fc]&quot;&gt;
          &lt;div className&#x3D;&quot;card-body p-14&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 512 395.7&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;email.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] !mb-4&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M483.6 395.7H53.3C23.9 395.7 0 371.9 0 342.4V53.3C0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3v222.8c0 7.9-6.4 14.2-14.2 14.2s-14.2-6.4-14.2-14.2V53.3c0-13.7-11.1-24.8-24.8-24.8H53.3c-13.7 0-24.8 11.1-24.8 24.8v289.2c0 13.7 11.1 24.8 24.8 24.8h430.3c7.9.2 14.1 6.7 13.8 14.6-.2 7.5-6.3 13.6-13.8 13.8z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-fill&quot;
                    d&#x3D;&quot;M497.8 53.3L256 236.4 14.2 53.3c0-21.6 17.5-39.1 39.1-39.1h405.4c21.6 0 39.1 17.5 39.1 39.1z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M256 250.6c-3.1 0-6.1-1-8.6-2.9L5.6 64.6C2.1 61.9 0 57.7 0 53.3 0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3c0 4.4-2.1 8.6-5.6 11.3L264.6 247.7c-2.5 1.9-5.5 2.9-8.6 2.9zM29.3 46.8L256 218.6 482.7 46.8c-2.9-10.9-12.8-18.4-24-18.4H53.3c-11.3.1-21.1 7.6-24 18.4zm454.2 348.7c-3.1 0-6.1-1-8.6-2.9l-99.6-75.4c-6.3-4.7-7.5-13.7-2.7-19.9 4.7-6.3 13.7-7.5 19.9-2.7l99.6 75.4c6.3 4.7 7.5 13.7 2.8 19.9-2.7 3.6-6.9 5.7-11.4 5.6zm-449-4.6c-7.9 0-14.2-6.4-14.2-14.2 0-4.5 2.1-8.7 5.6-11.4l93.5-70.8c6.3-4.7 15.2-3.5 19.9 2.7 4.7 6.3 3.5 15.2-2.7 19.9L43.1 388c-2.5 1.9-5.5 2.9-8.6 2.9z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
                &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 xl:!pr-10 lg:!pr-10&quot;&gt;
                  If you like what you see, let&#39;s work together.
                &lt;&#x2F;h2&gt;
                &lt;p className&#x3D;&quot;lead text-[0.9rem] font-medium !leading-[1.65] xl:!pr-14 lg:!pr-14 !mb-0&quot;&gt;
                  I bring rapid solutions to make the life of my clients easier.
                  Have any questions? Reach out to me from this contact form and
                  I will get back to you shortly.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                &lt;form
                  className&#x3D;&quot;contact-form needs-validation&quot;
                  method&#x3D;&quot;post&quot;
                  action&#x3D;&quot;&#x2F;assets&#x2F;php&#x2F;contact.php&quot;
                  noValidate&#x3D;&quot;&quot;
                &gt;
                  &lt;div className&#x3D;&quot;messages&quot; &#x2F;&gt;
                  &lt;div className&#x3D;&quot;flex flex-wrap mx-[-10px]&quot;&gt;
                    &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] px-[10px] max-w-full&quot;&gt;
                      &lt;div className&#x3D;&quot;form-floating relative !mb-4&quot;&gt;
                        &lt;input
                          id&#x3D;&quot;frm_name&quot;
                          type&#x3D;&quot;text&quot;
                          name&#x3D;&quot;name&quot;
                          className&#x3D;&quot;form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]&quot;
                          placeholder&#x3D;&quot;&quot;
                          required&#x3D;&quot;required&quot;
                          data-error&#x3D;&quot;First Name is required.&quot;
                        &#x2F;&gt;
                        &lt;label
                          htmlFor&#x3D;&quot;frm_name&quot;
                          className&#x3D;&quot;inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope&quot;
                        &gt;
                          Name *
                        &lt;&#x2F;label&gt;
                        &lt;div className&#x3D;&quot;invalid-feedback&quot;&gt;
                          Please enter your name.
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;column *&#x2F;}
                    &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] px-[10px] max-w-full&quot;&gt;
                      &lt;div className&#x3D;&quot;form-floating relative !mb-4&quot;&gt;
                        &lt;input
                          id&#x3D;&quot;frm_email&quot;
                          type&#x3D;&quot;email&quot;
                          name&#x3D;&quot;email&quot;
                          className&#x3D;&quot;form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]&quot;
                          placeholder&#x3D;&quot;&quot;
                          required&#x3D;&quot;required&quot;
                          data-error&#x3D;&quot;Valid email is required.&quot;
                        &#x2F;&gt;
                        &lt;label
                          htmlFor&#x3D;&quot;frm_email&quot;
                          className&#x3D;&quot;inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope&quot;
                        &gt;
                          Email *
                        &lt;&#x2F;label&gt;
                        &lt;div className&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                        &lt;div className&#x3D;&quot;invalid-feedback&quot;&gt;
                          Please provide a valid email address.
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;column *&#x2F;}
                    &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] px-[10px] max-w-full&quot;&gt;
                      &lt;div className&#x3D;&quot;form-floating relative !mb-4&quot;&gt;
                        &lt;textarea
                          id&#x3D;&quot;frm_message&quot;
                          name&#x3D;&quot;message&quot;
                          className&#x3D;&quot;form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]&quot;
                          placeholder&#x3D;&quot;&quot;
                          style&#x3D;{{ height: 150 }}
                          required&#x3D;&quot;&quot;
                          defaultValue&#x3D;{&quot;&quot;}
                        &#x2F;&gt;
                        &lt;label
                          htmlFor&#x3D;&quot;frm_message&quot;
                          className&#x3D;&quot;inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope&quot;
                        &gt;
                          Message *
                        &lt;&#x2F;label&gt;
                        &lt;div className&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                        &lt;div className&#x3D;&quot;invalid-feedback&quot;&gt;
                          Please enter your messsage.
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;column *&#x2F;}
                    &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] px-[10px] max-w-full&quot;&gt;
                      &lt;input
                        type&#x3D;&quot;submit&quot;
                        className&#x3D;&quot;btn btn-outline-primary !rounded-[50rem] btn-send !mb-3&quot;
                        defaultValue&#x3D;&quot;Send message&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.row *&#x2F;}
                &lt;&#x2F;form&gt;
                {&#x2F;* &#x2F;form *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.card-body *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.card *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <COntact11 />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function COntact11() {
  return (
    &lt;section id&#x3D;&quot;snippet-11&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div
        className&#x3D;&quot;wrapper image-wrapper bg-image bg-overlay !mb-14 xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem] bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]&quot;
        style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg36.jpg)&quot; }}
      &gt;
        &lt;div className&#x3D;&quot;container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-9&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
              &lt;div className&#x3D;&quot;card border-0 !bg-[rgba(255,255,255,.9)] opacity-900&quot;&gt;
                &lt;div className&#x3D;&quot;card-body xl:!py-16 xl:!px-24 lg:!py-16 lg:!px-24 p-[40px]&quot;&gt;
                  &lt;h2 className&#x3D;&quot;!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-3 !text-center&quot;&gt;
                    Request Photography Pricing
                  &lt;&#x2F;h2&gt;
                  &lt;p className&#x3D;&quot;lead text-[1rem] !text-center !mb-10&quot;&gt;
                    For more information please get in touch using the form
                    below:
                  &lt;&#x2F;p&gt;
                  &lt;form
                    className&#x3D;&quot;contact-form needs-validation&quot;
                    method&#x3D;&quot;post&quot;
                    action&#x3D;&quot;&#x2F;assets&#x2F;php&#x2F;contact.php&quot;
                    noValidate&#x3D;&quot;&quot;
                  &gt;
                    &lt;div className&#x3D;&quot;messages&quot; &#x2F;&gt;
                    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-10px]&quot;&gt;
                      &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                        &lt;div className&#x3D;&quot;form-floating relative !mb-4&quot;&gt;
                          &lt;input
                            id&#x3D;&quot;form_name&quot;
                            type&#x3D;&quot;text&quot;
                            name&#x3D;&quot;name&quot;
                            className&#x3D;&quot;form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]&quot;
                            placeholder&#x3D;&quot;&quot;
                            required&#x3D;&quot;&quot;
                          &#x2F;&gt;
                          &lt;label
                            htmlFor&#x3D;&quot;form_name&quot;
                            className&#x3D;&quot;inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope&quot;
                          &gt;
                            Name *
                          &lt;&#x2F;label&gt;
                          &lt;div className&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                          &lt;div className&#x3D;&quot;invalid-feedback&quot;&gt;
                            Please enter your name.
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                      &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                        &lt;div className&#x3D;&quot;form-floating relative !mb-4&quot;&gt;
                          &lt;input
                            id&#x3D;&quot;form_email&quot;
                            type&#x3D;&quot;email&quot;
                            name&#x3D;&quot;email&quot;
                            className&#x3D;&quot;form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]&quot;
                            placeholder&#x3D;&quot;&quot;
                            required&#x3D;&quot;&quot;
                          &#x2F;&gt;
                          &lt;label
                            htmlFor&#x3D;&quot;form_email&quot;
                            className&#x3D;&quot;inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope&quot;
                          &gt;
                            Email *
                          &lt;&#x2F;label&gt;
                          &lt;div className&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                          &lt;div className&#x3D;&quot;invalid-feedback&quot;&gt;
                            Please provide a valid email address.
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                      &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                        &lt;div className&#x3D;&quot;form-floating relative !mb-4&quot;&gt;
                          &lt;textarea
                            id&#x3D;&quot;form_message&quot;
                            name&#x3D;&quot;message&quot;
                            className&#x3D;&quot;form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]&quot;
                            placeholder&#x3D;&quot;&quot;
                            style&#x3D;{{ height: 150 }}
                            required&#x3D;&quot;&quot;
                            defaultValue&#x3D;{&quot;&quot;}
                          &#x2F;&gt;
                          &lt;label
                            htmlFor&#x3D;&quot;form_message&quot;
                            className&#x3D;&quot;inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope&quot;
                          &gt;
                            Message *
                          &lt;&#x2F;label&gt;
                          &lt;div className&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                          &lt;div className&#x3D;&quot;invalid-feedback&quot;&gt;
                            Please enter your messsage.
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                      &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center&quot;&gt;
                        &lt;input
                          type&#x3D;&quot;submit&quot;
                          className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-send&quot;
                          defaultValue&#x3D;&quot;Send message&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;column *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.row *&#x2F;}
                  &lt;&#x2F;form&gt;
                  {&#x2F;* &#x2F;form *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card-body *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.card *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.wrapper *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
    </>
  );
}
