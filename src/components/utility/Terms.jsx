import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-link.scroll");

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
          const activeLink = document.querySelector(
            `.nav-link.scroll[href*="${id}"]`
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    const handleLinkClick = (e) => {
      e.preventDefault();
      e.currentTarget.blur();
      const href = e.currentTarget.getAttribute("href");
      const offsetTop = document.querySelector(href)?.offsetTop || 0;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    };

    const scrollLinks = document.querySelectorAll(".scroll");
    scrollLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Cleanup to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollLinks?.forEach((link) => {
        link?.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="container">
      <div className="flex flex-wrap mx-0">
        <aside className="xl:w-3/12 w-full flex-[0_0_auto] max-w-full sidebar !sticky h-full top-0 md:!mt-0 py-24 hidden xl:block">
          <div className="widget">
            <nav id="sidebar-nav">
              <ul className="pl-0 list-none text-inherit">
                <li>
                  <a
                    className="nav-link scroll active"
                    href="#terms-conditions"
                  >
                    1. Terms &amp; Conditions
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a className="nav-link scroll" href="#privacy-policy">
                    2. Privacy Policy
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a className="nav-link scroll" href="#user-policy">
                    3. User Policy
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a className="nav-link scroll" href="#copyrights">
                    4. Copyrights
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a className="nav-link scroll" href="#cookies">
                    5. Cookies
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a className="nav-link scroll" href="#account-billing">
                    6. Account &amp; Billing
                  </a>
                </li>
              </ul>
            </nav>
            {/* /nav */}
          </div>
          {/* /.widget */}
        </aside>
        {/* /column */}
        <div className="xl:w-8/12 w-full flex-[0_0_auto] max-w-full">
          <section id="terms-conditions" className="wrapper pt-24">
            <div className="card">
              <div className="card-body !p-10">
                <h2 className="!mb-3 !leading-[1.35]">
                  1. Terms and Conditions
                </h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
                  libero, a pharetra augue. Nullam quis risus eget urna mollis
                  ornare vel eu leo. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam.
                </p>
                <p>
                  Sed posuere consectetur est at lobortis. Maecenas faucibus
                  mollis interdum. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Donec id elit non
                  mi porta gravida at eget metus. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <p>
                  Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                  sed diam eget risus varius blandit sit amet non magna.
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Nullam id dolor id nibh ultricies vehicula ut
                  id elit. Donec ullamcorper nulla non metus auctor fringilla.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porta sem malesuada magna mollis euismod. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Nulla vitae
                  elit libero, a pharetra augue. Curabitur blandit tempus
                  porttitor. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet
                  risus. Aenean eu leo quam. Pellentesque ornare sem.
                </p>
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                  <li className="relative !mt-[0.35rem] flex items-center">
                    <span className="pr-[.75rem]">
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    </span>
                    <span>
                      Aenean eu leo quam ornare curabitur blandit tempus.
                    </span>
                  </li>
                  <li className="relative !mt-[0.35rem] flex items-center">
                    <span className="pr-[.75rem]">
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    </span>
                    <span>
                      Nullam quis risus eget urna mollis ornare donec elit.
                    </span>
                  </li>
                  <li className="relative !mt-[0.35rem] flex items-center">
                    <span className="pr-[.75rem]">
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    </span>
                    <span>Etiam porta sem malesuada magna mollis euismod.</span>
                  </li>
                  <li className="relative !mt-[0.35rem] flex items-center">
                    <span className="pr-[.75rem]">
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    </span>
                    <span>Fermentum massa vivamus faucibus amet euismod.</span>
                  </li>
                </ul>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="privacy-policy" className="wrapper pt-24">
            <div className="card">
              <div className="card-body !p-10">
                <h2 className="!mb-3 !leading-[1.35]">2. Privacy Policy</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
                  libero, a pharetra augue. Nullam quis risus eget urna mollis
                  ornare vel eu leo. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam.
                </p>
                <p>
                  Sed posuere consectetur est at lobortis. Maecenas faucibus
                  mollis interdum. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Donec id elit non
                  mi porta gravida at eget metus. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary">
                  <li className="relative !mt-[0.35rem] flex items-center">
                    <span className="pr-[.75rem]">
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    </span>
                    <span>
                      Aenean eu leo quam ornare curabitur blandit tempus.
                    </span>
                  </li>
                  <li className="relative !mt-[0.35rem] flex items-center">
                    <span className="pr-[.75rem]">
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    </span>
                    <span>
                      Nullam quis risus eget urna mollis ornare donec elit.
                    </span>
                  </li>
                  <li className="relative !mt-[0.35rem] flex items-center">
                    <span className="pr-[.75rem]">
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    </span>
                    <span>Etiam porta sem malesuada magna mollis euismod.</span>
                  </li>
                  <li className="relative !mt-[0.35rem] flex items-center">
                    <span className="pr-[.75rem]">
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    </span>
                    <span>Fermentum massa vivamus faucibus amet euismod.</span>
                  </li>
                </ul>
                <p className="!mb-0">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                  sed diam eget risus varius blandit sit amet non magna.
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Nullam id dolor id nibh ultricies vehicula ut
                  id elit. Donec ullamcorper nulla non metus auctor fringilla.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porta sem malesuada magna mollis euismod. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Nulla vitae
                  elit libero, a pharetra augue. Curabitur blandit tempus
                  porttitor. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet
                  risus. Aenean eu leo quam. Pellentesque ornare sem.
                </p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="user-policy" className="wrapper pt-24">
            <div className="card">
              <div className="card-body !p-10">
                <h2 className="!mb-3 !leading-[1.35]">3. User Policy</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
                  libero, a pharetra augue. Nullam quis risus eget urna mollis
                  ornare vel eu leo. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam.
                </p>
                <p>
                  Sed posuere consectetur est at lobortis. Maecenas faucibus
                  mollis interdum. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Donec id elit non
                  mi porta gravida at eget metus. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <p className="!mb-0">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                  sed diam eget risus varius blandit sit amet non magna.
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Nullam id dolor id nibh ultricies vehicula ut
                  id elit. Donec ullamcorper nulla non metus auctor fringilla.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porta sem malesuada magna mollis euismod. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Nulla vitae
                  elit libero, a pharetra augue. Curabitur blandit tempus
                  porttitor. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet
                  risus. Aenean eu leo quam. Pellentesque ornare sem.
                </p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="copyrights" className="wrapper pt-24">
            <div className="card">
              <div className="card-body !p-10">
                <h2 className="!mb-3 !leading-[1.35]">4. Copyrights</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
                  libero, a pharetra augue. Nullam quis risus eget urna mollis
                  ornare vel eu leo. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam.
                </p>
                <p>
                  Sed posuere consectetur est at lobortis. Maecenas faucibus
                  mollis interdum. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Donec id elit non
                  mi porta gravida at eget metus. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary">
                  <li className="relative !mt-[0.35rem] flex items-center">
                    <span className="pr-[.75rem]">
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    </span>
                    <span>
                      Aenean eu leo quam ornare curabitur blandit tempus.
                    </span>
                  </li>
                  <li className="relative !mt-[0.35rem] flex items-center">
                    <span className="pr-[.75rem]">
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    </span>
                    <span>
                      Nullam quis risus eget urna mollis ornare donec elit.
                    </span>
                  </li>
                  <li className="relative !mt-[0.35rem] flex items-center">
                    <span className="pr-[.75rem]">
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    </span>
                    <span>Etiam porta sem malesuada magna mollis euismod.</span>
                  </li>
                  <li className="relative !mt-[0.35rem] flex items-center">
                    <span className="pr-[.75rem]">
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                    </span>
                    <span>Fermentum massa vivamus faucibus amet euismod.</span>
                  </li>
                </ul>
                <p className="!mb-0">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                  sed diam eget risus varius blandit sit amet non magna.
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Nullam id dolor id nibh ultricies vehicula ut
                  id elit. Donec ullamcorper nulla non metus auctor fringilla.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porta sem malesuada magna mollis euismod. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Nulla vitae
                  elit libero, a pharetra augue. Curabitur blandit tempus
                  porttitor. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet
                  risus. Aenean eu leo quam. Pellentesque ornare sem.
                </p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="cookies" className="wrapper pt-24">
            <div className="card">
              <div className="card-body !p-10">
                <h2 className="!mb-3 !leading-[1.35]">5. Cookies</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
                  libero, a pharetra augue. Nullam quis risus eget urna mollis
                  ornare vel eu leo. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam.
                </p>
                <p>
                  Sed posuere consectetur est at lobortis. Maecenas faucibus
                  mollis interdum. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Donec id elit non
                  mi porta gravida at eget metus. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <p className="!mb-0">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                  sed diam eget risus varius blandit sit amet non magna.
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Nullam id dolor id nibh ultricies vehicula ut
                  id elit. Donec ullamcorper nulla non metus auctor fringilla.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porta sem malesuada magna mollis euismod. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Nulla vitae
                  elit libero, a pharetra augue. Curabitur blandit tempus
                  porttitor. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet
                  risus. Aenean eu leo quam. Pellentesque ornare sem.
                </p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="account-billing" className="wrapper py-24">
            <div className="card">
              <div className="card-body !p-10">
                <h2 className="!mb-3 !leading-[1.35]">
                  6. Account &amp; Billing
                </h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
                  libero, a pharetra augue. Nullam quis risus eget urna mollis
                  ornare vel eu leo. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam.
                </p>
                <p>
                  Sed posuere consectetur est at lobortis. Maecenas faucibus
                  mollis interdum. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Donec id elit non
                  mi porta gravida at eget metus. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <p className="!mb-0">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                  sed diam eget risus varius blandit sit amet non magna.
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Nullam id dolor id nibh ultricies vehicula ut
                  id elit. Donec ullamcorper nulla non metus auctor fringilla.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porta sem malesuada magna mollis euismod. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Nulla vitae
                  elit libero, a pharetra augue. Curabitur blandit tempus
                  porttitor. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet
                  risus. Aenean eu leo quam. Pellentesque ornare sem.
                </p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
  );
}
