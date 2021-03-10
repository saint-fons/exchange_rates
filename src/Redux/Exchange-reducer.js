import {locationInfoAPI} from "../API/API";


const SET_RATES = 'SET_RATES';


let initialState = {
    rates: {
        AUD: "",
        AZN: "",
        GBP: "",
        AMD: "",
        BYN: "",
        BGN: "",
        BRL: "",
        HUF: "",
        HKD: "",
        DKK: "",
        USD: "",
        EUR: "",
        INR: "",
        KZT: "",
        CAD: "",
        KGS: "",
        CNY: "",
        MDL: "",
        NOK: "",
        PLN: "",
        RON: "",
        XDR: "",
        SGD: "",
        TJS: "",
        TRY: "",
        TMT: "",
        UZS: "",
        UAH: "",
        CZK: "",
        SEK: "",
        CHF: "",
        ZAR: "",
        KRW: "",
        JPY: ""
    }
}


const exchangeReducer = (
    state = initialState,
    action) => {
    let stateCopy

    switch (action.type) {
        case SET_RATES: {
            return {
                ...state,
                ...action.data.rates
            }
        }
        default:
            return state
    }
}



export const setRates = (data) =>
    ({type: SET_RATES, data})


export const getRates= () => { /*ThunkCreator*/
    return (dispatch) => {
        locationInfoAPI.getRates()
            .then(data => {
                dispatch(setRates(data.data))
            })
    }
}

export default exchangeReducer
