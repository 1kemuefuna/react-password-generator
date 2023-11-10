declare module 'reactify-password-generator' {
  import { ReactNode } from 'react';

  export interface ReactifyPasswordGeneratorProps {
    renderTrigger: (props: { onClick: () => void }) => React.ReactNode;
    onGenerate: (password: string) => void;
    regex: RegExp;
  }

  export interface ReactifyPasswordStrengthIndicatorProps {
    password: string;
    regex: RegExp;
  }

  export const ReactifyPasswordGenerator: React.FC<ReactifyPasswordGeneratorProps>;
  export const ReactifyPasswordStrengthIndicator: React.FC<ReactifyPasswordStrengthIndicatorProps>;

}
