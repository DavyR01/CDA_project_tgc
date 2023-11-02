import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dataSource from "../config/db";
import { buildSchema } from "type-graphql";
import { AdResolver } from "./resolvers/Ad";
import { CategoryResolver } from "./resolvers/Category";


const start = async ()=> {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [AdResolver, CategoryResolver],
    // emitSchemaFile: true // * This line generate a file schema.graph.ql automatically. it is optional.
  });
  const server = new ApolloServer({ schema });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);

}

start()
