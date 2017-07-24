import Config from './Config';
import moment from 'moment-jalaali';
moment.loadPersian({usePersianDigits: true});
let conf = new Config();

class DateMethods {
    constructor(){
        this.from = conf.from;
        this.to   = conf.to;
        this.startDate  = moment(this.from,'jYYYY/jMM/jD');
        this.endDate    = moment(this.to,'jYYYY/jMM/jD'); 
        this.dataDates  = [];
    }
    allMonths(){
        let idxDate    = moment(this.startDate);
        let iend       = moment(this.endDate);
        let months     = [];
        iend.add(1,'jMonth');

        while(idxDate.jMonth() !== iend.jMonth()){
            if(idxDate.jYear() !== iend.jYear()){
                while(idxDate.jMonth() !== 11 ){
                    months.push(idxDate.format('jMMMM'));
                    idxDate.add(1,'jMonth');
                }
            }
            months.push(idxDate.format('jMMMM'));
            idxDate.add(1,'jMonth');
        }
        return months;

    }
    allData(){
        let idxDate    = moment(this.startDate);
        let iend       = moment(this.endDate);
        let count      = 0;
        let days       = [];
        let allMonths = this.allMonths();
        for(var i = 0; i < allMonths.length; i++){
            days.push({month:allMonths[i],days:new Array(),ofWeek: new Array()});
        }

        let diff = iend.diff(idxDate,'days');

        for(let i = 0; i <= diff; i++ ){
            let day = idxDate.jDate();
            if(idxDate.format("jYYYY,jMMMM") !== this.startDate.format("jYYYY,jMMMM")){
                if(day == 1){
                    count += 1;
                } 
            }
            days[count]['days'].push(idxDate.format('jD'));
            days[count]['ofWeek'].push(this.DayToString(idxDate.day()));
            idxDate.add(1,'day');     
        }
        
        return days;
    }  
    DayToString(num){
        switch (num) {
            case 0:
            return 'یکشنبه' ;
                break;
            case 1:
            return 'دوشنبه';
                break;
            case 2:
            return 'سه‌شنبه';
                break;
            case 3:
            return 'چهارشنبه';
                break;
            case 4:
            return 'پنجشنبه';
                break;
            case 5:
            return 'جمعه';
                break;
            case 6:
            return 'شنبه';
                break;

        }
    }
}
export default DateMethods