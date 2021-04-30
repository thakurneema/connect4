/**Taken refrence from google, youtube videos and friend's help also github references */

import './App.css';
import React from "react";
import Board from "./component/board";
import 'bootstrap/dist/css/bootstrap.min.css';
import game from './game.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
		<div class="menu">
     <button class="b"><Link to="/" class="link" style={{textDecoration: 'none'}}>Home</Link></button> &nbsp;
     <button class="b"><Link to="/about" class="link" style={{textDecoration: 'none'}}>Game</Link></button>
     </div>

     <h1 class="head">Connect 4 Game</h1>
      
	
		
		<Switch>
      <Route exact path="/">
			<Home />
		  </Route>
		  <Route path="/about">
			<About />
		  </Route>
		</Switch>
	</Router>
  );
}

function Home() {
  return (
    <div class="home">
      <h3>Game Intructions:</h3>
      <ul>
        <img src={game} class="img"/>
        <li>This game is played on a vertical board wich has seven hollow columns and six rows.</li>
        <li>Each column has a hole in the upper part of the board, where pieces are introduced.</li> 
        <li>There is a window for every square, so that pieces can be seen from both sides.</li>
        <li>In short, it´s a vertical board with 42 windows distributed in 6 rows and 7 columns.</li> 
        <li>Both players have a set of 21 thin pieces (like coins); each of them uses a different colour.</li>
        <li>The board is empty at the start of the game.</li>
      </ul>
      <h4>Objective</h4>
      <p>The aim for both players is to make a straight line of four own pieces; the line can be vertical, horizontal or diagonal.</p>
      <p>The winner is the first player who gets a straight line made with four own pieces and no gaps between them.</p>
      
    </div>
  );
}

function About() {	
  return (
    <div  class="home">
      <div class="board">
        <Board />
      </div>
    </div>
  );
}
