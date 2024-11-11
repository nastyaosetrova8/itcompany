"use client";

import { IPropsProjectItem } from "@/helpers/interfaces";
import { useEffect, useRef, useState } from "react";

const ProjectCard: React.FC<IPropsProjectItem> = ({
  title,
  description,
  scrollText,
}) => {
  const contentRef = useRef<HTMLParagraphElement>(null);
  console.log("🚀 ~ contentRef:", contentRef);
  const [showScrollText, setShowScrollText] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      const { scrollHeight, clientHeight } = contentRef.current;
      setShowScrollText(scrollHeight > clientHeight);
    }
  }, [description]);

  return (
    <>
      <div className="flex flex-col h-full">
        <h2 className="titleCl font-medium mb-6">{title}</h2>
        {/* <p className="descriptionCl overflow-y-auto">{description}</p> */}
        <p
          ref={contentRef}
          className="descriptionCl scroll-containerCl overflow-y-auto"
        >
          {/* flex-grow  max-h-[250px] */}
          {description}
        </p>

        {showScrollText && (
          <div className="absolute right-0 bottom-0 rotate-90 -translate-y-[500%] translate-x-[20%]">
            <p className="before:content-[''] before:h-[1px] before:w-11 before:mr-3 flex items-center before:bg-stone-950">
              {scrollText}
            </p>
          </div>
        )}
      </div>
      <a
        href="#"
        className="inline-block px-6 py-2 text-white bg-customTeal transition-all hover:bg-customTeal-accent hover:-translate-y-1 hover:scale-110 rounded-3xl"
      >
        View Project
      </a>
    </>
  );
};

export default ProjectCard;
