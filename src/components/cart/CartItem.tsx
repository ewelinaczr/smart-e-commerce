import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";

import AppText from "../tests/AppText";
import { AppColors } from "../../styles/colors";
import { AppFonts } from "../../styles/fonts";
import { ProductI } from "../cards/ProductGroup";

interface CartItemProps {
  product: ProductI;
  qty: number;
  sum: number;
  onDelete: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function CartItem({
  product,
  qty,
  sum,
  onDelete,
  onIncrease,
  onDecrease,
}: CartItemProps) {
  const { name, imageUrl } = product;
  console.log("qty", qty);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{name}</AppText>
        <AppText style={styles.price}>${sum}</AppText>
        <View style={styles.qtyContainer}>
          <Pressable style={styles.iconButton} onPress={onDecrease}>
            <AntDesign name="minus" size={s(12)} color={AppColors.primary} />
          </Pressable>
          <AppText style={styles.qty}>{qty}</AppText>
          <Pressable style={styles.iconButton} onPress={onIncrease}>
            <AntDesign name="plus" size={s(12)} color={AppColors.primary} />
          </Pressable>
        </View>
      </View>
      <View style={styles.delateContainer}>
        <Pressable style={styles.deleteButton} onPress={onDecrease}>
          <AntDesign name="delete" size={s(14)} color={AppColors.rejectColor} />
          <AppText style={styles.delete} onPress={onDelete}>
            Delete
          </AppText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: s(100),
    width: "100%",
    borderBottomWidth: s(1),
    marginBottom: vs(4),
    paddingBottom: vs(4),
    borderColor: AppColors.blueGray,
  },
  imageContainer: {
    flex: 2,
  },
  detailsContainer: {
    flex: 3.5,
    marginLeft: s(10),
  },
  delateContainer: {
    flex: 1.5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: s(5),
    resizeMode: "cover",
  },
  title: {
    fontSize: s(14),
    color: AppColors.primary,
    fontFamily: AppFonts.Medium,
    marginTop: vs(5),
  },
  price: {
    fontSize: s(16),
    color: AppColors.primary,
    fontFamily: AppFonts.Bold,
    marginVertical: vs(5),
  },
  delete: {
    fontFamily: AppFonts.Medium,
    color: AppColors.midGray,
    fontSize: s(12),
    textAlign: "center",
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: s(5),
    marginRight: s(10),
    marginBottom: vs(8),
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: s(15),
    borderRadius: s(30),
    borderWidth: s(1),
    borderColor: AppColors.blueGray,
    width: s(80),
    paddingVertical: vs(5),
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.blueGray,
    padding: s(5),
    marginHorizontal: s(7),
    height: s(20),
    width: s(20),
    borderRadius: s(10),
  },
  qty: {
    textAlign: "center",
    color: AppColors.primary,
  },
});
