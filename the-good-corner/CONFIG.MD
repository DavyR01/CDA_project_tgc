
*********************** BACKEND ***********************

=> Setup & Config Apollo Server & GraphQL :

   https://www.apollographql.com/docs/apollo-server/getting-started/

- npm init --yes && npm pkg set type="module"
- `npm install @apollo/server graphql`
- set up with Typescript:
   - mkdir src
   - touch src/index.ts
   - `npm install --save-dev typescript @types/node`
   - touch tsconfig.json 
      The tsconfig.json file enables you to configure how TypeScript will compile your code.
      For more informations about compiler options : 
      https://www.typescriptlang.org/tsconfig

   - Add config in tsconfig.json : 
      {
         "compilerOptions": {
            "rootDirs": ["src"],
            "outDir": "dist",
            "lib": ["es2020"],
            "target": "es2020",
            "module": "esnext",
            "moduleResolution": "node",
            "esModuleInterop": true,
            "types": ["node"]
         }
      }
   - Finally, replace the default scripts entry in your package.json file with the following type and scripts entries.

      {
         // ...etc.
         "type": "module",
         "scripts": {
            "compile": "tsc",
            "start": "npm run compile && node ./dist/index.js"
         }
         // other dependencies
      }

      The above start script tells TypeScript to compile your code into JavaScript before using node to run that compiled code. Setting your project's type to module loads your JavaScript files as ES modules, enabling you to use top-level await calls.

   - launch the script with `npm start`, which should compile and run empty index.ts from now on and create a file index.js in a folder dist.





=> Setup TypeGraphQL : 

   https://typegraphql.com/docs/installation.html

   - `npm install type-graphql@next graphql-scalars reflect-metadata class-validator`
   - add import "reflect-metadata";
   - add options in tsconfig.json :
         "emitDecoratorMetadata": true, // add this
         "experimentalDecorators": true // and that  




*********************** FRONTEND ***********************


=> Setup & Congif Apollo Client & graphQL : 
   
   https://www.apollographql.com/docs/react/get-started

   - `npm install @apollo/client graphql`
   - in index.js : 
      import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
   - use the hook useQuery





*********************** TIPS ***********************

To change port default frontend :
   - add in your package.json : 
      "scripts": {
            "dev": "next dev -p 8080",
      }