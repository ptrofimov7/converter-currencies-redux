import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchData } from "./converterApi";

export interface ConverterState {
   data: any;
   status: 'idle' | 'loading' | 'failed';
}
const initialState: ConverterState = {
   data: [],
   status: 'idle'
}

export const fetchCurrencies = createAsyncThunk(
   'counter/fetchCurrencies',
   async () => {
     const data = await fetchData();
     // The value we return becomes the `fulfilled` action payload
     return data;
   }
 );

export const converterSlice = createSlice({
   name: 'converter',
   initialState,
   reducers: {
      updateCurrencies(state, action) {
         const {currency, column, value} = action.payload
         state.data = state.data.map((el: any) => {
            if (el.ccy === currency) {
               return {...el, [column]: value}
            }
            return el
         })
      }
   },
   extraReducers: (builder) => {
      builder
        .addCase(fetchCurrencies.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCurrencies.fulfilled, (state, action) => {
          state.status = 'idle';
          state.data = action.payload;
        })
        .addCase(fetchCurrencies.rejected, (state) => {
          state.status = 'failed';
        });
    },
})

export const { updateCurrencies } = converterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectData = (state: RootState) => state.converter.data;

export const selectCurrencyList = createSelector(selectData, (data) => {
   const elements = data.reduce((acc: any, cur: any) => {
      acc.add(cur.ccy)
      acc.add(cur.base_ccy)
      return acc
   }, new Set())
   return [...elements]
})

export default converterSlice.reducer;