import React from "react";
import './board.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react'

class Board extends React.Component{
    constructor(props){
        super(props);
        this.timer= 0;
        this.startTimer=this.startTimer.bind(this);
        this.countDown=this.countDown.bind(this);
        this.state={
            play1:"player1",
            play2:"player2",
            show:true,
            show1:true,
            show3:true,
            show4:false,
            show5:false,
            winturn:"Enter the player names and start the game with player1 ,  press on arrows to insert...",
            w1:"",
            player:1,
            board:  [[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0]],
            time: {}, 
            seconds: 0, 
            timer: 0,
            startTimer:this.startTimer.bind(this),
            countDown:this.countDown.bind(this),
            count1:0,
            count2:0,
        }
    }
    render(){ 
        return (
            <div class="page">
                <div id="outside" style={{display: this.state.show3 ? 'block' : 'none' }}>
                    <div class="display">
                    {/* <form id = "f1"> */}
                        <div class="div1">
                        <span class="pink"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="names">Player1</label>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                            <input class="input1" id = "p1" type="text" name="player1"  onChange={this.playerone} placeholder="player1" style={{display: this.state.show1 ? 'block' : 'none' }} ></input>
                           
                        </div><br></br><br></br>
                        <div class="div2">
                        <span class="blue"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <label class="names">Player2</label><br/>
                            <input class="input2" id = "p2" type="text" name="player2" onChange={this.playertwo} placeholder="player2" style={{display: this.state.show1 ? 'block' : 'none' }}></input>
                           
                        </div>
                        <div>
                        {/* <button onClick={this.checknames} name="start1" style={{display: this.state.show1 ? 'block' : 'none' }}>Submit</button> */}
                        <button class="start" onClick={this.load} name="start1" style={{display: this.state.show1 ? 'block' : 'none' }}>Start</button>
                    
                    </div>
                    <div>
                    
                    <button class="start" onClick={() => window.location.reload(false)} style={{display: this.state.show1 ? 'none' : 'block' }}>Restart</button>
                    
                    </div>
                    <div class = "time">
                    <h3 style={{display: this.state.show1 ? 'none' : 'block' }}>{this.state.time.m} Minutes and {this.state.time.s} seconds</h3>
                    </div>
                       {/* </form> */}
                    </div>
                    

                    
                    {/* <h3>
                            <button onClick={this.load} name="start1" style={{display: this.state.show1 ? 'block' : 'none' }}>Start</button>
                    </h3> */}
                    
                    <h4 id="player"style={{display: this.state.show ? 'block' : 'none' }}>{this.state.winturn}</h4>
                   <table class="myboard"  style={{display: this.state.show1 ? 'none' : 'block' }}>
                        <tbody>
                        <tr><td class="row1"> <Icon name='level down alternate' size='big' /></td><td class="row1"><Icon name='level down alternate' size='big' /></td><td class="row1"><Icon name='level down alternate' size='big' /></td><td class="row1"><Icon name='level down alternate' size='big' /></td><td class="row1"><Icon name='level down alternate' size='big' /></td><td class="row1"><Icon name='level down alternate' size='big' /></td><td class="row1"><Icon name='level down alternate' size='big' /></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        </tbody>
                    </table>
                </div>
                <div class = "last">
                <h2 id="result">{this.state.w1}</h2>
               
               <button class="start1" onClick={() => window.location.reload(false)} style={{display: this.state.show4 ? 'block' : 'none' }}>Restart</button>
               </div>
            </div>
        );
    }
    
    checkVertical(board) {
        for (let r = 3; r < 7; r++) {
        for (let c = 0; c < 8; c++) {
            if (board[r][c]) {
            if (board[r][c] === board[r - 1][c] &&
                board[r][c] === board[r - 2][c] &&
                board[r][c] === board[r - 3][c]) {
                return board[r][c];    
            }
            }
        }
        }
    }

    checkHorizontal(board) {
        for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 5; c++) {
            if (board[r][c]) {
            if (board[r][c] === board[r][c + 1] && 
                board[r][c] === board[r][c + 2] &&
                board[r][c] === board[r][c + 3]) {
                return board[r][c];
            }
            }
        }
        }
    }
    
    
    checkDiagonalRight(board) {
        for (let r = 3; r < 7; r++) {
        for (let c = 0; c < 5; c++) {
            if (board[r][c]) {
            if (board[r][c] === board[r - 1][c + 1] &&
                board[r][c] === board[r - 2][c + 2] &&
                board[r][c] === board[r - 3][c + 3]) {
                return board[r][c];
            }
            }
        }
        }
    }
    
    playerone=(event)=>{
        var play1=event.target.value;
        this.setState({play1: play1});
    }
    
    playertwo=(event)=>{
        var play2=event.target.value;
        this.setState({play2: play2});
    }

    checkDiagonalLeft(board) {
        for (let r = 3; r < 7; r++) {
        for (let c = 3; c < 8; c++) {
            if (board[r][c]) {
            if (board[r][c] === board[r - 1][c - 1] &&
                board[r][c] === board[r - 2][c - 2] &&
                board[r][c] === board[r - 3][c - 3]) {
                return board[r][c];
            }
            }
        }
        }
    }
    checkWinner = (b) =>{
        let w = (this.checkVertical(b) || this.checkDiagonalRight(b) || this.checkDiagonalLeft(b) || this.checkHorizontal(b))
            if(w === 1){
                this.setState({show:false});
                var win1=this.state.play1+" won the match in "+this.state.time.m+" minutes and "+this.state.time.s+" seconds by "+this.state.count1+" moves";
                this.setState({w1:win1})
                this.setState({show3:false});
                this.setState({show4:true});
            }
            else if(w === 2){
                this.setState({show:false});
                var win2=this.state.play2+" won the match in "+this.state.time.m+" minutes and "+this.state.time.s+" seconds by "+this.state.count2+" moves";
                this.setState({w1:win2})
                this.setState({show3:false});
                this.setState({show4:true});
            }
            
           
           
    }  
    
    secondsToTime(secs){
        // let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "m": minutes,
          "s": seconds
        };
        return obj;
      }  
      startTimer() {
        if (this.timer == 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
    
      countDown() {
        let seconds = this.state.seconds + 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
      }
    
    load=()=>
        {
        var ld=this.state.play1+" turn";
        this.setState({winturn:ld});
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer()
        this.setState({show1:false});
        const grid= document.getElementById("outside");
        const cells = grid.getElementsByTagName("td");
        const cellsrows = grid.getElementsByTagName("tr");

        for(let i=0; i < cells.length; i++){
            cells[i].addEventListener("click", ()=>{
                for(let j = 6; j>0; j--){
                try{
                if(cellsrows[j].children[i].style.backgroundColor !== "rgb(226, 112, 201)" && cellsrows[j].children[i].style.backgroundColor !=="rgb(99, 193, 216)"){
                
                    if(this.state.player === 1){
                        var b = this.state.board
                        console.log(b)
                        b[j][i] = 1
                        cellsrows[j].children[i].style.backgroundColor="rgb(226, 112, 201)";
                        var c1 = this.state.count1+1;
                        this.setState({count1:c1})
                        this.setState({board: b})
                        this.checkWinner(b)
                        if (this.state.show4) { 
                            clearInterval(this.timer);
                        }
                        var turn1="Next  "+this.state.play2+"  turn";
                        this.setState({winturn:turn1});
                        this.setState({player:2});
                        break;
                    }
                   
                    else if(this.state.player===2){
                        var c = this.state.board
                        console.log(c)
                        c[j][i] = 2
                        cellsrows[j].children[i].style.backgroundColor="rgb(99, 193, 216)";
                        var c2 = this.state.count2+1;
                        this.setState({count2:c2})
                        this.setState({board: c})
                        this.checkWinner(c)
                        if (this.state.show4) { 
                            clearInterval(this.timer);
                            
                        }
                        var turn="Next  "+this.state.play1+"  turn";
                        this.setState({winturn:turn});
                        this.setState({player:1});
                        break;
                    }
                  
                
                }
            }
            catch(error){
                window.alert("Press on arrow to insert");
                break;
            }
                
            }
                
            });
        
        }
    }
    
    }
    
    
export default Board;
