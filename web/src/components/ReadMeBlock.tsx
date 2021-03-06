import React from 'react';
import useApi from '../hooks/useApi';
import ReactMarkdown from 'react-markdown';

interface PropType {
  readMeURL: string | null;
}

/* Display ReadMe markdown by fetching it from provided readme url  */

function ReadMeBlock({ readMeURL }: PropType) {
  const [isLoading, readMe, readMeError] = useApi({
    api: readMeURL,
    responseBodyType: 'raw',
  });

  return (
    <div id="readMeBlock">
      <h3>ReadMe</h3>
      {isLoading ? <span className="loading">Loading ...</span> : <></>}
      {!isLoading && readMe && (
        <div className="box">
          <ReactMarkdown>{readMe}</ReactMarkdown>
        </div>
      )}
      {!isLoading && readMeError && (
        <span className="error">Unable to Fetch Commits</span>
      )}
      {!isLoading && !readMe && <span className="error">No ReadMe Found</span>}
    </div>
  );
}

export default ReadMeBlock;
