import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "valuePassword",
  database: "postgres",
  entities: ["src/entities/*.ts"],
  synchronize: true, // Permet d'effectuer automatiquement les modifications que l'on fait en base de données directement dans notre code. A enlever lors de la mise en production. lors de l'initialisation de la dataSource, Il va comparer l'état de la base de données avec le code et s'il constate des différences, il va rajouter ce qui est nécessaire, comme une table par exemple qui ne serait pas présente dans la base de données mais uniquement dans le code.
  logging: ["error"],
  // logging: ["query", "error"],
});

export default dataSource;
