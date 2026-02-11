// components/lib/form-input.tsx
import tw from "@/components/ui/tailwind";
import { FormikProps } from "formik";
import React, { useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

// Define the icon types
type IconType = "eye" | "eyeOff";

const icons: Record<IconType, string> = {
  eye: `<svg width="20" viewBox="0 0 24 24" fill="#999"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>`,
  eyeOff: `<svg width="20" viewBox="0 0 24 24" fill="#999"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2z"/></svg>`,
};

type FormValues = Record<string, any>;

interface FormInputProps<T extends FormValues> {
  name: keyof T & string;
  formik: FormikProps<T>;
  placeholder?: string;
  leftIcon?: IconType;
  secure?: boolean;
  [key: string]: any;
}

export const FormInput = <T extends FormValues>({
  name,
  formik,
  placeholder,
  leftIcon,
  secure,
  ...props
}: FormInputProps<T>) => {
  const [show, setShow] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const { values, errors, touched, handleChange, handleBlur } = formik;
  const error =
    touched[name] && errors[name] ? String(errors[name]) : undefined;

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => inputRef.current?.focus()}
        style={[
          tw`h-14 flex-row items-center px-5 rounded-xl border bg-input`,
          error ? tw`border-primary/60 bg-primary/10` : tw`border-transparent`,
        ]}
      >
        {leftIcon && <SvgXml xml={icons[leftIcon]} style={tw`mr-2`} />}
        <TextInput
          ref={inputRef}
          value={String(values[name] || "")}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255,0.5)"
          secureTextEntry={secure && !show}
          style={tw`flex-1 text-white text-base`}
          {...props}
        />
        {secure && (
          <TouchableOpacity onPress={() => setShow(!show)}>
            <SvgXml xml={show ? icons.eye : icons.eyeOff} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      {error && <Text style={tw`text-red-500 text-xs mt-1 ml-1`}>{error}</Text>}
    </View>
  );
};
