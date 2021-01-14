import React, { useEffect } from 'react';

import './App.css';
import FilterTag from './components/FilterTag';
import RepoList from './components/RepoList';
import useApi from './hooks/useApi';
import { Repo } from './typing/Repo';

export function App() {
  const [repos, error] = useApi('http://localhost:4000/repos/');

  const generateLanguageFilterTags = (repositories: Repo[]) => {
    return repositories
      .map((repo: Repo) => repo.language)
      .filter((language, idx, array) => array.indexOf(language) === idx);
  };


  useEffect(() => {
    if (repos) {
      console.time();
      console.log(generateLanguageFilterTags(repos));
      console.timeEnd();
    }
  }, [repos]);

  return (
    <div className="App">
      <h1>Repos</h1>
      {error && <span>Something went wrong!!!</span>}
      {repos && repos?.length > 0 && <RepoList repos={repos} />}
    </div>
  );
}
