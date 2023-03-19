import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../config/store";
import { Product } from "../sections/dashboard/products";
import { getProducts } from "../services/fetchProducts";
import { ProductsResponse } from "../services/ProductsApiResponse";

//const productsAdapter = createEntityAdapter<Product>();
type fetchProductsError = {
  message: string;
};

type ProductsState = {
  status: "loading" | "idle";
  error: string | null;
  products: Product[];
};

const initialState: ProductsState = {
  products: [],
  error: null,
  status: "idle",
};

export const listProducts = createAsyncThunk<
  Product[],
  undefined,
  { rejectValue: fetchProductsError }
>("products/listProducts", async (undefined, thunkApi) => {
  const response = await getProducts();

  if (response.status === 400) {
    return thunkApi.rejectWithValue(
      (await response.json()) as fetchProductsError
    );
  }

  return (await response.json()) as Product[];
});

export const selectStatus = (state: RootState) => state.products.status;

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listProducts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(listProducts.fulfilled, (state, { payload }) => {
      state.products.push(...payload);
      state.status = "idle";
    });
    builder.addCase(listProducts.rejected, (state, action) => {
      if (action.payload) state.error = action.payload.message;
      state.status = "idle";
    });
  },
});

export default productSlice.reducer;
