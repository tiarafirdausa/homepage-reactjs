import React, { useEffect, useState } from "react";
import DocsSidebar from "./DocsSidebar";

import scrollQue from "@/utlis/scrollCue.min";
import CodeSnippetContainer from "../common/CodeSnippetContainer";
export default function Animation() {
  const [showAnim, setShowAnim] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState("fadeIn");
  useEffect(() => {
    setShowAnim(false);
    setTimeout(() => {
      setShowAnim(true);
    }, 0);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        scrollQue().init();

        window.dispatchEvent(new Event("scroll"));
      }
    }, 500);

    // Cleanup on unmount
    return () => {
      // rellaxRef.current?.destroy();
    };
  }, [currentAnimation]);

  return (
    <>
      {/* /header */}
      <section className="wrapper !bg-[#edf2fc]">
        <div className="container pt-10 pb-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-9/12 lg:w-7/12 xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
                Animations
              </h1>
              <p className="lead xxl:!px-[1.25rem] !leading-[1.65] text-[0.9rem] font-medium">
                Add animations to elements to show them by scrolling. For
                further plugin documentation please visit{" "}
                <a
                  href="https://prjct-samwest.github.io/scrollCue/"
                  target="_blank"
                  className="hover more"
                >
                  scrollCue.js docs
                </a>
              </p>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <form className="Preview" onSubmit={(e) => e.preventDefault()}>
                <select
                  className="form-select"
                  onChange={(e) => setCurrentAnimation(e.target.value)}
                >
                  <option value="fadeIn">fadeIn</option>
                  <option value="slideInLeft">slideInLeft</option>
                  <option value="slideInRight">slideInRight</option>
                  <option value="slideInDown">slideInDown</option>
                  <option value="slideInUp">slideInUp</option>
                  <option value="zoomIn">zoomIn</option>
                  <option value="zoomOut">zoomOut</option>
                  <option value="rotateIn">rotateIn</option>
                  <option value="bounceIn">bounceIn</option>
                  <option value="bounceInLeft">bounceInLeft</option>
                  <option value="bounceInRight">bounceInRight</option>
                  <option value="bounceInDown">bounceInDown</option>
                  <option value="bounceInUp">bounceInUp</option>
                  <option value="flipInX">flipInX</option>
                  <option value="flipInY">flipInY</option>
                </select>
                <input className="hidden" type="button" defaultValue="RELOAD" />
              </form>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /section */}

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
                      Standard Example
                    </a>
                  </li>
                  <li className="!mt-[0.35rem]">
                    <a
                      className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                      href="#snippet-2"
                    >
                      Parent Wrap
                    </a>
                  </li>
                  <li className="!mt-[0.35rem]">
                    <a
                      className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                      href="#snippet-3"
                    >
                      Group Wrap
                    </a>
                  </li>
                  <li className="!mt-[0.35rem]">
                    <a
                      className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                      href="#snippet-4"
                    >
                      [data-duration]
                    </a>
                  </li>
                  <li className="!mt-[0.35rem]">
                    <a
                      className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                      href="#snippet-5"
                    >
                      [data-interval]
                    </a>
                  </li>
                  <li className="!mt-[0.35rem]">
                    <a
                      className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                      href="#snippet-6"
                    >
                      [data-delay]
                    </a>
                  </li>
                </ul>
              </nav>
              {/* /nav */}
            </div>
            {/* /.widget */}
          </aside>
          {/* /column */}
          {showAnim && (
            <div className="xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2">
              <section id="snippet-1" className="wrapper pt-24">
                <h2 className="!mb-3 !leading-[1.35]">Standard Example</h2>
                <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
                  Set the <code className="code">data-cue</code> attribute in
                  the target element and specify the animation type.
                </p>
                <div className="card">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div className="flex flex-wrap mx-[-10px] !mt-[-20px]">
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p1@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p1.jpg"
                          />
                        </figure>
                      </div>
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p2@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p2.jpg"
                          />
                        </figure>
                      </div>
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p3@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p3.jpg"
                          />
                        </figure>
                      </div>
                    </div>
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
                              &lt;img src="1.jpg" data-cue={currentAnimation}{" "}
                              alt="" /&gt;
                              {"\n"}
                              &lt;img src="2.jpg" data-cue={
                                currentAnimation
                              }{" "}
                              alt="" /&gt;
                              {"\n"}
                              &lt;img src="3.jpg" data-cue={
                                currentAnimation
                              }{" "}
                              alt="" /&gt;
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
                <h2 className="!mb-3 !leading-[1.35]">Parent Wrap</h2>
                <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
                  You can wrap it in a parent element by setting the{" "}
                  <code className="code">data-cues</code> attribute.
                </p>
                <div className="card">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div
                      className="flex flex-wrap mx-[-10px] !mt-[-20px]"
                      data-cues="fadeIn"
                    >
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p1@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p1.jpg"
                          />
                        </figure>
                      </div>
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p2@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p2.jpg"
                          />
                        </figure>
                      </div>
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p3@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p3.jpg"
                          />
                        </figure>
                      </div>
                    </div>
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
                              &lt;div data-cues="fadeIn"&gt;{"\n"}
                              {"  "}&lt;img src="1.jpg" alt="" /&gt;{"\n"}
                              {"  "}...{"\n"}
                              {"  "}&lt;img src="3.jpg" alt="" /&gt;{"\n"}
                              &lt;/div&gt;
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
                <h2 className="!mb-3 !leading-[1.35]">Group Wrap</h2>
                <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
                  You can group target elements by setting the{" "}
                  <code className="code">data-group</code> attribute. With
                  grouping, when the first element is triggered, the remaining
                  elements are also triggered sequentially, regardless of the
                  scroll amount.
                </p>
                <div className="card">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div
                      className="flex flex-wrap mx-[-10px] !mt-[-20px]"
                      data-cues="fadeIn"
                      data-group="images"
                    >
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p1@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p1.jpg"
                          />
                        </figure>
                      </div>
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p2@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p2.jpg"
                          />
                        </figure>
                      </div>
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p3@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p3.jpg"
                          />
                        </figure>
                      </div>
                    </div>
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
                              &lt;div data-cues="fadeIn" data-group="images"&gt;
                              {"\n"}
                              {"  "}&lt;img src="1.jpg" alt="" /&gt;{"\n"}
                              {"  "}...{"\n"}
                              {"  "}&lt;img src="3.jpg" alt="" /&gt;{"\n"}
                              &lt;/div&gt;
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
                <h2 className="!mb-3 !leading-[1.35]">[data-duration]</h2>
                <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
                  You can set the showing time of the element. (ms)
                </p>
                <div className="card">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div
                      className="flex flex-wrap mx-[-10px] !mt-[-20px]"
                      data-cues="fadeIn"
                      data-duration={2000}
                    >
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p1@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p1.jpg"
                          />
                        </figure>
                      </div>
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                        data-duration={500}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p2@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p2.jpg"
                          />
                        </figure>
                      </div>
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                        data-duration={500}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p3@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p3.jpg"
                          />
                        </figure>
                      </div>
                    </div>
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
                              &lt;div data-cues="fadeIn"
                              data-duration="2000"&gt;
                              {"\n"}
                              {"  "}&lt;img src="1.jpg" alt="" /&gt;{"\n"}
                              {"  "}&lt;img src="2.jpg" data-duration="500"
                              alt="" /&gt;
                              {"\n"}
                              {"  "}&lt;img src="3.jpg" data-duration="500"
                              alt="" /&gt;
                              {"\n"}&lt;/div&gt;
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
                <h2 className="!mb-3 !leading-[1.35]">[data-interval]</h2>
                <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
                  You can set the showing interval time of the element. (ms)
                </p>
                <div className="card">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div
                      className="flex flex-wrap mx-[-10px] !mt-[-20px]"
                      data-cues="fadeIn"
                      data-interval={-200}
                    >
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p1@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p1.jpg"
                          />
                        </figure>
                      </div>
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                        data-interval={1000}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p2@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p2.jpg"
                          />
                        </figure>
                      </div>
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                        data-interval="-0.2"
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p3@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p3.jpg"
                          />
                        </figure>
                      </div>
                    </div>
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
                              &lt;div data-cues="fadeIn"
                              data-interval="-200"&gt;
                              {"\n"}
                              {"  "}&lt;img src="1.jpg" alt="" /&gt;{"\n"}
                              {"  "}&lt;img src="2.jpg" data-interval="1000"
                              alt="" /&gt;{"\n"}
                              {"  "}&lt;img src="3.jpg" data-interval="-0.2"
                              alt="" /&gt;{"   "}&lt;!-- 200ms --&gt;{"\n"}
                              &lt;/div&gt;
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
              <section id="snippet-6" className="wrapper py-24">
                <h2 className="!mb-3 !leading-[1.35]">[data-delay]</h2>
                <p className="!mb-8">
                  You can set the showing delay time of the element. (ms)
                </p>
                <div className="card">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div
                      className="flex flex-wrap mx-[-10px] !mt-[-20px]"
                      data-cues="fadeIn"
                      data-delay={1000}
                    >
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p1@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p1.jpg"
                          />
                        </figure>
                      </div>
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                        data-delay={2000}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p2@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p2.jpg"
                          />
                        </figure>
                      </div>
                      <div
                        className="col flex-[1_0_0%] px-[10px] max-w-full !mt-[20px]"
                        data-cue={currentAnimation}
                      >
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            srcSet="/assets/img/photos/p3@2x.jpg 2x"
                            alt="image"
                            width="360"
                            height="250"
                            src="/assets/img/photos/p3.jpg"
                          />
                        </figure>
                      </div>
                    </div>
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
                              &lt;div data-cues="fadeIn" data-delay="1000"&gt;
                              {"\n"}
                              {"  "}&lt;img src="1.jpg" alt="" /&gt;{"\n"}
                              {"  "}&lt;img src="2.jpg" data-delay="2000" alt=""
                              /&gt;
                              {"\n"}
                              {"  "}&lt;img src="3.jpg" alt="" /&gt;{"\n"}
                              &lt;/div&gt;
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
          )}
          {/* /column */}
        </div>
        {/* /.row */}
      </div>

      {/* /.container */}
    </>
  );
}
