import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [load, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res =await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://booking-app-node.herokuapp.com/api/hotels?featured=true");
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };


  return {data,load,error,reFetch}
};

export default useFetch;




