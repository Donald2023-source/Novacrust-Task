import { StaticImageData } from "next/image";

export interface data {
  name: string;
  code: string;
  icon: StaticImageData;
}
export interface PropsType {
  data: data[];
  initialState: string;
  isSearch: boolean;
  text: string;
}
