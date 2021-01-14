import React from 'react';
import { Repo } from '../typing/Repo';
import RepoCard from './RepoCard';

function RepoList(props: any) {
  return (
    <div className="repo-list">
      {props.repos.map((repo: Repo) => (
        <li key={repo.id}>
          <RepoCard repo={repo} />
        </li>
      ))}
    </div>
  );
}

export default RepoList;
