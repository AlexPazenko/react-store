import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IProduct} from "../models/models";
import {useGetProductByIdQuery} from "../store/fakestore/fakestore.api";

const ProductPage: React.FC = () => {
  const params = useParams();
  const {isLoading, isError, data} = useGetProductByIdQuery(Number(params.id));
  const [product, setProduct] = useState<IProduct | object>({});

  useEffect(() => {
    if (data != undefined) {
      setProduct(data);
    }
  },[data]);
  return (
    <div>
      {isError && <p style={{color: "red"}}>Something went wrong...</p>}
      {isLoading && <p style={{color: "red"}}>Loading...</p>}

    </div>
  );
};

export default ProductPage;