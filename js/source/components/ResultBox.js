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
    checkLocal(){
        if(!localStorage.getItem(`${this.props.cell+" "+this.props.row}`)){
            localStorage.setItem(`${this.props.cell+" "+this.props.row}`,JSON.stringify({value:1,visual:1.49}));
            return true;
        }
    }
    getToLocal(){
        let data = localStorage.getItem(`${this.props.cell+" "+this.props.row}`);
        return JSON.parse(data);
    }
    setToLocal(val,vis){
        localStorage.setItem(`${this.props.cell+" "+this.props.row}`,JSON.stringify({value:val,visual:vis}));
    }
    increaseValue() {

        // as there is not data for 'this' 
        if(!this.checkLocal()){
            let value  = this.getToLocal().value;
            let visual = this.getToLocal().visual;
            if(value !== 12){
                value += 1;
                visual += 0.87;

                this.setToLocal(value,visual);
            }else return;
        }else{
            this.checkLocal();
        }
        if(this.state.value !== conf.goal){
            this.setState({
                value: this.state.value + 1,
                visual: this.state.visual + 0.87
    
            });
        }else return;
    }
    decreaseValue(){
        let value  = this.getToLocal().value;
        let visual = this.getToLocal().visual;

        if(value !== 0){
            value -= 1;
            visual -= 0.87;

            this.setToLocal(value,visual);
        }else return;


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
                        <span className="Result-text">{

                            this.getToLocal() ? this.toFarsiNum(this.getToLocal().value) : this.toFarsiNum(0)
                                
                        }</span>

                        <div className="Result-edit">
                            <span className="inc" onClick={this.increaseValue.bind(this)}>&#8330;</span>
                            <span className="dec" onClick={this.decreaseValue.bind(this)}>&#8210;</span>
                        </div>
                    </span>
                    <p>{this.props.ofWeek}</p> 
                    <p>{this.props.days}</p>
                    <span className={this.state.today === false ? 'Result-visual' : "Result-visual today"} 
                        style={{height:this.getToLocal() ? this.getToLocal().visual + 'rem' : 0.62 + 'rem'}}>
                    </span>
                </div>

        );
    }
}
export default ResultBox