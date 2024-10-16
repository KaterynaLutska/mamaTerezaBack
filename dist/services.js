"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFunds = getAllFunds;
exports.getFundById = getFundById;
exports.getTopProjects = getTopProjects;
exports.getProjectById = getProjectById;
exports.getAllProjects = getAllProjects;
exports.getSOSProjects = getSOSProjects;
const default_data_1 = require("./default-data");
function getAllFunds(req, res) {
    res.json(default_data_1.funds);
}
function getFundById(req, res) {
    const fundId = parseInt(req.params.id, 10);
    const fund = default_data_1.funds.find(fund => fund.id === fundId);
    if (fund) {
        res.json(fund);
    }
    else {
        res.status(404).json({ message: 'Fund not found' });
    }
}
function getTopProjects(req, res) {
    res.json(default_data_1.topProjects);
}
function getProjectById(req, res) {
    const { projectId } = req.params;
    const { collected } = req.body;
    const allProjects = default_data_1.funds.flatMap(fund => fund.projects);
    const project = allProjects.find(project => project.id === +projectId);
    if (!project) {
        return res.status(404).json({ message: 'Project not found' });
    }
    if (collected !== undefined) {
        project.collected = collected;
    }
    res.json({ message: 'Project updated successfully', project });
}
function getAllProjects(req, res) {
    const allProjects = default_data_1.funds.flatMap(fund => fund.projects);
    res.json(allProjects);
}
function getSOSProjects(req, res) {
    const allProjects = default_data_1.funds.flatMap(fund => fund.projects);
    const { date } = req.query;
    if (date) {
        const queryDate = new Date(date);
        if (isNaN(queryDate.getTime())) {
            return res.status(400).json({ message: "Invalid date format" });
        }
        const filteredProjects = allProjects
            .filter(project => new Date(project.closingDate) > queryDate)
            .sort((a, b) => new Date(a.closingDate).getTime() - new Date(b.closingDate).getTime())
            .slice(0, 5);
        res.json(filteredProjects);
    }
}
