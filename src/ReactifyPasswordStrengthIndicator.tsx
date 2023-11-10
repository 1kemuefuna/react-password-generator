import React from 'react';
import { ReactifyPasswordStrengthIndicatorProps } from './types';

export const ReactifyPasswordStrengthIndicator: React.FC<ReactifyPasswordStrengthIndicatorProps> = ({ password, regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ }) => {
  const calculateStrength = (password: string) => {
    if (regex.test(password)) {
      return 'Strong';
    } else {
      return 'Weak';
    }
  };

  return <div>Password Strength: {calculateStrength(password)}</div>;
};
