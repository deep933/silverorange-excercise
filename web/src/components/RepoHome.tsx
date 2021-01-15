import React, { useState } from 'react';
import { Repo } from '../typing/Repo';
import LanguageFilter from './LanguageFilter';
import RepoList from './RepoList';

interface PropType {
  repos: Repo[];
  handleRepoClick?: (repository: Repo) => void;
}

function RepoHome({ repos, handleRepoClick }: PropType) {
  const DEFAULT_ALL_LANGUAGE = 'all';

  const [filterLanguage, setFilterLangauge] = useState<string>(
    DEFAULT_ALL_LANGUAGE
  );

  const generateLanguageFilterTags = (repositories: Repo[]) => {
    return [
      DEFAULT_ALL_LANGUAGE,
      ...repositories
        .map((repo: Repo) => repo.language)
        .filter((language, idx, array) =>
          language ? array.indexOf(language || 'undefined') === idx : false
        ),
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

  return (
    <div className="repoHome">
      <LanguageFilter
        languages={generateLanguageFilterTags(repos)}
        handleLanguageChange={handleLanguageChange}
      />
      <RepoList
        repos={filterSortRepos(repos, filterLanguage, 'DESC')}
        handleRepoClick={handleRepoClick}
      />
    </div>
  );
}

export default RepoHome;
