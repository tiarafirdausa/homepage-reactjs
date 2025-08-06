import { socialLinks } from "@/data/socials";
import React from "react";

export default function Footer29() {
  return (
    <footer>
      <div className="container py-7">
        <div className="xl:!flex lg:!flex md:!flex items-center justify-between">
          <p className="!mb-2 xl:!mb-0 lg:!mb-0">
            © {new Date().getFullYear()} Sandbox. All rights reserved.
          </p>
          <nav className="nav social social-muted !mb-0 xl:!text-right lg:!text-right md:!text-right">
            {socialLinks.map((elm, i) => (
              <a
                key={i}
                className="xl:m-[0_0_0_0.7rem] lg:m-[0_0_0_0.7rem] md:m-[0_0_0_0.7rem] max-md:m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                href={elm.href}
              >
                <i
                  className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-[${elm.color}] text-[1rem]`}
                />
              </a>
            ))}
          </nav>
          {/* /.social */}
        </div>
      </div>
      {/* /.container */}
    </footer>
  );
}
