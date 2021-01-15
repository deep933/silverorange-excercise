import React, { useEffect, useState } from 'react';

import './App.css';
import LanguageFilter from './components/LanguageFilter';
import RepoDetails from './components/RepoDetails';
import RepoList from './components/RepoList';
import useApi from './hooks/useApi';
import { Repo } from './typing/Repo';

export function App() {
  const DEFAULT_ALL_LANGUAGE = 'all';
  const [repos, error] = useApi('http://localhost:4000/repos/', 'json');
  const [loading, setLoading] = useState<boolean>(true);
  const [filterLanguage, setFilterLangauge] = useState<string>(
    DEFAULT_ALL_LANGUAGE
  );
  const [selectedRepo, setSelectedRepo] = useState<Repo | undefined | null>();

  const generateLanguageFilterTags = (repositories: Repo[]) => {
    return [
      DEFAULT_ALL_LANGUAGE,
      ...repositories
        .map((repo: Repo) => repo.language)
        .filter((language, idx, array) => array.indexOf(language) === idx),
    ];
  };

  const sortReposByCreationDate = (
    repositories: Repo[],
    direction: string = 'ASC'
  ) => {
    return repositories.slice().sort((a: Repo, b: Repo) => {
      if (direction === 'ASC') {
        return Date.parse(a.created_at) > Date.parse(b.created_at) ? 1 : -1;
      } else {
        return Date.parse(a.created_at) < Date.parse(b.created_at) ? 1 : -1;
      }
    });
  };

  const filterReposByLanguage = (
    repositories: Repo[],
    language: string = DEFAULT_ALL_LANGUAGE
  ) => {
    if (language === DEFAULT_ALL_LANGUAGE) {
      return repositories;
    }
    return repositories.filter((repo: Repo) => repo.language === language);
  };

  const handleLanguageChange = (language: string) =>
    setFilterLangauge(language);

  const filterSortRepos = (
    repositories: Repo[],
    filterByLanguage: string,
    sortDirection: string
  ) => {
    return sortReposByCreationDate(
      filterReposByLanguage(repositories, filterByLanguage),
      sortDirection
    );
  };

  const handleRepoClick = (repository: Repo) => {
    setSelectedRepo(repository);
  };

  useEffect(() => {
    console.log(repos);
    if (repos && repos?.length > 0) {
      setLoading(false);
    }
    if (error) {
      setLoading(false);
    }
  }, [repos, error]);

  return (
    <div className="App">
      <h1>Repos</h1>
      {loading && <span>Loading Repos ....</span>}
      {error && <span>Something went wrong!!!</span>}
      {repos &&
        repos?.length > 0 &&
        (selectedRepo != null ? (
          <RepoDetails
            repo={selectedRepo}
            handleBack={() => setSelectedRepo(null)}
          />
        ) : (
          <>
            <LanguageFilter
              languages={generateLanguageFilterTags(repos)}
              handleLanguageChange={handleLanguageChange}
            />
            <RepoList
              repos={filterSortRepos(repos, filterLanguage, 'DESC')}
              handleRepoClick={handleRepoClick}
            />
          </>
        ))}
    </div>
  );
}
