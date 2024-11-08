import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { Login } from "../screens/auth/Login";
import { Register } from "../screens/auth/Register";

const StackNavigator = stackNavigatorFactory();

export function AuthStack() {
  return (
    <StackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#4A90E2",
        },
        headerTintColor: "#ffffff",
      }}
    >
      <StackNavigator.Screen
        name="Login"
        component={Login}
        options={{ title: "Sign In" }}
      />
      <StackNavigator.Screen
        name="Register"
        component={Register}
        options={{ title: "Create Account" }}
      />
    </StackNavigator.Navigator>
  );
}