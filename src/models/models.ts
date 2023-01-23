import {ReactElement} from "react";

export interface IProductRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  rating: IProductRating;
}

export interface IFlex {
  children: ReactElement | ReactElement[];
  direction?: string | undefined;
  align?: string | undefined;
  justify?: string | undefined;
  wrap?: string | undefined;
  className?: string | undefined;
  margin?: string | undefined;
  maxWidth?: string | undefined;
  width?: string | undefined;
}

export interface IMyBtn {
  children?: string;
  align?: string;
  primary?: boolean;
  outlined?: boolean;
  color?: string;
  background?: string;
  margin?: string | undefined;
}

