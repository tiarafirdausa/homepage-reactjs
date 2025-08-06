import React from "react";

import Technologies from "@/components/common/Technologies";
export default function Tools() {
  return (
    <section className="wrapper bg-gradient-purple">
      <div className="container pb-28 xl:pb-40 lg:pb-40 md:pb-40">
        <div className="flex flex-wrap mx-0 !mb-[4.5rem] xl:!mb-[6rem] lg:!mb-[6rem] md:!mb-[6rem]">
          <div
            className="w-9/12 sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-9/12 flex-[0_0_auto] max-w-full !mx-auto !mt-[-5rem] xl:!mt-[-17.5rem] lg:!mt-[-17.5rem] md:!mt-[-17.5rem]"
            data-cues=""
            data-group="images"
          >
            <img
              className="max-w-full h-auto !mx-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
              data-cue="fadeIn"
              srcSet="/assets/img/demos/de1@2x.jpg 2x"
              alt="image"
              src="/assets/img/demos/de1.jpg"
              width={1000}
              height={822}
            />
            <img
              className="absolute !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
              data-cue="slideInRight"
              srcSet="/assets/img/demos/de2@2x.jpg 2x"
              style={{
                top: "25%",
                right: "-12%",
                maxWidth: "30%",
                height: "auto",
              }}
              width={450}
              height={700}
              alt="image"
              src="/assets/img/demos/de2.jpg"
            />
            <img
              className="absolute !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
              data-cue="slideInLeft"
              srcSet="/assets/img/demos/de3@2x.jpg 2x"
              style={{
                top: "15%",
                left: "-15%",
                maxWidth: "30%",
                height: "auto",
              }}
              alt="image"
              width={268}
              height={90}
              src="/assets/img/demos/de3.jpg"
            />
            <img
              className="absolute !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
              data-cue="slideInLeft"
              srcSet="/assets/img/demos/de4@2x.jpg 2x"
              style={{
                bottom: "15%",
                left: "-13%",
                maxWidth: "30%",
                height: "auto",
              }}
              width={260}
              height={279}
              alt="image"
              src="/assets/img/demos/de4.jpg"
            />
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div
          className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] !text-center justify-center"
          data-cues="slideInDown"
          data-group="features-3"
        >
          <Technologies />
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
