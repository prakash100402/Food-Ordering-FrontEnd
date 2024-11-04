import { useState,useEffect } from "react";
import { API_LINK } from "../utils/Images";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMAGE_ID, CLOUD_IMAGE,ALT_IMAGE } from "../utils/Images";


const ResturantMenu = () =>{

    const [resDetails , setResDetails] = useState(null);
    const [showRes,setShowRes] = useState(false);
    const [img,setImg] = useState("fa fa-caret-up");

    const {Rid} = useParams();

    useEffect(()=>{
        fetchData();
        
        return () => {
        };

    },[]);

    const fetchData = async () =>{
        const data = await fetch(API_LINK+Rid);
        const json = await data.json();
        setResDetails(json.data);
    };

    if (resDetails==null) {
        return <Shimmer/>
    }
    
    const {name, costForTwoMessage,cloudinaryImageId ,avgRatingString, totalRatingsString,city} = resDetails?.cards[2]?.card?.card?.info;
    const {title} = resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const {itemCards} = resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    return(
        <div className="mainrest">
            <div className="main">
                <div className="main"><img className="dimg" src={CLOUD_IMAGE+cloudinaryImageId} alt="pic"/>
                <div>
                <h1>{name}</h1>
                <h3>{city}</h3>
                <h4>{costForTwoMessage}</h4></div>
                </div>
                <ul className="rr">
                    <li className="rl">{avgRatingString} ★</li>
                    <li>{totalRatingsString}</li>
                </ul>
            </div>
            <div className="title" onClick={()=>{
                if(showRes==true)
                {
                    setShowRes(false);
                    setImg("fa fa-caret-up")
                }   
                else
                {
                    setShowRes(true);
                    setImg("fa fa-caret-down");
                }
                 
            }}>
                <h2 >{title}</h2>
                <i className={img}></i>
            </div>
            {showRes && <div>
                <ul className="listItem">
                    {itemCards.map(item=><li className="listItem1">

                        {<img className="limg" src={IMAGE_ID+item.card.info.imageId} alt="noIMG" onError={(e)=>{e.target.src=ALT_IMAGE}}/>} 
                        <div className="br">
                            <div>{item.card.info.name} </div>
                            <div>{item.card.info.category}</div>
                            <div className="space"></div>
                            <div>Rs:{item.card.info.price/100}</div>
                        </div>
                        <div className="s"></div>
                        <div className="right">
                        <div className="rl">{item.card.info.ratings.aggregatedRating.rating} ★</div>
                        </div>

                    </li>)}
                </ul>
            </div>}
        </div>
    );
};

export default ResturantMenu;