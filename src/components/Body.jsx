import Container from "./Container";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MAIN } from "../utils/Images";
import useOnlineStat from "../utils/useOnlineStat";
import OfflineMsg from "../utils/OfflineMsg";


const Body = () =>{

  const onlineStatus = useOnlineStat();
  const [listOfResturant , setlistOfResturant] = useState([]);
  const [filterList , setFilterList] = useState([]);

  const [search,setSearch] = useState("");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
    const data = await fetch(MAIN);
    const json = await data.json();
    console.log(json);
    setTimeout(()=>{
      setlistOfResturant(json);
      setFilterList(json);
    },0.9000);
    
  };

  if(onlineStatus==false)
  {
    return <OfflineMsg/>;
  }

    return listOfResturant==0 ? (<Shimmer/>) :
      ( <div className="body">
            <div className="searchbox">
            
            <input type="text" className="search" placeholder="Search" value={search}
              onChange={(e)=>{setSearch(e.target.value);}} />
            
            <button className="button" onClick={()=>{
              const filterSearch = listOfResturant.filter((res)=>res.card.card.info.name.toLowerCase().includes(search.toLowerCase()));
              setFilterList(filterSearch);
            }}>Search</button>
            
            <button className="filterbtn" onClick={()=>{
              const filterList = listOfResturant.filter((res)=>res?.card?.card?.info?.avgRating>4);
              setFilterList(filterList);
            }}>Top Rated</button>
            </div>
            
            <div className="cardContainer">
              {
                filterList.map((resturant) =>(<Link className="no" key={resturant?.card?.card?.info?.id} to={"/restaurants/"+resturant?.card?.card?.info?.id}><Container resdata={resturant}/></Link>))
              }
            </div>
        </div>
    );
};

export default Body;