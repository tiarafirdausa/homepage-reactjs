import React from "react";

export default function Cta() {
  return (
    <section className="wrapper bg-gradient-reverse-primary max-w-screen overflow-clip">
      <div className="container xl:!pt-10 !text-center">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="md:w-10/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <img
              className="m-[0_auto]"
              srcSet="/assets/img/demos/icon@2x.png 2x"
              alt="image"
              src="/assets/img/demos/icon.png"
              width={40}
              height={48}
            />
            <h2 className="!text-[calc(1.335rem_+_1.02vw)] font-bold !leading-[1.2] xl:!text-[2.1rem] !mt-3 !mb-3 xl:!px-8 lg:!px-8">
              Think unique and be creative. Make a difference with Sandbox.
            </h2>
            <p className="lead !text-[1.1rem] !leading-[1.55] !font-medium !mb-6">
              Everything you need to create your next unique and professional
              website, including impressive and ready-made blocks and pages.
            </p>
            <a
              href="https://themeforest.net/item/sandbox-modern-multipurpose-tailwind-css-reactjs-template/57596129"
              target="_blank"
              className="btn btn-lg btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mb-10"
            >
              Buy Sandbox
            </a>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <img
          className="max-w-full h-auto m-[0_auto]"
          srcSet="/assets/img/demos/f1@2x.png 2x"
          data-cue="fadeIn"
          alt="image"
          src="/assets/img/demos/f1.png"
          width={1111}
          height={543}
        />
      </div>
      {/* /.container */}
    </section>
  );
}
