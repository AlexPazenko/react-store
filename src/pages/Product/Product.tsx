import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IProduct} from "../../models/models";
import {useGetProductByIdQuery} from "../../api/dummystore/dummystore.api";
import {Button, Grid, Typography} from "@mui/material";
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useAppSelector} from "../../hooks/redux";

const Product: React.FC = () => {
  const params = useParams();
  const {isLoading, isError, data} = useGetProductByIdQuery(Number(params.id));
  const [product, setProduct] = useState<IProduct >();
  const [value, setValue] = React.useState<number | null>(0);
  const [num, setNum] = useState<number>(1);
  const {isAuthenticated} = useAppSelector(state => state.authReducer);

  const incNum = () => setNum(Number(num)+1);
  const decNum = () => {
    if(num > 1) setNum(num - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const value = Number(event.target.value);
    if(value > 0) setNum(value);
  };

  useEffect(() => {
    if (data != undefined) {
      setProduct(data);
      setValue(data.rating);
    }
  },[data]);
  return (
    <div>
      {isError && <p style={{color: "red"}}>Something went wrong...</p>}
      {isLoading && <p style={{color: "red"}}>Loading...</p>}

      {product &&
      <Grid container spacing={4} sx={{my: '20px'}}>
        <Grid item xs={12} md={6}>
          <img src={product.thumbnail} alt={product.title} />
        </Grid>
        <Grid item xs={12} md={6}>

          <Typography variant="h2">{product.title}</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography variant="h4" sx={{mb: '5px'}}>${product.price}</Typography>

          <Typography variant="h6" style={{ lineHeight: "24px" }} sx={{mb: '20px'}}>{product.description}</Typography>
          <Grid item xs={12}>
            <Button size="small" variant="outlined" onClick={decNum} style={{minWidth: "26px"}}>-</Button>
            <input type="number"
                   className="form-control"
                   value={num}
                   style={{maxWidth:"50px", minHeight: "30px", margin: "0px 5px" }}
                   onChange={e => handleChange(e)}/>
            <Button size="small" variant="outlined" onClick={incNum} style={{minWidth: "20px"}} >+</Button>

            <Button
              variant="outlined"
              startIcon={<AddShoppingCartIcon />}
              sx={{ml: '10px'}}
              style={{maxHeight: "33px"}}
              disabled={!isAuthenticated}>{!isAuthenticated ?'Please login to add this':'Add To Cart'}
            </Button>
          </Grid>

          <Typography variant="h6" style={{ lineHeight: "24px" }} sx={{my: '20px'}}>Category: {product.category}</Typography>

        </Grid>
      </Grid>
      }
    </div>
  );
};

export default Product;