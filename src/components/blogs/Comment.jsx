// src/components/blogs/Comment.jsx

import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Comment = ({ comments }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "Tanggal tidak tersedia";
    try {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString("en-US", options);
    } catch (e) {
      console.error("Gagal memformat tanggal:", e);
      return dateString;
    }
  };

  if (!comments || comments.length === 0) {
    return (
      <div id="comments" className="relative !m-0">
        <h3 className="!mb-6">0 Komentar</h3>
        <p className="text-gray-500">Belum ada komentar. Jadilah yang pertama!</p>
      </div>
    );
  }

  return (
    <div id="comments" className="relative !m-0">
      <h3 className="!mb-6">{comments.length} Komentar</h3>
      <ol id="singlecomments" className="commentlist m-0 p-0 list-none">
        {comments.map((comment) => (
          <li key={comment.id} className="comment !mt-8">
            <div className="comment-header xl:!flex lg:!flex md:!flex items-center !mb-[.5rem]">
              <div className="flex items-center">
                <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                  <FaUserCircle className="w-full h-full text-gray-400" />
                </figure>
                <div>
                  <h6 className="m-0 !mb-[0.2rem]">
                    <a href="#" className="!text-[#343f52] hover:!text-[#3f78e0]">
                      {comment.author_name}
                    </a>
                  </h6>
                  <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                    <li>
                      <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                      {formatDate(comment.created_at)}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>{comment.content}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Comment;