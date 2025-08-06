import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import Facts1 from "@/components/blocks/facts/Facts1";
import Facts10 from "@/components/blocks/facts/Facts10";
import Facts2 from "@/components/blocks/facts/Facts2";
import Facts3 from "@/components/blocks/facts/Facts3";
import Facts4 from "@/components/blocks/facts/Facts4";
import Facts5 from "@/components/blocks/facts/Facts5";
import Facts6 from "@/components/blocks/facts/Facts6";
import Facts8 from "@/components/blocks/facts/Facts8";
import Facts9 from "@/components/blocks/facts/Facts9";
import PageTitle from "@/components/blocks/PageTitle";
import CodeSnippet from "@/components/common/CodeSnippet";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Facts || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageFacts() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Facts" />
      <BlockPageLinks />
      <Facts1 />
      <CodeSnippet
        code={`import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;
import React from &quot;react&quot;;

export default function Facts1() {
  return (
    &lt;section id&#x3D;&quot;snippet-1&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 flex-[0_0_auto] xl:px-0 lg:px-0 !px-[15px] !mt-[50px] max-w-full xl:!order-2 xl:!ml-[8.33333333%] lg:!order-2 lg:!ml-[8.33333333%] grid&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] items-center counter-wrapper isotope&quot;&gt;
              &lt;div className&#x3D;&quot;item xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                  &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]&quot;&gt;
                    &lt;div className&#x3D;&quot;flex lg:block xl:!flex flex-row&quot;&gt;
                      &lt;div&gt;
                        &lt;div className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-purple pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]&quot;&gt;
                          &lt;i className&#x3D;&quot;uil uil-presentation-check before:content-[&#39;\ec66&#39;]&quot; &#x2F;&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      &lt;div&gt;
                        &lt;h3 className&#x3D;&quot;counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none&quot;&gt;
                          &lt;Counter max&#x3D;{7518} &#x2F;&gt;
                        &lt;&#x2F;h3&gt;
                        &lt;p className&#x3D;&quot;!mb-0&quot;&gt;Projects Done&lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.card-body *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;item xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                  &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]&quot;&gt;
                    &lt;div className&#x3D;&quot;flex lg:block xl:!flex flex-row&quot;&gt;
                      &lt;div&gt;
                        &lt;div className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-red pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]&quot;&gt;
                          &lt;i className&#x3D;&quot;uil uil-users-alt before:content-[&#39;\ed70&#39;]&quot; &#x2F;&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      &lt;div&gt;
                        &lt;h3 className&#x3D;&quot;counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none&quot;&gt;
                          &lt;Counter max&#x3D;{3472} &#x2F;&gt;
                        &lt;&#x2F;h3&gt;
                        &lt;p className&#x3D;&quot;!mb-0&quot;&gt;Happy Customers&lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.card-body *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;item xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                  &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]&quot;&gt;
                    &lt;div className&#x3D;&quot;flex lg:block xl:!flex flex-row&quot;&gt;
                      &lt;div&gt;
                        &lt;div className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-yellow pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]&quot;&gt;
                          &lt;i className&#x3D;&quot;uil uil-user-check before:content-[&#39;\ed65&#39;]&quot; &#x2F;&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      &lt;div&gt;
                        &lt;h3 className&#x3D;&quot;counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none&quot;&gt;
                          &lt;Counter max&#x3D;{4537} &#x2F;&gt;
                        &lt;&#x2F;h3&gt;
                        &lt;p className&#x3D;&quot;!mb-0&quot;&gt;Expert Employees&lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.card-body *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.card *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;item xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]&quot;&gt;
                &lt;div className&#x3D;&quot;card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]&quot;&gt;
                  &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]&quot;&gt;
                    &lt;div className&#x3D;&quot;flex lg:block xl:!flex flex-row&quot;&gt;
                      &lt;div&gt;
                        &lt;div className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-aqua pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]&quot;&gt;
                          &lt;i className&#x3D;&quot;uil uil-trophy before:content-[&#39;\ed4f&#39;]&quot; &#x2F;&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      &lt;div&gt;
                        &lt;h3 className&#x3D;&quot;counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none&quot;&gt;
                          &lt;Counter max&#x3D;{2184} &#x2F;&gt;
                        &lt;&#x2F;h3&gt;
                        &lt;p className&#x3D;&quot;!mb-0&quot;&gt;Awards Won&lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
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
          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] xl:px-0 lg:px-0 !px-[15px] !mt-[50px] max-w-full&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
              Join Our Community
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead !text-[1.05rem] !leading-[1.6] font-medium&quot;&gt;
              We have considered our business solutions to support you on every
              stage of your growth.
            &lt;&#x2F;p&gt;
            &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at
              eros. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur.
            &lt;&#x2F;p&gt;
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
      <Facts2 />
      <CodeSnippet
        code={`import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;
import React from &quot;react&quot;;

export default function Facts2() {
  return (
    &lt;section id&#x3D;&quot;snippet-2&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#3f78e0] !tracking-[0.02rem] !leading-[1.35] !mb-3&quot;&gt;
              Company Facts
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] xl:!pr-20&quot;&gt;
              We are proud of our works
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-8&#x2F;12 lg:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px] !text-center&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 409.6 409.6&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;check.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg icon-svg-lg text-[#3f78e0] !mb-3 m-[0_auto]&quot;
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
                &lt;h3 className&#x3D;&quot;counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2&quot;&gt;
                  &lt;Counter max&#x3D;{7518} &#x2F;&gt;
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!mb-0&quot;&gt;Completed Projects&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 441.4 512&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;user.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg icon-svg-lg text-[#3f78e0] !mb-3 m-[0_auto]&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;lineal-fill&quot;
                    d&#x3D;&quot;M254.9 457c-14.9-8.1-24.1-23.7-24.1-40.6V285.6c26.5 11.1 57.1 4.9 77.1-15.6-19-26.2-49.3-41.6-81.6-41.6H115.7c-55.7 0-100.9 45.2-100.9 100.9v167.9h312.4v-.8L254.9 457z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M426.6 270.8c-8.2 0-14.8 6.6-14.9 14.8v130.7c0 11.5-6.3 22.1-16.4 27.6l-66.7 36.3-66.6-36.3c-10.1-5.5-16.4-16.1-16.4-27.6V305c4.1.6 8.2.9 12.3.9 1.3 0 2.5 0 3.8-.1h1c1.1-.1 2.2-.1 3.4-.2l1.6-.2 1.6-.2c15-2 29.3-8 41.1-17.5l1.1-.9 1.3-1.1c.9-.7 1.7-1.5 2.5-2.2l.4-.4c1-.9 1.9-1.8 2.8-2.7 3.8-3.9 7.2-8.1 10.1-12.6 7.2 10.9 16.8 19.9 28 26.5 7.1 4.1 16.2 1.8 20.3-5.3 4.1-7.1 1.8-16.2-5.3-20.3-10-5.9-17.9-14.8-22.6-25.5-2.4-5.4-7.7-8.8-13.6-8.9h-13.5c-5.9 0-11.2 3.5-13.6 8.9-.5 1-.9 2-1.4 3-12.8-12.4-28.4-21.7-45.4-27.2 17.4-16.5 27.2-39.4 27.2-63.3V87.5c-.2-8.2-7-14.7-15.2-14.5-7.9.2-14.3 6.6-14.5 14.5v68.3c0 31.6-25.5 57.4-57.1 57.8h-62c-31.6-.5-57-26.2-57-57.8V87.5c0-31.9 25.9-57.8 57.8-57.8h60.5c8.2-.2 14.7-7 14.5-15.2-.2-7.9-6.6-14.3-14.5-14.5h-60.5C92.5.1 53.3 39.2 53.3 87.5v68.3c0 23.9 9.8 46.8 27.2 63.3C32.6 234.5.1 279 0 329.3v167.9c0 8.2 6.6 14.8 14.8 14.8h313.9c2.5 0 4.9-.6 7.1-1.8l73.8-40.2c19.6-10.7 31.9-31.3 31.9-53.6V285.6c-.1-8.2-6.7-14.8-14.9-14.8zM29.7 482.3v-153c.1-47.5 38.5-85.9 86-86h40.4v144.1c0 8.2 6.6 14.8 14.8 14.8s14.8-6.6 14.8-14.8V243.3h40.4c22.6 0 44.3 9 60.4 24.8-6.3 3.9-13.3 6.4-20.6 7.5h.1c-1.1.2-2.3.3-3.5.4l-.6.1c-1.2.1-2.5.1-3.7.1h-.2c-7.3 0-14.6-1.4-21.4-4.3-7.5-3.2-16.3.3-19.4 7.9-.8 1.8-1.2 3.8-1.2 5.8v130.7c0 22.4 12.2 42.9 31.8 53.7l22.6 12.3H29.7z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M327.2 405.9c-2.5 0-5-.6-7.2-1.9l-24.9-13.9c-7.2-4-9.7-13-5.7-20.2s13-9.7 20.2-5.7l15.7 8.7 34.1-30.1c6.1-5.4 15.5-4.9 21 1.3 5.4 6.1 4.9 15.5-1.3 21l-42 37.1c-2.8 2.4-6.3 3.7-9.9 3.7z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
                &lt;h3 className&#x3D;&quot;counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2&quot;&gt;
                  &lt;Counter max&#x3D;{3472} &#x2F;&gt;
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!mb-0&quot;&gt;Happy Customers&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 409.6 380.8&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;briefcase-2.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg icon-svg-lg text-[#3f78e0] !mb-3 m-[0_auto]&quot;
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
                &lt;h3 className&#x3D;&quot;counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2&quot;&gt;
                  &lt;Counter max&#x3D;{2184} &#x2F;&gt;
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!mb-0&quot;&gt;Expert Employees&lt;&#x2F;p&gt;
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
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Facts3 />

      <CodeSnippet
        code={`import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;
import { facts } from &quot;@&#x2F;data&#x2F;facts&quot;;
import React from &quot;react&quot;;

export default function Facts3() {
  return (
    &lt;section id&#x3D;&quot;snippet-3&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;div
              className&#x3D;&quot;card image-wrapper bg-full bg-image bg-overlay bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0&quot;
              data-image-src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg2.jpg&quot;
            &gt;
              &lt;div className&#x3D;&quot;card-body p-[2.25rem] xl:!p-[2.5rem]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-40px] !text-center !text-white&quot;&gt;
                  {facts.map((elm, i) &#x3D;&gt; (
                    &lt;div
                      key&#x3D;{i}
                      className&#x3D;&quot;w-6&#x2F;12 xl:w-3&#x2F;12 lg:w-3&#x2F;12 flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]&quot;
                    &gt;
                      &lt;h3 className&#x3D;&quot;counter counter-lg !text-white xl:!text-[2.2rem] !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2&quot;&gt;
                        &lt;Counter max&#x3D;{elm.number} &#x2F;&gt;
                      &lt;&#x2F;h3&gt;
                      &lt;p className&#x3D;&quot;!m-0&quot;&gt;{elm.description}&lt;&#x2F;p&gt;
                    &lt;&#x2F;div&gt;
                  ))}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
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

      {&#x2F;* &#x2F;.container *&#x2F;}
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Facts4 />

      <CodeSnippet
        code={`import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;
import { facts } from &quot;@&#x2F;data&#x2F;facts&quot;;
import React from &quot;react&quot;;

export default function Facts4() {
  return (
    &lt;section
      className&#x3D;&quot;wrapper image-wrapper bg-auto no-overlay bg-image !text-center bg-map bg-[center_center] bg-no-repeat !bg-scroll relative z-[0]&quot;
      style&#x3D;{{ backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;map.png)&quot; }}
    &gt;
      &lt;div className&#x3D;&quot;container py-20 xl:pt-28 lg:pt-28 md:pt-28 xl:pb-32 lg:pb-32 md:pb-32&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:pt-14 lg:pt-14 md:pt-14&quot;&gt;
          &lt;div className&#x3D;&quot;lg:w-10&#x2F;12 xl:w-9&#x2F;12 xxl:w-8&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]&quot;&gt;
              Join Our Community
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-8 lg:!px-14 xl:!px-14&quot;&gt;
              We are trusted by over 5000+ clients. Join them now and grow your
              business.
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.row *&#x2F;}
        &lt;&#x2F;div&gt;
        {&#x2F;* &#x2F;column *&#x2F;}
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:pb-14 lg:pb-14 md:pb-14&quot;&gt;
          &lt;div className&#x3D;&quot;md:w-10&#x2F;12 lg:w-9&#x2F;12 xl:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-20px] xl:!mt-0 lg:!mt-0 md:!mt-0&quot;&gt;
              {facts.slice(0, 3).map((elm, i) &#x3D;&gt; (
                &lt;div
                  key&#x3D;{i}
                  className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[20px] xl:!mt-0 lg:!mt-0 md:!mt-0&quot;
                &gt;
                  &lt;h3 className&#x3D;&quot;counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2 xl:!text-[2.2rem] !text-[#3f78e0]&quot;&gt;
                    &lt;Counter max&#x3D;{elm.number} &#x2F;&gt;
                  &lt;&#x2F;h3&gt;
                  &lt;p className&#x3D;&quot;text-[0.8rem] font-medium !mb-0&quot;&gt;
                    {elm.description}
                  &lt;&#x2F;p&gt;
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
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Facts5 />
      <CodeSnippet
        code={`import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;
import { facts } from &quot;@&#x2F;data&#x2F;facts&quot;;
import React from &quot;react&quot;;

export default function Facts5() {
  return (
    &lt;section id&#x3D;&quot;snippet-5&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 xxl:w-9&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-center justify-center counter-wrapper !mt-[-30px]&quot;&gt;
              {facts.slice(0, 3).map((elm, i) &#x3D;&gt; (
                &lt;div
                  key&#x3D;{i}
                  className&#x3D;&quot;md:w-6&#x2F;12 lg:w-4&#x2F;12 xl:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;
                &gt;
                  &lt;div className&#x3D;&quot;card&quot;&gt;
                    &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]&quot;&gt;
                      &lt;div className&#x3D;&quot;flex flex-row items-center&quot;&gt;
                        &lt;div&gt;
                          &lt;div className&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-red pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]&quot;&gt;
                            &lt;i className&#x3D;&quot;uil uil-users-alt before:content-[&#39;\ed70&#39;]&quot; &#x2F;&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                        &lt;div&gt;
                          &lt;h3 className&#x3D;&quot;counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none&quot;&gt;
                            &lt;Counter max&#x3D;{elm.number} &#x2F;&gt;
                          &lt;&#x2F;h3&gt;
                          &lt;p className&#x3D;&quot;!mb-0&quot;&gt;{elm.description}&lt;&#x2F;p&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card-body *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.card *&#x2F;}
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
      <Facts6 />
      <CodeSnippet
        code={`import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;
import React from &quot;react&quot;;

export default function Facts6() {
  return (
    &lt;section id&#x3D;&quot;snippet-6&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px] !text-center&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-3&#x2F;12 lg:w-3&#x2F;12 md:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 409.6 409.6&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;check.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg icon-svg-lg text-[#3f78e0] !mb-3 m-[0_auto]&quot;
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
                &lt;h3 className&#x3D;&quot;counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2&quot;&gt;
                  &lt;Counter max&#x3D;{7518} &#x2F;&gt;
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!m-0&quot;&gt;Completed Projects&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-3&#x2F;12 lg:w-3&#x2F;12 md:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 441.4 512&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;user.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg icon-svg-lg text-[#3f78e0] !mb-3 m-[0_auto]&quot;
                &gt;
                  &lt;path
                    className&#x3D;&quot;lineal-fill&quot;
                    d&#x3D;&quot;M254.9 457c-14.9-8.1-24.1-23.7-24.1-40.6V285.6c26.5 11.1 57.1 4.9 77.1-15.6-19-26.2-49.3-41.6-81.6-41.6H115.7c-55.7 0-100.9 45.2-100.9 100.9v167.9h312.4v-.8L254.9 457z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M426.6 270.8c-8.2 0-14.8 6.6-14.9 14.8v130.7c0 11.5-6.3 22.1-16.4 27.6l-66.7 36.3-66.6-36.3c-10.1-5.5-16.4-16.1-16.4-27.6V305c4.1.6 8.2.9 12.3.9 1.3 0 2.5 0 3.8-.1h1c1.1-.1 2.2-.1 3.4-.2l1.6-.2 1.6-.2c15-2 29.3-8 41.1-17.5l1.1-.9 1.3-1.1c.9-.7 1.7-1.5 2.5-2.2l.4-.4c1-.9 1.9-1.8 2.8-2.7 3.8-3.9 7.2-8.1 10.1-12.6 7.2 10.9 16.8 19.9 28 26.5 7.1 4.1 16.2 1.8 20.3-5.3 4.1-7.1 1.8-16.2-5.3-20.3-10-5.9-17.9-14.8-22.6-25.5-2.4-5.4-7.7-8.8-13.6-8.9h-13.5c-5.9 0-11.2 3.5-13.6 8.9-.5 1-.9 2-1.4 3-12.8-12.4-28.4-21.7-45.4-27.2 17.4-16.5 27.2-39.4 27.2-63.3V87.5c-.2-8.2-7-14.7-15.2-14.5-7.9.2-14.3 6.6-14.5 14.5v68.3c0 31.6-25.5 57.4-57.1 57.8h-62c-31.6-.5-57-26.2-57-57.8V87.5c0-31.9 25.9-57.8 57.8-57.8h60.5c8.2-.2 14.7-7 14.5-15.2-.2-7.9-6.6-14.3-14.5-14.5h-60.5C92.5.1 53.3 39.2 53.3 87.5v68.3c0 23.9 9.8 46.8 27.2 63.3C32.6 234.5.1 279 0 329.3v167.9c0 8.2 6.6 14.8 14.8 14.8h313.9c2.5 0 4.9-.6 7.1-1.8l73.8-40.2c19.6-10.7 31.9-31.3 31.9-53.6V285.6c-.1-8.2-6.7-14.8-14.9-14.8zM29.7 482.3v-153c.1-47.5 38.5-85.9 86-86h40.4v144.1c0 8.2 6.6 14.8 14.8 14.8s14.8-6.6 14.8-14.8V243.3h40.4c22.6 0 44.3 9 60.4 24.8-6.3 3.9-13.3 6.4-20.6 7.5h.1c-1.1.2-2.3.3-3.5.4l-.6.1c-1.2.1-2.5.1-3.7.1h-.2c-7.3 0-14.6-1.4-21.4-4.3-7.5-3.2-16.3.3-19.4 7.9-.8 1.8-1.2 3.8-1.2 5.8v130.7c0 22.4 12.2 42.9 31.8 53.7l22.6 12.3H29.7z&quot;
                  &#x2F;&gt;
                  &lt;path
                    className&#x3D;&quot;lineal-stroke&quot;
                    d&#x3D;&quot;M327.2 405.9c-2.5 0-5-.6-7.2-1.9l-24.9-13.9c-7.2-4-9.7-13-5.7-20.2s13-9.7 20.2-5.7l15.7 8.7 34.1-30.1c6.1-5.4 15.5-4.9 21 1.3 5.4 6.1 4.9 15.5-1.3 21l-42 37.1c-2.8 2.4-6.3 3.7-9.9 3.7z&quot;
                  &#x2F;&gt;
                &lt;&#x2F;svg&gt;
                &lt;h3 className&#x3D;&quot;counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2&quot;&gt;
                  &lt;Counter max&#x3D;{3472} &#x2F;&gt;
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!m-0&quot;&gt;Happy Customers&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-3&#x2F;12 lg:w-3&#x2F;12 md:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 409.6 380.8&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;briefcase-2.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg icon-svg-lg text-[#3f78e0] !mb-3 m-[0_auto]&quot;
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
                &lt;h3 className&#x3D;&quot;counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2&quot;&gt;
                  &lt;Counter max&#x3D;{2184} &#x2F;&gt;
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!m-0&quot;&gt;Expert Employees&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-3&#x2F;12 lg:w-3&#x2F;12 md:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;svg
                  xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot;
                  viewBox&#x3D;&quot;0 0 409.6 404.7&quot;
                  data-inject-url&#x3D;&quot;https:&#x2F;&#x2F;sandbox-tailwind-template.netlify.app&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;award-2.svg&quot;
                  className&#x3D;&quot;svg-inject icon-svg icon-svg-lg text-[#3f78e0] !mb-3 m-[0_auto]&quot;
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
                &lt;h3 className&#x3D;&quot;counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2&quot;&gt;
                  &lt;Counter max&#x3D;{4523} &#x2F;&gt;
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;!m-0&quot;&gt;Awards Won&lt;&#x2F;p&gt;
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
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Facts8 />
      <CodeSnippet
        code={`import ProgressCircle from &quot;@&#x2F;components&#x2F;common&#x2F;CircularProgress&quot;;
import React from &quot;react&quot;;

export default function Facts8() {
  return (
    &lt;section id&#x3D;&quot;snippet-7&quot; className&#x3D;&quot;wrapper !bg-[#ffffff]&quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-center !mt-[-40px]&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-7&#x2F;12 lg:w-7&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full text-center lg:text-left xl:text-left !mt-[40px]&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]&quot;&gt;
              Save Time and Money
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:!text-[2rem] !mb-0 xl:!pr-10 xxl:!pr-20&quot;&gt;
              Save your time and money by choosing our
              &lt;span className&#x3D;&quot;!relative z-[2] after:content-[&#39;&#39;] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2&#x2F;4 after:left-2&#x2F;4 style-2 yellow&quot;&gt;
                professional
              &lt;&#x2F;span&gt;
              team.
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px] !text-center&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;div className&#x3D;&quot;progressbar semi-circle fuchsia relative w-[8.5rem] h-[4.25rem] m-[0_auto_1rem]&quot;&gt;
                  &lt;ProgressCircle max&#x3D;{95} &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;h4 className&#x3D;&quot;!mb-0&quot;&gt;Customer Satisfaction&lt;&#x2F;h4&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;div className&#x3D;&quot;progressbar semi-circle orange relative w-[8.5rem] h-[4.25rem] m-[0_auto_1rem]&quot;&gt;
                  &lt;ProgressCircle max&#x3D;{80} &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;h4 className&#x3D;&quot;!mb-0&quot;&gt;Increased Revenue&lt;&#x2F;h4&gt;
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
    &lt;&#x2F;section&gt;
  );
}`}
      />
      <Facts9 />
      <CodeSnippet
        code={`import ProgressCircle from &quot;@&#x2F;components&#x2F;common&#x2F;CircularProgress&quot;;
import { stats2 } from &quot;@&#x2F;data&#x2F;progress&quot;;
import React from &quot;react&quot;;

export default function Facts9() {
  return (
    &lt;section id&#x3D;&quot;snippet-8&quot; className&#x3D;&quot;section-frame overflow-hidden &quot;&gt;
      &lt;div
        className&#x3D;&quot;wrapper !bg-[#edf2fc] md:!mb-16 !mb-20&quot;
        style&#x3D;{{ borderRadius: &quot;1rem&quot; }}
      &gt;
        &lt;div className&#x3D;&quot;container py-28&quot;&gt;
          &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !text-center&quot;&gt;
            &lt;div className&#x3D;&quot;xl:w-11&#x2F;12 xxl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
              &lt;h2 className&#x3D;&quot;!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]&quot;&gt;
                Company Facts
              &lt;&#x2F;h2&gt;
              &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-10 lg:!px-40 xl:!px-40&quot;&gt;
                Save your time and money by choosing our professional team.
              &lt;&#x2F;h3&gt;
              &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px] !text-center&quot;&gt;
                {stats2.map((elm, i) &#x3D;&gt; (
                  &lt;div
                    key&#x3D;{i}
                    className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full&quot;
                  &gt;
                    &lt;div
                      className&#x3D;{
                        &quot;progressbar semi-circle relative w-[8.5rem] h-[4.25rem] m-[0_auto_1rem] &quot; +
                        elm.color
                      }
                    &gt;
                      &lt;ProgressCircle max&#x3D;{elm.value} &#x2F;&gt;
                    &lt;&#x2F;div&gt;
                    &lt;h4&gt;{elm.title}&lt;&#x2F;h4&gt;
                    &lt;p className&#x3D;&quot;!mb-0&quot;&gt;{elm.description}&lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                ))}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.row *&#x2F;}
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
      <Facts10 />

      <CodeSnippet
        code={`import Counter from &quot;@&#x2F;components&#x2F;common&#x2F;Counter&quot;;

import React from &quot;react&quot;;

export default function Facts10() {
  return (
    &lt;section id&#x3D;&quot;snippet-9&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
      &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
        &lt;div className&#x3D;&quot;flex flex-wrap mx-[-7.5px] !mt-[-50px] xl:!mt-0 lg:!mt-0 items-center&quot;&gt;
          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full !mx-auto xl:!order-2 lg:!order-2&quot;&gt;
            &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
              &lt;img
                className&#x3D;&quot;w-auto&quot;
                srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;3d5@2x.png 2x&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;3d5.png&quot;
                width&#x3D;&quot;800&quot;
                height&#x3D;&quot;924&quot;
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;*&#x2F;column *&#x2F;}
          &lt;div className&#x3D;&quot;xl:w-5&#x2F;12 lg:w-5&#x2F;12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full !mr-auto&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[0.8rem] uppercase !text-[#3f78e0] !mb-3 !leading-[1.35]&quot;&gt;
              Our Solutions
            &lt;&#x2F;h2&gt;
            &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5 xxl:!pr-5&quot;&gt;
              Just sit &amp;amp; relax while we take care of your business needs.
            &lt;&#x2F;h3&gt;
            &lt;p className&#x3D;&quot;!mb-6&quot;&gt;
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus. Maecenas sed diam eget
              risus varius blandit sit amet non magna. Praesent commodo cursus
              magna.
            &lt;&#x2F;p&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;h3 className&#x3D;&quot;counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none xl:!text-[2.2rem] !mb-1&quot;&gt;
                  &lt;Counter max&#x3D;{99} &#x2F;&gt;
                  .7%
                &lt;&#x2F;h3&gt;
                &lt;h6 className&#x3D;&quot;!text-[0.85rem] !mb-1&quot;&gt;Customer Satisfaction&lt;&#x2F;h6&gt;
                &lt;span className&#x3D;&quot;ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] before:overflow-hidden before:left-0 before:top-0 five&quot; &#x2F;&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 md:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]&quot;&gt;
                &lt;h3 className&#x3D;&quot;counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none xl:!text-[2.2rem] !mb-1&quot;&gt;
                  &lt;Counter max&#x3D;{4} &#x2F;&gt;x
                &lt;&#x2F;h3&gt;
                &lt;h6 className&#x3D;&quot;!text-[0.85rem] !mb-1&quot;&gt;New Visitors&lt;&#x2F;h6&gt;
                &lt;span className&#x3D;&quot;ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-[&#39;\u2605\u2605\u2605\u2605\u2605&#39;] before:overflow-hidden before:left-0 before:top-0 five&quot; &#x2F;&gt;
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
    &lt;&#x2F;section&gt;
  );
}`}
      />
    </>
  );
}
