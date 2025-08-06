import React from "react";

export default function StraTagy() {
  return (
    <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] items-center">
      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px] max-w-full">
        <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
          Our Strategy
        </h2>
        <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5">
          3 working steps to organize our business projects.
        </h3>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod eget.
          Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis
          risus.
        </p>
        <p className="!mb-6">
          Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
          ligula porta felis euismod semper. Aenean lacinia bibendum
          consectetur.
        </p>
        <a
          href="#"
          className="btn btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] !rounded-[50rem] !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
        >
          Learn More
        </a>
      </div>
      {/*/column */}
      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px] max-w-full">
        <div className="flex flex-row">
          <div>
            <span className="icon btn btn-block btn-lg btn-soft-purple pointer-events-none !mt-1 !mr-5">
              <span className="number text-[1.1rem]">01</span>
            </span>
          </div>
          <div>
            <h4 className="!mb-1">Collect Ideas</h4>
            <p className="!mb-0">
              Nulla vitae elit libero pharetra augue dapibus. Fusce dapibus,
              tellus ac cursus commodo.
            </p>
          </div>
        </div>
        <div className="flex flex-row !mt-8 xl:!ml-[2.5rem] lg:!ml-[2.5rem]">
          <div>
            <span className="icon btn btn-block btn-lg btn-soft-green pointer-events-none !mt-1 !mr-5">
              <span className="number text-[1.1rem]">02</span>
            </span>
          </div>
          <div>
            <h4 className="!mb-1">Data Analysis</h4>
            <p className="!mb-0">
              Vivamus sagittis lacus vel augue laoreet tortor mauris condimentum
              fermentum.
            </p>
          </div>
        </div>
        <div className="flex flex-row !mt-8">
          <div>
            <span className="icon btn btn-block btn-lg btn-soft-orange pointer-events-none !mt-1 !mr-5">
              <span className="number text-[1.1rem]">03</span>
            </span>
          </div>
          <div>
            <h4 className="!mb-1">Finalize Product</h4>
            <p className="!mb-0">
              Cras mattis consectetur purus sit amet massa justo sit amet risus
              consectetur magna elit.
            </p>
          </div>
        </div>
      </div>
      {/*/column */}
    </div>
  );
}
