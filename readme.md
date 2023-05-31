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

## Add a new component and publish to GitHub npm registry

Create a new folder for your component under /components and add an import 
statement for the new component from src/components/index.ts and from src/index.ts

You need to set up a .npmrc file before publishing, see https://github.com/navikt/frontend#github-npm-registry

When you are ready to publish, update the package.json version and run
```
npm publish
```


