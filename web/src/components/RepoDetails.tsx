import React from 'react';
import { Repo } from '../typing/Repo';
import MostRecentCommit from './MostRecentCommit';
import ReadMeBlock from './ReadMeBlock';
import RepoCard from './RepoCard';

interface PropType {
  repo: Repo;
  handleBack: () => void;
}

function RepoDetails({ repo, handleBack }: PropType) {
  const REPO_README_URL = repo.has_wiki
    ? `https://raw.githubusercontent.com/${repo.full_name}/master/README.md`
    : null;

  return (
    <div className="repoDetails">
      <button onClick={() => handleBack()}>Back</button>
      <RepoCard repo={repo} />
      <MostRecentCommit commitURL={repo.commits_url} />
      <ReadMeBlock readMeURL={REPO_README_URL} />
    </div>
  );
}

export default RepoDetails;
