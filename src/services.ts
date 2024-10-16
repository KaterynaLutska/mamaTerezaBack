import { funds, topProjects } from './default-data'; 
import express from 'express';

export function getAllFunds (req: express.Request, res: express.Response) {
	res.json(funds);
}

export function getFundById (req: express.Request, res: express.Response) {
	const fundId = parseInt(req.params.id, 10);

  const fund = funds.find(fund => fund.id === fundId);

  if (fund) {
    res.json(fund);
  } else {
    res.status(404).json({ message: 'Fund not found' });
  }
}

export function getTopProjects (req: express.Request, res: express.Response) {
	res.json(topProjects);
}

export function getProjectById (req: express.Request, res: express.Response) {
		const { projectId } = req.params;
		const { collected } = req.body;
	
		const allProjects = funds.flatMap(fund => fund.projects);
	
		const project = allProjects.find(project => project.id === +projectId);
	
		if (!project) {
			return res.status(404).json({ message: 'Project not found' });
		}
	
		if (collected !== undefined) {
			project.collected = collected;
		}
	
		res.json({ message: 'Project updated successfully', project });
	}


export function getAllProjects(req: express.Request, res: express.Response) {
  const allProjects = funds.flatMap(fund => fund.projects);
  res.json(allProjects);
}

export function getSOSProjects (req: express.Request, res: express.Response) {

const allProjects = funds.flatMap(fund => fund.projects);

const { date } = req.query;

  if (date) {
    const queryDate = new Date(date as string);

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

