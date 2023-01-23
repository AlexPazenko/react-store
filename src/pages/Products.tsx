import React, {useEffect, useRef, useState} from 'react';
import {IProduct} from "../models/models";
import Flex from "../components/Flex/Flex";
import {useGetProductsQuery} from "../store/fakestore/fakestore.api";
import Sidebar from "../components/UI/sidebar/Sidebar";
import {TextField} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import { SelectChangeEvent } from '@mui/material/Select';
import ProductsList from "../components/ProductsList/ProductsList";


const Products = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const {isLoading, data} = useGetProductsQuery(20);
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [selectedCategories, setSelectedCategories] = useState<Map<string, boolean>>(new Map());
  const [productsLimit, setProductsLimit] = useState<number>(8);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    handleFilters();
  }, [searchQuery, selectedCategories, data, productsLimit]);


  function changeCategory(e: React.ChangeEvent<HTMLInputElement>) {
    const updatedCategories = new Map(selectedCategories);

    if (updatedCategories?.get(e.target.id)) {
      updatedCategories?.set(e.target.id, false);
    } else {
      updatedCategories?.set(e.target.id, true);
    }

    setSelectedCategories(updatedCategories);

  }

  function changeProductsLimit(e: SelectChangeEvent<number>) {
    if (data !== undefined) {
      setProductsLimit(typeof (e.target.value) === 'number' ? e.target.value : data.length);
    }
  }


  // Filters are arranged by priority.
  function handleFilters() {
    if (data === undefined) return;
    let filteredProducts = [...data];

    // Filter products by categories.
    const valuesOfCategories = [...selectedCategories.values()];
    if (selectedCategories.size && valuesOfCategories.includes(true)) {
      filteredProducts = filteredProducts.filter(product => {
        return selectedCategories.get(product.category);
      });
    }

      // Filter products by title.
      if (searchQuery.length > 2) {
        filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
      }
      setSearchParams({page: '1'});
      setProducts(filteredProducts);

  }

  return (
    <Flex justify="flex-start" wrap="wrap">
      <Flex justify="flex-start" wrap="wrap" maxWidth="30%" width="100%" margin="15px 15px 15px 0">
        <Sidebar
          changeCat={changeCategory}
          selectedCategories={selectedCategories}
          changeLimit={changeProductsLimit}
          productsNumber={data !== undefined ?data.length: 8}
          limit={productsLimit}
        />
      </Flex>

      <Flex justify="flex-start" wrap="wrap" maxWidth="67%" margin="15px 0 15px 15px">
        <>
          <Flex justify="flex-start" wrap="wrap" width="100%">
            <TextField
              id="search-input"
              label="Search"
              variant="outlined"
              onChange={e => setSearchQuery(e.target.value)}
              value={searchQuery}
              ref={searchRef}
              fullWidth
            />
          </Flex>

          <ProductsList
            isLoading={isLoading}
            products={products}
            limit={productsLimit}
            searchRef={searchRef}
          />

        </>
      </Flex>
    </Flex>
  );
};

export default Products;