import React from 'react';

function RepoCard(props: any) {
  return <div className="repo-card">{props.repo.name}</div>;
}

export default RepoCard;
