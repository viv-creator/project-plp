import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlexboxLayout, Button, Label } from '@nativescript/core';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <FlexboxLayout flexDirection="column" justifyContent="center" alignItems="center" height="100%">
      <Label className="text-2xl mb-4" text="Welcome to Check In" />
      <Button 
        className="btn btn-primary m-2" 
        text="Start Mental Health Check" 
        onTap={() => navigation.navigate('Diagnosis')} 
      />
      <Button 
        className="btn btn-secondary m-2" 
        text="Find Support" 
        onTap={() => navigation.navigate('Support')} 
      />
    </FlexboxLayout>
  );
}