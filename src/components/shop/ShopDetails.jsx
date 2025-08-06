import React, { useState } from "react";
import Slider from "./Slider";
import { useContextElement } from "@/context/Context";

export default function ShopDetails({ product }) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [value, setValue] = useState(1);
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-40px]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[40px] max-w-full">
            <Slider firstImage={product.image} />
            {/* <!-- /.swiper-container --> */}
          </div>
          {/* <!-- /column --> */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[40px] max-w-full">
            <div className="post-header !mb-5">
              <h2 className="post-title !text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3]">
                <a href="#" className="!text-[#343f52] hover:!text-[#3f78e0]">
                  {product.title}
                </a>
              </h2>
              <p className="price text-[1rem] !mb-2">
                <span className="amount">${product.price.toFixed(2)}</span>
              </p>
              <a href="#" className="!text-[#60697b] ratings-wrapper">
                <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 four align-[-1px]"></span>
                <span className="inline-block">(3 Reviews)</span>
              </a>
            </div>
            {/* <!-- /.post-header --> */}
            <p className="!mb-6">
              Cum sociis natoque penatibus et magnis dis parturient montes
              nascetur ridiculus mus. Duis mollis, est non commodo luctus. Nulla
              vitae elit libero pharetra augue. Donec id elit non mi porta
              gravida at eget metus.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <fieldset className="picker">
                <legend className="h6 !text-[0.8rem] !text-[#60697b] !mb-3">
                  Choose a size
                </legend>
                <label
                  htmlFor="size-xs"
                  className="relative isolate flex items-center place-items-center cursor-pointer !mr-2 w-8 h-8"
                >
                  <input
                    type="radio"
                    name="sizes"
                    id="size-xs"
                    defaultChecked
                  />
                  <span className="absolute inset-0 h-full w-full text-[0.7rem] leading-none flex items-center justify-center place-items-center p-2 rounded-[0.4rem] bg-[rgba(164,174,198,.2)]">
                    XS
                  </span>
                </label>
                <label
                  htmlFor="size-s"
                  className="relative isolate flex items-center place-items-center cursor-pointer !mr-2 w-8 h-8"
                >
                  <input type="radio" name="sizes" id="size-s" />
                  <span className="absolute inset-0 h-full w-full text-[0.7rem] leading-none flex items-center justify-center place-items-center p-2 rounded-[0.4rem] bg-[rgba(164,174,198,.2)]">
                    S
                  </span>
                </label>
                <label
                  htmlFor="size-m"
                  className="relative isolate flex items-center place-items-center cursor-pointer !mr-2 w-8 h-8"
                >
                  <input type="radio" name="sizes" id="size-m" />
                  <span className="absolute inset-0 h-full w-full text-[0.7rem] leading-none flex items-center justify-center place-items-center p-2 rounded-[0.4rem] bg-[rgba(164,174,198,.2)]">
                    M
                  </span>
                </label>
                <label
                  htmlFor="size-l"
                  className="relative isolate flex items-center place-items-center cursor-pointer !mr-2 w-8 h-8"
                >
                  <input type="radio" name="sizes" id="size-l" />
                  <span className="absolute inset-0 h-full w-full text-[0.7rem] leading-none flex items-center justify-center place-items-center p-2 rounded-[0.4rem] bg-[rgba(164,174,198,.2)]">
                    L
                  </span>
                </label>
                <label
                  htmlFor="size-xl"
                  className="relative isolate flex items-center place-items-center cursor-pointer !mr-2 w-8 h-8"
                >
                  <input type="radio" name="sizes" id="size-xl" />
                  <span className="absolute inset-0 h-full w-full text-[0.7rem] leading-none flex items-center justify-center place-items-center p-2 rounded-[0.4rem] bg-[rgba(164,174,198,.2)]">
                    XL
                  </span>
                </label>
              </fieldset>
              <fieldset className="picker">
                <legend className="h6 !text-[0.8rem] !text-[#60697b] !mb-3">
                  Choose a color
                </legend>
                <label
                  className="relative isolate flex items-center place-items-center cursor-pointer !mr-2 w-6 h-6"
                  htmlFor="color-1"
                  style={{ "--color": "#fab758" }}
                >
                  <input
                    type="radio"
                    name="colors"
                    id="color-1"
                    defaultChecked
                  />
                  <span className="absolute inset-0 h-full w-full text-[1px] flex items-center justify-center place-items-center text-transparent rounded-[100%] bg-[var(--color,rgba(164,174,198,.2))]">
                    Yellow
                  </span>
                </label>
                <label
                  className="relative isolate flex items-center place-items-center cursor-pointer !mr-2 w-6 h-6"
                  htmlFor="color-2"
                  style={{ "--color": "#e2626b" }}
                >
                  <input type="radio" name="colors" id="color-2" />
                  <span className="absolute inset-0 h-full w-full text-[1px] flex items-center justify-center place-items-center text-transparent rounded-[100%] bg-[var(--color,rgba(164,174,198,.2))]">
                    Red
                  </span>
                </label>
                <label
                  className="relative isolate flex items-center place-items-center cursor-pointer !mr-2 w-6 h-6"
                  htmlFor="color-3"
                  style={{ "--color": "#7cb798" }}
                >
                  <input type="radio" name="colors" id="color-3" />
                  <span className="absolute inset-0 h-full w-full text-[1px] flex items-center justify-center place-items-center text-transparent rounded-[100%] bg-[var(--color,rgba(164,174,198,.2))]">
                    Green
                  </span>
                </label>
                <label
                  className="relative isolate flex items-center place-items-center cursor-pointer !mr-2 w-6 h-6"
                  htmlFor="color-4"
                  style={{ "--color": "#3f78e0" }}
                >
                  <input type="radio" name="colors" id="color-4" />
                  <span className="absolute inset-0 h-full w-full text-[1px] flex items-center justify-center place-items-center text-transparent rounded-[100%] bg-[var(--color,rgba(164,174,198,.2))]">
                    Blue
                  </span>
                </label>
                <label
                  className="relative isolate flex items-center place-items-center cursor-pointer !mr-2 w-6 h-6"
                  htmlFor="color-5"
                  style={{ "--color": "#a07cc5" }}
                >
                  <input type="radio" name="colors" id="color-5" />
                  <span className="absolute inset-0 h-full w-full text-[1px] flex items-center justify-center place-items-center text-transparent rounded-[100%] bg-[var(--color,rgba(164,174,198,.2))]">
                    Purple
                  </span>
                </label>
              </fieldset>
              <div className="flex flex-wrap mx-[-15px]">
                <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full flex flex-row pt-2">
                  <div>
                    <div className="form-select-wrapper">
                      <select
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        className="form-select"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    {/* <!--/.form-select-wrapper --> */}
                  </div>
                  <div className="grow mx-2">
                    <button
                      onClick={() => addProductToCart(product.id, value)}
                      className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-start rounded !w-full grow hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                    >
                      <i className="uil uil-shopping-bag !font-normal !mt-[-0.05rem] !mr-1 before:content-['\ecba']"></i>
                      {isAddedToCartProducts(product.id)
                        ? "Already added"
                        : "Add to Cart"}
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-block btn-red !text-white !bg-[#e2626b] border-[#e2626b] hover:text-white hover:bg-[#e2626b] hover:!border-[#e2626b] active:text-white active:bg-[#e2626b] active:border-[#e2626b] disabled:text-white disabled:bg-[#e2626b] disabled:border-[#e2626b] btn-icon rounded !px-3 !w-full !h-full hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">
                      <i className="uil uil-heart before:content-['\eb66']"></i>
                    </button>
                  </div>
                </div>
                {/* <!-- /column --> */}
              </div>
              {/* <!-- /.row --> */}
            </form>
            {/* <!-- /form --> */}
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
        <ul className="nav nav-tabs nav-tabs-basic !mt-[70px]">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#tab1-1">
              Product Details
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab1-2">
              Additional Info
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab1-3">
              Delivery
            </a>
          </li>
        </ul>
        {/* <!-- /.nav-tabs --> */}
        <div className="tab-content !mt-0 md:!mt-5">
          <div className="tab-pane fade show active" id="tab1-1">
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Sed posuere consectetur est at lobortis. Sed posuere
              consectetur est at lobortis. Nulla vitae elit libero, a pharetra
              augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
              venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula
              ut id elit. Maecenas sed diam eget risus varius blandit sit amet
              non magna. Integer posuere erat a ante venenatis dapibus posuere
              velit aliquet. Nullam quis risus eget urna mollis ornare vel eu
              leo. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p>
              Vestibulum id ligula porta felis euismod semper. Nullam id dolor
              id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis
              interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
          </div>
          {/* <!--/.tab-pane --> */}
          <div className="tab-pane fade" id="tab1-2">
            <p>
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
              dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          {/* <!--/.tab-pane --> */}
          <div className="tab-pane fade" id="tab1-3">
            <p>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Integer posuere
              erat a ante venenatis dapibus posuere velit aliquet. Cras mattis
              consectetur purus sit amet fermentum. Maecenas sed diam eget risus
              varius blandit sit amet non magna. Sed posuere consectetur est at
              lobortis. Curabitur blandit tempus porttitor. Aenean lacinia
              bibendum nulla sed consectetur. Nulla vitae elit libero, a
              pharetra augue. Morbi leo risus, porta ac consectetur ac,
              vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </p>
          </div>
          {/* <!--/.tab-pane --> */}
        </div>
        {/* <!-- /.tab-content --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
}
