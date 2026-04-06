import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/api/cart';

// 🚀 Async Thunk: Fetch Cart From Backend
export const fetchCart = createAsyncThunk(
  'cart/fetch',
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
      return rejectWithValue('Network error fetching cart');
    }
  }
);

// 🚀 Async Thunk: Sync Cart To Backend
export const syncCart = createAsyncThunk(
  'cart/sync',
  async (cartItems, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify({ cartItems }),
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Network error syncing cart');
    }
  }
);

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('sv_cartItems')) || [],
  totalPrice: 0,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      localStorage.setItem('sv_cartItems', JSON.stringify(state.cartItems));
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.product !== action.payload);
      localStorage.setItem('sv_cartItems', JSON.stringify(state.cartItems));
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      localStorage.removeItem('sv_cartItems');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cartItems = action.payload.cartItems || [];
      })
      .addCase(syncCart.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { addItem, removeItem, clearCartItems } = cartSlice.actions;
export default cartSlice.reducer;
