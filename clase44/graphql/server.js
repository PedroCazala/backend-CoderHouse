import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./models/Persona.js";

const app = express();
import {
  createPersona,
  deletePersona,
  getPersonas,
  updatePersona,
  getPersona,
} from "./utils/functions.js";

app.use(express.static("public"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: {
      getPersonas,
      getPersona,
      createPersona,
      updatePersona,
      deletePersona,
    },
    graphiql: true,
  })
);


const PORT = 8080;
app.listen(PORT, () => {
  const msg = `Servidor corriendo en puerto: ${PORT}`;
  console.log(msg);
});