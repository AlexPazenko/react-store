import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../features/slices/authSlice';
import {dummystoreApi} from "./dummystore/dummystore.api";

export const store = configureStore({
    reducer: {
      authReducer,
      [dummystoreApi.reducerPath]: dummystoreApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(dummystoreApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;