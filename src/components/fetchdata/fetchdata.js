import React from 'react';
import axios from 'axios';
import BasicDetails from '../basicdetails/basicdetails';

class FetchData extends React.Component {

  getData() {
    const final = 112249;
    const initial = 112200;

    var url = 'https://api.mfapi.in/mf/';

    var res = new Array(final - initial);

    for (var i = initial; i < final; i++){
      res[i-112200] = axios.get(url+i.toString());
    }

    axios.all(res).then(
      axios.spread((...alldata) => {

        const tp = alldata;
        this.setState({data: tp});

        /*
        console.log('----------------------------');
        console.log(tp);
        console.log('----------------------------');
        */
      }
    ))
  }

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    this.getData();
  }

  render() {

    // this.state.data.length === 0 ? console.log('no data') : console.log(this.state.data);

    return (
        <div className="cards">
            {
            this.state.data.length === 0 ? <em>Loading...</em> : this.state.data.map(item => {
              const fin = item.data.data.length === 0 ? 
              <></> 
              :
              <BasicDetails key={ item.data.meta.scheme_code } data={ item.data } />
              return fin;
            })
            }
        </div>
    );
  }

}

export default FetchData;