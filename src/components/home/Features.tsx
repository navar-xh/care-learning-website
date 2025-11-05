import React from "react";

const FeaturesList = [
  {
    id: 1,
    title: "Mobile ",
    sub_title: "Compatibility",
    content:
      "Access our comprehensive healthcare courses on any device. With the convenience of a mobile-compatible platform, you can access new knowledge whenever or wherever you want.",
    bg_image: "/images/bg-features-1.png",
  },
  {
    id: 2,
    title: "Personalized ",
    sub_title: "Modules",
    content:"Tailor your learning with personalized modules. Our online healthcare courses offer customized content to suit your needs, offering relevant and engaging learning experiences catered specifically to you.",
    bg_image: "/images/bg-features-2.png",
  },
  {
    id: 3,
    title: "Lifetime Access to  ",
    sub_title: " Course Content",
    content:"Gain unlimited access to our online healthcare training programs in UK for life. Stay updated, refresh your knowledge, and advance your career at your own pace. Adopt continued learning with our lifetime access feature.",
    bg_image: "/images/bg-features-3.png",
  },
  {
    id: 4,
    title: "Mobile ",
    sub_title: "Expert Instructors",
    content:"Get mentored by healthcare professionals in our courses. Learn from industry experts who bring real-world experience, ensuring to receive top-quality education to meet your career goals.",
    bg_image: "/images/bg-features-4.png",
  },
];

function Features() {
  return (
    <section className="features-sec">
      <div className="container m-auto">
        <div className="header-row text-center pb-10">
          <h2>Our Features</h2>
          <p className="pt-5">
            Advance Your Career with certified Online Healthcare Courses in UK
          </p>
        </div>
        <div className="features-card grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between">
          {FeaturesList.map((item) => (
            <div
              key={item.id}
              className="card-single w-full"
              style={{
                backgroundImage: `url(${item.bg_image})`,
                backgroundSize: "contain",
                backgroundPosition: "center right",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="content-col max-w-3/5">
                <h3>
                  {item.title}
                  <span>{item.sub_title}</span>
                </h3>
                <p>{item.content}</p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
