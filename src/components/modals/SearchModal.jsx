import React from "react";

export default function SearchModal() {
  return (
    <div
      className="offcanvas offcanvas-top !bg-[#ffffff]"
      id="offcanvas-search"
      data-bs-scroll="true"
    >
      <div className="container flex flex-row py-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="search-form relative before:content-['\eca5'] before:block before:absolute before:-translate-y-2/4 before:text-[1rem] before:!text-[#343f52] before:z-[1] before:right-auto before:top-2/4 before:font-Unicons w-full before:left-0 focus:!outline-offset-0"
        >
          <input
            id="search-form1"
            type="text"
            className="form-control text-[0.8rem] !shadow-none !pl-[1.75rem] !pr-[.75rem] border-0 bg-inherit m-0 block w-full font-medium !leading-[1.7] !text-[#60697b] px-4 py-[0.6rem] rounded-[0.4rem] focus:!outline-offset-0"
            placeholder="Type keyword and hit enter"
          />
        </form>
        <button
          type="button"
          className="btn-close leading-none !text-[#343f52] transition-all duration-[0.2s] ease-in-out p-0 border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:!flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(0,0,0,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)]"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      {/* /.container */}
    </div>
  );
}
