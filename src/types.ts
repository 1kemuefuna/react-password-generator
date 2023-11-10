import React from 'react'

export interface ReactifyPasswordGeneratorProps {
    renderTrigger: (props: { onClick: () => void }) => React.ReactNode;
    onGenerate: (password: string) => void;
    regex: RegExp;
}

export interface ReactifyPasswordStrengthIndicatorProps {
    password: string;
    regex: RegExp;
}