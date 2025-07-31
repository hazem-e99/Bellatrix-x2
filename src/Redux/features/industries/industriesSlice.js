import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch all industriesexport const fetchIndustries = createAsyncThunk(
  "industries/fetchIndustries",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:5005/api/industries?page=1&limit=10&isActive=true",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        }
      );
      const data = await response.json();
      if (!data.success) {
        return rejectWithValue(data);
      }
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const industriesSlice = createSlice({
  name: "industries",
  initialState: {
    industries: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIndustries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIndustries.fulfilled, (state, action) => {
        state.loading = false;
        state.industries = action.payload;
      })
      .addCase(fetchIndustries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default industriesSlice.reducer;
