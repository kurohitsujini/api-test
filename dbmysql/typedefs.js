const { gql } = require('apollo-server');
const typeDefs = gql`        
        type Persona {
            id: ID!
            fullname: String
            points: Int
            position: Int
            active: Boolean
            empleados_id: Int
            empleados: [Empleados]
        }
        type Empleados {
            id: ID!
            name: String!
            department: String!
        }
        type Query {
            persona: [Persona]
            empleado: [Empleados]
            personas(id: ID!): [Persona]
        }
        type Mutation{
            createPersona(fullname: String!, points: Int!, position: Int!, empleados_id: Int!): Persona!
            updatePersona(id: ID!, fullname: String, points: Int, position: Int, empleados_id: Int, active: Boolean): Persona!
            deletePersona(id: ID!): Persona!
        }
    `;
module.exports = typeDefs;