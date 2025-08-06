import React from "react";
import DocsSidebar from "./DocsSidebar";

import CodeSnippetContainer from "../common/CodeSnippetContainer";
export default function Tilies() {
  return (
    <div className="container">
      <div className="flex flex-wrap mx-[-15px]">
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full sidebar doc-sidebar md:!mt-0 py-24 hidden  xl:block">
          <DocsSidebar />
        </aside>
        {/* /column */}
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!order-3 sidebar !sticky h-full top-0 md:!mt-0 py-24 hidden  xl:block">
          <div className="widget">
            <h6 className="widget-title text-[0.85rem] !mb-2 xl:!pl-5">
              On this page
            </h6>
            <nav className="xl:!pl-5" id="sidebar-nav">
              <ul className="list-unstyled !pl-0 list-none text-[0.7rem] leading-normal text-inherit">
                <li>
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]  active"
                    href="#snippet-1"
                  >
                    Tiles 1
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Tiles 2
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Tiles 3
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    Tiles 4
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-5"
                  >
                    Tiles 5
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-6"
                  >
                    Tiles 6
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-7"
                  >
                    Tiles 7
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-8"
                  >
                    Tiles 8
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-9"
                  >
                    Tiles 9
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-10"
                  >
                    Tiles 10
                  </a>
                </li>
              </ul>
            </nav>
            {/* /nav */}
          </div>
          {/* /.widget */}
        </aside>
        {/* /column */}
        <div className="xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2">
          <section id="snippet-1" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Tiles 1</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-70px] items-center">
                  <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mx-auto !mt-[70px]">
                    <div className="flex flex-wrap xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mx-[-15px] !mt-[-25px] items-center">
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                          <div className="xl:w-10/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[16.66666667%] md:w-10/12 md:!ml-[16.66666667%] w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                            <figure className="rounded-[0.4rem]">
                              <img
                                className="rounded-[0.4rem]"
                                srcSet="/assets/img/photos/ab1@2x.jpg 2x"
                                alt="image"
                                src="/assets/img/photos/ab1.jpg"
                                width="240"
                                height="245"
                              />
                            </figure>
                          </div>
                          {/*/column */}
                          <div className="w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                            <figure className="rounded-[0.4rem]">
                              <img
                                className="rounded-[0.4rem]"
                                srcSet="/assets/img/photos/ab2@2x.jpg 2x"
                                alt="image"
                                src="/assets/img/photos/ab2.jpg"
                                width="290"
                                height="225"
                              />
                            </figure>
                          </div>
                          {/*/column */}
                        </div>
                        {/*/.row */}
                      </div>
                      {/*/column */}
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/ab3@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/ab3.jpg"
                            width="290"
                            height="440"
                          />
                        </figure>
                      </div>
                      {/*/column */}
                    </div>
                    {/*/.row */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-1"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-1"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="flex
                          flex-wrap xl:mx-[-12.5px] lg:mx-[-12.5px]
                          md:mx-[-12.5px] mx-[-15px] !mt-[-25px]
                          items-center"&gt;
                          {"\n"}
                          {"                        "}&lt;div
                          className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                          "}&lt;div className="flex
                          flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px]
                          md:mx-[-12.5px] !mt-[-25px]"&gt;{"\n"}
                          {"                            "}&lt;div
                          className="xl:w-10/12 xl:!ml-[16.66666667%] lg:w-10/12
                          lg:!ml-[16.66666667%] md:w-10/12 md:!ml-[16.66666667%]
                          w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                              "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/ab1.jpg"
                          srcset="/assets/img/photos/ab1@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                            "}&lt;div
                          className="w-full flex-[0_0_auto] xl:!px-[12.5px]
                          lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full
                          !mt-[25px]"&gt;
                          {"\n"}
                          {"                              "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/ab2.jpg"
                          srcset="/assets/img/photos/ab2@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}&lt;!--/.row --&gt;
                          {"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                        "}&lt;div
                          className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                          "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/ab3.jpg"
                          srcset="/assets/img/photos/ab3@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                      "}&lt;/div&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Tiles 2</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] !mt-[-40px] items-center">
                  <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] !px-[15px] max-w-full !mx-auto !mt-[40px]">
                    <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                      <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%] !self-end !mt-[25px]">
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/g1@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/g1.jpg"
                            width="300"
                            height="312"
                          />
                        </figure>
                      </div>
                      {/*/column */}
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !self-end !mt-[25px]">
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/g2@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/g2.jpg"
                            width="350"
                            height="263"
                          />
                        </figure>
                      </div>
                      {/*/column */}
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/g3@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/g3.jpg"
                            width="350"
                            height="226"
                          />
                        </figure>
                      </div>
                      {/*/column */}
                      <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !self-start !mt-[25px]">
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/g4@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/g4.jpg"
                            width="300"
                            height="338"
                          />
                        </figure>
                      </div>
                      {/*/column */}
                    </div>
                    {/*/.row */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-2"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-2"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="flex
                          flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px]
                          md:mx-[-12.5px] !mt-[-25px]"&gt;{"\n"}
                          {"                        "}&lt;div
                          className="xl:w-4/12 lg:w-4/12 md:w-4/12
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full
                          xl:!ml-[8.33333333%] lg:!ml-[8.33333333%]
                          md:!ml-[8.33333333%] !self-end !mt-[25px]"&gt;{"\n"}
                          {"                          "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/g1.jpg"
                          srcset="/assets/img/photos/g1@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                        "}&lt;div
                          className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !self-end
                          !mt-[25px]"&gt;{"\n"}
                          {"                          "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/g2.jpg"
                          srcset="/assets/img/photos/g2@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                        "}&lt;div
                          className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                          "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/g3.jpg"
                          srcset="/assets/img/photos/g3@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                        "}&lt;div
                          className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !self-start
                          !mt-[25px]"&gt;{"\n"}
                          {"                          "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/g4.jpg"
                          srcset="/assets/img/photos/g4@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                      "}&lt;/div&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-3" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Tiles 3</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
                  <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mx-auto !mt-[50px]">
                    <div className="flex flex-wrap xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mx-[-15px] !mt-[-25px] items-center">
                      <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !ml-auto"
                          srcSet="/assets/img/photos/sa13@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/sa13.jpg"
                          width="300"
                          height="355"
                        />
                      </div>
                      {/* /column */}
                      <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                          srcSet="/assets/img/photos/sa14@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/sa14.jpg"
                          width="300"
                          height="155"
                        />
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto]"
                          srcSet="/assets/img/photos/sa15@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/sa15.jpg"
                          width="250"
                          height="258"
                        />
                      </div>
                      {/* /column */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-3"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-3"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="flex
                          flex-wrap xl:mx-[-12.5px] lg:mx-[-12.5px]
                          md:mx-[-12.5px] mx-[-15px] !mt-[-25px]
                          items-center"&gt;
                          {"\n"}
                          {"                        "}&lt;div className="w-6/12
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                          "}&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex
                          !ml-auto" src="/assets/img/photos/sa13.jpg"
                          srcset="/assets/img/photos/sa13@2x.jpg 2x"
                          alt="image"&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!-- /column --&gt;
                          {"\n"}
                          {"                        "}&lt;div className="w-6/12
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                          "}&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                          src="/assets/img/photos/sa14.jpg"
                          srcset="/assets/img/photos/sa14@2x.jpg 2x"
                          alt="image"&gt;{"\n"}
                          {"                          "}&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex
                          !w-10/12 flex-[0_0_auto]"
                          src="/assets/img/photos/sa15.jpg"
                          srcset="/assets/img/photos/sa15@2x.jpg 2x"
                          alt="image"&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!-- /column --&gt;
                          {"\n"}
                          {"                      "}&lt;/div&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-4" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Tiles 4</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
                  <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mx-auto !mt-[50px]">
                    <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                      <div className="w-5/12 flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full">
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5 flex !ml-auto"
                          srcSet="/assets/img/photos/sa9@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/sa9.jpg"
                          width="250"
                          height="178"
                        />
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] !ml-auto"
                          srcSet="/assets/img/photos/sa10@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/sa10.jpg"
                          width="200"
                          height="221"
                        />
                      </div>
                      {/* /column */}
                      <div className="w-7/12 flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full">
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                          srcSet="/assets/img/photos/sa11@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/sa11.jpg"
                          width="350"
                          height="163"
                        />
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex w-11/12 flex-[0_0_auto]"
                          srcSet="/assets/img/photos/sa12@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/sa12.jpg"
                          width="325"
                          height="212"
                        />
                      </div>
                      {/* /column */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-4"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-4"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="flex
                          flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px]
                          md:mx-[-12.5px] !mt-[-25px]"&gt;{"\n"}
                          {"                        "}&lt;div className="w-5/12
                          flex-[0_0_auto] !px-[15px] xl:!px-[12.5px]
                          lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]
                          max-w-full"&gt;{"\n"}
                          {"                          "}&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5
                          flex !ml-auto" src="/assets/img/photos/sa9.jpg"
                          srcset="/assets/img/photos/sa9@2x.jpg 2x"
                          alt="image"&gt;{"\n"}
                          {"                          "}&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex
                          !w-10/12 flex-[0_0_auto] !ml-auto"
                          src="/assets/img/photos/sa10.jpg"
                          srcset="/assets/img/photos/sa10@2x.jpg 2x"
                          alt="image"&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!-- /column --&gt;
                          {"\n"}
                          {"                        "}&lt;div className="w-7/12
                          flex-[0_0_auto] !px-[15px] xl:!px-[12.5px]
                          lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]
                          max-w-full"&gt;{"\n"}
                          {"                          "}&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                          src="/assets/img/photos/sa11.jpg"
                          srcset="/assets/img/photos/sa11@2x.jpg 2x"
                          alt="image"&gt;{"\n"}
                          {"                          "}&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex
                          w-11/12 flex-[0_0_auto]"
                          src="/assets/img/photos/sa12.jpg"
                          srcset="/assets/img/photos/sa12@2x.jpg 2x"
                          alt="image"&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!-- /column --&gt;
                          {"\n"}
                          {"                      "}&lt;/div&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-5" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Tiles 5</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
                  <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mx-auto !mt-[50px]">
                    <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                      <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                          srcSet="/assets/img/photos/sa5@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/sa5.jpg"
                          width="300"
                          height="174"
                        />
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] !ml-auto"
                          srcSet="/assets/img/photos/sa6@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/sa6.jpg"
                          width="250"
                          height="276"
                        />
                      </div>
                      {/* /column */}
                      <div className="w-6/12 flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5"
                          srcSet="/assets/img/photos/sa7@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/sa7.jpg"
                          width="300"
                          height="181"
                        />
                        <img
                          className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto]"
                          srcSet="/assets/img/photos/sa8@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/sa8.jpg"
                          width="250"
                          height="276"
                        />
                      </div>
                      {/* /column */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-5"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-5"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="flex
                          flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px]
                          md:mx-[-12.5px] !mt-[-25px]"&gt;{"\n"}
                          {"                        "}&lt;div className="w-6/12
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                          "}&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                          src="/assets/img/photos/sa5.jpg"
                          srcset="/assets/img/photos/sa5@2x.jpg 2x"
                          alt="image"&gt;{"\n"}
                          {"                          "}&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex
                          !w-10/12 flex-[0_0_auto] !ml-auto"
                          src="/assets/img/photos/sa6.jpg"
                          srcset="/assets/img/photos/sa6@2x.jpg 2x"
                          alt="image"&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!-- /column --&gt;
                          {"\n"}
                          {"                        "}&lt;div className="w-6/12
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                          "}&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5"
                          src="/assets/img/photos/sa7.jpg"
                          srcset="/assets/img/photos/sa7@2x.jpg 2x"
                          alt="image"&gt;{"\n"}
                          {"                          "}&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex
                          !w-10/12 flex-[0_0_auto]"
                          src="/assets/img/photos/sa8.jpg"
                          srcset="/assets/img/photos/sa8@2x.jpg 2x"
                          alt="image"&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!-- /column --&gt;
                          {"\n"}
                          {"                      "}&lt;/div&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-6" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Tiles 6</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] items-center">
                  <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !mt-[30px] !px-[15px] max-w-full !mx-auto">
                    <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] !px-[15px] max-w-full">
                        <figure className="!rounded-[.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative">
                          <img
                            className="!rounded-[.4rem]"
                            srcSet="/assets/img/photos/g5@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/g5.jpg"
                            width="350"
                            height="350"
                          />
                        </figure>
                      </div>
                      {/*/column */}
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] !px-[15px] max-w-full">
                        <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                          <div className="w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] !mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                            <figure className="rounded-[0.4rem]">
                              <img
                                className="rounded-[0.4rem]"
                                srcSet="/assets/img/photos/g6@2x.jpg 2x"
                                alt="image"
                                src="/assets/img/photos/g6.jpg"
                                width="375"
                                height="250"
                              />
                            </figure>
                          </div>
                          {/*/column */}
                          <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] !mt-[25px] max-w-full">
                            <figure className="rounded-[0.4rem]">
                              <img
                                className="rounded-[0.4rem]"
                                srcSet="/assets/img/photos/g7@2x.jpg 2x"
                                alt="image"
                                src="/assets/img/photos/g7.jpg"
                                width="288"
                                height="200"
                              />
                            </figure>
                          </div>
                          {/*/column */}
                        </div>
                        {/*/.row */}
                      </div>
                      {/*/column */}
                    </div>
                    {/*/.row */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-6"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-6"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="flex
                          flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px]
                          md:mx-[-12.5px] !mt-[-25px]"&gt;{"\n"}
                          {"                        "}&lt;div
                          className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !mt-[25px] !px-[15px] max-w-full"&gt;
                          {"\n"}
                          {"                          "}&lt;figure
                          className="!rounded-[.4rem] xl:!mt-10 lg:!mt-10
                          md:!mt-10 !relative"&gt;&lt;img
                          className="!rounded-[.4rem]"
                          src="/assets/img/photos/g5.jpg"
                          srcset="/assets/img/photos/g5@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                        "}&lt;div
                          className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !mt-[25px] !px-[15px] max-w-full"&gt;
                          {"\n"}
                          {"                          "}&lt;div className="flex
                          flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px]
                          md:mx-[-12.5px] !mt-[-25px]"&gt;{"\n"}
                          {"                            "}&lt;div
                          className="w-full flex-[0_0_auto] xl:!px-[12.5px]
                          lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] !mt-[25px]
                          max-w-full xl:!order-2 lg:!order-2 md:!order-2"&gt;
                          {"\n"}
                          {"                              "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/g6.jpg"
                          srcset="/assets/img/photos/g6@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                            "}&lt;div
                          className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] !mt-[25px] max-w-full"&gt;
                          {"\n"}
                          {"                              "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/g7.jpg"
                          srcset="/assets/img/photos/g7@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}&lt;!--/.row --&gt;
                          {"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                      "}&lt;/div&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-7" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Tiles 7</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-5px] !mt-[-50px] items-center">
                  <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] px-[5px] max-w-full !mx-auto !mt-[50px]">
                    <div className="flex flex-wrap mx-[-10px] !mt-[-20px]">
                      <div className="w-4/12 flex-[0_0_auto] px-[10px] max-w-full !mt-[20px] flex  flex-col !ml-auto">
                        <div className="ml-auto !mt-6">
                          <img
                            className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                            srcSet="/assets/img/demos/vc1@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/demos/vc1.jpg"
                            width="160"
                            height="100"
                          />
                        </div>
                        <div className="ml-auto !mt-4">
                          <img
                            className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                            srcSet="/assets/img/demos/vc2@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/demos/vc2.jpg"
                            width="180"
                            height="220"
                          />
                        </div>
                        <div className="ml-auto !mt-4">
                          <img
                            className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                            srcSet="/assets/img/demos/vc3@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/demos/vc3.jpg"
                            width="200"
                            height="100"
                          />
                        </div>
                      </div>
                      {/* /column */}
                      <div className="w-4/12 flex-[0_0_auto] px-[10px] max-w-full !mt-[20px]">
                        <div>
                          <img
                            className="w-full max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                            srcSet="/assets/img/demos/vc4@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/demos/vc4.jpg"
                            width="200"
                            height="150"
                          />
                        </div>
                        <div>
                          <img
                            className="w-full max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mt-4"
                            srcSet="/assets/img/demos/vc5@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/demos/vc5.jpg"
                            width="200"
                            height="180"
                          />
                        </div>
                        <div>
                          <img
                            className="w-full max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mt-4"
                            srcSet="/assets/img/demos/vc6@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/demos/vc6.jpg"
                            width="200"
                            height="150"
                          />
                        </div>
                      </div>
                      {/* /column */}
                      <div className="w-4/12 flex-[0_0_auto] px-[10px] max-w-full !mt-[20px] flex flex-col">
                        <div className="!mt-8">
                          <img
                            className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                            srcSet="/assets/img/demos/vc7@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/demos/vc7.jpg"
                            width="180"
                            height="230"
                          />
                        </div>
                        <div className="!mt-4 !mb-10">
                          <img
                            className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                            srcSet="/assets/img/demos/vc8@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/demos/vc8.jpg"
                            width="200"
                            height="190"
                          />
                        </div>
                      </div>
                      {/* /column */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-7"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-7"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="flex
                          flex-wrap mx-[-10px] !mt-[-20px]"&gt;{"\n"}
                          {"                        "}&lt;div className="w-4/12
                          flex-[0_0_auto] px-[10px] max-w-full !mt-[20px] flex
                          {"  "}
                          flex-col !ml-auto"&gt;{"\n"}
                          {"                          "}&lt;div
                          className="ml-auto !mt-6"&gt;&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                          src="/assets/img/demos/vc1.jpg"
                          srcset="/assets/img/demos/vc1@2x.jpg 2x"
                          alt="image"&gt;&lt;/div&gt;{"\n"}
                          {"                          "}&lt;div
                          className="ml-auto !mt-4"&gt;&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                          src="/assets/img/demos/vc2.jpg"
                          srcset="/assets/img/demos/vc2@2x.jpg 2x"
                          alt="image"&gt;&lt;/div&gt;{"\n"}
                          {"                          "}&lt;div
                          className="ml-auto !mt-4"&gt;&lt;img
                          className="max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                          src="/assets/img/demos/vc3.jpg"
                          srcset="/assets/img/demos/vc3@2x.jpg 2x"
                          alt="image"&gt;&lt;/div&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!-- /column --&gt;
                          {"\n"}
                          {"                        "}&lt;div className="w-4/12
                          flex-[0_0_auto] px-[10px] max-w-full !mt-[20px]"&gt;
                          {"\n"}
                          {"                          "}&lt;div&gt;&lt;img
                          className="w-full max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                          src="/assets/img/demos/vc4.jpg"
                          srcset="/assets/img/demos/vc4@2x.jpg 2x"
                          alt="image"&gt;&lt;/div&gt;{"\n"}
                          {"                          "}&lt;div&gt;&lt;img
                          className="w-full max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mt-4"
                          src="/assets/img/demos/vc5.jpg"
                          srcset="/assets/img/demos/vc5@2x.jpg 2x"
                          alt="image"&gt;&lt;/div&gt;{"\n"}
                          {"                          "}&lt;div&gt;&lt;img
                          className="w-full max-w-full h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mt-4"
                          src="/assets/img/demos/vc6.jpg"
                          srcset="/assets/img/demos/vc6@2x.jpg 2x"
                          alt="image"&gt;&lt;/div&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!-- /column --&gt;
                          {"\n"}
                          {"                        "}&lt;div className="w-4/12
                          flex-[0_0_auto] px-[10px] max-w-full !mt-[20px] flex
                          flex-col"&gt;{"\n"}
                          {"                          "}&lt;div
                          className="!mt-8"&gt;&lt;img className="max-w-full
                          h-auto rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                          src="/assets/img/demos/vc7.jpg"
                          srcset="/assets/img/demos/vc7@2x.jpg 2x"
                          alt="image"&gt;&lt;/div&gt;{"\n"}
                          {"                          "}&lt;div className="!mt-4
                          !mb-10"&gt;&lt;img className="max-w-full h-auto
                          rounded
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                          src="/assets/img/demos/vc8.jpg"
                          srcset="/assets/img/demos/vc8@2x.jpg 2x"
                          alt="image"&gt;&lt;/div&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!-- /column --&gt;
                          {"\n"}
                          {"                      "}&lt;/div&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-8" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Tiles 8</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
                  <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full !mx-auto">
                    <div className="flex flex-wrap !relative overlap-grid-2">
                      <div className="item xl:w-[70%] xl:z-[3] xl:ml-[30%] xl:!mt-0 lg:w-[70%] lg:z-[3] lg:ml-[30%] lg:!mt-0 md:w-[70%] md:z-[3] md:ml-[30%] md:!mt-0">
                        <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]">
                          <img
                            className="!rounded-[.4rem]"
                            srcSet="/assets/img/photos/about2@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/about2.jpg"
                            width="450"
                            height="450"
                          />
                        </figure>
                      </div>
                      {/*/.item */}
                      <div className="item xl:w-[55%] xl:!mt-[-45%] xl:z-[4] xl:ml-0 lg:w-[55%] lg:!mt-[-45%] lg:z-[4] lg:ml-0 md:w-[55%] md:!mt-[-45%] md:z-[4] md:ml-0">
                        <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]">
                          <img
                            className="!rounded-[.4rem]"
                            srcSet="/assets/img/photos/about3@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/about3.jpg"
                            width="450"
                            height="450"
                          />
                        </figure>
                      </div>
                      {/*/.item */}
                    </div>
                    {/*/.overlap-grid */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-8"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-8"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="flex
                          flex-wrap !relative overlap-grid-2"&gt;{"\n"}
                          {"                        "}&lt;div className="item
                          xl:w-[70%] xl:z-[3] xl:ml-[30%] xl:!mt-0 lg:w-[70%]
                          lg:z-[3] lg:ml-[30%] lg:!mt-0 md:w-[70%] md:z-[3]
                          md:ml-[30%] md:!mt-0"&gt;{"\n"}
                          {"                          "}&lt;figure
                          className="!rounded-[.4rem]
                          shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]"&gt;&lt;img
                          className="!rounded-[.4rem]"
                          src="/assets/img/photos/about2.jpg"
                          srcset="/assets/img/photos/about2@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/.item --&gt;{"\n"}
                          {"                        "}&lt;div className="item
                          xl:w-[55%] xl:!mt-[-45%] xl:z-[4] xl:ml-0 lg:w-[55%]
                          lg:!mt-[-45%] lg:z-[4] lg:ml-0 md:w-[55%]
                          md:!mt-[-45%] md:z-[4] md:ml-0"&gt;{"\n"}
                          {"                          "}&lt;figure
                          className="!rounded-[.4rem]
                          shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]"&gt;&lt;img
                          className="!rounded-[.4rem]"
                          src="/assets/img/photos/about3.jpg"
                          srcset="/assets/img/photos/about3@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/.item --&gt;{"\n"}
                          {"                      "}&lt;/div&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-9" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Tiles 9</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] max-w-full !mx-auto !mt-[-25px]">
                  <div className="w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <figure className="!rounded-[.4rem] xl:!mx-5 lg:!mx-5 md:!mx-5">
                      <img
                        className="!rounded-[.4rem]"
                        srcSet="/assets/img/photos/g8@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/g8.jpg"
                        width="1120"
                        height="570"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        srcSet="/assets/img/photos/g9@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/g9.jpg"
                        width="293"
                        height="260"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        srcSet="/assets/img/photos/g10@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/g10.jpg"
                        width="293"
                        height="235"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-9"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-9"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="flex
                          flex-wrap xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto]
                          max-w-full !mx-auto !mt-[-25px]"&gt;{"\n"}
                          {"                        "}&lt;div className="w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                          "}&lt;figure
                          className="!rounded-[.4rem] xl:!mx-5 lg:!mx-5
                          md:!mx-5"&gt;&lt;img className="!rounded-[.4rem]"
                          src="/assets/img/photos/g8.jpg"
                          srcset="/assets/img/photos/g8@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                        "}&lt;div
                          className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                          "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/g9.jpg"
                          srcset="/assets/img/photos/g9@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                        "}&lt;div
                          className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                          "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/g10.jpg"
                          srcset="/assets/img/photos/g10@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                      "}&lt;/div&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-10" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Tiles 10</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] max-w-full !mx-auto !mt-[-25px]">
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        srcSet="/assets/img/photos/g12@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/g12.jpg"
                        width="293"
                        height="260"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] px-[12.5px] max-w-full !self-end !mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        srcSet="/assets/img/photos/g13@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/g13.jpg"
                        width="293"
                        height="235"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <figure className="!rounded-[.4rem] xl:!mx-5 lg:!mx-5 md:!mx-5">
                      <img
                        className="!rounded-[.4rem]"
                        srcSet="/assets/img/photos/g11@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/g11.jpg"
                        width="560"
                        height="285"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-10"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-10"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="flex
                          flex-wrap xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto]
                          max-w-full !mx-auto !mt-[-25px]"&gt;{"\n"}
                          {"                        "}&lt;div
                          className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                          "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/g12.jpg"
                          srcset="/assets/img/photos/g12@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                        "}&lt;div
                          className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] px-[12.5px] max-w-full !self-end
                          !mt-[25px]"&gt;{"\n"}
                          {"                          "}&lt;figure
                          className="rounded-[0.4rem]"&gt;&lt;img
                          className="rounded-[0.4rem]"
                          src="/assets/img/photos/g13.jpg"
                          srcset="/assets/img/photos/g13@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                        "}&lt;div className="w-full
                          flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px]
                          md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]"&gt;
                          {"\n"}
                          {"                          "}&lt;figure
                          className="!rounded-[.4rem] xl:!mx-5 lg:!mx-5
                          md:!mx-5"&gt;&lt;img className="!rounded-[.4rem]"
                          src="/assets/img/photos/g11.jpg"
                          srcset="/assets/img/photos/g11@2x.jpg 2x"
                          alt="image"&gt;&lt;/figure&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/column --&gt;
                          {"\n"}
                          {"                      "}&lt;/div&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
  );
}
