import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schemas"; //no es necesario describir el archivo index por defecto busca ese, si se llamaria diferente si
const app = express();
dotenv.config();
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);
const { EXPRESS_PORT } = process.env;
app.listen(EXPRESS_PORT, () => `server corriendo en el puerto ${EXPRESS_PORT}`);
