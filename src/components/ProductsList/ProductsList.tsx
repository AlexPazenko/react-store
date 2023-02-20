import React from 'react';
import Flex from "../Flex";
import {CircularProgress} from "@mui/material";
import {IProduct} from "../../models/models";
import ProductItem from "../ProductItem";

interface ProductsList {
  products: IProduct[]
  isLoading: boolean
  productsNum: number
  authenticated: boolean
}

const ProductsList = (props: ProductsList) => {

  return (
    <>
      {!props.isLoading &&
        <Flex justify="center" wrap="wrap" width="100%" margin="30px 0">
          <div>Products were found: {props.productsNum}</div>
        </Flex>
      }
      {props.isLoading
        ? <CircularProgress color="secondary"/>
        : props.products
          ? (
            props.products.map((product: IProduct) => (
              <ProductItem product={product} key={product.id} authenticated={props.authenticated}/>
            ))
          )
          : (<div>No items</div>)
      }
    </>
  );
};

export default ProductsList;