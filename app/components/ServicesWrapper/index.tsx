"use client";

import { IGeneral, IServices } from "@/helpers/interfaces";
import { useServiceLogic } from "@/helpers/useServiceLogic";
import ServicesDescription from "../ServicesDescription";
import Image from "next/image";

type Props = {
  //   t: (key: string) => string;
  //   t2: IGeneral;
  services: IServices[];
};

const ServicesWrapper: React.FC<Props> = ({ services }) => {
  const { handleClick, foundService } = useServiceLogic(services);

  return (
    <div className="xl:container flex justify-center items-center gap-12 h-[70%] w-[90%] xl:pl-14 xl:pr-14  rounded-3xl ">
      {/* bg-green-200 */}
      {/* className="xl:container absolute top-[50%] -translate-y-[50%] left-[6%] flex gap-11 justify-between h-[70%] w-[90%]  z-10" */}
      <div className="xl:max-w-[700px] w-full xl:max-h-[700px] h-full py-12 px-12 bg-neutral-100 rounded-3xl overflow-hidden">
        <ul className="flex gap-3 pb-12">
          {services.map(
            (service) =>
              service.id !== undefined && (
                <li key={service.id}>
                  <button
                    className="inline-block px-6 py-2 text-white bg-customTeal transition-all hover:bg-customTeal-accent hover:-translate-y-1 hover:scale-110 rounded-3xl"
                    type="button"
                    onClick={() => handleClick(service.id!)}
                  >
                    {service.id}
                  </button>
                </li>
              )
          )}
        </ul>

        {/* <div className="absolute left-[6%] xl:max-w-[700px] w-full xl:max-h-[700px] h-full bg-neutral-100 rounded-3xl z-10"></div> */}

        {/* <ul className="xl:h-[388px] py-10 px-14 bg-white rounded-3xl">
              {services.map((service) => (
                <li key={service.id}> */}

        <ServicesDescription
          title={foundService?.title || ""}
          description={foundService?.description || ""}
        />

        {/* </li>
              ))}
            </ul> */}
      </div>
      <div className="relative flex xl:max-w-[700px] w-full xl:max-h-[700px] h-full rounded-3xl overflow-hidden">
        {foundService?.src && (
          <Image
            src={foundService?.src}
            alt={foundService?.alt || ""}
            fill={true}
            sizes="(max-width: 1439.98px) 365px, 405px"
          />
        )}
      </div>
    </div>
  );
};

export default ServicesWrapper;
