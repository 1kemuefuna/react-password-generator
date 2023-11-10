import React, { useState } from "react";
import { ReactifyPasswordGeneratorProps } from "./types";

export const ReactifyPasswordGenerator: React.FC<ReactifyPasswordGeneratorProps> = ({
  renderTrigger,
  onGenerate,
  regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
}) => {
  const [password, setPassword] = useState<string>("");

  const generatePassword = (length: number, complexity: number) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    // Ensure the generated password matches the regex
    while (!regex.test(newPassword)) {
      newPassword = "";
      for (let i = 0; i < length; i++) {
        newPassword += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
    }

    setPassword(newPassword);
    onGenerate(newPassword);
  };

  return <>{renderTrigger({ onClick: () => generatePassword(12, 2) })}</>;
};

