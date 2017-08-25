import { LineChart } from 'react-chartjs';

type Dataset = {
  +data: Array<Number>,
  +label: String,
  +borderColor: String,
}

type Props = {
  +data: {
    +labels: Array<Number>,
    +datasets: Array<Dataset>,
  }
  +options: Object // TODO: change later
}

const maxData = 800;
const maximum = Math.log(maxData + 1);
const dummyData = Array(maxData).fill().map((_, i) => (
  Math.round((Math.log(i + 1) + (Math.random() * 0.2)) * 100) / 100
));

const Graph = () => {
  const data = {
    labels: [0, 200, 400, 600, 800],
    datasets: [{
      data: dummyData,
      label: 'Some label',
      borderColor: '#9ccef9',
    }],
  };
  const options = {
    title: {
      display: true,
      text: 'You got cancur',
    },
  };
  return <GraphView data={data} />
}

const GraphView = ({ data, options }: Props) => (
  <LineChart data={data} options={options} width="600" height="250"/>
);

export default Graph;
