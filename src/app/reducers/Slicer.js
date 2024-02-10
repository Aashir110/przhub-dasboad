import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData2 } from "../actions/apiActions";

// Define your async thunks for each API call
export const fetchApiData1 = createAsyncThunk('fetchData2', async () => {
  try {
    const data = await fetchData2(); 
    return data;
  } catch (error) {
    throw error;
  }
});
// Create a slice for managing state related to these API calls
export const Slicer = createSlice({
  name: "Data",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  reducers: {
    // You can define additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData1.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchApiData1.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchApiData1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },



});

export const { } = Slicer.actions;
export default Slicer.reducer;
