import { assets } from "@/assets";
import { getInit } from "@/components/lib";
import { Login_sc } from "@/components/schema";
import { Button, FormInput, Heading } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import { Formik } from "formik";
import React from "react";
import { Image, View } from "react-native";

export default function Login() {
  const handlesubmit = (values: any) => {
    console.log("Login Attempt:", values);
  };

  return (
    <View style={tw`flex-1 justify-center px-6`}>
      <Image source={assets.logo} style={tw`w-20 h-20 mx-auto`} />

      <Heading variant="h1" style={tw`mt-2 mb-1 mx-auto`}>
        MovieZone
      </Heading>

      <Heading variant="p" style={tw`mx-auto mb-6`}>
        Unlimited movies and series anytime
      </Heading>

      <Formik
        initialValues={getInit(Login_sc)}
        validationSchema={Login_sc}
        onSubmit={handlesubmit}
      >
        {(formik) => (
          <View style={tw`w-full gap-4`}>
            <FormInput
              name="email"
              formik={formik}
              placeholder="Email"
              // leftIcon="email"
            />

            <FormInput
              name="password"
              formik={formik}
              placeholder="Password"
              // leftIcon="lock"
              secure
            />

            <Button
              label="Sign in"
              style={tw`rounded-full h-11`}
              onPress={formik.handleSubmit}
            ></Button>
          </View>
        )}
      </Formik>
    </View>
  );
}
