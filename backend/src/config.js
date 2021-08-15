import { config } from 'dotenv'
config()

const configurations = {
	PORT: process.env.PORT,
	MONGO_URI: process.env.MONGO_URI
}

export default configurations