const { RESTDataSource } = require('apollo-datasource-rest')

class ArticlesAPI extends RESTDataSource { 
	constructor() {
		super();
		this.baseURL = 'http://localhost:3000/'
	}

	async getAll() {
		const response = await this.get('articles')
		return Array.isArray(response)
			? response.map(article => this.articleReducer(article)) : []
	}

	articleReducer(article) {
		return {
			id: article.id,
			title: `${article.title.toUpperCase()}`,
			body: article.body,
			author_id: article.user_id
		}
	}
}

module.exports = ArticlesAPI
