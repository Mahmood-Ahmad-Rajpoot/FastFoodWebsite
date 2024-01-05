import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
  productQuantity: 0,
};
const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setProductQuantity: (state, action) => {
      const p = state.products.find(
        (item) => item.product.id === action.payload
      );
      console.log("foundLL:", p);
      if (p) state.productQuantity = p.quantity;
      else state.productQuantity = 0;
    },
    addToCart: (state, action) => {
      const { product, instructions, unAvailable, quantity } = action.payload;
      // if(state.products.find(p => p.id === product.id))
      if (state.products.find((item) => item.product.id === product.id)) {
        state.products.map((p) => {
          // console.log("pppppp", p.quantity);
          if (p.product.id === product.id) {
            p.quantity += quantity;
          }
        });
      } else {
        state.products.push({
          product: product,
          quantity: quantity,
          instruction: instructions,
          unAvailable: unAvailable,
        });
      }

      state.quantity += quantity;
      state.total += quantity * product.price;
    },
    addOne: (state, action) => {
      let price = 0;
      let count = 0;
      state.products.map((p) => {
        console.log("pppppp", p.quantity);
        if (p.product.id === action.payload) {
          p.quantity += 1;
          state.total += p.product.price;
          state.quantity += 1;
        }
      });
      // console.log((state.quantity += count));
      // state.total += price;
    },
    minusOne: (state, action) => {
      state.products.map((p) => {
        // console.log("pppppp", p.quantity);
        if (p.product.id === action.payload) {
          p.quantity -= 1;
          state.total -= p.product.price;
          state.quantity -= 1;
        }
      });
    },
    removeFromCart: (state, action) => {
      const p = state.products.find(
        (item) => item.product.id === action.payload
      );
      state.quantity -= p.quantity;
      state.total -= p.quantity * p.product.price;

      const filteredProducts = state.products.filter(
        (item) => item.product.id !== action.payload
      );
      state.products = filteredProducts;
      //   state.quantity -= item.quantity;
      //   state.total -= item.quantity * item.product.price;
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  addOne,
  minusOne,
  setProductQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
