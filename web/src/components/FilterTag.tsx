import React from 'react';

function FilterTag(props: any) {
  const name = props.name;
  return <div className="filterTag">{name}</div>;
}

export default FilterTag;
