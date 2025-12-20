import tw from "@/lib/tailwind";
import { FormikProps } from "formik";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

interface FormikInputProps {
  name: string;
  formik: FormikProps<any>;
  label?: string;
  placeholder?: string;
  secure?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  rightIconOff?: string;
  containerStyle?: any;
  inputProps?: any;
}

export function FormInput({
  name,
  formik,
  label,
  placeholder,
  secure = false,
  leftIcon,
  rightIcon,
  rightIconOff,
  containerStyle,
  inputProps,
}: FormikInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const animated = useRef(new Animated.Value(0)).current;
  const inputRef = useRef<TextInput>(null);

  const value = formik.values[name];
  const error = formik.errors[name];
  const touched = formik.touched[name];

  useEffect(() => {
    Animated.timing(animated, {
      toValue: value ? -24 : 0,
      duration: 180,
      useNativeDriver: true,
    }).start();
  }, [value]);

  const translateX = animated.interpolate({
    inputRange: [-24, 0],
    outputRange: [16, 40],
  });

  const scale = animated.interpolate({
    inputRange: [-24, 0],
    outputRange: [0.8, 1],
  });

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => inputRef.current?.focus()}
        style={[
          tw`h-14 rounded-full flex-row items-center px-5 border`,
          touched && error ? tw`border-red-500` : tw`border-white/20`,
        ]}
      >
        {leftIcon && <SvgXml xml={leftIcon} />}

        {placeholder && (
          <Animated.Text
            style={[
              tw`absolute bg-base px-2 text-gray-400`,
              {
                transform: [
                  { translateY: animated },
                  { translateX },
                  { scale },
                ],
              },
            ]}
          >
            {placeholder}
          </Animated.Text>
        )}

        <TextInput
          ref={inputRef}
          value={value}
          secureTextEntry={secure && !showPassword}
          onChangeText={formik.handleChange(name)}
          onBlur={formik.handleBlur(name)}
          style={tw`flex-1 px-2 text-white`}
          {...inputProps}
        />

        {secure && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {/* <SvgXml xml={showPassword ? rightIcon : rightIconOff} /> */}
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      {touched && error && (
        <Text style={tw`text-red-500 text-xs mt-1 text-right`}>
          {error as string}
        </Text>
      )}
    </View>
  );
}
