import { Img } from "@/lib/Img";
import { View } from "react-native";

export default function Index() {
  

  return (
    <View>
      <Img type="href" source={"https://plus.unsplash.com/premium_photo-1760028215121-0cb0f3b99fca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      <Img type="local" source={require("../assets/shop_bug.png")}/>
       {/* <Image
        source={require('../assets/shop_bug.png')} 
        style={{ width: 200, height: 200 }}  
       
      />
       <Image
        source={{
          uri:"https://plus.unsplash.com/premium_photo-1760028215121-0cb0f3b99fca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }} 
        // style={{ width: 200, height: 200 }}  
        style={tw`w-20 h-20`}
  
      /> */}
    </View>
  );
}
