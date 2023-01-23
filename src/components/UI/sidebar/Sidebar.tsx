import React, {useEffect, useState, ChangeEvent} from 'react';
import Flex from "../../Flex/Flex";
import {StyledSidebar} from "./StyledSidebar.styled";
import {useGetCategoriesQuery} from "../../../store/fakestore/fakestore.api";
import {capitalize} from "../../../utils/capitalize";
import Checkbox from "../checkbox/Checkbox";
import {FormControl} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';

interface Sidebar {
  changeCat: (e: React.ChangeEvent<HTMLInputElement>) => void
  changeLimit: (e: SelectChangeEvent<number>) => void
  selectedCategories: Map<string, boolean>
  productsNumber: number
  limit: number
}

const Sidebar = (props: Sidebar) => {
  const {isLoading, isError, data} = useGetCategoriesQuery('dfgsfg');
  const [categories, setCategories] = useState<string[] | []>([]);

  useEffect(() => {
    if (data != undefined) {
      setCategories(data);
    }
  }, [data]);


  return (
    <StyledSidebar>
      <Flex justify="flex-start" wrap="wrap" direction="column">
        <>
          {isError && <p style={{color: "red"}}>Something went wrong...</p>}
          {isLoading && <p style={{color: "red"}}>Loading...</p>}
          <h4>{capitalize('categories')}</h4>
          {categories.map((category: string, index: number) => (
              <label key={index + category} style={{marginTop: "10px"}}>
                <Checkbox
                  id={category}
                  onChange={props.changeCat}
                  checked={!!props.selectedCategories?.get(category)}
                />
                {capitalize(category)}
              </label>
            )
          )}

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
                <MenuItem value={props.productsNumber}>All</MenuItem>
              </Select>
            </FormControl>
          </Flex>
        </>
      </Flex>
    </StyledSidebar>
  );
};

export default Sidebar;