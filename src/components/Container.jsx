import { CLOUD_IMAGE } from "../utils/Images";

const Container = (props) =>{
const {resdata} = props;
    
const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resdata?.card?.card?.info;
const {lastMileTravelString, slaString} = resdata?.card?.card?.info?.sla;


    return(
        <div className="container">
            <img className="foodImg" alt="res-food" src={CLOUD_IMAGE+cloudinaryImageId}/>
            <h2 id="h2t">{name}</h2>
            <h4 id="h4t">{cuisines.join(" | ")}</h4>
            <div className="details">
                <ul>
                    <li>{avgRating} ★</li>|
                    <li>{slaString}</li>|
                    <li>{costForTwo }</li>
                </ul>
            </div>
            <h5>Distance: {lastMileTravelString}</h5>
        </div>
    );
};

//higher order component
export const withPromotedLable = (Container) =>
{
    return(props)=>{
        return(
            <div className="promot">
                <label className="lable">Promoted</label>
                <Container {...props}/>
            </div>
        );
    };
};

export default Container;