import { jobs2, jobs3 } from "@/data/jobs";
import React from "react";

export default function Jobs2() {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] !text-center">
        <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
          <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
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
      <div className="flex flex-wrap mx-[-15px]">
        <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="filter-form !mb-10"
          >
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-3">
                <div className="form-select-wrapper">
                  <select className="form-select" aria-label="">
                    <option>Position</option>
                    <option value="position1">Business</option>
                    <option value="position2">Design</option>
                    <option value="position3">Development</option>
                    <option value="position4">Engineering</option>
                    <option value="position5">Finance</option>
                    <option value="position6">Marketing</option>
                  </select>
                </div>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-3">
                <div className="form-select-wrapper">
                  <select className="form-select" aria-label="">
                    <option>Type</option>
                    <option value="type1">Full-time</option>
                    <option value="type3">Part-time</option>
                    <option value="type4">Remote</option>
                  </select>
                </div>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-3">
                <div className="form-select-wrapper">
                  <select className="form-select" aria-label="">
                    <option>Location</option>
                    <option value="location1">Chicago, US</option>
                    <option value="location3">Michigan, US</option>
                    <option value="location2">New York, US</option>
                    <option value="location4">Los Angles, US</option>
                    <option value="location5">Moscow, Russia</option>
                    <option value="location6">Sydney, Australia</option>
                    <option value="location7">Birmingham, UK</option>
                    <option value="location8">Manchester, UK</option>
                    <option value="location9">Beijing, China</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <div className="job-list !mb-10">
            <h3 className="!mb-4">Design</h3>
            {jobs2.map((card, index) => (
              <a key={index} href="#" className="card !mb-4 lift">
                <div className="card-body p-5">
                  <span className="flex flex-wrap mx-[-15px] justify-between items-center">
                    <span className="xl:w-5/12 lg:w-5/12 md:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0 flex items-center !text-[#60697b]">
                      <span
                        className="flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] rounded-[100%] opacity-100 !text-white !w-9 !h-9 text-[0.85rem] !mr-3"
                        style={{ backgroundColor: card.bgColor }}
                      >
                        {card.initials}
                      </span>
                      {card.title}
                    </span>
                    <span className="w-5/12 xl:w-3/12 lg:w-3/12 md:w-3/12 flex-[0_0_auto] !px-[15px] max-w-full !text-[#60697b] flex items-center">
                      <i className="uil uil-clock !mr-[.25rem] before:content-['\e9ee']" />
                      {card.type}
                    </span>
                    <span className="w-7/12 md:w-4/12 lg:w-3/12 xl:w-3/12 flex-[0_0_auto] !px-[15px] max-w-full !text-[#60697b] flex items-center">
                      <i className="uil uil-location-arrow !mr-[.25rem] before:content-['\ebd9']" />
                      {card.location}
                    </span>
                    <span className="hidden xl:block lg:block w-1/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !text-[#60697b]">
                      <i className="uil uil-angle-right-b before:content-['\e930']" />
                    </span>
                  </span>
                </div>
                {/* /.card-body */}
              </a>
            ))}
            {/* /.card */}
          </div>
          <div className="job-list">
            <h3 className="!mb-4">Development</h3>
            {jobs3.map((card, index) => (
              <a key={index} href="#" className="card !mb-4 lift">
                <div className="card-body p-5">
                  <span className="flex flex-wrap mx-[-15px] justify-between items-center">
                    <span className="xl:w-5/12 lg:w-5/12 md:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0 flex items-center !text-[#60697b]">
                      <span
                        className="flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] rounded-[100%] opacity-100 !text-white !w-9 !h-9 text-[0.85rem] !mr-3"
                        style={{ backgroundColor: card.bgColor }}
                      >
                        {card.initials}
                      </span>
                      {card.title}
                    </span>
                    <span className="w-5/12 xl:w-3/12 lg:w-3/12 md:w-3/12 flex-[0_0_auto] !px-[15px] max-w-full !text-[#60697b] flex items-center">
                      <i className="uil uil-clock !mr-[.25rem] before:content-['\e9ee']" />
                      {card.type}
                    </span>
                    <span className="w-7/12 md:w-4/12 lg:w-3/12 xl:w-3/12 flex-[0_0_auto] !px-[15px] max-w-full !text-[#60697b] flex items-center">
                      <i className="uil uil-location-arrow !mr-[.25rem] before:content-['\ebd9']" />
                      {card.location}
                    </span>
                    <span className="hidden xl:block lg:block w-1/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !text-[#60697b]">
                      <i className="uil uil-angle-right-b before:content-['\e930']" />
                    </span>
                  </span>
                </div>
                {/* /.card-body */}
              </a>
            ))}
            {/* /.card */}
          </div>
        </div>
        {/* /column */}
      </div>
    </>
  );
}
