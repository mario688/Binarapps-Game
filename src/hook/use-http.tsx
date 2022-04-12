import { useEffect, useState } from "react";
const useRequest = () => {
  const [dataResp, setDataResp] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchHandler = async (url: string, method?: string, body?: {}) => {
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

  return {
    isLoading,
    dataResp,
    sendRequest: fetchHandler,
  };
};

export default useRequest;
