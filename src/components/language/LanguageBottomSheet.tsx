import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { s, vs } from "react-native-size-matters";
import { languagesArr } from "../../localization/languageList";
import AppText from "../tests/AppText";
import AppButton from "../buttons/AppButton";
import RadioWithTitle from "../inputs/RadioWithTitle";
import i18n from "../../localization/i18n";

const LanguageBottomSheet = () => {
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const { t } = useTranslation();

  const onLanguagePress = (code: string) => {
    setSelectedLang(code);
  };

  const handleConfirm = () => {
    SheetManager.hide("LANG_SHEET");
    i18n.changeLanguage(selectedLang);
  };

  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText style={styles.text}>{t("change_language")}</AppText>
        {languagesArr.map((lang) => (
          <RadioWithTitle
            key={lang.code}
            title={lang.label}
            selected={selectedLang === lang.code}
            onPress={() => onLanguagePress(lang.code)}
          />
        ))}
        <AppButton
          title={t("checkout_confirm_button")}
          onPress={handleConfirm}
        />
      </View>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: s(16),
  },
  text: {
    marginBottom: vs(20),
    textAlign: "center",
  },
});
