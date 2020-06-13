const request = require('supertest')
const server = require('../api/server')


//Has to be Changed since I couldn't figure out how to make a testing Database
describe('auth-router.js', () => {
  describe('Register, /register', () => {
    test('registers successfully with res 201', () => {
      return request(server)
        .post('/api/auth/register')
        .send({ "username": "BPerson", "password": "5564" })
        .then(res => {
          expect(res.status).toBe(201)
        })
    })
  })
  test('returns json', () => {
			return request(server)
				.post('/api/auth/register')
				.send({ username: 'test1', password: '5564' })
				.set('Accept', 'application/json')
				.then((res) => {
					expect(res.type).toBe('application/json')
				})
		})	
})
  
describe('login', () => {

  test('logs in successfully with res 200', () => {
    return request(server)
      .post('/api/auth/login')
      .send({ "username": "APerson", "password": "5564" })
      .then(res => {
        expect(res.status).toBe(200)
      });
  });

  test('checks returns json on login', function () {
			return request(server)
				.post('/api/auth/login')
				.send({ username: 'test1', password: '5564' })
				.set('Accept', 'application/json')
				.then((res) => {
					expect(res.type).toBe('application/json')
				})
		})
})
