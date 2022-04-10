import { useEffect, useState } from "react";
const useRequest = (url: string, method?: string, body?: {}) => {
  const [dataResp, setDataResp] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const fetchHandler = async () => {
    setIsLoading(true);
    const response = await fetch(url, {
      method: method ? method : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    const responseJson = await response.json();
    setIsLoading(false);
    setDataResp(responseJson);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return {
    isLoading,
    dataResp,
  };
};

export default useRequest;
