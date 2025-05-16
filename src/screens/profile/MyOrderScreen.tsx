import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/tests/AppText";
import ProfileButton from "../../components/buttons/ProfileButton";
import HomeHeader from "../../components/headers/HomeHeader";
import { FlatList } from "react-native-gesture-handler";
import OrderItem from "../../components/cards/OrderItem";

const orderData = [
  {
    id: 1,
    date: "2023-10-01",
    totalAmout: 5,
    totalPrice: 100,
  },
  {
    id: 2,
    date: "2023-10-01",
    totalAmout: 5,
    totalPrice: 100,
  },
];

const MyOrderScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={orderData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OrderItem totalPrice={item.totalPrice} date={item.date} />
        )}
      />
    </View>
  );
};

export default MyOrderScreen;

const styles = StyleSheet.create({
  container: {
    margin: s(10),
  },
  name: {
    fontSize: s(18),
    marginTop: vs(10),
  },
});
