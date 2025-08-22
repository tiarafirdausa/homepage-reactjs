import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMapping } from "@/utils/iconMapping";
import { getSettings } from "@/services/settingsService";
import { getActiveSocials } from "@/services/socialService";
import { getMenuWithItems } from "@/services/menuService";

export default function Footer5({ hasMarginTop = false }) {
  const [settings, setSettings] = useState(null);
  const [socialLinks, setSocialLinks] = useState([]);
  const [footerLinks, setFooterLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const settingsData = await getSettings();
        const socialsData = await getActiveSocials();
        const menuData = await getMenuWithItems("main-menu");
        
        setSettings(settingsData.general);
        setSocialLinks(socialsData);
        setFooterLinks(menuData.items.filter(item => item.type === 'page'));
      } catch (err) {
        console.error("Failed to fetch footer data:", err);
        setError("Failed to load footer content.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <footer className="bg-[#21262c] text-[#cacaca] text-center py-16">
        Loading footer...
      </footer>
    );
  }

  if (error) {
    return (
      <footer className="bg-[#21262c] text-[#cacaca] text-center py-16">
        <p>{error}</p>
      </footer>
    );
  }

  const siteTitle = settings?.short_title ;
  const address = settings?.address ;
  const phone = settings?.phone ;
  const email = settings?.email;
  const mapHtml = settings?.maps_url?.replace(/width="\d+"/, 'width="100%"').replace(/height="\d+"/, 'height="200"');
  
  return (
    <footer
      className={`bg-[#21262c] opacity-100 !text-[#cacaca] ${
        hasMarginTop ? "!mt-5 xl:!mt-24 lg:!mt-24 md:!mt-24" : ""
      } `}
    >
      <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
          {/* Copyright Section */}
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">
              <p className="font-bold text-lg">{siteTitle}</p>
              <p className="!mb-4">
                © {new Date().getFullYear()} {siteTitle}.
                <br className="hidden xl:block lg:block !text-[#cacaca]" />
                All rights reserved.
              </p>
              <nav className="nav social social-white">
                {socialLinks.map((elm) => (
                  <a
                    key={elm.id}
                    className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    href={elm.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {iconMapping[elm.icon_class] && <FontAwesomeIcon icon={iconMapping[elm.icon_class]} />}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          {/* Get in Touch Section */}
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">
              <h4 className="widget-title !text-white !mb-3">Get in Touch</h4>
              <address className="xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4">
                {address}
              </address>
              <a
                className="!text-[#cacaca] hover:!text-[#3f78e0]"
                href={`mailto:${email}`}
              >
                {email}
              </a>
              <br />
              {phone}
            </div>
          </div>
          {/* Learn More Section */}
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">
              <h4 className="widget-title !text-white !mb-3">Learn More</h4>
              <ul className="pl-0 list-none !mb-0">
                {footerLinks.map((elm, i) => (
                  <li className={i !== 0 ? "!mt-[0.35rem]" : ""} key={elm.id}>
                    <Link
                      className="!text-[#cacaca] hover:!text-[#3f78e0]"
                      to={elm.url}
                    >
                      {elm.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Our Location - Map Embed Section */}
          <div className="md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">
              <h4 className="widget-title !text-white !mb-3">Our Location</h4>
              {mapHtml ? (
                <div
                  className="map-container"
                  dangerouslySetInnerHTML={{ __html: mapHtml }}
                />
              ) : (
                <p>Map not available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}