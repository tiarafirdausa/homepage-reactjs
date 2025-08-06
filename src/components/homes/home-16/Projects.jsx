import React from "react";

export default function Projects() {
  return (
    <section className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid">
      <div className="container py-[4.5rem] xl:pt-32 lg:pt-32 md:pt-32 xl:pb-24 lg:pb-24 md:pb-24">
        <div className="flex flex-wrap mx-[-15px] items-center !mb-10">
          <div className="md:w-8/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!pr-40">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
              Latest Projects
            </h2>
            <p className="lead text-[1rem] !leading-[1.65] font-medium !mb-0">
              Check out some of my latest projects with creative ideas.
            </p>
          </div>
          {/*/column */}
          <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-auto lg:!ml-auto md:!ml-auto xl:!text-right lg:!text-right md:!text-right !mt-5 xl:!mt-0 lg:!mt-0 md:!mt-0">
            <a
              href="#"
              className="btn btn-outline-pink !rounded-[50rem] !mb-0 !text-[#d16b86] !border-[#d16b86] hover:!bg-[#d16b86] hover:!text-white"
            >
              See All Projects
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="card !bg-[#f6f3f9] !mb-10">
          <div className="card-body p-14 pb-0">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full pb-14 self-center">
                <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-3 !text-[#a07cc5]">
                  Web Design
                </div>
                <h3 className="h1 post-title !mb-3 !leading-[1.3]">
                  Snowlake Theme
                </h3>
                <p>
                  Maecenas faucibus mollis interdum sed posuere consectetur est
                  at lobortis. Scelerisque id ligula porta felis euismod semper.
                  Fusce dapibus tellus cursus.
                </p>
                <a
                  href="#"
                  className="more hover !text-[#a07cc5] focus:!text-[#a07cc5] hover:!text-[#a07cc5]"
                >
                  See Project
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
                <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-3 !text-[#3f78e0]">
                  Mobile Design
                </div>
                <h3 className="h1 post-title !mb-3 !leading-[1.3]">
                  Budget App
                </h3>
                <p>
                  Maecenas faucibus mollis interdum sed posuere consectetur est
                  at lobortis. Scelerisque id ligula porta felis euismod semper.
                  Fusce dapibus tellus cursus.
                </p>
                <a
                  href="#"
                  className="more hover !text-[#3f78e0] hover:!text-[#3f78e0]"
                >
                  See Project
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
                <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-3 !text-[#7cb798]">
                  Web Design
                </div>
                <h3 className="h1 post-title !mb-3 !leading-[1.3]">
                  Missio Theme
                </h3>
                <p>
                  Maecenas faucibus mollis interdum sed posuere porta
                  consectetur cursus porta lobortis. Scelerisque id ligula
                  felis.
                </p>
                <a href="#" className="more hover link-leaf !mb-8">
                  See Project
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
                <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-3 !text-[#d16b86]">
                  Mobile Design
                </div>
                <h3 className="h1 post-title !mb-3 !leading-[1.3]">
                  Storage App
                </h3>
                <p>
                  Maecenas faucibus mollis interdum sed posuere consectetur est
                  at lobortis. Scelerisque id ligula porta felis euismod semper.
                </p>
                <a href="#" className="more hover link-pink !mb-8">
                  See Project
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
      </div>
      {/* /.container */}
    </section>
  );
}
