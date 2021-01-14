import React from 'react';
import FilterButton from './FilterButton';

function LanguageFilter(props: any) {
  const languages = props.languages;

  const handleLanguageChange = (language: string) => {
    props.handleLanguageChange(language);
  };
  return (
    <div className="filterBar">
      Filter by:
      {languages.map((language: string) => (
        <li key={language}>
          <FilterButton name={language} handleOnClick={handleLanguageChange} />
        </li>
      ))}
    </div>
  );
}

export default LanguageFilter;
