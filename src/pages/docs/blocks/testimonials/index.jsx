import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import PageTitle from "@/components/blocks/PageTitle";
import Testimonials10 from "@/components/blocks/testimonials/Testimonials10";
import Testimonials11 from "@/components/blocks/testimonials/Testimonials11";
import Testimonials12 from "@/components/blocks/testimonials/Testimonials12";
import Testimonials14 from "@/components/blocks/testimonials/Testimonials14";
import Testimonials15 from "@/components/blocks/testimonials/Testimonials15";
import Testimonials16 from "@/components/blocks/testimonials/Testimonials16";
import Testimonials3 from "@/components/blocks/testimonials/Testimonials3";
import Testimonials4 from "@/components/blocks/testimonials/Testimonials4";
import Testimonials5 from "@/components/blocks/testimonials/Testimonials5";
import Testimonials6 from "@/components/blocks/testimonials/Testimonials6";
import Testimonials7 from "@/components/blocks/testimonials/Testimonials7";
import Testimonials8 from "@/components/blocks/testimonials/Testimonials8";
import Facts from "@/components/homes/home-18/Facts";
import Testimonials13 from "@/components/homes/home-18/Testimonials";
import Testimonials17 from "@/components/homes/home-29/Testimonials";
import Testimonials from "@/components/homes/home-33/Testimonials";
import React from "react";

import { testimonials8 } from "@/data/testimonials";
import CodeSnippet from "@/components/common/CodeSnippet";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Testimonials || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageTestimonials() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Testimonials" />
      <BlockPageLinks />
      <>
        <section id="snippet-1" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !relative xl:!px-[35px] lg:!px-[20px] !mt-[50px]">
                <div
                  className="absolute hidden xl:block lg:block md:block"
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "130%",
                    height: "auto",
                    transform: "translate(-50%, -50%)",
                    zIndex: -1,
                  }}
                >
                  <img
                    className="w-full"
                    alt="image"
                    width="1400"
                    height="1080"
                    src="/assets/img/photos/blurry.png"
                  />
                </div>
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                  {testimonials8.map((card) => (
                    <div
                      key={card.id}
                      className={`${card.widthClasses} flex-[0_0_auto] !px-[15px] max-w-full !self-end xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]`}
                    >
                      <div className={`card ${card.bgColor}`}>
                        <div className="card-body flex-[1_1_auto] p-[40px]">
                          <blockquote className="!text-[0.85rem] !leading-[1.7] !font-medium !pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                            <p>{card.quote}</p>
                            <div className="flex items-center text-left">
                              <div className="info p-0">
                                <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                  {card.name}
                                </h5>
                                <p className="!mb-0 text-[.8rem]">
                                  {card.role}
                                </p>
                              </div>
                            </div>
                          </blockquote>
                        </div>
                        {/*/.card-body */}
                      </div>
                      {/*/.card */}
                    </div>
                  ))}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                  Our Community
                </h2>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                  Customer satisfaction is our major goal. See what our
                  customers are saying about us.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Nulla vitae elit libero, a pharetra augue. Maecenas faucibus
                  mollis interdum. Vestibulum id ligula porta felis euismod
                  semper.
                </p>
                <a
                  href="#"
                  className="btn btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] !rounded-[50rem] !mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  All Testimonials
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
          code={` 
          &lt;section id&#x3D;&quot;snippet-1&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
&lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
  &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center&quot;&gt;
    &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !relative xl:!px-[35px] lg:!px-[20px] !mt-[50px]&quot;&gt;
      &lt;div
        className&#x3D;&quot;absolute hidden xl:block lg:block md:block&quot;
        style&#x3D;&lbrace;&lbrace;
          top: &quot;50%&quot;,
          left: &quot;50%&quot;,
          width: &quot;130%&quot;,
          height: &quot;auto&quot;,
          transform: &quot;translate(-50%, -50%)&quot;,
          zIndex: -1,
        &rbrace;&rbrace;
      &gt;
        &lt;img
          className&#x3D;&quot;w-full&quot;
          alt&#x3D;&quot;image&quot;
          width&#x3D;&quot;1400&quot;
          height&#x3D;&quot;1080&quot;
          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;blurry.png&quot;
        &#x2F;&gt;
      &lt;&#x2F;div&gt;
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
        &lbrace;testimonials8.map((card) &#x3D;&gt; (
          &lt;div
            key&#x3D;&lbrace;card.id&rbrace;
            className&#x3D;&lbrace;&#x60;$&lbrace;card.widthClasses&rbrace; flex-[0_0_auto] !px-[15px] max-w-full !self-end xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]&#x60;&rbrace;
          &gt;
            &lt;div className&#x3D;&lbrace;&#x60;card $&lbrace;card.bgColor&rbrace;&#x60;&rbrace;&gt;
              &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                &lt;blockquote className&#x3D;&quot;!text-[0.85rem] !leading-[1.7] !font-medium !pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-[&#39;\u201d&#39;] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]&quot;&gt;
                  &lt;p&gt;&lbrace;card.quote&rbrace;&lt;&#x2F;p&gt;
                  &lt;div className&#x3D;&quot;flex items-center text-left&quot;&gt;
                    &lt;div className&#x3D;&quot;info p-0&quot;&gt;
                      &lt;h5 className&#x3D;&quot;!mb-1 text-[.9rem] !leading-[1.5]&quot;&gt;
                        &lbrace;card.name&rbrace;
                      &lt;&#x2F;h5&gt;
                      &lt;p className&#x3D;&quot;!mb-0 text-[.8rem]&quot;&gt;
                        &lbrace;card.role&rbrace;
                      &lt;&#x2F;p&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;blockquote&gt;
              &lt;&#x2F;div&gt;
              &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;.card *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
        ))&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
    &lt;&#x2F;div&gt;
    &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
    &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
      &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
        Our Community
      &lt;&#x2F;h2&gt;
      &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium&quot;&gt;
        Customer satisfaction is our major goal. See what our
        customers are saying about us.
      &lt;&#x2F;p&gt;
      &lt;p&gt;
        Aenean lacinia bibendum nulla sed consectetur. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et.
        Nulla vitae elit libero, a pharetra augue. Maecenas faucibus
        mollis interdum. Vestibulum id ligula porta felis euismod
        semper.
      &lt;&#x2F;p&gt;
      &lt;a
        href&#x3D;&quot;#&quot;
        className&#x3D;&quot;btn btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] !rounded-[50rem] !mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
      &gt;
        All Testimonials
      &lt;&#x2F;a&gt;
    &lt;&#x2F;div&gt;
    &lbrace;&#x2F;*&#x2F;column *&#x2F;&rbrace;
  &lt;&#x2F;div&gt;
  &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
&lt;&#x2F;div&gt;
&lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;

&lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
&lt;&#x2F;section&gt;
          `}
        />
        {/* /section */}
        <section id="snippet-2" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] !relative">
              <figure
                className="!rounded-[.4rem] absolute hidden lg:block xl:block !px-[15px]"
                style={{
                  top: "50%",
                  right: 0,
                  width: "45%",
                  height: "auto",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                }}
              >
                <img
                  className="!rounded-[.4rem]"
                  srcSet="/assets/img/photos/tei1@2x.jpg 2x"
                  alt="image"
                  width="575"
                  height="383"
                  src="/assets/img/photos/tei1.jpg"
                />
              </figure>
              <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center">
                <div className="card !bg-[rgba(246,247,249,1)]">
                  <div className="card-body xl:!p-10 lg:!p-10 md:!p-10 xxl:!py-24 p-[40px]">
                    <div className="flex flex-wrap mx-0">
                      <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] max-w-full xl:!pl-10">
                        <span className="ratings inline-block relative w-20 h-[0.8rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five text-[1rem] !mb-3" />
                        <blockquote className="!pl-0 text-[1rem] !mb-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem]">
                          <p>
                            “Donec id elit non mi porta gravida at eget metus.
                            Vivamus mollis est non commodo luctus, nisi erat
                            porttitor ligula, eget lacinia odio sem nec elit.
                            Duis mollis porta est non commodo luctus.”
                          </p>
                          <div className="flex items-center justify-center !text-center">
                            <div className="info p-0">
                              <h4 className="tracking-[-0.03em] !mb-1">
                                Coriss Ambady
                              </h4>
                              <p className="!mb-0 text-[.8rem]">
                                Financial Analyst
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* /column */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.card */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={`&lt;section id&#x3D;&quot;snippet-2&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
&lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
  &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !relative&quot;&gt;
    &lt;figure
      className&#x3D;&quot;!rounded-[.4rem] absolute hidden lg:block xl:block !px-[15px]&quot;
      style&#x3D;&lbrace;&lbrace;
        top: &quot;50%&quot;,
        right: 0,
        width: &quot;45%&quot;,
        height: &quot;auto&quot;,
        transform: &quot;translateY(-50%)&quot;,
        zIndex: 2,
      &rbrace;&rbrace;
    &gt;
      &lt;img
        className&#x3D;&quot;!rounded-[.4rem]&quot;
        srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;tei1@2x.jpg 2x&quot;
        alt&#x3D;&quot;image&quot;
        width&#x3D;&quot;575&quot;
        height&#x3D;&quot;383&quot;
        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;tei1.jpg&quot;
      &#x2F;&gt;
    &lt;&#x2F;figure&gt;
    &lt;div className&#x3D;&quot;xl:w-9&#x2F;12 lg:w-9&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center&quot;&gt;
      &lt;div className&#x3D;&quot;card !bg-[rgba(246,247,249,1)]&quot;&gt;
        &lt;div className&#x3D;&quot;card-body xl:!p-10 lg:!p-10 md:!p-10 xxl:!py-24 p-[40px]&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-0&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] max-w-full xl:!pl-10&quot;&gt;
              &lt;span className&#x3D;&quot;ratings inline-block relative w-20 h-[0.8rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] before:overflow-hidden before:left-0 before:top-0 five text-[1rem] !mb-3&quot; &#x2F;&gt;
              &lt;blockquote className&#x3D;&quot;!pl-0 text-[1rem] !mb-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem]&quot;&gt;
                &lt;p&gt;
                  “Donec id elit non mi porta gravida at eget metus.
                  Vivamus mollis est non commodo luctus, nisi erat
                  porttitor ligula, eget lacinia odio sem nec elit.
                  Duis mollis porta est non commodo luctus.”
                &lt;&#x2F;p&gt;
                &lt;div className&#x3D;&quot;flex items-center justify-center !text-center&quot;&gt;
                  &lt;div className&#x3D;&quot;info p-0&quot;&gt;
                    &lt;h4 className&#x3D;&quot;tracking-[-0.03em] !mb-1&quot;&gt;
                      Coriss Ambady
                    &lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0 text-[.8rem]&quot;&gt;
                      Financial Analyst
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;blockquote&gt;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;*&#x2F;.card *&#x2F;&rbrace;
    &lt;&#x2F;div&gt;
    &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
  &lt;&#x2F;div&gt;
  &lbrace;&#x2F;* &#x2F;.row *&#x2F;&rbrace;
&lt;&#x2F;div&gt;
&lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;

&lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
&lt;&#x2F;section&gt;`}
        />
      </>
      <Testimonials3 />
      <CodeSnippet
        code={`
import { testimonials6 } from &quot;@&#x2F;data&#x2F;testimonials&quot;;

import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Testimonials3() {
  return (
    &lt;section id&#x3D;&quot;snippet-3&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] !mt-[-50px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] !mt-[50px]&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mt-10 !mb-3&quot;&gt;
              Our Community
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead text-[1.05rem] !leading-[1.6] !mb-6&quot;&gt;
              Customer satisfaction is our major goal. See what our clients are
              saying about our services.
            &lt;&#x2F;p&gt;
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
            &gt;
              All Testimonials
            &lt;&#x2F;a&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] !mt-[50px]&quot;&gt;
            &lt;div className&#x3D;&quot;!relative&quot;&gt;
              &lt;div
                className&#x3D;&quot;shape !rounded-[50%] !bg-[#fff8ee] rellax !w-[6rem] !h-[6rem] absolute&quot;
                data-rellax-speed&#x3D;{1}
                style&#x3D;{{ top: &quot;-0.7rem&quot;, right: &quot;-1.7rem&quot; }}
              &#x2F;&gt;
              &lt;div
                className&#x3D;&quot;shape !rounded-[50%] bg-line red rellax !w-[6rem] !h-[6rem] absolute opacity-50&quot;
                data-rellax-speed&#x3D;{1}
                style&#x3D;{{ bottom: &quot;-0.5rem&quot;, left: &quot;-1.4rem&quot; }}
              &#x2F;&gt;
              &lt;div className&#x3D;&quot;swiper-container dots-closer !mb-6 relative z-10&quot;&gt;
                &lt;Swiper
                  className&#x3D;&quot;swiper&quot;
                  breakpoints&#x3D;{{
                    0: { slidesPerView: 1 },
                    575: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                  }}
                  modules&#x3D;{[Pagination]}
                  pagination&#x3D;{{
                    clickable: true,
                    el: &quot;.spdt4&quot;,
                  }}
                &gt;
                  {testimonials6.map((testimonial) &#x3D;&gt; (
                    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot; key&#x3D;{testimonial.id}&gt;
                      &lt;div className&#x3D;&quot;item-inner&quot;&gt;
                        &lt;div className&#x3D;&quot;card&quot;&gt;
                          &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                            &lt;blockquote className&#x3D;&quot;!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-[&#39;\u201d&#39;] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]&quot;&gt;
                              &lt;p&gt;“{testimonial.quote}”&lt;&#x2F;p&gt;
                              &lt;div className&#x3D;&quot;flex items-center text-left&quot;&gt;
                                &lt;img
                                  className&#x3D;&quot;!rounded-[50%] !w-[3.5rem]&quot;
                                  srcSet&#x3D;{testimonial.imageSrcSet}
                                  alt&#x3D;&quot;image&quot;
                                  src&#x3D;{testimonial.imageSrc}
                                  width&#x3D;&quot;100&quot;
                                  height&#x3D;&quot;100&quot;
                                &#x2F;&gt;
                                &lt;div className&#x3D;&quot;info !pl-4&quot;&gt;
                                  &lt;h5 className&#x3D;&quot;!mb-1 text-[.95rem] !leading-[1.5]&quot;&gt;
                                    {testimonial.name}
                                  &lt;&#x2F;h5&gt;
                                  &lt;p className&#x3D;&quot;!mb-0 text-[.85rem]&quot;&gt;
                                    {testimonial.role}
                                  &lt;&#x2F;p&gt;
                                &lt;&#x2F;div&gt;
                              &lt;&#x2F;div&gt;
                            &lt;&#x2F;blockquote&gt;
                          &lt;&#x2F;div&gt;
                          {&#x2F;*&#x2F;.card-body *&#x2F;}
                        &lt;&#x2F;div&gt;
                        {&#x2F;* &#x2F;.card *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.item-inner *&#x2F;}
                    &lt;&#x2F;SwiperSlide&gt;
                  ))}

                  {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
                &lt;&#x2F;Swiper&gt;
                &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                  &lt;div className&#x3D;&quot;swiper-pagination spdt4&quot;&gt;&lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;.swiper *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.swiper-container *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.relative *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Testimonials4 />
      <CodeSnippet
        code={`
import { testimonials } from &quot;@&#x2F;data&#x2F;testimonials&quot;;

import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Testimonials4() {
  return (
    &lt;section className&#x3D;&quot;wrapper&quot;&gt;
      &lt;div className&#x3D;&quot;container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-20 items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[70px] max-w-full xl:!order-2 lg:!order-2&quot;&gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;w-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i4@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i4.png&quot;
                width&#x3D;{800}
                height&#x3D;{533}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[70px] max-w-full xl:!mt-[4.5rem] lg:!mt-[4.5rem]&quot;&gt;
            &lt;div
              className&#x3D;&quot;swiper-container dots-closer !mb-6&quot;
              data-margin&#x3D;{30}
              data-dots&#x3D;&quot;true&quot;
            &gt;
              &lt;Swiper
                className&#x3D;&quot;swiper&quot;
                spaceBetween&#x3D;{30}
                modules&#x3D;{[Pagination]}
                pagination&#x3D;{{
                  clickable: true,
                  el: &quot;.spd79&quot;,
                }}
              &gt;
                {testimonials.map((elm, i) &#x3D;&gt; (
                  &lt;SwiperSlide key&#x3D;{i} className&#x3D;&quot;swiper-slide&quot;&gt;
                    &lt;blockquote className&#x3D;&quot;icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2&#x2F;4 before:content-[&#39;\u201c&#39;] before:!text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0&quot;&gt;
                      &lt;p&gt;“{elm.quote}”&lt;&#x2F;p&gt;
                      &lt;div className&#x3D;&quot;flex items-center justify-center !text-center&quot;&gt;
                        &lt;div className&#x3D;&quot;info !pl-0&quot;&gt;
                          &lt;h5 className&#x3D;&quot;!mb-1 text-[.95rem] !leading-[1.5]&quot;&gt;
                            {elm.name}
                          &lt;&#x2F;h5&gt;
                          &lt;p className&#x3D;&quot;!mb-0 text-[0.8rem]&quot;&gt;{elm.title}&lt;&#x2F;p&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;blockquote&gt;
                  &lt;&#x2F;SwiperSlide&gt;
                ))}

                {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
              &lt;&#x2F;Swiper&gt;
              &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                &lt;div className&#x3D;&quot;swiper-pagination spd79&quot;&gt;&lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.swiper *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.swiper-container *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Testimonials5 />
      <CodeSnippet
        code={`
import { testimonials6 } from &quot;@&#x2F;data&#x2F;testimonials&quot;;

import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Testimonials5() {
  return (
    &lt;section id&#x3D;&quot;snippet-5&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center&quot;&gt;
          Happy Customers
        &lt;&#x2F;h2&gt;
        &lt;p className&#x3D;&quot;lead text-[0.9rem] font-medium !leading-[1.65] !text-center !mb-6 md:!px-24 lg:!px-0&quot;&gt;
          Customer satisfaction is our major goal. See what our customers are
          saying about us.
        &lt;&#x2F;p&gt;
        &lt;div className&#x3D;&quot;!relative&quot;&gt;
          &lt;div
            className&#x3D;&quot;shape !rounded-[50%] !bg-[#fff8ee] rellax !w-[6rem] !h-[6rem] absolute z-[1]&quot;
            data-rellax-speed&#x3D;{1}
            style&#x3D;{{ bottom: &quot;0.5rem&quot;, right: &quot;-1.7rem&quot; }}
          &#x2F;&gt;
          &lt;div
            className&#x3D;&quot;shape bg-dot primary rellax !w-[6rem] !h-[6rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50&quot;
            data-rellax-speed&#x3D;{1}
            style&#x3D;{{ top: &quot;-1rem&quot;, left: &quot;-1.7rem&quot; }}
          &#x2F;&gt;
          &lt;div className&#x3D;&quot;swiper-container dots-closer !mb-6 relative z-10&quot;&gt;
            &lt;Swiper
              className&#x3D;&quot;swiper&quot;
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
              modules&#x3D;{[Pagination]}
              pagination&#x3D;{{
                clickable: true,
                el: &quot;.spdt5&quot;,
              }}
            &gt;
              {testimonials6.map((testimonial) &#x3D;&gt; (
                &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot; key&#x3D;{testimonial.id}&gt;
                  &lt;div className&#x3D;&quot;item-inner&quot;&gt;
                    &lt;div className&#x3D;&quot;card&quot;&gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                        &lt;blockquote className&#x3D;&quot;!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-[&#39;\u201d&#39;] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]&quot;&gt;
                          &lt;p&gt;“{testimonial.quote}”&lt;&#x2F;p&gt;
                          &lt;div className&#x3D;&quot;flex items-center text-left&quot;&gt;
                            &lt;img
                              className&#x3D;&quot;!rounded-[50%] !w-[3.5rem]&quot;
                              srcSet&#x3D;{testimonial.imageSrcSet}
                              alt&#x3D;&quot;image&quot;
                              src&#x3D;{testimonial.imageSrc}
                              width&#x3D;&quot;100&quot;
                              height&#x3D;&quot;100&quot;
                            &#x2F;&gt;
                            &lt;div className&#x3D;&quot;info !pl-4&quot;&gt;
                              &lt;h5 className&#x3D;&quot;!mb-1 text-[.95rem] !leading-[1.5]&quot;&gt;
                                {testimonial.name}
                              &lt;&#x2F;h5&gt;
                              &lt;p className&#x3D;&quot;!mb-0 text-[.85rem]&quot;&gt;
                                {testimonial.role}
                              &lt;&#x2F;p&gt;
                            &lt;&#x2F;div&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;blockquote&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.item-inner *&#x2F;}
                &lt;&#x2F;SwiperSlide&gt;
              ))}

              {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
            &lt;&#x2F;Swiper&gt;
            &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
              &lt;div className&#x3D;&quot;swiper-pagination spdt5&quot;&gt;&lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.swiper *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.swiper-container *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.relative *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Testimonials6 />
      <CodeSnippet
        code={`
import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;
import { testimonials } from &quot;@&#x2F;data&#x2F;testimonials&quot;;

import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Testimonials6() {
  return (
    &lt;section id&#x3D;&quot;snippet-6&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[30px] max-w-full !relative&quot;&gt;
            &lt;div
              className&#x3D;&quot;shape bg-dot primary rellax !w-[8rem] !h-[8rem] absolute opacity-50 bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]&quot;
              data-rellax-speed&#x3D;{1}
              style&#x3D;{{ top: 0, left: &quot;-1.4rem&quot;, zIndex: 0 }}
            &#x2F;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full&quot;&gt;
                &lt;figure className&#x3D;&quot;rounded-[0.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;!rounded-[0.4rem]&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g5@2x.jpg 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g5.jpg&quot;
                    width&#x3D;&quot;350&quot;
                    height&#x3D;&quot;350&quot;
                  &#x2F;&gt;
                &lt;&#x2F;figure&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]&quot;&gt;
                  &lt;div className&#x3D;&quot;w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2&quot;&gt;
                    &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;!rounded-[0.4rem]&quot;
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
                    &lt;div className&#x3D;&quot;card !bg-[#e0e9fa] !text-center counter-wrapper&quot;&gt;
                      &lt;div className&#x3D;&quot;card-body !py-12&quot;&gt;
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
          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[25px] max-w-full&quot;&gt;
            &lt;div
              className&#x3D;&quot;swiper-container dots-closer !mb-6&quot;
              data-margin&#x3D;{30}
              data-dots&#x3D;&quot;true&quot;
            &gt;
              &lt;Swiper
                className&#x3D;&quot;swiper&quot;
                modules&#x3D;{[Pagination]}
                pagination&#x3D;{{
                  clickable: true,
                  el: &quot;.spdt6&quot;,
                }}
              &gt;
                {testimonials.map((elm, i) &#x3D;&gt; (
                  &lt;SwiperSlide key&#x3D;{i} className&#x3D;&quot;swiper-slide&quot;&gt;
                    &lt;blockquote className&#x3D;&quot;icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2&#x2F;4 before:content-[&#39;\u201c&#39;] before:!text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0&quot;&gt;
                      &lt;p&gt;“{elm.quote}”&lt;&#x2F;p&gt;
                      &lt;div className&#x3D;&quot;flex items-center justify-center !text-center&quot;&gt;
                        &lt;div className&#x3D;&quot;info !pl-0&quot;&gt;
                          &lt;h5 className&#x3D;&quot;!mb-1 text-[.95rem] !leading-[1.5]&quot;&gt;
                            {elm.name}
                          &lt;&#x2F;h5&gt;
                          &lt;p className&#x3D;&quot;!mb-0 text-[0.8rem]&quot;&gt;{elm.title}&lt;&#x2F;p&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;blockquote&gt;
                  &lt;&#x2F;SwiperSlide&gt;
                ))}

                {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
              &lt;&#x2F;Swiper&gt;
              &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                &lt;div className&#x3D;&quot;swiper-pagination spdt6&quot;&gt;&lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.swiper *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.swiper-container *&#x2F;}
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
      <Testimonials7 />
      <CodeSnippet
        code={`

import { useEffect, useRef } from &quot;react&quot;;

import { testimonials4 } from &quot;@&#x2F;data&#x2F;testimonials&quot;;
export default function Testimonials7() {
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
    &lt;section className&#x3D;&quot;wrapper&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-14 xl:pt-8 lg:pt-8 pb-[4.5rem] xl:pb-28 lg:pb-28 md:pb-28&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
          &lt;div className&#x3D;&quot;lg:w-8&#x2F;12 xl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%]&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[0.8rem] uppercase !text-[#5eb9f0] !mb-3 !leading-[1.35] !tracking-[0.02rem]&quot;&gt;
              Happy Customers
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] !mb-10 xxl:!px-10&quot;&gt;
              Don&#39;t take our word for it. See what customers are saying about
              us.
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;itemgrid&quot;&gt;
          &lt;div
            ref&#x3D;{isotopContainer}
            className&#x3D;&quot;flex flex-wrap mx-[-15px] isotope !mt-[-30px]&quot;
          &gt;
            {testimonials4.map((testimonial) &#x3D;&gt; (
              &lt;div
                key&#x3D;{testimonial.id}
                className&#x3D;&quot;item md:w-6&#x2F;12 lg:w-6&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;
              &gt;
                &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                  &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                    &lt;span className&#x3D;&quot;ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] before:overflow-hidden before:left-0 before:top-0 five !mb-2&quot; &#x2F;&gt;
                    &lt;blockquote className&#x3D;&quot;!text-[.9rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0&quot;&gt;
                      &lt;p&gt;{testimonial.quote}&lt;&#x2F;p&gt;
                      &lt;div className&#x3D;&quot;flex items-center text-left&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;!rounded-[50%] !w-[3.5rem]&quot;
                          srcSet&#x3D;{testimonial.imageSrcSet}
                          alt&#x3D;&quot;image&quot;
                          src&#x3D;{testimonial.imageSrc}
                          width&#x3D;{100}
                          height&#x3D;{100}
                        &#x2F;&gt;
                        &lt;div className&#x3D;&quot;info !pl-4&quot;&gt;
                          &lt;h5 className&#x3D;&quot;!mb-1 !text-[0.95rem] !leading-[1.5] !tracking-[-0.01rem]&quot;&gt;
                            {testimonial.name}
                          &lt;&#x2F;h5&gt;
                          &lt;p className&#x3D;&quot;!mb-0 !text-[.85rem]&quot;&gt;
                            {testimonial.role}
                          &lt;&#x2F;p&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;blockquote&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            ))}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.grid-view *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Testimonials8 />
      <CodeSnippet
        code={`
import { testimonials } from &quot;@&#x2F;data&#x2F;testimonials&quot;;
import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Testimonials8() {
  return (
    &lt;section id&#x3D;&quot;snippet-8&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-0 lg:pb-0 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] lg:mx-[-20px] xl:mx-0 items-center&quot;&gt;
          &lt;div className&#x3D;&quot;md:w-5&#x2F;12 lg:w-5&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] lg:!px-[20px] xl:px-0 max-w-full xl:!ml-[8.33333333%] max-lg:!hidden xl:!flex lg:!flex !relative !self-end&quot;&gt;
            &lt;div
              className&#x3D;&quot;shape !rounded-[50%] !bg-[#e0e9fa] rellax !w-[12.5rem] !h-[12.5rem] hidden xl:block lg:block z-[1] absolute&quot;
              data-rellax-speed&#x3D;{1}
              style&#x3D;{{ top: &quot;7rem&quot;, left: &quot;1rem&quot; }}
            &#x2F;&gt;
            &lt;figure className&#x3D;&quot;relative z-[2]&quot;&gt;
              &lt;img
                className&#x3D;&quot;w-full max-w-full !h-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;co1@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;co1.png&quot;
                width&#x3D;{455}
                height&#x3D;{620}
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;md:w-7&#x2F;12 lg:w-6&#x2F;12 xl:w-6&#x2F;12 xxl:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] lg:!px-[20px] xl:px-0 max-w-full xl:!ml-[8.33333333%]&quot;&gt;
            &lt;div className&#x3D;&quot;swiper-container dots-start dots-closer xl:!mt-10 lg:!mt-10 md:!mt-10 xl:!mb-20 lg:!mb-20 md:!mb-20 relative !z-10&quot;&gt;
              &lt;Swiper
                className&#x3D;&quot;swiper&quot;
                modules&#x3D;{[Pagination]}
                pagination&#x3D;{{
                  clickable: true,
                  el: &quot;.spd8&quot;,
                }}
              &gt;
                {testimonials.map((elm, i) &#x3D;&gt; (
                  &lt;SwiperSlide key&#x3D;{i} className&#x3D;&quot;swiper-slide&quot;&gt;
                    &lt;blockquote className&#x3D;&quot;icon relative p-0 border-0 text-[1rem] !leading-[1.7] font-medium m-[0_0_1rem] before:content-[&#39;\u201d&#39;] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]&quot;&gt;
                      &lt;p&gt;“{elm.quote}”&lt;&#x2F;p&gt;
                      &lt;div className&#x3D;&quot;flex items-center text-left&quot;&gt;
                        &lt;div className&#x3D;&quot;info !pl-0&quot;&gt;
                          &lt;h5 className&#x3D;&quot;!mb-1 text-[.95rem] !leading-[1.5]&quot;&gt;
                            {elm.name}
                          &lt;&#x2F;h5&gt;
                          &lt;p className&#x3D;&quot;!mb-0 text-[0.8rem]&quot;&gt;{elm.title}&lt;&#x2F;p&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;blockquote&gt;
                  &lt;&#x2F;SwiperSlide&gt;
                ))}

                {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
              &lt;&#x2F;Swiper&gt;
              &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                &lt;div className&#x3D;&quot;swiper-pagination spd8&quot;&gt;&lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.swiper *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.swiper-container *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <section id="snippet-9" className="wrapper !bg-[#ffffff] ">
        <div className="container py-[4.5rem] xl:!py-[6rem] lg:!py-[6rem] md:!py-[6rem] xl:!pt-[10rem] lg:!pt-[10rem] md:!pt-[10rem]">
          <div className="card !bg-[#edf2fc]">
            <div className="card-body xl:!p-[2.5rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[40px] !relative">
              <div
                className="absolute hidden lg:block xl:block"
                style={{ bottom: 0, left: "10%", width: "28%", zIndex: 2 }}
              >
                <figure className="m-0 p-0">
                  <img
                    className="w-full max-w-full !h-auto"
                    srcSet="/assets/img/photos/co2@2x.png 2x"
                    alt="image"
                    width="361"
                    height="620"
                    src="/assets/img/photos/co2.png"
                  />
                </figure>
              </div>
              <div className="flex flex-wrap max-md:mx-[-15px] xl:mx-[-35px] mx-0 !text-center">
                <div className="lg:w-7/12 lg:!ml-[41.66666667%] xl:w-6/12 xl:!ml-[41.66666667%] w-full flex-[0_0_auto] max-md:!px-[15px] xl:!px-[35px] px-0 max-w-full">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                  <blockquote className="!pl-0 text-[1rem] !mb-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem]">
                    <p>
                      “Fusce dapibus tellus ac cursus commodo, tortor mauris
                      condimentum nibh ut fermentum massa, justo sit amet
                      vivamus sagittis lacus vel augue laoreet rutrum faucibus
                      dolor auctor. Cras mattis consectetur purus sit amet
                      fermentum. Aenean lacinia bibendum nulla sed”
                    </p>
                    <div className="flex items-center justify-center !text-center">
                      <div className="info p-0">
                        <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                          Coriss Ambady
                        </h5>
                        <div className="!text-[0.65rem] uppercase !tracking-[0.02rem] font-bold !text-[#aab0bc] !mb-0">
                          Financial Analyst
                        </div>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/*/.card-body */}
          </div>
          {/*/.card */}
        </div>
        {/* /.container */}

        {/* /.container */}
      </section>
      <CodeSnippet
        code={`  &lt;section id&#x3D;&quot;snippet-9&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;container py-[4.5rem] xl:!py-[6rem] lg:!py-[6rem] md:!py-[6rem] xl:!pt-[10rem] lg:!pt-[10rem] md:!pt-[10rem]&quot;&gt;
          &lt;div className&#x3D;&quot;card !bg-[#edf2fc]&quot;&gt;
            &lt;div className&#x3D;&quot;card-body xl:!p-[2.5rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[40px] !relative&quot;&gt;
              &lt;div
                className&#x3D;&quot;absolute hidden lg:block xl:block&quot;
                style&#x3D;{{ bottom: 0, left: &quot;10%&quot;, width: &quot;28%&quot;, zIndex: 2 }}
              &gt;
                &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;w-full max-w-full !h-auto&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;co2@2x.png 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    width&#x3D;&quot;361&quot;
                    height&#x3D;&quot;620&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;co2.png&quot;
                  &#x2F;&gt;
                &lt;&#x2F;figure&gt;
              &lt;&#x2F;div&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap max-md:mx-[-15px] xl:mx-[-35px] mx-0 !text-center&quot;&gt;
                &lt;div className&#x3D;&quot;lg:w-7&#x2F;12 lg:!ml-[41.66666667%] xl:w-6&#x2F;12 xl:!ml-[41.66666667%] w-full flex-[0_0_auto] max-md:!px-[15px] xl:!px-[35px] px-0 max-w-full&quot;&gt;
                  &lt;span className&#x3D;&quot;ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] before:overflow-hidden before:left-0 before:top-0 five !mb-3&quot; &#x2F;&gt;
                  &lt;blockquote className&#x3D;&quot;!pl-0 text-[1rem] !mb-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem]&quot;&gt;
                    &lt;p&gt;
                      “Fusce dapibus tellus ac cursus commodo, tortor mauris
                      condimentum nibh ut fermentum massa, justo sit amet
                      vivamus sagittis lacus vel augue laoreet rutrum faucibus
                      dolor auctor. Cras mattis consectetur purus sit amet
                      fermentum. Aenean lacinia bibendum nulla sed”
                    &lt;&#x2F;p&gt;
                    &lt;div className&#x3D;&quot;flex items-center justify-center !text-center&quot;&gt;
                      &lt;div className&#x3D;&quot;info p-0&quot;&gt;
                        &lt;h5 className&#x3D;&quot;!mb-1 text-[.9rem] !leading-[1.5]&quot;&gt;
                          Coriss Ambady
                        &lt;&#x2F;h5&gt;
                        &lt;div className&#x3D;&quot;!text-[0.65rem] uppercase !tracking-[0.02rem] font-bold !text-[#aab0bc] !mb-0&quot;&gt;
                          Financial Analyst
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;blockquote&gt;
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
      &lt;&#x2F;section&gt;`}
      />
      <Testimonials10 />
      <CodeSnippet
        code={`
import { testimonials } from &quot;@&#x2F;data&#x2F;testimonials&quot;;
import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Testimonials10() {
  return (
    &lt;section id&#x3D;&quot;snippet-10&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;!relative&quot;&gt;
          &lt;div
            className&#x3D;&quot;shape !rounded-[50%] bg-line primary rellax !w-[8rem] !h-[8rem] absolute opacity-50&quot;
            data-rellax-speed&#x3D;{1}
            style&#x3D;{{ top: &quot;-2rem&quot;, right: &quot;-2.7rem&quot;, zIndex: 0 }}
          &#x2F;&gt;
          &lt;div
            className&#x3D;&quot;shape !rounded-[50%] !bg-[#edf2fc] rellax !w-[8rem] !h-[8rem] absolute&quot;
            data-rellax-speed&#x3D;{1}
            style&#x3D;{{ bottom: &quot;-1rem&quot;, left: &quot;-3rem&quot;, zIndex: 0 }}
          &#x2F;&gt;
          {&#x2F;* &#x2F;.card *&#x2F;}
          &lt;div
            className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]  !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]&quot;
            data-cue&#x3D;&quot;slideInDown&quot;
          &gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-0&quot;&gt;
              &lt;div
                className&#x3D;&quot;lg:w-6&#x2F;12 xl:w-6&#x2F;12 w-full flex-[0_0_auto] max-w-full image-wrapper bg-image rounded-t-[0.4rem] rounded-lg-start bg-cover bg-[center_center] bg-no-repeat bg-scroll relative z-0 xl:rounded-tl-[0.4rem] xl:rounded-tr-none xl:rounded-br-none xl:rounded-bl-[0.4rem] lg:rounded-tl-[0.4rem] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[0.4rem] md:min-h-[25rem] max-md:min-h-[25rem]&quot;
                style&#x3D;{{
                  backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;tm1.jpg)&quot;,
                }}
              &#x2F;&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] max-w-full&quot;&gt;
                &lt;div className&#x3D;&quot;!p-10 md:!p-12 xl:!p-[4rem] lg:!p-[4rem]&quot;&gt;
                  &lt;div className&#x3D;&quot;swiper-container dots-closer !mb-6&quot;&gt;
                    &lt;Swiper
                      className&#x3D;&quot;swiper&quot;
                      spaceBetween&#x3D;{30}
                      modules&#x3D;{[Pagination]}
                      pagination&#x3D;{{
                        clickable: true,
                        el: &quot;.spt1&quot;,
                      }}
                    &gt;
                      {testimonials.map((testimonial, index) &#x3D;&gt; (
                        &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot; key&#x3D;{index}&gt;
                          &lt;blockquote className&#x3D;&quot;icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2&#x2F;4 before:content-[&#39;\u201c&#39;] before:!text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0&quot;&gt;
                            &lt;p&gt;{testimonial.quote}&lt;&#x2F;p&gt;
                            &lt;div className&#x3D;&quot;flex items-center justify-center !text-center&quot;&gt;
                              &lt;div className&#x3D;&quot;info !pl-0&quot;&gt;
                                &lt;h5 className&#x3D;&quot;!mb-1 text-[.95rem] !leading-[1.5]&quot;&gt;
                                  {testimonial.name}
                                &lt;&#x2F;h5&gt;
                                &lt;p className&#x3D;&quot;!mb-0 text-[.85rem]&quot;&gt;
                                  {testimonial.title}
                                &lt;&#x2F;p&gt;
                              &lt;&#x2F;div&gt;
                            &lt;&#x2F;div&gt;
                          &lt;&#x2F;blockquote&gt;
                        &lt;&#x2F;SwiperSlide&gt;
                      ))}
                      {&#x2F;*&#x2F;.swiper-slide *&#x2F;}

                      {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
                    &lt;&#x2F;Swiper&gt;
                    &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                      &lt;div className&#x3D;&quot;swiper-pagination spt1&quot;&gt;&lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.swiper *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.swiper-container *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;div *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;{&quot; &quot;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;div *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Testimonials11 />
      <CodeSnippet
        code={`
import { testimonials } from &quot;@&#x2F;data&#x2F;testimonials&quot;;
import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;

import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Testimonials11() {
  return (
    &lt;section id&#x3D;&quot;snippet-11&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-white !text-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-[4.5rem] xl:!mb-[-1.5rem] lg:!mb-[-1.5rem]&quot;&gt;
            &lt;div
              className&#x3D;&quot;card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll relative z-0 before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:rounded-[0.4rem] before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]&quot;
              style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg2.jpg)&quot; }}
            &gt;
              &lt;div className&#x3D;&quot;card-body p-9 xl:!p-14&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-0&quot;&gt;
                  &lt;div className&#x3D;&quot;xxl:w-9&#x2F;12 w-full flex-[0_0_auto] max-w-full !mx-auto&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;swiper-container dots-light dots-closer !mb-6 relative z-10&quot;
                      data-margin&#x3D;{30}
                      data-dots&#x3D;&quot;true&quot;
                    &gt;
                      &lt;Swiper
                        className&#x3D;&quot;swiper&quot;
                        spaceBetween&#x3D;{30}
                        modules&#x3D;{[Pagination]}
                        pagination&#x3D;{{
                          clickable: true,
                          el: &quot;.spdt11&quot;,
                        }}
                      &gt;
                        {testimonials.map((elm, i) &#x3D;&gt; (
                          &lt;SwiperSlide key&#x3D;{i} className&#x3D;&quot;swiper-slide&quot;&gt;
                            &lt;span className&#x3D;&quot;ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] before:overflow-hidden before:left-0 before:top-0 five !mb-3&quot; &#x2F;&gt;
                            &lt;blockquote className&#x3D;&quot;!border-0 text-[1rem] !mb-2&quot;&gt;
                              &lt;p&gt;“{elm.quote}”&lt;&#x2F;p&gt;
                              &lt;div className&#x3D;&quot;flex items-center justify-center !text-center&quot;&gt;
                                &lt;div className&#x3D;&quot;info !pl-0&quot;&gt;
                                  &lt;h5 className&#x3D;&quot;!mb-1 !text-white&quot;&gt;
                                    {elm.name}
                                  &lt;&#x2F;h5&gt;
                                  &lt;p className&#x3D;&quot;!mb-0 text-[0.8rem]&quot;&gt;
                                    {elm.title}
                                  &lt;&#x2F;p&gt;
                                &lt;&#x2F;div&gt;
                              &lt;&#x2F;div&gt;
                            &lt;&#x2F;blockquote&gt;
                          &lt;&#x2F;SwiperSlide&gt;
                        ))}

                        {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
                      &lt;&#x2F;Swiper&gt;
                      &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                        &lt;div className&#x3D;&quot;swiper-pagination spdt11&quot;&gt;&lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.swiper *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.swiper-container *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.card-body *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.card *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Testimonials12 />
      <CodeSnippet
        code={`
import { testimonials6 } from &quot;@&#x2F;data&#x2F;testimonials&quot;;

import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Testimonials12() {
  return (
    &lt;section id&#x3D;&quot;snippet-12&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;md:w-10&#x2F;12 lg:w-8&#x2F;12 xl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;div
              className&#x3D;&quot;swiper-container dots-closer !text-center !mb-6 relative z-10&quot;
              data-margin&#x3D;{30}
              data-dots&#x3D;&quot;true&quot;
            &gt;
              &lt;Swiper
                className&#x3D;&quot;swiper&quot;
                spaceBetween&#x3D;{30}
                modules&#x3D;{[Pagination]}
                pagination&#x3D;{{
                  clickable: true,
                  el: &quot;.spdt12&quot;,
                }}
              &gt;
                {testimonials6.map((elm, i) &#x3D;&gt; (
                  &lt;SwiperSlide key&#x3D;{i} className&#x3D;&quot;swiper-slide&quot;&gt;
                    &lt;blockquote className&#x3D;&quot;border-0 !text-[1rem] !leading-[1.7] !font-medium m-[0_0_1rem]&quot;&gt;
                      &lt;p&gt;“{elm.quote}”&lt;&#x2F;p&gt;
                      &lt;div className&#x3D;&quot;flex items-center text-left justify-center&quot;&gt;
                        &lt;img
                          className&#x3D;&quot;!rounded-[50%] !w-[3.5rem]&quot;
                          src&#x3D;{elm.imageSrc}
                          alt&#x3D;&quot;image&quot;
                          width&#x3D;{100}
                          height&#x3D;{100}
                        &#x2F;&gt;
                        &lt;div className&#x3D;&quot;info !pl-4&quot;&gt;
                          &lt;h5 className&#x3D;&quot;!mb-1 text-[.95rem] !leading-[1.5]&quot;&gt;
                            {elm.name}
                          &lt;&#x2F;h5&gt;
                          &lt;p className&#x3D;&quot;!mb-0 text-[.85rem]&quot;&gt;{elm.role}&lt;&#x2F;p&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;blockquote&gt;
                  &lt;&#x2F;SwiperSlide&gt;
                ))}

                {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
              &lt;&#x2F;Swiper&gt;
              &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                &lt;div className&#x3D;&quot;swiper-pagination spdt12&quot;&gt;&lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.swiper *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.swiper-container *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <section className="wrapper !bg-[#ffffff]">
        <div className="container-card">
          {/* import Facts from "@/components/homes/home-18/Facts"; */}
          <Facts />
          {/*/.card */}
        </div>
        {/* /.container-card */}
        <div className="container">
          {/* import Testimonials13 from "@/components/homes/home-18/Testimonials"; */}
          <Testimonials13 />

          {/*/.row */}
        </div>
        {/* /.container */}
      </section>
      <CodeSnippet
        code={`    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
        &lt;div className&#x3D;&quot;container-card&quot;&gt;
        {&#x2F;* import Facts from &quot;@&#x2F;components&#x2F;homes&#x2F;home-18&#x2F;Facts&quot;; *&#x2F;}
          &lt;Facts &#x2F;&gt;
          {&#x2F;*&#x2F;.card *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container-card *&#x2F;}
        &lt;div className&#x3D;&quot;container&quot;&gt;
        {&#x2F;* import Testimonials13 from &quot;@&#x2F;components&#x2F;homes&#x2F;home-18&#x2F;Testimonials&quot;; *&#x2F;}
          &lt;Testimonials13 &#x2F;&gt;

          {&#x2F;*&#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;section&gt;`}
      />
      <Testimonials14 />
      <CodeSnippet
        code={`
import { testimonials } from &quot;@&#x2F;data&#x2F;testimonials&quot;;
import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Testimonials14() {
  return (
    &lt;section id&#x3D;&quot;snippet-14&quot; className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div
        className&#x3D;&quot;wrapper image-wrapper bg-image bg-overlay !text-white !mb-[3.5rem] xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem] bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]&quot;
        style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg32.jpg)&quot; }}
      &gt;
        &lt;div className&#x3D;&quot;container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24 !text-center&quot;&gt;
          &lt;i className&#x3D;&quot;icn-flower !text-white xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] opacity-50 before:content-[&#39;\e907&#39;] font-CustomFont&quot; &#x2F;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-3&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-9&#x2F;12 xxl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
              &lt;div
                className&#x3D;&quot;swiper-container dots-light dots-closer !mb-6 relative z-10&quot;
                data-margin&#x3D;{30}
                data-dots&#x3D;&quot;true&quot;
              &gt;
                &lt;Swiper
                  className&#x3D;&quot;swiper&quot;
                  spaceBetween&#x3D;{30}
                  modules&#x3D;{[Pagination]}
                  pagination&#x3D;{{
                    clickable: true,
                    el: &quot;.spdt14&quot;,
                  }}
                &gt;
                  {testimonials.map((elm, i) &#x3D;&gt; (
                    &lt;SwiperSlide key&#x3D;{i} className&#x3D;&quot;swiper-slide&quot;&gt;
                      &lt;blockquote className&#x3D;&quot;border-0 !text-[1.2rem] !mb-0 m-[0_0_1rem] !leading-[1.7] font-medium&quot;&gt;
                        &lt;p&gt;“{elm.quote}”&lt;&#x2F;p&gt;
                        &lt;div className&#x3D;&quot;flex items-center text-left justify-center&quot;&gt;
                          &lt;div className&#x3D;&quot;info p-0&quot;&gt;
                            &lt;h6 className&#x3D;&quot;!mb-0 !text-white !text-[.85rem] !leading-[1.55] !tracking-[normal] font-semibold&quot;&gt;
                              {elm.name}
                            &lt;&#x2F;h6&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;blockquote&gt;
                    &lt;&#x2F;SwiperSlide&gt;
                  ))}

                  {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
                &lt;&#x2F;Swiper&gt;
                &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                  &lt;div className&#x3D;&quot;swiper-pagination spdt14&quot;&gt;&lt;&#x2F;div&gt;
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
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;section *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Testimonials15 />
      <CodeSnippet
        code={`
import { testimonials3 } from &quot;@&#x2F;data&#x2F;testimonials&quot;;
import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Testimonials15() {
  return (
    &lt;section id&#x3D;&quot;snippet-15&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div
        className&#x3D;&quot;wrapper image-wrapper bg-image bg-overlay !mb-14 xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem] bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]&quot;
        style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg35.jpg)&quot; }}
      &gt;
        &lt;div className&#x3D;&quot;container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]&quot;&gt;
          &lt;h2 className&#x3D;&quot;!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-4 !text-center !text-white&quot;&gt;
            Happy Customers
          &lt;&#x2F;h2&gt;
          &lt;div className&#x3D;&quot;swiper-container dots-closer dots-light dots-light-75&quot;&gt;
            &lt;Swiper
              className&#x3D;&quot;swiper&quot;
              modules&#x3D;{[Pagination]}
              pagination&#x3D;{{
                clickable: true,
                el: &quot;.spdt15&quot;,
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
              {testimonials3.map((elm, i) &#x3D;&gt; (
                &lt;SwiperSlide key&#x3D;{i} className&#x3D;&quot;swiper-slide&quot;&gt;
                  &lt;div className&#x3D;&quot;item-inner&quot;&gt;
                    &lt;div className&#x3D;&quot;card border-0 !bg-[rgba(255,255,255,.9)]&quot;&gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                        &lt;span className&#x3D;&quot;ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] before:overflow-hidden before:left-0 before:top-0 five !mb-3&quot; &#x2F;&gt;
                        &lt;blockquote className&#x3D;&quot;!text-[0.85rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0&quot;&gt;
                          &lt;p&gt;“{elm.quote}”&lt;&#x2F;p&gt;
                          &lt;div className&#x3D;&quot;flex items-center text-left&quot;&gt;
                            &lt;div className&#x3D;&quot;info p-0&quot;&gt;
                              &lt;h5 className&#x3D;&quot;!mb-0&quot;&gt;{elm.name}&lt;&#x2F;h5&gt;
                              &lt;p className&#x3D;&quot;!mb-0 text-[0.8rem]&quot;&gt;{elm.role}&lt;&#x2F;p&gt;
                            &lt;&#x2F;div&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;blockquote&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.item-inner *&#x2F;}
                &lt;&#x2F;SwiperSlide&gt;
              ))}

              {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
            &lt;&#x2F;Swiper&gt;
            &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
              &lt;div className&#x3D;&quot;swiper-pagination spdt15&quot;&gt;&lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.swiper *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.swiper-container *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.container *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.wrapper *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Testimonials16 />
      <CodeSnippet
        code={`

import { testimonials } from &quot;@&#x2F;data&#x2F;testimonials&quot;;

import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Testimonials16() {
  return (
    &lt;&gt;
      &lt;section id&#x3D;&quot;snippet-16&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
          &lt;div className&#x3D;&quot;card !bg-[#edf2fc] !rounded-[0.8rem]&quot;&gt;
            &lt;div className&#x3D;&quot;card-body py-[4.5rem] xl:!px-0 lg:!px-0 px-[40px]&quot;&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
                &lt;div className&#x3D;&quot;lg:w-8&#x2F;12 xl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%]&quot;&gt;
                  &lt;h2 className&#x3D;&quot;!text-[0.8rem] uppercase !text-[#605dba] !mb-3 !leading-[1.35] !tracking-[0.02rem]&quot;&gt;
                    Happy Customers
                  &lt;&#x2F;h2&gt;
                  &lt;h3 className&#x3D;&quot;xl:!text-[1.8rem] !text-[calc(1.305rem_+_0.66vw)] !leading-[1.3] font-semibold !mb-10 xxl:!px-10&quot;&gt;
                    Don&#39;t take our word for it. See what customers are saying
                    about us.
                  &lt;&#x2F;h3&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.row *&#x2F;}
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] items-center&quot;&gt;
                &lt;div className&#x3D;&quot;lg:w-5&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto hidden xl:!flex lg:!flex xl:!px-[35px] lg:!px-[20px]&quot;&gt;
                  &lt;div className&#x3D;&quot;img-mask mask-3&quot;&gt;
                    &lt;img
                      srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about28@2x.jpg 2x&quot;
                      alt&#x3D;&quot;image&quot;
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about28.jpg&quot;
                      width&#x3D;&quot;385&quot;
                      height&#x3D;&quot;360&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
                &lt;div className&#x3D;&quot;lg:w-6&#x2F;12 xl:w-6&#x2F;12 xxl:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mr-auto xl:!px-[35px] lg:!px-[20px]&quot;&gt;
                  &lt;div
                    className&#x3D;&quot;swiper-container dots-start dots-closer !mb-6 relative z-10&quot;
                    data-margin&#x3D;{30}
                    data-dots&#x3D;&quot;true&quot;
                  &gt;
                    &lt;Swiper
                      className&#x3D;&quot;swiper&quot;
                      spaceBetween&#x3D;{30}
                      modules&#x3D;{[Pagination]}
                      pagination&#x3D;{{
                        clickable: true,
                        el: &quot;.spdt16&quot;,
                      }}
                    &gt;
                      {testimonials.map((elm, i) &#x3D;&gt; (
                        &lt;SwiperSlide key&#x3D;{i} className&#x3D;&quot;swiper-slide&quot;&gt;
                          &lt;span className&#x3D;&quot;ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] before:overflow-hidden before:left-0 before:top-0 five !mb-3&quot; &#x2F;&gt;
                          &lt;blockquote className&#x3D;&quot;!pl-0 !text-[1rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0&quot;&gt;
                            &lt;p&gt;“{elm.quote}”&lt;&#x2F;p&gt;
                            &lt;div className&#x3D;&quot;flex items-center text-left&quot;&gt;
                              &lt;div className&#x3D;&quot;info !pl-0&quot;&gt;
                                &lt;h5 className&#x3D;&quot;!mb-1 text-[.9rem] !leading-[1.5]&quot;&gt;
                                  {elm.name}
                                &lt;&#x2F;h5&gt;
                                &lt;p className&#x3D;&quot;!mb-0 text-[0.8rem]&quot;&gt;
                                  {elm.title}
                                &lt;&#x2F;p&gt;
                              &lt;&#x2F;div&gt;
                            &lt;&#x2F;div&gt;
                          &lt;&#x2F;blockquote&gt;
                        &lt;&#x2F;SwiperSlide&gt;
                      ))}
                      {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
                    &lt;&#x2F;Swiper&gt;
                    &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                      &lt;div className&#x3D;&quot;swiper-pagination spdt16&quot;&gt;&lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.swiper *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.swiper-container *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;column *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.row *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.card-body *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;.card *&#x2F;}
        &lt;&#x2F;div&gt;
      &lt;&#x2F;section&gt;
    &lt;&#x2F;&gt;
  );
}`}
      />
      <section id="snippet-17" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          {/* import Testimonials17 from "@/components/homes/home-29/Testimonials"; */}
          <Testimonials17 />
        </div>
      </section>
      <CodeSnippet
        code={` &lt;section id&#x3D;&quot;snippet-17&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
        &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        {&#x2F;* import Testimonials17 from &quot;@&#x2F;components&#x2F;homes&#x2F;home-29&#x2F;Testimonials&quot;; *&#x2F;}
          &lt;Testimonials17 &#x2F;&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;section&gt;`}
      />
      <Testimonials />
      <div className="wrapper pb-16 xl:pb-20 lg:pb-20 md:pb-20"></div>
      <div className="wrapper pb-16 xl:pb-20 lg:pb-20 md:pb-20"></div>
      <div className="wrapper pb-16 xl:pb-20 lg:pb-20 md:pb-20"></div>
      <CodeSnippet
        code={`

import { testimonials5 } from &quot;@&#x2F;data&#x2F;testimonials&quot;;
import { useEffect, useRef } from &quot;react&quot;;

export default function Testimonials() {
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
    &lt;section className&#x3D;&quot;section-frame xxl:!mx-12&quot;&gt;
      &lt;div
        className&#x3D;&quot;wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500 section-frame-wrapper bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.5)]&quot;
        style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg23.png)&quot; }}
      &gt;
        &lt;div className&#x3D;&quot;container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
            &lt;div className&#x3D;&quot;md:w-10&#x2F;12 lg:w-9&#x2F;12 xl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
              &lt;h3 className&#x3D;&quot;!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !mb-10 xxl:!px-10&quot;&gt;
                Don&#39;t take our word for it. See what customers are saying about
                us.
              &lt;&#x2F;h3&gt;
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;column *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
            &lt;div className&#x3D;&quot;itemgrid xl:w-11&#x2F;12 lg:w-11&#x2F;12 md:w-11&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto xl:!mb-[-17.5rem] lg:!mb-[-17.5rem]&quot;&gt;
              &lt;div
                ref&#x3D;{isotopContainer}
                className&#x3D;&quot;flex flex-wrap mx-[-15px] isotope !mt-[-30px]&quot;
              &gt;
                {testimonials5.map((testimonial) &#x3D;&gt; (
                  &lt;div
                    key&#x3D;{testimonial.id}
                    className&#x3D;&quot;item md:w-6&#x2F;12 lg:w-6&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;
                  &gt;
                    &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[40px]&quot;&gt;
                        &lt;span className&#x3D;&quot;ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] before:overflow-hidden before:left-0 before:top-0 five !mb-3&quot; &#x2F;&gt;
                        &lt;blockquote className&#x3D;&quot;!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-[&#39;\u201d&#39;] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]&quot;&gt;
                          &lt;p&gt;{testimonial.quote}&lt;&#x2F;p&gt;
                          &lt;div className&#x3D;&quot;flex items-center text-left&quot;&gt;
                            &lt;div className&#x3D;&quot;info !pl-0&quot;&gt;
                              &lt;h5 className&#x3D;&quot;!mb-1 text-[.9rem] !leading-[1.5]&quot;&gt;
                                {testimonial.name}
                              &lt;&#x2F;h5&gt;
                              &lt;p className&#x3D;&quot;!mb-0 text-[.8rem]&quot;&gt;
                                {testimonial.role}
                              &lt;&#x2F;p&gt;
                            &lt;&#x2F;div&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;blockquote&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                ))}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.row *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.grid-view *&#x2F;}
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
    </>
  );
}
