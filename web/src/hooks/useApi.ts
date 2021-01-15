import { useEffect, useState } from 'react';

type ApiRequestReturnType = [boolean, any | undefined, any, () => void];

interface ApiRequestType {
  api: string | null | undefined;
  responseBodyType?: string;
}
const useApi = (apiRequest: ApiRequestType): ApiRequestReturnType => {
  const [request] = useState(apiRequest);
  const [retry, setRetry] = useState(false);
  const [responseData, setResponseData] = useState<any>(undefined);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  const retryRequest = () => {
    setRetry(true);
  };

  useEffect(() => {
    const fetchData = async (url: string, resType: string = 'json') => {
      try {
        const response = await fetch(url);
        const data =
          resType === 'json' ? await response.json() : await response.text();
        if (response.status !== 200) {
          setError(data.message);
        } else {
          setResponseData(data);
        }
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    if (request.api) {
      fetchData(request.api, request.responseBodyType);
    } else {
      setIsLoading(false);
    }
  }, [request, retry]);

  return [isLoading, responseData, error, retryRequest];
};

export default useApi;
