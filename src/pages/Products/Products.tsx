import React, {useEffect, useRef, useState} from 'react';
import {IProduct} from "../../models/models";
import Flex from "../../components/Flex";
import {useGetProductsQuery} from "../../api/dummystore/dummystore.api";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import {TextField} from "@mui/material";
import {useLocation, useSearchParams} from "react-router-dom";
import {SelectChangeEvent} from '@mui/material/Select';
import ProductsList from "../../components/ProductsList";
import ProductsPagination from "../../components/ProductsPagination";
import {useDebounce} from "../../hooks/useDebounce";
import {useAppSelector} from "../../hooks/redux";


const Products = () => {
  const {search} = useLocation();

  const queryParams = new URLSearchParams(search);
  const searchCurrentPage = parseInt(queryParams.get('page') ?? '') || 1;

  const {isAuthenticated} = useAppSelector(state => state.authReducer);

  const [currentPage, setCurrentPage] = useState<number>(searchCurrentPage);
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [productsLimit, setProductsLimit] = useState<number>(8);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const debounced = useDebounce(searchQuery, 500);
  const searchRef = useRef<HTMLInputElement>(null);
  const [skipNumber, setSkipNumber] = useState<number>(0);
  const {isLoading, data: receivedProducts} = useGetProductsQuery({
    limit: productsLimit,
    skip: skipNumber,
    categoryName: selectedCategory,
    searchQuery: debounced
  });
  const [productsTotalNumber, setProductsTotalNumber] = useState<number>(0);

  useEffect(() => {
    if (receivedProducts) {
      setProducts(receivedProducts.products);
      setProductsTotalNumber(receivedProducts.total);
    }
    if(!skipNumber) setSearchParams({});
  }, [receivedProducts]);

  function changeCategory(e: SelectChangeEvent<string>) {
    setSelectedCategory(e.target.value);
    e.target.value !== 'all' ? setSearchParams({category: e.target.value}) : setSearchParams({});
  }

  function changeProductsLimit(e: SelectChangeEvent<number>) {
    const limit = typeof (e.target.value) === 'number' ? e.target.value : 8;
    setProductsLimit(limit);
    setSkipNumber(0);
    setCurrentPage(1);
  }

  function changePage(num: number, skip: number) {
    setSkipNumber(skip);
    setCurrentPage(num);
  }

  function changeSearchQuery(query: string) {
    query.length > 0 ? setSearchParams({q: query}) : setSearchParams({});
    setSkipNumber(0);
    setCurrentPage(1);
    setSearchQuery(query);
  }

  return (
    <Flex justify="flex-start" wrap="wrap">
      <Flex justify="flex-start" wrap="wrap" maxWidth="30%" width="100%" margin="15px 15px 15px 0">
        <Sidebar
          changeCategory={changeCategory}
          selectedCategory={selectedCategory}
          changeLimit={changeProductsLimit}
          productsNumber={productsTotalNumber}
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
              onChange={e => changeSearchQuery(e.target.value)}
              value={searchQuery}
              ref={searchRef}
              fullWidth
            />
          </Flex>

          <ProductsList
            isLoading={isLoading}
            products={products}
            productsNum={productsTotalNumber}
            authenticated={isAuthenticated}
          />
          {!searchQuery &&
            <ProductsPagination
              limit={productsLimit}
              productsNum={productsTotalNumber}
              currentPage={currentPage}
              searchRef={searchRef}
              changePage={changePage}
            />
          }
        </>
      </Flex>
    </Flex>
  );
};

export default Products;