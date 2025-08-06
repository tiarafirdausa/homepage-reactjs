import React from "react";

export default function Contact8() {
  return (
    <section id="snippet-8" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
          <div className="flex flex-wrap mx-0">
            <div
              className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full image-wrapper bg-image rounded-t-[0.4rem] rounded-lg-start hidden xl:block lg:block md:block bg-cover bg-[center_center] bg-no-repeat !bg-scroll md:min-h-[25rem]"
              style={{ backgroundImage: "url(/assets/img/photos/tm1.jpg)" }}
            />
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
              <div className="p-10 md:!p-12 xl:!p-[4rem] lg:!p-[4rem]">
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                  Let’s Talk
                </h2>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                  Let's make something great together. We are trusted by over
                  5000+ clients. Join them by using our services and grow your
                  business.
                </p>
                <p>
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus.
                </p>
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  Join Us
                </a>
              </div>
              {/*/div */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /.card */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
