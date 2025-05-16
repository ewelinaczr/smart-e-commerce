import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "../../styles/colors";
import { AppFonts } from "../../styles/fonts";
import { commonStyles } from "../../styles/sharedStyles";
import AppText from "../tests/AppText";

interface ProductCardProps {
  onAddToCardPress: () => void;
  imageUrl: string;
  name: string;
  price: number;
  bestseller?: boolean;
  discount?: boolean;
}

const ProductCard = ({
  onAddToCardPress,
  imageUrl,
  name,
  price,
}: ProductCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={onAddToCardPress}
        >
          <Ionicons name="cart" size={s(15)} color={AppColors.white} />
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>{name}</AppText>
        <AppText style={styles.priceText}>${price}</AppText>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(220),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    ...commonStyles.shadow,
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(160),
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {
    flex: 1,
    paddingTop: vs(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
  },
  titleText: {
    fontSize: s(14),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
    alignSelf: "flex-end",
  },
  priceText: {
    fontSize: s(14),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginTop: vs(7),
    alignSelf: "flex-end",
  },
  addToCartButton: {
    height: s(28),
    width: s(28),
    position: "absolute",
    top: vs(5),
    left: s(5),
    borderRadius: s(14),
    backgroundColor: AppColors.primary,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
