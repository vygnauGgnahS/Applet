
import { service } from 'utils/request.js'

export function login(username, password){
	let data = {
		username: username,
		password: password,
		role: 'USER'
	}
	return service('/login', 'POST', data)
}

export function register(username, password){
	let data = {
		username: username,
		password: password,
		role: 'USER'
	}
	return service('/register', 'POST', data)
}

