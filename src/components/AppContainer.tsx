import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { DiagnosisScreen } from './screens/DiagnosisScreen';
import { SupportScreen } from './screens/SupportScreen';
import { ChatBotScreen } from './screens/ChatBotScreen';
import { ProfessionalsScreen } from './screens/ProfessionalsScreen';
import { PharmacyScreen } from './screens/PharmacyScreen';
import { AuthStack } from './navigation/AuthStack';

const Stack = createStackNavigator();

export function AppContainer() {
  const [isAuthenticated] = React.useState(false);

  return (
    <NavigationContainer>
      {!isAuthenticated ? (
        <AuthStack />
      ) : (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4A90E2',
            },
            headerTintColor: '#ffffff',
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: 'Check In' }}
          />
          <Stack.Screen 
            name="Diagnosis" 
            component={DiagnosisScreen}
            options={{ title: 'Mental Health Check' }}
          />
          <Stack.Screen 
            name="Support" 
            component={SupportScreen}
            options={{ title: 'Support Services' }}
          />
          <Stack.Screen 
            name="ChatBot" 
            component={ChatBotScreen}
            options={{ title: 'AI Therapist' }}
          />
          <Stack.Screen 
            name="Professionals" 
            component={ProfessionalsScreen}
            options={{ title: 'Find Professional Help' }}
          />
          <Stack.Screen 
            name="Pharmacy" 
            component={PharmacyScreen}
            options={{ title: 'Medications' }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}