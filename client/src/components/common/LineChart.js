import React from 'react'
import ReactApexChart from 'react-apexcharts'

const LineChart = () => {

  const series = [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 66]
  }]

  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15'],
    }
  }

  return (
    <div className='bg-white rounded-xl p-2 my-2 shadow'>
      <div className='p-3'>
        <div className='text-ma-primary h4-ma'>Sales</div>
        <div className='text-ma-detail text-ma-secondary'>Gross sales from Jan 6 to Jan 15</div>
      </div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="line" height={350} />
      </div>
    </div>
  )
}

export default LineChart