import React,{Component} from 'react';
import axios from 'axios';

class Home extends Component{


    constructor(props){
        super(props);
        this.state={
            repos:[],
            username:''
        
        }
        this.onChange=this.onChange.bind(this);
        this.onClick=this.onClick.bind(this);
    }



    componentDidMount(){
        
    
    }

    onChange(e){
        this.setState({
            username:e.target.value
        })
    }

    onClick(){

    alert(this.state.username);

    axios
      .get(`https://api.github.com/users/${this.state.username}/repos`)
      .then((res) => {
        this.setState({
          repos: res.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
    this.setState({
        username:''
    })

    }


    



    render(){


        return(<div>

           <p>Home Component</p>
           <input type="text" value={this.state.username} onChange={this.onChange}/>
           <button  onClick={this.onClick}>Submit</button>

           {this.state.repos.map((item,index)=>{
            return (
              <p>
                {index +1}@   
                {item.name}
              </p>
            );
           })}

             
        </div>)


    }

}

export default Home;