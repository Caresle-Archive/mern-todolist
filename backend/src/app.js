
import express from 'express'
import cors from 'cors'
import configurations from './config.js'
const app = express()
const PORT = configurations.PORT || 3001

import './db.js'
import { router as apiRoutes } from './routes/api.routes.js'

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Try /api/v1/')
	res.end()
})

app.use(apiRoutes)

app.listen(PORT, () => {
	console.log(`Server on PORT ${PORT}`)
})