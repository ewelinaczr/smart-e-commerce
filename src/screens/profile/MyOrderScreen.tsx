import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { FlatList } from "react-native-gesture-handler";
import OrderItem from "../../components/cards/OrderItem";
import { getUserOrders } from "../../config/dataServices";
import { ProductI } from "../../components/cards/ProductGroup";

interface Order {
  createdAt: string;
  detailedAddress: string;
  fullName: string;
  items: ProductI[];
  phoneNumber: string;
  totalPrice: number;
  totalProductsPrice: number;
}

interface OrderDetails {
  id: string;
  data: Order;
}

const MyOrderScreen = () => {
  const [orderList, setOrderList] = useState<OrderDetails[]>([]);
  const getOrders = async () => {
    const orders = await getUserOrders();
    const formattedOrders = orders.map((order) => {
      const date =
        order.data.createdAt && order.data.createdAt.seconds
          ? new Date(
              order.data.createdAt.seconds * 1000 +
                (order.data.createdAt.nanoseconds || 0) / 1e6
            )
          : new Date(order.data.createdAt);
      return {
        ...order,
        data: {
          ...order.data,
          createdAt: date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
        },
      };
    });
    setOrderList(formattedOrders);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={orderList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OrderItem
            totalPrice={item.data.totalPrice}
            date={item.data.createdAt}
          />
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
