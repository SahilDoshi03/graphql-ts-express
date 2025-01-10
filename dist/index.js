import express from "express";
// import { connectDB } from "./db/connect";
import { config } from "dotenv";
import { a } from "./try";
console.log(a);
config();
const app = express();
app.use("/", (_, res) => {
    res.status(200).send("hello");
});
const startServer = async () => {
    try {
        // await connectDB(process.env.MONGO_URI);
        app.listen(3000, () => {
            console.log("app listening on port 3000");
        });
    }
    catch (e) {
        console.log("Error Starting Server");
    }
};
startServer();
