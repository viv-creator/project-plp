import * as React from 'react';
import { ScrollView, StackLayout, Label, Button } from '@nativescript/core';

export function SupportScreen() {
  const supportResources = [
    {
      title: 'Crisis Hotline',
      phone: '1-800-273-8255',
      description: '24/7 support for those in crisis'
    },
    {
      title: 'Find a Therapist',
      description: 'Connect with mental health professionals'
    },
    {
      title: 'Support Groups',
      description: 'Join local support groups'
    }
  ];

  return (
    <ScrollView>
      <StackLayout padding={16}>
        <Label className="text-xl mb-4" text="Support Services" />
        {supportResources.map((resource, index) => (
          <StackLayout key={index} className="p-4 mb-4 bg-white rounded">
            <Label className="font-bold" text={resource.title} />
            {resource.phone && (
              <Button 
                className="btn btn-primary mt-2" 
                text={`Call ${resource.phone}`} 
              />
            )}
            <Label textWrap={true} text={resource.description} />
          </StackLayout>
        ))}
      </StackLayout>
    </ScrollView>
  );
}