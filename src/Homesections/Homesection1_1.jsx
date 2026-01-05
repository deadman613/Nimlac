'use client';
import ScrollVelocity from "../../src/app/bits/ScrollVelocity";

export default function Homesection1_1() {
  const logoItems = [
    { slug: "python", label: "Python" },
    { slug: "tensorflow", label: "TensorFlow" },
    { slug: "pytorch", label: "PyTorch" },
    { slug: "scikitlearn", label: "Scikit-Learn" },
    { slug: "amazonaws", label: "AWS" },
    { slug: "googlecloud", label: "Google Cloud Platform" },
    { slug: "microsoftazure", label: "Microsoft Azure" },
    { slug: "docker", label: "Docker" },
    { slug: "kubernetes", label: "Kubernetes" },
    { slug: "mlflow", label: "MLOps" },
  ];

  return (
    <section className="relative w-full overflow-hidden pt-10 pb-10 flex flex-col items-center justify-center">

      <ScrollVelocity
        texts={logoItems.map((item) => (
          <div key={item.slug} className="flex items-center gap-2">
            <img
              src={`https://cdn.simpleicons.org/${item.slug}/22d3ee`}
              alt={item.label}
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 drop-shadow-[0_0_14px_rgba(34,211,238,0.30)]"
              loading="lazy"
              decoding="async"
            />
            <span className="text-cyan-200/90 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
        speed={3.6}
        className="
          px-2
        "
      />

    </section>
  );
}
