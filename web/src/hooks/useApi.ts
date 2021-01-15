import { useEffect, useState } from 'react';

const useApi = (
  api: string | null | undefined,
  responseType: string
): [[], undefined | null | string] => {
  const API = api;
  const [responseData, setResponseData] = useState<any>([]);
  const [error, setError] = useState();

  useEffect(() => {
    const getRepos = async (url: string, resType: string) => {
      try {
        console.log(`calling ${url}`);

        const response = await fetch(url);

        const data =
          resType === 'json' ? await response.json() : await response.text();

        if (response.status !== 200) {
          setError(data.message);
        } else {
          setResponseData(data);
        }
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };
    if (API) {
      getRepos(API, responseType);
    }
  }, [API, responseType]);

  return [responseData, error];
};

export default useApi;
