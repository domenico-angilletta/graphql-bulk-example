const { gql } = require('apollo-server')

const typeDefs = gql`
	type Article {
		id: ID
		title: String
		body: String
		author_id: ID
		author: User
	}
	
	type User {
		id: ID
		name: String
	}
	
	type Query {
		articles: [Article]
	}
`

module.exports = typeDefs
