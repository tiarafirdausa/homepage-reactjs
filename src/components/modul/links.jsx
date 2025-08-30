// src/components/career/Jobs.jsx

import React, { useEffect, useState } from "react";
import { getLinks } from "@/services/linkService";
import { BASE_URL } from "@/config/url"; // Import BASE_URL

export default function Link({ title }) {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await getLinks();
        setLinks(response.data);
      } catch (error) {
        console.error("Failed to fetch links:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  if (loading) {
    return (
      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-[4.5rem] text-center">
          <p>Loading jobs...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[.75rem] uppercase !text-[#3f78e0] !tracking-[0.02rem] !leading-[1.35] !mb-3">
              Links
            </h2>
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-10 xxl:!px-20">
              Check out our latest links and resources.
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
          {links.map((link) => (
            <div
              key={link.id}
              className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] lift !h-full"
              >
                <div className="card-body p-5 flex flex-row">
                  <div className="mr-4 flex-shrink-0">
                    {link.gambar && (
                      <img
                        src={`${BASE_URL}${link.gambar}`}
                        alt={link.judul}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="!mb-1">{link.judul}</h4>
                    <p className="!mb-0 !text-[#60697b]">{link.keterangan}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
