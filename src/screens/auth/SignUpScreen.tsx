import React from "react";
import { Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { s, vs } from "react-native-size-matters";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { AppColors } from "../../styles/colors";
import { IMAGES } from "../../constants/images-paths";
import AppSaveView from "../../components/views/AppSaveView";
import AppButton from "../../components/buttons/AppButton";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import AppText from "../../components/tests/AppText";
import * as yup from "yup";
import { InferType } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  userName: yup
    .string()
    .required("User name is required")
    .min(3, "User name must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be at most 32 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    ),
});

type FormData = InferType<typeof schema>;

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const saveSignUp = (formData: FormData) => {
    console.log(formData);
    navigation.navigate("MainAppBottomTabs");
  };

  return (
    <AppSaveView style={styles.container}>
      <Image source={IMAGES.appLogoExtended} style={styles.logo} />
      <AppTextInputController
        name="userName"
        control={control}
        placeholder="User name"
      />
      <AppTextInputController
        name="email"
        control={control}
        placeholder="Email"
      />
      <AppTextInputController
        name="password"
        control={control}
        placeholder="Password"
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton
        title="Create New Account"
        onPress={handleSubmit(saveSignUp)}
      />
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
