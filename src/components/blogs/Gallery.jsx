import { Gallery, Item } from "react-photoswipe-gallery";

const images = [
  {
    fullImage: "/assets/img/photos/b8-full.jpg",
    thumbnail: "/assets/img/photos/b8.jpg",
    title: "Heading",
    description: "Purus Vulputate Sem Tellus Quam",
    width: 460,
    height: 307,
  },
  {
    fullImage: "/assets/img/photos/b9-full.jpg",
    thumbnail: "/assets/img/photos/b9.jpg",
    title: "",
    description: "",
    width: 460,
    height: 307,
  },
  {
    fullImage: "/assets/img/photos/b10-full.jpg",
    thumbnail: "/assets/img/photos/b10.jpg",
    title: "",
    description: "",
    width: 460,
    height: 307,
  },
  {
    fullImage: "/assets/img/photos/b11-full.jpg",
    thumbnail: "/assets/img/photos/b11.jpg",
    title: "",
    description: "",
    width: 460,
    height: 307,
  },
];

const ImageGallery = () => {
  return (
    <Gallery>
      <div className="flex flex-wrap mx-[-15px] !mt-3 !mb-10">
        <>
          {images.map((image, index) => (
            <div
              key={index}
              className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <Item
                original={image.thumbnail}
                thumbnail={image.thumbnail}
                width={image.width}
                height={image.height}
              >
                {({ ref, open }) => (
                  <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
                    <a
                      onClick={open}
                      data-glightbox={`title: ${image.title}; description: ${image.description}`}
                      data-gallery="post"
                    >
                      <img
                        ref={ref}
                        alt="image"
                        src={image.thumbnail}
                        width={image.width}
                        height={image.height}
                      />
                    </a>
                  </figure>
                )}
              </Item>
            </div>
          ))}
        </>
      </div>
    </Gallery>
  );
};

export default ImageGallery;
