import Header1 from "@/components/headers/Header1";
import Banner from "@/components/preview/Banner";
import Demos from "@/components/preview/Demos";
import Demoslider from "@/components/preview/Demoslider";
import Features from "@/components/preview/Features";
import FeaturesSlider from "@/components/preview/FeaturesSlider";
import Hero from "@/components/preview/Hero";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Preview || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function PreviewPage() {
  return (
    <>
      <MetaComponent meta={metadata} />{" "}
      <div className="font-space">
        <div className="!bg-[#f0f0f8]">
          <div className="grow shrink-0">
            <Header1 />
            {/* /header */}
            <section className="wrapper overflow-hidden">
              <Hero />
              {/* /.container */}
              <Demoslider />
              {/* /.swiper-container */}
            </section>
            {/* /section */}
            <section
              className="wrapper !bg-[#f0f0f8] overflow-hidden"
              id="demos"
            >
              <Demos />
              {/* /.container */}
              <FeaturesSlider />
              {/* /.container */}
              <Features />
              {/*/.container */}
            </section>
            {/* /section */}
            <section className="wrapper overflow-hidden">
              <Banner />
            </section>
            {/* /section */}
          </div>
        </div>
      </div>
    </>
  );
}
