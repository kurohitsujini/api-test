const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
});

server
    .listen()
    .then(({ url }) => console.log(`🚀 Server ready at ${url}graphql`));