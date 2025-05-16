import React from "react";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AppText from "../tests/AppText";
import { AppColors } from "../../styles/colors";
import {
  commonStyles,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { AppFonts } from "../../styles/fonts";

interface OrderItemProps {
  totalPrice: number;
  date: string;
}

export default function OrderItem({ totalPrice, date }: OrderItemProps) {
  return (
    <View style={styles.container}>
      <AppText style={[styles.details, styles.text]}>Order Details:</AppText>
      <View style={styles.textRow}>
        <AppText style={styles.text}>Total Price: </AppText>
        <AppText style={styles.value}>${totalPrice}</AppText>
      </View>
      <View style={styles.textRow}>
        <AppText style={styles.text}>Date:</AppText>
        <AppText style={styles.value}>{date}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    ...commonStyles.shadow,
    paddingHorizontal: sharedPaddingHorizontal,
    marginBottom: vs(10),
    paddingVertical: vs(5),
  },
  details: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.blueGray,
  },
  textRow: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    paddingVertical: vs(2),
  },
  value: {
    fontFamily: AppFonts.Bold,
  },
});
