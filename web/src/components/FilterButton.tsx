import React from 'react';

function FilterButton(props: any) {
  const name = props.name;
  return (
    <button
      className="filterTag"
      onClick={(e) => {
        e.preventDefault();
        props.handleOnClick(name);
      }}
    >
      {name}
    </button>
  );
}

export default FilterButton;
