import { IMAGE_ID, ALT_IMAGE } from "../utils/Images";

const ItemList = ({item}) =>{
    return(
        <div>
            <div>
                <ul className="listItem">
                    {item.map(item=><li className="listItem1" key={item?.card?.info?.id}>

                        {<img className="limg" src={IMAGE_ID+item.card.info.imageId} alt="noIMG" onError={(e)=>{e.target.src=ALT_IMAGE}}/>} 
                        <div className="br">
                            <div>{item.card.info.name} </div>
                            <div>{item.card.info.category}</div>
                            <div className="space"></div>
                            <div>Rs:{(item.card.info.price) ? item.card.info.price/100 : item.card.info.defaultPrice/100}</div>
                        </div>
                        <div className="s"></div>
                        <div className="right">
                        <div className="rl">{item.card.info.ratings.aggregatedRating.rating} ★</div>
                        </div>

                    </li>)}
                </ul>
            </div>
        </div>
    );
};

export default ItemList;