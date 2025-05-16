import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../tests/AppText";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "./ProductCard";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/reducers/cartSplice";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface ProductGroupProps {
  title: string;
  items: Product[];
}

const ProductGroup = ({ title, items }: ProductGroupProps) => {
  const dispach = useDispatch();
  return (
    <View style={styles.container}>
      <AppText style={styles.categoryName}>{title}</AppText>
      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
            onAddToCardPress={() => dispach(addItemToCart(item))}
          />
        )}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(10),
        }}
      />
    </View>
  );
};

export default ProductGroup;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  categoryName: {
    marginBottom: vs(10),
    marginLeft: s(10),
    marginTop: vs(15),
    fontFamily: AppFonts.Bold,
  },
});
