import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";
import { BASE_URL } from "@/config/url";

const GalleryComponent = ({ galleryImages }) => {
  if (!galleryImages || galleryImages.length === 0) {
    return null; 
  }

  return (
    <PhotoSwipeGallery>
      <div className="flex flex-wrap mx-[-15px] !mt-3 !mb-10">
        <>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <Item
                original={`${BASE_URL}${image.image_path}`}
                thumbnail={`${BASE_URL}${image.image_path}`}
                width={460}
                height={307}
              >
                {({ ref, open }) => (
                  <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
                    <a
                      onClick={open}
                      data-gallery="post"
                    >
                      <img
                        ref={ref}
                        alt={image.alt_text || `Gallery Image ${index + 1}`}
                        src={`${BASE_URL}${image.image_path}`}
                        width={460}
                        height={307}
                      />
                    </a>
                  </figure>
                )}
              </Item>
            </div>
          ))}
        </>
      </div>
    </PhotoSwipeGallery>
  );
};

export default GalleryComponent;