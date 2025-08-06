import React, { useState } from "react";

export default function Pagination() {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 3;

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
    }
  };

  return (
    <ul className="pagination">
      <li className={`page-item ${activePage === 1 ? "disabled" : ""}`}>
        <a
          className="page-link"
          onClick={() => handleClick(activePage - 1)}
          aria-label="Previous"
        >
          <span aria-hidden="true">
            <i className="uil uil-arrow-left before:content-['\e949']" />
          </span>
        </a>
      </li>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <li
            key={page}
            className={`page-item ${activePage === page ? "active" : ""}`}
          >
            <a className="page-link" onClick={() => handleClick(page)}>
              {page}
            </a>
          </li>
        );
      })}

      <li
        className={`page-item ${activePage === totalPages ? "disabled" : ""}`}
      >
        <a
          className="page-link"
          onClick={() => handleClick(activePage + 1)}
          aria-label="Next"
        >
          <span aria-hidden="true">
            <i className="uil uil-arrow-right before:content-['\e94c']" />
          </span>
        </a>
      </li>
    </ul>
  );
}
