import React, {useState} from 'react';
import {IProduct} from "../../models/models";
import Flex from "../Flex/Flex";
import MyBtn from "../UI/button/MyBtn";
import {StyledProductItem} from "./StyledProductItem.syled";
import {LinkMyBtn} from "../../styles/LinkMyBtn.styled";
import {Link} from "react-router-dom";
import Rating from '@mui/material/Rating';

const ProductItem = ({product}: { product: IProduct }) => {

  if(product.description != undefined) {
    (product.description.length > 20) ? product.description.slice(0, 20) + '...' : product.description;
  }

  const [value, setValue] = React.useState<number | null>(product.rating.rate);


  return (
    <>
      <StyledProductItem>
        <Flex justify="center" align="center" wrap="wrap" className="product-image-wrapper">
          <Link to={`${product.id}`}>
            <img className="product__image" src={product.image} alt={product.title}/>
          </Link>
        </Flex>

        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />

        <strong>{product.title}</strong>
        <Flex justify="space-between" wrap="wrap" margin="10px 0">
          <div className="product__price">${product.price}</div>
          <Flex justify="space-between" wrap="wrap">
            <LinkMyBtn to={`${product.id}`} margin="0 15px 0 0">Open</LinkMyBtn>
            <MyBtn outlined >Add</MyBtn>
          </Flex>
        </Flex>
        {product.description &&
        <div className="product__description">{(product.description.length > 110) ? product.description.slice(0, 110) + '...' : product.description}
        </div>
        }
        {product.description &&
          <Flex justify="flex-start" wrap="wrap" margin="10px 0">
            <div>{product.category}</div>
          </Flex>
        }
      </StyledProductItem>
    </>
  );
};

export default ProductItem;