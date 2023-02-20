import React from 'react';
import {IProduct} from "../../models/models";
import Flex from "../Flex";
import {Button} from "@mui/material";
import {StyledProductItem} from "./StyledProductItem.styled";
import {LinkButton} from "../../styles/LinkButton.styled";
import {Link} from "react-router-dom";
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface Product {
  product: IProduct
  authenticated: boolean
}
const ProductItem = ( props: Product ) => {
  const product = props.product;

  if(product.description != undefined) {
    (product.description.length > 20) ? product.description.slice(0, 20) + '...' : product.description;
  }

  const [value, setValue] = React.useState<number | null>(product.rating);


  return (
    <>
      <StyledProductItem>
        <Flex justify="center" align="center" wrap="wrap" className="product-image-wrapper">
          <Link to={`${product.id}`}>
            <img className="product__image" src={product.thumbnail} alt={product.title}/>
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
            <>
            <LinkButton to={`${product.id}`} margin="0 15px 0 0">Open</LinkButton>
            {props.authenticated &&
            <Button variant="outlined"
                    startIcon={<AddShoppingCartIcon />}
                    sx={{ml: '10px'}}
                    style={{maxHeight: "33px"}} >Add</Button>
            }
            </>
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