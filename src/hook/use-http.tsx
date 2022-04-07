import { useEffect, useState } from "react";
const useRequest = (url: string, method: string, body: {}) => {
  const [dataResp, setDataResp] = useState({});
  const fetchHandler = async () => {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const responseJson = await response.json();
    setDataResp(responseJson);
    console.log(responseJson);
  };

  useEffect(() => {
    console.log("useEffect");
    fetchHandler();
  }, []);

  return {
    response: dataResp,
  };
};

export default useRequest;
