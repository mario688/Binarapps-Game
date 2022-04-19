import { useState, useCallback } from "react";
const useRequest = () => {
  const [dataResp, setDataResp] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchHandler = useCallback(
    async (url: string, method?: string, body?: {}) => {
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          method: method ? method : "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: body ? JSON.stringify(body) : null,
        });
        if (!response.ok) {
          throw new Error("Something went wrong! :(");
        }
        const responseJson = await response.json();
        setIsLoading(false);
        setDataResp(responseJson);
      } catch (error: any) {
        setError(error);
      }
    },
    []
  );

  return {
    isLoading,
    dataResp,
    error,
    sendRequest: fetchHandler,
  };
};

export default useRequest;
