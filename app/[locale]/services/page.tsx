import ServicesDescription from "@/app/components/ServicesDescription";
import ServicesImage from "@/app/components/ServicesImage";
import ServicesWrapper from "@/app/components/ServicesWrapper";
import { IServices } from "@/helpers/interfaces";
import { useServiceLogic } from "@/helpers/useServiceLogic";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import React from "react";

type Props = {
  params: { locale: string };
};

const ServicesPage: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("Services");
  const tGeneral = await getTranslations("General");
  const services = Object.values(t.raw("list")) as IServices[];

  //   const { handleClick, foundService } = useServiceLogic(services);
  // ------------------------------------------
  //   const [selectedServiceItem, setSelectedServiceItem] = useState(1);

  //   const handleClick = (id: number) => {
  //     setSelectedServiceItem(id);
  //   };
  // const findService = () => {
  //   return services.find(
  //     (serviceItem) =>
  //       serviceItem.id !== undefined && serviceItem.id === selectedServiceItem
  //   );
  // };
  // const foundService = findService();
  // if (!foundService) {
  //   console.error("Service not found!");
  // }

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-300">
      <div className="flex items-center h-screen xl:max-w-[90%] w-full bg-[url('/images/containerBGSecondary3.webp')] bg-cover bg-center bg-no-repeat">
        {/* justify-end */}
        <ServicesWrapper services={services} t={t} tGeneral={tGeneral} />
      </div>
    </section>
  );
};

export default ServicesPage;
