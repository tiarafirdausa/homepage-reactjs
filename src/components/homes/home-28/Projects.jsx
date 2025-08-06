import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { projects10 } from "@/data/projects";
export default function Projects() {
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
    <div className="itemgrid grid-view projects-masonry md:!mt-[-10rem] lg:!mt-[-15rem] xl:!mt-[-15rem] !mb-[10rem]">
      <div
        ref={isotopContainer}
        className="flex flex-wrap mx-[-20px] xl:mx-[-25px] lg:mx-[-25px] !mt-[-2rem] xl:!mt-[-2.5rem] lg:!mt-[-2.5rem] isotope"
      >
        {projects10.map((project) => (
          <div
            key={project.id}
            className="project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] max-w-full workshop px-[20px] xl:!px-[25px] lg:!px-[25px] !mt-[2rem] xl:!mt-[2.5rem] lg:!mt-[2.5rem]"
          >
            <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
              <figure
                className={`card-img-top itooltip ${project.colorClass}`}
                title={`<h5 class="!mb-0 ${project.colorClass}">Click to see the project</h5>`}
              >
                <Link to={`/single-project`}>
                  <img
                    alt="image"
                    src={project.imageSrc}
                    width={1300}
                    height={1132}
                  />
                </Link>
              </figure>
              <div className="card-body p-7">
                <div className="post-header">
                  <div
                    className="inline-flex uppercase !tracking-[0.02rem] text-[0.7rem] font-semibold text-line relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[${project.colorCode}] !mb-2"
                    style={{ color: project.colorCode }}
                  >
                    {project.type}
                  </div>
                  <h3 className="!mb-0">{project.title}</h3>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        ))}
      </div>
      {/* /.row */}
    </div>
  );
}
