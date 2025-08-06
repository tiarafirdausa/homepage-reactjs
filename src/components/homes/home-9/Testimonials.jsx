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
    <section className="wrapper !bg-[#edf2fc]">
      <div className="container py-[4.5rem] xl:!py-28 lg:!py-28 md:!py-28">
        <div className="flex flex-wrap mx-[-15px] xl:!mt-[-22.5rem] lg:!mt-[-22.5rem] md:!mt-[-22.5rem]">
          <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-8/12 lg:!ml-[16.66666667%] xl:w-8/12 xl:!ml-[16.66666667%] w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
              Happy Customers
            </h2>
            <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] !font-DMSerif !font-normal !tracking-normal [word-spacing:normal!important] !mb-10 xl:!px-10 xxl:!px-20">
              Don't take our word for it. See what customers are saying about
              us.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="itemgrid">
          <div
            ref={isotopContainer}
            className="flex flex-wrap mx-[-15px] isotope !mt-[-30px]"
          >
            <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                  <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    <p>
                      “Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                      dolor auctor. Vestibulum id ligula porta felis euismod
                      semper. Cras justo odio dapibus facilisis sociis natoque
                      penatibus.”
                    </p>
                    <div className="flex items-center text-left">
                      <img
                        className="!rounded-[50%] !w-[3.5rem]"
                        srcSet="/assets/img/avatars/te1@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/avatars/te1.jpg"
                        width={100}
                        height={100}
                      />
                      <div className="info !pl-4">
                        <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                          Coriss Ambady
                        </h5>
                        <p className="!mb-0 !text-[.8rem]">Financial Analyst</p>
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
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                  <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    <p>
                      “Fusce dapibus, tellus ac cursus tortor mauris condimentum
                      fermentum massa justo sit amet. Vivamus sagittis lacus vel
                      augue laoreet rutrum faucibus dolor auctor. Cras mattis
                      consectetur purus sit amet fermentum. Aenean lacinia
                      bibendum nulla sed consectetur.”
                    </p>
                    <div className="flex items-center text-left">
                      <img
                        className="!rounded-[50%] !w-[3.5rem]"
                        srcSet="/assets/img/avatars/te2@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/avatars/te2.jpg"
                        width={100}
                        height={100}
                      />
                      <div className="info !pl-4">
                        <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                          Cory Zamora
                        </h5>
                        <p className="!mb-0 !text-[.8rem]">
                          Marketing Specialist
                        </p>
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
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                  <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    <p>
                      “Curabitur blandit tempus porttitor. Vivamus sagittis
                      lacus vel augue laoreet rutrum faucibus dolor auctor.
                      Nullam quis risus eget porta ac consectetur vestibulum.
                      Donec sed odio dui consectetur adipiscing elit.”
                    </p>
                    <div className="flex items-center text-left">
                      <img
                        className="!rounded-[50%] !w-[3.5rem]"
                        srcSet="/assets/img/avatars/te3@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/avatars/te3.jpg"
                        width={100}
                        height={100}
                      />
                      <div className="info !pl-4">
                        <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                          Nikolas Brooten
                        </h5>
                        <p className="!mb-0 !text-[.8rem]">Sales Manager</p>
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
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                  <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    <p>
                      “Etiam adipiscing tincidunt elit convallis felis suscipit
                      ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis
                      mauris. Donec non dolor ac elit aliquam tincidunt at at
                      sapien. Aenean tortor libero condimentum ac laoreet
                      vitae.”
                    </p>
                    <div className="flex items-center text-left">
                      <img
                        className="!rounded-[50%] !w-[3.5rem]"
                        srcSet="/assets/img/avatars/te4@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/avatars/te4.jpg"
                        width={100}
                        height={100}
                      />
                      <div className="info !pl-4">
                        <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                          Coriss Ambady
                        </h5>
                        <p className="!mb-0 !text-[.8rem]">Financial Analyst</p>
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
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                  <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    <p>
                      “Maecenas sed diam eget risus varius blandit sit amet non
                      magna. Cum sociis natoque penatibus magnis dis montes,
                      nascetur ridiculus mus. Donec sed odio dui. Nulla vitae
                      elit libero a pharetra.”
                    </p>
                    <div className="flex items-center text-left">
                      <img
                        className="!rounded-[50%] !w-[3.5rem]"
                        srcSet="/assets/img/avatars/te5@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/avatars/te5.jpg"
                        width={100}
                        height={100}
                      />
                      <div className="info !pl-4">
                        <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                          Jackie Sanders
                        </h5>
                        <p className="!mb-0 !text-[.8rem]">
                          Investment Planner
                        </p>
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
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                  <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    <p>
                      “Donec id elit non mi porta gravida at eget metus. Nulla
                      vitae elit libero, a pharetra augue. Cum sociis natoque
                      penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus.”
                    </p>
                    <div className="flex items-center text-left">
                      <img
                        className="!rounded-[50%] !w-[3.5rem]"
                        srcSet="/assets/img/avatars/te6@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/avatars/te6.jpg"
                        width={100}
                        height={100}
                      />
                      <div className="info !pl-4">
                        <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                          Laura Widerski
                        </h5>
                        <p className="!mb-0 !text-[.8rem]">Sales Specialist</p>
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
        {/* /.grid-view */}
      </div>
      {/* /.container */}
    </section>
  );
}
