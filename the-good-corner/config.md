
Pour passer de l'API REST à l'API GraphQL, suivre ces étapes : 

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
   https://www.npmjs.com/package/type-graphql?activeTab=versions

   - `npm install type-graphql@next graphql-scalars reflect-metadata class-validator` (on note le tag @next pour installer la version 2.O.O beta de typeGraphQL qui est compatible avec la dernière version 4 de ApolloServer contrairemenent à la V1 de typeGraphQL => voir sur npmjs.com)
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




*********************** Configuration DOCKER with POSTGRES ***********************


1) Setup Docker :

   - Create and complete Dockerfile in backend and frontend folders respectively.
   - Create and complete docker-compose.yml to the root project.
   - launch the script `docker-compose up --build`

2) Install Postgres with docker :

   - To install postgres with Docker instead of sqlite : 
      - add and complete "db" in `docker-compose.yml`
      - Modify configuration file `db.ts`. Replace type sqlite by postgres...
      - Pull out sqlite from package.json.
      - Install postgreSQL with launching script : `npm i pg`
      - re-launch the script `docker-compose up --build`. It still triggers `npm i` automatically every time a change is made.

3) Configurer et mettre en place l'ordre d'exécution des containers :
   - Nous devons avoir successivement : 
      - La base de données
      - le backend
      - le frontend

   - Pour cela : 
      - Mettre en place un healthcheck sur le container db ainsi que l'option `depends_on` sur le backend pour s'assurer que la db est opérationnel avant de lancer le backend.
         - la commande `pg_isready` permet de vérifier si la base de donnée est accessible.

      - Mettre un autre healthcheck sur le container backend ainsi que l'option `depends_on `sur le frontend pour nous avertir lorsque le backend est prêt, que l'API GraphQL a démarré et seulement après, le frontend pourra démarrer.
         - Ajouter la librairie curl côté Dockerfile du backend pour pouvoir l'utiliser avec docker.

      L'option `depends_on` indique que le backend dépend du service db et que le frontend dépend du service backend. On se sert des dépendances de services pour définir l'ordre.

      Ces status sont représentés pas un statut healthy pour nous informer lorsque le container correspondant est prêt et starting lorsque le container est en cours de démarrage.
      Visible dans les logs.

   - `curl http://localhost:4000` => Permet de consulter de manière textuelle un site web grâce à une ligne de commande.
   - `ping http://localhost:4000` => Permet de tester le fonctionnement, le bon déroulement d'une URL, d'un site web.

   - Pour enlever l'erreur role "root" does not exist : rajouter l'instruction dans le fichier docker-compose en lui indiquant le nom de l'utilisateur et de la database par défaut de docker. 








*********************** TIPS ***********************

To change port default frontend :
   - add in your package.json : 
      "scripts": {
            "dev": "next dev -p 8080",
      }


*********************** A SAVOIR ***********************

- Apollo Client vient remplacer Axios.
   - gql permet d'écrire les requêtes GraphQL
   - Le hook useQuery remplace le hook useEffect et le stockage des données stockées par useState lors du fetch avec axios. useQuery équivalent avec useSWR.
- Apollo Server vient remplacer Express.

- Avant, on traitait les données avec Express et une API REST.
Maintenant, on traite les données avec Apollo Server et une API GraphQL.
L'API GraphQL permet d'interagir entre le client et le serveur et vient remplace l'API REST.