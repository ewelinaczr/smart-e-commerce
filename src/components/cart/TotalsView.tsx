import React from "react";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { SHIPPING_FEES, TAXES } from "../../constants/constants";
import { AppColors } from "../../styles/colors";
import { AppFonts } from "../../styles/fonts";
import AppText from "../tests/AppText";

interface TotalsViewProps {
  itemsPrice: number;
}

export default function TotalsView({ itemsPrice }: TotalsViewProps) {
  return (
    <View>
      <View style={styles.row}>
        <AppText style={styles.title}>Items Price:</AppText>
        <AppText style={styles.price}>${itemsPrice}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.title}>Taxes:</AppText>
        <AppText style={styles.price}>${TAXES}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.title}>Shipping Fee:</AppText>
        <AppText style={styles.price}>${SHIPPING_FEES}</AppText>
      </View>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AppText style={styles.title}>Order Total:</AppText>
        <AppText style={styles.price}>
          ${itemsPrice + TAXES + SHIPPING_FEES}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(10),
  },
  title: {
    flex: 1,
    fontSize: s(16),
  },
  price: {
    fontSize: s(16),
    fontFamily: AppFonts.Bold,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: AppColors.blueGray,
    color: AppColors.blueGray,
    marginVertical: vs(5),
  },
});
