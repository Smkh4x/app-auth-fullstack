import express from "express";
import database from "./config/database.js";
import Users from "./models/user.model.js";

const app = express()
app.use(express.json())


const main = async () => {
    try {

    await database.authenticate();
    console.log("\n\n\t[+] Connection is succesfully");

    await database.sync();

    app.listen(3009, () =>  {
       console.log("\t[+] Server On Port : 3009")  
    })

    } catch (err) {
        console.log({
            error: err.message
        })
    }
}
main()
