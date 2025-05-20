import React from "react";
import { Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { s, vs } from "react-native-size-matters";
import { StackNavigationProp } from "@react-navigation/stack";
import * as yup from "yup";
import { InferType } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";

import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import { AppColors } from "../../styles/colors";
import AppSaveView from "../../components/views/AppSaveView";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import AppText from "../../components/tests/AppText";
import AppButton from "../../components/buttons/AppButton";
import { auth } from "../../config/firebase";
import { MainAppStackParamList } from "../../navigation/MainAppStack";
import { AuthParamList } from "../../navigation/AuthStack";
import { setUserData } from "../../store/reducers/userSlice";

const schema = yup.object({
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

const SignInScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<MainAppStackParamList>>();
  const authNavigation = useNavigation<StackNavigationProp<AuthParamList>>();
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const saveLogin = async (formData: FormData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      dispatch(setUserData(userCredential.user.uid));
      navigation.navigate("MainAppBottomTabs");
    } catch (err: any) {
      let errorMessage = "";
      switch (err.code) {
        case "auth/user-not-found":
          errorMessage = "User not found";
          break;
        case "auth/invalid-credentials":
          errorMessage = "Wrong email or password";
          break;
        default:
          errorMessage = "An error occured during sign in";
      }
      showMessage({ type: "danger", message: errorMessage });
    }
  };

  return (
    <AppSaveView style={styles.container}>
      <Image source={IMAGES.appLogoExtended} style={styles.logo} />
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
      <AppButton title="Log in" onPress={handleSubmit(saveLogin)} />
      <AppButton
        title="Sign Up"
        onPress={() => authNavigation.navigate("SignUp")}
        textColor={AppColors.primary}
        style={styles.registerButton}
      />
    </AppSaveView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: "100%",
    resizeMode: "contain",
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  registerButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
