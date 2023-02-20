import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {APIResponseProducts, IProduct, ReceivedProducts} from "../../models/models";


export const dummystoreApi = createApi({
  reducerPath: 'dummystore/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  endpoints: build => ({
    getProducts: build.query<APIResponseProducts, ReceivedProducts>({
      query: (params: ReceivedProducts) => ({
        url:  params.categoryName !== 'all'
          ? 'products/category/'+params.categoryName
          : params.searchQuery !== ''
            ? 'products/search'
            :'products',
        params:
          params.categoryName !== 'all'
            ? {}
            : params.searchQuery !== ''
              ? {q: params.searchQuery}
              : { limit: params.limit, skip: params.skip}
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

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
} = dummystoreApi;