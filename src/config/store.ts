import { configureStore } from "@reduxjs/toolkit";
import productReducers from "../slices";

export const store = configureStore({
  reducer: {
    products: productReducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
//export type RootState = Omit<ReturnType<typeof store.getState>, "products">;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
