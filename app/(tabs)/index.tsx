import { Button } from "@/lib";
import tw from "@/lib/tailwind";
import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text style={tw`text-3xl`}>HomeScreen</Text>
      {/* <Button onPress={() => console.log("press")}>
        <Text style={{ color: "white" }}>Submit</Text>
      </Button> */}
      <Button label="Julfikerr"   variant="success"  />

      {/* <View style={tw`bg-primary mt-10 [&>text]:text-[red] text-white p-2 rounded-md`}>
        <Text>Julfiker</Text>
     </View> */}
    </View>
  );
}
