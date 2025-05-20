import React from "react";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { InferType } from "yup";

import {
  IS_ANDROID,
  IS_IOS,
  SHIPPING_FEES,
  TAXES,
} from "../../constants/constants";
import { AppColors } from "../../styles/colors";
import {
  commonStyles,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import AppButton from "../../components/buttons/AppButton";
import AppSaveView from "../../components/views/AppSaveView";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { clearCart } from "../../store/reducers/cartSplice";

const schema = yup.object({
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Name must be at least 3 characters"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(/^[0-9]+$/, "Phone Number must be a number")
    .min(9, "Phone Number must be at least 9 digits")
    .max(15, "Phone Number must be at most 15 digits"),
  detailedAddress: yup.string().required("Detailed Address is required"),
});

type FormData = InferType<typeof schema>;

export default function CheckoutScreen() {
  const { userId } = useSelector((state: RootState) => state.userSlice);
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const totalProductsPrice = items.reduce((acc, item) => {
    return acc + item.product.price * item.qty;
  }, 0);
  const totalPrice = totalProductsPrice + TAXES + SHIPPING_FEES;
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const saveOrder = async (formData: FormData) => {
    try {
      const orderBody = {
        ...formData,
        items,
        totalProductsPrice,
        totalPrice,
        createdAt: new Date(),
      };
      // Save in database: users/{userId}/orders
      const userOrderRef = collection(db, "users", userId, "orders");
      await addDoc(userOrderRef, orderBody);
      // Save in database: orders
      const ordersRef = collection(db, "orders");
      await addDoc(ordersRef, orderBody);

      showMessage({ type: "success", message: "Successfull order" });
      dispatch(clearCart());
      navigation.goBack();
    } catch (err) {
      console.error("Error saving order", err);
      showMessage({ type: "danger", message: "Error happen" });
    }
  };

  return (
    <AppSaveView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInputController
            name="fullName"
            control={control}
            placeholder="Full Name"
          />
          <AppTextInputController
            name="phoneNumber"
            control={control}
            placeholder="Phone Number"
          />
          <AppTextInputController
            name="detailedAddress"
            control={control}
            placeholder="Detailed Address"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Confirm" onPress={handleSubmit(saveOrder)} />
      </View>
    </AppSaveView>
  );
}

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyles.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColors.white,
    marginTop: IS_IOS ? vs(15) : undefined,
  },
  buttonContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
    position: "absolute",
    width: "100%",
    bottom: IS_ANDROID ? vs(15) : 0,
    borderTopWidth: 1,
    borderColor: AppColors.blueGray,
    paddingTop: vs(10),
  },
});
