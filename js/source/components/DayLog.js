import React from 'react';
import DateMethods from '../assets/DateMethods';
import moment from 'moment-jalaali';
moment.loadPersian({usePersianDigits: true});
let conf = new DateMethods();

class DayLog extends React.Component {

    render () {
        let m = moment();
        return (
            <div className="DayLog">  
                <span style={{paddingLeft:.3+'rem'}}>   امروز   </span>    
                <span style={{paddingLeft:.3+'rem'}} className="dayString"> {conf.DayToString(m.day())} </span>  
                <span style={{paddingLeft:.3+'rem'}} className="day"> {m.format('jD')} </span>  
                <span style={{paddingLeft:.3+'rem'}} className="month"> {m.format('jMMMM')}</span>  
                <span style={{paddingRight:.3+'rem'}}>    ماه   </span>    
            </div>
        );
    }
}
export default DayLog