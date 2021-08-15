import Task from '../models/task.js'

export const getAllTasks = async (req, res) => {
	const tasks = await Task.find()

	if (tasks.length > 0) {
		res.status(200)
		res.json(tasks).end()
	}
	res.status(204).end()
}

export const createTask = (req, res) => {
	const { name, important } = req.body
	Task.create({name: name, important: important, completed: false})
		.then(data => {
			res.status(200)
			res.json(data).end()
		})
}

export const deleteTask = (req, res) => {
	Task.findByIdAndDelete(req.params.id)
		.then(() => res.status(204).end())
}

export const updateTask = (req, res) => {
	const { name, important, completed } = req.body
	const newTaskInfo = {
		name: name,
		important: important,
		completed: completed
	}
	Task.findOneAndUpdate({_id: req.params.id}, newTaskInfo, {new: true})
		.then(data => {
			res.status(200)
			res.json(data)
		})
}
