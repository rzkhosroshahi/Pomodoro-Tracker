import React from 'react';
import ResultBox from './ResultBox';
import DateMethods from '../assets/DateMethods';
import Header   from './Header';
const dD = new DateMethods();

class Result extends React.Component {
    componentDidMount () {
        var lastHead = document.querySelectorAll('Header');
        let last = Number(lastHead.length) -1;
        let offset = lastHead[last].offsetTop;

        window.scrollTo(0,offset);
    }

    render(){
        let  data   = dD.allData() ;
        let  months = dD.allMonths();
        let  today = false;

        let  todayCheck = (i,idx) => {
            if(i === data.length -1){
                idx === data[data.length -1 ]['days'].length -1 ? today = true : today = false;}
        }
        return (
            <div>
             {
                months.map((m,i)=>{
                    return( 
                        <section className="section" key={i}>
                            <Header key={i} month={m} />
                                <div className="Result-back" key={i+1}>      
                                {                        
                                    data[i]['days'].map((day,idx)=>{
                                        todayCheck(i,idx);
                                        return( <ResultBox key={idx} cell={i} row={idx} days={day} today={today} ofWeek={data[i]['ofWeek'][idx]}/>);
                                    })
                                }
                            </div>
                        </section>
                    );
                }) 
             }
            </div>
        );
    }      
}
export default Result