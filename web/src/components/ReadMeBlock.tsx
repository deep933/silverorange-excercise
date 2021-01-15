import React from 'react';
import useApi from '../hooks/useApi';

interface PropType {
  readMeURL: string | null;
}

function ReadMeBlock({ readMeURL }: PropType) {
  const [isLoading, readMe, readMeError] = useApi({
    api: readMeURL,
    responseBodyType: 'raw',
  });

  return (
    <div id="readMeBlock">
      <h3>ReadMe</h3>
      {isLoading ? <span className="loading">Loading ...</span> : <></>}
      {!isLoading && readMe && <div className="box">{readMe}</div>}
      {!isLoading && readMeError && (
        <span className="error">Unable to Fetch Commits</span>
      )}
      {!isLoading && !readMe && <span className="error">No ReadMe Found</span>}
    </div>
  );
}

export default ReadMeBlock;
