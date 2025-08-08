import React from "react";

export default function Pagination({ totalPages, activePage, onPageChange }) {
  if (totalPages <= 0) {
    return null;
  }
  
  const pages = [...Array(totalPages)].map((_, index) => index + 1);
  

  return (
    <ul className="pagination">
      <li className={`page-item ${activePage === 1 ? "disabled" : ""}`}>
        <a
          className="page-link"
          onClick={() => onPageChange(activePage - 1)} 
          aria-label="Previous"
        >
          <span aria-hidden="true">
            <i className="uil uil-arrow-left before:content-['\e949']" />
          </span>
        </a>
      </li>

      {pages.map((page) => (
        <li
          key={page}
          className={`page-item ${activePage === page ? "active" : ""}`}
        >
          <a className="page-link" onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}

      <li
        className={`page-item ${activePage === totalPages ? "disabled" : ""}`}
      >
        <a
          className="page-link"
          onClick={() => onPageChange(activePage + 1)}
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