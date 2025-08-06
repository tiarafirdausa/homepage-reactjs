import React from "react";

export default function ProjectNavigation() {
  return (
    <div className="wrapper !bg-[#ffffff]">
      <div className="container py-10">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-15px] !mt-[-15px] xl:!mt-0 lg:!mt-0 md:!mt-0">
          <div className="xl:w-8/12 lg:w-8/12 md:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full self-center text-center xl:text-left lg:text-left md:text-left navigation">
            <a
              href=""
              className="btn btn-soft-ash !rounded-[50rem] btn-icon btn-icon-start !mb-0 !mr-[.25rem] hover:translate-y-[-0.15rem]"
            >
              <i className="uil uil-arrow-left before:content-['\e949']" />
              Prev Post
            </a>
            <a
              href=""
              className="btn btn-soft-ash !rounded-[50rem] btn-icon btn-icon-end hover:translate-y-[-0.15rem] !mb-0"
            >
              Next Post
              <i className="uil uil-arrow-right before:content-['\e94c']" />
            </a>
          </div>
          {/*/column */}
          <aside className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full max-md:!mt-[15px] sidebar text-center xl:text-right lg:text-right md:text-right">
            {/*/.share-dropdown */}
            <div className="dropdown share-dropdown btn-group">
              <button
                className="btn btn-red !text-white !bg-[#e2626b] border-[#e2626b] hover:text-white hover:bg-[#e2626b] hover:!border-[#e2626b] active:text-white active:bg-[#e2626b] active:border-[#e2626b] disabled:text-white disabled:bg-[#e2626b] disabled:border-[#e2626b] !rounded-[50rem] btn-icon btn-icon-start dropdown-toggle !mb-0 !mr-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="uil uil-share-alt !mr-[0.3rem] text-[0.8rem] before:content-['\ecb0']" />
                Share
              </button>
              <div
                className="dropdown-menu !shadow-[rgba(30,34,40,0.06)_0px_0px_25px_0px]"
                style={{}}
              >
                <a
                  className="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]"
                  href="#"
                >
                  <i className="uil uil-twitter w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\ed59']" />
                  Twitter
                </a>
                <a
                  className="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]"
                  href="#"
                >
                  <i className="uil uil-facebook-f w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\eae2']" />
                  Facebook
                </a>
                <a
                  className="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]"
                  href="#"
                >
                  <i className="uil uil-linkedin w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\ebd1']" />
                  Linkedin
                </a>
              </div>
              {/*/.dropdown-menu */}
            </div>
          </aside>
          {/* /column .sidebar */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </div>
  );
}
