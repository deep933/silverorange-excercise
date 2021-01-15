import React from 'react';
import useApi from '../hooks/useApi';
import { GitCommit } from '../typing/Commit';
import CommitCard from './CommitCard';

interface PropType {
  commitURL?: string;
}

function MostRecentCommit({ commitURL }: PropType) {
  const REPO_COMMITS_API = commitURL
    ? commitURL.substring(0, commitURL.length - 6)
    : null;

  const [isLoading, commits, commitError] = useApi({ api: REPO_COMMITS_API });

  const getMostRecentCommit = (gitCommits: GitCommit[]) => {
    return gitCommits
      .slice()
      .sort((a: GitCommit, b: GitCommit) =>
        Date.parse(a.commit.author.date) < Date.parse(b.commit.author.date)
          ? 1
          : -1
      )[0];
  };

  return (
    <div id="mostRecentCommit">
      <h3>Most Recent Commit</h3>
      {isLoading && <span className="loading">Loading ...</span>}
      {!isLoading && commits && (
        <CommitCard commit={getMostRecentCommit(commits)} />
      )}
      {!isLoading && commitError && (
        <span className="error">Unable to Fetch Commits</span>
      )}
      {!isLoading && !commits && (
        <span className="error">No Commits Found</span>
      )}
    </div>
  );
}

export default MostRecentCommit;
