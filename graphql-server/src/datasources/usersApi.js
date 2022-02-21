const { RESTDataSource } = require('apollo-datasource-rest')
const DataLoader = require('dataloader')

class UsersAPI extends RESTDataSource { 
	constructor() {
		super();
		this.baseURL = 'http://localhost:3000/'
	}

	async getAll() {
		const response = await this.get('users')
		return Array.isArray(response)
			? response.map(user => this.userRreducer(user)) : []
	}

	async getById(id) {
		const response = await this.get(`users/${id}`)
		return this.userRreducer(response)
	}

	async getBatched(id) {
		return this.userLoader.load(id)
	}

	userLoader = new DataLoader(async (ids) => {
	  const usersList = await this.get('users', { 
			ids: ids.join(',')
		})

		return ids.map(id => this.userReducer(usersList.find((user) => user.id === id)))
	})

	userReducer(user) {
		return {
			id: user.id,
			name: `${user.firstname} ${user.lastname}`,
		}
	}
}

module.exports = UsersAPI
