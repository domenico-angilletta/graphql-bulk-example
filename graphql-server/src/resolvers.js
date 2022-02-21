module.exports = {
	Query: {
		articles: (_, __, { dataSources }) => dataSources.articlesAPI.getAll(),
	},
	Article: {
		author: (parent, __, { dataSources }) => dataSources.usersAPI.getBatched(parent.author_id),
	}
}
