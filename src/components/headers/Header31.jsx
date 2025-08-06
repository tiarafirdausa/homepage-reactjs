import React from "react";
import Nav2 from "./Nav2";
import { Link } from "react-router-dom";

import CartLength from "./CartLength";
import { useContextElement } from "@/context/Context";
import { socialLinks } from "@/data/socials";
export default function Header31() {
  const { cartProducts, setCartProducts, totalPrice } = useContextElement();
  const setQuantity = (id, quantity) => {
    if (quantity >= 1) {
      const item = cartProducts.filter((elm) => elm.id == id)[0];
      const items = [...cartProducts];
      const itemIndex = items.indexOf(item);
      item.quantity = quantity;
      items[itemIndex] = item;
      setCartProducts(items);
    }
  };
  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  return (
    <header className="relative wrapper bg-soft-primary !bg-[#edf2fc]">
      <nav className="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light">
        <div className="container xl:!flex-row lg:!flex-row !flex-nowrap items-center">
          <div className="navbar-brand w-full">
            <Link to={`/`}>
              <img
                srcSet="/assets/img/logo@2x.png 2x"
                alt="image"
                src="/assets/img/logo.png"
                width={134}
                height={26}
              />
            </Link>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header xl:!hidden lg:!hidden flex items-center justify-between flex-row p-6">
              <h3 className="!text-white xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                Sandbox
              </h3>
              <button
                type="button"
                className="btn-close btn-close-white !mr-[-0.75rem] m-0 p-0 leading-none !text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:text-white before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:!flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)]"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex flex-col !h-full">
              <ul className="navbar-nav">
                <Nav2 />
              </ul>
              {/* /.navbar-nav */}
              <div className="offcanvas-footer xl:!hidden lg:!hidden">
                <div>
                  <a
                    href="mailto:first.last@email.com"
                    className="link-inverse"
                  >
                    info@email.com
                  </a>
                  <br />
                  00 (123) 456 78 90 <br />
                  <nav className="nav social social-white !mt-4">
                    {socialLinks.map((elm, i) => (
                      <a
                        key={i}
                        className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href={elm.href}
                      >
                        <i
                          className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-white text-[1rem]`}
                        />
                      </a>
                    ))}
                  </nav>
                  {/* /.social */}
                </div>
              </div>
              {/* /.offcanvas-footer */}
            </div>
            {/* /.offcanvas-body */}
          </div>
          {/* /.navbar-collapse */}
          <div className="navbar-other w-full !flex !ml-auto">
            <ul className="navbar-nav !flex-row !items-center !ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-search"
                >
                  <i className="uil uil-search before:content-['\eca5'] !text-[1.1rem]" />
                </a>
              </li>
              <li className="nav-item !ml-[.8rem]">
                <a
                  className="nav-link !relative !flex !flex-row !items-center"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-cart"
                >
                  <i className="uil uil-shopping-cart !text-[1.1rem] before:content-['\ecbd']" />
                  <span className="badge badge-cart bg-[#3f78e0] w-[0.9rem] h-[0.9rem] !flex items-center justify-center !text-[0.55rem] p-0 rounded-[100%] opacity-100">
                    <CartLength />
                  </span>
                </a>
              </li>
              <li className="nav-item xl:!hidden lg:!hidden">
                <button className="hamburger offcanvas-nav-btn">
                  <span />
                </button>
              </li>
            </ul>
            {/* /.navbar-nav */}
          </div>
          {/* /.navbar-other */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navbar */}
      <div
        className="offcanvas offcanvas-end bg-light"
        id="offcanvas-cart"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header flex items-center justify-between p-[1.5rem]">
          <h3 className="!mb-0">Your Cart</h3>
          <button
            type="button"
            className="btn-close m-0 p-0 !mr-[-.5rem] leading-none !text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:!flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(0,0,0,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)]"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body flex flex-col">
          {cartProducts.length ? (
            <div className="shopping-cart">
              {cartProducts.map((product, i) => (
                <div
                  key={i}
                  className="shopping-cart-item flex justify-between !mb-4"
                >
                  <div className="flex flex-row">
                    <figure className="!rounded-[.4rem] !w-[7rem]">
                      <Link to={`/shop-product/${product.id}`}>
                        <img
                          className="!rounded-[.4rem]"
                          srcSet={`${product.image2x} 2x`}
                          alt={product.title}
                          src={product.image}
                          width={90}
                          height={100}
                        />
                      </Link>
                    </figure>
                    <div className="!w-full !ml-[1rem]">
                      <h3 className="post-title !text-[.8rem] !leading-[1.35] !mb-1">
                        <Link
                          to={`/shop-product/${product.id}`}
                          className="!text-[#343f52] hover:!text-[#3f78e0]"
                        >
                          {product.title}
                        </Link>
                      </h3>
                      <p className="price !text-[.7rem]">
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
                      <div className="form-select-wrapper">
                        <select
                          value={product.quantity}
                          onChange={(e) => {
                            setQuantity(product.id, e.target.value);
                          }}
                          className="form-select !w-auto !min-w-[2.5rem] !bg-[right_0.4rem_center] !px-2 !py-[0.2rem] !text-[.7rem] !rounded-[.4rem]"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                      </div>
                      {/*/.form-select-wrapper */}
                    </div>
                  </div>
                  <div className="!ml-[.5rem]">
                    <a
                      onClick={() => removeItem(product.id)}
                      className="!text-[#343f52] hover:!text-[#3f78e0]"
                    >
                      <i className="uil uil-trash-alt before:content-['\ed4b']" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="mb-2.5">Cart is empty</div>

              <Link
                to={`/shop`}
                className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                Explore Products
              </Link>
            </>
          )}
          {/* /.shopping-cart*/}
          <div className="offcanvas-footer flex-col text-center">
            <div className="flex !w-full justify-between !mb-4">
              <span>Subtotal:</span>
              <span className="h6 !mb-0">${totalPrice.toFixed(2)}</span>
            </div>
            <Link
              to={`/shop-checkout`}
              className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-start rounded !w-full !mb-4 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
            >
              <i className="uil uil-credit-card !text-[.9rem] !mr-[0.3rem] before:content-['\ea74']" />
              Checkout
            </Link>
            <p className="!text-[.7rem] !mb-0">
              Free shipping on all orders over $50
            </p>
          </div>
          {/* /.offcanvas-footer*/}
        </div>
        {/* /.offcanvas-body */}
      </div>
      {/* /.offcanvas */}

      {/* /.offcanvas */}
    </header>
  );
}
