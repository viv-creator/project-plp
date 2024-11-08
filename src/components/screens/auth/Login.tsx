import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { AuthStackParamList } from "../../../types/NavigationTypes";

type LoginProps = {
  navigation: FrameNavigationProp<AuthStackParamList, "Login">;
};

export function Login({ navigation }: LoginProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    // TODO: Implement authentication logic
    console.log("Login attempted");
  };

  return (
    <scrollView className="bg-gray-100 p-4">
      <stackLayout className="space-y-4">
        <label className="text-2xl font-bold text-center text-blue-600">
          Welcome to Check In
        </label>
        
        <textField
          className="p-4 bg-white rounded-lg border border-gray-300"
          hint="Email"
          keyboardType="email"
          text={email}
          onTextChange={(e) => setEmail(e.value)}
        />
        
        <textField
          className="p-4 bg-white rounded-lg border border-gray-300"
          hint="Password"
          secure={true}
          text={password}
          onTextChange={(e) => setPassword(e.value)}
        />
        
        <button
          className="bg-blue-600 text-white p-4 rounded-lg font-bold"
          onTap={handleLogin}
        >
          Sign In
        </button>
        
        <button
          className="bg-white text-blue-600 p-4 rounded-lg font-bold border border-blue-600"
          onTap={() => navigation.navigate("Register")}
        >
          Create Account
        </button>
        
        <stackLayout className="mt-4">
          <label className="text-center text-gray-600">Or sign in with</label>
          <flexboxLayout className="justify-center space-x-4 mt-2">
            <button className="bg-red-500 text-white p-2 rounded-lg w-1/3">
              Google
            </button>
            <button className="bg-blue-800 text-white p-2 rounded-lg w-1/3">
              Facebook
            </button>
          </flexboxLayout>
        </stackLayout>
      </stackLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
  },
});