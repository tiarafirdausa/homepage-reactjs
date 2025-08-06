import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const usageLinks = [
  { href: "/docs/intro", text: "Get Started" },

  { href: "/docs/faq", text: "FAQ" },
  { href: "/docs/changelog", text: "Changelog" },
  { href: "/docs/credits", text: "Credits" },
];

const styleguideLinks = [
  { href: "/docs/styleguide/colors", text: "Colors" },
  { href: "/docs/styleguide/fonts", text: "Fonts" },
  { href: "/docs/styleguide/icons-svg", text: "SVG Icons" },
  { href: "/docs/styleguide/icons-font", text: "Font Icons" },
  { href: "/docs/styleguide/illustrations", text: "Illustrations" },
  { href: "/docs/styleguide/backgrounds", text: "Backgrounds" },
  { href: "/docs/styleguide/misc", text: "Misc" },
];

const elementsLinks = [
  { href: "/docs/elements/accordion", text: "Accordion" },
  { href: "/docs/elements/alerts", text: "Alerts" },
  { href: "/docs/elements/animations", text: "Animations" },
  { href: "/docs/elements/avatars", text: "Avatars" },
  { href: "/docs/elements/background", text: "Background" },
  { href: "/docs/elements/badges", text: "Badges" },
  { href: "/docs/elements/buttons", text: "Buttons" },
  { href: "/docs/elements/card", text: "Card" },
  { href: "/docs/elements/carousel", text: "Carousel" },
  { href: "/docs/elements/dividers", text: "Dividers" },
  { href: "/docs/elements/form-elements", text: "Form Elements" },
  { href: "/docs/elements/image-hover", text: "Image Hover" },
  { href: "/docs/elements/image-mask", text: "Image Mask" },
  { href: "/docs/elements/lightbox", text: "Lightbox" },
  { href: "/docs/elements/player", text: "Media Player" },
  { href: "/docs/elements/modal", text: "Modal" },
  { href: "/docs/elements/pagination", text: "Pagination" },
  { href: "/docs/elements/progressbar", text: "Progressbar" },
  { href: "/docs/elements/shadows", text: "Shadows" },
  { href: "/docs/elements/shapes", text: "Shapes" },
  { href: "/docs/elements/tables", text: "Tables" },
  { href: "/docs/elements/tabs", text: "Tabs" },
  { href: "/docs/elements/text-animations", text: "Text Animations" },
  { href: "/docs/elements/text-highlight", text: "Text Highlight" },
  { href: "/docs/elements/tiles", text: "Tiles" },
  {
    href: "/docs/elements/tooltips-popovers",
    text: "Tooltips & Popovers",
  },
  { href: "/docs/elements/typography", text: "Typography" },
];
const Widget = ({ title, links, id }) => {
  const { pathname } = useLocation();
  return (
    <div className="widget pb-3">
      <h6 className="widget-title text-[0.85rem] !mb-2">{title}</h6>
      <nav id={id}>
        <ul className="list-unstyled !pl-0 list-none text-[0.7rem] leading-normal text-inherit">
          {links.map((link, index) => (
            <li key={index} className={index !== 0 ? "!mt-[0.35rem]" : ""}>
              <Link
                className={` ${
                  pathname == link.href
                    ? "active"
                    : "!text-inherit hover:!text-[#3f78e0]"
                }`}
                to={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default function DocsSidebar() {
  return (
    <>
      <Widget title="Usage" links={usageLinks} id="collapse-usage" />
      <Widget title="Styleguide" links={styleguideLinks} id="collapse-style" />
      <Widget title="Elements" links={elementsLinks} id="collapse-elements" />
    </>
  );
}
