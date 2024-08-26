import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface UserData {
  email: string;
  accessToken: string;
}

interface LoginState {
  email: string;
  password: string;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  email: '',
  password: '',
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<UserData, { email: string; password: string }, { rejectValue: string }>(
  'login/loginUser',
  async (data, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        return thunkAPI.rejectWithValue(errorResponse.message || 'Failed to login');
      }

      const userData: UserData = await response.json();
      return userData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'An error occurred');
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      state.email = '';
      state.password = '';
      state.isLoggedIn = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.email = action.payload.email;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.payload || 'Login failed';
      });
  },
});

export const { logout } = loginSlice.actions;
export const selectLoginState = (state: RootState) => state.login;
export default loginSlice.reducer;
