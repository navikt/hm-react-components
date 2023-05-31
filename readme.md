# hm-react-components

This is a UI component library for Team Digihot 


## Usage

To test components locally you can run: 
```
npm install
npm run build
npm run storybook
```

To use this UI library in your project, import the components you need from the library and use them in your React components.

```jsx
import React from "react";
import { Endringsvarsel } from "@navikt/hm-react-components";

function App() {
  return (
    <div>
      <Endringsvarsel
        tittel="name"
        tekst="tekst her"
        dato="01.01.2023"
      />
    </div>
  );
}

export default App;
```
