import React from 'react';


class Header extends React.Component {
    render () {
        return(
        <div id="Head">
            <header>
                 <h2>{this.props.month} ماه</h2> 
                <div className="leftSections">
                <div className="setting">
                    <span></span>
                </div>
                <div className="monthNavigate">
                    <span className="next"></span>
                    <span className="previous"></span>
                </div>
                </div>
            </header>
            <span className="hr"></span>

        </div>
        );
    }
}
export default Header;