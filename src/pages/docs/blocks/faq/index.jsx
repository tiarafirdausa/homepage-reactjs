import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import PageTitle from "@/components/blocks/PageTitle";
import React from "react";

import { faqData } from "@/data/faqs";
import CodeSnippet from "@/components/common/CodeSnippet";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Faq || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageFaqBlock() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Faqs" />
      <BlockPageLinks />
      <>
        {/* /section */}
        <section id="snippet-1" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px]">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <figure className="m-0 p-0">
                  <img
                    className="w-auto"
                    srcSet="/assets/img/illustrations/i5@2x.png 2x"
                    alt="image"
                    width="800"
                    height="590"
                    src="/assets/img/illustrations/i5.png"
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                  Common Questions
                </h2>
                <p className="lead text-[1rem] !mb-6 xxl:!pr-10">
                  If you don't see an
                  <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]">
                    answer to your question
                  </span>
                  , you can send us an email from our contact form.
                </p>
                <div
                  className="accordion accordion-wrapper"
                  id="accordionExample-2"
                >
                  <div className="card plain accordion-item">
                    <div
                      className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                      id="headingOne-2"
                    >
                      <button
                        className="hover:!text-[#3f78e0] accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne-2"
                        aria-expanded="true"
                        aria-controls="collapseOne-2"
                      >
                        Can I cancel my subscription?
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseOne-2"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne-2"
                      data-bs-parent="#accordionExample-2"
                    >
                      <div className="card-body flex-[1_1_auto] !pb-4">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                  <div className="card plain accordion-item">
                    <div
                      className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                      id="headingTwo-2"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo-2"
                        aria-expanded="false"
                        aria-controls="collapseTwo-2"
                      >
                        Which payment methods do you accept?
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseTwo-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo-2"
                      data-bs-parent="#accordionExample-2"
                    >
                      <div className="card-body flex-[1_1_auto] !pb-4">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                  <div className="card plain accordion-item">
                    <div
                      className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                      id="headingThree-2"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree-2"
                        aria-expanded="false"
                        aria-controls="collapseThree-2"
                      >
                        How can I manage my Account?
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseThree-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree-2"
                      data-bs-parent="#accordionExample-2"
                    >
                      <div className="card-body flex-[1_1_auto] !pb-4">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                </div>
                {/*/.accordion */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={` &lt;section id&#x3D;&quot;snippet-1&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                &lt;figure className&#x3D;&quot;m-0 p-0&quot;&gt;
                  &lt;img
                    className&#x3D;&quot;w-auto&quot;
                    srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i5@2x.png 2x&quot;
                    alt&#x3D;&quot;image&quot;
                    width&#x3D;&quot;800&quot;
                    height&#x3D;&quot;590&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i5.png&quot;
                  &#x2F;&gt;
                &lt;&#x2F;figure&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3&quot;&gt;
                  Common Questions
                &lt;&#x2F;h2&gt;
                &lt;p className&#x3D;&quot;lead text-[1rem] !mb-6 xxl:!pr-10&quot;&gt;
                  If you don&#39;t see an
                  &lt;span className&#x3D;&quot;relative z-[2] whitespace-nowrap after:content-[&#39;&#39;] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]&quot;&gt;
                    answer to your question
                  &lt;&#x2F;span&gt;
                  , you can send us an email from our contact form.
                &lt;&#x2F;p&gt;
                &lt;div
                  className&#x3D;&quot;accordion accordion-wrapper&quot;
                  id&#x3D;&quot;accordionExample-2&quot;
                &gt;
                  &lt;div className&#x3D;&quot;card plain accordion-item&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;headingOne-2&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] accordion-button&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#collapseOne-2&quot;
                        aria-expanded&#x3D;&quot;true&quot;
                        aria-controls&#x3D;&quot;collapseOne-2&quot;
                      &gt;
                        Can I cancel my subscription?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;collapseOne-2&quot;
                      className&#x3D;&quot;accordion-collapse collapse show&quot;
                      aria-labelledby&#x3D;&quot;headingOne-2&quot;
                      data-bs-parent&#x3D;&quot;#accordionExample-2&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] !pb-4&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.accordion-collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.accordion-item *&#x2F;}
                  &lt;div className&#x3D;&quot;card plain accordion-item&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;headingTwo-2&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#collapseTwo-2&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;collapseTwo-2&quot;
                      &gt;
                        Which payment methods do you accept?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;collapseTwo-2&quot;
                      className&#x3D;&quot;accordion-collapse collapse&quot;
                      aria-labelledby&#x3D;&quot;headingTwo-2&quot;
                      data-bs-parent&#x3D;&quot;#accordionExample-2&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] !pb-4&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.accordion-collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.accordion-item *&#x2F;}
                  &lt;div className&#x3D;&quot;card plain accordion-item&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;headingThree-2&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#collapseThree-2&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;collapseThree-2&quot;
                      &gt;
                        How can I manage my Account?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;collapseThree-2&quot;
                      className&#x3D;&quot;accordion-collapse collapse&quot;
                      aria-labelledby&#x3D;&quot;headingThree-2&quot;
                      data-bs-parent&#x3D;&quot;#accordionExample-2&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] !pb-4&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.accordion-collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;.accordion-item *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.accordion *&#x2F;}
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
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px]">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] !mb-0">
                <h2 className="!text-[.75rem] uppercase !text-[#3f78e0] !tracking-[0.02rem] !leading-[1.35] !mb-3">
                  FAQ
                </h2>
                <h3 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-4">
                  If you don't see an answer to your question, you can send us
                  an email from our contact form.
                </h3>
                <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-6">
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Nullam quis risus eget
                  urna mollis ornare.
                </p>
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  All FAQ
                </a>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <div id="accordion-3" className="accordion-wrapper">
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-3-1"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-3-1"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-3-1"
                      >
                        How do I get my subscription receipt?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-3-1"
                      className="collapse"
                      aria-labelledby="accordion-heading-3-1"
                      data-bs-target="#accordion-3"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-3-2"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-3-2"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-3-2"
                      >
                        Are there any discounts for people in need?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-3-2"
                      className="collapse"
                      aria-labelledby="accordion-heading-3-2"
                      data-bs-target="#accordion-3"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-3-3"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-3-3"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-3-3"
                      >
                        Do you offer a free trial edit?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-3-3"
                      className="collapse"
                      aria-labelledby="accordion-heading-3-3"
                      data-bs-target="#accordion-3"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-3-4"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-3-4"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-3-4"
                      >
                        How do I reset my Account password?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-3-4"
                      className="collapse"
                      aria-labelledby="accordion-heading-3-4"
                      data-bs-target="#accordion-3"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.accordion-wrapper */}
              </div>
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
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] !mb-0&quot;&gt;
                &lt;h2 className&#x3D;&quot;!text-[.75rem] uppercase !text-[#3f78e0] !tracking-[0.02rem] !leading-[1.35] !mb-3&quot;&gt;
                  FAQ
                &lt;&#x2F;h2&gt;
                &lt;h3 className&#x3D;&quot;!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-4&quot;&gt;
                  If you don&#39;t see an answer to your question, you can send us
                  an email from our contact form.
                &lt;&#x2F;h3&gt;
                &lt;p className&#x3D;&quot;lead text-[0.9rem] font-medium !leading-[1.65] !mb-6&quot;&gt;
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Nullam quis risus eget
                  urna mollis ornare.
                &lt;&#x2F;p&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]&quot;
                &gt;
                  All FAQ
                &lt;&#x2F;a&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                &lt;div id&#x3D;&quot;accordion-3&quot; className&#x3D;&quot;accordion-wrapper&quot;&gt;
                  &lt;div className&#x3D;&quot;card accordion-item !mb-5&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;accordion-heading-3-1&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#accordion-collapse-3-1&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;accordion-collapse-3-1&quot;
                      &gt;
                        How do I get my subscription receipt?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;accordion-collapse-3-1&quot;
                      className&#x3D;&quot;collapse&quot;
                      aria-labelledby&#x3D;&quot;accordion-heading-3-1&quot;
                      data-bs-target&#x3D;&quot;#accordion-3&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;div className&#x3D;&quot;card accordion-item !mb-5&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;accordion-heading-3-2&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#accordion-collapse-3-2&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;accordion-collapse-3-2&quot;
                      &gt;
                        Are there any discounts for people in need?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;accordion-collapse-3-2&quot;
                      className&#x3D;&quot;collapse&quot;
                      aria-labelledby&#x3D;&quot;accordion-heading-3-2&quot;
                      data-bs-target&#x3D;&quot;#accordion-3&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;div className&#x3D;&quot;card accordion-item !mb-5&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;accordion-heading-3-3&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#accordion-collapse-3-3&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;accordion-collapse-3-3&quot;
                      &gt;
                        Do you offer a free trial edit?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;accordion-collapse-3-3&quot;
                      className&#x3D;&quot;collapse&quot;
                      aria-labelledby&#x3D;&quot;accordion-heading-3-3&quot;
                      data-bs-target&#x3D;&quot;#accordion-3&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;div className&#x3D;&quot;card accordion-item !mb-5&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;accordion-heading-3-4&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#accordion-collapse-3-4&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;accordion-collapse-3-4&quot;
                      &gt;
                        How do I reset my Account password?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;accordion-collapse-3-4&quot;
                      className&#x3D;&quot;collapse&quot;
                      aria-labelledby&#x3D;&quot;accordion-heading-3-4&quot;
                      data-bs-target&#x3D;&quot;#accordion-3&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;.accordion-wrapper *&#x2F;}
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
        <section id="snippet-3" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center">
              Pricing FAQ
            </h2>
            <p className="lead text-[0.9rem] font-medium !leading-[1.65] !text-center !mb-10 md:!px-24 xl:!px-0 lg:!px-0">
              If you don't see an answer to your question, you can send us an
              email from our contact form.
            </p>
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-0">
                <div id="accordion-1" className="accordion-wrapper">
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-1-1"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-1-1"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-1-1"
                      >
                        Can I cancel my subscription?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-1-1"
                      className="collapse"
                      aria-labelledby="accordion-heading-1-1"
                      data-bs-target="#accordion-1"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-1-2"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-1-2"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-1-2"
                      >
                        Which payment methods do you accept?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-1-2"
                      className="collapse"
                      aria-labelledby="accordion-heading-1-2"
                      data-bs-target="#accordion-1"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-1-3"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-1-3"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-1-3"
                      >
                        How can I manage my Account?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-1-3"
                      className="collapse"
                      aria-labelledby="accordion-heading-1-3"
                      data-bs-target="#accordion-1"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-1-4"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-1-4"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-1-4"
                      >
                        Is my credit card information secure?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-1-4"
                      className="collapse"
                      aria-labelledby="accordion-heading-1-4"
                      data-bs-target="#accordion-1"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.accordion-wrapper */}
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                <div id="accordion-2" className="accordion-wrapper">
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-2-1"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-2-1"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-2-1"
                      >
                        How do I get my subscription receipt?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-2-1"
                      className="collapse"
                      aria-labelledby="accordion-heading-2-1"
                      data-bs-target="#accordion-2"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-2-2"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-2-2"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-2-2"
                      >
                        Are there any discounts for people in need?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-2-2"
                      className="collapse"
                      aria-labelledby="accordion-heading-2-2"
                      data-bs-target="#accordion-2"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-2-3"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-2-3"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-2-3"
                      >
                        Do you offer a free trial edit?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-2-3"
                      className="collapse"
                      aria-labelledby="accordion-heading-2-3"
                      data-bs-target="#accordion-2"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-2-4"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-2-4"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-2-4"
                      >
                        How do I reset my Account password?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-2-4"
                      className="collapse"
                      aria-labelledby="accordion-heading-2-4"
                      data-bs-target="#accordion-2"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.accordion-wrapper */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={`  &lt;section id&#x3D;&quot;snippet-3&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;h2 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center&quot;&gt;
              Pricing FAQ
            &lt;&#x2F;h2&gt;
            &lt;p className&#x3D;&quot;lead text-[0.9rem] font-medium !leading-[1.65] !text-center !mb-10 md:!px-24 xl:!px-0 lg:!px-0&quot;&gt;
              If you don&#39;t see an answer to your question, you can send us an
              email from our contact form.
            &lt;&#x2F;p&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-0&quot;&gt;
                &lt;div id&#x3D;&quot;accordion-1&quot; className&#x3D;&quot;accordion-wrapper&quot;&gt;
                  &lt;div className&#x3D;&quot;card accordion-item !mb-5&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;accordion-heading-1-1&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#accordion-collapse-1-1&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;accordion-collapse-1-1&quot;
                      &gt;
                        Can I cancel my subscription?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;accordion-collapse-1-1&quot;
                      className&#x3D;&quot;collapse&quot;
                      aria-labelledby&#x3D;&quot;accordion-heading-1-1&quot;
                      data-bs-target&#x3D;&quot;#accordion-1&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;div className&#x3D;&quot;card accordion-item !mb-5&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;accordion-heading-1-2&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#accordion-collapse-1-2&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;accordion-collapse-1-2&quot;
                      &gt;
                        Which payment methods do you accept?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;accordion-collapse-1-2&quot;
                      className&#x3D;&quot;collapse&quot;
                      aria-labelledby&#x3D;&quot;accordion-heading-1-2&quot;
                      data-bs-target&#x3D;&quot;#accordion-1&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;div className&#x3D;&quot;card accordion-item !mb-5&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;accordion-heading-1-3&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#accordion-collapse-1-3&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;accordion-collapse-1-3&quot;
                      &gt;
                        How can I manage my Account?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;accordion-collapse-1-3&quot;
                      className&#x3D;&quot;collapse&quot;
                      aria-labelledby&#x3D;&quot;accordion-heading-1-3&quot;
                      data-bs-target&#x3D;&quot;#accordion-1&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;div className&#x3D;&quot;card accordion-item !mb-5&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;accordion-heading-1-4&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#accordion-collapse-1-4&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;accordion-collapse-1-4&quot;
                      &gt;
                        Is my credit card information secure?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;accordion-collapse-1-4&quot;
                      className&#x3D;&quot;collapse&quot;
                      aria-labelledby&#x3D;&quot;accordion-heading-1-4&quot;
                      data-bs-target&#x3D;&quot;#accordion-1&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;.accordion-wrapper *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;column *&#x2F;}
              &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                &lt;div id&#x3D;&quot;accordion-2&quot; className&#x3D;&quot;accordion-wrapper&quot;&gt;
                  &lt;div className&#x3D;&quot;card accordion-item !mb-5&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;accordion-heading-2-1&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#accordion-collapse-2-1&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;accordion-collapse-2-1&quot;
                      &gt;
                        How do I get my subscription receipt?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;accordion-collapse-2-1&quot;
                      className&#x3D;&quot;collapse&quot;
                      aria-labelledby&#x3D;&quot;accordion-heading-2-1&quot;
                      data-bs-target&#x3D;&quot;#accordion-2&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;div className&#x3D;&quot;card accordion-item !mb-5&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;accordion-heading-2-2&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#accordion-collapse-2-2&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;accordion-collapse-2-2&quot;
                      &gt;
                        Are there any discounts for people in need?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;accordion-collapse-2-2&quot;
                      className&#x3D;&quot;collapse&quot;
                      aria-labelledby&#x3D;&quot;accordion-heading-2-2&quot;
                      data-bs-target&#x3D;&quot;#accordion-2&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;div className&#x3D;&quot;card accordion-item !mb-5&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;accordion-heading-2-3&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#accordion-collapse-2-3&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;accordion-collapse-2-3&quot;
                      &gt;
                        Do you offer a free trial edit?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;accordion-collapse-2-3&quot;
                      className&#x3D;&quot;collapse&quot;
                      aria-labelledby&#x3D;&quot;accordion-heading-2-3&quot;
                      data-bs-target&#x3D;&quot;#accordion-2&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                  &lt;div className&#x3D;&quot;card accordion-item !mb-5&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit&quot;
                      id&#x3D;&quot;accordion-heading-2-4&quot;
                    &gt;
                      &lt;button
                        className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                        data-bs-toggle&#x3D;&quot;collapse&quot;
                        data-bs-target&#x3D;&quot;#accordion-collapse-2-4&quot;
                        aria-expanded&#x3D;&quot;false&quot;
                        aria-controls&#x3D;&quot;accordion-collapse-2-4&quot;
                      &gt;
                        How do I reset my Account password?
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.card-header *&#x2F;}
                    &lt;div
                      id&#x3D;&quot;accordion-collapse-2-4&quot;
                      className&#x3D;&quot;collapse&quot;
                      aria-labelledby&#x3D;&quot;accordion-heading-2-4&quot;
                      data-bs-target&#x3D;&quot;#accordion-2&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]&quot;&gt;
                        &lt;p&gt;
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Donec sed odio dui. Cras justo odio,
                          dapibus ac facilisis.
                        &lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.collapse *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.card *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;.accordion-wrapper *&#x2F;}
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
        <section id="snippet-4" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="card !bg-[#edf2fc] !rounded-[0.8rem]">
              <div className="card-body md:!p-10 lg:!p-10 xl:!p-12 p-[40px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px]">
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                    <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-4">
                      Frequently Asked Questions
                    </h3>
                    <p className="lead text-[1.05rem] !leading-[1.6] font-medium !mb-0">
                      If you don't see an answer to your question, you can send
                      us an email from our contact form.
                    </p>
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                    <div
                      className="accordion accordion-wrapper"
                      id="accordionExample"
                    >
                      <div className="card plain accordion-item">
                        <div
                          className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                          id="headingOne"
                        >
                          <button
                            className="hover:!text-[#3f78e0] collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            How do I get my subscription receipt?
                          </button>
                        </div>
                        {/*/.card-header */}
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="card-body flex-[1_1_auto] !pb-4">
                            <p>
                              Fusce dapibus, tellus ac cursus commodo, tortor
                              mauris condimentum nibh, ut fermentum massa justo
                              sit amet risus.
                            </p>
                          </div>
                          {/*/.card-body */}
                        </div>
                        {/*/.accordion-collapse */}
                      </div>
                      {/*/.accordion-item */}
                      <div className="card plain accordion-item">
                        <div
                          className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                          id="headingTwo"
                        >
                          <button
                            className="hover:!text-[#3f78e0] collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Are there any discounts for people in need?
                          </button>
                        </div>
                        {/*/.card-header */}
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="card-body flex-[1_1_auto] !pb-4">
                            <p>
                              Fusce dapibus, tellus ac cursus commodo, tortor
                              mauris condimentum nibh, ut fermentum massa justo
                              sit amet risus.
                            </p>
                          </div>
                          {/*/.card-body */}
                        </div>
                        {/*/.accordion-collapse */}
                      </div>
                      {/*/.accordion-item */}
                      <div className="card plain accordion-item">
                        <div
                          className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                          id="headingThree"
                        >
                          <button
                            className="hover:!text-[#3f78e0] collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Do you offer a free trial edit?
                          </button>
                        </div>
                        {/*/.card-header */}
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="card-body flex-[1_1_auto] !pb-4">
                            <p>
                              Fusce dapibus, tellus ac cursus commodo, tortor
                              mauris condimentum nibh, ut fermentum massa justo
                              sit amet risus.
                            </p>
                          </div>
                          {/*/.card-body */}
                        </div>
                        {/*/.accordion-collapse */}
                      </div>
                      {/*/.accordion-item */}
                      <div className="card plain accordion-item">
                        <div
                          className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                          id="headingFour"
                        >
                          <button
                            className="hover:!text-[#3f78e0] collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            How do I reset my Account password?
                          </button>
                        </div>
                        {/*/.card-header */}
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="card-body flex-[1_1_auto] !pb-4">
                            <p>
                              Fusce dapibus, tellus ac cursus commodo, tortor
                              mauris condimentum nibh, ut fermentum massa justo
                              sit amet risus.
                            </p>
                          </div>
                          {/*/.card-body */}
                        </div>
                        {/*/.accordion-collapse */}
                      </div>
                      {/*/.accordion-item */}
                    </div>
                    {/*/.accordion */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={` &lt;section id&#x3D;&quot;snippet-4&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;card !bg-[#edf2fc] !rounded-[0.8rem]&quot;&gt;
              &lt;div className&#x3D;&quot;card-body md:!p-10 lg:!p-10 xl:!p-12 p-[40px]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px]&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                    &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-4&quot;&gt;
                      Frequently Asked Questions
                    &lt;&#x2F;h3&gt;
                    &lt;p className&#x3D;&quot;lead text-[1.05rem] !leading-[1.6] font-medium !mb-0&quot;&gt;
                      If you don&#39;t see an answer to your question, you can send
                      us an email from our contact form.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;accordion accordion-wrapper&quot;
                      id&#x3D;&quot;accordionExample&quot;
                    &gt;
                      &lt;div className&#x3D;&quot;card plain accordion-item&quot;&gt;
                        &lt;div
                          className&#x3D;&quot;card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit&quot;
                          id&#x3D;&quot;headingOne&quot;
                        &gt;
                          &lt;button
                            className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                            data-bs-toggle&#x3D;&quot;collapse&quot;
                            data-bs-target&#x3D;&quot;#collapseOne&quot;
                            aria-expanded&#x3D;&quot;true&quot;
                            aria-controls&#x3D;&quot;collapseOne&quot;
                          &gt;
                            How do I get my subscription receipt?
                          &lt;&#x2F;button&gt;
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.card-header *&#x2F;}
                        &lt;div
                          id&#x3D;&quot;collapseOne&quot;
                          className&#x3D;&quot;accordion-collapse collapse&quot;
                          aria-labelledby&#x3D;&quot;headingOne&quot;
                          data-bs-parent&#x3D;&quot;#accordionExample&quot;
                        &gt;
                          &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] !pb-4&quot;&gt;
                            &lt;p&gt;
                              Fusce dapibus, tellus ac cursus commodo, tortor
                              mauris condimentum nibh, ut fermentum massa justo
                              sit amet risus.
                            &lt;&#x2F;p&gt;
                          &lt;&#x2F;div&gt;
                          {&#x2F;*&#x2F;.card-body *&#x2F;}
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.accordion-collapse *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.accordion-item *&#x2F;}
                      &lt;div className&#x3D;&quot;card plain accordion-item&quot;&gt;
                        &lt;div
                          className&#x3D;&quot;card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit&quot;
                          id&#x3D;&quot;headingTwo&quot;
                        &gt;
                          &lt;button
                            className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                            data-bs-toggle&#x3D;&quot;collapse&quot;
                            data-bs-target&#x3D;&quot;#collapseTwo&quot;
                            aria-expanded&#x3D;&quot;false&quot;
                            aria-controls&#x3D;&quot;collapseTwo&quot;
                          &gt;
                            Are there any discounts for people in need?
                          &lt;&#x2F;button&gt;
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.card-header *&#x2F;}
                        &lt;div
                          id&#x3D;&quot;collapseTwo&quot;
                          className&#x3D;&quot;accordion-collapse collapse&quot;
                          aria-labelledby&#x3D;&quot;headingTwo&quot;
                          data-bs-parent&#x3D;&quot;#accordionExample&quot;
                        &gt;
                          &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] !pb-4&quot;&gt;
                            &lt;p&gt;
                              Fusce dapibus, tellus ac cursus commodo, tortor
                              mauris condimentum nibh, ut fermentum massa justo
                              sit amet risus.
                            &lt;&#x2F;p&gt;
                          &lt;&#x2F;div&gt;
                          {&#x2F;*&#x2F;.card-body *&#x2F;}
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.accordion-collapse *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.accordion-item *&#x2F;}
                      &lt;div className&#x3D;&quot;card plain accordion-item&quot;&gt;
                        &lt;div
                          className&#x3D;&quot;card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit&quot;
                          id&#x3D;&quot;headingThree&quot;
                        &gt;
                          &lt;button
                            className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                            data-bs-toggle&#x3D;&quot;collapse&quot;
                            data-bs-target&#x3D;&quot;#collapseThree&quot;
                            aria-expanded&#x3D;&quot;false&quot;
                            aria-controls&#x3D;&quot;collapseThree&quot;
                          &gt;
                            Do you offer a free trial edit?
                          &lt;&#x2F;button&gt;
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.card-header *&#x2F;}
                        &lt;div
                          id&#x3D;&quot;collapseThree&quot;
                          className&#x3D;&quot;accordion-collapse collapse&quot;
                          aria-labelledby&#x3D;&quot;headingThree&quot;
                          data-bs-parent&#x3D;&quot;#accordionExample&quot;
                        &gt;
                          &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] !pb-4&quot;&gt;
                            &lt;p&gt;
                              Fusce dapibus, tellus ac cursus commodo, tortor
                              mauris condimentum nibh, ut fermentum massa justo
                              sit amet risus.
                            &lt;&#x2F;p&gt;
                          &lt;&#x2F;div&gt;
                          {&#x2F;*&#x2F;.card-body *&#x2F;}
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.accordion-collapse *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.accordion-item *&#x2F;}
                      &lt;div className&#x3D;&quot;card plain accordion-item&quot;&gt;
                        &lt;div
                          className&#x3D;&quot;card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit&quot;
                          id&#x3D;&quot;headingFour&quot;
                        &gt;
                          &lt;button
                            className&#x3D;&quot;hover:!text-[#3f78e0] collapsed&quot;
                            data-bs-toggle&#x3D;&quot;collapse&quot;
                            data-bs-target&#x3D;&quot;#collapseFour&quot;
                            aria-expanded&#x3D;&quot;false&quot;
                            aria-controls&#x3D;&quot;collapseFour&quot;
                          &gt;
                            How do I reset my Account password?
                          &lt;&#x2F;button&gt;
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.card-header *&#x2F;}
                        &lt;div
                          id&#x3D;&quot;collapseFour&quot;
                          className&#x3D;&quot;accordion-collapse collapse&quot;
                          aria-labelledby&#x3D;&quot;headingFour&quot;
                          data-bs-parent&#x3D;&quot;#accordionExample&quot;
                        &gt;
                          &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] !pb-4&quot;&gt;
                            &lt;p&gt;
                              Fusce dapibus, tellus ac cursus commodo, tortor
                              mauris condimentum nibh, ut fermentum massa justo
                              sit amet risus.
                            &lt;&#x2F;p&gt;
                          &lt;&#x2F;div&gt;
                          {&#x2F;*&#x2F;.card-body *&#x2F;}
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.accordion-collapse *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.accordion-item *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.accordion *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;*&#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;*&#x2F;.card-body *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;*&#x2F;.card *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}

          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-5" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px]">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]"
                >
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-sm btn-circle btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !mr-5 w-[1.8rem] h-[1.8rem] text-[0.8rem] inline-flex items-center justify-center !leading-none !p-0 !rounded-[100%]">
                        <i className="uil uil-comment-exclamation before:content-['\ea41'] text-[.85rem]" />
                      </span>
                    </div>
                    <div>
                      <h4>{faq.question}</h4>
                      <p className="!mb-0">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <CodeSnippet
          code={`  &lt;section id&#x3D;&quot;snippet-5&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
            &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px]&quot;&gt;
              {faqData.map((faq, index) &#x3D;&gt; (
                &lt;div
                  key&#x3D;{index}
                  className&#x3D;&quot;xl:w-6&#x2F;12 lg:w-6&#x2F;12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]&quot;
                &gt;
                  &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                    &lt;div&gt;
                      &lt;span className&#x3D;&quot;icon btn btn-sm btn-circle btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !mr-5 w-[1.8rem] h-[1.8rem] text-[0.8rem] inline-flex items-center justify-center !leading-none !p-0 !rounded-[100%]&quot;&gt;
                        &lt;i className&#x3D;&quot;uil uil-comment-exclamation before:content-[&#39;\ea41&#39;] text-[.85rem]&quot; &#x2F;&gt;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div&gt;
                      &lt;h4&gt;{faq.question}&lt;&#x2F;h4&gt;
                      &lt;p className&#x3D;&quot;!mb-0&quot;&gt;{faq.answer}&lt;&#x2F;p&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              ))}
              {&#x2F;* &#x2F;column *&#x2F;}
            &lt;&#x2F;div&gt;
            {&#x2F;* &#x2F;.row *&#x2F;}
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}

          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
      </>
    </>
  );
}
