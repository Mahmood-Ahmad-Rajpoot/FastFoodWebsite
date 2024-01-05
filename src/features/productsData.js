import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productData = createSlice({
  name: "productData",
  initialState, // Placing initialState here within the object
  reducers: {
    setProductsData: (state, action) => {
      action.payload.forEach((p) => {
        state.products.push({ product: p, quantity: 0 });
      });
    },
    setCartQuantity: (state, action) => {
      const { id, quantity, add } = action.payload;
 console.log(id);
      state.products.forEach((p) => {
        if (p.product.idCategory == id && add === true) {
           p.quantity += quantity;
        } else if (p.product.idCategory == id && add === false) {
            console.log('yeeseeses');
          p.quantity -= quantity;
        }
      });
    },
  },
});

export const { setProductsData, setCartQuantity } = productData.actions;
export default productData.reducer;
