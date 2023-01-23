import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IProduct} from "../../models/models";


export const fakestoreApi = createApi({
  reducerPath: 'fakestore/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/'
  }),
  endpoints: build => ({
    getProducts: build.query<IProduct[], number>({
      query: (limit:number) => ({
        url: 'products',
        params: {
          limit: limit
        }
      })
    }),
    getProductById: build.query<IProduct, number>({
      query: (id:number) => ({
        url: 'products/'+id,
      })
    }),
    getCategories: build.query<string[], string>({
      query: () => ({
        url: 'products/categories',
      })
    }),
  })
});

export const {useGetProductsQuery, useGetProductByIdQuery, useGetCategoriesQuery} = fakestoreApi;