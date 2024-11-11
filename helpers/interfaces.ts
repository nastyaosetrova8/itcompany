import { StaticImageData } from "next/image";

export interface IPropsProjectItem {
  id?: string;
  title?: string;
  description?: string;
  scrollText: string;
  src?: string | StaticImageData;
  alt?: string;
}
