import React, { Component } from 'react'
class Calculator extends Component {
    state = {  
        num1:'',
        num2:'',
        result:'',
        oper:'',
        status:0
    } 
    numberButton=(type)=>{
        let {status}= this.state;
        if(status===0){
            let org=this.state.result;
            org+=type;
            this.setState({result:org})
        }
        else{
            this.setState({result:''});
            let org=type;
            this.setState({result:org})
            this.setState({status:0})
        }
    }
    plusSign=()=>{
        let org=this.state.result;
        this.setState({num1:org});
        // this.setState({result:''});
        this.setState({oper:'+'});
        this.setState({status:1});
    }
    equalSign=()=>{
        let {num1,oper, result}= this.state;
        let org=result;
        this.setState({num2:org});
        if(oper==='+'){
            let sum= parseInt(num1)+ parseInt(org);
            this.setState({result:sum});
        }
        
        this.setState({status:1});
    }
    render() { 
        return (
            <div>
                <h1>My Calculator</h1>
                <label style={{fontSize:10}}>{this.state.num1}{this.state.oper}{this.state.num2}</label><br/>
                <label style={{fontSize:40}}>{this.state.result}</label><br/>
                <button onClick={()=>{this.numberButton('7')}}>7</button><button onClick={()=>{this.numberButton('8')}}>8</button><button onClick={()=>{this.numberButton('9')}}>9</button><br/>
                <button onClick={()=>{this.numberButton('4')}}>4</button><button onClick={()=>{this.numberButton('5')}}>5</button><button onClick={()=>{this.numberButton('6')}}>6</button><br/>
                <button onClick={()=>{this.numberButton('1')}}>1</button><button onClick={()=>{this.numberButton('2')}}>2</button><button  onClick={()=>{this.numberButton('3')}}>3</button><br/>
                <button onClick={this.plusSign}>+</button><button>-</button><button onClick={this.equalSign}>=</button><br/>

            </div>
        );
    }
}
 
export default Calculator;