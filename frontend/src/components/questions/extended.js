import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { useState } from 'react';
import { useEffect } from 'react';

const Extended   = (props) => {
    let question = props.question
    // console.log(question._id)
    // useEffect(props.fetchQuestionAnswers(question._id), [])
    const renderLogic = () => {
        if (question.yes === 0 && question.no === 0) {
            setTimeout(props.reactivate, 1000) 
            return <p className="no-response">No Responses, please wait...</p>
        } else{
            return renderBasicPie(question)
            // return renderBasicBar(question)
        }
    }

    return (
        <div className='extended-container'>
            {renderLogic()}
            <button className='toggle-extended'> Extended Info</button>

        </div>
    )
}



const renderDetailed = () => {

}

export default Extended

const renderBasicPie = (question) => (
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
                    'rgba(170, 211, 224, 0.8)',
                    'rgba(120, 80, 100, 0.5)'
                ],
                borderColor: [
                    'rgba(97, 133, 144, 1)',
                    'rgba(120, 100, 100, 1)'
                ],
                hoverOffset: 4
            }]
        }}
    />
)

const renderBasicBar = (question) => (
    <Bar 
    data={{
        datasets: [{
            label: 'Yes',
            data: [question.yes],
            borderColor: 'rgba(80, 39, 245, 0.5)',
            backgroundColor: 'rgba(80, 39, 245, 0.2)',
            borderWidth: 1
        }, {
            label: 'No',
            data: [question.no],
            borderColor: 'rgba(54, 162, 235, 0.5)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
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

);