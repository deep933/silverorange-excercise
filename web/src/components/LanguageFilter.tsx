import React from 'react';
import FilterButton from './FilterButton';

function LanguageFilter(props: any) {
  const languages = props.languages;
  return (
    <div className="filterBar">
      Filter by:
      {languages.map((language: string) => (
        <li key={language}>
          <FilterButton name={language} />
        </li>
      ))}
    </div>
  );
}

export default LanguageFilter;
