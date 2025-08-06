import React from "react";

export default function Contact1() {
  return (
    <section id="snippet-1" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] !mt-[-50px] xl:mx-[-35px] lg:mx-[-20px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full xl:!order-2 lg:!order-2 !relative !mt-[50px]">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                srcSet="/assets/img/illustrations/i14@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i14.png"
                width="800"
                height="584"
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
              Let’s Talk
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
              Let's make something great together. We are
              <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)] purple">
                trusted by
              </span>
              over 5000+ clients. Join them by using our services and grow your
              business.
            </p>
            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            </p>
            <a
              href="#"
              className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mt-2"
            >
              Join Us
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
