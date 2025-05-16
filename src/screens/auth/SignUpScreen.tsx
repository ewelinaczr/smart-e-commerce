import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppColors } from "../../styles/colors";
import { Image, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppSaveView from "../../components/views/AppSaveView";
import { IMAGES } from "../../constants/images-paths";
import AppTestInput from "../../components/inputs/AppTestInput";
import AppText from "../../components/tests/AppText";
import AppButton from "../../components/buttons/AppButton";

const SignUpScreen = () => {
  const [email, setEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  return (
    <AppSaveView style={styles.container}>
      <Image source={IMAGES.appLogoExtended} style={styles.logo} />
      <AppTestInput
        placeholder="User Name"
        onChangeText={setUserName}
        secureTextEntry
      />
      <AppTestInput placeholder="Email" onChangeText={setEmail} />
      <AppTestInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton title="Create New Account" />
      <AppButton
        title="Go to Sign In"
        onPress={() => navigation.navigate("SignIn")}
        textColor={AppColors.primary}
        style={styles.signInButton}
      />
    </AppSaveView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(50),
    width: "100%",
    resizeMode: "contain",
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  signInButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
