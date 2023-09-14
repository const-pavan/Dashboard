import React, { useMemo } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarGraphComponent = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
    },
  }

  const weekLabels = useMemo(() => ['Week 1', 'Week 2', 'Week 3', 'Week 4'], [])

  const chartData = useMemo(
    () => ({
      labels: weekLabels,
      datasets: [
        {
          label: 'Guest',
          data: weekLabels.map(() =>
            faker.datatype.number({ min: 0, max: 500 })
          ),
          backgroundColor: 'rgba(238, 132, 132)',
          barPercentage: 0.7,
          borderRadius: 5,
          categoryPercentage: 0.5,
        },
        {
          label: 'User',
          data: weekLabels.map(() =>
            faker.datatype.number({ min: 0, max: 500 })
          ),
          backgroundColor: 'rgba(152, 216, 158)',
          barPercentage: 0.7,
          borderRadius: 5,
          categoryPercentage: 0.5,
        },
      ],
    }),
    [weekLabels]
  )

  return (
    <div>
      <Bar
        className='p-10 h-[250px] bg-white'
        options={chartOptions}
        data={chartData}
      />
    </div>
  )
}

export default BarGraphComponent
