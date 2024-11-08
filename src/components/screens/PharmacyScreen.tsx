import * as React from 'react';
import { ScrollView, StackLayout, Label, Button } from '@nativescript/core';

type Medication = {
  id: string;
  name: string;
  dosage: string;
  schedule: string;
  refillDate: string;
};

export function PharmacyScreen() {
  const [medications] = React.useState<Medication[]>([
    {
      id: '1',
      name: 'Sertraline',
      dosage: '50mg',
      schedule: 'Once daily',
      refillDate: '2024-12-01'
    },
    {
      id: '2',
      name: 'Alprazolam',
      dosage: '0.5mg',
      schedule: 'As needed',
      refillDate: '2024-11-15'
    }
  ]);

  const handleRefill = (medicationId: string) => {
    console.log(`Requesting refill for medication ${medicationId}`);
  };

  return (
    <ScrollView>
      <StackLayout padding={16}>
        <Label className="text-xl mb-4" text="My Medications" />
        
        {medications.map((medication) => (
          <StackLayout
            key={medication.id}
            className="p-4 mb-4 bg-white rounded-lg shadow"
          >
            <Label className="font-bold text-lg" text={medication.name} />
            <Label text={`Dosage: ${medication.dosage}`} />
            <Label text={`Schedule: ${medication.schedule}`} />
            <Label text={`Next Refill: ${medication.refillDate}`} />
            
            <Button
              className="mt-2 btn-primary"
              text="Request Refill"
              onTap={() => handleRefill(medication.id)}
            />
          </StackLayout>
        ))}
        
        <Button
          className="mt-4 btn-secondary"
          text="Find Nearby Pharmacies"
        />
      </StackLayout>
    </ScrollView>
  );
}