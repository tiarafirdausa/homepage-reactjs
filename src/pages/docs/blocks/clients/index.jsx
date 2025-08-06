import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import Clients1 from "@/components/blocks/clients/Clients1";
import Clients2 from "@/components/blocks/clients/Clients2";
import Clients3 from "@/components/blocks/clients/Clients3";
import PageTitle from "@/components/blocks/PageTitle";
import CodeSnippet from "@/components/common/CodeSnippet";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Clients || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageClients() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Clients" />
      <BlockPageLinks />
      <Clients1 />
      <CodeSnippet
        code={`
&quot;use client&quot;;
import { brands } from &quot;@&#x2F;data&#x2F;brands&quot;;
import React from &quot;react&quot;;
import { Autoplay } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Clients1() {
  return (
    &lt;section id&#x3D;&quot;snippet-1&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;p className&#x3D;&quot;text-center !mb-8&quot;&gt;
          Trusted by over 2K+ clients across the world
        &lt;&#x2F;p&gt;
        &lt;div className&#x3D;&quot;swiper-container clients !mb-36 relative z-10&quot;&gt;
          &lt;Swiper
            spaceBetween&#x3D;{30}
            loop
            modules&#x3D;{[Autoplay]}
            autoplay&#x3D;{{
              delay: 1,
            }}
            breakpoints&#x3D;{{
              0: { slidesPerView: 3 },
              575: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
              1400: {
                slidesPerView: 7,
              },
            }}
            speed&#x3D;{5000}
            className&#x3D;&quot;swiper pointer-events-none ticker&quot;
          &gt;
            {brands.map((image, index) &#x3D;&gt; (
              &lt;SwiperSlide className&#x3D;&quot;swiper-slide px-5&quot; key&#x3D;{index}&gt;
                &lt;img
                  className&#x3D;&quot;!w-full !h-auto&quot;
                  alt&#x3D;&quot;image&quot;
                  src&#x3D;{image.src}
                  width&#x3D;{image.width}
                  height&#x3D;{image.height}
                &#x2F;&gt;
              &lt;&#x2F;SwiperSlide&gt;
            ))}

            {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
          &lt;&#x2F;Swiper&gt;
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
      <Clients2 />

      <CodeSnippet
        code={`import { brandImages } from &quot;@&#x2F;data&#x2F;brands&quot;;
import React from &quot;react&quot;;

export default function Clients2() {
  return (
    &lt;section id&#x3D;&quot;snippet-2&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 lg:!mt-0&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full xl:!mt-2 lg:!mt-2 !mt-[50px]&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]&quot;&gt;
              Our Clients
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 xxl:!pr-5&quot;&gt;
              Trusted by over 300+ clients
            &lt;&#x2F;h3&gt;
            &lt;p className&#x3D;&quot;lead text-[1rem] !mb-0 xxl:!pr-5&quot;&gt;
              We bring solutions to make life easier for our customers.
            &lt;&#x2F;p&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] xl:!mt-0 lg:!mt-0&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-35px] !mt-[-70px]&quot;&gt;
              {brandImages.map((src, index) &#x3D;&gt; (
                &lt;div
                  className&#x3D;&quot;xl:w-3&#x2F;12 lg:w-3&#x2F;12 md:w-3&#x2F;12 w-6&#x2F;12 flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[70px]&quot;
                  key&#x3D;{index}
                &gt;
                  &lt;figure className&#x3D;&quot;px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2&quot;&gt;
                    &lt;img src&#x3D;{src} alt&#x3D;&quot;image&quot; width&#x3D;&quot;450&quot; height&#x3D;&quot;301&quot; &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
              ))}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.row *&#x2F;}
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
      <Clients3 />
      <CodeSnippet
        code={`import { brandImages } from &quot;@&#x2F;data&#x2F;brands&quot;;
import React from &quot;react&quot;;

export default function Clients3() {
  return (
    &lt;section id&#x3D;&quot;snippet-3&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]&quot;&gt;
          Our Clients
        &lt;&#x2F;h2&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] !mb-10 !mt-[-25px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-0&quot;&gt;
              We are trusted by over 300+ clients. Join them by using our
              services and grow your business.
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
            &lt;p className&#x3D;&quot;lead text-[0.9rem] font-medium !leading-[1.65] !mb-0&quot;&gt;
              Donec ullamcorper nulla non metus auctor fringilla. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer posuere erat a ante. Maecenas faucibus mollis
              interdum. Cras justo odio mollis.
            &lt;&#x2F;p&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] row-cols-2 row-cols-md-3 row-cols-xl-5 xl:mx-[-15px] lg:mx-[-15px] !mt-[-30px] justify-center&quot;&gt;
          {brandImages.slice(0, 5).map((elm, i) &#x3D;&gt; (
            &lt;div
              key&#x3D;{i}
              className&#x3D;&quot;xl:w-1&#x2F;5 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-6&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;
            &gt;
              &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !h-full items-center&quot;&gt;
                &lt;div className&#x3D;&quot;card-body items-center flex !px-3 py-6 xl:!p-8 lg:!p-8 md:!p-8&quot;&gt;
                  &lt;figure className&#x3D;&quot;md:!px-3 xl:!px-0 xxl:!px-3 !mb-0&quot;&gt;
                    &lt;img alt&#x3D;&quot;image&quot; src&#x3D;{elm} width&#x3D;&quot;450&quot; height&#x3D;&quot;301&quot; &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card-body *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.card *&#x2F;}
            &lt;&#x2F;div&gt;
          ))}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.row *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.container *&#x2F;}

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
    </>
  );
}
