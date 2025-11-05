import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <section className="banner-sec relative">
      <div className="container mx-auto relative z-1">
        <h1 className="text-center">
          <span>Join the</span> care learning <br />
          <span>community</span>
        </h1>
        <div className="btn-row flex items-center justify-center gap-4">
          <Link
            href=""
            className="primary-btn "
          >
            Talk to us
          </Link>
          <Link
            href=""
            className="primary-btn"
          >
            Register Now
          </Link>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 -z-1">
        <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover">
          <source src="/videos/bg-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Banner;
