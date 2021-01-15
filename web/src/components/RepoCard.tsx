import React from 'react';
import { Repo } from '../typing/Repo';

interface PropType {
  repo: Repo;
  handleListItemClick?: (repo: Repo) => void;
}

function RepoCard({ repo, handleListItemClick }: PropType) {
  const handleItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (handleListItemClick) {
      handleListItemClick(repo);
    }
  };
  return (
    <div className="card" onClick={handleItemClick}>
      <span className="date">{repo.created_at}</span>
      <h1 className="card-title">{repo.name}</h1>
      <p>{repo.description || 'No Description'}</p>
      <div className="info">
        <div className="fork">{repo.forks} forks</div>
        <span className="tag">{repo.language || 'No Langauge'}</span>
      </div>
    </div>
  );
}

export default RepoCard;
