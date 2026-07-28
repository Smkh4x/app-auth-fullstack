import express from "express";
import database from "./config/database.js";
import Users from "./models/user.model.js";
import router from "./routes/auth.routes.js";

const app = express();
app.use(express.json());

app.use("/api/auth", router);



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
