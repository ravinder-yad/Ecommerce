import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/api/wishlist';

// 🚀 Async Thunk: Fetch Wishlist From Backend
export const fetchWishlist = createAsyncThunk(
  'wishlist/fetch',
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Network error fetching wishlist');
    }
  }
);

// 🚀 Async Thunk: Add Product To Wishlist
export const addToWishlist = createAsyncThunk(
  'wishlist/add',
  async (productId, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(`${API_URL}/${productId}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Network error adding to wishlist');
    }
  }
);

// 🚀 Async Thunk: Remove Product From Wishlist
export const removeFromWishlist = createAsyncThunk(
  'wishlist/remove',
  async (productId, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(`${API_URL}/${productId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Network error removing from wishlist');
    }
  }
);

const initialState = {
  wishlistItems: [],
  isLoading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    clearWishlist: (state) => {
      state.wishlistItems = [];
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wishlistItems = action.payload.products || [];
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Add/Remove fulfillment updates can be handled here if needed
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        // Optionally update the list if the server returns it
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
