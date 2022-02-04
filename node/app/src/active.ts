import {createConnection, getConnection, getRepository} from "typeorm";
import { TaskActive } from "./entity/TaskActive";

(async () => {
    try {
        await createConnection()
        const task = new TaskActive()
        task.title = 'Task 1'
        task.done = true
        await task.save()
    } catch (error) {
        console.error(error)
    }
})()
