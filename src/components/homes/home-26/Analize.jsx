import React from "react";

export default function Analize() {
  return (
    <section className="wrapper !bg-[#f0f0f8]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] !mb-8">
          <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h2 className="!text-[0.8rem] uppercase !text-[#605dba] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
              Analyze Now
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !mb-0">
              Wonder how much faster your website can go? Easily check your SEO
              Score now.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-floating input-group relative">
                <input
                  type="url"
                  className="form-control border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                  placeholder=""
                  id="analyze"
                />
                <label
                  className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                  htmlFor="analyze"
                >
                  Enter Website URL
                </label>
                <button
                  className="btn btn-grape !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] hover:!translate-none"
                  type="button"
                >
                  Analyze
                </button>
              </div>
            </form>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <figure className="m-0 p-0">
        <img
          className="w-full max-w-full !h-auto"
          alt="image"
          src="/assets/img/photos/clouds.png"
          width={3170}
          height={250}
        />
      </figure>
    </section>
  );
}
