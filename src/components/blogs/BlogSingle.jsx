// src/components/blogs/BlogSingle.jsx

import React from "react";
import RelatedBlogs from "./RelatedBlogs";
import DOMPurify from "dompurify";
import Gallery from "./Gallery";
import Comment from "./Comment";
import CommentBox from "./CommentBox";
import { BASE_URL } from "@/config/url";

export default function BlogSingle({ marginTop = true, post, relatedPosts, comments }) {
  if (!post) {
    return <div>Loading...</div>;
  }

  const sanitizedContent = DOMPurify.sanitize(post.content, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allowfullscreen', 'webkitallowfullscreen', 'mozallowfullscreen', 'frameborder'],
  });

  return (
    <div className={`blog single ${marginTop ? "!mt-[-7rem]" : ""} `}>
      <div className="card">
        {post.featured_image && (
          <figure className="card-img-top">
            <img
              alt={post.title || "Featured Image"}
              src={`${BASE_URL}${post.featured_image}`}
              width={960}
              height={600}
            />
          </figure>
        )}
        <div className="card-body flex-[1_1_auto] p-[40px] xl:!p-[2.8rem_3rem_2.8rem] lg:!p-[2.8rem_3rem_2.8rem] md:!p-[2.8rem_3rem_2.8rem]">
          <div className="classic-view">
            <article className="post !mb-8">
              <div className="relative !mb-5">
                <div
                  className="!relative"
                  dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                />
                <Gallery galleryImages={post.gallery_images} />
              </div>
              <div className="post-footer xl:!flex xl:!flex-row xl:!justify-between lg:!flex lg:!flex-row lg:!justify-between md:!flex md:!flex-row md:!justify-between !items-center !mt-8">
                <div>
                  <ul className="pl-0 list-none tag-list !mb-0">
                    {post.tags &&
                      post.tags.map((tag) => (
                        <li
                          key={tag.id}
                          className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block"
                        >
                          <a
                            href={`/tags/${tag.slug}`}
                            className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                          >
                            {tag.name}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <RelatedBlogs relatedPosts={relatedPosts} />

          <hr />
          <Comment comments={comments} />

          <hr />
          <h3 className="!mb-3">Would you like to share your thoughts?</h3>
          <p className="!mb-7">
            Your email address will not be published. Required fields are marked *
          </p>
          {post.id && <CommentBox postId={post.id} />}
        </div>
      </div>
    </div>
  );
}
