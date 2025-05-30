'use client';

import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default function Charts() {
 const optionsRisco = {
  series: [{
    data: [25, 2, 7, 17]
  }],
  chart: {
    height: 350,
    type: 'bar',
  },
   colors: ['#22c55e', '#facc15', '#ef4444', '#b91c1c'], 
   plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff']
    }
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ['Baixo Risco', 'Médio Risco', 'Alto Risco', 'Muito Alto Risco'],
    labels: {
      style: {
        colors: ['#22c55e', '#facc15', '#ef4444', '#b91c1c'],
        fontSize: '14px'
      }
    }
  }
}  
  const optionsGeral = {
   series: [26,174],
          chart: {
          width: 100,
          type: 'pie',
        },
        labels: ['Possiveis Canceladores', 'Não Canceladores'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: 'center'
            }
          }
        }]
  };

  return (
    <div>
      <div className="bg-gray-900 rounded-xl shadow p-2 my-10 w-200" >
        <h2 className="text-xl font-semibold mb-4">Retenção Geral</h2>
        <ReactApexChart options={optionsGeral} series={optionsGeral.series} type="pie" height={250} />

      </div>
      <div className="bg-gray-900 rounded-xl shadow p-4 w-200" >
        <h2 className="text-xl font-semibold mb-4">Retenção por Risco</h2>
        <ReactApexChart options={optionsRisco} series={optionsRisco.series} type="bar" height={250} />
      </div>

    </div>
  );
}
