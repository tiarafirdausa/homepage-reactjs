import React from "react";

export default function Services() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
        <div className="flex flex-wrap mx-[-15px] !text-center !mb-10">
          <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
              What We Do?
            </h2>
            <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold xl:!px-10 !mb-0">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 !mt-[50px] max-w-full">
            <figure className="!rounded-[.4rem] !mb-0">
              <img
                className="max-w-full h-auto"
                srcSet="/assets/img/illustrations/ui4@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/ui4.png"
                width={800}
                height={477}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 !mt-[50px] max-w-full !ml-auto">
            <h3 className="xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mb-3">
              Web Design
            </h3>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna risus varius.
            </p>
            <ul className="pl-0 list-none bullet-bg bullet-soft-purple">
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Aenean quam ornare curabitur blandit.
              </li>
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Nullam quis risus eget urna mollis ornare leo.
              </li>
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Etiam porta euismod mollis natoque ornare.
              </li>
            </ul>
            <a
              href="#"
              className="btn btn-soft-purple !rounded-[50rem] !mt-2 !mb-0"
            >
              More Details
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
          <div className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 !mt-[50px] max-w-full lg:!order-2 xl:!order-2 !ml-auto">
            <figure className="!rounded-[.4rem] !mb-0">
              <img
                className="max-w-full h-auto"
                srcSet="/assets/img/illustrations/ui1@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/ui1.png"
                width={800}
                height={608}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 !mt-[50px] max-w-full">
            <h3 className="xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mb-3">
              Mobile Development
            </h3>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna risus varius.
            </p>
            <ul className="pl-0 list-none bullet-bg bullet-soft-purple">
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Aenean quam ornare curabitur blandit.
              </li>
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Nullam quis risus eget urna mollis ornare leo.
              </li>
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Etiam porta euismod mollis natoque ornare.
              </li>
            </ul>
            <a
              href="#"
              className="btn btn-soft-purple !rounded-[50rem] !mt-2 !mb-0"
            >
              More Details
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 !mt-[50px] max-w-full">
            <figure className="!rounded-[.4rem] !mb-0">
              <img
                className="max-w-full h-auto"
                srcSet="/assets/img/illustrations/ui5@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/ui5.png"
                width={800}
                height={516}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 !mt-[50px] max-w-full !ml-auto">
            <h3 className="xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mb-3">
              SEO Optimization
            </h3>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna risus varius.
            </p>
            <ul className="pl-0 list-none bullet-bg bullet-soft-purple">
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Aenean quam ornare curabitur blandit.
              </li>
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Nullam quis risus eget urna mollis ornare leo.
              </li>
              <li className="relative !pl-6 !mt-[0.35rem]">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Etiam porta euismod mollis natoque ornare.
              </li>
            </ul>
            <a
              href="#"
              className="btn btn-soft-purple !rounded-[50rem] !mt-2 !mb-0"
            >
              More Details
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
