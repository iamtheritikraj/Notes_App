import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

const app = express();

// SET TEMPLATE ENGINE AS EJS
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static(path.resolve("public")));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// ROUTES IMPORTS
import user_Routes from "./routes/users_routes.js";
import notes_Routes from "./routes/notes_routes.js";
import static_Routes from "./routes/static_routes.js";

// ROUTES DECLARATION
app.use("/", static_Routes);
app.use("/users", user_Routes);
app.use("/notes", notes_Routes);


export { app };
