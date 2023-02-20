import React, {useEffect, useState} from 'react';
import Flex from "../../Flex";
import {StyledSidebar} from "./StyledSidebar.styled";
import {useGetCategoriesQuery} from "../../../api/dummystore/dummystore.api";
import {capitalize} from "../../../utils/capitalize";
import {FormControl} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';

interface Sidebar {
  changeCategory: (e: SelectChangeEvent<string>) => void
  selectedCategory: string
  changeLimit: (e: SelectChangeEvent<number>) => void
  productsNumber: number
  limit: number
}

const Sidebar = (props: Sidebar) => {
  const {isLoading, isError, data:downloadedCategories} = useGetCategoriesQuery('dfgsfg');
  const [categories, setCategories] = useState<string[] | []>([]);

  useEffect(() => {
    if (downloadedCategories != undefined) {
      setCategories(downloadedCategories);
    }
  }, [downloadedCategories]);


  return (
    <StyledSidebar>
      <Flex justify="flex-start" wrap="wrap" direction="column">
        <>
        {isError && <p style={{color: "red"}}>Something went wrong...</p>}
        {isLoading && <p style={{color: "red"}}>Loading...</p>}
      <Flex justify="flex-start" wrap="wrap" width="100%" margin="30px 0 20px">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{capitalize('categories')}</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={props.selectedCategory}
            label="Categories"
            onChange={props.changeCategory}
          >
            {categories.map((category: string, index: number) => (
              <MenuItem value={category} key={'category-' + index}>{capitalize(category)}</MenuItem>
              )
            )}
            <MenuItem value='all' key='category-21' >All</MenuItem>
          </Select>
        </FormControl>
      </Flex>

          <Flex justify="flex-start" wrap="wrap" width="100%" margin="30px 0 20px">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Number of products on the page</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.limit}
                label="Number of products on the page"
                onChange={props.changeLimit}
              >
                <MenuItem value={6}>Six</MenuItem>
                <MenuItem value={8}>Eight</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={12}>Twelve</MenuItem>
                <MenuItem value={100}>All</MenuItem>
              </Select>
            </FormControl>
          </Flex>
        </>
      </Flex>
    </StyledSidebar>
  );
};

export default Sidebar;