import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';

import './App.css';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface CountryStat {
  name: {
    de: string;
    en: string;
    es: string;
    fr: string;
    ja: string;
    "pt-BR": string;
    ru: string;
    "zh-CN": string;
  };
  iso: string;
  count: number;
  share: number;
  capacity: string;
  unit: string;
}

function App() {
  const [countries, setCountries] = useState<CountryStat[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then(response => response.json())
      .then((data: CountryStat[]) => setCountries(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  const backgroundColors = [
  '#ffadad',  '#ffd6a5',  '#fdffb6',  '#caffbf',  '#9bf6ff',  '#a0c4ff',  '#bdb2ff', '#ffc6ff',  '#809bce',  '#95b8d1',  '#b8e0d4',  '#d6eadf',  '#eac4d5', '#fcedf2', '#e8eef1'
];

  const pieData = {
    labels: countries.slice(0, 14).map((data) => data.name.en).concat('Others'),
    datasets: [
      {
        data: countries.slice(0, 14).map((data) => data.count)
          .concat(countries.slice(14).reduce((acc, curr) => acc + curr.count, 0)),
        label: 'Nodes',
        backgroundColor: backgroundColors,
        borderColor: 'transparent',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Lightning Nodes Per Country</h1>
      <Doughnut data={pieData} options={{ 
        plugins: { 
          legend: { display: false }, 
          datalabels: {
            color: '#FFF',
            font: {
              weight: 'bold',
            },
            display: 'auto',
            anchor: 'end',
            align: 'end',
            offset: 20,
            formatter: (_, context) => {
              return context.chart.data.labels?.[context.dataIndex];
            },
          }
        }, 
        layout: {
          padding: 120
        } 
      }} />
      <div className='country-list'>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Share</th>
              <th>Nodes</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
              <tr key={country.iso}>
                <td>{index + 1}</td>
                <td>{country.name.en}</td>
                <td>{country.share}%</td>
                <td>{country.count}</td>
                <td className='capacity'>{country.capacity} <span className='unit'>{country.unit}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;