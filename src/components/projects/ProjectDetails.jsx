import { Gallery, Item } from "react-photoswipe-gallery";

const images = [
  { src: "/assets/img/photos/pp2.jpg", alt: "image" },
  { src: "/assets/img/photos/pp3.jpg", alt: "image" },
  { src: "/assets/img/photos/pp4.jpg", alt: "image" },
  { src: "/assets/img/photos/pp5.jpg", alt: "image" },
];
export default function ProjectDetails() {
  return (
    <div className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid">
      <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <article className="!mt-[-12.5rem]">
              <figure className="!rounded-[.4rem] !mb-8 xl:!mb-[3.5rem] lg:!mb-[3.5rem] md:!mb-[3.5rem]">
                <img
                  className="!rounded-[.4rem]"
                  alt="image"
                  src="/assets/img/photos/pp1.jpg"
                  width={2400}
                  height={1640}
                />
              </figure>
              <div className="flex flex-wrap mx-[-15px]">
                <div className="xl:w-10/12 xl:!ml-[8.33333333%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] !px-[15px] max-w-full">
                  <h2 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-4">
                    About the Project
                  </h2>
                  <div className="flex flex-wrap mx-0">
                    <div className="xl:w-9/12 lg:w-9/12 md:w-9/12 w-full flex-[0_0_auto] max-w-full">
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Fusce
                        dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet
                        risus. Integer posuere erat a ante venenatis. Etiam
                        porta sem malesuada magna mollis euismod. Aenean lacinia
                        bibendum.
                      </p>
                      <p>
                        Donec id elit non mi porta gravida at eget metus. Cras
                        mattis consectetur purus sit amet fermentum. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Aenean eu leo quam. Pellentesque
                        ornare sem lacinia quam venenatis vestibulum. Sed
                        posuere consectetur est at lobortis. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor.
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
                <div className="flex flex-wrap mx-[-15px] md:mx-[-15px] !mt-[25px]">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
                    >
                      <Item
                        original={image.src}
                        thumbnail={image.src}
                        width={960}
                        height={640}
                      >
                        {({ ref, open }) => (
                          <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
                            <a onClick={open} data-gallery="project-1">
                              <img
                                className="transition-all duration-[0.35s] ease-in-out group-hover:scale-105"
                                alt={image.alt}
                                src={image.src}
                                width={960}
                                ref={ref}
                                height={640}
                              />
                            </a>
                          </figure>
                        )}
                      </Item>
                    </div>
                  ))}
                </div>{" "}
              </Gallery>
              {/* /.row */}
              <div className="flex flex-wrap mx-[-15px] !mt-8 xl:!mt-[4.5rem] lg:!mt-[4.5rem] md:!mt-[4.5rem]">
                <div className="xl:w-10/12 xl:!ml-[8.33333333%] lg:w-10/12 lg:!ml-[8.33333333%] md:w-10/12 md:!ml-[8.33333333%] flex-[0_0_auto] !px-[15px] max-w-full">
                  <h2 className="!mb-4">Quam Mollis Bibendum</h2>
                  <p>
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna. Donec ullamcorper nulla non metus auctor fringilla.
                    Cras mattis consectetur purus sit amet fermentum. Aenean
                    lacinia bibendum nulla sed consectetur. Curabitur blandit
                    tempus porttitor. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et. Donec id elit non mi porta
                    gravida at eget metus. Donec id elit non mi porta gravida at
                    eget metus. Cras mattis consectetur purus sit amet
                    fermentum.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Duis mollis,
                    est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Maecenas faucibus mollis
                    interdum. Maecenas sed diam eget risus varius blandit sit
                    amet non magna. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Nulla vitae elit libero, a pharetra
                    augue. Maecenas faucibus mollis interdum etiam porta.
                  </p>
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </article>
            {/* /.project */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
}
