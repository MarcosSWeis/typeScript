import { GraphQLString } from "graphql";
//greeting es un objeto que le va a indicar a graphql que nombre va a tern que argumentos puede recibir  y que va a devolver, asi depeus nos da los autocompletados
// graphql tiene sus propios tipos de datos , asi que hay que importarlos

export const greeting = {
  //type le indica que tipo de datos es
  type: GraphQLString,
  //resolve indica que función va a ejecutar y que va a devolver esa función
  resolve: () => "hola como estas?",
};
