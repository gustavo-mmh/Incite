import React, { Component } from 'react';
// import {useStyles} from '../style';
import api from '../../api';
// import MenuLat from '../MenuLat';
// import Chart from "react-apexcharts";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
// },
// }));

export default class Tempo extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     options: {
  //       chart: {
  //         id: "basic-bar"
  //       },
  //       xaxis: {
  //         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  //       }
  //     },
  //     series: [
  //       {
  //         name: "series-1",
  //         data: [30, 40, 45, 50, 49, 60, 70, 91]
  //       }
  //     ]
  //   };
  // }
  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('passaport');
console.log(response.data);
    this.setState({ filmes: response.data });
  }

  
  render() {
    const { filmes } = this.state;

    return (
      <div>
        <h1>Listar os Filmes</h1>
        {filmes.map(filme => (
          <li key={filme.show.id}>
            <h2>
              <strong>Título: </strong>
              {filme.show.name}
            </h2>
            <p>
              {filme.show.url}
            </p>

          </li>
        ))}
      </div>
    );
    //      <div className="app">
    //     <React.Fragment> 
    //     <div className="row">
    //       <div className="mixed-chart">
    //         <Chart
    //           options={this.state.options}
    //           series={this.state.series}
    //           type="bar"
    //           width="500"
    //         />
    //       </div>
    //     </div>
    //      </React.Fragment>
    //   </div>
       
    //    </div>
    // );
  };
};

