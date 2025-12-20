import { Button, FormInput } from "@/lib";
import tw from "@/lib/tailwind";
import { Formik } from "formik";
import { View } from "react-native";

export default function Index() {
  const handleRegister = async (values: any) => {
    console.log(values);
  };

  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleRegister}
      >
        {(formik) => (
          <View style={tw`gap-5`}>
            <FormInput
              name="email"
              formik={formik}
              placeholder="Email"
            />

            <FormInput
              name="password"
              formik={formik}
              placeholder="Password"
              secure
            />

            <Button label="Submit" onPress={formik.handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
  );
}
