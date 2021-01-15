import React, { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
import { GitCommit } from '../typing/Commit';
import { Repo } from '../typing/Repo';
import CommitCard from './CommitCard';

import RepoCard from './RepoCard';

function RepoDetails({ repo, handleBack }: { repo: Repo; handleBack: any }) {
  const REPO_COMMITS_API = repo.commits_url
    ? repo.commits_url.substring(0, repo.commits_url.length - 6)
    : null;

  const REPO_README_API = repo.has_wiki
    ? `https://raw.githubusercontent.com/${repo.full_name}/master/README.md`
    : null;
  const [loading, setLoading] = useState(true);
  const [commits, commitError] = useApi(REPO_COMMITS_API, 'json');
  const [readme] = useApi(REPO_README_API, 'raw');

  const getMostRecentCommit = (gitCommits: any) => {
    return gitCommits
      .slice()
      .sort((a: GitCommit, b: GitCommit) =>
        Date.parse(a.commit.author.date) < Date.parse(b.commit.author.date)
          ? 1
          : -1
      )[0];
  };

  useEffect(() => {
    if (!REPO_COMMITS_API) {
      setLoading(false);
    }
    if (commits.length > 0) {
      setLoading(false);
    }
    if (commitError) {
      setLoading(false);
    }
  }, [commits, commitError, REPO_COMMITS_API, readme]);

  return (
    <div className="repoDetails">
      <button onClick={() => handleBack()}>Back</button>
      <RepoCard repo={repo} />
      {loading && <span>Loading Commits ...</span>}
      {commitError && <span>Unable to Fetch Commits</span>}
      <h2>Recent Commits</h2>
      <br />
      {commits.length > 0 ? (
        <CommitCard commit={getMostRecentCommit(commits)} />
      ) : (
        <span>No Commits Found</span>
      )}
    </div>
  );
}

export default RepoDetails;
