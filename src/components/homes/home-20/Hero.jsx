import { useEffect, useState } from "react";

export default function Hero() {
  const strings = [
    "Rapid Solutions",
    "Innovative Thinking",
    "Top-Notch Support",
  ];
  const [currentStr, setCurrentStr] = useState(strings[0]);
  const [animatedText, setAnimatedText] = useState(true);

  useEffect(() => {
    const changeText = setInterval(() => {
      setAnimatedText(false);
      setTimeout(() => {
        setAnimatedText(true);
      }, 200);

      setCurrentStr((prev) => {
        const nextIndex = (strings.indexOf(prev) + 1) % strings.length;
        return strings[nextIndex];
      });
    }, 2000);

    return () => clearInterval(changeText);
  }, []);
  return (
    <section className="video-wrapper relative overflow-hidden bg-overlay bg-overlay-gradient !px-0 !mt-0 min-h-[80vh] xl:rounded-[1rem] lg:rounded-[1rem] md:rounded-[1rem]">
      <video
        poster="/assets/img/photos/movie2.jpg"
        src="/assets/media/movie2.mp4"
        autoPlay
        loop
        playsInline
        muted
      />
      <div className="video-content absolute z-[2] w-full h-full flex items-center justify-center text-center flex-col left-0 top-0">
        <div className="container !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="lg:w-8/12 xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center !text-white !mx-auto">
              <h1 className="xl:!text-[2.7rem] !text-[calc(1.395rem_+_1.74vw)] font-semibold !leading-[1.15] !text-white !mb-5">
                <span className="rotator-zoom">
                  {animatedText ? (
                    <span
                      className={`animate__animated animate__zoomIn`}
                      style={{
                        display: "inline-block",
                      }}
                    >
                      {currentStr}
                    </span>
                  ) : (
                    <span
                      className={`animate__animated animate__zoomIn`}
                      style={{
                        display: "inline-block",
                        visibility: "hidden",
                      }}
                    >
                      {currentStr}
                    </span>
                  )}
                </span>
              </h1>
              <p className="lead !text-[1.2rem] !leading-[1.6] font-medium !mb-0 xxl:!mx-8">
                We are a digital agency specializing in web design, mobile
                development and seo optimization.
              </p>
            </div>
            {/* /column */}
          </div>
        </div>
        {/* /.video-content */}
      </div>
      {/* /.content-overlay */}
    </section>
  );
}
