import React from "react";
import { Link } from "react-router-dom";

import { categories, products } from "@/data/products";
import Pagination from "../common/Pagination";
import { useContextElement } from "@/context/Context";
export default function Shop2() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 pt-14">
        <div className="flex flex-wrap mx-[-15px] !mt-[-50px]">
          <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 lg:!order-2 !mt-[50px]">
            <div className="flex flex-wrap mx-[-15px] items-center !mb-10 !relative z-[1]">
              <div className="md:w-7/12 lg:w-7/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!pr-40">
                <h2 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-1">
                  New Arrivals
                </h2>
                <p className="!mb-0 !text-[#aab0bc]">
                  Showing 1–9 of 30 results
                </p>
              </div>
              {/*/column */}
              <div className="md:w-5/12 lg:w-5/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-auto lg:!ml-auto md:!ml-auto xl:!text-right lg:!text-right md:!text-right !mt-5 xl:!mt-0 lg:!mt-0 md:!mt-0">
                <div className="form-select-wrapper">
                  <select className="form-select">
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="newness">Sort by newness</option>
                    <option value="price: low to high">
                      Sort by price: low to high
                    </option>
                    <option value="price: high to low">
                      Sort by price: high to low
                    </option>
                  </select>
                </div>
                {/*/.form-select-wrapper */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
            <div className="itemgrid grid-view projects-masonry shop !mb-16">
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] xl:!mt-[-80px] lg:!mt-[-80px] md:!mt-[-80px] isotope">
                {products.map((product, i) => (
                  <div
                    key={i}
                    className="project item group md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full"
                  >
                    <figure className="!rounded-[.4rem] !mb-6">
                      <img
                        srcSet={`${product.image2x} 2x`}
                        alt="image"
                        src={product.image}
                        width={410}
                        height={440}
                      />
                      <a
                        className="item-like opacity-0 absolute !w-[2.2rem] !h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out !text-[#343f52] hover:!text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bg-[#ffffff] top-4 group-hover:opacity-100 group-hover:right-4"
                        href="#"
                        data-bs-toggle="white-tooltip"
                        title="Add to wishlist"
                      >
                        <i className="uil uil-heart before:content-['\eb66']" />
                      </a>
                      <a
                        className="item-view opacity-0 absolute !w-[2.2rem] !h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out !text-[#343f52] hover:!text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bg-[#ffffff] top-4 group-hover:opacity-100 group-hover:right-4"
                        href="#"
                        data-bs-toggle="white-tooltip"
                        title="Quick view"
                      >
                        <i className="uil uil-eye" />
                      </a>
                      <a
                        onClick={() => addProductToCart(product.id)}
                        className="item-cart opacity-0 absolute bottom-[-2rem] w-full h-auto !text-white text-center transition-all duration-[0.3s] ease-in-out text-[0.85rem] flex items-center justify-center font-bold m-0 p-[0.8rem] left-0 bg-[rgba(38,43,50,.8)] hover:bg-[rgba(38,43,50,.9)] hover:!text-white group-hover:opacity-100 group-hover:bottom-0"
                      >
                        <i className="uil uil-shopping-bag !font-normal !mt-[-0.05rem] !mr-1 before:content-['\ecba']" />
                        {isAddedToCartProducts(product.id)
                          ? "Already added"
                          : "Add to cart"}
                      </a>
                      {product.badge && (
                        <span
                          className="flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] rounded-[100%] !bg-[rgba(209,107,134)] !opacity-100 !text-white !w-[2.5rem] !h-[2.5rem] absolute uppercase text-[0.65rem]"
                          style={{
                            top: "1rem",
                            left: "1rem",
                            backgroundColor: product.badgeColor,
                          }}
                        >
                          <span>{product.badge}</span>
                        </span>
                      )}
                    </figure>
                    <div className="post-header">
                      <div className="flex flex-row items-center justify-between !mb-2">
                        <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#9499a3] !mb-0">
                          {product.category}
                        </div>
                        {product.rating && (
                          <span
                            className={`ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\\u2605\\u2605\\u2605\\u2605\\u2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\\u2605\\u2605\\u2605\\u2605\\u2605'] before:overflow-hidden before:left-0 before:top-0 ${product.rating}`}
                          />
                        )}{" "}
                      </div>
                      <h2 className="post-title h3 text-[1.1rem]">
                        <Link
                          to={`/shop-product/${product.id}`}
                          className="!text-[#343f52] hover:!text-[#3f78e0]"
                        >
                          {product.title}
                        </Link>
                      </h2>
                      <p className="price !m-0">
                        {product.originalPrice ? (
                          <>
                            <del className="!text-[#9499a3]">
                              <span className="amount">
                                ${product.originalPrice.toFixed(2)}
                              </span>
                            </del>{" "}
                            <ins className="no-underline !text-[#e2626b]">
                              <span className="amount">
                                ${product.price.toFixed(2)}
                              </span>
                            </ins>
                          </>
                        ) : (
                          <span className="amount">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </p>
                    </div>
                    {/* /.post-header */}
                  </div>
                ))}
              </div>
              {/* /.row */}
            </div>
            {/* /.grid */}
            <nav className="flex" aria-label="pagination">
              <ul className="pagination">
                <Pagination />
              </ul>
              {/* /.pagination */}
            </nav>
            {/* /nav */}
          </div>
          {/* /column */}
          <aside className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full sidebar !mt-[50px]">
            <div className="widget !mt-1">
              <h4 className="widget-title !mb-3">Categories</h4>
              <ul className="pl-0 list-none">
                {categories.map(
                  ({ id, name, count, subcategories, expanded }) => (
                    <li key={id} className="!mb-1 !mt-[.35rem]">
                      <a
                        href="#"
                        className={`items-center rounded ${
                          expanded ? "" : "collapsed"
                        } !text-[#60697b]`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#${id}-collapse`}
                        aria-expanded={expanded}
                      >
                        {name}
                        <span className="!text-[0.7rem] !text-[#aab0bc] !ml-1">
                          ({count})
                        </span>
                      </a>
                      <div
                        className={`collapse ${expanded ? "show" : ""} !mt-1`}
                        id={`${id}-collapse`}
                      >
                        <ul className="btn-toggle-nav list-none !pl-2">
                          {subcategories.map((sub, index) => (
                            <li
                              key={index}
                              className={index > 0 ? "!mt-[.35rem]" : ""}
                            >
                              <a href="#" className="!text-[#60697b]">
                                {sub}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* /.widget */}
            <div className="widget !mt-8">
              <h4 className="widget-title !mb-3">Rating</h4>
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  id="rating5"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="rating5">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five" />
                </label>
              </div>
              {/* /.form-check */}
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  id="rating4"
                />
                <label className="form-check-label" htmlFor="rating4">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 four" />
                </label>
              </div>
              {/* /.form-check */}
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  id="rating3"
                />
                <label className="form-check-label" htmlFor="rating3">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 three" />
                </label>
              </div>
              {/* /.form-check */}
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  id="rating2"
                />
                <label className="form-check-label" htmlFor="rating2">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 two" />
                </label>
              </div>
              {/* /.form-check */}
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  id="rating1"
                />
                <label className="form-check-label" htmlFor="rating1">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 one" />
                </label>
              </div>
              {/* /.form-check */}
            </div>
            {/* /.widget */}
            <div className="widget !mt-8">
              <h4 className="widget-title !mb-3">Size</h4>
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="xs"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="xs">
                  XS
                  <span className="!text-[0.7rem] !text-[#aab0bc] !ml-1">
                    (23)
                  </span>
                </label>
              </div>
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input className="form-check-input" type="checkbox" id="s" />
                <label className="form-check-label" htmlFor="s">
                  S
                  <span className="!text-[0.7rem] !text-[#aab0bc] !ml-1">
                    (253)
                  </span>
                </label>
              </div>
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input className="form-check-input" type="checkbox" id="m" />
                <label className="form-check-label" htmlFor="m">
                  M
                  <span className="!text-[0.7rem] !text-[#aab0bc] !ml-1">
                    (65)
                  </span>
                </label>
              </div>
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input className="form-check-input" type="checkbox" id="l" />
                <label className="form-check-label" htmlFor="l">
                  L
                  <span className="!text-[0.7rem] !text-[#aab0bc] !ml-1">
                    (156)
                  </span>
                </label>
              </div>
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input className="form-check-input" type="checkbox" id="xl" />
                <label className="form-check-label" htmlFor="xl">
                  XL
                  <span className="!text-[0.7rem] !text-[#aab0bc] !ml-1">
                    (74)
                  </span>
                </label>
              </div>
            </div>
            {/* /.widget */}
            <div className="widget !mt-8">
              <h4 className="widget-title !mb-3">Price</h4>
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="price"
                  id="price1"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="price1">
                  $0.00 - $50.00
                </label>
              </div>
              {/* /.form-check */}
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="price"
                  id="price2"
                />
                <label className="form-check-label" htmlFor="price2">
                  $0.00 - $50.00
                </label>
              </div>
              {/* /.form-check */}
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="price"
                  id="price3"
                />
                <label className="form-check-label" htmlFor="price3">
                  $50.00 - $100.00
                </label>
              </div>
              {/* /.form-check */}
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="price"
                  id="price4"
                />
                <label className="form-check-label" htmlFor="price4">
                  $150.00 - $200.00
                </label>
              </div>
              {/* /.form-check */}
              <div className="flex flex-wrap mx-[-15px]">
                <div className="w-7/12 md:w-5/12 lg:w-full xl:w-10/12 xxl:w-10/12 flex-[0_0_auto] !px-[15px] max-w-full">
                  <div className="flex items-center !mt-4">
                    <input
                      type="number"
                      className="form-control min-h-[calc(1.7em_+_0.8rem_+_2px)] text-[0.7rem] px-[0.6rem] py-[0.4rem] rounded-[0.4rem] file:!mt-[-0.4rem] file:mr-[-0.6rem] file:!mb-[-0.4rem] file:ml-[-0.6rem] file:!px-[0.6rem] file:py-[0.4rem] block w-full font-medium !leading-[1.7] !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] border-solid border-[rgba(8,60,130,0.07)] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100"
                      placeholder="$0.00"
                      min={0}
                    />
                    <div className="!text-[#aab0bc] mx-2">‒</div>
                    <input
                      type="number"
                      className="form-control min-h-[calc(1.7em_+_0.8rem_+_2px)] text-[0.7rem] px-[0.6rem] py-[0.4rem] rounded-[0.4rem] file:!mt-[-0.4rem] file:mr-[-0.6rem] file:!mb-[-0.4rem] file:ml-[-0.6rem] file:!px-[0.6rem] file:py-[0.4rem] block w-full font-medium !leading-[1.7] !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] border-solid border-[rgba(8,60,130,0.07)] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100"
                      placeholder="$50.00"
                      max={50}
                    />
                  </div>
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/* /.widget */}
          </aside>
          {/* /column .sidebar */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
