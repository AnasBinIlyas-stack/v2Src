import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  login: Object.keys(JSON.parse(localStorage.getItem('userData')) || {}).length > 0 ? true: false,
  userData: JSON.parse(localStorage.getItem('userData')) || {}
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
    }
  },
});

export const { setData, setLogin, setUserData } = dataSlice.actions;
export default dataSlice.reducer;
