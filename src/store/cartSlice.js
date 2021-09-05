import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, value) => {
      let idx = -1;
      state.value.map(function(v, i) {
        if (v.id === value.payload.id) {
          idx = i;
        }
        return null;
      });
      if (idx !== -1) {
        state.value[idx].total++;
      }
      else {
        value.payload.total = 1;
        state.value.push(value.payload);
      }
    },

    dec: (state, value) => {
      console.log('dec');
      let idx = -1;
      state.value.map(function(v, i) {
        if (v.id === value.payload.id) {
          idx = i;
        }
        return null;
      });
      if (state.value[idx].total > 1) {
        state.value[idx].total--;
      }
      else {
        let newValues = state.value.filter(v => v.id !== value.payload.id );
        state.value = newValues;
      }
    },

    remove: (state, value) => {
      let newValues = state.value.filter(v => v.id !== value.payload.id );
      state.value = newValues;
    }
  }
})

// Action creators are generated for each case reducer function
export const { add, dec, remove } = cartSlice.actions

export default cartSlice.reducer;
