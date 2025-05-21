import { createSlice } from "@reduxjs/toolkit";
import { ProductI } from "../../components/cards/ProductGroup";

interface CartItem {
  product: ProductI;
  sum: number;
  qty: number;
}

interface CartState {
  items: CartItem[];
}
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // Add item to cart
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload?.id
      );
      if (existingItem) {
        existingItem.qty += 1;
        existingItem.sum += action.payload.price;
      } else {
        state.items.push({
          product: { ...action.payload },
          qty: 1,
          sum: action.payload.price,
        });
      }
    },
    // Remove item from cart (decrease quantity)
    removeItemFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload?.id
      );
      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1;
        existingItem.sum -= action.payload.price;
        return;
      }
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload.id
      );
    },
    //Remove product from cart
    removeProductFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload.id
      );
    },
    // Clear cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
