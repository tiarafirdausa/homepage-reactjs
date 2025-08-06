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
    <>
      <div className="flex flex-wrap mx-[-15px]">
        <div className="md:w-11/12 lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center !relative">
          <img
            className="h-9 !absolute hidden xl:block lg:block"
            style={{ top: "2%", left: "9%" }}
            alt="image"
            src="/assets/img/svg/doodle1.svg"
            width={74}
            height={72}
          />
          <img
            className="h-7 absolute hidden xl:block lg:block"
            style={{ top: "-45%", left: "-17%" }}
            alt="image"
            src="/assets/img/svg/doodle10.svg"
            width={47}
            height={47}
          />
          <img
            className="!h-[4rem] absolute hidden xl:block lg:block"
            style={{ top: "-40%", right: "-15%" }}
            alt="image"
            src="/assets/img/svg/doodle11.svg"
            width={110}
            height={114}
          />
          <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
            Happy Customers
          </h2>
          <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:!text-[2rem] !mb-12 xl:!px-10 xxl:!px-16">
            Don't take our word for it. See what
            <span className="text-gradient gradient-7">customers</span> are
            saying about us.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="itemgrid !mb-14">
        <div
          ref={isotopContainer}
          className="flex flex-wrap mx-[-15px] isotope !mt-[-30px]"
        >
          <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <div className="card !shadow-none !rounded-[0.8rem] !bg-[#f0f0f8]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                  <p>
                    “Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Vestibulum id ligula porta felis euismod
                    semper. Cras justo odio dapibus facilisis sociis natoque
                    penatibus.”
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
          <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <div className="card !shadow-none !rounded-[0.8rem] !bg-[#edf9f6]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                  <p>
                    “Fusce dapibus, tellus ac cursus tortor mauris condimentum
                    fermentum massa justo sit amet. Vivamus sagittis lacus vel
                    augue laoreet rutrum faucibus dolor auctor. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia
                    bibendum nulla sed consectetur.”
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
          <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <div className="card !shadow-none !rounded-[0.8rem] !bg-[#fef4f2]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                  <p>
                    “Curabitur blandit tempus porttitor. Vivamus sagittis lacus
                    vel augue laoreet rutrum faucibus dolor auctor. Nullam quis
                    risus eget porta ac consectetur vestibulum. Donec sed odio
                    dui consectetur adipiscing elit.”
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
          <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <div className="card !shadow-none !rounded-[0.8rem] !bg-[#fbf1f4]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                  <p>
                    “Etiam adipiscing tincidunt elit convallis felis suscipit
                    ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis
                    mauris. Donec non dolor ac elit aliquam tincidunt at at
                    sapien. Aenean tortor libero condimentum ac laoreet vitae.”
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
          <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <div className="card !shadow-none !rounded-[0.8rem] !bg-[#edf2fc]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                  <p>
                    “Maecenas sed diam eget risus varius blandit sit amet non
                    magna. Cum sociis natoque penatibus magnis dis montes,
                    nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit
                    libero a pharetra.”
                  </p>
                  <div className="flex items-center text-left">
                    <div className="info !pl-0">
                      <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                        Jackie Sanders
                      </h5>
                      <p className="!mb-0 text-[.8rem]">Investment Planner</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/*/column */}
          <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <div className="card !shadow-none !rounded-[0.8rem] !bg-[#fff8ee]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                  <p>
                    “Donec id elit non mi porta gravida at eget metus. Nulla
                    vitae elit libero, a pharetra augue. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.”
                  </p>
                  <div className="flex items-center text-left">
                    <div className="info !pl-0">
                      <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                        Laura Widerski
                      </h5>
                      <p className="!mb-0 text-[.8rem]">Sales Specialist</p>
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
    </>
  );
}
