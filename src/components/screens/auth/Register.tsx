import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { AuthStackParamList } from "../../../types/NavigationTypes";

type RegisterProps = {
  navigation: FrameNavigationProp<AuthStackParamList, "Register">;
};

export function Register({ navigation }: RegisterProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleRegister = () => {
    // TODO: Implement registration logic
    console.log("Registration attempted");
  };

  return (
    <scrollView className="bg-gray-100 p-4">
      <stackLayout className="space-y-4">
        <label className="text-2xl font-bold text-center text-blue-600">
          Create Your Account
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
        
        <textField
          className="p-4 bg-white rounded-lg border border-gray-300"
          hint="Confirm Password"
          secure={true}
          text={confirmPassword}
          onTextChange={(e) => setConfirmPassword(e.value)}
        />
        
        <button
          className="bg-blue-600 text-white p-4 rounded-lg font-bold"
          onTap={handleRegister}
        >
          Create Account
        </button>
        
        <button
          className="bg-white text-blue-600 p-4 rounded-lg font-bold border border-blue-600"
          onTap={() => navigation.goBack()}
        >
          Back to Login
        </button>
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