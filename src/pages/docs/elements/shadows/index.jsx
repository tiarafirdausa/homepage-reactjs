import Header32 from "@/components/headers/Header32";
import PageTitle from "@/components/blocks/PageTitle";

import Shadows from "@/components/docs/Shadows";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Shadows || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageShadows() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav transparent navbar-light"
        />
        <PageTitle pagename="Shadows" />
        <Shadows />
        <section className="wrapper  bg-[#21262c] opacity-100  !text-white max-w-screen overflow-clip">
          <div className="container pt-[4.5rem] xl:pt-24 lg:pt-24 md:pt-24 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <h2 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:!text-[2rem] !text-white !mt-3 !mb-3 xl:!px-8 lg:!px-8">
                  Think unique and be creative. Make a difference with Sandbox.
                </h2>
                <p className="lead text-[1.05rem] !leading-[1.6] !mb-6">
                  Everything you need to create your next unique and
                  professional website, including impressive and ready-made
                  blocks and pages.
                </p>
                <a
                  href="https://themeforest.net/item/sandbox-modern-multipurpose-tailwind-css-reactjs-template/57596129"
                  target="_blank"
                  className="btn btn-lg btn-white !rounded-[50rem] !mb-10 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  Buy Sandbox
                </a>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
            <img
              className="max-w-full h-auto m-[0_auto]"
              srcSet="/assets/img/demos/f1@2x.png 2x"
              alt="image"
              src="/assets/img/demos/f1.png"
              width="1111"
              height="543"
            />
          </div>
          {/* /.container */}
        </section>{" "}
      </div>
    </>
  );
}
