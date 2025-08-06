import React from "react";
import Pagination from "../common/Pagination";

export default function ProductReview() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px]">
          <aside className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[50px] max-w-full sidebar">
            <div className="widget !mt-1">
              <h4 className="widget-title !mb-3">Ratings Distribution</h4>
              <div className="!mb-5">
                <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 four" />
                <span>4.2 out of 5</span>
              </div>
              <ul className="progress-list m-0 p-0 list-none">
                <li className="!mb-4">
                  <p className="!mb-1">5 Stars</p>
                  <div
                    className="progressbar line relative blue "
                    data-value={82}
                  />
                </li>
                <li className="!mb-4">
                  <p className="!mb-1">4 Stars</p>
                  <div
                    className="progressbar line relative blue "
                    data-value={8}
                  />
                </li>
                <li className="!mb-4">
                  <p className="!mb-1">3 Stars</p>
                  <div
                    className="progressbar line relative blue "
                    data-value={5}
                  />
                </li>
                <li className="!mb-4">
                  <p className="!mb-1">2 Stars</p>
                  <div
                    className="progressbar line relative blue "
                    data-value={3}
                  />
                </li>
                <li className="!mb-4">
                  <p className="!mb-1">1 Star</p>
                  <div
                    className="progressbar line relative blue"
                    data-value={2}
                  />
                </li>
              </ul>
              {/* /.progress-list */}
            </div>
            {/* /.widget */}
            <div className="widget !mt-10">
              <h4 className="widget-title !mb-3">Review this product</h4>
              <p className="!mb-5">
                Aenean eu leo quam ornare sem lacinia quam.
              </p>
              <a
                href="#"
                className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded w-full hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                Write a Review
              </a>
            </div>
            {/* /.widget */}
          </aside>
          {/* /column .sidebar */}
          <div className="xl:w-8/12 lg:w-8/12 w-ful flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <div className="flex flex-wrap mx-[-15px] items-center !mb-10 !relative z-[1]">
              <div className="md:w-7/12 lg:w-7/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!pr-40">
                <h2 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-0">
                  Ratings &amp; Reviews
                </h2>
              </div>
              {/*/column */}
              <div className="md:w-5/12 lg:w-5/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-auto lg:!ml-auto md:!ml-auto xl:!text-right lg:!text-right md:!text-right !mt-5 xl:!mt-0 lg:!mt-0 md:!mt-0">
                <div className="form-select-wrapper">
                  <select className="form-select">
                    <option value="newest">Sort by newest</option>
                    <option value="oldest">Sort by oldest</option>
                    <option value="popular">Sort by popularity</option>
                    <option value="high-rating">Sort by high rating</option>
                    <option value="low-rating">Sort by low rating</option>
                  </select>
                </div>
                {/*/.form-select-wrapper */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
            <div id="comments" className="relative !m-0">
              <ol id="singlecomments" className="commentlist m-0 p-0 list-none">
                <li className="comment !mt-8">
                  <div className="comment-header !mb-2 xl:!flex lg:!flex md:!flex items-center">
                    <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                      <img
                        className="rounded-[50%]"
                        alt="image"
                        src="/assets/img/avatars/u1.jpg"
                        width={120}
                        height={120}
                      />
                    </figure>
                    <div>
                      <h6 className="m-0 !mb-[0.2rem]">
                        <a
                          href="#"
                          className="!text-[#343f52] hover:!text-[#3f78e0]"
                        >
                          Connor Gibson
                        </a>
                      </h6>
                      <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                        <li className="inline-block">
                          <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                          14 Jan 2022
                        </li>
                      </ul>
                      {/* /.post-meta */}
                    </div>
                    {/* /div */}
                  </div>
                  {/* /.comment-header */}
                  <div className="flex flex-row items-center !mt-5 !mb-2">
                    <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five" />
                    <h6 className="!mb-0">Highly recommended!</h6>
                  </div>
                  <p>
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                    venenatis vestibulum. Duis mollis, est non commodo luctus,
                    nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Sed posuere consectetur est at lobortis integer posuere erat
                    ante.
                  </p>
                  <div className="flex flex-row items-center pb-3">
                    <p className="!text-[#aab0bc] !text-[.75rem] !mb-0 !mr-5">
                      Was this review helpful?
                    </p>
                    <div>
                      <a
                        href="#"
                        className="!text-[#343f52] hover:!text-[#3f78e0] !mr-3"
                      >
                        <i className="uil uil-thumbs-up before:content-['\ed35']" />
                        5
                      </a>
                      <a
                        href="#"
                        className="!text-[#343f52] hover:!text-[#3f78e0]"
                      >
                        <i className="uil uil-thumbs-down before:content-['\ed36']" />
                        5
                      </a>
                    </div>
                  </div>
                </li>
                <li className="comment !mt-8">
                  <div className="comment-header !mb-2 xl:!flex lg:!flex md:!flex items-center">
                    <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                      <img
                        className="rounded-[50%]"
                        alt="image"
                        src="/assets/img/avatars/u2.jpg"
                        width={120}
                        height={120}
                      />
                    </figure>
                    <div>
                      <h6 className="m-0 !mb-[0.2rem]">
                        <a
                          href="#"
                          className="!text-[#343f52] hover:!text-[#3f78e0]"
                        >
                          Nikolas Brooten
                        </a>
                      </h6>
                      <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                        <li className="inline-block">
                          <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                          21 Feb 2022
                        </li>
                      </ul>
                      {/* /.post-meta */}
                    </div>
                    {/* /div */}
                  </div>
                  {/* /.comment-header */}
                  <div className="flex flex-row items-center !mt-5 !mb-2">
                    <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 four" />
                    <h6 className="!mb-0">Great product</h6>
                  </div>
                  <p>
                    Quisque tristique tincidunt metus non aliquam. Quisque ac
                    risus sit amet quam sollicitudin vestibulum vitae malesuada
                    libero. Mauris magna elit, suscipit non ornare et, blandit a
                    tellus. Pellentesque dignissim ornare faucibus mollis.
                  </p>
                  <div className="flex flex-row items-center pb-3">
                    <p className="!text-[#aab0bc] !text-[.75rem] !mb-0 !mr-5">
                      Was this review helpful?
                    </p>
                    <div>
                      <a
                        href="#"
                        className="!text-[#343f52] hover:!text-[#3f78e0] !mr-3"
                      >
                        <i className="uil uil-thumbs-up before:content-['\ed35']" />
                        5
                      </a>
                      <a
                        href="#"
                        className="!text-[#343f52] hover:!text-[#3f78e0]"
                      >
                        <i className="uil uil-thumbs-down before:content-['\ed36']" />
                        5
                      </a>
                    </div>
                  </div>
                </li>
                <li className="comment !mt-8">
                  <div className="flex items-center">
                    <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                      <img
                        className="rounded-[50%]"
                        alt="image"
                        src="/assets/img/avatars/u3.jpg"
                        width={120}
                        height={120}
                      />
                    </figure>
                    <div>
                      <h6 className="m-0 !mb-[0.2rem]">
                        <a
                          href="#"
                          className="!text-[#343f52] hover:!text-[#3f78e0]"
                        >
                          Pearce Frye
                        </a>
                      </h6>
                      <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                        <li className="inline-block">
                          <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                          22 Feb 2022
                        </li>
                      </ul>
                      {/* /.post-meta */}
                    </div>
                    {/* /div */}
                  </div>
                  {/* /.comment-header */}
                  <div className="flex flex-row items-center !mt-5 !mb-2">
                    <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 three" />
                    <h6 className="!mb-0">Could be better</h6>
                  </div>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Integer
                    posuere erat a ante venenatis dapibus posuere velit aliquet.
                    Etiam porta sem malesuada magna mollis.
                  </p>
                  <div className="flex flex-row items-center pb-3">
                    <p className="!text-[#aab0bc] !text-[.75rem] !mb-0 !mr-5">
                      Was this review helpful?
                    </p>
                    <div>
                      <a
                        href="#"
                        className="!text-[#343f52] hover:!text-[#3f78e0] !mr-3"
                      >
                        <i className="uil uil-thumbs-up before:content-['\ed35']" />
                        5
                      </a>
                      <a
                        href="#"
                        className="!text-[#343f52] hover:!text-[#3f78e0]"
                      >
                        <i className="uil uil-thumbs-down before:content-['\ed36']" />
                        5
                      </a>
                    </div>
                  </div>
                </li>
                <li className="comment !mt-8">
                  <div className="flex items-center">
                    <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                      <img
                        className="rounded-[50%]"
                        alt="image"
                        src="/assets/img/avatars/u2.jpg"
                        width={120}
                        height={120}
                      />
                    </figure>
                    <div>
                      <h6 className="m-0 !mb-[0.2rem]">
                        <a
                          href="#"
                          className="!text-[#343f52] hover:!text-[#3f78e0]"
                        >
                          Nikolas Brooten
                        </a>
                      </h6>
                      <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                        <li className="inline-block">
                          <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                          4 Apr 2022
                        </li>
                      </ul>
                      {/* /.post-meta */}
                    </div>
                    {/* /div */}
                  </div>
                  {/* /.comment-header */}
                  <div className="flex flex-row items-center !mt-5 !mb-2">
                    <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 one" />
                    <h6 className="!mb-0">I'm going to return it</h6>
                  </div>
                  <p>
                    Nullam id dolor id nibh ultricies vehicula ut id. Cras
                    mattis consectetur purus sit amet fermentum. Aenean eu leo
                    quam. Pellentesque ornare sem lacinia aenean bibendum nulla
                    consectetur.
                  </p>
                  <div className="flex flex-row items-center pb-3">
                    <p className="!text-[#aab0bc] !text-[.75rem] !mb-0 !mr-5">
                      Was this review helpful?
                    </p>
                    <div className="flex flex-row items-end">
                      <a
                        href="#"
                        className="!text-[#343f52] hover:!text-[#3f78e0] !mr-3"
                      >
                        <i className="uil uil-thumbs-up before:content-['\ed35']" />
                        5
                      </a>
                      <a
                        href="#"
                        className="!text-[#343f52] hover:!text-[#3f78e0]"
                      >
                        <i className="uil uil-thumbs-down before:content-['\ed36']" />
                        5
                      </a>
                    </div>
                  </div>
                </li>
                <li className="comment !mt-8">
                  <div className="comment-header !mb-2 xl:!flex lg:!flex md:!flex items-center">
                    <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                      <img
                        className="rounded-[50%]"
                        alt="image"
                        src="/assets/img/avatars/u4.jpg"
                        width={120}
                        height={120}
                      />
                    </figure>
                    <div>
                      <h6 className="m-0 !mb-[0.2rem]">
                        <a
                          href="#"
                          className="!text-[#343f52] hover:!text-[#3f78e0]"
                        >
                          Lou Bloxham
                        </a>
                      </h6>
                      <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                        <li className="inline-block">
                          <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                          3 May 2022
                        </li>
                      </ul>
                      {/* /.post-meta */}
                    </div>
                    {/* /div */}
                  </div>
                  {/* /.comment-header */}
                  <div className="flex flex-row items-center !mt-5 !mb-2">
                    <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 three" />
                  </div>
                  <p>
                    Sed posuere consectetur est at lobortis. Vestibulum id
                    ligula porta felis euismod semper. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                  <div className="flex flex-row items-center pb-3">
                    <p className="!text-[#aab0bc] !text-[.75rem] !mb-0 !mr-5">
                      Was this review helpful?
                    </p>
                    <div>
                      <a
                        href="#"
                        className="!text-[#343f52] hover:!text-[#3f78e0] !mr-3"
                      >
                        <i className="uil uil-thumbs-up before:content-['\ed35']" />
                        5
                      </a>
                      <a
                        href="#"
                        className="!text-[#343f52] hover:!text-[#3f78e0]"
                      >
                        <i className="uil uil-thumbs-down before:content-['\ed36']" />
                        5
                      </a>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            {/* /#comments */}
            <nav className="flex !mt-10" aria-label="pagination">
              <ul className="pagination">
                <Pagination />
              </ul>
              {/* /.pagination */}
            </nav>
            {/* /nav */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
