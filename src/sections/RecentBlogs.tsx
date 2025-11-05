import React from "react";
import Link from "next/link";
import Image from "next/image";

function RecentBlogs() {
  return (
    <section className="blog-sec relative">
      <div className="container m-auto">
        <div className="header-row block items-center justify-between md:flex">
          <div className="contents-col max-w-1/2">
            <h2>
              <span>Recent blogs</span>
            </h2>
            <p className="pt-4">
              Discover the latest articles, insights, and updates from
              healthcare experts to keep you informed and inspired.
            </p>
          </div>
          <Link href="" className="primary-btn flex items-center gap-3">
            Explore now
            <span>
              <Image
                src="/images/icons/icon-arrow.svg"
                alt="carelarning"
                width={20}
                height={20}
              />
            </span>
          </Link>
        </div>
        <div className="blog-card grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="img-col">
            <Image
              src="/images/img-blog.png"
              alt="carelearninf"
              width={800}
              height={800}
              className="w-full h-full"
            />
          </div>
          <div className="text-col">
            <h3>
              <span>
                How Do Free Online Platforms Improve Basic Nursing Skills
                Effectively?
              </span>
            </h3>
            <p className="!text-[#FFFFFF5C] py-10">September 11,2025</p>
            <Link href="" className="primary-btn flex items-center gap-3">
              Read now
              <span>
                <Image
                  src="/images/icons/icon-arrow.svg"
                  alt="carelarning"
                  width={20}
                  height={20}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 -z-1">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/bg-blog.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default RecentBlogs;
