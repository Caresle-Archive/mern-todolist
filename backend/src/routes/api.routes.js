import { Router } from 'express'
const router  = Router()

import { 
	getAllTasks, 
	createTask, 
	deleteTask, 
	updateTask
} from '../controllers/api.controllers.js'

router.get('/api/v1/', getAllTasks)

router.post('/api/v1/', createTask)

router.delete('/api/v1/:id', deleteTask)

router.put('/api/v1/:id', updateTask)
export { router }