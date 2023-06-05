import Axios  from "axios";
import { useEffect, useState } from "react";


function AxiosTest() {
    const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";
    
    const [myData , setMyData] = useState([]);

    useEffect(() => {
          Axios.get(baseUrl).then((response) => {
            setMyData(response.data);
            console.log(response.data);
          });
    },[]);

    return (
      <>
          <h1>{myData.id}</h1>
          <h1>{myData.title}</h1>
      </>  
    );
}

export default AxiosTest;