import express from "express"
import {connectDb} from "./helpers/db.js"

import {patientRouter}
from "./routes/patients.js"

await connectDb ("mongodb://127.0.0.1:27017/IA2")

export const server = express ()

server.use("/patient", patientRouter)

server.listen (3000, () => {

console.log ("Server is working.")
})