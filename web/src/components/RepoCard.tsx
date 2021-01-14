import React from 'react';

function RepoCard(props: any) {
  const repo = props.repo;
  return (
    <div className="repoCard">
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
