import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { RootState } from "../../store/store";
import HomeHeader from "../../components/headers/HomeHeader";
import CartItem from "../../components/cart/CartItem";
import TotalsView from "../../components/cart/TotalsView";
import AppButton from "../../components/buttons/AppButton";
import EmptyCart from "./EmptyCart";
import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
} from "../../store/reducers/cartSlice";
import { MainAppStackParamList } from "../../navigation/MainAppStack";
import AppSaveView from "../../components/views/AppSaveView";

const CartScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<MainAppStackParamList>>();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  const totalProductsPrice = items.reduce((acc, item) => {
    return acc + item.product.price * item.qty;
  }, 0);

  if (!items.length) {
    return <EmptyCart />;
  }

  return (
    <AppSaveView>
      <View style={styles.container}>
        <HomeHeader />
        <View style={{ paddingHorizontal: sharedPaddingHorizontal, flex: 1 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={items}
            keyExtractor={(item, index) =>
              item?.product?.id?.toString() ?? `cart-item-${index}`
            }
            renderItem={({ item }) => (
              <CartItem
                product={item.product}
                qty={item.qty}
                sum={item.sum}
                onDelete={() => dispatch(removeProductFromCart(item.product))}
                onDecrease={() => dispatch(removeItemFromCart(item.product))}
                onIncrease={() => dispatch(addItemToCart(item.product))}
              />
            )}
          />
          <TotalsView itemsPrice={totalProductsPrice} />
          <AppButton
            title="Continue"
            onPress={() => navigation.navigate("Checkout")}
          />
        </View>
      </View>
    </AppSaveView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
