
import React, { Component } from "react";
import {Spring} from 'react-spring/renderprops'
// import {Link,Route} from "react-router-dom";
import "./App.css";
import logo from './lo.png';

const JOKE_API = "http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json";

// See best practices for organizing your code: https://github.com/airbnb/javascript/tree/master/react#basic-rules

class League extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJoke: { setup: "", punchline: "" },
      champions: {data:{}},
      data:[],
    };

    // this.setJoke = this.setJoke.bind(this);
  }

  // state={
  //   champions: {data:{}},
  //     data:[],
  // }
  
// REPLACE WITH HOOK
  componentDidMount() {
    this.fetchChamp();
  }

 

  fetchChamp = () => {
    fetch(JOKE_API)
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        // console.log(response.data);
        console.log(response.data.Aatrox);
        // console.log(response.data.Aatrox.id);
        // console.log(response.data.Aatrox.blurb);
        this.setJoke(response);
      })
      .catch(error => console.log(error));
  };

  // setJoke(joke) {
  //   this.setState({ joke: joke });
  // }

  setJoke = champions => {
    this.setState({ champions},()=>{
        // console.log(this.state.champions.data);
    });
    //  console.log(champions.data.["Aatrox"]);
  };

  render() {
      console.log(this.state.champions.data);
      // used to map over the data and display the underlying data in an itterative fashion and the key gives the elemts a stable identity so the DOM can render it
      const champions = Object.keys(this.state.champions.data).map(( champion,index)=>{
          return (
            <div>
             {/* ${} embeds the value of a variable in the given string and is a Javascript ES6 syntax */}
            <li key={`${champion}/${index}`} >{champion}
            {/* <Link to ="/stocks/:symbol">{champion.id}</Link> */}
            </li>
            
            </div>
          )
      })
    return (
      <Spring
        from={{opacity:0, marginTop:-500}}
        to={{opacity:1, marginTop:0}}
        config ={{ delay:1000,duration:500}}
      >
        {props =>(
            <div style={props}>
              <div style={c1Style} className="App">
          <header className="App-header">
            
          <img src={logo}  className="Logo" />
            
          </header>
          <h1 className="App-title">Current League of Legends Champions</h1>
         
            <div>
            {this.state.champions && <p className="champ-container">
            <a className="champlist">{champions}</a>
            </p>}
            </div>
    
      
          
          </div>

          </div>
        )}
      
      </Spring>

      
      
    );
  }
  
}
const c1Style = {
  background:'steelblue',
  padding:'1.5rem',
  
}

export default League;