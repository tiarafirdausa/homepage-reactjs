import { useEffect, useRef } from "react";

export default function About() {
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
    <div className="container">
      <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] !mb-[5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem] items-center">
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-0 lg:px-0 !px-[15px] max-w-full !mt-[50px]">
          <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !text-center">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                  <figure className="!rounded-[.4rem] !mb-6">
                    <img
                      className="!rounded-[.4rem]"
                      srcSet="/assets/img/photos/se1@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/se1.jpg"
                      width={340}
                      height={325}
                    />
                  </figure>
                </div>
                {/* /column */}
                <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <div className="icon btn btn-circle btn-lg btn-soft-purple pointer-events-none !mb-3 xl:!text-[1.3rem] w-12 h-12 lg:!text-[calc(1.255rem_+_0.06vw)] md:!text-[calc(1.255rem_+_0.06vw)] max-md:!text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                        <i className="uil uil-monitor before:content-['\ec19']" />
                      </div>
                      <h4 className="!text-[1rem] !leading-[1.45]">
                        Web Design
                      </h4>
                      <p className="!mb-2">
                        Nulla vitae elit libero, a pharetra augue. Donec id elit
                        non mi porta gravida.
                      </p>
                      <a
                        href="#"
                        className="more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]"
                      >
                        Learn More
                      </a>
                    </div>
                    {/*/.card-body */}
                  </div>
                  {/*/.card */}
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/* /column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                  <figure className="!rounded-[.4rem] !mb-6 xl:!mb-0 lg:!mb-0 md:!mb-0">
                    <img
                      className="!rounded-[.4rem]"
                      srcSet="/assets/img/photos/se2@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/se2.jpg"
                      width={340}
                      height={325}
                    />
                  </figure>
                </div>
                {/* /column */}
                <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] xl:!mb-6 lg:!mb-6 md:!mb-6 lg:!mt-6 xl:!mt-6">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <div className="icon btn btn-circle btn-lg btn-soft-purple pointer-events-none !mb-3 xl:!text-[1.3rem] w-12 h-12 lg:!text-[calc(1.255rem_+_0.06vw)] md:!text-[calc(1.255rem_+_0.06vw)] max-md:!text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                        <i className="uil uil-mobile-android before:content-['\ec0a']" />
                      </div>
                      <h4 className="!text-[1rem] !leading-[1.45]">
                        Mobile Design
                      </h4>
                      <p className="!mb-2">
                        Nulla vitae elit libero, a pharetra augue. Donec id elit
                        non mi porta gravida.
                      </p>
                      <a
                        href="#"
                        className="more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]"
                      >
                        Learn More
                      </a>
                    </div>
                    {/*/.card-body */}
                  </div>
                  {/*/.card */}
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /column */}
        <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-0 lg:px-0 !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] !mt-[50px]">
          <h2 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !mb-3">
            What We Do?
          </h2>
          <p className="lead !text-[1.1rem] !leading-[1.5] font-medium">
            The full service we are offering is specifically designed to meet
            your business needs.
          </p>
          <p>
            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget
            urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis
            ornare vel eu leo. Maecenas faucibus mollis elit interdum. Duis
            mollis, est non commodo luctus, nisi erat ligula.
          </p>
          <a
            href="#"
            className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !text-[.85rem] !rounded-[50rem] !mt-3"
          >
            More Details
          </a>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center !mb-[5rem] xl:!mb-[8rem] lg:!mb-[8rem]">
        <div className="xl:w-6/12 lg:w-6/12 flex-[0_0_auto] lg:px-0 xl:px-0 !px-[15px] max-w-full xl:!order-2 xl:!ml-[8.33333333%] lg:!order-2 lg:!ml-[8.33333333%] grid !mt-[50px]">
          <div
            ref={isotopContainer}
            className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] items-center counter-wrapper isotope"
          >
            <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[1.5rem]">
                  <div className="flex lg:block xl:!flex flex-row">
                    <div>
                      <div className="icon btn btn-circle btn-lg btn-soft-purple pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                        <i className="uil uil-presentation-check before:content-['\ec66']" />
                      </div>
                    </div>
                    <div>
                      <h3 className="counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none">
                        7518
                      </h3>
                      <p className="!mb-0">Projects Done</p>
                    </div>
                  </div>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[1.5rem]">
                  <div className="flex lg:block xl:!flex flex-row">
                    <div>
                      <div className="icon btn btn-circle btn-lg btn-soft-red pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                        <i className="uil uil-users-alt before:content-['\ed70']" />
                      </div>
                    </div>
                    <div>
                      <h3 className="counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none">
                        3472
                      </h3>
                      <p className="!mb-0">Happy Customers</p>
                    </div>
                  </div>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[1.5rem]">
                  <div className="flex lg:block xl:!flex flex-row">
                    <div>
                      <div className="icon btn btn-circle btn-lg btn-soft-yellow pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                        <i className="uil uil-user-check before:content-['\ed65']" />
                      </div>
                    </div>
                    <div>
                      <h3 className="counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none">
                        4537
                      </h3>
                      <p className="!mb-0">Expert Employees</p>
                    </div>
                  </div>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[1.5rem]">
                  <div className="flex lg:block xl:!flex flex-row">
                    <div>
                      <div className="icon btn btn-circle btn-lg btn-soft-aqua pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                        <i className="uil uil-trophy before:content-['\ed4f']" />
                      </div>
                    </div>
                    <div>
                      <h3 className="counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none">
                        2184
                      </h3>
                      <p className="!mb-0">Awards Won</p>
                    </div>
                  </div>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
        <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] lg:px-0 xl:px-0 !px-[15px] max-w-full !mt-[50px]">
          <h2 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !mb-3">
            Join Our Community
          </h2>
          <p className="lead !text-[1.1rem] !leading-[1.5] font-medium">
            We have considered our business solutions to support you on every
            stage of your growth.
          </p>
          <p className="!mb-0">
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
  );
}
