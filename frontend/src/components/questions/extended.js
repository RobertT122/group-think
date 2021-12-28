import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

export default class Extended extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { question } = this.props;
        return (
            <div className='extended-container'>
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
                        labels: []
                    }}    
                />
            </div>
        )
    }
}
