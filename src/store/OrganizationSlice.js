// organizationsSlice.js
import { get_all_organizations_url } from '@/api_utils';
import axios_instance from '@/axiosInstance';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllOrganizations = createAsyncThunk(
  'organizations/fetchAllOrganizations',
  async (jwt, { dispatch }) => {
    try {
      const response = await axios_instance.get(get_all_organizations_url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log(response.data);
      return response.data;

    } catch (error) {
      console.error(error);
      // You can dispatch an action to handle errors if needed
      throw error;
    }
  }
);

const organizationsSlice = createSlice({
  name: 'organizations',
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    // You can add additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrganizations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllOrganizations.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllOrganizations.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectOrganizations = (state) => state.organizations.data;
export const selectLoadingOrganizations = (state) => state.organizations.loading;

export default organizationsSlice.reducer;
