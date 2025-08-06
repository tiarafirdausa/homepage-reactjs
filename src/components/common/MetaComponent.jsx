// import { Helmet, HelmetProvider } from "react-helmet-async";

import { useEffect } from "react";

export default function MetaComponent({ meta }) {
  useEffect(() => {
    const updateMeta = async () => {
      document.title = meta.title;
    };
    updateMeta();
    return () => {
      document.title =
        "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS";
    };
  }, []);

  return (
    // <HelmetProvider>
    //   <Helmet>
    //     <title>{meta?.title}</title>
    //     <meta name="description" content={meta?.description} />
    //   </Helmet>
    // </HelmetProvider>

    <></>
  );
}
