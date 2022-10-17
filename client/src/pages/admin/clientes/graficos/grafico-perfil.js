import React  from 'react';
import ReactDOM from 'react-dom';
import Chart  from 'react-apexcharts';
import api from '../../../../services/api';
export default class ApexChart extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      series:{},
      options:{}  
    } 
  }
  async componentDidMount() {
   await api.get('/api/clientes.grupoOS/ios')
    .then(res => {
        const perfil = res.data;
        let sistemaop = [];
        let totdisp = [];
        perfil.forEach(element => {
          sistemaop.push(element._id.os);
          totdisp.push(element.total);
          // console.log(sistemaop);
            //  console.log(totdisp);   
        });
        this.setState({ 
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories:sistemaop,  
            } 
          },
          series: [
            {       
              name: "Total Dispositivos",
              data: totdisp,
            }
          ]
          
         });
        });
      }
      render() {
        console.log('State1: ', this.state.series.name);
      return (
         <div className="app">
        <React.Fragment> 
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
         </React.Fragment>
      </div>
       
    );
  };
};
