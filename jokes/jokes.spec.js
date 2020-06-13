const request = require('supertest')
const server = require('../api/server')

describe('jokes-router.js', () => {
	describe('GET /', () => {
		test('it returns 400 without token', () => {
			return request(server)
				.get('/api/jokes')
				.then((res) => {
					expect(res.status).toBe(400)
				})
		})
		test('it returns JSON', () => {
			return request(server)
				.get('/api/jokes')
				.then((res) => {
					expect(res.type).toMatch(/json/i)
				})
		})
		
	})
})
