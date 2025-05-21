import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { useTranslation } from "react-i18next";
import { MainAppStackParamList } from "../../navigation/MainAppStack";
import { SheetManager } from "react-native-actions-sheet";
import ProfileButton from "../../components/buttons/ProfileButton";
import HomeHeader from "../../components/headers/HomeHeader";
import LanguageBottomSheet from "../../components/language/LanguageBottomSheet";
import AppSaveView from "../../components/views/AppSaveView";

const ProfileScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<MainAppStackParamList>>();
  const { t } = useTranslation();

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
        <ProfileButton title={t("profile_logout")} />
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
