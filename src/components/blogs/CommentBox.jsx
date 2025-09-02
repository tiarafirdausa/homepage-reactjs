import React, { useEffect, useState } from "react";
import axios from "axios";
import { addComment } from "@/services/commentService";
import { BASE_URL } from "@/config/url";

const CommentBox = ({ postId }) => {
  const [formData, setFormData] = useState({
    author_name: "",
    content: "",
  });
  const [csrfToken, setCsrfToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/csrf-token`, {
          withCredentials: true,
        });
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error("Gagal mengambil token CSRF:", error);
        setMessage("Gagal memuat form komentar. Silakan coba lagi.");
      }
    };
    fetchCsrfToken();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    if (!formData.author_name || !formData.content) {
      setMessage("Nama dan komentar wajib diisi.");
      setIsSubmitting(false);
      return;
    }

    if (!postId) {
      setMessage("ID post tidak ditemukan.");
      setIsSubmitting(false);
      return;
    }

    try {
      await addComment(
        {
          post_id: postId, // Menggunakan prop postId
          author_name: formData.author_name,
          content: formData.content,
        },
        csrfToken
      );

      setMessage("Komentar berhasil ditambahkan. Menunggu moderasi.");
      setFormData({
        author_name: "",
        content: "",
      });
    } catch (error) {
      console.error("Gagal mengirim komentar:", error);
      setMessage(error.response?.data?.error || "Gagal mengirim komentar.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      {message && <div className="p-3 my-4 rounded-md text-sm text-red-700 bg-red-100">{message}</div>}
      
      <div className="form-floating relative !mb-4">
        <input
          type="text"
          className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
          placeholder=""
          id="c-name"
          name="author_name"
          value={formData.author_name}
          onChange={handleInputChange}
          disabled={isSubmitting || !csrfToken}
        />
        <label
          className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
          htmlFor="c-name"
        >
          Name *
        </label>
      </div>

      <div className="form-floating relative !mb-4">
        <textarea
          name="content"
          className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
          placeholder=""
          style={{ height: 150 }}
          value={formData.content}
          onChange={handleInputChange}
          disabled={isSubmitting || !csrfToken}
        />
        <label className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope">
          Comment *
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
        disabled={isSubmitting || !csrfToken || !postId}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default CommentBox;
