import tw from "@/lib/tailwind";
import { FormikProps } from "formik";
import React, { useRef, useState } from "react";
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
  containerStyle,
  inputProps,
}: FormikInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const animated = useRef(new Animated.Value(0)).current;
  const inputRef = useRef<TextInput>(null);

  const value = formik.values[name];
  const error = formik.errors[name];
  const touched = formik.touched[name];


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

        <TextInput
          ref={inputRef}
          value={value}
          secureTextEntry={secure && !showPassword}
          onChangeText={formik.handleChange(name)}
          onBlur={formik.handleBlur(name)}
          style={tw`flex-1 px-2 bg-input text-input_foreground text-white`}
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



// import { Button, FormInput } from "@/lib";
// import tw from "@/lib/tailwind";
// import { Formik } from "formik";
// import { View } from "react-native";

// export default function Index() {
//   const handleRegister = async (values: any) => {
//     console.log(values);
//   };

//   return (
//     <View>
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         onSubmit={handleRegister}
//       >
//         {(formik) => (
//           <View style={tw`gap-5`}>
//             <FormInput
//               name="email"
//               formik={formik}
//               placeholder="Email"
//             />

//             <FormInput
//               name="password"
//               formik={formik}
//               placeholder="Password"
//               secure
//             />

//             <Button label="Submit" onPress={formik.handleSubmit}/>
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// }
