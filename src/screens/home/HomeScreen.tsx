import React, { useEffect, useState } from "react";
import { s } from "react-native-size-matters";
import { FlatList, StyleSheet } from "react-native";
import { getProductsData } from "../../config/dataServices";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProductGroup, {
  ProductGroupProps,
} from "../../components/cards/ProductGroup";

const HomeScreen = () => {
  const [products, setProducts] = useState<ProductGroupProps[]>([]);
  const fetchData = async () => {
    const data = await getProductsData();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppSaveView style={styles.container}>
      <HomeHeader />
      <FlatList
        data={products}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <ProductGroup title={item.title} items={item.items} />
        )}
        contentContainerStyle={{ paddingHorizontal: s(10), flexGrow: 1 }}
      ></FlatList>
    </AppSaveView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
