import Link from "next/link";
import Image from "next/image";
import React from "react";

function BannerLayout() {
  return (
    <section className="banner-layout relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="layout-video absolute w-full h-full left-0 top-0 -z-1">
            <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-contain object-left">
              <source src="/videos/rotate-vector.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div></div>
          <div className="layout-contents">
            <h2>
              Transform Your <br />
              <span>Healthcare Career <br /> with AI!</span>
            </h2>
            <p>
              Create standout resumes and personal statements instantly using
              AI-powered tools designed for healthcare professionals.
            </p>
            <Link
              href=""
              className="primary-btn flex items-center gap-3"
            >
              Get Started
              <span>
                <Image
                  src='/images/icons/icon-arrow.svg'
                  alt="carelarning"
                  width={20}
                  height={20}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerLayout;
