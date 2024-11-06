"use client";

import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import { IPropsProjectItem } from "@/helpers/interfaces";
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
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(
              // (ref) => ref?.dataset?.id === entry.target.dataset.id
              (ref) => ref === entry.target
            );
            //   if (cardRef) {
            // setActiveImage(cardRef.querySelector("img")?.src);
            // setActiveAlt(cardRef.querySelector("img")?.alt);
            //   }
            if (index !== -1) {
              setActiveImage(projects[index].src);
              setActiveAlt(projects[index].alt || "Project image");
            }
          }
        });
      },
      { threshold: 1.0 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [projects]);

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-300">
      <div className="flex justify-end items-center h-screen xl:max-w-[90%] w-full bg-[url('/images/containerBGSecondary3.webp')] bg-cover bg-center bg-no-repeat">
        <div className="container flex gap-12 h-[70%] w-[90%] pl-20 pr-11 pt-11 bg-neutral-100 rounded-3xl ">
          <div className="pb-11 flex flex-[0.8] flex-col">
            {/* xl:max-w-[420px] w-full xl:max-h-[360px] h-full */}
            <h1 className="mainDescriptionCl font-bold text-stone-950">
              {t("title")}
            </h1>
            {/* <ul className="flex gap-8">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="relative xl:max-w-[386px] w-full h-[286px] overflow-hidden"
                >
                  {project.src && ( */}
            <div className="relative self-center w-full h-full rounded-3xl overflow-hidden">
              {activeImage && (
                <Image
                  className="imageFadeCl "
                  fill={true}
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  src={activeImage}
                  alt={activeAlt}
                  // src={project.src}
                  // alt={project.alt || "Project image"}
                  // placeholder="blur"
                />
              )}
            </div>
            {/* )}
                </li>
              ))}
            </ul> */}
          </div>
          <ul className="flex flex-1 flex-col gap-4 overflow-y-auto scroll-containerCl">
            {projects.map((project, index) => (
              <li
                ref={(ref) => {
                  cardRefs.current[index] = ref;
                }}
                key={project.id}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
