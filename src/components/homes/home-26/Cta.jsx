import React from "react";

export default function Cta() {
  return (
    <div className="flex flex-wrap mx-[-7.5px] !mt-[-50px] xl:!mt-0 lg:!mt-0 items-center">
      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full">
        <figure className="m-0 p-0">
          <img
            className="w-auto"
            srcSet="/assets/img/illustrations/3d3@2x.png 2x"
            alt="image"
            src="/assets/img/illustrations/3d3.png"
            width={800}
            height={615}
          />
        </figure>
      </div>
      {/*/column */}
      <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full !ml-auto">
        <h2 className="!text-[0.8rem] uppercase !text-[#605dba] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
          Let’s Talk
        </h2>
        <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !mb-3">
          Let's make something great together. We are trusted by over 5000+
          clients.
        </h3>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus
          ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </p>
        <a
          href="#"
          className="btn btn-grape !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] rounded !mt-2"
        >
          Join Us
        </a>
      </div>
      {/*/column */}
    </div>
  );
}
