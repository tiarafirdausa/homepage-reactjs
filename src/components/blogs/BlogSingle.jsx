import React from "react";
import RelatedBlogs from "./RelatedBlogs";
import Gallery from "./Gallery";
import Comment from "./Comment";
import CommentBox from "./CommentBox";

export default function BlogSingle({ marginTop = true }) {
  return (
    <div className={`blog single ${marginTop ? "!mt-[-7rem]" : ""} `}>
      <div className="card">
        <figure className="card-img-top">
          <img
            alt="image"
            src="/assets/img/photos/b1.jpg"
            width={960}
            height={600}
          />
        </figure>
        <div className="card-body flex-[1_1_auto] p-[40px] xl:!p-[2.8rem_3rem_2.8rem] lg:!p-[2.8rem_3rem_2.8rem] md:!p-[2.8rem_3rem_2.8rem]">
          <div className="classic-view">
            <article className="post !mb-8">
              <div className="relative !mb-5">
                <h2 className="h1 !mb-4 !leading-[1.3]">
                  Cras mattis consectetur purus fermentum
                </h2>
                <p>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet. Vivamus
                  sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                  Cras mattis consectetur purus sit amet fermentum. Aenean
                  lacinia bibendum nulla sed consectetur. Curabitur blandit
                  tempus porttitor. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor. Nullam quis risus eget porta ac
                  consectetur vestibulum.
                </p>
                <p>
                  Donec sed odio dui consectetur adipiscing elit. Etiam
                  adipiscing tincidunt elit, eu convallis felis suscipit ut.
                  Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris.
                  Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean
                  tortor libero, condimentum ac laoreet vitae, varius tempor
                  nisi. Duis non arcu vel lectus urna mollis ornare vel eu leo.
                </p>

                <Gallery />

                {/* /.row */}
                <p>
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec sed odio dui. Nulla
                  vitae elit libero, a pharetra augue. Maecenas faucibus mollis
                  interdum. Donec id elit non mi porta gravida at eget metus.
                  Nullam quis risus eget urna mollis ornare vel eu leo. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
                  consectetur est at lobortis. Cras mattis consectetur purus sit
                  amet fermentum. Praesent commodo cursus magna.
                </p>
                <blockquote className="border-l-[#3f78e0] !leading-[1.7] font-medium !pl-4 border-l-[0.15rem] border-solid !text-[1rem] !my-8">
                  <p>
                    Sed posuere consectetur est at lobortis. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Duis mollis, est non
                    commodo luctus, nisi erat porttitor ligula lacinia odio sem
                    nec elit purus.
                  </p>
                  <footer className="!text-[0.6rem] !text-[#aab0bc] !mb-4 before:content-['\2014\a0'] font-bold uppercase !tracking-[0.02rem] !mt-0">
                    Very important person
                  </footer>
                </blockquote>
                <h3 className="h2 !mb-4">Sit Vulputate Bibendum Purus</h3>
                <p>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Aenean lacinia bibendum nulla sed consectetur. Cras mattis
                  consectetur purus sit amet fermentum. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur et. Vestibulum id
                  ligula porta felis euismod semper.
                </p>
                <p>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh, ut fermentum massa justo sit
                  amet risus. Sed posuere consectetur est at lobortis. Donec id
                  elit non mi porta gravida at eget metus. Nulla vitae elit
                  libero, a pharetra augue. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh.
                </p>
              </div>
              {/* /.post-content */}
              <div className="post-footer xl:!flex xl:!flex-row xl:!justify-between lg:!flex lg:!flex-row lg:!justify-between md:!flex md:!flex-row md:!justify-between !items-center !mt-8">
                <div>
                  <ul className="pl-0 list-none tag-list !mb-0">
                    <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                      <a
                        href="#"
                        className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                      >
                        Still Life
                      </a>
                    </li>
                    <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                      <a
                        href="#"
                        className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                      >
                        Urban
                      </a>
                    </li>
                    <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                      <a
                        href="#"
                        className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                      >
                        Nature
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="!mb-0 xl:!mb-2 lg:!mb-2 md:!mb-2">
                  <div className="dropdown share-dropdown btn-group">
                    <button
                      className="btn btn-sm btn-red !text-white !bg-[#e2626b] border-[#e2626b] hover:text-white hover:bg-[#e2626b] hover:!border-[#e2626b] active:text-white active:bg-[#e2626b] active:border-[#e2626b] disabled:text-white disabled:bg-[#e2626b] disabled:border-[#e2626b] !rounded-[50rem] btn-icon btn-icon-start dropdown-toggle !mb-0 !mr-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="uil uil-share-alt !mr-[0.3rem] text-[0.8rem] before:content-['\ecb0']" />
                      Share
                    </button>
                    <div className="dropdown-menu !shadow-[rgba(30,34,40,0.06)_0px_0px_25px_0px]">
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
                  {/*/.share-dropdown */}
                </div>
              </div>
              {/* /.post-footer */}
            </article>
            {/* /.post */}
          </div>
          {/* /.classic-view */}
          <hr />
          <div className="author-info xl:!flex lg:!flex md:!flex items-center !mb-3">
            <div className="flex items-center">
              <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                <img
                  className="rounded-[50%]"
                  alt="image"
                  src="/assets/img/avatars/u5.jpg"
                  width={120}
                  height={120}
                />
              </figure>
              <div>
                <h6>
                  <a href="#" className="!text-[#343f52] hover:!text-[#3f78e0]">
                    Nikolas Brooten
                  </a>
                </h6>
                <span className="!text-[0.75rem] !text-[#aab0bc] m-0 p-0 list-none">
                  Sales Manager
                </span>
              </div>
            </div>
            <div className="!mt-3 xl:!mt-0 lg:!mt-0 md:!mt-0 !ml-auto">
              <a
                href="#"
                className="btn btn-sm btn-soft-ash !rounded-[50rem] btn-icon btn-icon-start !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                <i className="uil uil-file-alt !mr-[0.3rem] before:content-['\eaec'] text-[.8rem]" />
                All Posts
              </a>
            </div>
          </div>
          {/* /.author-info */}
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus
            mollis interdum. Fusce dapibus, tellus ac. Maecenas faucibus mollis
            interdum.
          </p>
          <nav className="nav social">
            <a
              className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
              href="#"
            >
              <i className="text-[1rem] !text-[#5daed5] before:content-['\ed59'] uil uil-twitter" />
            </a>
            <a
              className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
              href="#"
            >
              <i className="text-[1rem] !text-[#4470cf] before:content-['\eae2'] uil uil-facebook-f" />
            </a>
            <a
              className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
              href="#"
            >
              <i className="text-[1rem] !text-[#e94d88] before:content-['\eaa2'] uil uil-dribbble" />
            </a>
            <a
              className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
              href="#"
            >
              <i className="text-[1rem] !text-[#d53581] before:content-['\eb9c'] uil uil-instagram" />
            </a>
            <a
              className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
              href="#"
            >
              <i className="text-[1rem] !text-[#c8312b] before:content-['\edb5'] uil uil-youtube" />
            </a>
          </nav>
          {/* /.social */}
          <hr />
          <h3 className="!mb-6">You Might Also Like</h3>
          <RelatedBlogs />
          {/* /.swiper-container */}
          <hr />
          <Comment />
          {/* /#comments */}
          <hr />
          <h3 className="!mb-3">Would you like to share your thoughts?</h3>
          <p className="!mb-7">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <CommentBox />
          {/* /.comment-form */}
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div>
  );
}
