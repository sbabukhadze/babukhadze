import React, { Component } from 'react';


class  Counter extends Component{
    constructor(props){  //roca  gvinda  cvlilebis  dafiqsireba unda mqondes  state, statestvis  aucileblad minda  klasi-konstruqtori  romlis  arugmentad und amqondes props  da statesa  daprops-s tvis  minda  super
        super(props)

        this.state = {
            currentNumber: 0,
        }

        this.onIncrement = this.onIncrement.bind(this); //wvdoma rom hoqndes  reaqtis  kalsebs
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement(){ //roca  winazea  damokidebuli  asinqronulad unda  gadavcet

        this.setState( state => ({currentNumber: state.currentNumber + 1}))        
    }


    onDecrement(){ //roca  winazea  damokidebuli  asinqronulad unda  gadavcet

        this.setState( state => ({currentNumber: state.currentNumber - 1}))        
    }


    render(){
        return(
            <div>
                <p>Counter - {this.state.currentNumber}  </p>
                <button onClick={this.onIncrement}  type="button">Increment</button>
                <button onClick={this.onDecrement} type="button">Decrement</button>
            </div>
        )
    }
}


//  arrow function  da  bind  agar  chirdeba
// onIncrement = () => {

//     this.setState( state => ({currentNumber: state.currentNumber + 1}))        
// }


// onDecrement = () => {  

//     this.setState( state => ({currentNumber: state.currentNumber - 1}))        
// }


export default Counter;