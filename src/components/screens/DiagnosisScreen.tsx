import * as React from 'react';
import { ScrollView, StackLayout, Label, Button } from '@nativescript/core';

export function DiagnosisScreen() {
  const [answers, setAnswers] = React.useState<Record<string, boolean>>({});

  const questions = [
    'Have you been feeling down or depressed?',
    'Do you have trouble sleeping?',
    'Have you lost interest in activities you used to enjoy?',
    'Do you feel anxious or worried most of the time?'
  ];

  const handleAnswer = (questionIndex: number, answer: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  return (
    <ScrollView>
      <StackLayout padding={16}>
        <Label className="text-xl mb-4" text="Mental Health Assessment" />
        {questions.map((question, index) => (
          <StackLayout key={index} className="mb-4">
            <Label text={question} textWrap={true} />
            <FlexboxLayout className="mt-2">
              <Button 
                text="Yes" 
                className={`mr-2 ${answers[index] === true ? 'btn-primary' : 'btn-outline'}`}
                onTap={() => handleAnswer(index, true)} 
              />
              <Button 
                text="No" 
                className={answers[index] === false ? 'btn-primary' : 'btn-outline'}
                onTap={() => handleAnswer(index, false)} 
              />
            </FlexboxLayout>
          </StackLayout>
        ))}
      </StackLayout>
    </ScrollView>
  );
}