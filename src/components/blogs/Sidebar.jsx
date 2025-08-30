import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Gallery, Item } from "react-photoswipe-gallery";

import { getRecentPosts, getPopularPosts } from "@/services/postService";
import { getTags } from "@/services/tagService";
import { getCategories } from "@/services/categoryService";
import { getActiveSocials } from "@/services/socialService";
import { getSettings } from "@/services/settingsService";
import { getWidgetModules } from "@/services/modulService";
import { getMedia } from "@/services/mediaService";
import { getLinks } from "@/services/linkService"; // Import getLinks
import { BASE_URL } from "@/config/url";
import { iconMapping } from "@/utils/iconMapping";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [settings, setSettings] = useState({});
  const [socials, setSocials] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [widgetModules, setWidgetModules] = useState([]);
  const [mediaItems, setMediaItems] = useState([]);
  const [links, setLinks] = useState([]); // New state for links
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          categoriesData,
          tagsData,
          recentPostsData,
          socialsData,
          settingsData,
          widgetModulesData,
          popularPostsData,
          mediaData,
          linksData, // Fetch links data
        ] = await Promise.all([
          getCategories(),
          getTags(),
          getRecentPosts({ pageSize: 3 }),
          getActiveSocials(),
          getSettings(),
          getWidgetModules(),
          getPopularPosts({ pageSize: 3 }),
          getMedia(),
          getLinks(), // Call getLinks()
        ]);

        setCategories(categoriesData.categories || []);
        setTags(tagsData.tags || []);
        setRecentPosts(recentPostsData.data || []);
        setPopularPosts(popularPostsData.data || []);
        setSocials(socialsData || []);
        setSettings(settingsData.general || {});
        setWidgetModules(widgetModulesData || []);
        setMediaItems(mediaData.data || []);
        setLinks(linksData.data || []); // Set links state
      } catch (error) {
        console.error("Failed to fetch sidebar data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/post?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const renderPostList = (posts) => (
    <ul className="m-0 p-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible">
      {posts.map((post, i) => (
        <li
          key={post.id}
          className={`clear-both block overflow-hidden ${
            i !== 0 ? "!mt-4" : ""
          }`}
        >
          <figure className="!rounded-[.4rem] float-left w-14 !h-[4.5rem]">
            <Link to={`/post/${post.slug}`}>
              <img
                className="!rounded-[.4rem]"
                alt={post.title}
                src={`${BASE_URL}${post.featured_image}`}
                width={100}
                height={100}
              />
            </Link>
          </figure>
          <div className="!relative !ml-[4.25rem] !mb-0">
            <h6 className="!mb-2">
              <Link
                className="!text-[#343f52] hover:!text-[#3f78e0]"
                to={`/post/${post.slug}`}
              >
                {post.title}
              </Link>
            </h6>
            <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
              <li className="post-date inline-block">
                <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                <span>{new Date(post.published_at).toLocaleDateString()}</span>
              </li>
              <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                <a
                  className="!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                  href="#"
                >
                  <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']" />
                  0
                </a>
              </li>
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );

  const renderLinkList = (links) => (
  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 gap-2 justify-items-center">
      {links.map((link) => (
        <div key={link.id} className="flex flex-col items-center text-center">
          <a href={link.link} target="_blank" rel="noopener noreferrer">
            <img
              src={`${BASE_URL}${link.gambar}`}
              alt={link.judul}
              className="w-12 h-12 object-cover rounded-md" 
            />
          </a>
          <h6 className="text-xs font-semibold !mb-0.5">
            <a
              className="text-[#343f52] hover:text-[#3f78e0]"
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.judul}
            </a>
          </h6>
          <div className="text-[0.6rem] text-[#aab0bc] uppercase tracking-[0.02rem] font-bold">
            {link.kategori}
          </div>
        </div>
      ))}
    </div>
  );

  const renderWidgetModules = () => {
    return widgetModules.map((modul) => {
      const widgetContent = () => {
        if (modul.folder === "recent-post") {
          return renderPostList(recentPosts);
        } else if (modul.folder === "popular-post") {
          return renderPostList(popularPosts);
        } else if (modul.folder === "profile") {
          return (
            <>
              <p>{settings.site_description}</p>
              <nav className="nav social">
                {socials.map((item) => (
                  <a
                    key={item.id}
                    className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    href={item.url}
                  >
                    <FontAwesomeIcon icon={iconMapping[item.icon_class]} />
                  </a>
                ))}
              </nav>
            </>
          );
        }else if (modul.folder === "media") {
    return (
      <div className="flex flex-wrap gallery-side">
        {mediaItems.slice(0, 6).map((collection) => {
          if (!collection.media || collection.media.length === 0) return null;

          const firstItem = collection.media[0];
          const thumbnailUrl = firstItem.cropped_url
            ? `${BASE_URL}${firstItem.cropped_url}`
            : `${BASE_URL}${firstItem.url}`;

          return (
            <div
              key={collection.id}
              className="media-collection-thumbnail p-[2px] cursor-pointer"
            >
              <Gallery>
                {collection.media.map((media, idx) => {
                  const isVideo = media.url.toLowerCase().match(/\.(mp4|webm|ogg)$/);
                  const isImage = media.url.toLowerCase().match(/\.(jpeg|jpg|png|gif)$/);
                  const mediaUrl = `${BASE_URL}${media.url}`;
                  const thumb = media.cropped_url
                    ? `${BASE_URL}${media.cropped_url}`
                    : mediaUrl;

                  if (isImage) {
                    return (
                      <Item
                        key={media.id}
                        original={mediaUrl}
                        thumbnail={thumb}
                      >
                        {({ ref, open }) =>
                          idx === 0 ? (
                            <img
                              ref={ref}
                              onClick={open}
                              src={thumbnailUrl}
                              alt={collection.title || "Media thumbnail"}
                              className="w-24 h-24 object-cover rounded-[0.2rem] transition-all duration-300 hover:scale-105 cursor-pointer" // Gunakan ukuran tetap
                            />
                          ) : (
                            <span ref={ref} />
                          )
                        }
                      </Item>
                    );
                  }

                  if (isVideo) {
  return (
    <Item
      key={media.id}
      original={mediaUrl}
      thumbnail={thumb}
      content={
        <div className="w-full h-full flex items-center justify-center">
          <video
            controls
            autoPlay
            className="max-h-[80vh] max-w-[90vw] rounded-md"
          >
            <source
              src={mediaUrl}
              type={`video/${media.url.split(".").pop()}`}
            />
            Your browser does not support the video tag.
          </video>
        </div>
      }
    >
      {({ ref, open }) =>
        idx === 0 ? (
          <img
            ref={ref}
            onClick={open}
            src={thumbnailUrl}
            alt={collection.title || "Video thumbnail"}
            className="w-24 h-24 object-cover rounded-[0.2rem] transition-all duration-300 hover:scale-105 cursor-pointer"
          />
        ) : (
          <span ref={ref} />
        )
      }
    </Item>
  );
}
                  return null;
                })}
              </Gallery>
            </div>
          );
        })}
      </div>
    );
  } else if (modul.folder === "link") {
          return renderLinkList(links);
        }

        return null;
      };

      if (widgetContent()) {
        return (
          <div key={modul.id_modul} className="widget !mt-[40px]">
            <h4 className="widget-title !mb-3">{modul.judul}</h4>
            {widgetContent()}
          </div>
        );
      }
      return null;
    });
  };

  if (loading) {
    return (
      <aside className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full sidebar !mt-8 xl:!mt-6 lg:!mt-6">
        <div>Loading...</div>
      </aside>
    );
  }

  return (
    <aside className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full sidebar !mt-8 xl:!mt-6 lg:!mt-6">
      <div className="widget">
        <form
          onSubmit={handleSearchSubmit}
          className="search-form relative before:content-['\eca5'] before:block before:absolute before:-translate-y-2/4 before:text-[0.9rem] before:!text-[#959ca9] before:z-[9] before:right-3 before:top-2/4 font-Unicons"
        >
          <div className="form-floating relative !mb-0">
            <input
              id="search-form"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
              placeholder=""
            />
            <label
              htmlFor="search-form"
              className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
            >
              Search
            </label>
          </div>
        </form>
      </div>

      {renderWidgetModules()}

      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Categories</h4>
        <ul className="pl-0 list-none bullet-primary !text-inherit">
          {categories.map((category) => (
            <li
              key={category.id}
              className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]"
            >
              <Link
                className="!text-[#60697b] hover:!text-[#3f78e0]"
                to={`/kategori/${category.slug}`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Tags</h4>
        <ul className="pl-0 list-none tag-list">
          {tags.map((tag) => (
            <li
              key={tag.id}
              className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block"
            >
              <Link
                to={`/tags/${tag.slug}`}
                className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
              >
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
