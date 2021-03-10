import React from 'react';
import {compose} from "redux";
import connect from "react-redux/lib/connect/connect";
import {getRates} from "../Redux/Exchange-reducer";

class ExchangeRatesContainer extends React.Component {

    componentDidMount() {
        this.props.getRates()
    }

    render() {
        return (
            <div>
                hi
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
    }
}

export default compose(connect(mapStateToProps, {
    getRates

})) (ExchangeRatesContainer);
