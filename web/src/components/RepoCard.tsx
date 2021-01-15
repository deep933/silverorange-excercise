import React from 'react';

function RepoCard({ repo, handleListItemClick }: any) {
  return (
    <div
      className="repoCard"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        if (handleListItemClick) {
          handleListItemClick(repo);
        }
      }}
    >
      <span className="repoCreationDate">{repo.created_at}</span>
      <h1 className="repoName">{repo.name}</h1>
      <p>{repo.description || 'No Description'}</p>
      <div className="info">
        <div className="fork">{repo.forks} forks</div>
        <span className="languageTag">{repo.language}</span>
      </div>
    </div>
  );
}

export default RepoCard;
