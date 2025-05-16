import React, { FC } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";

interface AppTestInputProps extends TextInputProps {
  style?: object | object[];
}

const AppTestInput: FC<AppTestInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
    />
  );
};

export default AppTestInput;

const styles = StyleSheet.create({
  input: {
    height: vs(40),
    borderWidth: 1,
    borderColor: AppColors.border,
    borderRadius: s(5),
    paddingHorizontal: s(15),
    marginVertical: s(10),
    fontSize: s(16),
    backgroundColor: AppColors.white,
    width: "100%",
    marginBottom: vs(10),
  },
});
