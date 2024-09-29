import { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  let [data, setData] = useState([]);

  let fetchApi = async () => {
    //! Normal fetching method
    // let data = await fetch("https://dummyjson.com/products");
    // let finalData = await data.json();
    // setData(finalData);
    // console.log(finalData.products);

    //! Fetching using AXIOS
    // axios.get("https://dummyjson.com/products").then((m) => {
    //   console.log(m.data.products);
    // });

    let { data } = await axios.get("https://dummyjson.com/products");
    console.log(data.products);
  };

  fetchApi();

  // useEffect(() => {
  //   fetchApi();
  // }, []);
  return <div></div>;
}

export default Main;