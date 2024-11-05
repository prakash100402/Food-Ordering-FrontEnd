import { useEffect, useState } from "react";
import { API_LINK } from "./Images";

//custom Hook
const useResturentMenu = (Rid) => {

    const [resDetails , setResDetails] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(API_LINK+Rid);
        const json = await data.json();
        setResDetails(json.data);
    };

    return resDetails;
};

export default useResturentMenu;