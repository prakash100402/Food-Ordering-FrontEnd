import { CLEAR_CART } from "../utils/Images";
import CartShimmer from "./CartShimmer";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const  Cart = () =>{
    const cartItem = useSelector((store)=> store.cart.items);

    const dispacher = useDispatch();

    const handelRemove = () =>{
        dispacher(clearCart())
    }


    return !cartItem.length ? (<CartShimmer/>) :
    (
        <div >
            
            <h3 className="cartT">Cart</h3>
            <div className="cart">
            <img className="cartlogo" src={CLEAR_CART} alt="clearCart" onClick={handelRemove}/>
            </div>
            <h4 className="remv">Remove All Item</h4>
            <div className="items" >
            <ItemList item={cartItem}/>
            </div>
        </div>
        
    );
};

export default Cart;