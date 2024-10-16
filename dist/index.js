"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./constants");
const services_1 = require("./services");
const app = (0, express_1.default)();
const PORT = 3333;
app.use(express_1.default.json());
app.get(constants_1.FUNDS_URL, services_1.getAllFunds);
app.get(constants_1.FUNDS_ID_URL, services_1.getFundById);
// app.get(PROJECTS_URL, getAllProjects)
app.get(constants_1.PROJECT_TOP_URL, services_1.getTopProjects);
app.patch(constants_1.PROJECT_ID_URL, services_1.getProjectById);
app.get(constants_1.PROJECTS_URL, services_1.getSOSProjects);
app.listen(PORT, () => {
    console.log("server started");
});
