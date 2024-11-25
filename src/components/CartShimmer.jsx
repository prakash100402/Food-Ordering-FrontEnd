import { EmptyCartLogo } from "../utils/Images";

const CartShimmer = () =>{
    return(
        <div className="cs">
            <img className="emptycartlogo" src={EmptyCartLogo} alt="CartImg"/>
            <h4 className="emptycart">Cart is Empty Add Items.</h4>
        </div>
    );
};

export default CartShimmer;