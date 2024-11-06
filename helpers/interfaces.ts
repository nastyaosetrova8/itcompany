import { StaticImageData } from "next/image";

export interface IPropsProjectItem {
  id?: string;
  title?: string;
  description?: string;
  src?: string | StaticImageData;
  alt?: string;
}
