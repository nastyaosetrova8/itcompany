// import { IGeneral, IServices } from "@/helpers/interfaces";
import React from "react";

interface Props {
  //   t: (key: string) => string;
  //   t2: IGeneral;
  title: string;
  description: string;
}

const ServicesDescription: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="xl:max-w-[700px] w-full rounded-3xl pb-12 ">
      {/* bg-neutral-100 */}
      {/* <div className="w-full h-full px-16 pt-16 pb-40 "> */}
      {/* <h1 className="titleCl">{t("title") || ""}</h1> */}
      <p className="titleCl">{title}</p>
      <div className="overflow-y-auto scroll-containerCl">
        <p className="descriptionCl">{description}</p>
      </div>
      {/* </div> */}
      {/* <div className="absolute right-0 bottom-0 rotate-90 -translate-y-[500%] translate-x-[20%]">
        <p className="before:content-[''] before:h-[1px] before:w-11 before:mr-3 flex items-center before:bg-stone-950">
          {tGeneral("scroll") || ""}
        </p>
      </div> */}
    </div>
  );
};

export default ServicesDescription;
