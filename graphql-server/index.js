const { ApolloServer } = require('apollo-server')

const resolvers = require('./src/resolvers')
const typeDefs = require('./src/schema')
const ArticlesAPI = require('./src/datasources/articlesApi')
const UsersAPI = require('./src/datasources/usersApi')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
		articlesAPI: new ArticlesAPI(),
		usersAPI: new UsersAPI(),
	})
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
