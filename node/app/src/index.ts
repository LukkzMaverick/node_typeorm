import "reflect-metadata";
import {createConnection} from "typeorm";

// (async () => {
//     const connection = await createConnection()
// })()
createConnection().then(()=> console.log("connected to database"))
.catch((err)=> console.log(err))