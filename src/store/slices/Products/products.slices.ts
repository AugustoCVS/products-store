import { ProductProps } from "@/services/interfaces/products";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ProductProps[] = [];	

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (_, action: PayloadAction<ProductProps[]>) => {
      return action.payload;
    }
  }
})

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;