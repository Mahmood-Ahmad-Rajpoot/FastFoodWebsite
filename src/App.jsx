import {useState, useEffect } from "react";
import "./CSSVariables.css";
import Paths from "./Routes";
import { getData } from "./Componets/FetchData/fetchData";
 import { useDispatch } from "react-redux";
import { setProductsData } from "./features/productsData";
 
function App() {
  const dispatch = useDispatch()
  const [data, setData] = useState();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     // fetcher function
//     const fetcher = async () => {
//       // fastfoodshop data
//       const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
// // weather data
// const url2 = '';

//       try {
//         const result = await fetch(url);
//         if (result.status !== 200 && result.ok !== true) {
//           setErr(true);
//           setLoading(false);
//           throw Error;
//         } else {
//           const items = await result.json();
//           const { categories } = items;
// // fastfood store 

//            dispatch(setProductsData(categories));


//         }
//       } catch (e) {
//         setErr(true);
//       }
//       setLoading(false);
//     };

//     fetcher();
//   }, []);
 
  return   <Paths />;
}

export default App;
