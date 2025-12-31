import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import tw from "./tailwind";


const variants = {
  default: tw`w-32 h-32`,
  md: tw`w-10 h-10`,
  lg: tw`w-20 h-20`,
} as const;

type Variant = keyof typeof variants;

interface ImgProps {
  type?: "href" | "local"; 
  variant?:Variant;
  style?:any;
  source: string | ImageSourcePropType; 
}



export const Img: React.FC<ImgProps> = ({
  type = "href",
  variant = "default",
  style,
  source,
}) => {
    const imageSource: ImageSourcePropType =
      type === "href" && typeof source === "string"
        ? { uri: source }
        : (source as ImageSourcePropType); 
  
    return (
      <Image
        source={imageSource}
        style={[variants[variant], style]}
      />
    );
  };