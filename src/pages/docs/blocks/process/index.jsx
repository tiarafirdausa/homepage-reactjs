import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import PageTitle from "@/components/blocks/PageTitle";
import React from "react";

import { steps2, stepsData } from "@/data/steps";
import CodeSnippet from "@/components/common/CodeSnippet";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Process || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageProcess() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Process" />
      <BlockPageLinks />
      <section id="snippet-1" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] md:mx-[-20px] xl:mx-[-35px] items-center">
            <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full !relative !mt-[80px]">
              <div
                className="shape bg-dot primary rellax !w-[7rem] !h-[12.5rem] absolute z-[1] opacity-50 bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]"
                data-rellax-speed={1}
                style={{ top: "-2rem", left: "-1.9rem" }}
              />
              <div
                className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block !absolute z-[1]"
                data-rellax-speed={0}
                style={{
                  bottom: "-1.8rem",
                  right: "-1.5rem",
                  width: "85%",
                  height: "90%",
                }}
              />
              <figure className="!rounded-[.4rem] relative z-[2]">
                <img
                  className="!rounded-[.4rem]"
                  srcSet="/assets/img/photos/about7@2x.jpg 2x"
                  alt="image"
                  width="575"
                  height="550"
                  src="/assets/img/photos/about7.jpg"
                />
              </figure>
            </div>
            {/*/column */}
            <div className="lg:w-5/12 xl:w-4/12 xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full !mt-[80px]">
              <h2 className="h1 !mb-3 !leading-[1.3]">How It Works?</h2>
              <p className="lead text-[1.05rem] !leading-[1.6] !mb-6">
                So here are three working steps why our valued customers choose
                us.
              </p>
              {stepsData.map((step, index) => (
                <div key={index} className="flex flex-row !mb-6">
                  <div>
                    <span className="icon btn btn-circle btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !mr-5 w-[2.2rem] h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                      <span className="number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0">
                        {step.number}
                      </span>
                    </span>
                  </div>
                  <div>
                    <h4 className="!mb-1">{step.title}</h4>
                    <p className="!mb-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /.container */}

        {/* /.container */}
      </section>
      <CodeSnippet
        code={`      &lt;section id&#x3D;&quot;snippet-1&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] md:mx-[-20px] xl:mx-[-35px] items-center&quot;&gt;
            &lt;div className&#x3D;&quot;md:w-8&#x2F;12 lg:w-6&#x2F;12 xl:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full !relative !mt-[80px]&quot;&gt;
              &lt;div
                className&#x3D;&quot;shape bg-dot primary rellax !w-[7rem] !h-[12.5rem] absolute z-[1] opacity-50 bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]&quot;
                data-rellax-speed&#x3D;{1}
                style&#x3D;{{ top: &quot;-2rem&quot;, left: &quot;-1.9rem&quot; }}
              &#x2F;&gt;
              &lt;div
                className&#x3D;&quot;shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block !absolute z-[1]&quot;
                data-rellax-speed&#x3D;{0}
                style&#x3D;{{
                  bottom: &quot;-1.8rem&quot;,
                  right: &quot;-1.5rem&quot;,
                  width: &quot;85%&quot;,
                  height: &quot;90%&quot;,
                }}
              &#x2F;&gt;
              &lt;figure className&#x3D;&quot;!rounded-[.4rem] relative z-[2]&quot;&gt;
                &lt;img
                  className&#x3D;&quot;!rounded-[.4rem]&quot;
                  srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about7@2x.jpg 2x&quot;
                  alt&#x3D;&quot;image&quot;
                  width&#x3D;&quot;575&quot;
                  height&#x3D;&quot;550&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about7.jpg&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;column *&#x2F;}
            &lt;div className&#x3D;&quot;lg:w-5&#x2F;12 xl:w-4&#x2F;12 xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full !mt-[80px]&quot;&gt;
              &lt;h2 className&#x3D;&quot;h1 !mb-3 !leading-[1.3]&quot;&gt;How It Works?&lt;&#x2F;h2&gt;
              &lt;p className&#x3D;&quot;lead text-[1.05rem] !leading-[1.6] !mb-6&quot;&gt;
                So here are three working steps why our valued customers choose
                us.
              &lt;&#x2F;p&gt;
              {/* import { stepsData } from "@/data/steps"*/}
              {stepsData.map((step, index) &#x3D;&gt; (
                &lt;div key&#x3D;{index} className&#x3D;&quot;flex flex-row !mb-6&quot;&gt;
                  &lt;div&gt;
                    &lt;span className&#x3D;&quot;icon btn btn-circle btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !mr-5 w-[2.2rem] h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]&quot;&gt;
                      &lt;span className&#x3D;&quot;number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0&quot;&gt;
                        {step.number}
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;span&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;{step.title}&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0&quot;&gt;{step.description}&lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              ))}
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
      <section id="snippet-2" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
            How We Do It?
          </h2>
          <p className="lead !mb-8 !text-[1.05rem] !leading-[1.6]">
            We make your spending
            <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]">
              stress-free
            </span>
            for you to have the perfect control.
          </p>
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] process-wrapper line">
            {steps2.map((column, index) => (
              <div
                key={index}
                className={`md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full !relative ${
                  !column.isLast
                    ? "after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit max-lg:after:!hidden"
                    : ""
                }`}
              >
                <span
                  className={
                    index == 1
                      ? "icon btn btn-circle btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !mb-4 !relative z-[2] xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]"
                      : "icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mb-4 !relative z-[2] xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]"
                  }
                >
                  <span className="number table-cell text-center align-middle text-[1.1rem] font-bold mx-auto my-0 !leading-none">
                    {column.number}
                  </span>
                </span>
                <h4 className="!mb-1">{column.title}</h4>
                <p className="!mb-0">{column.description}</p>
              </div>
            ))}
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /.container */}

        {/* /.container */}
      </section>
      <CodeSnippet
        code={`&lt;section id&#x3D;&quot;snippet-2&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
&lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
  &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
    How We Do It?
  &lt;&#x2F;h2&gt;
  &lt;p className&#x3D;&quot;lead !mb-8 !text-[1.05rem] !leading-[1.6]&quot;&gt;
    We make your spending
    &lt;span className&#x3D;&quot;relative z-[2] whitespace-nowrap after:content-[&#39;&#39;] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]&quot;&gt;
      stress-free
    &lt;&#x2F;span&gt;
    for you to have the perfect control.
  &lt;&#x2F;p&gt;
  &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] process-wrapper line&quot;&gt;
  {/* import { steps2, stepsData } from "@/data/steps"*/}
    &lbrace;steps2.map((column, index) &#x3D;&gt; (
      &lt;div
        key&#x3D;&lbrace;index&rbrace;
        className&#x3D;&lbrace;&#x60;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full !relative $&lbrace;
          !column.isLast
            ? &quot;after:w-full after:absolute after:content-[&#39;&#39;] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit max-lg:after:!hidden&quot;
            : &quot;&quot;
        &rbrace;&#x60;&rbrace;
      &gt;
        &lt;span
          className&#x3D;&lbrace;
            index &#x3D;&#x3D; 1
              ? &quot;icon btn btn-circle btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !mb-4 !relative z-[2] xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]&quot;
              : &quot;icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mb-4 !relative z-[2] xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]&quot;
          &rbrace;
        &gt;
          &lt;span className&#x3D;&quot;number table-cell text-center align-middle text-[1.1rem] font-bold mx-auto my-0 !leading-none&quot;&gt;
            &lbrace;column.number&rbrace;
          &lt;&#x2F;span&gt;
        &lt;&#x2F;span&gt;
        &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;&lbrace;column.title&rbrace;&lt;&#x2F;h4&gt;
        &lt;p className&#x3D;&quot;!mb-0&quot;&gt;&lbrace;column.description&rbrace;&lt;&#x2F;p&gt;
      &lt;&#x2F;div&gt;
    ))&rbrace;
    &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
  &lt;&#x2F;div&gt;
  &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
&lt;&#x2F;div&gt;
&lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;

&lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
&lt;&#x2F;section&gt;`}
      />
      {/* /section */}
      <section id="snippet-3" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-12 xl:pt-16 lg:pt-16 pb-24 xl:pb-6 lg:pb-6">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-25px] lg:mx-[-20px] items-center">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] !px-[15px] max-w-full">
              <figure className="m-0 p-0">
                <img
                  className="w-full max-w-full !h-auto"
                  srcSet="/assets/img/photos/device@2x.png 2x"
                  alt="image"
                  width="650"
                  height="874"
                  src="/assets/img/photos/device.png"
                />
              </figure>
            </div>
            {/* /column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] !px-[15px] max-w-full">
              <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
                How It Works
              </h2>
              <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5">
                Download the app, create your profile and voilà, you're all set!
              </h3>
              <p className="!mb-8">
                Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                consectetur purus sit amet fermentum. Integer posuere erat a
                ante venenatis dapibus posuere velit aliquet. Nulla vitae elit
                libero. Etiam porta sem malesuada magna mollis euismod. Fusce
                dapibus, tellus ac cursus commodo.
              </p>
              <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xxl:mx-[-20px] process-wrapper">
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xxl:!px-[20px] !px-[15px] max-w-full !mt-[30px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 409.6 319.1"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/cloud-computing.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#45c4a0] text-green !mb-3"
                  >
                    <path
                      className="lineal-stroke"
                      d="M333.9 278.3h-47c-6-.2-10.8-5.2-10.6-11.2.2-5.8 4.8-10.4 10.6-10.6h47c29.8 0 53.9-24.1 53.9-53.9 0-25.9-18.5-48.1-43.9-52.9-5.9-1.1-9.8-6.8-8.7-12.7 0-.2.1-.5.2-.7 12.7-48.9-16.6-98.8-65.5-111.4-38.4-10-78.9 6-100.2 39.5-2.9 4.6-8.8 6.3-13.7 4.1-30.1-13.6-65.6-.2-79.2 29.9-3.5 7.8-5.3 16.2-5.3 24.7 0 4.6.6 9.3 1.6 13.8 1.4 5.9-2.3 11.7-8.1 13.1h-.2c-29.3 6-47.9 34.5-41.8 63.7 5.2 24.9 27.2 42.8 52.7 42.8H123c6-.2 11.1 4.6 11.2 10.6.2 6-4.6 11.1-10.6 11.2H75.7C33.9 278.3 0 244.5 0 202.7c0-31.9 20-60.4 50-71.3-.3-2.8-.4-5.6-.5-8.5 0-45.1 36.6-81.7 81.7-81.7 8.5 0 17 1.3 25.1 3.9 37.6-50 108.6-60 158.5-22.4C348.4 48 365.2 89.6 358.6 131c39.5 13.6 60.5 56.7 46.9 96.2-10.6 30.6-39.3 51.1-71.6 51.1z"
                    />
                    <path
                      className="lineal-fill"
                      d="M159 251.2l39.2 53.6c2.7 3.6 7.8 4.4 11.4 1.8.7-.5 1.3-1.1 1.8-1.8l39.3-53.6c2.7-3.6 1.9-8.7-1.7-11.4-1.4-1-3.1-1.6-4.9-1.6h-10.7V186c0-10.3-8.3-18.6-18.6-18.6H195c-10.3 0-18.6 8.4-18.6 18.6v52.2h-10.7c-4.5 0-8.2 3.6-8.2 8.1-.1 1.8.4 3.5 1.5 4.9z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M204.8 319.1c-6.1 0-11.8-2.9-15.4-7.8l-39.3-53.6c-6.2-8.5-4.4-20.4 4.1-26.7 3.2-2.3 7.1-3.6 11.1-3.7V186c0-16.3 13.2-29.5 29.5-29.6h19.8c16.3 0 29.5 13.2 29.6 29.6v41.3c10.5.1 19 8.8 18.8 19.3 0 4-1.3 7.8-3.7 11L220 311.2c-3.4 5-9.1 7.8-15.2 7.9zm-33.8-70l33.8 46.2 33.8-46.2h-5.3c-6 0-10.9-4.9-10.9-10.9V186c0-4.3-3.5-7.7-7.7-7.7h-19.9c-4.3 0-7.7 3.5-7.7 7.7v52.2c0 6-4.9 10.9-10.9 10.9H171z"
                    />
                  </svg>
                  <h4 className="!mb-1">1. Download</h4>
                  <p className="!mb-0">
                    Nulla vitae elit libero elit non porta eget.
                  </p>
                </div>
                {/*/column */}
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xxl:!px-[20px] !px-[15px] max-w-full !mt-[30px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 306.7 409.6"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/smartphone-2.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#e2626b] text-red !mb-3"
                  >
                    <path
                      className="lineal-stroke"
                      d="M11.1 348.5c-6.1 0-11.1-5-11.1-11.1V72.2C0 66 5 61.1 11.1 61.1h284.5c6.1 0 11.1 5 11.1 11.1V257c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1V83.2H22.2v254.2c0 6.2-5 11.2-11.1 11.1 0 .1 0 .1 0 0z"
                    />
                    <path
                      className="lineal-fill"
                      d="M48.8 398.5H258c20.8 0 37.7-16.9 37.7-37.7v-23.4H11.1v23.4c0 20.8 16.9 37.7 37.7 37.7z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M258 409.6H48.8C21.9 409.6 0 387.7 0 360.8v-23.4c0-6.1 5-11.1 11.1-11.1h284.5c6.1 0 11.1 5 11.1 11.1v23.4c0 26.9-21.8 48.7-48.7 48.8zM22.2 348.5v12.3c0 14.7 11.9 26.6 26.6 26.6H258c14.7 0 26.6-11.9 26.6-26.6v-12.3H22.2zM295.6 83.2H11.1C5 83.2 0 78.3 0 72.2V48.8C0 21.9 21.9 0 48.8 0H258c26.9 0 48.8 21.9 48.8 48.8v23.4c0 6.1-5 11-11.2 11zM22.2 61h262.3V48.8c0-14.7-11.9-26.5-26.5-26.6H48.8c-14.7 0-26.6 11.9-26.6 26.6V61z"
                    />
                    <path className="st2" d="M65.1 130.8L85 145.3l23.3-28.9" />
                    <path
                      className="lineal-stroke"
                      d="M85 156.4c-2.3 0-4.6-.7-6.5-2.1l-20-14.4c-5-3.6-6.1-10.5-2.5-15.5s10.5-6.1 15.5-2.5l11.5 8.3 16.7-20.7c3.9-4.8 10.9-5.5 15.6-1.6s5.5 10.9 1.6 15.6l-23.3 28.8c-2 2.6-5.2 4.1-8.6 4.1zM241.7 142H159c-6.1-.2-11-5.3-10.8-11.4.2-5.9 4.9-10.6 10.8-10.8h82.7c6.1.2 11 5.3 10.8 11.4-.2 5.9-4.9 10.6-10.8 10.8z"
                    />
                    <path className="st2" d="M65.1 204.8L85 219.2l23.3-28.8" />
                    <path
                      className="lineal-stroke"
                      d="M85 230.3c-2.3 0-4.6-.7-6.5-2.1l-20-14.4c-5-3.6-6.1-10.5-2.5-15.5s10.5-6.1 15.5-2.5l11.5 8.3 16.7-20.7c3.8-4.8 10.8-5.5 15.6-1.7s5.5 10.8 1.7 15.6l-23.3 28.9c-2.1 2.6-5.3 4.1-8.7 4.1zm156.7-14.4H159c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1h82.7c6.1 0 11.1 5 11.1 11.1s-5 11.1-11.1 11.1z"
                    />
                    <path className="st2" d="M65.1 278.8L85 293.2l23.3-28.9" />
                    <path
                      className="lineal-stroke"
                      d="M85 304.3c-2.3 0-4.6-.7-6.5-2.1l-20-14.4c-5-3.6-6.1-10.5-2.5-15.5s10.5-6.1 15.5-2.5L83 278l16.7-20.7c3.9-4.8 10.9-5.5 15.6-1.7s5.5 10.9 1.7 15.6l-23.3 28.9c-2.1 2.7-5.3 4.2-8.7 4.2zm156.7-14.4H159c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1h82.7c6.1 0 11.1 5 11.1 11.1s-5 11.1-11.1 11.1z"
                    />
                  </svg>
                  <h4 className="!mb-1">2. Set Profile</h4>
                  <p className="!mb-0">
                    Nulla vitae elit libero elit non porta eget.
                  </p>
                </div>
                {/*/column */}
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xxl:!px-[20px] !px-[15px] max-w-full !mt-[30px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 294.2 409.6"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/rocket.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#54a8c7] text-aqua !mb-3"
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
                  <h4 className="!mb-1">3. Start</h4>
                  <p className="!mb-0">
                    Nulla vitae elit libero elit non porta eget.
                  </p>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}

        {/* /.container */}
      </section>
      <CodeSnippet
        code={`  &lt;section id&#x3D;&quot;snippet-3&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;container pt-12 xl:pt-16 lg:pt-16 pb-24 xl:pb-6 lg:pb-6&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-25px] lg:mx-[-20px] items-center&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] !px-[15px] max-w-full&quot;&gt;
              &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
                &lt;img
                  className&#x3D;&quot;w-full max-w-full !h-auto&quot;
                  srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;device@2x.png 2x&quot;
                  alt&#x3D;&quot;image&quot;
                  width&#x3D;&quot;650&quot;
                  height&#x3D;&quot;874&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;device.png&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
            &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] !px-[15px] max-w-full&quot;&gt;
              &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]&quot;&gt;
                How It Works
              &lt;&#x2F;h2&gt;
              &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5&quot;&gt;
                Download the app, create your profile and voilà, you&#39;re all set!
              &lt;&#x2F;h3&gt;
              &lt;p className&#x3D;&quot;!mb-8&quot;&gt;
                Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                consectetur purus sit amet fermentum. Integer posuere erat a
                ante venenatis dapibus posuere velit aliquet. Nulla vitae elit
                libero. Etiam porta sem malesuada magna mollis euismod. Fusce
                dapibus, tellus ac cursus commodo.
              &lt;&#x2F;p&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px] xxl:mx-[-20px] process-wrapper&quot;&gt;
                &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] xxl:!px-[20px] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 409.6 319.1&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;cloud-computing.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#45c4a0] text-green !mb-3&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M333.9 278.3h-47c-6-.2-10.8-5.2-10.6-11.2.2-5.8 4.8-10.4 10.6-10.6h47c29.8 0 53.9-24.1 53.9-53.9 0-25.9-18.5-48.1-43.9-52.9-5.9-1.1-9.8-6.8-8.7-12.7 0-.2.1-.5.2-.7 12.7-48.9-16.6-98.8-65.5-111.4-38.4-10-78.9 6-100.2 39.5-2.9 4.6-8.8 6.3-13.7 4.1-30.1-13.6-65.6-.2-79.2 29.9-3.5 7.8-5.3 16.2-5.3 24.7 0 4.6.6 9.3 1.6 13.8 1.4 5.9-2.3 11.7-8.1 13.1h-.2c-29.3 6-47.9 34.5-41.8 63.7 5.2 24.9 27.2 42.8 52.7 42.8H123c6-.2 11.1 4.6 11.2 10.6.2 6-4.6 11.1-10.6 11.2H75.7C33.9 278.3 0 244.5 0 202.7c0-31.9 20-60.4 50-71.3-.3-2.8-.4-5.6-.5-8.5 0-45.1 36.6-81.7 81.7-81.7 8.5 0 17 1.3 25.1 3.9 37.6-50 108.6-60 158.5-22.4C348.4 48 365.2 89.6 358.6 131c39.5 13.6 60.5 56.7 46.9 96.2-10.6 30.6-39.3 51.1-71.6 51.1z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M159 251.2l39.2 53.6c2.7 3.6 7.8 4.4 11.4 1.8.7-.5 1.3-1.1 1.8-1.8l39.3-53.6c2.7-3.6 1.9-8.7-1.7-11.4-1.4-1-3.1-1.6-4.9-1.6h-10.7V186c0-10.3-8.3-18.6-18.6-18.6H195c-10.3 0-18.6 8.4-18.6 18.6v52.2h-10.7c-4.5 0-8.2 3.6-8.2 8.1-.1 1.8.4 3.5 1.5 4.9z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M204.8 319.1c-6.1 0-11.8-2.9-15.4-7.8l-39.3-53.6c-6.2-8.5-4.4-20.4 4.1-26.7 3.2-2.3 7.1-3.6 11.1-3.7V186c0-16.3 13.2-29.5 29.5-29.6h19.8c16.3 0 29.5 13.2 29.6 29.6v41.3c10.5.1 19 8.8 18.8 19.3 0 4-1.3 7.8-3.7 11L220 311.2c-3.4 5-9.1 7.8-15.2 7.9zm-33.8-70l33.8 46.2 33.8-46.2h-5.3c-6 0-10.9-4.9-10.9-10.9V186c0-4.3-3.5-7.7-7.7-7.7h-19.9c-4.3 0-7.7 3.5-7.7 7.7v52.2c0 6-4.9 10.9-10.9 10.9H171z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                  &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;1. Download&lt;&#x2F;h4&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Nulla vitae elit libero elit non porta eget.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] xxl:!px-[20px] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 306.7 409.6&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;smartphone-2.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#e2626b] text-red !mb-3&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M11.1 348.5c-6.1 0-11.1-5-11.1-11.1V72.2C0 66 5 61.1 11.1 61.1h284.5c6.1 0 11.1 5 11.1 11.1V257c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1V83.2H22.2v254.2c0 6.2-5 11.2-11.1 11.1 0 .1 0 .1 0 0z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M48.8 398.5H258c20.8 0 37.7-16.9 37.7-37.7v-23.4H11.1v23.4c0 20.8 16.9 37.7 37.7 37.7z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M258 409.6H48.8C21.9 409.6 0 387.7 0 360.8v-23.4c0-6.1 5-11.1 11.1-11.1h284.5c6.1 0 11.1 5 11.1 11.1v23.4c0 26.9-21.8 48.7-48.7 48.8zM22.2 348.5v12.3c0 14.7 11.9 26.6 26.6 26.6H258c14.7 0 26.6-11.9 26.6-26.6v-12.3H22.2zM295.6 83.2H11.1C5 83.2 0 78.3 0 72.2V48.8C0 21.9 21.9 0 48.8 0H258c26.9 0 48.8 21.9 48.8 48.8v23.4c0 6.1-5 11-11.2 11zM22.2 61h262.3V48.8c0-14.7-11.9-26.5-26.5-26.6H48.8c-14.7 0-26.6 11.9-26.6 26.6V61z&quot;
                    &#x2F;&gt;
                    &lt;path className&#x3D;&quot;st2&quot; d&#x3D;&quot;M65.1 130.8L85 145.3l23.3-28.9&quot; &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M85 156.4c-2.3 0-4.6-.7-6.5-2.1l-20-14.4c-5-3.6-6.1-10.5-2.5-15.5s10.5-6.1 15.5-2.5l11.5 8.3 16.7-20.7c3.9-4.8 10.9-5.5 15.6-1.6s5.5 10.9 1.6 15.6l-23.3 28.8c-2 2.6-5.2 4.1-8.6 4.1zM241.7 142H159c-6.1-.2-11-5.3-10.8-11.4.2-5.9 4.9-10.6 10.8-10.8h82.7c6.1.2 11 5.3 10.8 11.4-.2 5.9-4.9 10.6-10.8 10.8z&quot;
                    &#x2F;&gt;
                    &lt;path className&#x3D;&quot;st2&quot; d&#x3D;&quot;M65.1 204.8L85 219.2l23.3-28.8&quot; &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M85 230.3c-2.3 0-4.6-.7-6.5-2.1l-20-14.4c-5-3.6-6.1-10.5-2.5-15.5s10.5-6.1 15.5-2.5l11.5 8.3 16.7-20.7c3.8-4.8 10.8-5.5 15.6-1.7s5.5 10.8 1.7 15.6l-23.3 28.9c-2.1 2.6-5.3 4.1-8.7 4.1zm156.7-14.4H159c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1h82.7c6.1 0 11.1 5 11.1 11.1s-5 11.1-11.1 11.1z&quot;
                    &#x2F;&gt;
                    &lt;path className&#x3D;&quot;st2&quot; d&#x3D;&quot;M65.1 278.8L85 293.2l23.3-28.9&quot; &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M85 304.3c-2.3 0-4.6-.7-6.5-2.1l-20-14.4c-5-3.6-6.1-10.5-2.5-15.5s10.5-6.1 15.5-2.5L83 278l16.7-20.7c3.9-4.8 10.9-5.5 15.6-1.7s5.5 10.9 1.7 15.6l-23.3 28.9c-2.1 2.7-5.3 4.2-8.7 4.2zm156.7-14.4H159c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1h82.7c6.1 0 11.1 5 11.1 11.1s-5 11.1-11.1 11.1z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                  &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;2. Set Profile&lt;&#x2F;h4&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Nulla vitae elit libero elit non porta eget.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] xxl:!px-[20px] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 294.2 409.6&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;rocket.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#54a8c7] text-aqua !mb-3&quot;
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
                  &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;3. Start&lt;&#x2F;h4&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Nulla vitae elit libero elit non porta eget.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.row *&#x2F;}
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
      <section id="snippet-4" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] !text-center">
            <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <div className="!relative">
                <div
                  className="shape bg-dot red rellax !w-[6rem] !h-[8rem] absolute opacity-50 bg-[radial-gradient(#e2626b_2px,transparent_2.5px)]"
                  data-rellax-speed={1}
                  style={{ top: "1rem", left: "-3.9rem" }}
                />
                <div
                  className="shape !rounded-[50%] bg-line primary rellax !w-[8rem] !h-[8rem] absolute opacity-50"
                  data-rellax-speed={1}
                  style={{ bottom: "2rem", right: "-3rem" }}
                />
                <video
                  poster="/assets/img/photos/movie.jpg"
                  className="player relative z-[2] rounded-[0.4rem]"
                  playsInline=""
                  controls=""
                  preload="none"
                >
                  <source src="/assets/media/movie.mp4" type="video/mp4" />
                  <source src="/assets/media/movie.webm" type="video/webm" />
                </video>
              </div>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
          <div className="flex flex-wrap mx-[-15px] !text-center">
            <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !mt-[3.5rem] !tracking-[0.02rem]">
                Our Process
              </h2>
              <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-0 !text-center xl:!px-10 xxl:!px-20">
                Find out everything you need to know about creating a business
                process model
              </h3>
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] process-wrapper !text-center !mt-9">
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 321.7 409.6"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/light-bulb.svg"
                    className="svg-inject icon-svg text-[#3f78e0] !mb-3 !w-[2.6rem] !h-[2.6rem] m-[0_auto]"
                  >
                    <path
                      className="lineal-fill"
                      d="M160.9 221.3c-19.1 0-37.4-7.3-51.3-20.4l51.3 127.2 51.3-127.2c-13.9 13.1-32.3 20.4-51.3 20.4z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M160.9 339.9c-4.8 0-9.1-2.9-10.9-7.4L98.6 205.3c-2.5-6 .3-12.9 6.3-15.4 4.3-1.8 9.3-.9 12.7 2.4 24.3 22.9 62.2 22.9 86.5 0 4.7-4.5 12.1-4.3 16.6.3 3.2 3.4 4.2 8.3 2.4 12.7l-51.4 127.2c-1.7 4.5-6 7.4-10.8 7.4zm-27.5-111.3l27.5 68.1 27.5-68.1c-17.9 5.9-37.2 5.9-55 0z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M86.7 316.1c-5.9 0-10.9-4.4-11.7-10.2-2.2-16.6-9.8-23.9-22.3-36.1l-2.9-2.8C28.8 246.5 0 218.4 0 151.6c0-42.9 17.1-81.9 48-110C77.7 14.8 117.7 0 160.9 0s83.2 14.8 112.8 41.6c6.7 6.1 12.8 12.7 18.3 19.9 3.1 4.1 6 8.3 8.6 12.6 1.3 2.2 2.6 4.4 3.8 6.6 2.4 4.5 4.6 9.1 6.5 13.8 1.4 3.5 2.7 7.2 3.9 10.8 4.7 14.9 7 30.5 7 46.2 0 27.9-4.9 51.2-15 71.2-.6 1.2-1.2 2.4-1.8 3.5-1.8 3.3-3.8 6.5-5.9 9.6-.7 1-1.4 2-2 3-2.6 3.6-5.3 7.1-8.5 10.7-5.6 6.5-11.5 12.2-16.6 17.2-4.7 4.5-12.1 4.4-16.6-.2-4.5-4.7-4.4-12.1.2-16.6 5-4.9 10.2-9.9 15.2-15.7 2.6-3 4.9-6 7.1-9 .6-.8 1.1-1.6 1.7-2.4 1.7-2.5 3.3-5.2 4.7-7.8.5-.9 1-1.9 1.5-2.8 8.4-16.6 12.5-36.4 12.5-60.6 0-13.2-2-26.4-5.9-39.1-1-3.1-2.1-6.1-3.3-9.1-1.6-3.9-3.4-7.8-5.4-11.6-1-1.9-2.1-3.8-3.2-5.6-6.2-10.2-13.8-19.4-22.6-27.3-25.3-22.9-59.8-35.5-97-35.5S89.1 36.1 63.8 59c-26 23.5-40.3 56.4-40.3 92.5 0 56.9 22.7 79.1 42.8 98.6l2.8 2.7c13.4 13 26.1 25.2 29.3 49.9.9 6.4-3.7 12.4-10.1 13.2-.6.2-1.1.2-1.6.2z"
                    />
                    <path
                      className="lineal-fill"
                      d="M141.9 397.8h38c3.8 0 7.4-1.5 10.1-4.2l13-13c2-2 3.4-4.6 3.9-7.4l12.4-63.7h-117l12.4 63.7c.6 2.8 2 5.4 4 7.4l13 13c2.7 2.7 6.3 4.2 10.2 4.2z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M179.8 409.6h-37.9c-6.9 0-13.6-2.7-18.5-7.7l-13-13c-3.7-3.7-6.2-8.4-7.2-13.5l-12.4-63.7c-1.2-6.4 2.9-12.5 9.3-13.8.7-.1 1.5-.2 2.2-.2h117c6.5 0 11.8 5.3 11.8 11.8 0 .8-.1 1.5-.2 2.2l-12.4 63.7c-1 5.1-3.5 9.8-7.2 13.5l-13 13c-4.8 4.9-11.5 7.7-18.5 7.7zm-63.2-88.4l9.7 49.7c.1.5.4 1 .7 1.4l13 13c.5.5 1.2.8 1.9.8h38c.7 0 1.4-.3 1.9-.8l13-13c.4-.4.6-.9.7-1.4l9.6-49.7h-88.5z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M241.5 321H80.2c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h161.4c6.5-.2 11.9 4.9 12.1 11.4.2 6.5-4.9 11.9-11.4 12.1h-.8zm-14.8 44.3H95c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h131.7c6.5.2 11.6 5.6 11.4 12.1-.2 6.2-5.2 11.2-11.4 11.4z"
                    />
                  </svg>
                  <h4 className="!mb-1">1. Concept</h4>
                  <p>
                    Nulla vitae elit libero elit non porta gravida eget metus
                    cras.
                  </p>
                </div>
                {/*/column */}
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 427.5"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/settings-3.svg"
                    className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3 m-[0_auto]"
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
                  <h4 className="!mb-1">2. Prepare</h4>
                  <p>
                    Nulla vitae elit libero elit non porta gravida eget metus
                    cras.
                  </p>
                </div>
                {/*/column */}
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 409.6 332.7"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/design.svg"
                    className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#7cb798] text-leaf !mb-3 m-[0_auto]"
                  >
                    <path
                      className="lineal-stroke"
                      d="M350.9 54.2H58.7c-6.2.2-11.4-4.7-11.5-10.9S51.8 31.9 58 31.7h292.9c6.2-.2 11.4 4.7 11.5 10.9s-4.7 11.4-10.9 11.5c-.2.1-.4.1-.6.1zM239.8 328.9a11.182 11.182 0 01-10.6-14.8c2.8-8.3 16.2-47.4 25.6-63.6-9.5-10.1-37-40.3-49.9-66.1-12.1 23.4-39.5 54.4-50.1 66 10.1 16.5 22.7 54.9 25.4 63.6.4 1.2.6 2.4.6 3.7 0 6.2-5 11.2-11.2 11.2-4.9 0-9.3-3.2-10.7-7.9v-.1c-6.6-20.7-18.4-52.9-24.3-60.3-4.8-6.1-3.4-14.5-.8-19.8.5-.9 1.1-1.8 1.8-2.6 20.6-22.3 50.7-59.4 52.7-72.4.6-3.7 3.3-10.1 14.8-10.7 12.5-.7 16.6 4.8 17.8 9.4 5.7 21.5 40 60.3 52.7 73.4.8.8 1.5 1.8 2 2.8 2.6 5.1 4 13.3-.5 19.5-5.7 7.7-18.2 41.6-24.8 61.1-1.3 4.6-5.6 7.7-10.5 7.6z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M204.8 254.9c-6.2 0-11.2-5-11.2-11.2V167c.3-6.2 5.6-10.9 11.8-10.6 5.7.3 10.3 4.9 10.6 10.6v76.7c0 6.2-5 11.2-11.2 11.2z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M366.6 244.6c-6.2 0-11.2-5-11.2-11.2v-28.6c0-83.1-67.6-150.6-150.6-150.6S54.2 121.7 54.2 204.8v28.6c-.2 6.2-5.4 11.1-11.5 10.9-5.9-.2-10.7-4.9-10.9-10.9v-28.6c-.1-95.5 77.2-172.9 172.7-173 46 0 90.1 18.2 122.6 50.8 32.6 32.3 50.9 76.3 50.9 122.2v28.6c-.1 6.2-5.2 11.2-11.4 11.2z"
                    />
                    <path
                      className="lineal-fill"
                      d="M220 74.7h-30.4c-9.1 0-16.5-7.4-16.5-16.5V27.7c0-9.1 7.4-16.5 16.5-16.5H220c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M220 85.9h-30.4c-15.3 0-27.7-12.4-27.7-27.7V27.7c0-15.3 12.4-27.7 27.7-27.7H220c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.4-63.5c-2.9 0-5.3 2.4-5.3 5.3v30.5c0 2.9 2.4 5.3 5.3 5.3H220c2.9 0 5.3-2.4 5.3-5.3V27.7c0-2.9-2.4-5.3-5.3-5.3h-30.4z"
                    />
                    <path
                      className="lineal-fill"
                      d="M381.9 275.4h-30.5c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M381.9 286.6h-30.5c-15.3 0-27.7-12.4-27.7-27.7v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3h-30.5z"
                    />
                    <path
                      className="lineal-fill"
                      d="M58.2 275.4H27.7c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5V259c0 9.1-7.4 16.5-16.5 16.4z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M58.2 286.6H27.7C12.4 286.6 0 274.2 0 258.9v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3H27.7zm234.1 109.5h-114c-6.2 0-11.2-5-11.2-11.2 0-6.2 5-11.2 11.2-11.2h114c6.2 0 11.2 5 11.2 11.2 0 6.2-5 11.2-11.2 11.2z"
                    />
                  </svg>
                  <h4 className="!mb-1">3. Retouch</h4>
                  <p>
                    Nulla vitae elit libero elit non porta gravida eget metus
                    cras.
                  </p>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}

        {/* /.container */}
      </section>
      <CodeSnippet
        code={`    &lt;section id&#x3D;&quot;snippet-4&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 lg:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
              &lt;div className&#x3D;&quot;!relative&quot;&gt;
                &lt;div
                  className&#x3D;&quot;shape bg-dot red rellax !w-[6rem] !h-[8rem] absolute opacity-50 bg-[radial-gradient(#e2626b_2px,transparent_2.5px)]&quot;
                  data-rellax-speed&#x3D;{1}
                  style&#x3D;{{ top: &quot;1rem&quot;, left: &quot;-3.9rem&quot; }}
                &#x2F;&gt;
                &lt;div
                  className&#x3D;&quot;shape !rounded-[50%] bg-line primary rellax !w-[8rem] !h-[8rem] absolute opacity-50&quot;
                  data-rellax-speed&#x3D;{1}
                  style&#x3D;{{ bottom: &quot;2rem&quot;, right: &quot;-3rem&quot; }}
                &#x2F;&gt;
                &lt;video
                  poster&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;movie.jpg&quot;
                  className&#x3D;&quot;player relative z-[2] rounded-[0.4rem]&quot;
                  playsInline&#x3D;&quot;&quot;
                  controls&#x3D;&quot;&quot;
                  preload&#x3D;&quot;none&quot;
                &gt;
                  &lt;source src&#x3D;&quot;&#x2F;assets&#x2F;media&#x2F;movie.mp4&quot; type&#x3D;&quot;video&#x2F;mp4&quot; &#x2F;&gt;
                  &lt;source src&#x3D;&quot;&#x2F;assets&#x2F;media&#x2F;movie.webm&quot; type&#x3D;&quot;video&#x2F;webm&quot; &#x2F;&gt;
                &lt;&#x2F;video&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-9&#x2F;12 lg:w-9&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
              &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !mt-[3.5rem] !tracking-[0.02rem]&quot;&gt;
                Our Process
              &lt;&#x2F;h2&gt;
              &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-0 !text-center xl:!px-10 xxl:!px-20&quot;&gt;
                Find out everything you need to know about creating a business
                process model
              &lt;&#x2F;h3&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] process-wrapper !text-center !mt-9&quot;&gt;
                &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 321.7 409.6&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;light-bulb.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg text-[#3f78e0] !mb-3 !w-[2.6rem] !h-[2.6rem] m-[0_auto]&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M160.9 221.3c-19.1 0-37.4-7.3-51.3-20.4l51.3 127.2 51.3-127.2c-13.9 13.1-32.3 20.4-51.3 20.4z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M160.9 339.9c-4.8 0-9.1-2.9-10.9-7.4L98.6 205.3c-2.5-6 .3-12.9 6.3-15.4 4.3-1.8 9.3-.9 12.7 2.4 24.3 22.9 62.2 22.9 86.5 0 4.7-4.5 12.1-4.3 16.6.3 3.2 3.4 4.2 8.3 2.4 12.7l-51.4 127.2c-1.7 4.5-6 7.4-10.8 7.4zm-27.5-111.3l27.5 68.1 27.5-68.1c-17.9 5.9-37.2 5.9-55 0z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M86.7 316.1c-5.9 0-10.9-4.4-11.7-10.2-2.2-16.6-9.8-23.9-22.3-36.1l-2.9-2.8C28.8 246.5 0 218.4 0 151.6c0-42.9 17.1-81.9 48-110C77.7 14.8 117.7 0 160.9 0s83.2 14.8 112.8 41.6c6.7 6.1 12.8 12.7 18.3 19.9 3.1 4.1 6 8.3 8.6 12.6 1.3 2.2 2.6 4.4 3.8 6.6 2.4 4.5 4.6 9.1 6.5 13.8 1.4 3.5 2.7 7.2 3.9 10.8 4.7 14.9 7 30.5 7 46.2 0 27.9-4.9 51.2-15 71.2-.6 1.2-1.2 2.4-1.8 3.5-1.8 3.3-3.8 6.5-5.9 9.6-.7 1-1.4 2-2 3-2.6 3.6-5.3 7.1-8.5 10.7-5.6 6.5-11.5 12.2-16.6 17.2-4.7 4.5-12.1 4.4-16.6-.2-4.5-4.7-4.4-12.1.2-16.6 5-4.9 10.2-9.9 15.2-15.7 2.6-3 4.9-6 7.1-9 .6-.8 1.1-1.6 1.7-2.4 1.7-2.5 3.3-5.2 4.7-7.8.5-.9 1-1.9 1.5-2.8 8.4-16.6 12.5-36.4 12.5-60.6 0-13.2-2-26.4-5.9-39.1-1-3.1-2.1-6.1-3.3-9.1-1.6-3.9-3.4-7.8-5.4-11.6-1-1.9-2.1-3.8-3.2-5.6-6.2-10.2-13.8-19.4-22.6-27.3-25.3-22.9-59.8-35.5-97-35.5S89.1 36.1 63.8 59c-26 23.5-40.3 56.4-40.3 92.5 0 56.9 22.7 79.1 42.8 98.6l2.8 2.7c13.4 13 26.1 25.2 29.3 49.9.9 6.4-3.7 12.4-10.1 13.2-.6.2-1.1.2-1.6.2z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M141.9 397.8h38c3.8 0 7.4-1.5 10.1-4.2l13-13c2-2 3.4-4.6 3.9-7.4l12.4-63.7h-117l12.4 63.7c.6 2.8 2 5.4 4 7.4l13 13c2.7 2.7 6.3 4.2 10.2 4.2z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M179.8 409.6h-37.9c-6.9 0-13.6-2.7-18.5-7.7l-13-13c-3.7-3.7-6.2-8.4-7.2-13.5l-12.4-63.7c-1.2-6.4 2.9-12.5 9.3-13.8.7-.1 1.5-.2 2.2-.2h117c6.5 0 11.8 5.3 11.8 11.8 0 .8-.1 1.5-.2 2.2l-12.4 63.7c-1 5.1-3.5 9.8-7.2 13.5l-13 13c-4.8 4.9-11.5 7.7-18.5 7.7zm-63.2-88.4l9.7 49.7c.1.5.4 1 .7 1.4l13 13c.5.5 1.2.8 1.9.8h38c.7 0 1.4-.3 1.9-.8l13-13c.4-.4.6-.9.7-1.4l9.6-49.7h-88.5z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M241.5 321H80.2c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h161.4c6.5-.2 11.9 4.9 12.1 11.4.2 6.5-4.9 11.9-11.4 12.1h-.8zm-14.8 44.3H95c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h131.7c6.5.2 11.6 5.6 11.4 12.1-.2 6.2-5.2 11.2-11.4 11.4z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                  &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;1. Concept&lt;&#x2F;h4&gt;
                  &lt;p&gt;
                    Nulla vitae elit libero elit non porta gravida eget metus
                    cras.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 512 427.5&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;settings-3.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3 m-[0_auto]&quot;
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
                  &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;2. Prepare&lt;&#x2F;h4&gt;
                  &lt;p&gt;
                    Nulla vitae elit libero elit non porta gravida eget metus
                    cras.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 409.6 332.7&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;design.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#7cb798] text-leaf !mb-3 m-[0_auto]&quot;
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
                  &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;3. Retouch&lt;&#x2F;h4&gt;
                  &lt;p&gt;
                    Nulla vitae elit libero elit non porta gravida eget metus
                    cras.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.row *&#x2F;}
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
      <section id="snippet-5" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] !mb-5">
            <div className="md:w-10/12 lg:w-10/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 447"
                data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/list.svg"
                className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4 m-[0_auto]"
              >
                <path
                  className="lineal-stroke"
                  d="M102.4 447C45.8 447 0 401.1 0 344.6s45.9-102.4 102.4-102.4c36.3 0 69.9 19.2 88.3 50.5 4.1 6.9 1.8 15.8-5.2 19.9-6.9 4.1-15.8 1.8-19.9-5.2-20.5-34.9-65.4-46.6-100.3-26.1s-46.6 65.4-26.1 100.3 65.4 46.6 100.3 26.1c10.2-6 18.8-14.3 25-24.3 4.3-6.8 13.2-8.9 20.1-4.6 6.8 4.3 8.9 13.2 4.6 20.1-18.7 30-51.5 48.2-86.8 48.1zm395.1-119.8H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.9h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.7-6.5 14-14.2 14.2z"
                />
                <circle
                  className="lineal-fill"
                  cx="102.4"
                  cy="102.4"
                  r="87.8"
                />
                <path
                  className="lineal-stroke"
                  d="M102.4 204.8C45.8 204.8 0 158.9 0 102.4S45.8 0 102.4 0s102.4 45.8 102.4 102.4c-.1 56.5-45.9 102.3-102.4 102.4zm0-175.7c-40.5 0-73.3 32.8-73.3 73.3s32.8 73.3 73.3 73.3 73.3-32.8 73.3-73.3c-.1-40.5-32.9-73.2-73.3-73.3zM497.5 85H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.8h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.5 14-14.2 14.2z"
                />
              </svg>
              <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-4 xl:!px-[4.5rem] lg:!px-[4.5rem]">
                Here are 3 working steps to organize our business projects.
              </h2>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
          <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] items-center">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
              <div className="card xl:!mr-6 lg:!mr-6">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                        <span className="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]">
                          01
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="!mb-1">Collect Ideas</h4>
                      <p className="!mb-0">
                        Nulla vitae elit libero pharetra augue dapibus.
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
              <div className="card !mt-6 xl:!ml-16 lg:!ml-16">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                        <span className="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]">
                          02
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="!mb-1">Data Analysis</h4>
                      <p className="!mb-0">
                        Vivamus sagittis lacus vel augue laoreet.
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
              <div className="card !mt-6 xl:mx-6 lg:mx-6">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                        <span className="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]">
                          03
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="!mb-1">Finalize Product</h4>
                      <p className="!mb-0">
                        Cras mattis consectetur purus sit amet.
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
              <h2 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-3">
                How It Works?
              </h2>
              <p className="lead text-[1rem] xl:!pr-5 lg:!pr-5">
                Find out everything you need to know and more about how we
                create our business process models.
              </p>
              <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Nullam quis risus eget urna mollis ornare.
              </p>
              <p className="!mb-6">
                Nullam id dolor id nibh ultricies vehicula ut id elit.
                Vestibulum id ligula porta felis euismod semper. Aenean lacinia
                bibendum nulla sed consectetur. Sed posuere consectetur est at
                lobortis. Vestibulum id ligula porta felis.
              </p>
              <a
                href="#"
                className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                Learn More
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
        code={`  &lt;section id&#x3D;&quot;snippet-5&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mb-5&quot;&gt;
            &lt;div className&#x3D;&quot;md:w-10&#x2F;12 lg:w-10&#x2F;12 xl:w-8&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
              &lt;svg
                xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                viewBox&#x3D;&quot;0 0 512 447&quot;
                data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;list.svg&quot;
                className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4 m-[0_auto]&quot;
              &gt;
                &lt;path
                  className&#x3D;&quot;lineal-stroke&quot;
                  d&#x3D;&quot;M102.4 447C45.8 447 0 401.1 0 344.6s45.9-102.4 102.4-102.4c36.3 0 69.9 19.2 88.3 50.5 4.1 6.9 1.8 15.8-5.2 19.9-6.9 4.1-15.8 1.8-19.9-5.2-20.5-34.9-65.4-46.6-100.3-26.1s-46.6 65.4-26.1 100.3 65.4 46.6 100.3 26.1c10.2-6 18.8-14.3 25-24.3 4.3-6.8 13.2-8.9 20.1-4.6 6.8 4.3 8.9 13.2 4.6 20.1-18.7 30-51.5 48.2-86.8 48.1zm395.1-119.8H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.9h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.7-6.5 14-14.2 14.2z&quot;
                &#x2F;&gt;
                &lt;circle
                  className&#x3D;&quot;lineal-fill&quot;
                  cx&#x3D;&quot;102.4&quot;
                  cy&#x3D;&quot;102.4&quot;
                  r&#x3D;&quot;87.8&quot;
                &#x2F;&gt;
                &lt;path
                  className&#x3D;&quot;lineal-stroke&quot;
                  d&#x3D;&quot;M102.4 204.8C45.8 204.8 0 158.9 0 102.4S45.8 0 102.4 0s102.4 45.8 102.4 102.4c-.1 56.5-45.9 102.3-102.4 102.4zm0-175.7c-40.5 0-73.3 32.8-73.3 73.3s32.8 73.3 73.3 73.3 73.3-32.8 73.3-73.3c-.1-40.5-32.9-73.2-73.3-73.3zM497.5 85H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.8h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.5 14-14.2 14.2z&quot;
                &#x2F;&gt;
              &lt;&#x2F;svg&gt;
              &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-4 xl:!px-[4.5rem] lg:!px-[4.5rem]&quot;&gt;
                Here are 3 working steps to organize our business projects.
              &lt;&#x2F;h2&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] items-center&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2&quot;&gt;
              &lt;div className&#x3D;&quot;card xl:!mr-6 lg:!mr-6&quot;&gt;
                &lt;div className&#x3D;&quot;card-body p-6&quot;&gt;
                  &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                    &lt;div&gt;
                      &lt;span className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]&quot;&gt;
                        &lt;span className&#x3D;&quot;number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]&quot;&gt;
                          01
                        &lt;&#x2F;span&gt;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div&gt;
                      &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Collect Ideas&lt;&#x2F;h4&gt;
                      &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                        Nulla vitae elit libero pharetra augue dapibus.
                      &lt;&#x2F;p&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card-body *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.card *&#x2F;}
              &lt;div className&#x3D;&quot;card !mt-6 xl:!ml-16 lg:!ml-16&quot;&gt;
                &lt;div className&#x3D;&quot;card-body p-6&quot;&gt;
                  &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                    &lt;div&gt;
                      &lt;span className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]&quot;&gt;
                        &lt;span className&#x3D;&quot;number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]&quot;&gt;
                          02
                        &lt;&#x2F;span&gt;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div&gt;
                      &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Data Analysis&lt;&#x2F;h4&gt;
                      &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                        Vivamus sagittis lacus vel augue laoreet.
                      &lt;&#x2F;p&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card-body *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.card *&#x2F;}
              &lt;div className&#x3D;&quot;card !mt-6 xl:mx-6 lg:mx-6&quot;&gt;
                &lt;div className&#x3D;&quot;card-body p-6&quot;&gt;
                  &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                    &lt;div&gt;
                      &lt;span className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]&quot;&gt;
                        &lt;span className&#x3D;&quot;number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]&quot;&gt;
                          03
                        &lt;&#x2F;span&gt;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div&gt;
                      &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Finalize Product&lt;&#x2F;h4&gt;
                      &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                        Cras mattis consectetur purus sit amet.
                      &lt;&#x2F;p&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card-body *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.card *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;column *&#x2F;}
            &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
              &lt;h2 className&#x3D;&quot;!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-3&quot;&gt;
                How It Works?
              &lt;&#x2F;h2&gt;
              &lt;p className&#x3D;&quot;lead text-[1rem] xl:!pr-5 lg:!pr-5&quot;&gt;
                Find out everything you need to know and more about how we
                create our business process models.
              &lt;&#x2F;p&gt;
              &lt;p&gt;
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Nullam quis risus eget urna mollis ornare.
              &lt;&#x2F;p&gt;
              &lt;p className&#x3D;&quot;!mb-6&quot;&gt;
                Nullam id dolor id nibh ultricies vehicula ut id elit.
                Vestibulum id ligula porta felis euismod semper. Aenean lacinia
                bibendum nulla sed consectetur. Sed posuere consectetur est at
                lobortis. Vestibulum id ligula porta felis.
              &lt;&#x2F;p&gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
              &gt;
                Learn More
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
      <section id="snippet-6" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
            <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
              <figure className="m-0 p-0">
                <img
                  className="w-auto"
                  srcSet="/assets/img/illustrations/i3@2x.png 2x"
                  alt="image"
                  width="800"
                  height="573"
                  src="/assets/img/illustrations/i3.png"
                />
              </figure>
            </div>
            {/*/column */}
            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
              <h2 className="!text-[.75rem] uppercase text-line relative align-top !pl-[1.4rem] inline-flex !tracking-[0.02rem] !leading-[1.35] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0] !text-[#3f78e0] !mb-3">
                How It Works?
              </h2>
              <h3 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-7 xxl:!pr-5">
                Everything you need on creating a business process.
              </h3>
              <div className="flex flex-row !mb-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 321.7 409.6"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/light-bulb.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#3f78e0] !mr-4"
                  >
                    <path
                      className="lineal-fill"
                      d="M160.9 221.3c-19.1 0-37.4-7.3-51.3-20.4l51.3 127.2 51.3-127.2c-13.9 13.1-32.3 20.4-51.3 20.4z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M160.9 339.9c-4.8 0-9.1-2.9-10.9-7.4L98.6 205.3c-2.5-6 .3-12.9 6.3-15.4 4.3-1.8 9.3-.9 12.7 2.4 24.3 22.9 62.2 22.9 86.5 0 4.7-4.5 12.1-4.3 16.6.3 3.2 3.4 4.2 8.3 2.4 12.7l-51.4 127.2c-1.7 4.5-6 7.4-10.8 7.4zm-27.5-111.3l27.5 68.1 27.5-68.1c-17.9 5.9-37.2 5.9-55 0z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M86.7 316.1c-5.9 0-10.9-4.4-11.7-10.2-2.2-16.6-9.8-23.9-22.3-36.1l-2.9-2.8C28.8 246.5 0 218.4 0 151.6c0-42.9 17.1-81.9 48-110C77.7 14.8 117.7 0 160.9 0s83.2 14.8 112.8 41.6c6.7 6.1 12.8 12.7 18.3 19.9 3.1 4.1 6 8.3 8.6 12.6 1.3 2.2 2.6 4.4 3.8 6.6 2.4 4.5 4.6 9.1 6.5 13.8 1.4 3.5 2.7 7.2 3.9 10.8 4.7 14.9 7 30.5 7 46.2 0 27.9-4.9 51.2-15 71.2-.6 1.2-1.2 2.4-1.8 3.5-1.8 3.3-3.8 6.5-5.9 9.6-.7 1-1.4 2-2 3-2.6 3.6-5.3 7.1-8.5 10.7-5.6 6.5-11.5 12.2-16.6 17.2-4.7 4.5-12.1 4.4-16.6-.2-4.5-4.7-4.4-12.1.2-16.6 5-4.9 10.2-9.9 15.2-15.7 2.6-3 4.9-6 7.1-9 .6-.8 1.1-1.6 1.7-2.4 1.7-2.5 3.3-5.2 4.7-7.8.5-.9 1-1.9 1.5-2.8 8.4-16.6 12.5-36.4 12.5-60.6 0-13.2-2-26.4-5.9-39.1-1-3.1-2.1-6.1-3.3-9.1-1.6-3.9-3.4-7.8-5.4-11.6-1-1.9-2.1-3.8-3.2-5.6-6.2-10.2-13.8-19.4-22.6-27.3-25.3-22.9-59.8-35.5-97-35.5S89.1 36.1 63.8 59c-26 23.5-40.3 56.4-40.3 92.5 0 56.9 22.7 79.1 42.8 98.6l2.8 2.7c13.4 13 26.1 25.2 29.3 49.9.9 6.4-3.7 12.4-10.1 13.2-.6.2-1.1.2-1.6.2z"
                    />
                    <path
                      className="lineal-fill"
                      d="M141.9 397.8h38c3.8 0 7.4-1.5 10.1-4.2l13-13c2-2 3.4-4.6 3.9-7.4l12.4-63.7h-117l12.4 63.7c.6 2.8 2 5.4 4 7.4l13 13c2.7 2.7 6.3 4.2 10.2 4.2z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M179.8 409.6h-37.9c-6.9 0-13.6-2.7-18.5-7.7l-13-13c-3.7-3.7-6.2-8.4-7.2-13.5l-12.4-63.7c-1.2-6.4 2.9-12.5 9.3-13.8.7-.1 1.5-.2 2.2-.2h117c6.5 0 11.8 5.3 11.8 11.8 0 .8-.1 1.5-.2 2.2l-12.4 63.7c-1 5.1-3.5 9.8-7.2 13.5l-13 13c-4.8 4.9-11.5 7.7-18.5 7.7zm-63.2-88.4l9.7 49.7c.1.5.4 1 .7 1.4l13 13c.5.5 1.2.8 1.9.8h38c.7 0 1.4-.3 1.9-.8l13-13c.4-.4.6-.9.7-1.4l9.6-49.7h-88.5z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M241.5 321H80.2c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h161.4c6.5-.2 11.9 4.9 12.1 11.4.2 6.5-4.9 11.9-11.4 12.1h-.8zm-14.8 44.3H95c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h131.7c6.5.2 11.6 5.6 11.4 12.1-.2 6.2-5.2 11.2-11.4 11.4z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="!mb-1">Collect Ideas</h4>
                  <p className="!mb-1">
                    Nulla vitae elit libero pharetra augue dapibus.
                  </p>
                </div>
              </div>
              <div className="flex flex-row !mb-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 408.1 409.6"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/pie-chart-2.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#45c4a0] text-green !mr-4"
                  >
                    <path
                      className="lineal-stroke"
                      d="M396.3 192.3h-33.4c-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6h19.7C363.2 71.1 268.1 7.3 170.1 26.6c-4.2.8-8.4 1.8-12.6 2.9L235.1 169h72c6.4 0 11.6 5.2 11.6 11.6 0 6.4-5.2 11.6-11.6 11.6h-78.9c-4.2 0-8.1-2.3-10.1-6l-87.9-158c-3.1-5.6-1.1-12.6 4.5-15.7.7-.4 1.5-.7 2.3-1l8.1-2.5c107.8-33.1 222 27.4 255.1 135.2 2.7 8.7 4.8 17.6 6.3 26.6l1.3 8c1.1 6.3-3.2 12.3-9.5 13.3-.7.2-1.3.2-2 .2zM204.6 409.6c-20.4-.1-40.6-3.2-60.1-9.2l-8.1-2.5c-6.1-1.9-9.6-8.4-7.7-14.5.2-.8.6-1.5 1-2.2l88.4-158.3c2.1-3.7 5.9-5.9 10.1-5.9h33.2c6.4.2 11.4 5.5 11.2 11.9-.2 6.1-5.1 11.1-11.2 11.2H235l-78 139.8c96.8 26.3 196.6-30.9 222.9-127.8 1.1-4 2-8 2.8-12h-65.4c-6.4.2-11.7-4.8-11.9-11.2-.2-6.4 4.8-11.7 11.2-11.9h79.8c6.4 0 11.6 5.2 11.6 11.6 0 .6-.1 1.3-.2 1.9l-1.3 7.9C390 337 304.7 409.4 204.6 409.6z"
                    />
                    <path
                      className="lineal-fill"
                      d="M93 361.8C6 300.1-14.5 179.6 47.1 92.6c12.7-17.9 28.4-33.5 46.3-46.2l6.2-4.4 90 161.7-90.4 162.5-6.2-4.4z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M99.2 377.8c-2.4 0-4.7-.7-6.7-2.1l-6.2-4.4C-5.9 305.9-27.7 178.2 37.7 86c13.5-19 30-35.5 49.1-48.9l6.2-4.4c5.2-3.7 12.4-2.4 16.1 2.8.2.3.5.7.7 1.1l90 161.7c1.9 3.5 1.9 7.8 0 11.3L109.4 372c-1.6 2.9-4.3 4.9-7.6 5.7-.8 0-1.7.1-2.6.1zM95.8 59C15.6 119.1-.7 232.9 59.4 313.1c10.2 13.7 22.4 25.8 36 36.1l81-145.4L95.8 59z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="!mb-1">Data Analysis</h4>
                  <p className="!mb-1">
                    Vivamus sagittis lacus augue laoreet vel.
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 409.6 332.7"
                    data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/design.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#fab758] text-yellow !mr-4"
                  >
                    <path
                      className="lineal-stroke"
                      d="M350.9 54.2H58.7c-6.2.2-11.4-4.7-11.5-10.9S51.8 31.9 58 31.7h292.9c6.2-.2 11.4 4.7 11.5 10.9s-4.7 11.4-10.9 11.5c-.2.1-.4.1-.6.1zM239.8 328.9a11.182 11.182 0 01-10.6-14.8c2.8-8.3 16.2-47.4 25.6-63.6-9.5-10.1-37-40.3-49.9-66.1-12.1 23.4-39.5 54.4-50.1 66 10.1 16.5 22.7 54.9 25.4 63.6.4 1.2.6 2.4.6 3.7 0 6.2-5 11.2-11.2 11.2-4.9 0-9.3-3.2-10.7-7.9v-.1c-6.6-20.7-18.4-52.9-24.3-60.3-4.8-6.1-3.4-14.5-.8-19.8.5-.9 1.1-1.8 1.8-2.6 20.6-22.3 50.7-59.4 52.7-72.4.6-3.7 3.3-10.1 14.8-10.7 12.5-.7 16.6 4.8 17.8 9.4 5.7 21.5 40 60.3 52.7 73.4.8.8 1.5 1.8 2 2.8 2.6 5.1 4 13.3-.5 19.5-5.7 7.7-18.2 41.6-24.8 61.1-1.3 4.6-5.6 7.7-10.5 7.6z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M204.8 254.9c-6.2 0-11.2-5-11.2-11.2V167c.3-6.2 5.6-10.9 11.8-10.6 5.7.3 10.3 4.9 10.6 10.6v76.7c0 6.2-5 11.2-11.2 11.2z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M366.6 244.6c-6.2 0-11.2-5-11.2-11.2v-28.6c0-83.1-67.6-150.6-150.6-150.6S54.2 121.7 54.2 204.8v28.6c-.2 6.2-5.4 11.1-11.5 10.9-5.9-.2-10.7-4.9-10.9-10.9v-28.6c-.1-95.5 77.2-172.9 172.7-173 46 0 90.1 18.2 122.6 50.8 32.6 32.3 50.9 76.3 50.9 122.2v28.6c-.1 6.2-5.2 11.2-11.4 11.2z"
                    />
                    <path
                      className="lineal-fill"
                      d="M220 74.7h-30.4c-9.1 0-16.5-7.4-16.5-16.5V27.7c0-9.1 7.4-16.5 16.5-16.5H220c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M220 85.9h-30.4c-15.3 0-27.7-12.4-27.7-27.7V27.7c0-15.3 12.4-27.7 27.7-27.7H220c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.4-63.5c-2.9 0-5.3 2.4-5.3 5.3v30.5c0 2.9 2.4 5.3 5.3 5.3H220c2.9 0 5.3-2.4 5.3-5.3V27.7c0-2.9-2.4-5.3-5.3-5.3h-30.4z"
                    />
                    <path
                      className="lineal-fill"
                      d="M381.9 275.4h-30.5c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M381.9 286.6h-30.5c-15.3 0-27.7-12.4-27.7-27.7v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3h-30.5z"
                    />
                    <path
                      className="lineal-fill"
                      d="M58.2 275.4H27.7c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5V259c0 9.1-7.4 16.5-16.5 16.4z"
                    />
                    <path
                      className="lineal-stroke"
                      d="M58.2 286.6H27.7C12.4 286.6 0 274.2 0 258.9v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3H27.7zm234.1 109.5h-114c-6.2 0-11.2-5-11.2-11.2 0-6.2 5-11.2 11.2-11.2h114c6.2 0 11.2 5 11.2 11.2 0 6.2-5 11.2-11.2 11.2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="!mb-1">Magic Touch</h4>
                  <p className="!mb-0">
                    Cras mattis consectetur purus sit amet.
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
        code={`  &lt;section id&#x3D;&quot;snippet-6&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
              &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
                &lt;img
                  className&#x3D;&quot;w-auto&quot;
                  srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i3@2x.png 2x&quot;
                  alt&#x3D;&quot;image&quot;
                  width&#x3D;&quot;800&quot;
                  height&#x3D;&quot;573&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i3.png&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;column *&#x2F;}
            &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
              &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase text-line relative align-top !pl-[1.4rem] inline-flex !tracking-[0.02rem] !leading-[1.35] before:content-[&#39;&#39;] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2&#x2F;4 before:bg-[#3f78e0] !text-[#3f78e0] !mb-3&quot;&gt;
                How It Works?
              &lt;&#x2F;h2&gt;
              &lt;h3 className&#x3D;&quot;!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-7 xxl:!pr-5&quot;&gt;
                Everything you need on creating a business process.
              &lt;&#x2F;h3&gt;
              &lt;div className&#x3D;&quot;flex flex-row !mb-4&quot;&gt;
                &lt;div&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 321.7 409.6&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;light-bulb.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#3f78e0] !mr-4&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M160.9 221.3c-19.1 0-37.4-7.3-51.3-20.4l51.3 127.2 51.3-127.2c-13.9 13.1-32.3 20.4-51.3 20.4z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M160.9 339.9c-4.8 0-9.1-2.9-10.9-7.4L98.6 205.3c-2.5-6 .3-12.9 6.3-15.4 4.3-1.8 9.3-.9 12.7 2.4 24.3 22.9 62.2 22.9 86.5 0 4.7-4.5 12.1-4.3 16.6.3 3.2 3.4 4.2 8.3 2.4 12.7l-51.4 127.2c-1.7 4.5-6 7.4-10.8 7.4zm-27.5-111.3l27.5 68.1 27.5-68.1c-17.9 5.9-37.2 5.9-55 0z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M86.7 316.1c-5.9 0-10.9-4.4-11.7-10.2-2.2-16.6-9.8-23.9-22.3-36.1l-2.9-2.8C28.8 246.5 0 218.4 0 151.6c0-42.9 17.1-81.9 48-110C77.7 14.8 117.7 0 160.9 0s83.2 14.8 112.8 41.6c6.7 6.1 12.8 12.7 18.3 19.9 3.1 4.1 6 8.3 8.6 12.6 1.3 2.2 2.6 4.4 3.8 6.6 2.4 4.5 4.6 9.1 6.5 13.8 1.4 3.5 2.7 7.2 3.9 10.8 4.7 14.9 7 30.5 7 46.2 0 27.9-4.9 51.2-15 71.2-.6 1.2-1.2 2.4-1.8 3.5-1.8 3.3-3.8 6.5-5.9 9.6-.7 1-1.4 2-2 3-2.6 3.6-5.3 7.1-8.5 10.7-5.6 6.5-11.5 12.2-16.6 17.2-4.7 4.5-12.1 4.4-16.6-.2-4.5-4.7-4.4-12.1.2-16.6 5-4.9 10.2-9.9 15.2-15.7 2.6-3 4.9-6 7.1-9 .6-.8 1.1-1.6 1.7-2.4 1.7-2.5 3.3-5.2 4.7-7.8.5-.9 1-1.9 1.5-2.8 8.4-16.6 12.5-36.4 12.5-60.6 0-13.2-2-26.4-5.9-39.1-1-3.1-2.1-6.1-3.3-9.1-1.6-3.9-3.4-7.8-5.4-11.6-1-1.9-2.1-3.8-3.2-5.6-6.2-10.2-13.8-19.4-22.6-27.3-25.3-22.9-59.8-35.5-97-35.5S89.1 36.1 63.8 59c-26 23.5-40.3 56.4-40.3 92.5 0 56.9 22.7 79.1 42.8 98.6l2.8 2.7c13.4 13 26.1 25.2 29.3 49.9.9 6.4-3.7 12.4-10.1 13.2-.6.2-1.1.2-1.6.2z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M141.9 397.8h38c3.8 0 7.4-1.5 10.1-4.2l13-13c2-2 3.4-4.6 3.9-7.4l12.4-63.7h-117l12.4 63.7c.6 2.8 2 5.4 4 7.4l13 13c2.7 2.7 6.3 4.2 10.2 4.2z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M179.8 409.6h-37.9c-6.9 0-13.6-2.7-18.5-7.7l-13-13c-3.7-3.7-6.2-8.4-7.2-13.5l-12.4-63.7c-1.2-6.4 2.9-12.5 9.3-13.8.7-.1 1.5-.2 2.2-.2h117c6.5 0 11.8 5.3 11.8 11.8 0 .8-.1 1.5-.2 2.2l-12.4 63.7c-1 5.1-3.5 9.8-7.2 13.5l-13 13c-4.8 4.9-11.5 7.7-18.5 7.7zm-63.2-88.4l9.7 49.7c.1.5.4 1 .7 1.4l13 13c.5.5 1.2.8 1.9.8h38c.7 0 1.4-.3 1.9-.8l13-13c.4-.4.6-.9.7-1.4l9.6-49.7h-88.5z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M241.5 321H80.2c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h161.4c6.5-.2 11.9 4.9 12.1 11.4.2 6.5-4.9 11.9-11.4 12.1h-.8zm-14.8 44.3H95c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h131.7c6.5.2 11.6 5.6 11.4 12.1-.2 6.2-5.2 11.2-11.4 11.4z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Collect Ideas&lt;&#x2F;h4&gt;
                  &lt;p className&#x3D;&quot;!mb-1&quot;&gt;
                    Nulla vitae elit libero pharetra augue dapibus.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;div className&#x3D;&quot;flex flex-row !mb-4&quot;&gt;
                &lt;div&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 408.1 409.6&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;pie-chart-2.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#45c4a0] text-green !mr-4&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M396.3 192.3h-33.4c-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6h19.7C363.2 71.1 268.1 7.3 170.1 26.6c-4.2.8-8.4 1.8-12.6 2.9L235.1 169h72c6.4 0 11.6 5.2 11.6 11.6 0 6.4-5.2 11.6-11.6 11.6h-78.9c-4.2 0-8.1-2.3-10.1-6l-87.9-158c-3.1-5.6-1.1-12.6 4.5-15.7.7-.4 1.5-.7 2.3-1l8.1-2.5c107.8-33.1 222 27.4 255.1 135.2 2.7 8.7 4.8 17.6 6.3 26.6l1.3 8c1.1 6.3-3.2 12.3-9.5 13.3-.7.2-1.3.2-2 .2zM204.6 409.6c-20.4-.1-40.6-3.2-60.1-9.2l-8.1-2.5c-6.1-1.9-9.6-8.4-7.7-14.5.2-.8.6-1.5 1-2.2l88.4-158.3c2.1-3.7 5.9-5.9 10.1-5.9h33.2c6.4.2 11.4 5.5 11.2 11.9-.2 6.1-5.1 11.1-11.2 11.2H235l-78 139.8c96.8 26.3 196.6-30.9 222.9-127.8 1.1-4 2-8 2.8-12h-65.4c-6.4.2-11.7-4.8-11.9-11.2-.2-6.4 4.8-11.7 11.2-11.9h79.8c6.4 0 11.6 5.2 11.6 11.6 0 .6-.1 1.3-.2 1.9l-1.3 7.9C390 337 304.7 409.4 204.6 409.6z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M93 361.8C6 300.1-14.5 179.6 47.1 92.6c12.7-17.9 28.4-33.5 46.3-46.2l6.2-4.4 90 161.7-90.4 162.5-6.2-4.4z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M99.2 377.8c-2.4 0-4.7-.7-6.7-2.1l-6.2-4.4C-5.9 305.9-27.7 178.2 37.7 86c13.5-19 30-35.5 49.1-48.9l6.2-4.4c5.2-3.7 12.4-2.4 16.1 2.8.2.3.5.7.7 1.1l90 161.7c1.9 3.5 1.9 7.8 0 11.3L109.4 372c-1.6 2.9-4.3 4.9-7.6 5.7-.8 0-1.7.1-2.6.1zM95.8 59C15.6 119.1-.7 232.9 59.4 313.1c10.2 13.7 22.4 25.8 36 36.1l81-145.4L95.8 59z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Data Analysis&lt;&#x2F;h4&gt;
                  &lt;p className&#x3D;&quot;!mb-1&quot;&gt;
                    Vivamus sagittis lacus augue laoreet vel.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                &lt;div&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 409.6 332.7&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;design.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] text-[#fab758] text-yellow !mr-4&quot;
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
                  &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;Magic Touch&lt;&#x2F;h4&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Cras mattis consectetur purus sit amet.
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
      <section id="snippet-7" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
            <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
              <figure className="m-0 p-0">
                <img
                  className="w-auto"
                  srcSet="/assets/img/illustrations/i9@2x.png 2x"
                  alt="image"
                  width="800"
                  height="556"
                  src="/assets/img/illustrations/i9.png"
                />
              </figure>
            </div>
            {/*/column */}
            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
              <h3 className="!text-[0.8rem] uppercase !text-[#aab0bc] !mb-3">
                How It Works?
              </h3>
              <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-6">
                Find out everything about creating a business model.
              </h3>
              <div className="flex flex-wrap mx-[-15px] !mt-[-20px]">
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]">
                  <h4>
                    <span className="!text-[#3f78e0]">1.</span> Creative Ideas
                  </h4>
                  <p className="!mb-0">
                    Nulla vitae elit libero a augue donec id elit non mi porta.
                  </p>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]">
                  <h4>
                    <span className="!text-[#3f78e0]">2.</span> Magic Touch
                  </h4>
                  <p className="!mb-0">
                    Nulla vitae elit libero a augue donec id elit non mi porta.
                  </p>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]">
                  <h4>
                    <span className="!text-[#3f78e0]">3.</span> Data Analysis
                  </h4>
                  <p className="!mb-0">
                    Nulla vitae elit libero a augue donec id elit non mi porta.
                  </p>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]">
                  <h4>
                    <span className="!text-[#3f78e0]">4.</span> Finalize Product
                  </h4>
                  <p className="!mb-0">
                    Nulla vitae elit libero a augue donec id elit non mi porta.
                  </p>
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
        code={`   &lt;section id&#x3D;&quot;snippet-7&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
              &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
                &lt;img
                  className&#x3D;&quot;w-auto&quot;
                  srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i9@2x.png 2x&quot;
                  alt&#x3D;&quot;image&quot;
                  width&#x3D;&quot;800&quot;
                  height&#x3D;&quot;556&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i9.png&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;column *&#x2F;}
            &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
              &lt;h3 className&#x3D;&quot;!text-[0.8rem] uppercase !text-[#aab0bc] !mb-3&quot;&gt;
                How It Works?
              &lt;&#x2F;h3&gt;
              &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-6&quot;&gt;
                Find out everything about creating a business model.
              &lt;&#x2F;h3&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-20px]&quot;&gt;
                &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]&quot;&gt;
                  &lt;h4&gt;
                    &lt;span className&#x3D;&quot;!text-[#3f78e0]&quot;&gt;1.&lt;&#x2F;span&gt; Creative Ideas
                  &lt;&#x2F;h4&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Nulla vitae elit libero a augue donec id elit non mi porta.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]&quot;&gt;
                  &lt;h4&gt;
                    &lt;span className&#x3D;&quot;!text-[#3f78e0]&quot;&gt;2.&lt;&#x2F;span&gt; Magic Touch
                  &lt;&#x2F;h4&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Nulla vitae elit libero a augue donec id elit non mi porta.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]&quot;&gt;
                  &lt;h4&gt;
                    &lt;span className&#x3D;&quot;!text-[#3f78e0]&quot;&gt;3.&lt;&#x2F;span&gt; Data Analysis
                  &lt;&#x2F;h4&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Nulla vitae elit libero a augue donec id elit non mi porta.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]&quot;&gt;
                  &lt;h4&gt;
                    &lt;span className&#x3D;&quot;!text-[#3f78e0]&quot;&gt;4.&lt;&#x2F;span&gt; Finalize Product
                  &lt;&#x2F;h4&gt;
                  &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                    Nulla vitae elit libero a augue donec id elit non mi porta.
                  &lt;&#x2F;p&gt;
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
      <section id="snippet-8" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] !text-center">
            <div className="md:w-10/12 lg:w-7/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative">
              <img
                className="!w-[5rem] absolute hidden xl:block lg:block"
                data-delay={1800}
                style={{ bottom: "-60%", right: "10%" }}
                alt="image"
                width="148"
                height="172"
                src="/assets/img/svg/doodle5.svg"
              />
              <img
                className="!h-[5rem] !absolute hidden xl:block lg:block"
                data-delay={1800}
                style={{ top: "-40%", left: "-5%" }}
                alt="image"
                width="976"
                height="117"
                src="/assets/img/svg/doodle6.svg"
              />
              <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
                How It Works
              </h2>
              <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:!text-[2rem] !mb-8 xl:!px-6">
                Download the app, create your profile and
                <span className="text-gradient gradient-7">voilà</span>, you're
                all set!
              </h3>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xxl:w-11/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <div className="flex flex-wrap mx-[-15px] !mt-[-50px] xl:!mt-0 lg:!mt-0 !text-center items-center">
                <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-[-2.5rem] lg:!mb-0 xl:!mb-0 !mt-[50px] xl:!mt-0 lg:!mt-0">
                  <figure className="mx-auto">
                    <img
                      srcSet="/assets/img/photos/devices4@2x.png 2x"
                      alt="image"
                      width="373"
                      height="682"
                      src="/assets/img/photos/devices4.png"
                    />
                  </figure>
                </div>
                {/* /column */}
                <div className="w-full xl:!hidden lg:!hidden !px-[15px] !mt-[50px] xl:!mt-0 lg:!mt-0" />
                <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full lg:!-order-1 xl:!-order-1 !mt-[50px] xl:!mt-0 lg:!mt-0">
                  <div className="!mb-8">
                    <span className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7">
                      01
                    </span>
                    <h4 className="!text-[1rem]">Download Application</h4>
                    <p className="!mb-0 xl:!px-7">
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida at eget metus.
                    </p>
                  </div>
                  {/* /div */}
                  <div>
                    <span className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7">
                      02
                    </span>
                    <h4 className="!text-[1rem]">Quick Registration</h4>
                    <p className="!mb-0 xl:!px-7">
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida at eget metus.
                    </p>
                  </div>
                  {/* /div */}
                </div>
                {/* /column */}
                <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px] xl:!mt-0 lg:!mt-0">
                  <div className="!mb-8">
                    <span className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7">
                      03
                    </span>
                    <h4 className="!text-[1rem]">Track Your Spending</h4>
                    <p className="!mb-0 xl:!px-7">
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida at eget metus.
                    </p>
                  </div>
                  {/* /div */}
                  <div>
                    <span className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7">
                      04
                    </span>
                    <h4 className="!text-[1rem]">Have Total Control</h4>
                    <p className="!mb-0 xl:!px-7">
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida at eget metus.
                    </p>
                  </div>
                  {/* /div */}
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}

        {/* /.container */}
      </section>
      <CodeSnippet
        code={` &lt;section id&#x3D;&quot;snippet-8&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
            &lt;div className&#x3D;&quot;md:w-10&#x2F;12 lg:w-7&#x2F;12 xl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative&quot;&gt;
              &lt;img
                className&#x3D;&quot;!w-[5rem] absolute hidden xl:block lg:block&quot;
                data-delay&#x3D;{1800}
                style&#x3D;{{ bottom: &quot;-60%&quot;, right: &quot;10%&quot; }}
                alt&#x3D;&quot;image&quot;
                width&#x3D;&quot;148&quot;
                height&#x3D;&quot;172&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle5.svg&quot;
              &#x2F;&gt;
              &lt;img
                className&#x3D;&quot;!h-[5rem] !absolute hidden xl:block lg:block&quot;
                data-delay&#x3D;{1800}
                style&#x3D;{{ top: &quot;-40%&quot;, left: &quot;-5%&quot; }}
                alt&#x3D;&quot;image&quot;
                width&#x3D;&quot;976&quot;
                height&#x3D;&quot;117&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle6.svg&quot;
              &#x2F;&gt;
              &lt;h2 className&#x3D;&quot;!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]&quot;&gt;
                How It Works
              &lt;&#x2F;h2&gt;
              &lt;h3 className&#x3D;&quot;!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:!text-[2rem] !mb-8 xl:!px-6&quot;&gt;
                Download the app, create your profile and
                &lt;span className&#x3D;&quot;text-gradient gradient-7&quot;&gt;voilà&lt;&#x2F;span&gt;, you&#39;re
                all set!
              &lt;&#x2F;h3&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
            &lt;div className&#x3D;&quot;xxl:w-11&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-50px] xl:!mt-0 lg:!mt-0 !text-center items-center&quot;&gt;
                &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-[-2.5rem] lg:!mb-0 xl:!mb-0 !mt-[50px] xl:!mt-0 lg:!mt-0&quot;&gt;
                  &lt;figure className&#x3D;&quot;mx-auto&quot;&gt;
                    &lt;img
                      srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices4@2x.png 2x&quot;
                      alt&#x3D;&quot;image&quot;
                      width&#x3D;&quot;373&quot;
                      height&#x3D;&quot;682&quot;
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices4.png&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;w-full xl:!hidden lg:!hidden !px-[15px] !mt-[50px] xl:!mt-0 lg:!mt-0&quot; &#x2F;&gt;
                &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full lg:!-order-1 xl:!-order-1 !mt-[50px] xl:!mt-0 lg:!mt-0&quot;&gt;
                  &lt;div className&#x3D;&quot;!mb-8&quot;&gt;
                    &lt;span className&#x3D;&quot;xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7&quot;&gt;
                      01
                    &lt;&#x2F;span&gt;
                    &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Download Application&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0 xl:!px-7&quot;&gt;
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida at eget metus.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;div *&#x2F;}
                  &lt;div&gt;
                    &lt;span className&#x3D;&quot;xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7&quot;&gt;
                      02
                    &lt;&#x2F;span&gt;
                    &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Quick Registration&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0 xl:!px-7&quot;&gt;
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida at eget metus.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;div *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px] xl:!mt-0 lg:!mt-0&quot;&gt;
                  &lt;div className&#x3D;&quot;!mb-8&quot;&gt;
                    &lt;span className&#x3D;&quot;xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7&quot;&gt;
                      03
                    &lt;&#x2F;span&gt;
                    &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Track Your Spending&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0 xl:!px-7&quot;&gt;
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida at eget metus.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;div *&#x2F;}
                  &lt;div&gt;
                    &lt;span className&#x3D;&quot;xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7&quot;&gt;
                      04
                    &lt;&#x2F;span&gt;
                    &lt;h4 className&#x3D;&quot;!text-[1rem]&quot;&gt;Have Total Control&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0 xl:!px-7&quot;&gt;
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida at eget metus.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;div *&#x2F;}
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

        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;section&gt;`}
      />
    </>
  );
}
