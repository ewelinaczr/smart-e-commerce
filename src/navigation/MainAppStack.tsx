import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator, View } from "react-native";
import { AppColors } from "../styles/colors";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../config/firebase";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckoutScreen from "../screens/cart/CheckoutScreen";
import MyOrderScreen from "../screens/profile/MyOrderScreen";

export type MainAppStackParamList = {
  AuthStack: undefined;
  MainAppBottomTabs: undefined;
  Checkout: undefined;
  MyOrder: undefined;
};

const Stack = createStackNavigator<MainAppStackParamList>();

export default function MainAppStack() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUserData(userData);
        setIsLoading(false);
      } else {
        setUserData(null);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator size={"large"} color={AppColors.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={userData ? "MainAppBottomTabs" : "AuthStack"}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
      <Stack.Screen
        name="Checkout"
        options={{ headerShown: true }}
        component={CheckoutScreen}
      />
      <Stack.Screen
        name="MyOrder"
        options={{ headerShown: true, title: "My Order" }}
        component={MyOrderScreen}
      />
    </Stack.Navigator>
  );
}
