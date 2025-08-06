import { useContextElement } from "@/context/Context";

import { Link } from "react-router-dom";

export default function Checkout() {
  const { cartProducts, setCartProducts, totalPrice } = useContextElement();

  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-35px] !mt-[-70px]">
          <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[70px] max-w-full">
            <div
              className="alert alert-primary !text-[#2c549d] !bg-[#edf2fc] !border-[#2c549d] alert-icon !p-[1rem] !pl-10 !mb-6 !border-0"
              role="alert"
            >
              <i className="uil uil-exclamation-circle before:content-['\ead0']" />
              Already have an account?
              <a
                href="#"
                data-bs-target="#modal-signin"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                className="alert-link !text-[#2c549d] hover"
              >
                Sign in
              </a>
              for faster checkout experience.
            </div>
            <h3 className="!mb-4">Billing address</h3>
            <form
              className="needs-validation"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-wrap !mt-[-15px] mx-[-7.5px]">
                <div className="max-sm:w-full w-6/12 flex-[0_0_auto] px-[7.5px] !mt-[15px] max-w-full">
                  <div className="form-floating !relative">
                    <input
                      type="text"
                      className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      id="firstName"
                      placeholder=""
                      defaultValue=""
                      required
                    />
                    <label
                      htmlFor="firstName"
                      className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      First name
                    </label>
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                </div>
                <div className="max-sm:w-full w-6/12 flex-[0_0_auto] px-[7.5px] !mt-[15px] max-w-full">
                  <div className="form-floating !relative">
                    <input
                      type="text"
                      className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      id="lastName"
                      placeholder=""
                      defaultValue=""
                      required
                    />
                    <label
                      htmlFor="lastName"
                      className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      Last name
                    </label>
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                <div className="w-full flex-[0_0_auto] px-[7.5px] !mt-[15px] max-w-full">
                  <div className="form-floating !relative">
                    <input
                      type="email"
                      className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      id="email"
                      placeholder=""
                      required
                    />
                    <label
                      htmlFor="email"
                      className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      Email
                    </label>
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                </div>
                <div className="w-full flex-[0_0_auto] px-[7.5px] !mt-[15px] max-w-full">
                  <div className="form-floating !relative">
                    <input
                      type="text"
                      className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      id="address"
                      placeholder=""
                      required
                    />
                    <label
                      htmlFor="address"
                      className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      Address
                    </label>
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                </div>
                <div className="w-full flex-[0_0_auto] px-[7.5px] !mt-[15px] max-w-full">
                  <div className="form-floating !relative">
                    <input
                      type="text"
                      className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      id="address2"
                      placeholder=""
                    />
                    <label
                      htmlFor="address2"
                      className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      Address 2
                      <span className="!text-[#aab0bc]">(Optional)</span>
                    </label>
                  </div>
                </div>
                <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[15px] max-w-full">
                  <div className="form-select-wrapper">
                    <select className="form-select" id="country" required>
                      <option value="">Country</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                </div>
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[15px] max-w-full">
                  <div className="form-select-wrapper">
                    <select className="form-select" id="state" required>
                      <option value="">State</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                </div>
                <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[15px] max-w-full">
                  <div className="form-floating !relative">
                    <input
                      type="text"
                      className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <label
                      htmlFor="zip"
                      className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      Zip Code
                    </label>
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
              </div>
              <hr className="!mt-7 !mb-6" />
              <div className="form-check block min-h-[1.36rem] !mb-0.5 !pl-[1.55rem]">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                />
                <label className="form-check-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div className="form-check block min-h-[1.36rem] !mb-0.5 !pl-[1.55rem]">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="save-info"
                />
                <label className="form-check-label" htmlFor="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr className="!mt-7 !mb-6" />
              <h3 className="!mb-4">Payment</h3>
              <div className="!mt-3 !mb-6">
                <div className="form-check block min-h-[1.36rem] !mb-0.5 !pl-[1.55rem]">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    defaultChecked=""
                    required
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check block min-h-[1.36rem] !mb-0.5 !pl-[1.55rem]">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check block min-h-[1.36rem] !mb-0.5 !pl-[1.55rem]">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap mx-[-15px]">
                <div className="xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                  <div className="flex flex-wrap !mt-[-15px] mx-[-7.5px]">
                    <div className="w-full flex-[0_0_auto] px-[7.5px] !mt-[15px] max-w-full">
                      <div className="form-floating !relative">
                        <input
                          type="text"
                          className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                          id="cc-number"
                          placeholder=""
                          required
                        />
                        <label
                          htmlFor="cc-number"
                          className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                        >
                          Credit card number
                        </label>
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[15px] max-w-full">
                      <div className="form-floating !relative">
                        <input
                          type="text"
                          className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                          id="cc-name"
                          placeholder=""
                          required
                        />
                        <label
                          htmlFor="cc-name"
                          className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                        >
                          Name on card
                        </label>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[15px] max-w-full">
                      <div className="form-floating !relative">
                        <input
                          type="text"
                          className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                          id="cc-expiration"
                          placeholder=""
                          required
                        />
                        <label
                          htmlFor="cc-expiration"
                          className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                        >
                          Expiration
                        </label>
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[15px] max-w-full">
                      <div className="form-floating !relative">
                        <input
                          type="text"
                          className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                          id="cc-cvv"
                          placeholder=""
                          required
                        />
                        <label
                          htmlFor="cc-cvv"
                          className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                        >
                          CVV
                        </label>
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* /column */}
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[70px] max-w-full">
            <h3 className="!mb-4">Order Summary</h3>
            {cartProducts.length ? (
              <div className="shopping-cart !mb-7">
                {cartProducts.map((product, i) => (
                  <div
                    key={i}
                    className="shopping-cart-item flex justify-between !mb-4"
                  >
                    <div className="flex flex-row items-center">
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
                    </div>
                    <div className="ml-2 flex items-center">
                      <p className="price text-[0.7rem]">
                        <span className="amount">
                          {" "}
                          ${(product.price * product.quantity).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="mb-2.5">Cart is empty</div>

                <Link
                  to={`/shop`}
                  className="btn btn-primary !mb-7 !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  Explore Products
                </Link>
              </>
            )}
            {/* /.shopping-cart*/}
            <hr className="!my-4" />
            <h3 className="!mb-2">Shipping</h3>
            <div className="!mb-5">
              <div className="form-check block min-h-[1.36rem] !pl-[1.55rem] !mb-2">
                <input
                  id="standart"
                  name="shippingMethod"
                  type="radio"
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="standart">
                  Free - Standart delivery
                </label>
                <small className="!text-[#aab0bc] block">
                  Shipment may take 5-6 business days
                </small>
              </div>
              <div className="form-check block min-h-[1.36rem] !mb-0.5 !pl-[1.55rem]">
                <input
                  id="express"
                  name="shippingMethod"
                  type="radio"
                  className="form-check-input"
                  defaultChecked=""
                  required
                />
                <label className="form-check-label" htmlFor="express">
                  $10 - Express delivery
                </label>
                <small className="!text-[#aab0bc] block">
                  Shipment may take 2-3 business days
                </small>
              </div>
            </div>
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
              Place Order
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
