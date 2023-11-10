# Reactify Password Generator

A React library for generating and checking password strength with a customizable regex pattern.

## Installation

You can install this library via npm or yarn:

```bash
npm install reactify-password-generator
# or
yarn add reactify-password-generator
```

## Usage

### Password Generator

```jsx
import React from 'react';
import { ReactifyPasswordGenerator } from 'reactify-password-generator';

const App = () => {
  const handleGeneratePassword = (password) => {
    console.log('Generated Password:', password);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <ReactifyPasswordGenerator
        renderTrigger={(props) => <button {...props}>Generate Password</button>}
        onGenerate={handleGeneratePassword}
        regex={/your-custom-regex-here/}
      />
    </div>
  );
};

export default App;
```

### Password Strength Indicator

```jsx
import React from 'react';
import { ReactifyPasswordStrengthIndicator } from 'reactify-password-generator';

const App = () => {
  const password = 'your-password-here';

  return (
    <div>
      <h1>Password Strength Indicator</h1>
      <ReactifyPasswordStrengthIndicator password={password} regex={/your-custom-regex-here/} />
    </div>
  );
};

export default App;
```

## Props

### `ReactifyPasswordGenerator` Props

- `renderTrigger`: Function to render the trigger button.
- `onGenerate`: Callback function that is called when a password is generated.
- `regex`: Regular expression for password complexity.

### `ReactifyPasswordStrengthIndicator` Props

- `password`: The password to check for strength.
- `regex`: Regular expression for password complexity.

## Custom Regex Pattern

You can specify a custom regex pattern to enforce password complexity. The default pattern enforces at least one symbol, one capital letter, one small letter, and one number.

## License

This library is licensed under the MIT License. See the [LICENSE](https://github.com/1kemuefuna/reactify-password-generator/blob/main/LICENSE "LICENSE") file for details.