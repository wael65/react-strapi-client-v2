import { fetchApi } from "./fetchApi";
import { useState, useEffect } from "react";

const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchApi
      .get(endPoint)
      .then((res) => {
        setData(res.data);
      })
      .then(() => setLoading(false))
      .then(() => {
        setError(error);
        console.log(error);
      });
  }, [endPoint]);

  return { data, loading, error };
};
export default useFetch;
