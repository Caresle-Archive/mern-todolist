import mongoose from 'mongoose'
import configurations from './config.js'
const uri = configurations.MONGO_URI

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})

const db = mongoose.connection

db.once('open', () => {
	console.log('db connected')
})