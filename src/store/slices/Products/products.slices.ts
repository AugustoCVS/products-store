import { CategoryType, ProductProps } from "@/services/interfaces/products";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialProductsListState: ProductProps[] = [];
const initialProductState: ProductProps = {
  id: 0,
  title: "",
  description: "",
  category: "" as unknown as CategoryType,
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  tags: [],
  brand: "",
  sku: "",
  weight: 0,
  dimensions: {
    width: 0,
    height: 0,
    depth: 0,
  },
  warrantyInformation: "",
  shippingInformation: "",
  availabilityStatus: "",
  reviews: [],
  returnPolicy: "",
  minimumOrderQuantity: 0,
  meta: {
    createdAt: new Date,
    updatedAt: new Date,
    barcode: "",
    qrCode: "",
  },
  images: [],
  thumbnail: "",
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    productsList: initialProductsListState,
    product: initialProductState,
  },
  reducers: {
    setProductsList: (state, action: PayloadAction<ProductProps[]>) => {
      state.productsList = action.payload;
    },

    setProduct: (state, action: PayloadAction<ProductProps>) => {
      state.product = action.payload;
    },

    filterByRating: (state, action: PayloadAction<string>) => {
      if (action.payload === "") {
        state.productsList = initialProductsListState 
        return;
      }
    
      const ratingValue = parseFloat(action.payload);
      const minRating = ratingValue;
      const maxRating = ratingValue + 1;
    
      state.productsList = state.productsList.filter((product) => product.rating >= minRating && product.rating < maxRating);
    },
  },
});

export const { setProductsList, setProduct, filterByRating } = productSlice.actions;

export default productSlice.reducer;
