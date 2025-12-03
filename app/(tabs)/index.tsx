import tw from "@/lib/tailwind";
import React from "react";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={tw`p-2 flex-1` }>
      
   
     <View style={tw`w-full flex-row gap-3`}>
      <View style={tw`border flex-1 h-20`}></View>
      <View style={tw`border flex-1 h-20`}></View>

     </View>
    </View>
  );
}
