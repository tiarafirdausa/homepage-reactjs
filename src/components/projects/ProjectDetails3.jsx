import React from "react";
import GalleryComponent from "../blogs/Gallery";
export default function ProjectDetails3({ content, galleryImages = [] }) {
  return (
    <div className={`blog single`}>
      <div className="card">
        <div className="card-body flex-[1_1_auto] p-[40px] xl:!p-[2.8rem_3rem_2.8rem] lg:!p-[2.8rem_3rem_2.8rem] md:!p-[2.8rem_3rem_2.8rem]">
          <div className="classic-view">
            <article className="post !mb-8">
              <div className="relative !mb-5">
                <div
                  className="!relative"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <GalleryComponent galleryImages={galleryImages} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}