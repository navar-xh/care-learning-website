import React from "react";
import Image from "next/image";
import Link from "next/link";

function OpportunityBanner() {
  return (
    <section className="opportunity-sec">
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 health-banner items-center">
          <div className="layout-left">
            <h2>
              Find Your Next <br />
              <span>Healthcare Opportunity!</span>{" "}
            </h2>
            <p className="py-6">
              Connect with top employers, explore the latest job openings, and
              take the next step in your healthcare career.
            </p>
            <Link href="" className="primary-btn flex items-center gap-3">
              Get Started
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
          <div className="layout-right">
              <div className="bag-col w-fit">
                <video className="relative z-3 w-full h-full m-auto" autoPlay muted loop playsInline preload="auto">
                  <source src="/videos/bag.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="border-right"></div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpportunityBanner;
