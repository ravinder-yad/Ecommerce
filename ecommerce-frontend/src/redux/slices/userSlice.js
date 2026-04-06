import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/api/users/profile';

// 🚀 Async Thunk: Fetch Profile From Backend
export const fetchProfile = createAsyncThunk(
  'user/fetchProfile',
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
      return rejectWithValue('Network error fetching profile');
    }
  }
);

// 🚀 Async Thunk: Update Profile From Backend
export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (userData, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(API_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Network error updating profile');
    }
  }
);

// 🚀 Async Thunk: Upload Avatar (Multer)
export const uploadAvatar = createAsyncThunk(
  'user/uploadAvatar',
  async (formData, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
        body: formData, // FormData doesn't need Content-Type header manually
      });
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.message);
      return data;
    } catch (error) {
      return rejectWithValue('Network error uploading image');
    }
  }
);

const initialState = {
  profileData: null,
  isUploading: false,
  isLoading: false,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserStatus: (state) => {
      state.success = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profileData = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Update
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profileData = action.payload;
        state.success = true;
      })
      // Upload
      .addCase(uploadAvatar.pending, (state) => {
        state.isUploading = true;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.isUploading = false;
        if (state.profileData) {
          state.profileData.profileImage = action.payload.profileImage;
        }
        state.success = true;
      })
      .addCase(uploadAvatar.rejected, (state, action) => {
        state.isUploading = false;
        state.error = action.payload;
      });
  },
});

export const { resetUserStatus } = userSlice.actions;
export default userSlice.reducer;
