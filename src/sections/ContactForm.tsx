import React from "react";
import Image from "next/image";
import Link from "next/link";

function ContactForm() {
  return (
    <section className="form-sec relative !pb-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <div className="form-col">
            <div className="form-header pb-10">
              <h2>
                what health care <br />
                <span>course is right for you</span>
              </h2>
              <p className="pt-3">
                Take the test and find our which academic course match your
                profile
              </p>
            </div>
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter Mail id"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter your Course"
                  className="form-control"
                />
              </div>
              <button
                type="submit"
                className="primary-btn flex items-center gap-3"
              >
                Submit
                <span>
                  <span>
                    <Image
                      src="/images/icons/icon-arrow.svg"
                      alt="carelarning"
                      width={20}
                      height={20}
                    />
                  </span>
                </span>
              </button>
            </form>
          </div>
          <div className="right-layout relative">
            <Image
              src="/images/img-form-layout.png"
              alt="carelearning"
              width={800}
              height={800}
              className="w-full"
            />
            <div className="download-btn-row flex items-center justify-center gap-5 absolute bottom-10 left-0 right-0 mx-auto z-2 w-fit">
              <Link href='' className="gradient-border download-inner-btn">
                <Image
                  src='/images/btn-gplay.svg'
                  alt="carelearning"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </Link>
              <Link href='' className="gradient-border download-inner-btn">
                <Image
                  src='/images/btn-apple.svg'
                  alt="carelearning"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom-txt">
          <h2>Care Learning</h2>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
