import React from 'react'
import ReactApexChart from 'react-apexcharts'

const PieChart = ({ title }) => {

  const series = [60, 25, 15]
  const options = {
    chart: {
      width: '100%',
      type: 'pie',
    },
    labels: ["Amazon"],
    theme: {
      monochrome: {
        enabled: true
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5
        }
      }
    },
    dataLabels: {
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex]
        return [name, val.toFixed(1) + '%']
      }
    },
    legend: {
      show: false
    }
  }

  return (
    <div className='bg-white rounded-xl p-2 my-2 shadow'>
      <div className='text-uppercase h3-ma text-ma-primary'>{title}</div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="pie" />
      </div>
    </div>
  )
}

export default PieChart