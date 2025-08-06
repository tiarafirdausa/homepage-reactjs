const features = [
  {
    src: "/assets/img/demos/react.png",
    srcSet: "/assets/img/demos/react.png",
    width: 48,
    height: 50,
    text: `Built with React.js<br/>
    & Vite`,
  },
  {
    src: "/assets/img/demos/fi1.png",
    srcSet: "/assets/img/demos/fi1@2x.png 2x",
    width: 50,
    height: 50,
    text: "Built with <br /> Tailwind CSS",
  },
  {
    src: "/assets/img/demos/fi2.png",
    srcSet: "/assets/img/demos/fi2@2x.png 2x",
    width: 50,
    height: 50,
    text: "SEO-friendly <br /> Coding",
  },
  {
    src: "/assets/img/demos/fi3.png",
    srcSet: "/assets/img/demos/fi3@2x.png 2x",
    width: 50,
    height: 50,
    text: "Followed <br /> W3 Standard",
  },
  {
    src: "/assets/img/demos/fi4.png",
    srcSet: "/assets/img/demos/fi4@2x.png 2x",
    width: 57,
    height: 50,
    text: "Retina-ready <br /> Graphics",
  },
  {
    src: "/assets/img/demos/fi5.png",
    srcSet: "/assets/img/demos/fi5@2x.png 2x",
    width: 50,
    height: 50,
    text: "One-page <br /> Layout Option",
  },
  {
    src: "/assets/img/demos/fi6.png",
    srcSet: "/assets/img/demos/fi6@2x.png 2x",
    width: 50,
    height: 50,
    text: "Isotope <br /> Filterable Gallery",
  },

  {
    src: "/assets/img/demos/fi11.png",
    srcSet: "/assets/img/demos/fi11@2x.png 2x",
    width: 45,
    height: 50,
    text: `Client side<br/>
Rendered`,
  },
  {
    src: "/assets/img/demos/fi9.png",
    srcSet: "/assets/img/demos/fi9@2x.png 2x",
    width: 50,
    height: 50,
    text: "Animations <br /> on Page Scroll",
  },
  {
    src: "/assets/img/demos/fi10.png",
    srcSet: "/assets/img/demos/fi10@2x.png 2x",
    width: 54,
    height: 50,
    text: "Top-Notch Support <br /> &amp; Free Updates",
  },
];

export default function Technologies() {
  return (
    <>
      {features.map((feature, index) => (
        <div
          key={index}
          className="col xl:w-1/5 lg:w-1/5 md:w-3/12 w-6/12 flex-[0_0_auto] max-w-full !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px]"
        >
          <img
            className="!mb-4 m-[0_auto] rounded-4xl"
            srcSet={feature.srcSet}
            alt="image"
            src={feature.src}
            width={feature.width}
            height={feature.height}
          />
          <h4 dangerouslySetInnerHTML={{ __html: feature.text }} />
        </div>
      ))}
    </>
  );
}
