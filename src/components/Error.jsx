import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className="e">
        <div className="ep">
            <h1 className="h1">Opps!!!</h1>
            <h3 className="h1">SomeThing Went Wrong</h3>
            <h3 className="Error">{err.status}:{err.statusText}</h3>
            <Link className="Error" to="/"><h5>Go Back To Home</h5></Link>
        </div></div>
    );
};

export default Error;