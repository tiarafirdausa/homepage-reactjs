import ProgressBarComponent from "@/components/common/ProgressBar";
import { skills2 } from "@/data/progress";

import React from "react";

export default function About5() {
  return (
    <section id="snippet-6" className="wrapper !bg-[#ffffff]  ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-24 lg:!mb-24 md:!mb-24 items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                srcSet="/assets/img/illustrations/i8@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i8.png"
                width={800}
                height={559}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-6 xxl:!pr-6">
              We bring rapid solutions to make the life of our customers easier.
            </h3>
            <ul className="progress-list !mt-3 m-0 p-0">
              {skills2.map((skill, index) => (
                <li key={index} className="!mb-4">
                  <p className="!mb-1">{skill.name}</p>
                  <div className={`progressbar line relative ${skill.color}`}>
                    <ProgressBarComponent max={skill.value} />
                  </div>
                </li>
              ))}
            </ul>
            {/* /.progress-list */}
          </div>
          {/*/column */}
        </div>
      </div>
    </section>
  );
}
