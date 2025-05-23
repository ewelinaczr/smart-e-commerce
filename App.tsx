import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import { persistor, store } from "./src/store/store";
import FlashMessage from "react-native-flash-message";
import MainAppStack from "./src/navigation/MainAppStack";
import i18n from "./src/localization/i18n";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large"></ActivityIndicator>;
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <NavigationContainer>
              <FlashMessage position={"top"} />
              <MainAppStack />
            </NavigationContainer>
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
