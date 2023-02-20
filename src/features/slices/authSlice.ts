import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

const initialState: AuthState = {
  isAuthenticated: Boolean(localStorage.getItem('dc-token') ?? ''),
  username: localStorage.getItem('dc-username') ?? '',
  id: localStorage.getItem('dc-id') ?? '',
  email: localStorage.getItem('dc-email') ?? '',
  firstName: localStorage.getItem('dc-firstName') ?? '',
  lastName: localStorage.getItem('dc-lastName') ?? '',
  gender: localStorage.getItem('dc-gender') ?? '',
  image: localStorage.getItem('dc-image') ?? '',
  token: localStorage.getItem('dc-token') ?? '',
};

interface AuthPayload {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<AuthPayload>){
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
      state.token = action.payload.token;
      state.image = action.payload.image;
      state.isAuthenticated = Boolean(action.payload.token);
      localStorage.setItem('dc-username', action.payload.username);
      localStorage.setItem('dc-id', action.payload.id);
      localStorage.setItem('dc-email', action.payload.email);
      localStorage.setItem('dc-firstName', action.payload.firstName);
      localStorage.setItem('dc-lastName', action.payload.lastName);
      localStorage.setItem('dc-gender', action.payload.gender);
      localStorage.setItem('dc-token', action.payload.token);
      localStorage.setItem('dc-image', action.payload.image);
    },

    logout(state) {
      state.isAuthenticated = false;
      state.username = '';
      state.id = '';
      state.email = '';
      state.firstName = '';
      state.lastName = '';
      state.gender = '';
      state.token = '';
      state.image = '';
      localStorage.removeItem('dc-access');
      localStorage.removeItem('dc-username');
      localStorage.removeItem('dc-id');
      localStorage.removeItem('dc-email');
      localStorage.removeItem('dc-firstName');
      localStorage.removeItem('dc-lastName');
      localStorage.removeItem('dc-gender');
      localStorage.removeItem('dc-token');
      localStorage.removeItem('dc-image');
    },
  }
});

export default authSlice.reducer;