import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";
import { AppColors } from "../../styles/colors";
import { MainAppBottomTabsParamList } from "../../navigation/MainAppBottomTabs";
import AppText from "../../components/tests/AppText";
import AppButton from "../../components/buttons/AppButton";

const EmptyCart = () => {
  const navigation =
    useNavigation<StackNavigationProp<MainAppBottomTabsParamList>>();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="shopping-outline"
        color={AppColors.primary}
        size={s(100)}
      />
      <AppText style={styles.title}>Your Cart is Empty</AppText>
      <AppText style={styles.subtitle}>
        Browse our products and find something you like.
      </AppText>
      <AppButton
        title="Start shopping"
        style={styles.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: s(20),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginBottom: vs(10),
  },
  subtitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Medium,
    color: AppColors.midGray,
    textAlign: "center",
    marginBottom: vs(20),
  },
  button: {
    width: "80%",
  },
  icon: {
    marginBottom: vs(20),
    opacity: 0.8,
  },
});
