import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import FetchData from '../fetchdata/fetchdata';
import DataList from './datalist';

class BasicDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isDataPage: false
        }
    }

    setDataPage(){
        this.setState({isDataPage: !this.state.isDataPage});
    }


    render() {
        const metaValue = this.props.data.meta;
        const dataValue = this.props.data.data;

        //console.log(dataValue);

        return(
            <div className="card" >
                <h1>{ metaValue.fund_house }</h1>
                <h2>{ metaValue.scheme_type }</h2>
                <h3>{ metaValue.scheme_category }</h3>
                <h4>{ metaValue.scheme_name }</h4>
                <h5>{ metaValue.scheme_code }</h5>
                <Link to={"/data/"+metaValue.scheme_code}><button>Data</button></Link>
            </div>
        )
    }
}

export default BasicDetails;