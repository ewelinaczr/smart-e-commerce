import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    setUserData: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
      AsyncStorage.setItem("USER_ID", JSON.stringify(action.payload));
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
