import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  product:'',
};

const cartModal = createSlice({
  initialState,
  name: "CartModal",
  reducers: {
    setShow: (state, action) => {
      state.show = !state.show;
      state.product = action.payload
      console.log('product:',state.product); 
 
    },
  },
});

export const { setShow } = cartModal.actions;
export default cartModal.reducer;
