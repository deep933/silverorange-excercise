import React from 'react';
import FilterButton from './FilterButton';

interface PropType {
  languages: string[];
  handleLanguageChange: (langauge: string) => void;
}

function LanguageFilter({ languages, handleLanguageChange }: PropType) {
  const handleOnClick = (language: string) => {
    if (handleLanguageChange) {
      handleLanguageChange(language);
    }
  };
  return (
    <div className="filterBar">
      Filter by:
      {languages.map((language: string) => (
        <li key={language}>
          <FilterButton name={language} handleOnClick={handleOnClick} />
        </li>
      ))}
    </div>
  );
}

export default LanguageFilter;
