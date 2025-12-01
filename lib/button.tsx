import React from "react";
import { ActivityIndicator, StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";
import tw from "./tailwind";

// Define variant styles
const variants = {
  default: tw`bg-primary`,
  destructive: tw`bg-red-600`,
  outline: tw`border border-gray-300`,
  secondary: tw`bg-gray-200`,
  ghost: tw`bg-transparent`,
  link: tw`bg-transparent`,
};

// Define size styles
const sizes = {
  default: tw`h-10 px-4`,
  sm: tw`h-8 px-3`,
  lg: tw`h-12 px-6`,
  icon: tw`h-10 w-10 p-2`,
  "icon-sm": tw`h-8 w-8 p-1.5`,
  "icon-lg": tw`h-12 w-12 p-3`,
};

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: boolean;
  svg?: React.FC<SvgProps>;
  svgProps?: SvgProps;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  style,
  children,
  onPress,
  disabled = false,
  isLoading = false,
  icon = false,
  svg: SvgComponent,
  svgProps,
}) => {
  const isButtonDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isButtonDisabled}
      // activeOpacity={0.7}
      style={[
        tw`flex-row items-center justify-center rounded-md`,
        variants[variant],
        sizes[size],
        isButtonDisabled && tw`opacity-50`,
        style,
      ]}
    >
      {isLoading && <ActivityIndicator color="#fff" style={tw`mr-2`} />}
      {children && <Text style={tw`text-white text-sm`}>{children}</Text>}
      {icon && SvgComponent && <SvgComponent {...svgProps} style={tw`ml-2`} />}
      {/* {icon && !SvgComponent && <ArrowRightIcon style={tw`ml-2`} />} */}
    </TouchableOpacity>
  );
};
