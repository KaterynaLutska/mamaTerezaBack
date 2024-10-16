"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProjects = getAllProjects;
const default_data_1 = require("./default-data");
function getAllProjects(req, res) {
    const allProjects = default_data_1.funds.flatMap(fund => fund.projects);
    res.json(allProjects);
}
