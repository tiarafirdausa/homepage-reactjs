import { Gallery, Item } from "react-photoswipe-gallery";

export default function ProjectDetails4() {
  return (
    <section className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-10/12 xl:!ml-[8.33333333%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h1 className="!text-[calc(1.305rem_+_.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-4">
              Memphis Brand Design
            </h1>
            <div className="flex flex-wrap mx-0 !mb-[3.5rem]">
              <div className="xl:w-9/12 lg:w-9/12 md:w-9/12 w-full flex-[0_0_auto] max-w-full">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Integer posuere
                  erat a ante venenatis. Etiam porta sem malesuada magna mollis
                  euismod. Aenean lacinia bibendum.
                </p>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Cras mattis
                  consectetur purus sit amet fermentum. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur et. Donec sed odio
                  dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum.
                </p>
              </div>
              {/*/column */}
              <div className="xl:w-2/12 lg:w-2/12 md:w-2/12 w-full flex-[0_0_auto] max-w-full !ml-auto">
                <ul className="pl-0 list-none">
                  <li>
                    <h5 className="!mb-1">Date</h5>
                    <p>17 May 2018</p>
                  </li>
                  <li>
                    <h5 className="!mb-1">Client Name</h5>
                    <p>Cool House</p>
                  </li>
                </ul>
                <a href="#" className="more hover">
                  See Project
                </a>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /column */}
        </div>
        {/*/.row */}
        <Gallery>
          <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !mb-14">
            <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
                <Item
                  original={"/assets/img/photos/pp24.jpg"}
                  thumbnail={"/assets/img/photos/pp24.jpg"}
                  width={1290}
                  height={675}
                >
                  {({ ref, open }) => (
                    <a onClick={open} data-gallery="project-4">
                      <img
                        ref={ref}
                        className="transition-all duration-[0.35s] ease-in-out group-hover:scale-105"
                        srcSet="/assets/img/photos/pp24@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/pp24.jpg"
                        width={1290}
                        height={675}
                      />
                    </a>
                  )}
                </Item>
              </figure>
            </div>
            {/* /column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
                <Item
                  original={"/assets/img/photos/pp25.jpg"}
                  thumbnail={"/assets/img/photos/pp25.jpg"}
                  width={630}
                  height={460}
                >
                  {({ ref, open }) => (
                    <a onClick={open} data-gallery="project-4">
                      <img
                        ref={ref}
                        className="transition-all duration-[0.35s] ease-in-out group-hover:scale-105"
                        srcSet="/assets/img/photos/pp25@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/pp25.jpg"
                        width={630}
                        height={460}
                      />
                    </a>
                  )}
                </Item>
              </figure>
            </div>
            {/* /column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
                <Item
                  original={"/assets/img/photos/pp26.jpg"}
                  thumbnail={"/assets/img/photos/pp26.jpg"}
                  width={630}
                  height={460}
                >
                  {({ ref, open }) => (
                    <a onClick={open} data-gallery="project-4">
                      <img
                        ref={ref}
                        className="transition-all duration-[0.35s] ease-in-out group-hover:scale-105"
                        srcSet="/assets/img/photos/pp26@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/pp26.jpg"
                        width={630}
                        height={460}
                      />
                    </a>
                  )}
                </Item>
              </figure>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
          <div className="flex flex-wrap mx-[-15px] !mb-14">
            <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
              <h2 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-4">
                About the Project
              </h2>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Integer posuere erat a
                ante venenatis. Etiam porta sem malesuada magna mollis euismod.
                Aenean lacinia bibendum.
              </p>
              <p className="!mb-0">
                Donec id elit non mi porta gravida at eget metus. Cras mattis
                consectetur purus sit amet fermentum. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Sed posuere consectetur est at lobortis.
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </p>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
          <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
            <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
                <Item
                  original={"/assets/img/photos/pp27.jpg"}
                  thumbnail={"/assets/img/photos/pp27.jpg"}
                  width={1290}
                  height={830}
                >
                  {({ ref, open }) => (
                    <a data-gallery="project-4" onClick={open}>
                      <img
                        ref={ref}
                        className="transition-all duration-[0.35s] ease-in-out group-hover:scale-105"
                        srcSet="/assets/img/photos/pp27@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/pp27.jpg"
                        width={1290}
                        height={830}
                      />
                    </a>
                  )}
                </Item>
              </figure>
            </div>
            {/* /column */}
            <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
                <Item
                  original={"/assets/img/photos/pp28.jpg"}
                  thumbnail={"/assets/img/photos/pp28.jpg"}
                  width={1290}
                  height={830}
                >
                  {({ ref, open }) => (
                    <a data-gallery="project-4" onClick={open}>
                      <img
                        ref={ref}
                        className="transition-all duration-[0.35s] ease-in-out group-hover:scale-105"
                        srcSet="/assets/img/photos/pp28@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/pp28.jpg"
                        width={1290}
                        height={830}
                      />
                    </a>
                  )}
                </Item>
              </figure>
            </div>
            {/* /column */}
            <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
                <Item
                  original={"/assets/img/photos/pp29.jpg"}
                  thumbnail={"/assets/img/photos/pp29.jpg"}
                  width={410}
                  height={555}
                >
                  {({ ref, open }) => (
                    <a onClick={open} data-gallery="project-4">
                      <img
                        ref={ref}
                        className="transition-all duration-[0.35s] ease-in-out group-hover:scale-105"
                        srcSet="/assets/img/photos/pp29@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/pp29.jpg"
                        width={410}
                        height={555}
                      />
                    </a>
                  )}
                </Item>
              </figure>
            </div>
            {/* /column */}
            <div className="xl:w-8/12 lg:w-8/12 md:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
                <Item
                  original={"/assets/img/photos/pp30.jpg"}
                  thumbnail={"/assets/img/photos/pp30.jpg"}
                  width={850}
                  height={555}
                >
                  {({ ref, open }) => (
                    <a onClick={open} data-gallery="project-4">
                      <img
                        ref={ref}
                        className="transition-all duration-[0.35s] ease-in-out group-hover:scale-105"
                        srcSet="/assets/img/photos/pp30@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/pp30.jpg"
                        width={850}
                        height={555}
                      />
                    </a>
                  )}
                </Item>
              </figure>
            </div>
            {/* /column */}
          </div>{" "}
        </Gallery>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
