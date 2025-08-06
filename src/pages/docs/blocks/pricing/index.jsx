import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import PageTitle from "@/components/blocks/PageTitle";
import Pricing2 from "@/components/blocks/pricing/Pricing2";
import Pricing3 from "@/components/blocks/pricing/Pricing3";
import Pricing4 from "@/components/blocks/pricing/Pricing4";
import CodeSnippet from "@/components/common/CodeSnippet";
import Pricing1 from "@/components/common/Pricing";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Pricing || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPagePricing() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Pricing" />
      <BlockPageLinks />
      <Pricing1 />
      <CodeSnippet
        code={`
      import React, &lbrace; useState &rbrace; from &quot;react&quot;;
      
      import &lbrace; pricingPlans &rbrace; from &quot;@&#x2F;data&#x2F;pricing&quot;;
      
      export default function Pricing() &lbrace;
        const [isMonthly, setIsMonthly] &#x3D; useState(true);
        return (
          &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff] angled upper-end !relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[&#39;&#39;] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:border-[#fefefe] after:content-[&#39;&#39;] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0&quot;&gt;
            &lt;div className&#x3D;&quot;container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-10 xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]&quot;&gt;
                &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                  &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] xl:!mt-32 lg:!mt-32 !mb-3&quot;&gt;
                    Our Pricing
                  &lt;&#x2F;h2&gt;
                  &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium&quot;&gt;
                    We offer
                    &lt;span className&#x3D;&quot;relative z-[2] whitespace-nowrap after:content-[&#39;&#39;] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]&quot;&gt;
                      great prices
                    &lt;&#x2F;span&gt;
                    , premium and quality products for your business.
                  &lt;&#x2F;p&gt;
                  &lt;p&gt;
                    Enjoy a&lbrace;&quot; &quot;&rbrace;
                    &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;hover&quot;&gt;
                      free 30-day trial
                    &lt;&#x2F;a&gt;&lbrace;&quot; &quot;&rbrace;
                    and experience the full service. No credit card required!
                  &lt;&#x2F;p&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                  &gt;
                    See All Prices
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
                &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] pricing-wrapper !mt-[30px]&quot;&gt;
                  &lt;div className&#x3D;&quot;flex flex-wrap items-center switcher xl:!justify-end lg:!justify-end&quot;&gt;
                    &lt;p className&#x3D;&quot;!mb-0 !pr-[.75rem]&quot;&gt;Monthly&lt;&#x2F;p&gt;
                    &lt;div
                      onClick&#x3D;&lbrace;() &#x3D;&gt; &lbrace;
                        setIsMonthly((pre) &#x3D;&gt; !pre);
                      &rbrace;&rbrace;
                      className&#x3D;&quot;pricing-switchers w-8 h-4 clear-both !text-center !relative bg-[rgba(30,34,40,0.07)] !box-content rounded-3xl border-[0.2rem] border-solid border-transparent&quot;
                    &gt;
                      &lt;div
                        className&#x3D;&lbrace;&#x60;pricing-switcher cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercas $&lbrace;
                          isMonthly ? &quot;pricing-switcher-active !text-white&quot; : &quot;&quot;
                        &rbrace;&#x60;&rbrace;
                      &#x2F;&gt;
                      &lt;div
                        className&#x3D;&lbrace;&#x60;pricing-switcher cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercas $&lbrace;
                          !isMonthly ? &quot;pricing-switcher-active !text-white&quot; : &quot;&quot;
                        &rbrace;&#x60;&rbrace;
                      &#x2F;&gt;
                      &lt;div className&#x3D;&quot;h-4 w-4 block absolute z-[555] transition-[0.3s] duration-[ease-in-out] m-0 rounded-[100%] border-[none] left-0 top-0 !bg-[#3f78e0] opacity-100 switcher-button&quot; &#x2F;&gt;
                    &lt;&#x2F;div&gt;
                    &lt;p className&#x3D;&quot;!mb-0 !pl-3 !relative&quot;&gt;
                      Yearly &lt;span className&#x3D;&quot;!text-[#3f78e0]&quot;&gt;(Save 30%)&lt;&#x2F;span&gt;
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[25px] !relative&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;shape bg-dot primary rellax !w-[6rem] !h-[8rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] !absolute z-[1] opacity-50 !px-[15px] !mt-[30px]&quot;
                      data-rellax-speed&#x3D;&lbrace;1&rbrace;
                      style&#x3D;&lbrace;&lbrace; bottom: &quot;-0.5rem&quot;, right: &quot;-1.6rem&quot; &rbrace;&rbrace;
                    &#x2F;&gt;
                    &lt;div
                      className&#x3D;&quot;shape !rounded-[50%] bg-line red rellax !w-[8rem] !h-[8rem] absolute z-[1] opacity-50&quot;
                      data-rellax-speed&#x3D;&lbrace;1&rbrace;
                      style&#x3D;&lbrace;&lbrace; top: &quot;-1rem&quot;, left: &quot;-2rem&quot; &rbrace;&rbrace;
                    &#x2F;&gt;
                    &lbrace;pricingPlans.map((plan, index) &#x3D;&gt; (
                      &lt;div
                        key&#x3D;&lbrace;index&rbrace;
                        className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;
                      &gt;
                        &lt;div className&#x3D;&quot;pricing card&quot;&gt;
                          &lt;div className&#x3D;&quot;card-body !p-[3rem_40px_3.5rem_40px]&quot;&gt;
                            &lt;div className&#x3D;&quot;prices !text-[#343f52]&quot;&gt;
                              &lt;div
                                className&#x3D;&lbrace;&#x60;price $&lbrace;
                                  isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                                &rbrace;  !justify-start&#x60;&rbrace;
                              &gt;
                                &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                                &lt;span className&#x3D;&quot;price-value&quot;&gt;
                                  &lbrace;plan.monthlyPrice&rbrace;
                                &lt;&#x2F;span&gt;
                                &lt;span className&#x3D;&quot;price-duration&quot;&gt;mo&lt;&#x2F;span&gt;
                              &lt;&#x2F;div&gt;
                              &lt;div
                                className&#x3D;&lbrace;&#x60;price $&lbrace;
                                  !isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                                &rbrace;  !justify-start&#x60;&rbrace;
                              &gt;
                                &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                                &lt;span className&#x3D;&quot;price-value&quot;&gt;
                                  &lbrace;plan.yearlyPrice&rbrace;
                                &lt;&#x2F;span&gt;
                                &lt;span className&#x3D;&quot;price-duration&quot;&gt;yr&lt;&#x2F;span&gt;
                              &lt;&#x2F;div&gt;
                            &lt;&#x2F;div&gt;
                            &lt;h4 className&#x3D;&quot;card-title !mt-2&quot;&gt;&lbrace;plan.title&rbrace;&lt;&#x2F;h4&gt;
                            &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8&quot;&gt;
                              &lbrace;plan.features.map((feature, idx) &#x3D;&gt; (
                                &lt;li
                                  key&#x3D;&lbrace;idx&rbrace;
                                  className&#x3D;&quot;relative !pl-[1.5rem] !mt-[0.35rem]&quot;
                                &gt;
                                  &lt;i
                                    className&#x3D;&lbrace;&#x60;uil $&lbrace;
                                      feature.included ? &quot;uil-check&quot; : &quot;uil-times&quot;
                                    &rbrace; absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center $&lbrace;
                                      feature.included
                                        ? &quot;bg-[#e6e8f7] !text-[#3f78e0]&quot;
                                        : &quot;!bg-[#fae3e4] !text-[#e2626b]&quot;
                                    &rbrace; rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&#x60;&rbrace;
                                  &#x2F;&gt;
                                  &lt;span&gt;&lbrace;feature.text&rbrace;&lt;&#x2F;span&gt;
                                &lt;&#x2F;li&gt;
                              ))&rbrace;
                            &lt;&#x2F;ul&gt;
                            &lt;a
                              href&#x3D;&quot;#&quot;
                              className&#x3D;&quot;btn btn-purple !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !text-[.85rem] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                            &gt;
                              Choose Plan
                            &lt;&#x2F;a&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    ))&rbrace;
                    &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-50px] xl:mx-[-35px] lg:mx-[-20px] items-center&quot;&gt;
                &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative&quot;&gt;
                  &lt;div
                    className&#x3D;&quot;shape bg-dot primary rellax !w-[8rem] !h-[8rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50&quot;
                    data-rellax-speed&#x3D;&lbrace;1&rbrace;
                    style&#x3D;&lbrace;&lbrace; top: 0, left: &quot;-1.4rem&quot;, zIndex: 0 &rbrace;&rbrace;
                  &#x2F;&gt;
                  &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
                    &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full&quot;&gt;
                      &lt;figure className&#x3D;&quot;!rounded-[.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;!rounded-[.4rem]&quot;
                          srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g5@2x.jpg 2x&quot;
                          alt&#x3D;&quot;image&quot;
                          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g5.jpg&quot;
                          width&#x3D;&lbrace;350&rbrace;
                          height&#x3D;&lbrace;350&rbrace;
                        &#x2F;&gt;
                      &lt;&#x2F;figure&gt;
                    &lt;&#x2F;div&gt;
                    &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
                    &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full&quot;&gt;
                      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
                        &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2&quot;&gt;
                          &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                            &lt;img
                              className&#x3D;&quot;rounded-[0.4rem]&quot;
                              srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g6@2x.jpg 2x&quot;
                              alt&#x3D;&quot;image&quot;
                              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g6.jpg&quot;
                              width&#x3D;&lbrace;375&rbrace;
                              height&#x3D;&lbrace;250&rbrace;
                            &#x2F;&gt;
                          &lt;&#x2F;figure&gt;
                        &lt;&#x2F;div&gt;
                        &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
                        &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 lg:w-10&#x2F;12 md:w-10&#x2F;12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full&quot;&gt;
                          &lt;div className&#x3D;&quot;card !bg-[#e0e9fa] !text-center&quot;&gt;
                            &lt;div className&#x3D;&quot;card-body !py-12 !px-[2rem] counter-wrapper&quot;&gt;
                              &lt;h3 className&#x3D;&quot;counter !whitespace-nowrap xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2&quot;&gt;
                                5000+
                              &lt;&#x2F;h3&gt;
                              &lt;p className&#x3D;&quot;!mb-0 text-[0.8rem] font-medium&quot;&gt;
                                Satisfied Customers
                              &lt;&#x2F;p&gt;
                            &lt;&#x2F;div&gt;
                            &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
                          &lt;&#x2F;div&gt;
                          &lbrace;&#x2F;*&#x2F;.card *&#x2F;&rbrace;
                        &lt;&#x2F;div&gt;
                        &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
                      &lt;&#x2F;div&gt;
                      &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
                    &lt;&#x2F;div&gt;
                    &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
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
                &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
          &lt;&#x2F;section&gt;
        );
      &rbrace;`}
      />
      <Pricing2 />
      <CodeSnippet
        code={`
&quot;use client&quot;;

import &lbrace; useState &rbrace; from &quot;react&quot;;
const basicFeatures &#x3D; [
  &lbrace; text: &quot;1 Project&quot;, included: true &rbrace;,
  &lbrace; text: &quot;100K API Access&quot;, included: true &rbrace;,
  &lbrace; text: &quot;100MB Storage&quot;, included: true &rbrace;,
  &lbrace; text: &quot;Weekly Reports&quot;, included: false &rbrace;,
  &lbrace; text: &quot;7&#x2F;24 Support&quot;, included: false &rbrace;,
];

const premiumFeatures &#x3D; [
  &lbrace; text: &quot;5 Projects&quot;, included: true &rbrace;,
  &lbrace; text: &quot;100K API Access&quot;, included: true &rbrace;,
  &lbrace; text: &quot;200MB Storage&quot;, included: true &rbrace;,
  &lbrace; text: &quot;Weekly Reports&quot;, included: true &rbrace;,
  &lbrace; text: &quot;7&#x2F;24 Support&quot;, included: false &rbrace;,
];

const corporateFeatures &#x3D; [
  &lbrace; text: &quot;20 Projects&quot;, included: true &rbrace;,
  &lbrace; text: &quot;300K API Access&quot;, included: true &rbrace;,
  &lbrace; text: &quot;500MB Storage&quot;, included: true &rbrace;,
  &lbrace; text: &quot;Weekly Reports&quot;, included: true &rbrace;,
  &lbrace; text: &quot;7&#x2F;24 Support&quot;, included: true &rbrace;,
];

export default function Pricing2() &lbrace;
  const [isMonthly, setIsMonthly] &#x3D; useState(true);
  return (
    &lt;section id&#x3D;&quot;snippet-2&quot; className&#x3D;&quot;wrapper !bg-[#ffffff]  &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;lg:w-10&#x2F;12 xl:w-9&#x2F;12 xxl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]&quot;&gt;
              Our Pricing
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-[5rem] xl:!mb-6 lg:!mb-6 md:!mb-6 lg:!px-10 xl:!px-10&quot;&gt;
              We offer great prices, premium products and quality service for
              your business.
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
        &lt;div className&#x3D;&quot;pricing-wrapper !relative&quot;&gt;
          &lt;div
            className&#x3D;&quot;shape bg-dot primary rellax !w-[6rem] !h-[8rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50&quot;
            data-rellax-speed&#x3D;&lbrace;1&rbrace;
            style&#x3D;&lbrace;&lbrace; top: &quot;2rem&quot;, right: &quot;-2.4rem&quot; &rbrace;&rbrace;
          &#x2F;&gt;
          &lt;div
            className&#x3D;&quot;shape !rounded-[50%] bg-line red rellax !w-[8rem] !h-[8rem] hidden xl:block lg:block absolute z-[1] opacity-50&quot;
            data-rellax-speed&#x3D;&lbrace;1&rbrace;
            style&#x3D;&lbrace;&lbrace; bottom: &quot;0.5rem&quot;, left: &quot;-2.5rem&quot; &rbrace;&rbrace;
          &#x2F;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap items-center justify-center switcher&quot;&gt;
            &lt;p className&#x3D;&quot;!mb-0 !pr-[.75rem]&quot;&gt;Monthly&lt;&#x2F;p&gt;
            &lt;div
              onClick&#x3D;&lbrace;() &#x3D;&gt; &lbrace;
                setIsMonthly((pre) &#x3D;&gt; !pre);
              &rbrace;&rbrace;
              className&#x3D;&quot;pricing-switchers w-8 h-4 clear-both !text-center !relative bg-[rgba(30,34,40,0.07)] !box-content rounded-3xl border-[0.2rem] border-solid border-transparent&quot;
            &gt;
              &lt;div
                className&#x3D;&lbrace;&#x60;pricing-switcher cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercas $&lbrace;
                  isMonthly ? &quot;pricing-switcher-active !text-white&quot; : &quot;&quot;
                &rbrace;&#x60;&rbrace;
              &#x2F;&gt;
              &lt;div
                className&#x3D;&lbrace;&#x60;pricing-switcher cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercas $&lbrace;
                  !isMonthly ? &quot;pricing-switcher-active !text-white&quot; : &quot;&quot;
                &rbrace;&#x60;&rbrace;
              &#x2F;&gt;
              &lt;div className&#x3D;&quot;h-4 w-4 block absolute z-[555] transition-[0.3s] duration-[ease-in-out] m-0 rounded-[100%] border-[none] left-0 top-0 !bg-[#3f78e0] opacity-100 switcher-button&quot; &#x2F;&gt;
            &lt;&#x2F;div&gt;
            &lt;p className&#x3D;&quot;!mb-0 !pl-3 !relative&quot;&gt;Yearly&lt;&#x2F;p&gt;
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-3 xl:!mt-5 lg:!mt-5 md:!mt-5&quot;&gt;
            &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
              &lt;div className&#x3D;&quot;pricing card !text-center&quot;&gt;
                &lt;div className&#x3D;&quot;card-body flex-[1_1_auto]  pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 512 412.9&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;shopping-basket.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg text-[#3f78e0] !mb-3 !w-[2.6rem] !h-[2.6rem] m-[0_auto]&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M453.8 238.1l-9.6 76.3H67.8l-9.6-76.3z&quot;
                    &#x2F;&gt;
                    &lt;circle
                      className&#x3D;&quot;lineal-fill&quot;
                      cx&#x3D;&quot;178.1&quot;
                      cy&#x3D;&quot;149.9&quot;
                      r&#x3D;&quot;35.1&quot;
                    &#x2F;&gt;
                    &lt;circle
                      className&#x3D;&quot;lineal-fill&quot;
                      cx&#x3D;&quot;333.9&quot;
                      cy&#x3D;&quot;149.9&quot;
                      r&#x3D;&quot;35.1&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M498.6 136.5h-60.2c-7.4-.2-13.6 5.7-13.8 13.1-.2 7.4 5.7 13.6 13.1 13.8h11.8l-7.5 61.3H70.1l-7.5-61.3h68.9c7.4 25.7 34.3 40.6 60 33.1 16-4.6 28.5-17.1 33.1-33.1h62.6c7.4 25.7 34.3 40.6 60 33.2 25.7-7.4 40.6-34.3 33.2-60-4.9-17.1-18.9-30.1-36.3-33.9l-39-94.2c-2.8-6.9-10.7-10.1-17.6-7.3s-10.1 10.7-7.3 17.6l35.7 86.2c-14 5.5-24.6 17.2-28.8 31.6h-62.6c-4.2-14.4-14.8-26.1-28.8-31.7l35.7-86.2c2.8-6.9-.4-14.7-7.3-17.6s-14.7.4-17.6 7.3l-39.1 94.2c-17.4 3.8-31.3 16.9-36.2 33.9H13.4C6 136.7.1 142.9.3 150.3c.2 7.1 5.9 12.9 13.1 13.1h22.1l29.8 237.8c.9 6.7 6.6 11.8 13.3 11.8h354.8c6.8 0 12.5-5 13.3-11.8l29.8-237.8h22c7.4-.2 13.3-6.4 13.1-13.8-.2-7.2-5.9-12.9-13-13.1zm-165-8.2c.4 0 .9.1 1.3.1h.7c11.9.9 20.8 11.3 19.9 23.2-.9 11.9-11.3 20.8-23.2 19.9-11.9-.9-20.8-11.3-19.9-23.2.8-11.1 10-19.7 21.2-20zm-157.1.1h.7c.4 0 .9-.1 1.3-.1 11.9.2 21.4 10 21.3 22-.2 11.9-10 21.4-22 21.3-11.9-.2-21.4-10-21.3-22 .2-11.2 8.9-20.4 20-21.2zm-103 123.1h365.1l-6.3 49.5H79.7l-6.2-49.5zM90.4 386L83 327.9h345.9l-7.4 58.1H90.4z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                  &lt;h4 className&#x3D;&quot;card-title&quot;&gt;Basic Plan&lt;&#x2F;h4&gt;
                  &lt;div className&#x3D;&quot;prices !text-[#343f52]&quot;&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;9&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;mo&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        !isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;99&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;yr&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.prices *&#x2F;&rbrace;
                  &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8 text-left&quot;&gt;
                    &lbrace;basicFeatures.map((feature, index) &#x3D;&gt; &lbrace;
                      const iconClass &#x3D; feature.included
                        ? &quot;uil-check&quot;
                        : &quot;uil-times bullet-soft-red&quot;;
                      const bgColor &#x3D; feature.included ? &quot;#dce7f9&quot; : &quot;#fae3e4&quot;;
                      const textColor &#x3D; feature.included
                        ? &quot;#3f78e0&quot;
                        : &quot;#e2626b&quot;;
                      const iconContent &#x3D; feature.included ? &quot;e9dd&quot; : &quot;ed3b&quot;;

                      return (
                        &lt;li
                          key&#x3D;&lbrace;index&rbrace;
                          className&#x3D;&lbrace;&#x60;relative !pl-6 $&lbrace;
                            index !&#x3D;&#x3D; 0 ? &quot;!mt-[0.35rem]&quot; : &quot;&quot;
                          &rbrace;&#x60;&rbrace;
                        &gt;
                          &lt;i
                            className&#x3D;&lbrace;&#x60;$&lbrace;iconClass&rbrace; absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center rounded-[100%] top-[0.2rem] before:align-middle before:table-cell&#x60;&rbrace;
                            style&#x3D;&lbrace;&lbrace;
                              backgroundColor: bgColor,
                              color: textColor,
                            &rbrace;&rbrace;
                          &#x2F;&gt;
                          &lt;span&gt;
                            &lt;strong&gt;&lbrace;feature.text.split(&quot; &quot;)[0]&rbrace;&lt;&#x2F;strong&gt;&lbrace;&quot; &quot;&rbrace;
                            &lbrace;feature.text.split(&quot; &quot;).slice(1).join(&quot; &quot;)&rbrace;
                          &lt;&#x2F;span&gt;
                        &lt;&#x2F;li&gt;
                      );
                    &rbrace;)&rbrace;
                  &lt;&#x2F;ul&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                  &gt;
                    Choose Plan
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.pricing *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
            &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full popular !mt-[30px]&quot;&gt;
              &lt;div className&#x3D;&quot;pricing card !text-center&quot;&gt;
                &lt;div className&#x3D;&quot;card-body flex-[1_1_auto]  pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 479.8 512&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;home.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg text-[#3f78e0] !mb-3 !w-[2.6rem] !h-[2.6rem] m-[0_auto]&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M308 512H61.9c-8 0-14.4-6.5-14.4-14.4V227.2c0-4.3 2-8.4 5.4-11.2l178-143.7c5.3-4.3 12.8-4.3 18.1 0L427 216c3.4 2.7 5.4 6.9 5.4 11.2v269.6c-.2 8-6.8 14.3-14.8 14-7.7-.2-13.8-6.4-14-14V234.1L239.9 102 76.3 234.1v249.1H308c8 .2 14.3 6.8 14 14.8-.2 7.6-6.3 13.8-14 14z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M465.4 209.8c-3.3 0-6.4-1.1-9-3.2L239.9 32.9 23.5 206.7c-6.2 5-15.3 4-20.3-2.2s-4-15.3 2.2-20.3l225.5-181c5.3-4.2 12.8-4.2 18.1 0l225.5 181c6.2 5 7.2 14.1 2.2 20.3-2.8 3.3-6.9 5.3-11.3 5.3z&quot;
                    &#x2F;&gt;
                    &lt;ellipse
                      transform&#x3D;&quot;rotate(-80.781 239.904 207.686)&quot;
                      className&#x3D;&quot;lineal-fill&quot;
                      cx&#x3D;&quot;239.9&quot;
                      cy&#x3D;&quot;207.7&quot;
                      rx&#x3D;&quot;42.9&quot;
                      ry&#x3D;&lbrace;43&rbrace;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M239.9 265.1c-31.7 0-57.4-25.7-57.4-57.4s25.7-57.4 57.4-57.4 57.4 25.7 57.4 57.4c-.1 31.7-25.7 57.3-57.4 57.4zm0-85.9c-15.8 0-28.5 12.8-28.5 28.5s12.8 28.5 28.5 28.5 28.5-12.8 28.5-28.5c0-15.8-12.8-28.5-28.5-28.5z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M171.8 325.7h136.1v171.9H171.8z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M308 512H171.8c-8 0-14.4-6.5-14.4-14.4V325.7c0-8 6.5-14.4 14.4-14.4H308c8 0 14.4 6.5 14.4 14.4v171.9c0 7.9-6.4 14.4-14.4 14.4zm-121.8-28.9h107.3v-143H186.2v143zm234.2-317.7c-7.9 0-14.4-6.5-14.4-14.4V73.3h-28.6c-8 0-14.4-6.5-14.4-14.4s6.5-14.4 14.4-14.4h43c8 0 14.4 6.5 14.4 14.4v92c0 8-6.4 14.4-14.4 14.5 0-.1 0 0 0 0z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                  &lt;h4 className&#x3D;&quot;card-title&quot;&gt;Premium Plan&lt;&#x2F;h4&gt;
                  &lt;div className&#x3D;&quot;prices !text-[#343f52]&quot;&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;19&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;mo&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        !isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;199&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;yr&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.prices *&#x2F;&rbrace;
                  &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8 text-left&quot;&gt;
                    &lbrace;premiumFeatures.map((feature, index) &#x3D;&gt; &lbrace;
                      const iconClass &#x3D; feature.included
                        ? &quot;uil-check&quot;
                        : &quot;uil-times bullet-soft-red&quot;;
                      const bgColor &#x3D; feature.included ? &quot;#dce7f9&quot; : &quot;#fae3e4&quot;;
                      const textColor &#x3D; feature.included
                        ? &quot;#3f78e0&quot;
                        : &quot;#e2626b&quot;;

                      return (
                        &lt;li
                          key&#x3D;&lbrace;index&rbrace;
                          className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;
                        &gt;
                          &lt;i
                            className&#x3D;&lbrace;&#x60;$&lbrace;iconClass&rbrace; absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center rounded-[100%] top-[0.2rem] before:align-middle before:table-cell&#x60;&rbrace;
                            style&#x3D;&lbrace;&lbrace;
                              backgroundColor: bgColor,
                              color: textColor,
                            &rbrace;&rbrace;
                          &#x2F;&gt;
                          &lt;span&gt;
                            &lt;strong&gt;&lbrace;feature.text.split(&quot; &quot;)[0]&rbrace;&lt;&#x2F;strong&gt;&lbrace;&quot; &quot;&rbrace;
                            &lbrace;feature.text.split(&quot; &quot;).slice(1).join(&quot; &quot;)&rbrace;
                          &lt;&#x2F;span&gt;
                        &lt;&#x2F;li&gt;
                      );
                    &rbrace;)&rbrace;
                  &lt;&#x2F;ul&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                  &gt;
                    Choose Plan
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.pricing *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
            &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 md:!ml-[25%] w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-0 lg:!ml-0 !mt-[30px]&quot;&gt;
              &lt;div className&#x3D;&quot;pricing card !text-center&quot;&gt;
                &lt;div className&#x3D;&quot;card-body flex-[1_1_auto]  pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]&quot;&gt;
                  &lt;svg
                    xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                    viewBox&#x3D;&quot;0 0 409.6 380.8&quot;
                    data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;briefcase-2.svg&quot;
                    className&#x3D;&quot;svg-inject icon-svg text-[#3f78e0] !mb-3 !w-[2.6rem] !h-[2.6rem] m-[0_auto]&quot;
                  &gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M299.9 104.7h-23.8V56.5c0-18.1-14.6-32.7-32.7-32.7h-77.2c-18 0-32.7 14.7-32.7 32.7v48.2h-23.8V56.5C109.8 25.3 135 0 166.2 0h77.2c31.2 0 56.4 25.3 56.5 56.5v48.2z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M360.5 380.8H49.1c-27.1 0-49-22-49.1-49.1V119.1C0 92 22 70 49.1 70h311.5c27.1 0 49 22 49.1 49.1v212.7c-.1 27.1-22.1 49-49.2 49zM49.1 93.8c-14 0-25.3 11.3-25.3 25.3v212.7c0 14 11.3 25.3 25.3 25.3h311.5c14 0 25.3-11.3 25.3-25.3V119.1c0-14-11.3-25.3-25.3-25.3H49.1z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M49.2 81.7c-18.4 0-33.3 14.8-33.3 33.2 0 2.7.3 5.3.9 7.9C35.4 197.9 103.6 254 184.2 254h41.2c80.6 0 148.8-56.1 167.3-131.2 4.3-17.8-6.6-35.8-24.5-40.2-2.6-.6-5.2-.9-7.9-.9H49.2z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M225.4 265.9h-41.2c-41.5-.1-81.8-14.2-114.3-40C38 200.5 15.3 165.2 5.4 125.6-.5 101.4 14.3 77 38.6 71.1c3.5-.9 7.1-1.3 10.7-1.3h311.1c24.9 0 45.2 20.2 45.2 45.1 0 3.6-.4 7.2-1.3 10.7-9.9 39.6-32.6 74.8-64.5 100.2-32.6 25.9-72.9 40-114.4 40.1zM49.2 93.6c-6.6 0-12.9 3-16.9 8.2-4.1 5.1-5.5 11.8-3.9 18.2 17.6 71.8 81.9 122.3 155.8 122.2h41.2c73.9.1 138.3-50.4 155.8-122.2 1.6-6.3.1-13-3.9-18.1-4.1-5.2-10.3-8.3-16.9-8.2l-311.2-.1z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M128.5 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M128.5 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-fill&quot;
                      d&#x3D;&quot;M294.9 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z&quot;
                    &#x2F;&gt;
                    &lt;path
                      className&#x3D;&quot;lineal-stroke&quot;
                      d&#x3D;&quot;M294.9 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;svg&gt;
                  &lt;h4 className&#x3D;&quot;card-title&quot;&gt;Corporate Plan&lt;&#x2F;h4&gt;
                  &lt;div className&#x3D;&quot;prices !text-[#343f52]&quot;&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;49&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;mo&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        !isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;499&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;yr&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.prices *&#x2F;&rbrace;
                  &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8 text-left&quot;&gt;
                    &lbrace;corporateFeatures.map((feature, index) &#x3D;&gt; &lbrace;
                      return (
                        &lt;li
                          key&#x3D;&lbrace;index&rbrace;
                          className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                          &lt;span&gt;
                            &lt;strong&gt;&lbrace;feature.text.split(&quot; &quot;)[0]&rbrace;&lt;&#x2F;strong&gt;&lbrace;&quot; &quot;&rbrace;
                            &lbrace;feature.text.split(&quot; &quot;).slice(1).join(&quot; &quot;)&rbrace;
                          &lt;&#x2F;span&gt;
                        &lt;&#x2F;li&gt;
                      );
                    &rbrace;)&rbrace;
                  &lt;&#x2F;ul&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                  &gt;
                    Choose Plan
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.pricing *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;*&#x2F;.pricing-wrapper *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;

      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
    &lt;&#x2F;section&gt;
  );
&rbrace;          
          `}
      />
      <Pricing3 />
      <CodeSnippet
        code={`

import &lbrace; useState &rbrace; from &quot;react&quot;;

export default function Pricing3() &lbrace;
  const [isMonthly, setIsMonthly] &#x3D; useState(true);
  return (
    &lt;section id&#x3D;&quot;snippet-3&quot; className&#x3D;&quot;wrapper !bg-[#ffffff]  &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;h2 className&#x3D;&quot;!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-7 !text-center&quot;&gt;
          Our Pricing
        &lt;&#x2F;h2&gt;
        &lt;div className&#x3D;&quot;pricing-wrapper&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap items-center justify-center switcher&quot;&gt;
            &lt;p className&#x3D;&quot;!mb-0 !pr-[.75rem]&quot;&gt;Monthly&lt;&#x2F;p&gt;
            &lt;div
              onClick&#x3D;&lbrace;() &#x3D;&gt; &lbrace;
                setIsMonthly((pre) &#x3D;&gt; !pre);
              &rbrace;&rbrace;
              className&#x3D;&quot;pricing-switchers w-8 h-4 clear-both !text-center !relative bg-[rgba(30,34,40,0.07)] !box-content rounded-3xl border-[0.2rem] border-solid border-transparent&quot;
            &gt;
              &lt;div
                className&#x3D;&lbrace;&#x60;pricing-switcher cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercas $&lbrace;
                  isMonthly ? &quot;pricing-switcher-active !text-white&quot; : &quot;&quot;
                &rbrace;&#x60;&rbrace;
              &#x2F;&gt;
              &lt;div
                className&#x3D;&lbrace;&#x60;pricing-switcher cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercas $&lbrace;
                  !isMonthly ? &quot;pricing-switcher-active !text-white&quot; : &quot;&quot;
                &rbrace;&#x60;&rbrace;
              &#x2F;&gt;
              &lt;div className&#x3D;&quot;h-4 w-4 block absolute z-[555] transition-[0.3s] duration-[ease-in-out] m-0 rounded-[100%] border-[none] left-0 top-0 !bg-[#3f78e0] opacity-100 switcher-button&quot; &#x2F;&gt;
            &lt;&#x2F;div&gt;
            &lt;p className&#x3D;&quot;!mb-0 !pl-3 !relative&quot;&gt;
              Yearly &lt;span className&#x3D;&quot;!text-[#e2626b]&quot;&gt;(Save 30%)&lt;&#x2F;span&gt;
            &lt;&#x2F;p&gt;
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-0 !mt-2&quot;&gt;
            &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] max-w-full !mt-[30px]&quot;&gt;
              &lt;div className&#x3D;&quot;pricing card !shadow-none !border-0&quot;&gt;
                &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] py-[60px] px-[40px] !border-0 border-[#fff]&quot;&gt;
                  &lt;div className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !p-0 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !rounded-[100%]&quot;&gt;
                    &lbrace;&quot; &quot;&rbrace;
                    &lt;i className&#x3D;&quot;uil uil-shopping-bag before:content-[&#39;\ecba&#39;]&quot; &#x2F;&gt;&lbrace;&quot; &quot;&rbrace;
                  &lt;&#x2F;div&gt;
                  &lt;h4 className&#x3D;&quot;card-title&quot;&gt;Basic Plan&lt;&#x2F;h4&gt;
                  &lt;div className&#x3D;&quot;prices !text-[#343f52]&quot;&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;9&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;mo&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        !isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;99&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;yr&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.prices *&#x2F;&rbrace;
                  &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8&quot;&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lt;strong&gt;1&lt;&#x2F;strong&gt; Project&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lt;strong&gt;100K&lt;&#x2F;strong&gt; API Access&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lt;strong&gt;100MB&lt;&#x2F;strong&gt; Storage&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-times bullet-soft-red absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-[&#39;\ed3b&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lbrace;&quot; &quot;&rbrace;
                        Weekly &lt;strong&gt;Reports&lt;&#x2F;strong&gt;&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-times bullet-soft-red absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-[&#39;\ed3b&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lbrace;&quot; &quot;&rbrace;
                        7&#x2F;24 &lt;strong&gt;Support&lt;&#x2F;strong&gt;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                  &lt;&#x2F;ul&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-soft-primary !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.05)]&quot;
                  &gt;
                    Choose Plan
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.pricing *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
            &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] max-w-full !mt-[30px]&quot;&gt;
              &lt;div className&#x3D;&quot;pricing card !shadow-none !border-0&quot;&gt;
                &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] py-[60px] px-[40px] !border-0 border-[#fff]&quot;&gt;
                  &lt;div className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !p-0 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !rounded-[100%]&quot;&gt;
                    &lbrace;&quot; &quot;&rbrace;
                    &lt;i className&#x3D;&quot;uil uil-shopping-cart-alt before:content-[&#39;\ecbc&#39;]&quot; &#x2F;&gt;&lbrace;&quot; &quot;&rbrace;
                  &lt;&#x2F;div&gt;
                  &lt;h4 className&#x3D;&quot;card-title&quot;&gt;Premium Plan&lt;&#x2F;h4&gt;
                  &lt;div className&#x3D;&quot;prices !text-[#343f52]&quot;&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;19&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;mo&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        !isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;199&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;yr&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.prices *&#x2F;&rbrace;
                  &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8&quot;&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lt;strong&gt;5&lt;&#x2F;strong&gt; Projects&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lt;strong&gt;100K&lt;&#x2F;strong&gt; API Access&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lt;strong&gt;200MB&lt;&#x2F;strong&gt; Storage&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lbrace;&quot; &quot;&rbrace;
                        Weekly &lt;strong&gt;Reports&lt;&#x2F;strong&gt;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-times bullet-soft-red absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !bg-[#fae3e4] !text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-[&#39;\ed3b&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lbrace;&quot; &quot;&rbrace;
                        7&#x2F;24 &lt;strong&gt;Support&lt;&#x2F;strong&gt;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                  &lt;&#x2F;ul&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-soft-primary !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.05)]&quot;
                  &gt;
                    Choose Plan
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.pricing *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
            &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] max-w-full !mt-[30px]&quot;&gt;
              &lt;div className&#x3D;&quot;pricing card !bg-[#edf2fc]&quot;&gt;
                &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] py-[60px] px-[40px] !border-0 border-[#fff]&quot;&gt;
                  &lt;div className&#x3D;&quot;icon btn btn-circle btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !p-0 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !rounded-[100%]&quot;&gt;
                    &lbrace;&quot; &quot;&rbrace;
                    &lt;i className&#x3D;&quot;uil uil-store before:content-[&#39;\ed04&#39;]&quot; &#x2F;&gt;&lbrace;&quot; &quot;&rbrace;
                  &lt;&#x2F;div&gt;
                  &lt;h4 className&#x3D;&quot;card-title&quot;&gt;Corporate Plan&lt;&#x2F;h4&gt;
                  &lt;div className&#x3D;&quot;prices !text-[#343f52]&quot;&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;29&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;mo&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        !isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;299&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;yr&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.prices *&#x2F;&rbrace;
                  &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-primary !mt-7 !mb-8&quot;&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-white bg-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lt;strong&gt;20&lt;&#x2F;strong&gt; Projects&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-white bg-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lt;strong&gt;300K&lt;&#x2F;strong&gt; API Access&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-white bg-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lt;strong&gt;500MB&lt;&#x2F;strong&gt; Storage&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-white bg-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lbrace;&quot; &quot;&rbrace;
                        Weekly &lt;strong&gt;Reports&lt;&#x2F;strong&gt;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center !text-white bg-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lbrace;&quot; &quot;&rbrace;
                        7&#x2F;24 &lt;strong&gt;Support&lt;&#x2F;strong&gt;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                  &lt;&#x2F;ul&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                  &gt;
                    Choose Plan
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.pricing *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
            &lt;div className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] max-w-full !mt-[30px]&quot;&gt;
              &lt;div className&#x3D;&quot;pricing card !shadow-none !border-0&quot;&gt;
                &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] py-[60px] px-[40px] !border-0 border-[#fff]&quot;&gt;
                  &lt;div className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !p-0 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !rounded-[100%]&quot;&gt;
                    &lbrace;&quot; &quot;&rbrace;
                    &lt;i className&#x3D;&quot;uil uil-store-alt before:content-[&#39;\ecf9&#39;]&quot; &#x2F;&gt;&lbrace;&quot; &quot;&rbrace;
                  &lt;&#x2F;div&gt;
                  &lt;h4 className&#x3D;&quot;card-title&quot;&gt;Community Plan&lt;&#x2F;h4&gt;
                  &lt;div className&#x3D;&quot;prices !text-[#343f52]&quot;&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;49&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;mo&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div
                      className&#x3D;&lbrace;&#x60;price $&lbrace;
                        !isMonthly ? &quot;price-show&quot; : &quot;price-hidden&quot;
                      &rbrace;  !justify-start&#x60;&rbrace;
                    &gt;
                      &lt;span className&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-value&quot;&gt;499&lt;&#x2F;span&gt;
                      &lt;span className&#x3D;&quot;price-duration&quot;&gt;yr&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lbrace;&#x2F;*&#x2F;.prices *&#x2F;&rbrace;
                  &lt;ul className&#x3D;&quot;pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8&quot;&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lt;strong&gt;90&lt;&#x2F;strong&gt; Projects&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lt;strong&gt;900K&lt;&#x2F;strong&gt; API Access&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lt;strong&gt;900MB&lt;&#x2F;strong&gt; Storage&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lbrace;&quot; &quot;&rbrace;
                        Weekly &lt;strong&gt;Reports&lt;&#x2F;strong&gt;&lbrace;&quot; &quot;&rbrace;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li className&#x3D;&quot;relative !pl-6 !mt-[0.35rem]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-[&#39;\e9dd&#39;] before:align-middle before:table-cell&quot; &#x2F;&gt;
                      &lt;span&gt;
                        &lbrace;&quot; &quot;&rbrace;
                        7&#x2F;24 &lt;strong&gt;Support&lt;&#x2F;strong&gt;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                  &lt;&#x2F;ul&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-soft-primary !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.05)]&quot;
                  &gt;
                    Choose Plan
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
                &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.pricing *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;*&#x2F;.pricing-wrapper *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;

      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
    &lt;&#x2F;section&gt;
  );
&rbrace;`}
      />
      <Pricing4 />
      <CodeSnippet
        code={`import React from &quot;react&quot;;

export default function Pricing4() &lbrace;
  return (
    &lt;section id&#x3D;&quot;snippet-4&quot; className&#x3D;&quot;wrapper !bg-[#ffffff]  &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-12 xl:pb-14 lg:pb-14 md:pb-14&quot;&gt;
        &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
          Our Pricing
        &lt;&#x2F;h2&gt;
        &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium&quot;&gt;
          We offer&lbrace;&quot; &quot;&rbrace;
          &lt;span className&#x3D;&quot;relative z-[2] whitespace-nowrap after:content-[&#39;&#39;] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]&quot;&gt;
            great prices
          &lt;&#x2F;span&gt;
          , premium and quality products for your business.
        &lt;&#x2F;p&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
            &lt;p&gt;
              Enjoy a&lbrace;&quot; &quot;&rbrace;
              &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;hover&quot;&gt;
                free 30-day trial
              &lt;&#x2F;a&gt;&lbrace;&quot; &quot;&rbrace;
              and experience the full service. No credit card required!
            &lt;&#x2F;p&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
        &lt;a
          href&#x3D;&quot;#&quot;
          className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
        &gt;
          See All Prices
        &lt;&#x2F;a&gt;
        &lt;div className&#x3D;&quot;table-responsive !mt-10 xl:!mt-0 lg:!mt-0&quot;&gt;
          &lt;table className&#x3D;&quot;table table-borderless table-striped !text-center&quot;&gt;
            &lt;thead&gt;
              &lt;tr&gt;
                &lt;th className&#x3D;&quot;!w-[22.5rem]&quot; &#x2F;&gt;
                &lt;th&gt;
                  &lt;div className&#x3D;&quot;h4 !mb-1&quot;&gt;Basic Plan&lt;&#x2F;div&gt;
                  &lt;div className&#x3D;&quot;!text-[.75rem] font-medium !text-[#aab0bc]&quot;&gt;
                    $9 &#x2F; Monthly
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;th&gt;
                &lt;th&gt;
                  &lt;div className&#x3D;&quot;h4 !mb-1&quot;&gt;Premium Plan&lt;&#x2F;div&gt;
                  &lt;div className&#x3D;&quot;!text-[.75rem] font-medium !text-[#aab0bc]&quot;&gt;
                    $19 &#x2F; Monthly
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;th&gt;
                &lt;th&gt;
                  &lt;div className&#x3D;&quot;h4 !mb-1&quot;&gt;Corporate Plan&lt;&#x2F;div&gt;
                  &lt;div className&#x3D;&quot;!text-[.75rem] font-medium !text-[#aab0bc]&quot;&gt;
                    $29 &#x2F; Monthly
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;th&gt;
                &lt;th&gt;
                  &lt;div className&#x3D;&quot;h4 !mb-1&quot;&gt;Business Plan&lt;&#x2F;div&gt;
                  &lt;div className&#x3D;&quot;!text-[.75rem] font-medium !text-[#aab0bc]&quot;&gt;
                    $49 &#x2F; Monthly
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;th&gt;
              &lt;&#x2F;tr&gt;
            &lt;&#x2F;thead&gt;
            &lt;tbody&gt;
              &lt;tr&gt;
                &lt;td className&#x3D;&quot;option text-left&quot;&gt;Project&lt;&#x2F;td&gt;
                &lt;td&gt;1&lt;&#x2F;td&gt;
                &lt;td&gt;5&lt;&#x2F;td&gt;
                &lt;td&gt;20&lt;&#x2F;td&gt;
                &lt;td&gt;90&lt;&#x2F;td&gt;
              &lt;&#x2F;tr&gt;
              &lt;tr&gt;
                &lt;td className&#x3D;&quot;option text-left&quot;&gt;API Access&lt;&#x2F;td&gt;
                &lt;td&gt;100K&lt;&#x2F;td&gt;
                &lt;td&gt;200K&lt;&#x2F;td&gt;
                &lt;td&gt;300K&lt;&#x2F;td&gt;
                &lt;td&gt;900K&lt;&#x2F;td&gt;
              &lt;&#x2F;tr&gt;
              &lt;tr&gt;
                &lt;td className&#x3D;&quot;option text-left&quot;&gt;Storage&lt;&#x2F;td&gt;
                &lt;td&gt;100MB&lt;&#x2F;td&gt;
                &lt;td&gt;200MB&lt;&#x2F;td&gt;
                &lt;td&gt;500MB&lt;&#x2F;td&gt;
                &lt;td&gt;900MB&lt;&#x2F;td&gt;
              &lt;&#x2F;tr&gt;
              &lt;tr&gt;
                &lt;td className&#x3D;&quot;option text-left&quot;&gt;Weekly Reports&lt;&#x2F;td&gt;
                &lt;td&gt;-&lt;&#x2F;td&gt;
                &lt;td&gt;
                  &lt;i className&#x3D;&quot;uil uil-check !bg-[#e0e9fa] !text-[#3f78e0]  !rounded-[50%] p-1 before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                &lt;&#x2F;td&gt;
                &lt;td&gt;
                  &lt;i className&#x3D;&quot;uil uil-check !bg-[#e0e9fa] !text-[#3f78e0]  !rounded-[50%] p-1 before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                &lt;&#x2F;td&gt;
                &lt;td&gt;
                  &lt;i className&#x3D;&quot;uil uil-check !bg-[#e0e9fa] !text-[#3f78e0]  !rounded-[50%] p-1 before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                &lt;&#x2F;td&gt;
              &lt;&#x2F;tr&gt;
              &lt;tr&gt;
                &lt;td className&#x3D;&quot;option text-left&quot;&gt;24&#x2F;7 Support&lt;&#x2F;td&gt;
                &lt;td&gt;-&lt;&#x2F;td&gt;
                &lt;td&gt;-&lt;&#x2F;td&gt;
                &lt;td&gt;
                  &lt;i className&#x3D;&quot;uil uil-check !bg-[#e0e9fa] !text-[#3f78e0]  !rounded-[50%] p-1 before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                &lt;&#x2F;td&gt;
                &lt;td&gt;
                  &lt;i className&#x3D;&quot;uil uil-check !bg-[#e0e9fa] !text-[#3f78e0]  !rounded-[50%] p-1 before:content-[&#39;\e9dd&#39;]&quot; &#x2F;&gt;
                &lt;&#x2F;td&gt;
              &lt;&#x2F;tr&gt;
            &lt;&#x2F;tbody&gt;
            &lt;tfoot&gt;
              &lt;tr&gt;
                &lt;th className&#x3D;&quot;!w-[22.5rem]&quot; &#x2F;&gt;
                &lt;th&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-soft-primary !rounded-[50rem] !mt-1&quot;
                  &gt;
                    Choose Plan
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;th&gt;
                &lt;th&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-soft-primary !rounded-[50rem] !mt-1&quot;
                  &gt;
                    Choose Plan
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;th&gt;
                &lt;th&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-soft-primary !rounded-[50rem] !mt-1&quot;
                  &gt;
                    Choose Plan
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;th&gt;
                &lt;th&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-soft-primary !rounded-[50rem] !mt-1&quot;
                  &gt;
                    Choose Plan
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;th&gt;
              &lt;&#x2F;tr&gt;
            &lt;&#x2F;tfoot&gt;
          &lt;&#x2F;table&gt;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;* &#x2F;.table-responsive *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;

      &lbrace;&#x2F;*&#x2F;.container *&#x2F;&rbrace;
    &lt;&#x2F;section&gt;
  );
&rbrace;`}
      />
    </>
  );
}
