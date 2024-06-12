import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "example",
  database: "postgres",
//   entities: [`./src/entities/*{.js,.ts}`], // Ne fonctionne pas
  entities: [`${__dirname}/../entities/*{.js,.ts}`], // __dirname correspond au chemin absolu du répertoire actuel. Ce qui évite les problèmes de chemin d'ccès au path courant.
  synchronize: true,
  logging: ["query", "error"],
});

export default dataSource;
