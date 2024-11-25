import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({data, showIndex, setShowIndex, img}) =>{
    return(
        <div>
            <div className="title" onClick={()=>{
                setShowIndex();
            }}>
                <h2 >{data.title} ({data.itemCards.length})</h2>
                <i className={img}></i>
            </div>
            {showIndex && <ItemList item={data.itemCards} /> }
        </div>
    );
};

export default ResturantCategory;