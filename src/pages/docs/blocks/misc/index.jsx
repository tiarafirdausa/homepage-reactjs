import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import PageTitle from "@/components/blocks/PageTitle";
import Jobs from "@/components/career/Jobs";
import Jobs2 from "@/components/career/Jobs2";
import CodeSnippet from "@/components/common/CodeSnippet";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Misc || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageMiscBlock() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Misc" />
      <BlockPageLinks />
      <Jobs />

      <CodeSnippet
        code={`import { jobs } from &quot;@&#x2F;data&#x2F;jobs&quot;;
import React from &quot;react&quot;;

export default function Jobs() {
  return (
    &lt;section className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div className&#x3D;&quot;container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#3f78e0] !tracking-[0.02rem] !leading-[1.35] !mb-3&quot;&gt;
              Job Positions
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-10 xxl:!px-20&quot;&gt;
              We’re always searching for amazing people to join our team. Take a
              look at our current openings.
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px]&quot;&gt;
          {jobs.map((card, index) &#x3D;&gt; (
            &lt;div
              key&#x3D;{index}
              className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;
            &gt;
              &lt;a
                href&#x3D;&quot;#&quot;
                className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] lift !h-full&quot;
              &gt;
                &lt;div className&#x3D;&quot;card-body p-5 flex flex-row&quot;&gt;
                  &lt;div&gt;
                    &lt;span
                      className&#x3D;&quot;flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] rounded-[100%] opacity-100 !text-white !w-[3rem] !h-[3rem] text-[1rem] !mr-4&quot;
                      style&#x3D;{{ backgroundColor: card.bgColor }}
                    &gt;
                      {card.initials}
                    &lt;&#x2F;span&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;span
                      className&#x3D;&quot;badge rounded py-1 !mb-2&quot;
                      style&#x3D;{{
                        backgroundColor: card.badgeBg,
                        color: card.badgeText,
                      }}
                    &gt;
                      {card.badgeLabel}
                    &lt;&#x2F;span&gt;
                    &lt;h4 className&#x3D;&quot;!mb-1&quot;&gt;{card.title}&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0 !text-[#60697b]&quot;&gt;{card.location}&lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
          ))}
          {&#x2F;*&#x2F;column *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;*&#x2F;.row *&#x2F;}
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[3rem]&quot;&gt;
          &lt;div className&#x3D;&quot;lg:w-6&#x2F;12 xl:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-3&quot;&gt;
              Can&#39;t find the right position?
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead text-[0.9rem] font-medium !leading-[1.65] !mb-5 xl:!px-3 lg:!px-3 md:!px-24&quot;&gt;
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
              leo risus, porta ac consectetur.
            &lt;&#x2F;p&gt;
            &lt;a
              href&#x3D;&quot;#&quot;
              className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
            &gt;
              Get in Touch
            &lt;&#x2F;a&gt;
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
      <section id="snippet-2" className="wrapper !bg-[#ffffff]  ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-[4.5rem] lg:pb-[4.5rem] md:pb-[4.5rem]">
          <Jobs2 />
        </div>
      </section>
      <CodeSnippet
        code={`import { jobs2, jobs3 } from &quot;@&#x2F;data&#x2F;jobs&quot;;
import React from &quot;react&quot;;

export default function Jobs2() {
  return (
    &lt;&gt;
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
        &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
          &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]&quot;&gt;
            Job Positions
          &lt;&#x2F;h2&gt;
          &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-10 xxl:!px-20&quot;&gt;
            We’re always searching for amazing people to join our team. Take a
            look at our current openings.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
      {&#x2F;* &#x2F;.row *&#x2F;}
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
        &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
          &lt;form className&#x3D;&quot;filter-form !mb-10&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-3&quot;&gt;
                &lt;div className&#x3D;&quot;form-select-wrapper&quot;&gt;
                  &lt;select className&#x3D;&quot;form-select&quot; aria-label&#x3D;&quot;&quot;&gt;
                    &lt;option&gt;Position&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;position1&quot;&gt;Business&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;position2&quot;&gt;Design&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;position3&quot;&gt;Development&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;position4&quot;&gt;Engineering&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;position5&quot;&gt;Finance&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;position6&quot;&gt;Marketing&lt;&#x2F;option&gt;
                  &lt;&#x2F;select&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-3&quot;&gt;
                &lt;div className&#x3D;&quot;form-select-wrapper&quot;&gt;
                  &lt;select className&#x3D;&quot;form-select&quot; aria-label&#x3D;&quot;&quot;&gt;
                    &lt;option&gt;Type&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;type1&quot;&gt;Full-time&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;type3&quot;&gt;Part-time&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;type4&quot;&gt;Remote&lt;&#x2F;option&gt;
                  &lt;&#x2F;select&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-3&quot;&gt;
                &lt;div className&#x3D;&quot;form-select-wrapper&quot;&gt;
                  &lt;select className&#x3D;&quot;form-select&quot; aria-label&#x3D;&quot;&quot;&gt;
                    &lt;option&gt;Location&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;location1&quot;&gt;Chicago, US&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;location3&quot;&gt;Michigan, US&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;location2&quot;&gt;New York, US&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;location4&quot;&gt;Los Angles, US&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;location5&quot;&gt;Moscow, Russia&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;location6&quot;&gt;Sydney, Australia&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;location7&quot;&gt;Birmingham, UK&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;location8&quot;&gt;Manchester, UK&lt;&#x2F;option&gt;
                    &lt;option value&#x3D;&quot;location9&quot;&gt;Beijing, China&lt;&#x2F;option&gt;
                  &lt;&#x2F;select&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;form&gt;
          &lt;div className&#x3D;&quot;job-list !mb-10&quot;&gt;
            &lt;h3 className&#x3D;&quot;!mb-4&quot;&gt;Design&lt;&#x2F;h3&gt;
            {jobs2.map((card, index) &#x3D;&gt; (
              &lt;a key&#x3D;{index} href&#x3D;&quot;#&quot; className&#x3D;&quot;card !mb-4 lift&quot;&gt;
                &lt;div className&#x3D;&quot;card-body p-5&quot;&gt;
                  &lt;span className&#x3D;&quot;flex flex-wrap mx-[-15px] justify-between items-center&quot;&gt;
                    &lt;span className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 md:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0 flex items-center !text-[#60697b]&quot;&gt;
                      &lt;span
                        className&#x3D;&quot;flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] rounded-[100%] opacity-100 !text-white !w-9 !h-9 text-[0.85rem] !mr-3&quot;
                        style&#x3D;{{ backgroundColor: card.bgColor }}
                      &gt;
                        {card.initials}
                      &lt;&#x2F;span&gt;
                      {card.title}
                    &lt;&#x2F;span&gt;
                    &lt;span className&#x3D;&quot;w-5&#x2F;12 xl:w-3&#x2F;12 lg:w-3&#x2F;12 md:w-3&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full !text-[#60697b] flex items-center&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-clock !mr-[.25rem] before:content-[&#39;\e9ee&#39;]&quot; &#x2F;&gt;
                      {card.type}
                    &lt;&#x2F;span&gt;
                    &lt;span className&#x3D;&quot;w-7&#x2F;12 md:w-4&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full !text-[#60697b] flex items-center&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-location-arrow !mr-[.25rem] before:content-[&#39;\ebd9&#39;]&quot; &#x2F;&gt;
                      {card.location}
                    &lt;&#x2F;span&gt;
                    &lt;span className&#x3D;&quot;hidden xl:block lg:block w-1&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !text-[#60697b]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-angle-right-b before:content-[&#39;\e930&#39;]&quot; &#x2F;&gt;
                    &lt;&#x2F;span&gt;
                  &lt;&#x2F;span&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;.card-body *&#x2F;}
              &lt;&#x2F;a&gt;
            ))}
            {&#x2F;* &#x2F;.card *&#x2F;}
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;job-list&quot;&gt;
            &lt;h3 className&#x3D;&quot;!mb-4&quot;&gt;Development&lt;&#x2F;h3&gt;
            {jobs3.map((card, index) &#x3D;&gt; (
              &lt;a key&#x3D;{index} href&#x3D;&quot;#&quot; className&#x3D;&quot;card !mb-4 lift&quot;&gt;
                &lt;div className&#x3D;&quot;card-body p-5&quot;&gt;
                  &lt;span className&#x3D;&quot;flex flex-wrap mx-[-15px] justify-between items-center&quot;&gt;
                    &lt;span className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 md:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0 flex items-center !text-[#60697b]&quot;&gt;
                      &lt;span
                        className&#x3D;&quot;flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] rounded-[100%] opacity-100 !text-white !w-9 !h-9 text-[0.85rem] !mr-3&quot;
                        style&#x3D;{{ backgroundColor: card.bgColor }}
                      &gt;
                        {card.initials}
                      &lt;&#x2F;span&gt;
                      {card.title}
                    &lt;&#x2F;span&gt;
                    &lt;span className&#x3D;&quot;w-5&#x2F;12 xl:w-3&#x2F;12 lg:w-3&#x2F;12 md:w-3&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full !text-[#60697b] flex items-center&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-clock !mr-[.25rem] before:content-[&#39;\e9ee&#39;]&quot; &#x2F;&gt;
                      {card.type}
                    &lt;&#x2F;span&gt;
                    &lt;span className&#x3D;&quot;w-7&#x2F;12 md:w-4&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full !text-[#60697b] flex items-center&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-location-arrow !mr-[.25rem] before:content-[&#39;\ebd9&#39;]&quot; &#x2F;&gt;
                      {card.location}
                    &lt;&#x2F;span&gt;
                    &lt;span className&#x3D;&quot;hidden xl:block lg:block w-1&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !text-[#60697b]&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-angle-right-b before:content-[&#39;\e930&#39;]&quot; &#x2F;&gt;
                    &lt;&#x2F;span&gt;
                  &lt;&#x2F;span&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;.card-body *&#x2F;}
              &lt;&#x2F;a&gt;
            ))}
            {&#x2F;* &#x2F;.card *&#x2F;}
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
      &lt;&#x2F;div&gt;
    &lt;&#x2F;&gt;
  );
}`}
      />
    </>
  );
}
