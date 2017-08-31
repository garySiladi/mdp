import React from 'react';
import { Line } from 'react-chartjs-2';

type Dataset = {
  +data: Array<Number>,
  +label: String,
  +borderColor: String,
}

type Props = {
  +data: {
    +labels: Array<Number>,
    +datasets: Array<Dataset>,
  },
  +options: Object, // TODO: change later
  +getRef: Function,
}

const maxData = 800;
const maximum = Math.log10(maxData);
const dummyData = Array(maxData).fill().map((_, i) => (
  Math.log10(i) / maximum
));

class Graph extends React.Component {
  static createGradient(chartInstance) {
    const gradient = chartInstance.ctx.createLinearGradient(0, 0, 0, chartInstance.height);
    gradient.addColorStop(0, 'rgba(156,206,249,1)');
    gradient.addColorStop(0.8, 'rgba(156,206,249,0)');
    return gradient;
  }

  constructor(props) {
    super(props);
    this.chart = null;
    this.state = {
      medianBackground: 'transparent',
    };
  }

  componentDidMount() {
    const chartInstance = this.chart.chart_instance;
    this.setState({ medianBackground: Graph.createGradient(chartInstance) }); // eslint-disable-line
  }

  render() {
    const data = {
      labels: Array(maxData).fill().map((_, i) => i),
      datasets: [
        {
          data: dummyData,
          label: 'Median',
          borderColor: '#9ccef9',
          backgroundColor: this.state.medianBackground,
          pointStyle: 'line',
          showLines: false,
        }, {
          data: dummyData.map(entry => (entry + (Math.random() * 0.2)) - 0.1),
          label: 'Cancur',
          borderColor: '#666',
          borderWidth: 2,
          fill: false,
          pointStyle: 'dash',
        },
      ],
    };
    const options = {
      title: {
        display: false,
        text: 'You got cancur',
      },
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          weight: 2,
          ticks: {
            maxTicksLimit: 7,
            fontColor: '#ccc',
            fontSize: 16,
          },
        }],
        yAxes: [{
          weight: 10,
          ticks: {
            fontColor: '#ccc',
            fontSize: 16,
          },
        }],
      },
    };
    return (
      <GraphView
        data={data}
        options={options}
        getRef={ref => { this.chart = ref; }}
      />
    );
  }
}

const GraphView = ({ data, options, getRef }: Props) => (
  <Line ref={getRef} data={data} options={options} width={380} height={250} />
);

export default Graph;
