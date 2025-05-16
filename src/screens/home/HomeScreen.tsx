import React from "react";
import { s } from "react-native-size-matters";
import { FlatList, StyleSheet } from "react-native";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import SHOP_DATA from "../../data/products";
import ProductGroup from "../../components/cards/ProductGroup";

const HomeScreen = () => {
  return (
    <AppSaveView style={styles.container}>
      <HomeHeader />
      <FlatList
        data={SHOP_DATA}
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
