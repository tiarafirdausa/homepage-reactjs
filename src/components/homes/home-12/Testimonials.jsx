import { useEffect, useRef } from "react";

export default function Testimonials() {
  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        // Trigger Isotope layout
        isotope.layout();
      }
    );
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    setTimeout(() => {
      initIsotop();
    }, 100);
  }, []);
  return (
    <div className="itemgrid !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem] !mt-3">
      <div
        ref={isotopContainer}
        className="flex flex-wrap mx-[-15px] isotope !mt-[-9rem] xl:!mt-[-15rem] lg:!mt-[-15rem] md:!mt-[-15rem]"
      >
        <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full">
          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom !border-[#fddcd6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
            <div className="card-body flex-[1_1_auto] p-[40px]">
              <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
              <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                <p>
                  “Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                  dolor auctor. Vestibulum id ligula porta. Cras mattis
                  consectetur.”
                </p>
                <div className="flex items-center text-left">
                  <div className="info !pl-0">
                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                      Coriss Ambady
                    </h5>
                    <p className="!mb-0 text-[.8rem]">Financial Analyst</p>
                  </div>
                </div>
              </blockquote>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/*/column */}
        <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full">
          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom !border-[#fddcd6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
            <div className="card-body flex-[1_1_auto] p-[40px]">
              <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
              <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                <p>
                  “Fusce dapibus, tellus ac cursus tortor mauris condimentum
                  fermentum massa justo sit amet purus sit amet fermentum.”
                </p>
                <div className="flex items-center text-left">
                  <div className="info !pl-0">
                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                      Cory Zamora
                    </h5>
                    <p className="!mb-0 text-[.8rem]">Marketing Specialist</p>
                  </div>
                </div>
              </blockquote>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/*/column */}
        <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full">
          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom !border-[#fddcd6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
            <div className="card-body flex-[1_1_auto] p-[40px]">
              <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
              <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                <p>
                  “Curabitur blandit tempus porttitor. Vivamus sagittis lacus
                  vel augue laoreet rutrum faucibus dolor eu rutrum. Nulla vitae
                  libero.”
                </p>
                <div className="flex items-center text-left">
                  <div className="info !pl-0">
                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                      Nikolas Brooten
                    </h5>
                    <p className="!mb-0 text-[.8rem]">Sales Manager</p>
                  </div>
                </div>
              </blockquote>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/*/column */}
        <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full">
          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom !border-[#fddcd6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
            <div className="card-body flex-[1_1_auto] p-[40px]">
              <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
              <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                <p>
                  “Etiam adipiscing tincidunt elit convallis felis suscipit ut.
                  Phasellus rhoncus eu tincidunt auctor nullam rutrum, pharetra
                  augue.”
                </p>
                <div className="flex items-center text-left">
                  <div className="info !pl-0">
                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                      Coriss Ambady
                    </h5>
                    <p className="!mb-0 text-[.8rem]">Financial Analyst</p>
                  </div>
                </div>
              </blockquote>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/*/column */}
      </div>
      {/* /.row */}
    </div>
  );
}
