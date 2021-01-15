import React, { useState } from 'react';
import './App.css';
import RepoDetails from './components/RepoDetails';
import RepoHome from './components/RepoHome';
import useApi from './hooks/useApi';
import { Repo } from './typing/Repo';

/* Render RepoHome and RepoDetails conditionally */
export function App() {
  const [isLoading, repos, error] = useApi({
    api: 'http://localhost:4000/repos/',
    responseBodyType: 'json',
  });

  const [selectedRepo, setSelectedRepo] = useState<Repo | undefined | null>(
    null
  );

  const handleRepoClick = (repository: Repo) => {
    setSelectedRepo(repository);
  };

  return (
    <div className="App">
      <h1>Repos</h1>
      {isLoading && <span>Loading Repos ....</span>}
      {selectedRepo && (
        <RepoDetails
          repo={selectedRepo}
          handleBack={() => setSelectedRepo(null)}
        />
      )}
      {!isLoading && !selectedRepo && repos && (
        <RepoHome repos={repos} handleRepoClick={handleRepoClick} />
      )}
      {!isLoading && error && (
        <span className="error">
          Something Went Wrong Please Try again later!!!
        </span>
      )}
    </div>
  );
}
