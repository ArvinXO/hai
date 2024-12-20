import React from 'react';
import { Dialog as RadixDialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';

export const Dialog = ({ children }) => {
  return <RadixDialog>{children}</RadixDialog>;
};

export { DialogContent, DialogHeader, DialogTitle, DialogTrigger };
