import * as React from 'react';
import { ScrollView, StackLayout, TextField, Button, Label } from '@nativescript/core';

export function ChatBotScreen() {
  const [message, setMessage] = React.useState('');
  const [chat, setChat] = React.useState<Array<{text: string; isUser: boolean}>>([
    { text: 'Hello! I\'m here to help. How are you feeling today?', isUser: false }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setChat(prev => [...prev, { text: message, isUser: true }]);
    setMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      setChat(prev => [...prev, {
        text: 'Thank you for sharing. Would you like to tell me more about that?',
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <StackLayout height="100%">
      <ScrollView className="flex-grow">
        <StackLayout padding={16} className="space-y-4">
          {chat.map((msg, index) => (
            <StackLayout
              key={index}
              className={`p-3 rounded-lg max-w-3/4 ${
                msg.isUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200'
              }`}
            >
              <Label textWrap={true} text={msg.text} />
            </StackLayout>
          ))}
        </StackLayout>
      </ScrollView>
      
      <StackLayout className="p-4 border-t border-gray-200">
        <FlexboxLayout className="space-x-2">
          <TextField
            className="flex-grow p-2 border rounded"
            hint="Type your message..."
            text={message}
            onTextChange={(e) => setMessage(e.value)}
          />
          <Button
            className="btn btn-primary"
            text="Send"
            onTap={handleSend}
          />
        </FlexboxLayout>
      </StackLayout>
    </StackLayout>
  );
}