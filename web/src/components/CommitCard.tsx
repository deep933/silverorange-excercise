import React from 'react';
import { GitCommit } from '../typing/Commit';

interface PropType {
  commit: GitCommit;
}

function CommitCard({ commit }: PropType) {
  return (
    <div className="card">
      <span className="date">{commit.commit.author.date}</span>
      <h3 className="card-title">{commit.commit.author.name}</h3>
      <p>{commit.commit.message || 'No Description'}</p>
    </div>
  );
}

export default CommitCard;
