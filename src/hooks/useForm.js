// hooks/useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [url]);

  return { data, loading };
};

export default useFetch;
