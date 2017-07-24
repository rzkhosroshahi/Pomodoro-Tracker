import React from 'react';
import moment from 'moment-jalaali';
import DateMethods from '../assets/DateMethods';
import Config from '../assets/Config';

let dD   = new DateMethods();
let conf = new Config();


class ResultBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0,
            visual: 0.62,
            today: props.today
        }
    }
    toFarsiNum(val) {
        return val.toLocaleString('fa');
    }
    increaseValue() {
        if(this.state.value !== conf.goal){
            this.setState({
                value: this.state.value + 1,
                visual: this.state.visual + 0.87
    
            });
        }else return;
    }
    decreaseValue(){
        if(this.state.value !== 0){
            this.setState({
                value: this.state.value - 1,
                visual: this.state.visual - 0.87
            });
        }else return;  
    }
    render(){

        return(
                <div className="Result-column">
                    <span className="Result-box">
                        <span className="Result-text">{this.toFarsiNum(this.state.value)}</span>

                        <div className="Result-edit">
                            <span className="inc" onClick={this.increaseValue.bind(this)}>&#8330;</span>
                            <span className="dec" onClick={this.decreaseValue.bind(this)}>&#8210;</span>
                        </div>
                    </span>
                    <p>{this.props.ofWeek}</p> 
                    <p>{this.props.days}</p>
                    <span className={this.state.today === false ? 'Result-visual' : "Result-visual today"} style={{height:this.state.visual + 'rem'}}></span>
                </div>

        );
    }
}
export default ResultBox