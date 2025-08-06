import { useContextElement } from "@/context/Context";

import { Link } from "react-router-dom";

export default function ShopCart() {
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
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-35px] !mt-[-70px]">
          <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[70px] max-w-full">
            {cartProducts.length ? (
              <div className="table-responsive">
                <table className="table !text-center shopping-cart">
                  <thead>
                    <tr>
                      <th className="!pl-0 !w-[22.5rem]">
                        <div className="h4 !mb-0 text-left">Product</div>
                      </th>
                      <th>
                        <div className="h4 !mb-0">Price</div>
                      </th>
                      <th>
                        <div className="h4 !mb-0">Quantity</div>
                      </th>
                      <th>
                        <div className="h4 !mb-0">Total</div>
                      </th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((product, i) => (
                      <tr key={i}>
                        <td className="option text-left flex flex-row items-center !pl-0">
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
                          <div className="w-full !ml-4">
                            <h3 className="post-title h6 !leading-[1.35] !mb-1">
                              <Link
                                to={`/shop-product/${product.id}`}
                                className="!text-[#343f52] hover:!text-[#3f78e0]"
                              >
                                {product.title}
                              </Link>
                            </h3>
                            <div className="small">Color: Black</div>
                            <div className="small">Size: 43</div>
                          </div>
                        </td>
                        <td>
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
                        </td>
                        <td>
                          <div className="form-select-wrapper">
                            <select
                              value={product.quantity}
                              onChange={(e) => {
                                setQuantity(product.id, e.target.value);
                              }}
                              className="form-select !w-auto !min-w-[2.5rem] !p-[.2rem_.5rem] !bg-[right_0.4rem_center] !mx-auto"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                          {/*/.form-select-wrapper */}
                        </td>
                        <td>
                          <p className="price !m-0">
                            <span className="amount">
                              ${(product.price * product.quantity).toFixed(2)}
                            </span>
                          </p>
                        </td>
                        <td className="!pr-0">
                          <a
                            onClick={() => removeItem(product.id)}
                            className="!text-[#343f52] hover:!text-[#3f78e0]"
                          >
                            <i className="uil uil-trash-alt before:content-['\ed4b']" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
            {/* /.table-responsive */}
            <div className="flex flex-wrap mx-[-15px] !mt-0">
              <div className="md:w-8/12 lg:w-7/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]">
                <div className="form-floating relative input-group">
                  <input
                    type="url"
                    className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                    placeholder=""
                    id="seo-check"
                  />
                  <label
                    htmlFor="seo-check"
                    className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                  >
                    Enter promo code
                  </label>
                  <button
                    className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                    type="button"
                  >
                    Apply
                  </button>
                </div>
                {/* /.input-group */}
              </div>
              {/* /column */}
              <div className="md:w-4/12 lg:w-5/12 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto lg:!ml-0 xl:!ml-0 xl:!text-right lg:!text-right md:!text-right !mt-[20px]">
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  Update Cart
                </a>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /column */}
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[70px] max-w-full">
            <h3 className="!mb-4">Order Summary</h3>
            <div className="table-responsive">
              <table className="table table-order">
                <tbody>
                  <tr>
                    <td className="!pl-0">
                      <strong className="!text-[#343f52]">Subtotal</strong>
                    </td>
                    <td className="!pr-0 text-right">
                      <p className="price !m-0">${totalPrice.toFixed(2)}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="!pl-0">
                      <strong className="!text-[#343f52]">Discount (5%)</strong>
                    </td>
                    <td className="!pr-0 text-right">
                      <p className="price !text-[#e2626b] !m-0">
                        -${totalPrice ? (totalPrice / 100) * 5 : 0}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="!pl-0">
                      <strong className="!text-[#343f52]">Shipping</strong>
                    </td>
                    <td className="!pr-0 text-right">
                      <p className="price !m-0">${totalPrice ? 10 : 0}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="!pl-0">
                      <strong className="!text-[#343f52]">Grand Total</strong>
                    </td>
                    <td className="!pr-0 text-right">
                      <p className="price !text-[#343f52] font-bold !m-0">
                        $
                        {totalPrice
                          ? (totalPrice - (totalPrice / 100) * 5 + 10).toFixed(
                              2
                            )
                          : 0}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              href="#"
              className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded w-full !mt-4 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
            >
              Proceed to Checkout
            </a>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
