import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios';

class DataList extends React.Component {

    getData() {
    
        var url = 'https://api.mfapi.in/mf/'+this.props.match.params.id;
        
        axios.get(url).then((data) =>
          {
            const allRep = data.data.data;
            console.log(allRep);
            this.setState({dataLst: allRep});
          });
      }

      componentDidMount() {
        this.getData();
      }

    constructor(props){
        super(props);
        // console.log(props.match);
        this.state = {dataLst: []}
    }

    render() {
        return(
            <>
              {
                this.state.dataLst.map(item =>{
                  return <div>
                      <h2 key={item.date} >{item.date} {item.nav}</h2>
                    </div>
                })
              }
            </>
        );
    }
}

export default DataList;