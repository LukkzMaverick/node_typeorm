import {createConnection, getConnection, getRepository} from "typeorm";
import { Task } from "./entity/Task";
import { TaskRepository } from "./entity/TaskRepository";

(async () => {
    try {
        const connection = await createConnection()
        const taskRepository = connection.getCustomRepository(TaskRepository) 
        const task = new Task()
        task.title = "Tarefa"
        task.done = false
        await taskRepository.save(task)
    } catch (error) {
        console.error(error)
    }
})()
