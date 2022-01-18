import React, { Component } from 'react';
import { Bar, Pie, Radar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { useState } from 'react';
import { useEffect } from 'react';

const Extended   = ({question, jobStats, ...props}) => {
    let [chart, setChart] = useState("pie")

    useEffect(() => props.fetchQuestionAnswers(question._id), [])

    const chartButton = name => <button onClick ={() => setChart(name)} className="chartButton">{name[0].toUpperCase()  + name.slice(1, name.length)}</button>

    const renderBasicPie = () => (
        <div className='pie-chart-container'>
        <Pie
            data={{
                labels: [
                    'Yes',
                    'No',
                    ],
                datasets: [{
                    label: '',
                    data: [question.yes, question.no],
                    backgroundColor: [
                        'rgba(128, 183, 222, 0.44)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(128, 183, 222, 0.44)',
                        'rgb(255, 99, 132)'
                    ],
                    hoverOffset: 4
                }]
            }}
        />
        {chartButton('bar')}
        {chartButton('radar')}

        </div>
    )

    const renderBasicBar = () => (
        <div className='bar-chart-container'>
            <Bar 
            data={{
                datasets: [{
                    label: 'Yes',
                    data: [question.yes],
                    borderColor: 'rgba(54, 162, 235, 0.5)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderWidth: 1
                }, {
                    label: 'No',
                    data: [question.no],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 1
                }],
                labels: ['']
            }}
            options= {{
                        scale: {
                            ticks: {
                                precision: 0
                            }
                        }
                        }}
        />
        {chartButton('pie')}
        {chartButton('radar')}
        </div>
    
    );

    // console.log(Object.keys(jobStats))
    // console.log(Object.values(jobStats).map(obj => obj['no']))

    const renderRadar = () => (
        <div className='radar-chart-container'>
            <Radar
                 data={{
                     labels: Object.keys(jobStats),
                     datasets: [{
                         label: 'No',
                         data: Object.values(jobStats).map(obj => obj['no']),
                         fill: true,
                         backgroundColor: 'rgba(255, 99, 132, 0.2)',
                         borderColor: 'rgb(255, 99, 132)',
                         pointBackgroundColor: 'rgb(255, 99, 132)',
                         pointBorderColor: '#fff',
                         pointHoverBackgroundColor: '#fff',
                         pointHoverBorderColor: 'rgb(255, 99, 132)'
                    },{
                        label: 'Yes',
                        data: Object.values(jobStats).map(obj => obj['yes']),
                        fill: true,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        pointBackgroundColor: 'rgb(54, 162, 235)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)'
                    }]
                 }}
                 options= {{
                   elements: {
                     line: {
                       borderWidth: 3
                     }
                   },
                   scale: {
                            ticks: {
                                precision: 0
                            }
                        }
                }}
            />
            {chartButton('pie')}
            {chartButton('bar')}
        </div>
    )

    const renderChart = () => {
        if (question.yes === 0 && question.no === 0) {
            setTimeout(props.reactivate, 1000) 
            return <p className="no-response">No Responses, please wait...</p>
        } else{
            switch (chart){
                case 'pie':
                    return (
                        renderBasicPie()
                    )
                case 'radar':
                    if(Object.keys(jobStats).length > 2){
                        return (renderRadar())
                    } else {
                        return(
                        <div>
                            <p>Radar Requires at least 3 different job types</p>
                            {chartButton('pie')}
                            {chartButton('bar')}
                        </div>
                        )
                    }
                case 'bar':
                    return (
                        renderBasicBar()
                    )
                default:
                    return <></>
            }
            
        }
    }

    return (
        <div className='extended-container'>
            {renderChart()}
        </div>
    )
}


export default Extended



