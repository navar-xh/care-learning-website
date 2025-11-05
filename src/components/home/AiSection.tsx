import React from "react";
import Image from "next/image";

function AiSection() {
  return (
    <section className="ai-sec">
      <div className="container mx-auto">
        <h2 className="w-[80%] m-auto text-center">
          AI-driven solutions to <span>help healthcare </span><span>professionals prepare for
          interviews,</span> optimize resumes, and navigate global career pathways all
          personalized to your experience and goals.
        </h2>
        <div className="ai-col relative grid grid-cols-3">
            <div></div>
            <div>
              <video className="relative z-3 w-full h-full m-auto" autoPlay muted loop playsInline preload="auto">
                <source src="/videos/bg-ai.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div></div>
            <div className="bg-ai-col absolute w-full h-full left-0 top-0 -z-1">
                <Image
                 src="/images/bg-ai.png"
                 alt="carelearning"
                 width={1000}
                 height={1000}
                 className="object-center w-full m-auto object-contain h-full"
                />
            </div>
        </div>
      </div>
    </section>
  );
}

export default AiSection;
