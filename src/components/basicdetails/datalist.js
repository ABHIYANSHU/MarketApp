import React, { Component } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class DataList extends React.Component {

    getData() {
    
        var url = 'https://api.mfapi.in/mf/'+this.props.match.params.id;
        
        axios.get(url).then((data) =>
          {
            const allRep = data.data.data;
            // console.log(allRep);
            this.setState({dataLst: allRep});
          });
      }

      getMaxMin() {
        var navPrice = [999999, 0]

        this.state.dataLst.map(item => {
          // console.log(item.nav);
          if (item.nav < navPrice[0])
            navPrice[0] = item.nav;
          
          if (item.nav > navPrice[1])
            navPrice[1] = item.nav;
        })

        console.log(navPrice);
        return navPrice;
      }

      componentDidMount() {
        this.getData();
        this.state.dataLst.length === 0 ? console.log('Wait') : this.setState({maxmin: this.getMaxMin()});
      }

    constructor(props){
        super(props);
        // console.log(props.match);
        this.state = {dataLst: [], maxmin: []}
    }

    render() {

        return(
          <div className="graph">
              <LineChart
              data={this.state.dataLst}
              width={1000}
              height={800}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[this.state.min, this.state.max]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="nav" stroke="red" strokeWidth={2} />
              </LineChart>
          </div>
        );
    }
}

export default DataList;