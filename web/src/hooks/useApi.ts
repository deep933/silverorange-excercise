import { useEffect, useState } from 'react';

const useApi = (api: string, apiFor: string) => {
  const API = api;
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();

        if (response.status !== 200) {
          setError(data.message);
        } else {
          setResponseData(data);
        }
      } catch (err) {
        setError(err);
      }
    };
    getRepos();
  }, [API]);

  return [responseData, error];
};

export default useApi;
