import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import PageTitle from "@/components/blocks/PageTitle";
import CodeSnippet from "@/components/common/CodeSnippet";
import Cta2 from "@/components/common/Cta2";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Call To Action || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageCallToAction() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Call To Action" />
      <BlockPageLinks />
      <Cta2 />
      <CodeSnippet
        code={`
        import React from &quot;react&quot;;

export default function Cta2() {
  return (
    &lt;section
      className&#x3D;&quot;wrapper image-wrapper no-overlay bg-image !text-center py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24 bg-map bg-auto bg-[center_center] bg-no-repeat !bg-scroll relative z-0&quot;
      style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;map.png)&quot; }}
    &gt;
      &lt;div className&#x3D;&quot;container py-0 xl:!py-28 lg:!py-28 md:!py-28&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;lg:w-6&#x2F;12 xl:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center&quot;&gt;
              Join Our Community
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead text-[0.9rem] font-medium !leading-[1.65] !mb-5 xl:!px-3 lg:!px-3 md:!px-24&quot;&gt;
              We are trusted by over 5000+ clients. Join them by using our
              services and grow your business.
            &lt;&#x2F;p&gt;
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
            &gt;
              Join Us
            &lt;&#x2F;a&gt;
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
      <section id="snippet-2" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <div
                className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 !text-white !mt-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2/4 lg:-translate-y-2/4 bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
                style={{ backgroundImage: "url(/assets/img/photos/bg3.jpg)" }}
              >
                <div className="card-body p-6 flex-row text-center xl:!justify-between lg:!justify-between md:!justify-between xl:!flex xl:!items-center lg:!flex lg:!items-center xl:!p-12 lg:!p-12 md:!p-12 xl:!text-left lg:!text-left">
                  <h3 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-6 xl:!mb-0 lg:!mb-0 lg:!pr-10 xl:!pr-5 xxl:!pr-32 !text-white">
                    We are trusted by over 5000+ clients. Join them by using our
                    services and grow your business.
                  </h3>
                  <a
                    href="#"
                    className="btn btn-white !rounded-[50rem] !mb-0 whitespace-nowrap"
                  >
                    Join Us
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>{" "}
      </section>

      <CodeSnippet
        code={`&lt;section id&#x3D;&quot;snippet-2&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
              &lt;div
                className&#x3D;&quot;card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 !text-white !mt-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2&#x2F;4 lg:-translate-y-2&#x2F;4 bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0&quot;
                style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg3.jpg)&quot; }}
              &gt;
                &lt;div className&#x3D;&quot;card-body p-6 flex-row text-center xl:!justify-between lg:!justify-between md:!justify-between xl:!flex xl:!items-center lg:!flex lg:!items-center xl:!p-12 lg:!p-12 md:!p-12 xl:!text-left lg:!text-left&quot;&gt;
                  &lt;h3 className&#x3D;&quot;!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-6 xl:!mb-0 lg:!mb-0 lg:!pr-10 xl:!pr-5 xxl:!pr-32 !text-white&quot;&gt;
                    We are trusted by over 5000+ clients. Join them by using our
                    services and grow your business.
                  &lt;&#x2F;h3&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-white !rounded-[50rem] !mb-0 whitespace-nowrap&quot;
                  &gt;
                    Join Us
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card-body *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.card *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;{&quot; &quot;}
      &lt;&#x2F;section&gt;`}
      />
      <section id="snippet-3" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-9/12 lg:w-7/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 507.4 512"
                data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/puzzle-2.svg"
                className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4 m-[0_auto]"
              >
                <path
                  className="lineal-fill"
                  d="M257.9 15.2v65.1c-28.7-15.6-64.7-5-80.3 23.8s-5 64.7 23.8 80.3c17.6 9.6 38.9 9.6 56.6 0v65.1h59.9c-8.4-31.6 10.5-64 42.1-72.4 31.6-8.4 64 10.5 72.4 42.1 2.6 9.9 2.6 20.4 0 30.3h59.9V70.7c0-30.7-24.9-55.5-55.5-55.5H257.9z"
                />
                <path
                  className="lineal-stroke"
                  d="M436.7 0h-366C31.7 0 0 31.7 0 70.7v370.6c0 39 31.7 70.7 70.7 70.7h188.1c8.4 0 15.2-6.8 15.2-15.1V453c5.5 1 11.2 1.3 16.8 1 17.5-.9 34.2-7.9 47.1-19.9 30.1-28 31.7-75.1 3.7-105.2-23.2-24.8-60.2-30.8-90-14.6-7.3 4-10.1 13.2-6.1 20.6 4 7.4 13.2 10.1 20.6 6.1 7.4-4 15.7-5.8 24.1-5.2 24.3 1.7 42.6 22.8 40.9 47-1.5 21.8-19.8 39.8-41.7 40.8-8.1.4-16.1-1.4-23.2-5.3-2.2-1.2-4.7-1.8-7.3-1.8-8.4 0-15.2 6.8-15.2 15.2v49.9h-173c-22.3 0-40.3-18.1-40.3-40.3V264.6h28.7c-.5 2.6-.8 5.2-1 7.8-2.9 41 28 76.6 69 79.5 1.8.1 3.6.2 5.3.2 18.8.1 37-7.1 50.7-20 24.8-23.2 30.8-60.1 14.6-89.9-.1-.2-.2-.3-.3-.5-4.1-7.3-13.4-9.9-20.7-5.7-7.3 4.1-9.9 13.4-5.7 20.7 4 7.4 5.8 15.8 5.2 24.2-1.7 24.3-22.8 42.5-47.1 40.8-21.8-1.5-39.8-19.8-40.8-41.7-.4-8.1 1.4-16.1 5.2-23.3 1.2-2.2 1.9-4.7 1.9-7.3 0-8.4-6.8-15.2-15.2-15.2H30.4V70.7c0-22.3 18.1-40.3 40.3-40.3h172v28.7c-8.7-1.6-17.6-1.6-26.2 0-40.5 7.2-67.4 45.9-60.1 86.4s45.9 67.4 86.4 60.1v43.9c0 8.4 6.8 15.2 15.2 15.2h59.9c1.6 0 3.2-.3 4.7-.7 8-2.6 12.3-11.2 9.7-19.2-.6-2.5-1-5.1-1.2-7.7-1.5-24.3 16.9-45.2 41.2-46.7.9-.1 1.8-.1 2.7-.1 3.8 0 7.6.5 11.3 1.5 23.5 6.2 37.5 30.4 31.3 53.9-.3 1.3-.5 2.6-.5 3.9 0 8.4 6.8 15.2 15.2 15.2h59.9c8.4 0 15.2-6.8 15.2-15.2V70.7c-.1-39-31.7-70.7-70.7-70.7zM477 234.2h-27.5c0-41.1-33.3-74.4-74.4-74.4-1.5 0-3 0-4.6.1-36 2.2-65.9 30.9-69.5 66.8-.2 2.5-.4 5-.4 7.5h-27.5v-49.9c0-2.5-.6-5-1.8-7.3-4-7.4-13.2-10.1-20.6-6.1-7.4 4-15.7 5.8-24.1 5.2-24.3-1.7-42.6-22.8-40.9-47 1.5-21.8 19.8-39.8 41.7-40.8 8.1-.4 16.1 1.4 23.2 5.3 2.2 1.2 4.7 1.8 7.3 1.8 8.4 0 15.2-6.8 15.2-15.2V30.4h163.6c22.3 0 40.3 18.1 40.3 40.3v163.5z"
                />
              </svg>
              <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                Join Our Community
              </h2>
              <p className="lead text-[1rem] !mb-6 xl:!px-10 xxl:!px-20">
                We are trusted by over 5000+ clients. Join them by using our
                services and grow your business.
              </p>
              <a
                href="#"
                className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                Join Us
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
        border={false}
        code={`    &lt;section id&#x3D;&quot;snippet-3&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
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
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
              &gt;
                Join Us
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

      <section id="snippet-4" className="wrapper !bg-[#ffffff]">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div
            className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 !text-white !mt-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2/4 lg:-translate-y-2/4 !mb-lg-n50p border-radius-lg-top bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 !rounded-[0.4rem] before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
            style={{ backgroundImage: "url(/assets/img/photos/bg16.png)" }}
          >
            <div className="card-body !p-10 xl:!p-14">
              <div className="flex flex-wrap mx-[-15px] !text-center">
                <div className="xl:w-11/12 xxl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                  <h2 className="!text-[0.8rem] !leading-[1.35] uppercase !text-white !mb-3">
                    Join Our Community
                  </h2>
                  <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:!text-[2rem] !mb-8 xl:!px-8 lg:!px-8 !text-white">
                    We are
                    <span className="!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 style-2 yellow">
                      trusted
                    </span>
                    by over 5000+ clients. Join them now and grow your business.
                  </h3>
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
              <div className="flex justify-center">
                <span>
                  <a className="btn btn-white rounded">Get Started</a>
                </span>
              </div>
            </div>
            {/*/.card-body */}
          </div>
          {/*/.card */}
        </div>
        {/* /.container */}

        {/* /.container */}
      </section>
      <CodeSnippet
        code={`    &lt;section id&#x3D;&quot;snippet-4&quot; className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
        &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
          &lt;div
            className&#x3D;&quot;card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 !text-white !mt-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2&#x2F;4 lg:-translate-y-2&#x2F;4 !mb-lg-n50p border-radius-lg-top bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 !rounded-[0.4rem] before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0&quot;
            style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg16.png)&quot; }}
          &gt;
            &lt;div className&#x3D;&quot;card-body !p-10 xl:!p-14&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
                &lt;div className&#x3D;&quot;xl:w-11&#x2F;12 xxl:w-9&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
                  &lt;h2 className&#x3D;&quot;!text-[0.8rem] !leading-[1.35] uppercase !text-white !mb-3&quot;&gt;
                    Join Our Community
                  &lt;&#x2F;h2&gt;
                  &lt;h3 className&#x3D;&quot;!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:!text-[2rem] !mb-8 xl:!px-8 lg:!px-8 !text-white&quot;&gt;
                    We are
                    &lt;span className&#x3D;&quot;!relative z-[2] after:content-[&#39;&#39;] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2&#x2F;4 after:left-2&#x2F;4 style-2 yellow&quot;&gt;
                      trusted
                    &lt;&#x2F;span&gt;
                    by over 5000+ clients. Join them now and grow your business.
                  &lt;&#x2F;h3&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.row *&#x2F;}
              &lt;div className&#x3D;&quot;flex justify-center&quot;&gt;
                &lt;span&gt;
                  &lt;a className&#x3D;&quot;btn btn-white rounded&quot;&gt;Get Started&lt;&#x2F;a&gt;
                &lt;&#x2F;span&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.card-body *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.card *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}

        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;section&gt;`}
      />
      <section id="snippet-5" className="wrapper !bg-[#ffffff] ">
        <div className="wrapper !bg-[#edf2fc] !mb-14 md:!mb-[4.5rem]">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <div className="flex flex-wrap mx-[-15px] !mb-8">
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
                <h2 className="!text-[0.8rem] uppercase !text-[#3f78e0] !mb-3 !leading-[1.35]">
                  Analyze Now
                </h2>
                <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-0">
                  Wonder how much faster your website can go? Easily check your
                  SEO Score now.
                </h3>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <form>
                  <div className="form-floating input-group relative">
                    <input
                      type="url"
                      className="form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      placeholder=""
                      id="analyze"
                    />
                    <label
                      className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                      htmlFor="analyze"
                    >
                      Enter Website URL
                    </label>
                    <button
                      className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                      type="button"
                    >
                      Analyze
                    </button>
                  </div>
                </form>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>

        {/* /.container */}
      </section>
      <CodeSnippet
        code={`   &lt;section id&#x3D;&quot;snippet-5&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;wrapper !bg-[#edf2fc] !mb-14 md:!mb-[4.5rem]&quot;&gt;
          &lt;div className&#x3D;&quot;container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mb-8&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[0.8rem] uppercase !text-[#3f78e0] !mb-3 !leading-[1.35]&quot;&gt;
                  Analyze Now
                &lt;&#x2F;h2&gt;
                &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-0&quot;&gt;
                  Wonder how much faster your website can go? Easily check your
                  SEO Score now.
                &lt;&#x2F;h3&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
                &lt;form action&#x3D;&quot;#&quot;&gt;
                  &lt;div className&#x3D;&quot;form-floating input-group relative&quot;&gt;
                    &lt;input
                      type&#x3D;&quot;url&quot;
                      className&#x3D;&quot;form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]&quot;
                      placeholder&#x3D;&quot;&quot;
                      id&#x3D;&quot;analyze&quot;
                    &#x2F;&gt;
                    &lt;label
                      className&#x3D;&quot;inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope&quot;
                      htmlFor&#x3D;&quot;analyze&quot;
                    &gt;
                      Enter Website URL
                    &lt;&#x2F;label&gt;
                    &lt;button
                      className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                      type&#x3D;&quot;button&quot;
                    &gt;
                      Analyze
                    &lt;&#x2F;button&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;form&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;div&gt;

        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;section&gt;`}
      />
      <section id="snippet-6" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-10 pb-20 lg:!py-28 xl:!py-40 xxl:!py-60 !relative">
          <img
            className="xl:!absolute lg:!absolute max-lg:!static w-full flex-[0_0_auto] max-w-full xl:-translate-y-2/4 lg:-translate-y-2/4 !mb-3 md:!mb-10 lg:!mb-0 xl:!mb-0"
            srcSet="/assets/img/photos/devices2@2x.png 2x"
            alt="image"
            style={{ top: "50%", left: "-23%" }}
            width="1320"
            height="800"
            src="/assets/img/photos/devices2.png"
          />
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] items-center">
            <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-6/12 lg:!ml-[50%] xl:w-6/12 xl:!ml-[50%] flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] w-full max-w-full xl:!mt-[-2.25rem] lg:!mt-[-2.25rem] md:!mt-[-2.25rem] text-center xl:text-left lg:text-left">
              <h1 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-4 md:!px-10 lg:!px-0">
                Get all of your steps, exercise, sleep and meds in one place.
              </h1>
              <p className="lead text-[1.05rem] !leading-[1.6] !mb-7 md:!px-10 lg:!px-0 xl:!px-0 xxl:!pr-20">
                Sandbox is now available to download from both the App Store and
                Google Play Store.
              </p>
              <div className="flex justify-center xl:!justify-start lg:!justify-start">
                <span>
                  <a className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-start rounded !mr-2">
                    <i className="uil uil-apple !mr-[.3rem] before:content-['\e938']" />
                    App Store
                  </a>
                </span>
                <span>
                  <a className="btn btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] btn-icon btn-icon-start rounded">
                    <i className="uil uil-google-play !mr-[.3rem] before:content-['\eb4f']" />
                    Google Play
                  </a>
                </span>
              </div>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}

        {/* /.container */}
      </section>

      <CodeSnippet
        code={`  &lt;section id&#x3D;&quot;snippet-6&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;container pt-10 pb-20 lg:!py-28 xl:!py-40 xxl:!py-60 !relative&quot;&gt;
          &lt;img
            className&#x3D;&quot;xl:!absolute lg:!absolute max-lg:!static w-full flex-[0_0_auto] max-w-full xl:-translate-y-2&#x2F;4 lg:-translate-y-2&#x2F;4 !mb-3 md:!mb-10 lg:!mb-0 xl:!mb-0&quot;
            srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices2@2x.png 2x&quot;
            alt&#x3D;&quot;image&quot;
            style&#x3D;{{ top: &quot;50%&quot;, left: &quot;-23%&quot; }}
            width&#x3D;&quot;1320&quot;
            height&#x3D;&quot;800&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices2.png&quot;
          &#x2F;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] items-center&quot;&gt;
            &lt;div className&#x3D;&quot;md:w-10&#x2F;12 md:!ml-[8.33333333%] lg:w-6&#x2F;12 lg:!ml-[50%] xl:w-6&#x2F;12 xl:!ml-[50%] flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] w-full max-w-full xl:!mt-[-2.25rem] lg:!mt-[-2.25rem] md:!mt-[-2.25rem] text-center xl:text-left lg:text-left&quot;&gt;
              &lt;h1 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-4 md:!px-10 lg:!px-0&quot;&gt;
                Get all of your steps, exercise, sleep and meds in one place.
              &lt;&#x2F;h1&gt;
              &lt;p className&#x3D;&quot;lead text-[1.05rem] !leading-[1.6] !mb-7 md:!px-10 lg:!px-0 xl:!px-0 xxl:!pr-20&quot;&gt;
                Sandbox is now available to download from both the App Store and
                Google Play Store.
              &lt;&#x2F;p&gt;
              &lt;div className&#x3D;&quot;flex justify-center xl:!justify-start lg:!justify-start&quot;&gt;
                &lt;span&gt;
                  &lt;a className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-start rounded !mr-2&quot;&gt;
                    &lt;i className&#x3D;&quot;uil uil-apple !mr-[.3rem] before:content-[&#39;\e938&#39;]&quot; &#x2F;&gt;
                    App Store
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;span&gt;
                &lt;span&gt;
                  &lt;a className&#x3D;&quot;btn btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] btn-icon btn-icon-start rounded&quot;&gt;
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

        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;section&gt;`}
      />
      <section id="snippet-7" className="wrapper !bg-[#ffffff] ">
        <div className="pt-40 pb-10 !relative">
          <section
            className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 [background-size:100%] bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.6)]"
            style={{ backgroundImage: "url(/assets/img/photos/bg23.png)" }}
          >
            <div className="overflow-hidden" style={{ zIndex: 1 }}>
              <div className="divider divider-alt !text-[#fefefe] mx-[-0.5rem]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                  <g fill="currentColor">
                    <polygon points="1440 100 0 15 0 0 1440 0 1440 100" />
                  </g>
                </svg>
              </div>
            </div>
            {/* /.overflow-hidden */}
            <div className="container pt-10 xl:pt-10 lg:pt-10 md:pt-16 pb-8 xl:pb-10 lg:pb-10 md:pb-10 text-center xl:text-left lg:text-left">
              <div className="flex flex-wrap mx-0 !mt-[-50px]">
                <div className="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-6/12 xl:!ml-0 xl:w-5/12 w-full flex-[0_0_auto] max-w-full !relative !mt-[50px]">
                  <img
                    className="!h-[5rem] !absolute hidden xl:block lg:block"
                    style={{ bottom: "36%", right: "-25%" }}
                    alt="image"
                    width="152"
                    height="147"
                    src="/assets/img/svg/doodle2.svg"
                  />
                  <img
                    className="!h-[4.5rem] !absolute hidden xl:block lg:block"
                    style={{ top: "-20%", left: "-25%" }}
                    alt="image"
                    width="976"
                    height="117"
                    src="/assets/img/svg/doodle6.svg"
                  />
                  <h2 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:!text-[2rem] !mb-4">
                    Manage all your bills, accounts &amp; budgets in
                    <span className="text-gradient gradient-7">one place.</span>
                  </h2>
                  <p className="lead !text-[1.2rem] leading-normal !mb-7">
                    Sandbox is available to download from both App Store and
                    Google Play Store.
                  </p>
                  <div className="flex justify-center xl:!justify-start lg:!justify-start">
                    <span className="inline-flex">
                      <a href="#" className="!mr-2 inline-block">
                        <img
                          className="!h-[3rem] !rounded-[0.8rem]"
                          alt="image"
                          width="123"
                          height="40"
                          src="/assets/img/photos/button-appstore.svg"
                        />
                      </a>
                    </span>
                    <span className="inline-flex">
                      <a href="#" className="inline-block">
                        <img
                          className="!h-[3rem] !rounded-[0.8rem]"
                          alt="image"
                          width="135"
                          height="40"
                          src="/assets/img/photos/button-google-play.svg"
                        />
                      </a>
                    </span>
                  </div>
                </div>
                {/* /column */}
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !ml-auto !mt-lg-n15 xl:!mt-[-10rem] lg:!mt-[-5rem] !mt-[50px]">
                  <figure className="m-0 p-0">
                    <img
                      className="w-full max-w-full !h-auto"
                      srcSet="/assets/img/photos/devices6@2x.png 2x"
                      alt="image"
                      width="645"
                      height="725"
                      src="/assets/img/photos/devices6.png"
                    />
                  </figure>
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </section>
          {/* /section */}
        </div>
        {/* /.container */}

        {/* /.container */}
      </section>

      <CodeSnippet
        code={` &lt;section id&#x3D;&quot;snippet-7&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;pt-40 pb-10 !relative&quot;&gt;
          &lt;section
            className&#x3D;&quot;wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 [background-size:100%] bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.6)]&quot;
            style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg23.png)&quot; }}
          &gt;
            &lt;div className&#x3D;&quot;overflow-hidden&quot; style&#x3D;{{ zIndex: 1 }}&gt;
              &lt;div className&#x3D;&quot;divider divider-alt !text-[#fefefe] mx-[-0.5rem]&quot;&gt;
                &lt;svg xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot; viewBox&#x3D;&quot;0 0 1440 100&quot;&gt;
                  &lt;g fill&#x3D;&quot;currentColor&quot;&gt;
                    &lt;polygon points&#x3D;&quot;1440 100 0 15 0 0 1440 0 1440 100&quot; &#x2F;&gt;
                  &lt;&#x2F;g&gt;
                &lt;&#x2F;svg&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.overflow-hidden *&#x2F;}
            &lt;div className&#x3D;&quot;container pt-10 xl:pt-10 lg:pt-10 md:pt-16 pb-8 xl:pb-10 lg:pb-10 md:pb-10 text-center xl:text-left lg:text-left&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-0 !mt-[-50px]&quot;&gt;
                &lt;div className&#x3D;&quot;md:w-10&#x2F;12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-6&#x2F;12 xl:!ml-0 xl:w-5&#x2F;12 w-full flex-[0_0_auto] max-w-full !relative !mt-[50px]&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;!h-[5rem] !absolute hidden xl:block lg:block&quot;
                    style&#x3D;{{ bottom: &quot;36%&quot;, right: &quot;-25%&quot; }}
                    alt&#x3D;&quot;image&quot;
                    width&#x3D;&quot;152&quot;
                    height&#x3D;&quot;147&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle2.svg&quot;
                  &#x2F;&gt;
                  &lt;img
                    className&#x3D;&quot;!h-[4.5rem] !absolute hidden xl:block lg:block&quot;
                    style&#x3D;{{ top: &quot;-20%&quot;, left: &quot;-25%&quot; }}
                    alt&#x3D;&quot;image&quot;
                    width&#x3D;&quot;976&quot;
                    height&#x3D;&quot;117&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle6.svg&quot;
                  &#x2F;&gt;
                  &lt;h2 className&#x3D;&quot;!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:!text-[2rem] !mb-4&quot;&gt;
                    Manage all your bills, accounts &amp;amp; budgets in
                    &lt;span className&#x3D;&quot;text-gradient gradient-7&quot;&gt;one place.&lt;&#x2F;span&gt;
                  &lt;&#x2F;h2&gt;
                  &lt;p className&#x3D;&quot;lead !text-[1.2rem] leading-normal !mb-7&quot;&gt;
                    Sandbox is available to download from both App Store and
                    Google Play Store.
                  &lt;&#x2F;p&gt;
                  &lt;div className&#x3D;&quot;flex justify-center xl:!justify-start lg:!justify-start&quot;&gt;
                    &lt;span className&#x3D;&quot;inline-flex&quot;&gt;
                      &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;!mr-2 inline-block&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;!h-[3rem] !rounded-[0.8rem]&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;123&quot;
                          height&#x3D;&quot;40&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;button-appstore.svg&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;span&gt;
                    &lt;span className&#x3D;&quot;inline-flex&quot;&gt;
                      &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;inline-block&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;!h-[3rem] !rounded-[0.8rem]&quot;
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;&quot;135&quot;
                          height&#x3D;&quot;40&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;button-google-play.svg&quot;
                        &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;span&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] max-w-full !ml-auto !mt-lg-n15 xl:!mt-[-10rem] lg:!mt-[-5rem] !mt-[50px]&quot;&gt;
                  &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
                    &lt;img
                      className&#x3D;&quot;w-full max-w-full !h-auto&quot;
                      srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices6@2x.png 2x&quot;
                      alt&#x3D;&quot;image&quot;
                      width&#x3D;&quot;645&quot;
                      height&#x3D;&quot;725&quot;
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices6.png&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.row *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.container *&#x2F;}
          &lt;&#x2F;section&gt;
          {&#x2F;* &#x2F;section *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}

        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;section&gt;`}
      />
      <section id="snippet-9" className="wrapper !bg-[#ffffff] ">
        <div className="pt-20 pb-10 !relative">
          <section className="section-frame xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem] xxl:!mx-12 overflow-hidden">
            <div
              className="wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500 bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.5)]"
              style={{ backgroundImage: "url(/assets/img/photos/bg23.png)" }}
            >
              <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem] !text-center">
                <div
                  className="!absolute shape yellow hidden xl:block lg:block w-5"
                  style={{ top: "18%", left: "5%" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 219.5 219.5"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/pie.svg"
                    className="svg-inject icon-svg !w-full !h-full"
                  >
                    <path
                      className="svg-fill"
                      d="M219.5 219.5H0c0-58.19 23.14-114.06 64.29-155.21A219.561 219.561 0 01219.5 0v219.5z"
                    />
                  </svg>
                </div>
                <div
                  className="!absolute shape leaf hidden xl:block lg:block !w-[2.5rem]"
                  style={{ bottom: "30%", left: "2%" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 457.71 446.45"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/scribble.svg"
                    className="svg-inject icon-svg !w-full !h-full"
                  >
                    <path
                      className="svg-fill"
                      d="M205.62 442.54c-.51-.41-.99-.84-1.46-1.31-10.4-10.39-3.61-27.12 11.63-52.5 11.72-19.51 28.48-43.74 46.22-69.39 17.53-25.34 35.66-51.54 49.01-73.47 14.73-24.19 18.57-35.01 19.51-39.48-3.86-.28-13.15.3-33.78 6.52-19.71 5.94-43.09 14.92-65.7 23.6-63.8 24.49-85.35 31.41-96.51 19.5-3.21-3.43-7.62-11.04-1.12-23.54 2.49-4.79 6.64-10.51 12.68-17.5 10.4-12.03 25.04-26.34 40.55-41.49 14.02-13.7 28.53-27.87 39.53-40.11 9.93-11.04 14.15-17.43 15.94-20.82-3.43-.75-10.24-1.51-23.25-.92-14.99.68-33.44 2.89-51.28 5.02-46.92 5.61-74.09 8.33-86.81-.99-4.78-3.5-7.67-8.42-8.41-14.24-1.97-15.58 12.45-33.15 29.14-53.5 5.31-6.47 13.31-16.22 17.36-22.68-4.51-.38-12.43-.4-25.97 1.1-16.54 1.82-35.62 5.22-50.95 7.96-12.62 2.25-22.6 4.03-28.48 4.49C6.6 39.3.58 34.17.04 27.28c-.54-6.88 4.6-12.9 11.48-13.44 4.66-.37 14.58-2.13 26.06-4.18C54.56 6.63 75.7 2.86 94 1.07c26.41-2.6 40.16-.54 47.48 7.13 7.01 7.34 6.45 17.66-1.68 30.66-4.72 7.55-11.63 15.98-18.95 24.9-6.18 7.53-12.57 15.31-17.24 22.19-3.35 4.92-4.95 8.13-5.71 10.07 3 .54 9.09 1.08 20.87.43 13.21-.73 29.07-2.63 45.86-4.64 59.99-7.17 94.33-10.22 102.49 10.62 7.4 18.93-16.51 43.51-62.99 88.92-12.69 12.4-24.68 24.11-34.04 34.28-3.17 3.45-5.68 6.34-7.67 8.75 15.88-4.42 41.18-14.13 59.67-21.22 62.4-23.96 101.69-37.87 121.09-29.14 5.38 2.42 9.26 6.47 11.23 11.72 7.48 19.95-16.15 57.31-71.83 137.82-15.49 22.39-30.12 43.55-41.18 61.25-7.13 11.4-11.3 19.11-13.75 24.25 8.97-3.3 25.58-11 55.73-28.8 32.68-19.29 70.61-44.04 101.09-63.94 24.62-16.07 44.07-28.76 54.65-34.68 6.03-3.37 13.64-1.22 17.01 4.81 3.37 6.03 1.22 13.64-4.81 17.01-9.83 5.5-29.92 18.61-53.18 33.79-33.46 21.84-75.1 49.01-110.05 69.21-49.35 28.51-70.85 35.44-82.46 26.07z"
                    />
                  </svg>
                </div>
                <div
                  className="!absolute shape fuchsia hidden xl:block lg:block w-6"
                  style={{
                    top: "20%",
                    right: "2%",
                    transform: "rotate(70deg)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 411.42 329.24"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/tri.svg"
                    className="svg-inject icon-svg !w-full !h-full"
                  >
                    <g data-name="Layer 2">
                      <path
                        className="svg-fill"
                        d="M164.34 21.92L8.72 251.15c-22.54 33.2 1.24 78.09 41.37 78.09h311.24c40.13 0 63.91-44.89 41.37-78.09L247.08 21.92a50 50 0 00-82.74 0z"
                        data-name="Layer 1"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  className="!absolute shape grape hidden xl:block lg:block w-6"
                  style={{ bottom: "28%", right: "5%" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/circle.svg"
                    className="svg-inject icon-svg !w-full !h-full"
                  >
                    <g data-name="Layer 2">
                      <path
                        className="svg-fill"
                        d="M250 0C111.93 0 0 111.93 0 250s111.93 250 250 250 250-111.93 250-250S388.07 0 250 0zm0 425a175 175 0 11175-175 175 175 0 01-175 175z"
                        data-name="Layer 1"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                    <h2 className="font-bold !leading-[1.2] xl:!text-[3.5rem] !text-[calc(1.475rem_+_2.7vw)] lg:mx-[-2.5rem] xl:mx-0 !mb-5">
                      Got a 👾 project in mind? Let's work together. ✌️
                    </h2>
                    <p className="lead !text-[1.2rem] !leading-[1.65] md:!px-14 lg:!px-0 lg:mx-[-2.5rem] xl:mx-0 !mb-8">
                      I bring rapid solutions to make the life of my clients
                      easier. Have any questions? Reach out to me and I will get
                      back to you shortly.
                    </p>
                    <a
                      href="#"
                      className="btn btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-end"
                    >
                      Contact Me
                      <i className="uil uil-arrow-up-right !ml-[.3rem] before:content-['\e950']" />
                    </a>
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.wrapper */}
          </section>
          {/* /section */}
        </div>
        {/* /.container */}

        {/* /.container */}
      </section>
      <CodeSnippet
        code={`&lt;section id&#x3D;&quot;snippet-9&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;pt-20 pb-10 !relative&quot;&gt;
          &lt;section className&#x3D;&quot;section-frame xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem] xxl:!mx-12 overflow-hidden&quot;&gt;
            &lt;div
              className&#x3D;&quot;wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500 bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.5)]&quot;
              style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg23.png)&quot; }}
            &gt;
              &lt;div className&#x3D;&quot;container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem] !text-center&quot;&gt;
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
                    &lt;h2 className&#x3D;&quot;font-bold !leading-[1.2] xl:!text-[3.5rem] !text-[calc(1.475rem_+_2.7vw)] lg:mx-[-2.5rem] xl:mx-0 !mb-5&quot;&gt;
                      Got a 👾 project in mind? Let&#39;s work together. ✌️
                    &lt;&#x2F;h2&gt;
                    &lt;p className&#x3D;&quot;lead !text-[1.2rem] !leading-[1.65] md:!px-14 lg:!px-0 lg:mx-[-2.5rem] xl:mx-0 !mb-8&quot;&gt;
                      I bring rapid solutions to make the life of my clients
                      easier. Have any questions? Reach out to me and I will get
                      back to you shortly.
                    &lt;&#x2F;p&gt;
                    &lt;a
                      href&#x3D;&quot;#&quot;
                      className&#x3D;&quot;btn btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-end&quot;
                    &gt;
                      Contact Me
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
          {&#x2F;* &#x2F;section *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}

        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;section&gt;`}
      />
    </>
  );
}
