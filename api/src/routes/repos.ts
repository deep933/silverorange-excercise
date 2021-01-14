import { Router, Request, Response } from 'express';
import { Repo } from '../typings/Repo';

import RepoServices from '../services/repos.service';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  try {
    const [reposFromGitHub, reposFromJSON]: [
      Repo[],
      Repo[]
    ] = await Promise.all([
      RepoServices.getListOfReposFromGitHub(),
      RepoServices.getListOfReposFromJSON(),
    ]);

    const allRepos = [...reposFromGitHub, ...reposFromJSON].filter(
      (repo) => !repo.fork
    );
    res.status(200).json({ status: 200, repos: allRepos }).end();
  } catch (error) {
    res.status(500).json({ status: 500, error: 'Unable to fetch Data' }).end();
  }
});
