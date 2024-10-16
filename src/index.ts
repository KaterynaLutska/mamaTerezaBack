import express from 'express';
import { FUNDS_URL, FUNDS_ID_URL, PROJECT_TOP_URL, PROJECTS_URL, PROJECT_ID_URL } from './constants';
import { getAllFunds, getAllProjects, getFundById, getProjectById, getSOSProjects, getTopProjects } from './services';


const app = express()
const PORT = 3333

app.use(express.json());

app.get(FUNDS_URL, getAllFunds)

app.get(FUNDS_ID_URL, getFundById);

app.get(PROJECTS_URL, getAllProjects)

app.get(PROJECT_TOP_URL, getTopProjects)

app.patch(PROJECT_ID_URL, getProjectById)

app.get(PROJECTS_URL, getSOSProjects)

app.listen(PORT, ()=> {
	console.log("server started")
})
