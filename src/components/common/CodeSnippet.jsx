import { useEffect, useState } from "react";

export default function CodeSnippet({
  code,
  border = true,
  paddingClass = "pb-20 xl:pb-28 lg:pb-28 md:pb-28",
}) {
  const [showCode, setShowCode] = useState(false);
  useEffect(() => {
    setShowCode(true);
  }, []);

  function decodeHtmlEntities(encodedString) {
    if (typeof window != "undefined") {
      const parser = new DOMParser();
      const doc = parser.parseFromString(encodedString, "text/html");
      return doc.documentElement.textContent;
    }
  }

  const randomNumber = Math.floor(Math.random() * 100000) + 1;

  return (
    <>
      {showCode && (
        <div
          className={
            border
              ? "border-b-[rgba(164,174,198,0.2)] border-b border-solid"
              : ""
          }
        >
          <div className={`container ${paddingClass}`}>
            <div className="card">
              <div className="card-footer border-0 !relative">
                <a
                  className="collapse-link collapsed stretched-link"
                  data-bs-toggle="collapse"
                  href={`#collapse-snippet-${randomNumber}`}
                >
                  View example's code
                </a>
              </div>
              {/*/.card-footer */}
              <div
                id={`collapse-snippet-${randomNumber}`}
                className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
              >
                <div className="code-wrapper relative !mb-0">
                  <div className="code-wrapper-inner">
                    <pre className="language-html">
                      <code>{decodeHtmlEntities(code)}</code>
                    </pre>
                  </div>
                  {/*/.code-wrapper-inner */}
                </div>
                {/*/.code-wrapper */}
              </div>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </div>
        </div>
      )}
    </>
  );
}
