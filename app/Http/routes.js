'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')


Route.on('/').render('welcome')

//================= REGISTRO
Route.get('register', 'AuthController.showRegisterPage')
Route.post('register', 'AuthController.register')
//================= REGISTRO

//================= LOGIN
Route.get('login', 'AuthController.showLoginPage')
Route.post('login', 'AuthController.login')
//================= LOGIN

//================= LOGOUT
Route.get('logout', 'AuthController.logout')
//================= LOGOUT

//================= TICKETS
Route.get('new_ticket', 'TicketsController.create')
Route.post('new_ticket', 'TicketsController.store')
//================= TICKETS
