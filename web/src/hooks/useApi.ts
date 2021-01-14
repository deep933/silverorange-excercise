import { useEffect, useState } from 'react';

const useApi = (api: string) => {
  const API = api;
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();

        if (data.status !== 200) {
          setError(data.error);
        } else {
          setRepos(data.repos);
        }
      } catch (err) {
        setError(err);
      }
    };
    getRepos();
  }, [API]);

  return [repos, error];
};

export default useApi;
