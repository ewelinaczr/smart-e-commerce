import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { MainAppStackParamList } from "../../navigation/MainAppStack";
import ProfileButton from "../../components/buttons/ProfileButton";
import HomeHeader from "../../components/headers/HomeHeader";

const ProfileScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<MainAppStackParamList>>();
  return (
    <View>
      <HomeHeader />
      <ProfileButton
        title="My orders"
        onPress={() => navigation.navigate("MyOrder")}
      />
      <ProfileButton title="Language" />
      <ProfileButton title="Log out" />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  name: {
    fontSize: s(18),
    marginTop: vs(10),
  },
});
