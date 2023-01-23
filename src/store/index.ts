import {configureStore} from '@reduxjs/toolkit';
import {fakestoreApi} from "./fakestore/fakestore.api";

export const store = configureStore({
  reducer: {
    [fakestoreApi.reducerPath]: fakestoreApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(fakestoreApi.middleware)
});
