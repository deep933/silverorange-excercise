import React from 'react';

import './App.css';
import RepoList from './components/RepoList';
import useApi from './hooks/useApi';

export function App() {
  const [repos, error] = useApi('http://localhost:4000/repos/');

  return (
    <div className="App">
      <h1>Repos</h1>
      {error && <span>Something went wrong!!!</span>}
      {repos && repos?.length > 0 && <RepoList repos={repos} />}
    </div>
  );
}
