import ServicesDescription from "@/app/components/ServicesDescription";
import ServicesImage from "@/app/components/ServicesImage";
import { IServices } from "@/helpers/interfaces";
import { link } from "fs";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";

type Props = {
  params: { locale: string };
};

const ServicesPage: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("Services");
  const tGeneral = await getTranslations("General");
  const services = Object.values(t.raw("list")) as IServices[];

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-300">
      <div className="flex items-center h-screen xl:max-w-[90%] w-full bg-[url('/images/containerBGSecondary3.webp')] bg-cover bg-center bg-no-repeat">
        {/* justify-end */}
        <div className="xl:container flex justify-center items-center h-[70%] w-[90%] xl:pl-14 xl:pr-14 bg-green-200 rounded-3xl ">
          {/* className="xl:container absolute top-[50%] -translate-y-[50%] left-[6%] flex gap-11 justify-between h-[70%] w-[90%]  z-10" */}
          {/* 
          <div className="absolute left-[6%] xl:max-w-[700px] w-full xl:max-h-[700px] h-full bg-neutral-100 rounded-3xl z-10"></div> */}

          {/* <ul className="xl:h-[388px] py-10 px-14 bg-white rounded-3xl">
            {services.map((service) => (
              <li key={service.id}>
                <ServicesDescription
                  t={t}
                  title={service.title || ""}
                  description={service.description || ""}
                  tGeneral={tGeneral}
                />
              </li>
            ))}
          </ul> */}
          {/* <ServicesImage t={t} /> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
