import { createStackNavigator } from "@react-navigation/stack";
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
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
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
