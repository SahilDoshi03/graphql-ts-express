import express from "express";
import cors from "cors";
import { connectDB } from "./db/connect.js";
import { config } from "dotenv";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolvers.js";
import gql from "graphql-tag";
import { readFileSync } from "fs";
import path from "path";
config();
const app = express();
const typeDefs = gql(readFileSync(path.resolve(process.cwd(), "src/schema.graphql"), {
    encoding: "utf-8",
}));
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
await server.start();
app.get("/", (_, res) => {
    res.status(200).send("<h1>Welcome</h1>");
});
app.use("/graphql", cors(), express.json(), expressMiddleware(server));
const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(3000, () => {
            console.log("app listening on port 3000");
        });
    }
    catch (e) {
        console.log("Error Starting Server");
    }
};
startServer();
