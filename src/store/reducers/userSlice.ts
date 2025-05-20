import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  userId: string;
}
const initialState: UserState = {
  userId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
