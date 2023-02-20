import {ReactElement} from "react";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface APIResponseProducts {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface ReceivedProducts {
  limit: number;
  skip: number;
  categoryName: string;
  searchQuery: string;
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

export interface IButton {
  children?: string;
  align?: string;
  primary?: boolean;
  outlined?: boolean;
  color?: string;
  background?: string;
  margin?: string | undefined;
}

export interface IAuthRegister {
  firstName: string;
  lastName: string;
  age: number;
  username: string;
  password: string;
}

export interface IAuthLogin {
  username: string
  password: string
}

export interface IAuthResponse {
  access: string
  refresh: string
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}