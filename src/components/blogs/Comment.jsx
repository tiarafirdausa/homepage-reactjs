// src/components/blogs/Comment.jsx

import React from "react";

const Comment = ({ comments }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "Tanggal tidak tersedia";
    try {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
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
                  <img
                    className="rounded-[50%]"
                    alt="avatar"
                    src="/assets/img/avatars/u1.jpg"
                    width={120}
                    height={120}
                  />
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
              <div className="!mt-3 xl:!mt-0 lg:!mt-0 md:!mt-0 !ml-auto">
                <a
                  href="#"
                  className="btn btn-soft-ash btn-sm !rounded-[50rem] btn-icon btn-icon-start !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  <i className="uil uil-comments !mr-[0.3rem] before:content-['\ea56'] text-[.8rem]" />
                  Reply
                </a>
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