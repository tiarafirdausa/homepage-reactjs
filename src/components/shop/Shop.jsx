import React from "react";
import { Link } from "react-router-dom";

import { products } from "@/data/products";
import Pagination from "../common/Pagination";
import { useContextElement } from "@/context/Context";
export default function Shop() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] items-center !mb-10 !relative z-[1]">
          <div className="md:w-8/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!pr-40">
            <h2 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35]">
              New Arrivals
            </h2>
            <nav className="inline-block" aria-label="breadcrumb">
              <ol className="breadcrumb !mb-0 flex flex-wrap p-0 !rounded-none">
                <li className="breadcrumb-item flex !text-[#60697b]">
                  <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                    Home
                  </a>
                </li>
                <li
                  className="breadcrumb-item flex !text-[#60697b] !pl-[.5rem] active before:font-normal before:!flex before:items-center before:text-[rgba(96,105,123,0.35)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons"
                  aria-current="page"
                >
                  Shop
                </li>
              </ol>
            </nav>
            {/* /nav */}
          </div>
          {/*/column */}
          <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-auto lg:!ml-auto md:!ml-auto xl:!text-right lg:!text-right md:!text-right !mt-5 xl:!mt-0 lg:!mt-0 md:!mt-0">
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
            {products.map((product) => (
              <div
                key={product.id}
                className="project item group md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full"
              >
                <figure className="!rounded-[.4rem] !mb-6">
                  <img
                    srcSet={`${product.image2x} 2x`}
                    alt={product.title}
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
                    )}
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
                        </del>
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
              </div>
            ))}
          </div>
          {/* /.row */}
        </div>
        {/* /.grid */}
        <nav className="flex justify-center" aria-label="pagination">
          <ul className="pagination">
            <Pagination />
          </ul>
          {/* /.pagination */}
        </nav>
        {/* /nav */}
      </div>
      {/* /.container */}
    </section>
  );
}
