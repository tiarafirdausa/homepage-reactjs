import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTopBehaviour() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // This makes it instant
    });
  }, [pathname]);

  return <></>;
}
