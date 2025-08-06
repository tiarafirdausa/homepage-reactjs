import React from "react";

export default function Comment() {
  return (
    <div id="comments" className="relative !m-0">
      <h3 className="!mb-6">5 Comments</h3>
      <ol id="singlecomments" className="commentlist m-0 p-0 list-none">
        <li className="comment !mt-8">
          <div className="comment-header xl:!flex lg:!flex md:!flex items-center !mb-[.5rem]">
            <div className="flex items-center">
              <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                <img
                  className="rounded-[50%]"
                  alt="image"
                  src="/assets/img/avatars/u1.jpg"
                  width={120}
                  height={120}
                />
              </figure>
              <div>
                <h6 className="m-0 !mb-[0.2rem]">
                  <a href="#" className="!text-[#343f52] hover:!text-[#3f78e0]">
                    Connor Gibson
                  </a>
                </h6>
                <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                  <li>
                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                    14 Jan 2022
                  </li>
                </ul>
                {/* /.post-meta */}
              </div>
              {/* /div */}
            </div>
            {/* /div */}
            <div className="!mt-3 xl:!mt-0 lg:!mt-0 md:!mt-0 !ml-auto">
              <a
                href="#"
                className="btn btn-soft-ash btn-sm !rounded-[50rem] btn-icon btn-icon-start !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                <i className="uil uil-comments !mr-[0.3rem] before:content-['\ea56'] text-[.8rem]" />
                Reply
              </a>
            </div>
            {/* /div */}
          </div>
          {/* /.comment-header */}
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor
            ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est
            at lobortis integer posuere erat ante.
          </p>
        </li>
        <li className="comment !mt-8">
          <div className="comment-header xl:!flex lg:!flex md:!flex items-center !mb-[.5rem]">
            <div className="flex items-center">
              <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                <img
                  className="rounded-[50%]"
                  alt="image"
                  src="/assets/img/avatars/u2.jpg"
                  width={120}
                  height={120}
                />
              </figure>
              <div>
                <h6 className="m-0 !mb-[0.2rem]">
                  <a href="#" className="!text-[#343f52] hover:!text-[#3f78e0]">
                    Nikolas Brooten
                  </a>
                </h6>
                <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                  <li>
                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                    21 Feb 2022
                  </li>
                </ul>
                {/* /.post-meta */}
              </div>
              {/* /div */}
            </div>
            {/* /div */}
            <div className="!mt-3 xl:!mt-0 lg:!mt-0 md:!mt-0 !ml-auto">
              <a
                href="#"
                className="btn btn-soft-ash btn-sm !rounded-[50rem] btn-icon btn-icon-start !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                <i className="uil uil-comments !mr-[0.3rem] before:content-['\ea56'] text-[.8rem]" />
                Reply
              </a>
            </div>
            {/* /div */}
          </div>
          {/* /.comment-header */}
          <p>
            Quisque tristique tincidunt metus non aliquam. Quisque ac risus sit
            amet quam sollicitudin vestibulum vitae malesuada libero. Mauris
            magna elit, suscipit non ornare et, blandit a tellus. Pellentesque
            dignissim ornare faucibus mollis.
          </p>
          <ul className="children">
            <li className="comment !mt-8">
              <div className="comment-header xl:!flex lg:!flex md:!flex items-center !mb-[.5rem]">
                <div className="flex items-center">
                  <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                    <img
                      className="rounded-[50%]"
                      alt="image"
                      src="/assets/img/avatars/u3.jpg"
                      width={120}
                      height={120}
                    />
                  </figure>
                  <div>
                    <h6 className="m-0 !mb-[0.2rem]">
                      <a
                        href="#"
                        className="!text-[#343f52] hover:!text-[#3f78e0]"
                      >
                        Pearce Frye
                      </a>
                    </h6>
                    <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                      <li>
                        <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                        22 Feb 2022
                      </li>
                    </ul>
                    {/* /.post-meta */}
                  </div>
                  {/* /div */}
                </div>
                {/* /div */}
                <div className="!mt-3 xl:!mt-0 lg:!mt-0 md:!mt-0 !ml-auto">
                  <a
                    href="#"
                    className="btn btn-soft-ash btn-sm !rounded-[50rem] btn-icon btn-icon-start !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  >
                    <i className="uil uil-comments !mr-[0.3rem] before:content-['\ea56'] text-[.8rem]" />
                    Reply
                  </a>
                </div>
                {/* /div */}
              </div>
              {/* /.comment-header */}
              <p>
                Cras mattis consectetur purus sit amet fermentum. Integer
                posuere erat a ante venenatis dapibus posuere velit aliquet.
                Etiam porta sem malesuada magna mollis.
              </p>
              <ul className="children">
                <li className="comment !mt-8">
                  <div className="comment-header xl:!flex lg:!flex md:!flex items-center !mb-[.5rem]">
                    <div className="flex items-center">
                      <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                        <img
                          className="rounded-[50%]"
                          alt="image"
                          src="/assets/img/avatars/u2.jpg"
                          width={120}
                          height={120}
                        />
                      </figure>
                      <div>
                        <h6 className="m-0 !mb-[0.2rem]">
                          <a
                            href="#"
                            className="!text-[#343f52] hover:!text-[#3f78e0]"
                          >
                            Nikolas Brooten
                          </a>
                        </h6>
                        <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                          <li>
                            <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                            4 Apr 2022
                          </li>
                        </ul>
                        {/* /.post-meta */}
                      </div>
                      {/* /div */}
                    </div>
                    {/* /div */}
                    <div className="!mt-3 xl:!mt-0 lg:!mt-0 md:!mt-0 !ml-auto">
                      <a
                        href="#"
                        className="btn btn-soft-ash btn-sm !rounded-[50rem] btn-icon btn-icon-start !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                      >
                        <i className="uil uil-comments !mr-[0.3rem] before:content-['\ea56'] text-[.8rem]" />
                        Reply
                      </a>
                    </div>
                    {/* /div */}
                  </div>
                  {/* /.comment-header */}
                  <p>
                    Nullam id dolor id nibh ultricies vehicula ut id. Cras
                    mattis consectetur purus sit amet fermentum. Aenean eu leo
                    quam. Pellentesque ornare sem lacinia aenean bibendum nulla
                    consectetur.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="comment !mt-8">
          <div className="comment-header xl:!flex lg:!flex md:!flex items-center !mb-[.5rem]">
            <div className="flex items-center">
              <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                <img
                  className="rounded-[50%]"
                  alt="image"
                  src="/assets/img/avatars/u4.jpg"
                  width={120}
                  height={120}
                />
              </figure>
              <div>
                <h6 className="m-0 !mb-[0.2rem]">
                  <a href="#" className="!text-[#343f52] hover:!text-[#3f78e0]">
                    Lou Bloxham
                  </a>
                </h6>
                <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                  <li>
                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                    3 May 2022
                  </li>
                </ul>
                {/* /.post-meta */}
              </div>
              {/* /div */}
            </div>
            {/* /div */}
            <div className="!mt-3 xl:!mt-0 lg:!mt-0 md:!mt-0 !ml-auto">
              <a
                href="#"
                className="btn btn-soft-ash btn-sm !rounded-[50rem] btn-icon btn-icon-start !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                <i className="uil uil-comments !mr-[0.3rem] before:content-['\ea56'] text-[.8rem]" />
                Reply
              </a>
            </div>
            {/* /div */}
          </div>
          {/* /.comment-header */}
          <p>
            Sed posuere consectetur est at lobortis. Vestibulum id ligula porta
            felis euismod semper. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
        </li>
      </ol>
    </div>
  );
}
