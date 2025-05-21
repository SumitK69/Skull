
import React from 'react';
import { Skull } from 'lucide-react';

interface SuccessMessageProps {
  message: string;
}

const SuccessMessage = ({ message }: SuccessMessageProps) => {
  return (
    <div className="flex items-center justify-center gap-3 text-sage bg-sunset/10 backdrop-blur-md px-6 py-5 rounded-lg border border-sunset/20 animate-scale-in">
      <Skull className="h-6 w-6 text-sunset" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default SuccessMessage;
