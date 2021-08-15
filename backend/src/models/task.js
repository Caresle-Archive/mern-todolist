import mongoose from 'mongoose'
const { Schema, model } = mongoose

const taskSchema = new Schema({
	name: String,
	important: Boolean,
	completed: Boolean
})

taskSchema.set('toJSON', {
	transform: (doc, ret) => {
		ret.id = ret._id
		delete ret._id
		delete ret.__v
	}
})

const Task = model('Task', taskSchema)

export default Task