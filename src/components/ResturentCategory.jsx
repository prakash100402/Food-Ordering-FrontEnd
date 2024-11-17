import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({data}) =>{

    const [showRes,setShowRes] = useState(false);
    const [img,setImg] = useState("fa fa-caret-up");

    return(
        <div>
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
                <h2 >{data.title} ({data.itemCards.length})</h2>
                <i className={img}></i>
            </div>
            {showRes && <ItemList item={data.itemCards}/>}
        </div>
    );
};

export default ResturantCategory;