import {Component} from "react";

//class base component demonstration
class Contactcards extends Component{
    constructor(props){
        super(props);
        //const  msg=this.props ;
        //console.log(msg);

        this.state = {
            userinfo:{
                name : "Prakash",
                login : "ngfa@gmail.com",
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/prakash100402");
        const json = await data.json();
        this.setState({
            userinfo: json,
        })

    }

    componentWillUnmount(){
        //console.log("willUnmount");
    }

    render(){
        const {name, login} = this.state.userinfo;
        return(
            <div>
                <h1>{name}</h1>
                <h2>{login}</h2>
            </div>

        );
    };

}

export default Contactcards;