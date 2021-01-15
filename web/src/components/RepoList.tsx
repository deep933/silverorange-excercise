import React from 'react';
import { Repo } from '../typing/Repo';
import RepoCard from './RepoCard';

function RepoList(props: any) {
  const handleRepoClick = (repo: Repo) => {
    props.handleRepoClick(repo);
  };
  return (
    <div className="repoList">
      {props.repos.map((repo: Repo) => (
        <li key={repo.id}>
          <RepoCard repo={repo} handleListItemClick={handleRepoClick} />
        </li>
      ))}
    </div>
  );
}

export default RepoList;
