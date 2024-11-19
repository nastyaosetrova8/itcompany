import { StaticImageData } from "next/image";

export interface IPropsProjectItem {
  id?: string;
  title?: string;
  description?: string;
  scrollText: string;
  src?: string | StaticImageData;
  alt?: string;
}

export interface IContacts {
  title?: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderMessage: string;
  required: string;
  requiredName: string;
  requiredEmail: string;
  requiredMessage: string;
  acceptTerms?: string;
  button: string;
}
