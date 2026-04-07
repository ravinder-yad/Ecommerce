import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/api/orders';

// 🚀 Async Thunk: Fetch My Orders
export const fetchMyOrders = createAsyncThunk(
  'orders/fetchMyOrders',
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(`${API_URL}/myorders`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Network error fetching orders');
    }
  }
);

// 🚀 Async Thunk: Fetch Order By ID
export const fetchOrderById = createAsyncThunk(
  'orders/fetchById',
  async (id, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Network error fetching order details');
    }
  }
);

// 🚀 Async Thunk: Create New Order
export const createOrder = createAsyncThunk(
  'orders/create',
  async (orderData, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Network error creating order');
    }
  }
);

// 🆕 Async Thunk: Pay Order
export const payOrder = createAsyncThunk(
  'orders/pay',
  async ({ id, paymentResult }, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(`${API_URL}/${id}/pay`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(paymentResult),
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Failed to update payment status');
    }
  }
);

// 🆕 Async Thunk: Delete Order
export const deleteOrder = createAsyncThunk(
  'orders/delete',
  async (id, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return id;
    } catch (error) {
      return rejectWithValue('Failed to delete order');
    }
  }
);

const initialState = {
  orders: [],
  order: null,
  isLoading: false,
  error: null,
  success: false,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    resetOrderState: (state) => {
      state.isLoading = false;
      state.error = null;
      state.success = false;
      state.order = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // My Orders
      .addCase(fetchMyOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMyOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(fetchMyOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Fetch By ID
      .addCase(fetchOrderById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
      })
      // Create Order
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.order = action.payload;
        state.orders.unshift(action.payload);
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Pay Order
      .addCase(payOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.order = action.payload;
        state.orders = state.orders.map(o => o._id === action.payload._id ? action.payload : o);
      })
      // Delete Order
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.orders = state.orders.filter(o => o._id !== action.payload);
        if (state.order && state.order._id === action.payload) state.order = null;
      });
  },
});

export const { resetOrderState } = orderSlice.actions;
export default orderSlice.reducer;
