import React from 'react';
import { Repo } from '../typing/Repo';
import RepoCard from './RepoCard';

interface PropType {
  repos: Repo[];
  handleRepoClick?: any;
}

function RepoList({ repos, handleRepoClick }: PropType) {
  const handleListItemClick = (repo: Repo) => {
    if (handleRepoClick) {
      handleRepoClick(repo);
    }
  };

  return (
    <div className="repoList">
      {repos.map((repo: Repo) => (
        <li key={repo.id}>
          <RepoCard repo={repo} handleListItemClick={handleListItemClick} />
        </li>
      ))}
    </div>
  );
}

export default RepoList;
