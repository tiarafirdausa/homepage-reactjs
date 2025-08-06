import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const blocks = [
  { name: "About", href: "/docs/blocks/about" },
  { name: "Blog", href: "/docs/blocks/blog" },
  { name: "Call to Action", href: "/docs/blocks/call-to-action" },
  { name: "Clients", href: "/docs/blocks/clients" },
  { name: "Contact", href: "/docs/blocks/contact" },
  { name: "Facts", href: "/docs/blocks/facts" },
  { name: "FAQ", href: "/docs/blocks/faq" },
  { name: "Features", href: "/docs/blocks/features" },
  { name: "Footer", href: "/docs/blocks/footer" },
  { name: "Hero", href: "/docs/blocks/hero" },
  { name: "Misc", href: "/docs/blocks/misc" },
  { name: "Navbar", href: "/docs/blocks/navbar" },
  { name: "Portfolio", href: "/docs/blocks/portfolio" },
  { name: "Pricing", href: "/docs/blocks/pricing" },
  { name: "Process", href: "/docs/blocks/process" },
  { name: "Team", href: "/docs/blocks/team" },
  { name: "Testimonials", href: "/docs/blocks/testimonials" },
];

export default function BlockPageLinks() {
  const { pathname } = useLocation();
  return (
    <section className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid">
      <div className="container py-12">
        <h2 className="h5">Filter Blocks:</h2>
        <ul className="pl-0 list-none !mb-0">
          {blocks.map(({ name, href, disabled }) => (
            <li key={href} className="inline-block !mr-1 !mb-2">
              <Link
                to={href}
                className={`btn btn-soft-ash btn-sm rounded ${
                  pathname == href ? "!text-[#3f78e0] pointer-events-none" : ""
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.container */}
    </section>
  );
}
