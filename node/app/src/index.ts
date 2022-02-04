import "reflect-metadata";
import {createConnection, getConnection, getRepository} from "typeorm";
import { Task } from "./entity/Task";

(async () => {
    try {
        await createConnection()
        // const entityManager = getConnection().manager
        // const res = await entityManager.findAndCount(Task)
        // console.log(res)

        const taskRepository = getRepository(Task)
        const res = await taskRepository.findAndCount()
        console.log(res)
    } catch (error) {
        console.error(error)
    }
})()
// createConnection("con1").then(()=> console.log("connected to database"))
// .catch((err)=> console.log(err))