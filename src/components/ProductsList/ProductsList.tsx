import React, {RefObject, useEffect, useState} from 'react';
import Flex from "../Flex/Flex";
import {CircularProgress, Pagination, PaginationItem} from "@mui/material";
import {IProduct} from "../../models/models";
import ProductItem from "../ProductItem/ProductItem";
import {Link, useLocation} from "react-router-dom";
//import queryString from "query-string";

interface ProductsList {
  products: IProduct[]
  isLoading: boolean
  limit: number
  searchRef: RefObject<HTMLInputElement>
}

const ProductsList = (props: ProductsList) => {

  const location = useLocation();
//  const query = queryString.parse(location.search);
//  const searchCurrentPage = (typeof query.page === "string") ? parseInt(query.page) : 1;

//  const [currentPage, setCurrentPage] = useState<number>(searchCurrentPage);

  const queryParams = new URLSearchParams(location.search);
  const searchCurrentPage = parseInt(queryParams.get('page') ?? '') || 1;
  // Define data for pager.
  const [currentPage, setCurrentPage] = useState<number>(searchCurrentPage);


  const [currentProducts, setCurrentProducts] = useState<IProduct[]>(props.products);

  useEffect(() => {
    setCurrentPage(searchCurrentPage);
    const lastProductIndex = currentPage * props.limit;
    const firstProductIndex = lastProductIndex - props.limit;
    setCurrentProducts(props.products.slice(firstProductIndex, lastProductIndex));

  }, [props.products, currentPage]);


  return (
    <>
      {!props.isLoading &&
        <Flex justify="center" wrap="wrap" width="100%" margin="30px 0">
          <div>Products were found: {props.products.length}</div>
        </Flex>
      }
      {props.isLoading
        ? <CircularProgress color="secondary"/>
        : props.products
          ? (
            currentProducts.map((product: IProduct) => (
              <ProductItem product={product} key={product.id}/>
            ))
          )
          : (<div>No items</div>)
      }

      {props.products.length > props.limit &&
        <Flex justify="center" wrap="wrap" width="100%" margin="20px 0">
          <Pagination
            count={Math.ceil(props.products.length / props.limit)}
            page={currentPage}
            color="primary"
            variant="outlined"
            showFirstButton
            showLastButton
            onChange={(event, num) => {
              props.searchRef?.current?.scrollIntoView({behavior: 'smooth'});
              setCurrentPage(num);
            }}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/products?page=${item.page ?? 1}`}
                {...item}
              />
            )}
          />
        </Flex>
      }

    </>
  );
};

export default ProductsList;