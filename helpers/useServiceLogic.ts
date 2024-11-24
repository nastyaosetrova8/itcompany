import { useState } from "react";
import { IServices } from "./interfaces";

export const useServiceLogic = (services: IServices[]) => {
  const [selectedServiceItem, setSelectedServiceItem] = useState<number>(1);

  const handleClick = (id: number) => {
    setSelectedServiceItem(id);
  };
  const findService = () => {
    return services.find(
      (serviceItem) =>
        serviceItem.id !== undefined && serviceItem.id === selectedServiceItem
    );
  };
  const foundService = findService();

  if (!foundService) {
    console.error("Service not found!");
  }

  return {
    selectedServiceItem,
    setSelectedServiceItem,
    handleClick,
    foundService,
  };
};
