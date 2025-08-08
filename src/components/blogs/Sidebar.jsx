import React, { useState, useEffect } from "react";
import { getRecentPosts } from "@/services/postService";
import { getTags } from "@/services/tagService";
import { getCategories } from "@/services/categoryService";
import { getActiveSocials } from "@/services/socialService";
import { BASE_URL } from "@/config/url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMapping } from "@/utils/iconMapping";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [socials, setSocials] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesData, tagsData, recentPostsData, socialsData] = await Promise.all([
          getCategories(),
          getTags(),
          getRecentPosts(),
          getActiveSocials(),
        ]);
        setCategories(categoriesData.categories || []);
        setTags(tagsData.tags || []);
        setRecentPosts(recentPostsData.data || []);
        setSocials(socialsData || []); 
      } catch (error) {
        console.error("Failed to fetch sidebar data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
          onSubmit={(e) => e.preventDefault()}
          className="search-form relative before:content-['\eca5'] before:block before:absolute before:-translate-y-2/4 before:text-[0.9rem] before:!text-[#959ca9] before:z-[9] before:right-3 before:top-2/4 font-Unicons"
        >
          <div className="form-floating relative !mb-0">
            <input
              id="search-form"
              type="text"
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
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">About Us</h4>
        <p>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum. Nulla vitae elit libero, a pharetra augue. Donec
          id elit non mi porta gravida at eget metus.
        </p>
        <nav className="nav social">
          {socials.map((item) => (
            <a key={item.id} className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]" href={item.url}>
              <FontAwesomeIcon icon={iconMapping[item.icon_class]} />
            </a>
          ))}
        </nav>
        {/* /.social */}
      </div>
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Recent Posts</h4>
        <ul className="m-0 p-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible">
          {recentPosts.map((post, i) => (
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
        {/* /.image-list */}
      </div>
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Categories</h4>
        <ul className="pl-0 list-none bullet-primary !text-inherit">
          {categories.map((category) => (
            <li key={category.id} className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
              <a className="!text-[#60697b] hover:!text-[#3f78e0]" href={`/${category.slug}`}>
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Tags</h4>
        <ul className="pl-0 list-none tag-list">
          {tags.map((tag) => (
            <li key={tag.id} className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
              <a href={`/tags/${tag.slug}`} className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]">
                {tag.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* /.widget */}
      {/* <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Archive</h4>
        <ul className="pl-0 list-none bullet-primary !text-inherit">
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif">
            <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
              February 2019
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
              January 2019
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
              December 2018
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
              November 2018
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
              October 2018
            </a>
          </li>
        </ul>
      </div> */}
      {/* /.widget */}
    </aside>
  );
}
