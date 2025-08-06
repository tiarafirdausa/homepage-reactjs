import React from "react";

export default function Features() {
  return (
    <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-[4.5rem] xl:!mb-36 lg:!mb-36 md:!mb-36">
      <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[30px] max-w-full">
        <div className="flex flex-row">
          <div>
            <div className="icon btn btn-circle pointer-events-none btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
              <i className="uil uil-phone-volume before:content-['\ec50'] text-[1rem] leading-none" />
            </div>
          </div>
          <div>
            <h4>24/7 Support</h4>
            <p className="!mb-2">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget. Fusce dapibus tellus.
            </p>
            <a href="#" className="more hover">
              Learn More
            </a>
          </div>
        </div>
      </div>
      {/*/column */}
      <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[30px] max-w-full">
        <div className="flex flex-row">
          <div>
            <div className="icon btn btn-circle pointer-events-none btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
              <i className="uil uil-laptop-cloud before:content-['\ebb2'] text-[1rem] leading-none" />
            </div>
          </div>
          <div>
            <h4>Daily Updates</h4>
            <p className="!mb-2">
              Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel
              augue laoreet. Sed posuere consectetur.
            </p>
            <a href="#" className="more hover">
              Learn More
            </a>
          </div>
        </div>
      </div>
      {/*/column */}
      <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[30px] max-w-full">
        <div className="flex flex-row">
          <div>
            <div className="icon btn btn-circle pointer-events-none btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
              <i className="uil uil-chart-line before:content-['\e9d3'] text-[1rem] leading-none" />
            </div>
          </div>
          <div>
            <h4>Market Research</h4>
            <p className="!mb-2">
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Praesent commodo cursus magna scelerisque.
            </p>
            <a href="#" className="more hover">
              Learn More
            </a>
          </div>
        </div>
      </div>
      {/*/column */}
    </div>
  );
}
