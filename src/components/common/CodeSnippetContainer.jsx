import { useEffect, useState } from "react";

export default function CodeSnippetContainer({ children }) {
  const [showCode, setShowCode] = useState(false);
  useEffect(() => {
    setShowCode(true);
  }, []);

  return <>{showCode ? <>{children} </> : ""}</>;
}
