"use client";

import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import { IPropsProjectItem } from "@/helpers/interfaces";
import clsx from "clsx";
import { useTranslations } from "next-intl";
// import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  params: { locale: string };
};

// const ProjectsPage: React.FC<Props> = async ({ params: { locale } }) => {
const ProjectsPage: React.FC<Props> = () => {
  //   unstable_setRequestLocale(locale);

  const t = useTranslations("Projects");
  const projects = Object.values(t.raw("list")) as IPropsProjectItem[];

  const [activeImage, setActiveImage] = useState(projects[0].src);
  const [activeAlt, setActiveAlt] = useState(
    projects[0].alt || "Project image"
  );
  const [isFading, setIsFading] = useState(false);
  //   const [nextImage, setNextImage] = useState("");

  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef<HTMLUListElement | null>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;

    // Get the coordinates of the center of the container relative to the window
    const containerCenter =
      containerRef.current.getBoundingClientRect().top +
      containerRef.current.clientHeight / 2;

    let closestIndex = -1;
    let closestDistance = Infinity;

    // Find the card closest to the center of the container
    cardRefs.current.forEach((card, index) => {
      if (card) {
        const cardCenter =
          card.getBoundingClientRect().top + card.clientHeight / 2;

        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    });

    // Changing the image only if the nearest card has changed
    if (closestIndex !== -1 && projects[closestIndex].src !== activeImage) {
      setIsFading(true);
      setTimeout(() => {
        setActiveImage(projects[closestIndex].src);
        setActiveAlt(projects[closestIndex].alt || "Project image");
        setIsFading(false);
      }, 250);
    }
  };

  // Adding a scroll event
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [projects, activeImage]);

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-300">
      <div className="flex justify-end items-center h-screen xl:max-w-[90%] w-full bg-[url('/images/containerBGSecondary3.webp')] bg-cover bg-center bg-no-repeat">
        <div className="container flex gap-11 justify-between h-[70%] w-[90%] pl-20 pr-11 pt-11 bg-neutral-100 rounded-3xl ">
          <div className="pb-11 pt-10 flex xl:max-w-[560px] w-full flex-col">
            {/* xl:max-w-[420px] w-full xl:max-h-[360px] h-full */}
            <h1 className="mainDescriptionCl font-bold text-stone-950">
              {/* mb-8 */}
              {t("title")}
            </h1>
            {/* <ul className="flex gap-8">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="relative xl:max-w-[386px] w-full h-[286px] overflow-hidden"
                >
                  {project.src && ( */}
            <div className="relative mt-auto mb-auto w-full h-[400px] rounded-3xl overflow-hidden">
              {activeImage && (
                <Image
                  className={clsx(
                    "imageFadeCl",
                    isFading ? "imageHiddenCl" : ""
                  )}
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  src={activeImage}
                  alt={activeAlt}
                  fill
                  // src={project.src}
                  // alt={project.alt || "Project image"}
                  // placeholder="blur"
                />
              )}

              {/* {nextImage && (
                <Image
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-500"
                  style={{
                    transform: isFading ? "translateX(0)" : "translateX(100%)",
                  }}
                  src={nextImage}
                  alt={activeAlt}
                  fill
                />
              )} */}
            </div>
            {/* )}
                </li>
              ))}
            </ul> */}
          </div>
          <ul
            ref={containerRef}
            className="xl:max-w-[560px] w-full flex flex-col gap-4 pb-11 overflow-y-auto scroll-containerCl"
          >
            {projects.map((project, index) => (
              <li
                ref={(ref) => {
                  cardRefs.current[index] = ref;
                }}
                key={project.id}
                className="w-full xl:h-[371px] py-10 px-14 bg-white rounded-3xl"
              >
                <div className="h-full ">
                  {/* overflow-y-auto */}
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

// useEffect(() => {
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const index = cardRefs.current.findIndex(
//             // (ref) => ref?.dataset?.id === entry.target.dataset.id
//             (ref) => ref === entry.target
//           );
//           //   if (cardRef) {
//           // setActiveImage(cardRef.querySelector("img")?.src);
//           // setActiveAlt(cardRef.querySelector("img")?.alt);
//           //   }
//           if (index !== -1) {
//             //   ----------
//             setIsFading(true);
//             setTimeout(() => {
//               //   -----------------------
//               setActiveImage(projects[index].src);
//               setActiveAlt(projects[index].alt || "Project image");
//               //   ----------
//               setIsFading(false);
//             }, 500);
//             //   -------------------------
//           }
//         }
//       });
//     },
//     { threshold: 0.8 }
//   );

//   cardRefs.current.forEach((ref) => {
//     if (ref) observer.observe(ref);
//   });

//   return () => {
//     observer.disconnect();
//   };
// }, [projects]);
