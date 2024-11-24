import { IGeneral, IServices } from "@/helpers/interfaces";
import React from "react";

interface Props {
  t: (key: string) => string;
  title: string;
  description: string;
  tGeneral: (key: string) => string;
}

const ServicesDescription: React.FC<Props> = ({
  t,
  title,
  description,
  tGeneral,
}) => {
  return (
    <div className="xl:max-w-[700px] w-full xl:max-h-[700px] h-full bg-red-400  rounded-3xl z-10">
      {/* bg-neutral-100 */}
      <div className="w-full h-full px-16 pt-16 pb-40 overflow-y-auto scroll-containerCl">
        {/* <h1 className="titleCl">{t("title") || ""}</h1> */}
        <p className="titleCl">{title}</p>
        <p className="descriptionCl">{description}</p>
      </div>
      {/* <div className="absolute right-0 bottom-0 rotate-90 -translate-y-[500%] translate-x-[20%]">
        <p className="before:content-[''] before:h-[1px] before:w-11 before:mr-3 flex items-center before:bg-stone-950">
          {tGeneral("scroll") || ""}
        </p>
      </div> */}
    </div>
  );
};

export default ServicesDescription;
