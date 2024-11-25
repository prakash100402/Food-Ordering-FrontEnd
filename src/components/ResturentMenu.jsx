import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CLOUD_IMAGE } from "../utils/Images";
import useResturentMenu from "../utils/useResturentMenu";
import ResturantCategory from "./ResturentCategory";
import { useState } from "react";


const ResturantMenu = () =>{

    const {Rid} = useParams();
    const resDetails = useResturentMenu(Rid);

    const [showIndex, setShowIndex] = useState(null);
    

    if (resDetails==null) {
        return <Shimmer/>
    }
    
    const {name, costForTwoMessage,cloudinaryImageId ,avgRatingString, totalRatingsString,city} = resDetails?.cards[2]?.card?.card?.info;
    const category = resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

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
            </div >
            {
                category.map((cat, index)=> (
                    <ResturantCategory key={cat?.card?.card?.title} 
                    data={cat?.card?.card}
                    showIndex={index===showIndex} 
                    img={index===showIndex ? ("fa fa-caret-down") : ("fa fa-caret-up")}
                    setShowIndex={()=> setShowIndex(index===showIndex ? null : index)} />
                ))
            }
        </div>
    );
};

export default ResturantMenu;