import { jobs } from "@/data/jobs";
import React from "react";

export default function Jobs() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[.75rem] uppercase !text-[#3f78e0] !tracking-[0.02rem] !leading-[1.35] !mb-3">
              Job Positions
            </h2>
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-10 xxl:!px-20">
              We’re always searching for amazing people to join our team. Take a
              look at our current openings.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
          {jobs.map((card, index) => (
            <div
              key={index}
              className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <a
                href="#"
                className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] lift !h-full"
              >
                <div className="card-body p-5 flex flex-row">
                  <div>
                    <span
                      className="flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] rounded-[100%] opacity-100 !text-white !w-[3rem] !h-[3rem] text-[1rem] !mr-4"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      {card.initials}
                    </span>
                  </div>
                  <div>
                    <span
                      className="badge rounded py-1 !mb-2"
                      style={{
                        backgroundColor: card.badgeBg,
                        color: card.badgeText,
                      }}
                    >
                      {card.badgeLabel}
                    </span>
                    <h4 className="!mb-1">{card.title}</h4>
                    <p className="!mb-0 !text-[#60697b]">{card.location}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] !mt-[3rem]">
          <div className="lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h2 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-3">
              Can't find the right position?
            </h2>
            <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-5 xl:!px-3 lg:!px-3 md:!px-24">
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
              leo risus, porta ac consectetur.
            </p>
            <a
              href="#"
              className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
            >
              Get in Touch
            </a>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
