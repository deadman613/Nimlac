'use client';
import ScrollVelocity from "../../src/app/bits/ScrollVelocity";

export default function Homesection1_1() {
  return (
    <section className="relative w-full overflow-hidden pt-10 pb-10 flex flex-col items-center justify-center">

      {/* Background only */}
      <div
        className="absolute inset-0 -z-10
        bg-[linear-gradient(135deg,#01161d_0%,#000c10_25%,#01161d_50%,#001f28_75%,#01161d_100%)]"
      />

      <ScrollVelocity
        texts={[
          "Python",
          "TensorFlow",
          "PyTorch",
          "Scikit-Learn",
          "AWS",
          "Google Cloud Platform",
          "Microsoft Azure",
          "Docker",
          "Kubernetes",
          "MLOps"
        ]}
        speed={3.6}
        className="
          text-transparent bg-clip-text 
          bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          font-bold whitespace-nowrap
        "
      />

    </section>
  );
}
