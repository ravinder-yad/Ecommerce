import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/api/products';

// 🚀 Async Thunk: Fetch All Products
export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Network error fetching products');
    }
  }
);

// 🚀 Async Thunk: Fetch Product By ID
export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (id, { rejectWithValue }) => {
    if (!id || id === 'undefined') return rejectWithValue('Invalid product identity');
    try {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Network error fetching product details');
    }
  }
);

// 🆕 Async Thunk: Create New Product (Admin/User)
export const createProduct = createAsyncThunk(
  'products/create',
  async (productData, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(productData),
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Failed to create product');
    }
  }
);

// 🆕 Async Thunk: Update Product
export const updateProduct = createAsyncThunk(
  'products/update',
  async ({ id, productData }, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(productData),
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Failed to update product');
    }
  }
);

// 🆕 Async Thunk: Delete Product
export const deleteProduct = createAsyncThunk(
  'products/delete',
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
      return id; // Return the deleted ID to update UI
    } catch (error) {
      return rejectWithValue('Failed to delete product');
    }
  }
);

const initialState = {
  products: [],
  product: null,
  isLoading: false,
  isSuccess: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProductDetails: (state) => {
      state.product = null;
    },
    resetProductState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = null;
      state.product = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch All
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Fetch By ID
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      // Create Product
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products.unshift(action.payload); // Add to top of list
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Update Product
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = state.products.map(p => 
          p._id === action.payload._id ? action.payload : p
        );
      })
      // Delete Product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = state.products.filter(p => p._id !== action.payload);
      });
  },
});

export const { clearProductDetails, resetProductState } = productSlice.actions;
export default productSlice.reducer;
