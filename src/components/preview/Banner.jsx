import React from "react";

export default function Banner() {
  return (
    <>
      <div className="container pt-24 xl:pt-32 lg:pt-32 md:pt-32 !text-center !relative">
        <div
          className="absolute"
          style={{
            top: "-7%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img
            alt="image"
            src="/assets/img/photos/blurry.png"
            width={1400}
            height={1080}
          />
        </div>
        <div className="flex flex-wrap mx-[-15px] !relative !mb-9 xl:!mb-12 lg:!mb-12 md:!mb-12">
          <div className="lg:w-10/12 xl:w-9/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div>
              <img
                className="m-[0_auto]"
                srcSet="/assets/img/demos/icon-grape@2x.png 2x"
                alt="image"
                src="/assets/img/demos/icon-grape.png"
                width={40}
                height={48}
              />
              <h1 className="font-semibold !leading-[1.15] xl:!text-[3.2rem] !text-[calc(1.445rem_+_2.34vw)] !mt-5 !mb-5">
                Think unique and make a difference with Sandbox.
              </h1>
              <p className="lead !text-[1.2rem] !leading-[1.6] !mb-8 lg:!px-14 xl:!px-[4.5rem] xxl:!px-10">
                We are trusted by thousands of clients. Join them now and easily
                create your stunning website in no time.
              </p>
            </div>
            <div className="flex justify-center">
              <span>
                <a
                  href="https://themeforest.net/item/sandbox-modern-multipurpose-tailwind-css-reactjs-template/57596129"
                  className="btn btn-lg btn-grape !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] btn-icon btn-icon-end !rounded-[0.8rem]"
                  target="_blank"
                >
                  Buy Sandbox
                  <i className="uil uil-arrow-up-right !ml-[.3rem] before:content-['\e950']" />
                </a>
              </span>
            </div>
            {/* /div */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <div className="container !text-center">
        <img
          className="max-w-full h-auto !relative m-[0_auto]"
          style={{ zIndex: 2 }}
          srcSet="/assets/img/demos/f1@2x.png 2x"
          alt="image"
          src="/assets/img/demos/f1.png"
          width={1111}
          height={543}
        />
      </div>
    </>
  );
}
