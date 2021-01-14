import React from 'react';

function FilterButton(props: any) {
  const name = props.name;
  return <button className="filterTag">{name}</button>;
}

export default FilterButton;
