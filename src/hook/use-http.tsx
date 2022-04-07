import { useEffect, useState } from "react";
const useRequest = (url: string, method?: string, body?: {}) => {
  const [dataResp, setDataResp] = useState();
  const fetchHandler = async () => {
    const response = await fetch(url, {
      method: method ? method : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    const responseJson = await response.json();
    setDataResp(responseJson);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return {
    dataResp,
  };
};

export default useRequest;
