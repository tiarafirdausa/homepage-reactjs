import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import PageTitle from "@/components/blocks/PageTitle";
import Team3 from "@/components/blocks/team/Team3";
import CodeSnippet from "@/components/common/CodeSnippet";
import Team1 from "@/components/homes/home-11/Team";
import Team2 from "@/components/homes/home-15/Team";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Team || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageTeam() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Team" />
      <BlockPageLinks />
      <section id="snippet-1" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <Team1 />
        </div>
      </section>
      <CodeSnippet
        code={`import { teamMembers } from &quot;@&#x2F;data&#x2F;team&quot;;

import React from &quot;react&quot;;

export default function Team() {
  return (
    &lt;&gt;
      {&quot; &quot;}
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mb-3&quot;&gt;
        &lt;div className&#x3D;&quot;md:w-10&#x2F;12 lg:w-full xl:w-10&#x2F;12 xxl:w-9&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
          &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#747ed1] !tracking-[0.02rem] !leading-[1.35] !mb-3&quot;&gt;
            Our Team
          &lt;&#x2F;h2&gt;
          &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-7 lg:!px-36 xl:!px-32&quot;&gt;
            Think unique and be innovative. Make a difference with Sandbox.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;.row *&#x2F;}
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] grid-view md:mx-[-20px] lg:mx-[-20px] xl:mx-[-25px] !mt-[-40px] xl:!mt-0 lg:!mt-0 xl:!mb-[10rem] lg:!mb-[10rem] md:!mb-[10rem]&quot;&gt;
        {teamMembers.map((member, index) &#x3D;&gt; (
          &lt;div
            key&#x3D;{index}
            className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full md:!mt-[40px] max-md:!mt-[40px]&quot;
          &gt;
            &lt;div className&#x3D;&quot;!relative&quot;&gt;
              &lt;div
                className&#x3D;&quot;shape !rounded-[.4rem] !bg-[#f2f3fb] rellax xl:block lg:block md:block absolute&quot;
                data-rellax-speed&#x3D;{0}
                style&#x3D;{{
                  bottom: &quot;-0.75rem&quot;,
                  right: &quot;-0.75rem&quot;,
                  width: &quot;98%&quot;,
                  height: &quot;98%&quot;,
                  zIndex: 0,
                }}
              &#x2F;&gt;
              &lt;div className&#x3D;&quot;card&quot;&gt;
                &lt;figure className&#x3D;&quot;card-img-top&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;max-w-full h-auto&quot;
                    srcSet&#x3D;{member.imageSrcSet}
                    alt&#x3D;&quot;image&quot;
                    src&#x3D;{member.imageSrc}
                    width&#x3D;{300}
                    height&#x3D;{300}
                  &#x2F;&gt;
                &lt;&#x2F;figure&gt;
                &lt;div className&#x3D;&quot;card-body px-6 py-5&quot;&gt;
                  &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;{member.name}&lt;&#x2F;h4&gt;
                  &lt;p className&#x3D;&quot;!mb-0 text-[.85rem]&quot;&gt;{member.role}&lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        ))}
        {&#x2F;*&#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
    &lt;&#x2F;&gt;
  );
}`}
      />
      <section id="snippet-2" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <Team2 />
        </div>
      </section>
      <CodeSnippet
        code={`

import { slidesData } from &quot;@&#x2F;data&#x2F;team&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Team() {
  return (
    &lt;&gt;
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mb-3&quot;&gt;
        &lt;div className&#x3D;&quot;md:w-10&#x2F;12 lg:w-10&#x2F;12 xl:w-9&#x2F;12 xxl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
          &lt;svg
            xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
            viewBox&#x3D;&quot;0 0 409.6 356.2&quot;
            data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;team.svg&quot;
            className&#x3D;&quot;svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4 m-[0_auto]&quot;
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
          &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 xl:!px-[4.5rem] lg:!px-[4.5rem]&quot;&gt;
            Save your time and money by choosing our professional team.
          &lt;&#x2F;h2&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;.row *&#x2F;}
      &lt;div className&#x3D;&quot;!relative&quot;&gt;
        &lt;div
          className&#x3D;&quot;shape !rounded-[50%] !bg-[#fff8ee] rellax !w-[6rem] !h-[6rem] absolute z-[1]&quot;
          data-rellax-speed&#x3D;{1}
          style&#x3D;{{ bottom: &quot;0.5rem&quot;, right: &quot;-1.7rem&quot; }}
        &#x2F;&gt;
        &lt;div
          className&#x3D;&quot;shape !rounded-[50%] bg-line red rellax !w-[6rem] !h-[6rem] absolute z-[1] opacity-50&quot;
          data-rellax-speed&#x3D;{1}
          style&#x3D;{{ top: &quot;0.5rem&quot;, left: &quot;-1.7rem&quot; }}
        &#x2F;&gt;
        &lt;div className&#x3D;&quot;swiper-container dots-closer !mb-6&quot;&gt;
          &lt;Swiper
            className&#x3D;&quot;swiper&quot;
            modules&#x3D;{[Pagination]}
            pagination&#x3D;{{
              clickable: true,
              el: &quot;.spd13&quot;,
            }}
            spaceBetween&#x3D;{0}
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
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
          &gt;
            {slidesData.map((slide) &#x3D;&gt; (
              &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot; key&#x3D;{slide.id}&gt;
                &lt;div className&#x3D;&quot;item-inner&quot;&gt;
                  &lt;div className&#x3D;&quot;card&quot;&gt;
                    &lt;div className&#x3D;&quot;card-body p-[40px]&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;rounded-[50%] !w-[5rem] !mb-4&quot;
                        srcSet&#x3D;{slide.imageSrcSet}
                        alt&#x3D;&quot;image&quot;
                        src&#x3D;{slide.imageSrc}
                        width&#x3D;{100}
                        height&#x3D;{100}
                      &#x2F;&gt;
                      &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;{slide.name}&lt;&#x2F;h4&gt;
                      &lt;div className&#x3D;&quot;!text-[0.65rem] !mb-2 uppercase !tracking-[0.02rem] font-bold !text-[#aab0bc]&quot;&gt;
                        {slide.role}
                      &lt;&#x2F;div&gt;
                      &lt;p className&#x3D;&quot;!mb-2&quot;&gt;{slide.description}&lt;&#x2F;p&gt;
                      &lt;nav className&#x3D;&quot;nav social !mb-0&quot;&gt;
                        &lt;a
                          className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-twitter before:content-[&#39;\ed59&#39;] text-[1rem] !text-[#5daed5]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                        &lt;a
                          className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-facebook-f before:content-[&#39;\eae2&#39;] text-[1rem] !text-[#4470cf]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                        &lt;a
                          className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-dribbble before:content-[&#39;\eaa2&#39;] text-[1rem] !text-[#e94d88]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                      &lt;&#x2F;nav&gt;
                      {&#x2F;* &#x2F;.social *&#x2F;}
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
            &lt;div className&#x3D;&quot;swiper-pagination spd13&quot;&gt;&lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.swiper *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.swiper-container *&#x2F;}
      &lt;&#x2F;div&gt;
    &lt;&#x2F;&gt;
  );
}`}
      />
      <section id="snippet-3" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <Team3 />
        </div>
      </section>
      <CodeSnippet
        code={`
import { slidesData } from &quot;@&#x2F;data&#x2F;team&quot;;
import React from &quot;react&quot;;
import { Pagination } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

export default function Team3() {
  return (
    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-24 md:!mb-[7rem] xl:!mb-40 items-center&quot;&gt;
      &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
        &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]&quot;&gt;
          MEET THE TEAM
        &lt;&#x2F;h2&gt;
        &lt;h3 className&#x3D;&quot;!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-5&quot;&gt;
          Save your time and money by choosing our professional team.
        &lt;&#x2F;h3&gt;
        &lt;p&gt;
          Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros tempus porttitor.
        &lt;&#x2F;p&gt;
        &lt;a
          href&#x3D;&quot;#&quot;
          className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
        &gt;
          See All Members
        &lt;&#x2F;a&gt;
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;column *&#x2F;}
      &lt;div className&#x3D;&quot;xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full&quot;&gt;
        &lt;div className&#x3D;&quot;swiper-container !text-center !mb-6&quot;&gt;
          &lt;Swiper
            className&#x3D;&quot;swiper&quot;
            spaceBetween&#x3D;{30}
            modules&#x3D;{[Pagination]}
            pagination&#x3D;{{
              clickable: true,
              el: &quot;.spd20&quot;,
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
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          &gt;
            {slidesData.map((elm, i) &#x3D;&gt; (
              &lt;SwiperSlide key&#x3D;{i} className&#x3D;&quot;swiper-slide&quot;&gt;
                &lt;img
                  className&#x3D;&quot;rounded-[50%] w-40 !mx-auto !mb-4&quot;
                  alt&#x3D;&quot;image&quot;
                  width&#x3D;{300}
                  srcSet&#x3D;{elm.imageSrcSet}
                  height&#x3D;{300}
                  src&#x3D;{elm.imageSrc}
                &#x2F;&gt;
                &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;{elm.name}&lt;&#x2F;h4&gt;
                &lt;div className&#x3D;&quot;!text-[0.65rem] uppercase !tracking-[0.02rem] font-bold !text-[#aab0bc] !mb-2&quot;&gt;
                  {elm.role}
                &lt;&#x2F;div&gt;
                &lt;p className&#x3D;&quot;!mb-2&quot;&gt;{elm.description}&lt;&#x2F;p&gt;
                &lt;nav className&#x3D;&quot;nav social justify-center !text-center !mb-0&quot;&gt;
                  &lt;a
                    className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                    href&#x3D;&quot;#&quot;
                  &gt;
                    &lt;i className&#x3D;&quot;uil uil-twitter before:content-[&#39;\ed59&#39;] text-[1rem] !text-[#5daed5]&quot; &#x2F;&gt;
                  &lt;&#x2F;a&gt;
                  &lt;a
                    className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                    href&#x3D;&quot;#&quot;
                  &gt;
                    &lt;i className&#x3D;&quot;uil uil-slack before:content-[&#39;\ecdd&#39;] text-[1rem] !text-[#d4135c]&quot; &#x2F;&gt;
                  &lt;&#x2F;a&gt;
                  &lt;a
                    className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                    href&#x3D;&quot;#&quot;
                  &gt;
                    &lt;i className&#x3D;&quot;uil uil-linkedin before:content-[&#39;\ebd1&#39;] text-[1rem] !text-[#3393c1]&quot; &#x2F;&gt;
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;nav&gt;
                {&#x2F;* &#x2F;.social *&#x2F;}
              &lt;&#x2F;SwiperSlide&gt;
            ))}
          &lt;&#x2F;Swiper&gt;
          &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
            &lt;div className&#x3D;&quot;swiper-pagination spd20&quot;&gt;&lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.swiper *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.swiper-container *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;*&#x2F;column *&#x2F;}
    &lt;&#x2F;div&gt;
  );
}`}
      />
    </>
  );
}
