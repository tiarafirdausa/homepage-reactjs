import React from "react";

export default function Projects6() {
  return (
    <>
      {/* /.row */}
      <div className="flex flex-wrap mx-[-15px] items-center !mb-10">
        <div className="md:w-8/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
          <h2 className="!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !mb-0">
            Check out some of my latest projects with creative ideas.
          </h2>
        </div>
        {/*/column */}
        <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-auto lg:!ml-auto md:!ml-auto xl:!text-right lg:!text-right md:!text-right !mt-5 xl:!mt-0 lg:!mt-0 md:!mt-0">
          <a
            href="#"
            className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
          >
            See All Projects
            <i className="uil uil-arrow-up-right !ml-[.3rem] before:content-['\e950']" />
          </a>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
      <div className="card !bg-[#f6f3f9] !mb-10">
        <div className="card-body p-14 pb-0">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full pb-14 self-center">
              <div className="uppercase !tracking-[0.02rem] text-[0.75rem] font-semibold !mb-3 !text-[#a07cc5]">
                Web Design
              </div>
              <h3 className="h1 post-title !mb-3 !leading-[1.3]">
                Snowlake Theme
              </h3>
              <p>
                Maecenas faucibus mollis interdum sed posuere consectetur est at
                lobortis. Scelerisque id ligula porta felis euismod semper.
                Fusce dapibus tellus cursus.
              </p>
              <a
                href="#"
                className="btn btn-sm btn-violet !text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:!border-[#a07cc5] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5] btn-icon btn-icon-end !mb-0 !text-[0.75rem]"
              >
                See Project
                <i className="uil uil-arrow-up-right before:content-['\e950']" />
              </a>
            </div>
            {/* /column */}
            <div className="xl:w-7/12 xl:!ml-[8.33333333%] lg:w-7/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] !px-[15px] max-w-full !self-end">
              <figure className="m-0 p-0">
                <img
                  className="max-w-full h-auto"
                  srcSet="/assets/img/photos/f1@2x.png 2x"
                  alt="image"
                  src="/assets/img/photos/f1.png"
                  width={650}
                  height={370}
                />
              </figure>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/*/.card-body */}
      </div>
      {/*/.card */}
      <div className="card !bg-[#edf2fc] !mb-10">
        <div className="card-body p-14">
          <div className="flex flex-wrap mx-[-15px] !mt-[-50px] items-center">
            <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 xl:!ml-[8.33333333%] lg:!order-2 lg:!ml-[8.33333333%] !mt-[50px]">
              <div className="uppercase !tracking-[0.02rem] text-[0.75rem] font-semibold !mb-3 !text-[#3f78e0]">
                Mobile Design
              </div>
              <h3 className="h1 post-title !mb-3 !leading-[1.3]">Budget App</h3>
              <p>
                Maecenas faucibus mollis interdum sed posuere consectetur est at
                lobortis. Scelerisque id ligula porta felis euismod semper.
                Fusce dapibus tellus cursus.
              </p>
              <a
                href="#"
                className="btn btn-sm btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] btn-icon btn-icon-end !mb-0 !text-[0.75rem]"
              >
                See Project
                <i className="uil uil-arrow-up-right before:content-['\e950']" />
              </a>
            </div>
            {/* /column */}
            <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
              <figure className="m-0 p-0">
                <img
                  className="max-w-full h-auto"
                  srcSet="/assets/img/photos/f2@2x.png 2x"
                  alt="image"
                  src="/assets/img/photos/f2.png"
                  width={600}
                  height={367}
                />
              </figure>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/*/.card-body */}
      </div>
      {/*/.card */}
      <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-25px]">
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full">
          <div className="card !bg-[#f3f8f5] !mb-10 lg:!mb-0">
            <div className="card-body p-14 pb-0">
              <div className="uppercase !tracking-[0.02rem] text-[0.75rem] font-semibold !mb-3 !text-[#7cb798]">
                Web Design
              </div>
              <h3 className="h1 post-title !mb-3 !leading-[1.3]">
                Missio Theme
              </h3>
              <p>
                Maecenas faucibus mollis interdum sed posuere porta consectetur
                cursus porta lobortis. Scelerisque id ligula felis.
              </p>
              <a
                href="#"
                className="btn btn-sm btn-leaf !text-white !bg-[#7cb798] border-[#7cb798] hover:text-white hover:bg-[#7cb798] hover:!border-[#7cb798] focus:shadow-[rgba(113,165,142,1)] active:text-white active:bg-[#7cb798] active:border-[#7cb798] disabled:text-white disabled:bg-[#7cb798] disabled:border-[#7cb798] btn-icon btn-icon-end !text-[0.75rem] !mb-10"
              >
                See Project
                <i className="uil uil-arrow-up-right before:content-['\e950']" />
              </a>
            </div>
            {/*/.card-body */}
            <img
              className="card-img-bottom"
              srcSet="/assets/img/photos/f3@2x.png 2x"
              alt="image"
              src="/assets/img/photos/f3.png"
              width={620}
              height={370}
            />
          </div>
          {/*/.card */}
        </div>
        {/* /column */}
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full">
          <div className="card !bg-[#fbf1f4] xl:!mb-0 lg:!mb-0">
            <div className="card-body p-14 pb-0">
              <div className="uppercase !tracking-[0.02rem] text-[0.75rem] font-semibold !mb-3 !text-[#d16b86]">
                Mobile Design
              </div>
              <h3 className="h1 post-title !mb-3 !leading-[1.3]">
                Storage App
              </h3>
              <p>
                Maecenas faucibus mollis interdum sed posuere consectetur est at
                lobortis. Scelerisque id ligula porta felis euismod semper.
              </p>
              <a
                href="#"
                className="btn btn-sm btn-pink !text-white !bg-[#d16b86] border-[#d16b86] hover:text-white hover:bg-[#d16b86] hover:!border-[#d16b86] active:text-white active:bg-[#d16b86] active:border-[#d16b86] disabled:text-white disabled:bg-[#d16b86] disabled:border-[#d16b86] btn-icon btn-icon-end !text-[0.75rem] !mb-10"
              >
                See Project
                <i className="uil uil-arrow-up-right before:content-['\e950']" />
              </a>
            </div>
            {/*/.card-body */}
            <img
              className="card-img-bottom"
              srcSet="/assets/img/photos/f4@2x.png 2x"
              alt="image"
              src="/assets/img/photos/f4.png"
              width={620}
              height={370}
            />
          </div>
          {/*/.card */}
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </>
  );
}
