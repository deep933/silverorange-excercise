import React from 'react';
import { GitCommit } from '../typing/Commit';

function CommitCard({ commit }: { commit: GitCommit }) {
  return (
    <div className="repoCard">
      <span className="repoCreationDate">{commit.commit.author.date}</span>
      <h3 className="repoName">{commit.commit.author.name}</h3>
      <p>{commit.commit.message || 'No Description'}</p>
    </div>
  );
}

export default CommitCard;
