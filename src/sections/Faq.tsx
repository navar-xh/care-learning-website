"use client";
import { title } from "process";
import React from "react";
import { useState } from "react";

const FaqList = [
  {
    title: "What types of courses does Care Learning offer?",
    content:
      "We offer a wide range of courses covering various aspects of healthcare, including patient care, medical ethics, advanced nursing practices, and more",
  },
  {
    title: "Is Care Learning accredited?",
    content:
      "Course duration varies depending on the subject matter. Most courses range from 2-6 weeks, with flexible learning schedules to accommodate your needs.",
  },
  {
    title: "What is the cost of the courses?",
        content:
      "Course duration varies depending on the subject matter. Most courses range from 2-6 weeks, with flexible learning schedules to accommodate your needs.",
  },
  {
    title: "How can I contact support if I have issues or questions?",
        content:
      "Course duration varies depending on the subject matter. Most courses range from 2-6 weeks, with flexible learning schedules to accommodate your needs.",
  },
];

function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="faq-sec">
      <div className="container m-auto">
        <div className="faq-col">
          <h2 className="text-center mb-10">
            <span>FAQ</span>
          </h2>
          {FaqList.map((item, index) => (
            <div key={index} className="faq-inner">
              <div
                className="accordion-header flex items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h4>{item.title}</h4>
                <div className="accordion-icons flex items-center justify-center transition-transform duration-300">
                  {openFaq === index ? "-" : "+"}
                </div>
              </div>
              <div
                className={`accordion-content w-3/5 transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === index
                    ? "max-h-96 opacity-100 mt-4"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
