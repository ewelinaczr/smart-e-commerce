import { StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import { AppColors } from "../../styles/colors";
import { vs } from "react-native-size-matters";
import { IMAGES } from "../../constants/images-paths";

export default class HomeHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={IMAGES.appLogo} style={styles.logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: vs(10),
    height: vs(40),
  },
  logo: {
    height: vs(20),
    width: "100%",
    resizeMode: "contain",
  },
});
