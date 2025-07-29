import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiRequest = async (endpoint, options = {}) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`http://localhost:5005/api/${endpoint}`, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      ...options,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  }
};

// Fetch all services
export const fetchAllServices = createAsyncThunk(
  'services/fetchAllServices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRequest('services');
      return {
        services: response.services || [],
        totalPages: response.totalPages || 1,
        currentPage: response.currentPage || 1,
        totalItems: response.totalServices || 0
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// For backward compatibility
export const fetchSolutionData = createAsyncThunk(
  'services/fetchSolutionData',
  async (solutionType, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const service = state.services.allServices.find(service => 
        service.slug === solutionType || 
        service.slug?.toLowerCase() === solutionType?.toLowerCase()
      );
      
      if (!service) {
        throw new Error(`Service ${solutionType} not found`);
      }
      
      return { solutionType, data: service };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Helper function to find service by slug
export const findServiceBySlug = (slug, services) => {
  return services?.find(service => 
    service.slug === slug || 
    service.slug?.toLowerCase() === slug?.toLowerCase()
  );
};

const initialState = {
  allServices: [],
  currentService: null,
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  totalItems: 0
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setCurrentService: (state, action) => {
      state.currentService = action.payload;
    },
    clearCurrentService: (state) => {
      state.currentService = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllServices.fulfilled, (state, action) => {
        state.loading = false;
        state.allServices = action.payload.services;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchAllServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSolutionData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSolutionData.fulfilled, (state, action) => {
        state.loading = false;
        state.currentService = action.payload.data;
      })
      .addCase(fetchSolutionData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setCurrentService, clearCurrentService } = servicesSlice.actions;
export default servicesSlice.reducer;