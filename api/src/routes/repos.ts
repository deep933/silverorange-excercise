import { Router, Request, Response } from 'express';

import RepoServices from '../services/repos.service';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  try {
    const [reposFromGitHub, reposFromJSON] = await Promise.all([
      RepoServices.getListOfReposFromGitHub(),
      RepoServices.getListOfReposFromJSON(),
    ]);

    res
      .status(200)
      .json([...reposFromGitHub, ...reposFromJSON])
      .end();
  } catch (error) {
    res.status(500).json('Unable to fetch Data').end();
  }
});
