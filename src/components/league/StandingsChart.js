import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

function StandingsChart({ playerPoints, playerNames, league }){
    const [chartData, setChartData] = useState({})

    function chart(){
        setChartData( 
            {
                labels: playerNames,
                datasets: [
                    {
                        label: 'Points',
                        data:  playerPoints,
                        backgroundColor: ["#ff9936", "#9e36ff", "#2085d8", "#acff52" ,"#fff000", "#fc00ff", ],
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        barPercentage: 0.9,
                        barThickness: 100,
                        maxBarThickness: 100,
                        minBarLength: 2,
                    }
                ]
        })
    }

    useEffect(() => {
        chart()
    }, [playerPoints, playerNames])

    return(
        <div className="chart">
            <Bar 
                data={chartData} 
                options={{
                    responsive: true,
                    title: { text: league.name, display: true },
                    scales: {
                        yAxes: [{
                          scaleLabel: {
                            display: true,
                            labelString: 'Points'
                          }
                        }],
                        xAxes: [{
                            scaleLabel: {
                              display: true,
                              labelString: 'Player'
                            }
                          }]
                      }     
                }} 
                
            />
        </div>
    );

}

export default StandingsChart