import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import cartSlice from "../reducers/cartSlice";

// React persist to save global state in local storage
const persistConfig = {
  key: "cart",
  storage: AsyncStorage,
  whitelist: ["items"],
};

export const presistedCartSlice = persistReducer(persistConfig, cartSlice);
