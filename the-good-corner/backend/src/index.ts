import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dataSource from "../config/db";
import { buildSchema } from "type-graphql";
import { AdResolver } from "./resolvers/Ad";
import { CategoryResolver } from "./resolvers/Category";


const start = async ()=> {
  await dataSource.initialize(); // Permet de créer la connexion à la base de données.

  const schema = await buildSchema({
    resolvers: [AdResolver, CategoryResolver],
    // emitSchemaFile: true // * This line generate a file schema.graph.ql automatically. it is optional. To be withdrawn in production.
  });
  const server = new ApolloServer({ schema });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
  console.log('hello');
  console.log('hello 2'); 
  console.log('hello 3'); 

}

start()
