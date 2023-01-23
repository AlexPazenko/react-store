import {IProduct} from "../models/models";
import {useDebounce} from "./useDebounce";

interface sortedProducts {
  products: IProduct[]
  searchQuery: string
}

export const useSortProducts = (products: IProduct[] | undefined, searchQuery: string) => {
  if (products === undefined) return [];
  let filteredProducts = [...products];
  // Filter products by title.
  if (searchQuery.length > 2) {
    searchQuery = useDebounce(searchQuery, 4000);
    console.log('bla');
    filteredProducts = filteredProducts.filter(product => {
      if (product.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return product;
      } else {
        return false;
      }
    });
  }
  return filteredProducts;
};