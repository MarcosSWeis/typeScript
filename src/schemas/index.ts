import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { greeting } from "./queries/greeting";
const RootQuery = new GraphQLObjectType({
  //nombre de mi GraphQLObjectType
  name: "RootQuery",
  //funcione a las que puede consultar ese RootQuery y se importan para que quede ordenado y en el otro archivo el digo los tipos de datos
  // si puseira la funcion  aca , graphql no sabria que tipo de dato puede recibir  que tipo de dato devolver
  fields: {
    //hora cundo consulten greeting voy a ejecutar la función greeting
    greeting: greeting,
  },
});

//estos esquema lso voy a necesitar para las consultas que llegan entonces los export

export const schema = new GraphQLSchema({
  //ahora la query que va a ejecutar es RootQuery
  query: RootQuery,
  // mutation: {},
});
