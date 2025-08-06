import React from "react";
import DocsSidebar from "./DocsSidebar";

export default function Intro() {
  return (
    <div className="container">
      <div className="flex flex-wrap mx-[-15px]">
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full sidebar doc-sidebar md:!mt-0 py-24 hidden xl:block">
          <DocsSidebar />
          {/* /.widget */}
        </aside>
        {/* /column */}
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!order-3 sidebar !sticky h-full top-0 md:!mt-0 py-24 hidden xl:block">
          <div className="widget">
            <h6 className="widget-title text-[0.85rem] !mb-2 xl:!pl-5">
              On this page
            </h6>
            <nav className="xl:!pl-5" id="sidebar-nav">
              <ul className="list-unstyled !pl-0 list-none text-[0.7rem] leading-normal text-inherit">
                <li>
                  <a
                    className="!text-inherit hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] active"
                    href="#snippet-1"
                  >
                    Overview
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="!text-inherit hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-2"
                  >
                    File Structure
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="!text-inherit hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-3"
                  >
                    Installation
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="!text-inherit hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-5"
                  >
                    Quick Video
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
            <h2 className="!mb-5 !leading-[1.35]">Overview</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <p>
                  This guide will help you get started with Sandbox. All the
                  information regarding file structure, build tools, components,
                  credits, license and FAQ can be found here.
                </p>
                <p>
                  If you have any questions that are beyond the scope of this
                  help documentation, please feel free to contact us with the
                  links below and please don't forget to provide your website
                  URL.
                </p>
                <a
                  href="https://themeforest.net/user/elite-themes24"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  target="_blank"
                >
                  Contact Form
                </a>
                <a
                  href="https://themeforest.net/item/sandbox-modern-multipurpose-tailwind-css-reactjs-template/57596129"
                  className="btn btn-soft-primary !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.05)]"
                  target="_blank"
                >
                  Discussions Page
                </a>
                <div className="card !bg-[#edf2fc] card-border-start border-soft-blue !border-[#c5d7f6] !text-[#343f52] !mt-10">
                  <div className="card-body p-[40px]">
                    <p>
                      <strong>Please remember...</strong>
                    </p>
                    <ul className="pl-0 list-none !mb-0">
                      <li className="relative !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif">
                        Requests sent during weekends or on holidays will be
                        replied on business days.
                      </li>
                      <li className="relative !pl-4 !mt-[.35rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif">
                        We only provide support for the issues related to the
                        features that are included in the template. Debugging or
                        providing guides on how to make custom modifications are
                        not part of our support. Thank you for understanding.
                      </li>
                    </ul>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.card */}
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">File Structure</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <ul className="pl-0 list-none !mb-0">
                  <li>
                    <code className="folder !bg-[#e0e9fa]">public</code> All
                    template files like Fonts / CSS / IMG / Media exist inside
                    in this folder
                    <ul>
                      <li>
                        <code className="folder !bg-[#e0e9fa]">app</code>
                        Contains main directory for defining routes and UI
                        components using the App Router
                      </li>
                      <li>
                        <code className="folder !bg-[#e0e9fa]">components</code>
                        Contains all reusable components
                      </li>
                      <li>
                        <code className="folder !bg-[#e0e9fa]">data</code>
                        Contains static data files or mock data for development
                      </li>
                    </ul>
                  </li>
                  <li>
                    <code className="folder !bg-[#e0e9fa]">app/docs</code> &amp;
                    <code className="folder !bg-[#e0e9fa]">
                      app/docs/blocks
                    </code>
                    Contain all documentation files (installation, blocks,
                    elements, etc.) regarding the template. You can also reach
                    the documentation from the
                    <a
                      href="https://sandbox-tailwind-template.netlify.app/docs/"
                      className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                      target="_blank"
                    >
                      live demo
                    </a>
                    as well.
                  </li>
                  <li>
                    <code className="file !bg-[#e0e9fa]">package.json</code>
                    Includes the list of dependencies to install from npm.
                  </li>
                </ul>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-3" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Installation</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <p>
                  If you'd like to speed up development process with
                  <mark className="doc">Node.js</mark>, then follow these steps:
                </p>
                <ol className="!mb-0">
                  <li>
                    <strong>Install</strong>
                    <a
                      href="https://nodejs.org/en/"
                      className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                      target="_blank"
                    >
                      Node.js
                    </a>
                    if you don’t have it yet.
                  </li>
                  <li>
                    <strong>Run</strong>
                    <kbd className="terminal">npm install</kbd>
                    This will install the npm packages listed in the
                    <code className="file">package.json</code> file.
                  </li>
                  <li>
                    You should now have the project files set up and all the npm
                    packages installed.
                  </li>
                  <li>
                    <strong>Build</strong>
                    <kbd className="terminal">npm run build </kbd> you wll run
                    this command after customize your template when ready for
                    production
                  </li>
                </ol>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-5" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Quick Installation Video</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <p className="!mb-2">
                  This
                  <a
                    href="https://youtu.be/vKlqZrkMvqA?si=fFJDJXwekaHtfB-8"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    quick video
                  </a>
                  demonstrates:
                </p>
                <p className="!mb-2">
                  This
                  <a
                    href="https://youtu.be/9f4GMHkW25Y?si=L1A2TBeXTxeAJ7Dp"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    How to Change Color
                  </a>
                  demonstrates:
                </p>
                <p className="!mb-2">
                  This
                  <a
                    href="https://youtu.be/rSo5Ld_Idcg?si=UkL30UPcEupiTeMm"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    How to Change icon font
                  </a>
                  demonstrates:
                </p>
                <p className="!mb-2">
                  This
                  <a
                    href="https://youtu.be/nFL6_-4Hr9k"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    How to Set Default Homepage
                  </a>
                  demonstrates:
                </p>
                <ul className="pl-0 list-none !mb-0">
                  <li>
                    Installing npm packages (Terminal command:
                    <kbd className="terminal !mt-[-0.25rem]">npm install</kbd>)
                  </li>
                  <li>
                    Build for Production (Terminal command:
                    <kbd className="terminal !mt-[-0.25rem]">npm run build</kbd>
                    )
                  </li>
                </ul>
              </div>
              {/*/.card-body */}
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
