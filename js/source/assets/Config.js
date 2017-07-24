import moment from 'moment-jalaali';
let m = moment();
class Config {
    constructor () {
        this.from = '1396/1/1';
        this.to   = m.format('jYYYY/jMM/jD');
        this.goal  = 12;
    }
}
export default Config