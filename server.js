import express from "express";
import cors from "cors";

import usersRoute from "./APIs/users.js";
import foodsRoute from "./APIs/foods.js";
import categoriesRoute from "./APIs/categories.js";
import spinHistoryRoute from "./APIs/spinHistory.js";

const express = require("express");
const cors = require("cors");

const usersRoute = require("./APIs/users.js");
const foodsRoute = require("./APIs/foods.js");
const categoriesRoute = require("./APIs/categories.js");
const spinHistoryRoute = require("./APIs/spinHistory.js");

const app = express();

app.use(cors()); 
app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/foods", foodsRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/spin-history", spinHistoryRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});