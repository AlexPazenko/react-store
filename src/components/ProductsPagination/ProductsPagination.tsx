import React, {RefObject} from 'react';
import Flex from "../Flex";
import {Pagination, PaginationItem} from "@mui/material";
import {Link} from "react-router-dom";

interface ProductsPagination {
  limit: number,
  productsNum: number,
  currentPage: number,
  searchRef: RefObject<HTMLInputElement>,
  changePage: (num: number, skip: number) => void
}

const ProductsPagination = (props: ProductsPagination) => {

  return (
    <>
    { props.productsNum > props.limit &&
        <Flex justify="center" wrap="wrap" width="100%" margin="20px 0">
          <Pagination
            count={Math.ceil(props.productsNum / props.limit)}
            page={props.currentPage}
            color="primary"
            variant="outlined"
            showFirstButton
            showLastButton
            onChange={(event, num) => {
              props.searchRef?.current?.scrollIntoView({behavior: 'smooth'});
              props.changePage(num, (num - 1) * props.limit);
            }}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/products?limit=${props.limit}&skip=${item.page ? (item.page - 1) * props.limit : 0}`}
                {...item}
              />
            )}
          />
        </Flex>
      }
    </>
  );
};

export default ProductsPagination;