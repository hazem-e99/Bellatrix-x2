// src/features/solutions/solutionsSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchSolutions,
  fetchSolutionById,
  fetchHrSolution,
  fetchPayrollSolution
} from './solutionsAPI';

const initialState = {
  solutions: [],
  currentSolution: null,
  hrSolution: null,
  payrollSolution: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

// Thunk for fetching all solutions
export const fetchAllSolutions = createAsyncThunk(
  'solutions/fetchAllSolutions',
  async () => {
    return await fetchSolutions();
  }
);

// Thunk for fetching a specific solution by ID
export const fetchSolution = createAsyncThunk(
  'solutions/fetchSolution',
  async (solutionId) => {
    return await fetchSolutionById(solutionId);
  }
);

// Thunk for HR solution data
export const getHrSolution = createAsyncThunk(
  'solutions/getHrSolution',
  async () => {
    return await fetchHrSolution();
  }
);

// Thunk for payroll solution data
export const getPayrollSolution = createAsyncThunk(
  'solutions/getPayrollSolution',
  async () => {
    return await fetchPayrollSolution();
  }
);

const solutionsSlice = createSlice({
  name: 'solutions',
  initialState,
  reducers: {
    // You can add synchronous reducers here if needed
  },
  extraReducers(builder) {
    builder
      // All solutions
      .addCase(fetchAllSolutions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllSolutions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.solutions = action.payload;
      })
      .addCase(fetchAllSolutions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // Single solution
      .addCase(fetchSolution.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSolution.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentSolution = action.payload;
      })
      .addCase(fetchSolution.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // HR Solution
      .addCase(getHrSolution.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getHrSolution.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.hrSolution = action.payload;
      })
      .addCase(getHrSolution.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // Payroll Solution
      .addCase(getPayrollSolution.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPayrollSolution.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.payrollSolution = action.payload;
      })
      .addCase(getPayrollSolution.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectAllSolutions = (state) => state.solutions.solutions;
export const selectCurrentSolution = (state) => state.solutions.currentSolution;
export const selectHrSolution = (state) => state.solutions.hrSolution;
export const selectPayrollSolution = (state) => state.solutions.payrollSolution;
export const selectSolutionsStatus = (state) => state.solutions.status;
export const selectSolutionsError = (state) => state.solutions.error;

export default solutionsSlice.reducer;