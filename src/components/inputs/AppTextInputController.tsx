import React from "react";
import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import AppTextInput from "./AppTestInput";
import AppText from "../tests/AppText";
import { AppColors } from "../../styles/colors";

interface AppTextInputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: object;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
}

export default function AppTextInputController<T extends FieldValues>({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
  keyboardType,
}: AppTextInputControllerProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppTextInput
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={error && styles.errorInput}
          />
          {!!error ? (
            <AppText style={styles.textError}>{error.message}</AppText>
          ) : null}
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  errorInput: {
    borderColor: AppColors.rejectColor,
  },
  textError: {
    color: AppColors.rejectColor,
    fontSize: s(12),
    textAlign: "center",
    marginBottom: vs(10),
    marginTop: -vs(5),
  },
});
