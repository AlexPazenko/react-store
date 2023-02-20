import {AppDispatch} from "../api";
import axios from "axios";
import {IAuthLogin, IAuthRegister, IAuthResponse} from "../models/models";
import {authSlice} from "./slices/authSlice";


export const register = (data: IAuthRegister) => {
  return async(dispatch: AppDispatch) => {
    try {
      const response = await axios.post<IAuthResponse>(`https://dummyjson.com/users/add`, data);
      dispatch(authSlice.actions.login({
        username: response.data.username,
        id: response.data.id,
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        gender: response.data.gender,
        image: response.data.image,
        token: response.data.token,
      }));
    } catch (e) {
      console.log('Error register', e);
    }
  };
};

export const login = (data: IAuthLogin) => {
  return async(dispatch: AppDispatch) => {
    try {
      const response = await axios.post<IAuthResponse>(`https://dummyjson.com/auth/login`, data);
      dispatch(authSlice.actions.login({
        username: response.data.username,
        id: response.data.id,
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        gender: response.data.gender,
        image: response.data.image,
        token: response.data.token,
      }));
    } catch (e) {
      console.log('Error Login', e);
    }
  };
};