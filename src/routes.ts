import { Router } from "express"
import { getUserById, getUsers, registerUser } from "./controller/UserController"

const rotas = Router()

rotas.get('/users', getUsers)
rotas.post('/users', registerUser)
rotas.get('/users/:id', getUserById)

export default rotas