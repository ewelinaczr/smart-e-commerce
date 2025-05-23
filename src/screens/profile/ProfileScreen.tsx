import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { useTranslation } from "react-i18next";
import { MainAppStackParamList } from "../../navigation/MainAppStack";
import { SheetManager } from "react-native-actions-sheet";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import ProfileButton from "../../components/buttons/ProfileButton";
import HomeHeader from "../../components/headers/HomeHeader";
import LanguageBottomSheet from "../../components/language/LanguageBottomSheet";
import AppSaveView from "../../components/views/AppSaveView";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<MainAppStackParamList>>();
  const { t } = useTranslation();

  const handleLogOut = async () => {
    await AsyncStorage.removeItem("USER_ID");
    navigation.navigate("AuthStack");
    await signOut(auth);
  };

  return (
    <AppSaveView>
      <View>
        <HomeHeader />
        <ProfileButton
          title={t("profile_my_orders")}
          onPress={() => navigation.navigate("MyOrder")}
        />
        <ProfileButton
          title={t("profile_language")}
          onPress={() => SheetManager.show("LANG_SHEET")}
        />
        <LanguageBottomSheet />
        <ProfileButton title={t("profile_logout")} onPress={handleLogOut} />
      </View>
    </AppSaveView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  name: {
    fontSize: s(18),
    marginTop: vs(10),
  },
});
