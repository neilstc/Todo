import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css'




class Counter extends Component{
  
  
    constructor(){
        super();

        this.state = {
         counter : 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    } 

    render() {
        return (   
          <div className="Counter">  
        
          <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
          <CounterButton by = {5} incrementMethod ={this.increment} decrementMethod = {this.decrement}/>
          <CounterButton by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
          <span className = "count"> {this.state.counter}</span>
          <ResetButton  resetMethod = {this.reset}/>
          
 

          </div> 
        );
      }

      increment(by)  {
        console.log(`parents increment - ${by}`);

        this.setState(
            
            (prevState) => {return {counter : prevState.counter + by}
          
                        }
                        );
        }
       
        decrement(by)  {
            console.log(`parents increment - ${by}`);
    
            this.setState(
                
                (prevState) => {return {counter : prevState.counter - by}
              
                            }
                            );
            }

            reset(){
                this.setState(
                    
                    (prevState) => {return {counter: 0 }
                    }  
                    );
                
            }   
       
       }

class CounterButton extends Component{

    // constructor(){
    //     super();

    //     this.state = {
    //      counter : 0,
    //     }
    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);
    // }

    render(){
    
return (
    <div className = "counterButton">
        <button onClick = {() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick = {() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
        </div>
); 
    }

//  increment()  {

//  this.setState({
//      counter : this.state.counter + this.props.by
   
//                 });
//     this.props.incrementMethod(this.props.by);
// }


// decrement()  {

//     this.setState({
//         counter : this.state.counter - this.props.by
      
//                    });
//        this.props.decrementMethod(this.props.by);
//    }


}

class ResetButton extends Component{

    constructor(){
        super();

        this.state = {
            counter :  0
        }
        this.reset = this.reset.bind(this);
    }

    
    render(){
        return (
        <div>
        <button className = "resetButton" onClick = {this.reset}> RESET </button>

            </div>

        );


    }
    
    reset(){
        this.setState(
            {
                counter:  0
            });
        this.props.resetMethod();
    }   
        
}



CounterButton.defaultProps = {
    by : 1 
}

CounterButton.propTypes = {
    by : PropTypes.number
}


export default Counter