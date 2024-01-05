import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProductsData } from "../../features/productsData";

export const getData = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetcher function
    const fetcher = async () => {
      const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
      const url2 = 'https://api.tutiempo.net/json/?lan=en&apid=zwDX4azaz4X4Xqs&lid=3768'
      try {
        const result = await fetch(url);
        if (result.status !== 200 && result.ok !== true) {
          setErr(true);
          setLoading(false);
          throw Error;
        } else {
          const items = await result.json();
          const { categories } = items;

          setData(categories);
          dispatch(setProductsData(data));
        }
      } catch (e) {
        setErr(true);
      }
      setLoading(false);
    };

    fetcher();
  }, []);
  //   returning states
  return { loading, err,data };
};
