import React from 'react'
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useTheme } from '../Context/ThemeContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Graph = ({graphData}) => {
    const {theme} = useTheme();
  return (
    <div>
        <Line 
            data={
                {
                    labels: graphData.map(i=>i[0]+1),
                    datasets: [
                        {
                            data: graphData.map(i=>i[1]),
                            label: 'random data',
                            borderColor: theme.title
                        }
                        // {
                        //     data: [10,9,8,7,6],
                        //     label: 'random data2',
                        //     borderColor: 'green'
                        // }
                    ]
                }
            }   
        />
    </div>
  )
}

export default Graph