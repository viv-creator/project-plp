import * as React from 'react';
import { ScrollView, StackLayout, Label, Button, Image } from '@nativescript/core';

type Professional = {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  available: boolean;
};

export function ProfessionalsScreen() {
  const [professionals] = React.useState<Professional[]>([
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Psychiatrist',
      rating: 4.8,
      available: true
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Clinical Psychologist',
      rating: 4.9,
      available: true
    },
    {
      id: '3',
      name: 'Dr. Emily Williams',
      specialty: 'Therapist',
      rating: 4.7,
      available: false
    }
  ]);

  const handleBookAppointment = (professional: Professional) => {
    console.log(`Booking appointment with ${professional.name}`);
  };

  return (
    <ScrollView>
      <StackLayout padding={16}>
        <Label className="text-xl mb-4" text="Available Professionals" />
        
        {professionals.map((professional) => (
          <StackLayout
            key={professional.id}
            className="p-4 mb-4 bg-white rounded-lg shadow"
          >
            <Label className="font-bold text-lg" text={professional.name} />
            <Label text={professional.specialty} />
            <Label text={`Rating: ${professional.rating}/5.0`} />
            
            <Button
              className={`mt-2 ${professional.available ? 'btn-primary' : 'btn-secondary'}`}
              text={professional.available ? 'Book Appointment' : 'Not Available'}
              isEnabled={professional.available}
              onTap={() => handleBookAppointment(professional)}
            />
          </StackLayout>
        ))}
      </StackLayout>
    </ScrollView>
  );
}